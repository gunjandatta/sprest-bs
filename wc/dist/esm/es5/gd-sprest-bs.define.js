// GdSprestBs: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './gd-sprest-bs.core.js';
import {
  Button
} from './gd-sprest-bs.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    Button
  ], opts);
}