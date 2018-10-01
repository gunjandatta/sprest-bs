
// GdSprestBs: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './gd-sprest-bs.core.js';
import {
  Accordion,
  Alert,
  Badge,
  Breadcrumb,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Carousel,
  Collapse,
  Dropdown,
  Form,
  InputGroup,
  Jumbotron,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  Pagination,
  Panel,
  Popover,
  Progress,
  ProgressGroup,
  Toolbar,
  Tooltip
} from './gd-sprest-bs.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Accordion,
    Alert,
    Badge,
    Breadcrumb,
    Button,
    ButtonGroup,
    Card,
    CardGroup,
    Carousel,
    Collapse,
    Dropdown,
    Form,
    InputGroup,
    Jumbotron,
    ListGroup,
    Modal,
    Nav,
    Navbar,
    Pagination,
    Panel,
    Popover,
    Progress,
    ProgressGroup,
    Toolbar,
    Tooltip
  ], opts);
}
