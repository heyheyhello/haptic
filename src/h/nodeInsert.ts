import { api } from './index.js';

type Frag = { _startMark: Text }

/** Insert a node into an existing node */
const insert = (el: Node, value: unknown, endMark?: Node, current?: Node | Frag, startNode?: ChildNode | null) => {
  // This is needed if the el is a DocumentFragment initially.
  el = (endMark && endMark.parentNode) || el;

  // Save startNode of current. In clear() endMark.previousSibling is not always
  // accurate if content gets pulled before clearing.
  startNode = (startNode || current instanceof Node && current) as ChildNode | null;

  // @ts-expect-error Empty if body
  if (value === current);
  else if (
    (!current || typeof current === 'string')
    // @ts-ignore Doesn't like `value += ''`
    // eslint-disable-next-line no-implicit-coercion
    && (typeof value === 'string' || (typeof value === 'number' && (value += '')))
  ) {
    // Block optimized for string insertion
    // eslint-disable-next-line eqeqeq
    if ((current as unknown) == null || !el.firstChild) {
      if (endMark) {
        api.add(el, value, endMark);
      } else {
        // Using textContent is a lot faster than append -> createTextNode
        el.textContent = value as string; // Because value += ''
      }
    } else {
      if (endMark) {
        // @ts-expect-error Illegal `data` property
        (endMark.previousSibling || el.lastChild).data = value;
      } else {
        // @ts-expect-error Illegal `data` property
        el.firstChild.data = value;
      }
    }
    // @ts-expect-error Reusing the variable but doesn't match the signature
    current = value;
  }
  else if (typeof value === 'function') {
    api.add(el, document.createComment(`signal-sub-${value.name}`), endMark);
    api.subscribe(() => {
      current = api.insert(el, (value as () => unknown).call({ el, endMark }), endMark, current, startNode);
    });
  }
  else {
    // Block for nodes, fragments, Arrays, non-stringables and node -> stringable.
    if (endMark) {
      // `current` can't be `0`, it's coerced to a string in insert.
      if (current) {
        if (!startNode) {
          // Support fragments
          startNode = (
            (current as { _startMark?: Text })._startMark
              && (current as Frag)._startMark.nextSibling
          ) || endMark.previousSibling;
        }
        api.rm(el, startNode, endMark);
      }
    } else {
      el.textContent = '';
    }
    // TODO: Bundle size...
    current = undefined;

    if (value && value !== true) {
      current = api.add(el, value as string | number, endMark);
    }
  }
  return current;
};

export { insert };
