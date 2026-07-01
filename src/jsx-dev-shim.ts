// Shim: SSR build emits jsxDEV calls (React dev transform) but React production
// bundle exports jsxDEV = void 0. Remap to production jsx/jsxs so SSR works.
import { jsx, jsxs, Fragment } from "react/jsx-runtime";

export { Fragment };

export function jsxDEV(
  type: unknown,
  props: unknown,
  key: unknown,
  isStaticChildren: boolean,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _source?: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _self?: unknown,
) {
  return isStaticChildren
    ? jsxs(type as Parameters<typeof jsxs>[0], props as Parameters<typeof jsxs>[1], key as Parameters<typeof jsxs>[2])
    : jsx(type as Parameters<typeof jsx>[0], props as Parameters<typeof jsx>[1], key as Parameters<typeof jsx>[2]);
}
