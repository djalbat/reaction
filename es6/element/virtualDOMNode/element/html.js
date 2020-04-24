"use strict";

import VirtualDOMElement from "../element";

import { isHTMLAttributeName } from "../../../utilities/name";

class VirtualDOMHTMLElement extends VirtualDOMElement {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

    super(props, domElement);
  }

  isAttributeName(name) {
    return isHTMLAttributeName(name);
  }
}

module.exports = VirtualDOMHTMLElement;

