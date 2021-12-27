"use strict";

import Element from "../element";

import { isHTMLAttributeName } from "../../../utilities/name";

export default class HTMLElement extends Element {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

    super(props, domElement);
  }

  isAttributeName(name) {
    return isHTMLAttributeName(name);
  }
}
