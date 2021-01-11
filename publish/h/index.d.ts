import type { GenericEventAttrs, HTMLAttrs, SVGAttrs, HTMLElements, SVGElements } from '../jsx';

type El = Element | Node | DocumentFragment | undefined;
type Component = (...args: unknown[]) => El;
declare function h(tag?: string | [] | Component, props?: unknown, ...children: unknown[]): El;
declare namespace h {
    namespace JSX {
        type Element = HTMLElement | SVGElement | DocumentFragment;
        interface ElementAttributesProperty {
            props: unknown;
        }
        interface ElementChildrenAttribute {
            children: unknown;
        }
        interface IntrinsicAttributes {
            children?: never;
        }
        type DOMAttributes<Target extends EventTarget>
            = GenericEventAttrs<Target>
            & { children?: unknown; };
        type HTMLAttributes<Target extends EventTarget>
            = HTMLAttrs
            & DOMAttributes<Target>;
        type SVGAttributes<Target extends EventTarget>
            = SVGAttrs
            & HTMLAttributes<Target>;
        type IntrinsicElements =
            & { [El in keyof HTMLElements]: HTMLAttributes<HTMLElements[El]>; }
            & { [El in keyof SVGElements]: SVGAttributes<SVGElements[El]>; };
    }
}
type Frag = { _startMark: Text }
declare const api: {
    ns: string;
    h: typeof h;
    add: (parent: Node, value: unknown, endMark?: Node) => Node | Frag;
    insert: (el: Node, value: unknown, endMark?: Node, current?: Node | Frag, startNode?: ChildNode | null) => Node | Frag | undefined;
    property: (el: Node, value: unknown, name: string | null, isAttr?: boolean, isCss?: boolean) => void;
    rm: (parent: Node, startNode: ChildNode | null, endMark: Node) => void;
    rx: (_: (...args: unknown[]) => unknown) => unknown;
};

export { h, api };
