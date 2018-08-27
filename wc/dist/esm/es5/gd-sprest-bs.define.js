// GdSprestBs: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './gd-sprest-bs.core.js';
import {
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card
} from './gd-sprest-bs.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    Alert,
    Badge,
    Breadcrumb,
    Button,
    ButtonGroup,
    Card
  ], opts);
}