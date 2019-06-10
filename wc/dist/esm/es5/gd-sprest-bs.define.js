
// GdSprestBs: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './gd-sprest-bs.core.js';
import { COMPONENTS } from './gd-sprest-bs.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
