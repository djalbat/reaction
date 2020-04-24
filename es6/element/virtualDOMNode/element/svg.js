"use strict";

import VirtualDOMElement from "../element";

import { isSVGAttributeName } from "../../../utilities/name";

class VirtualDOMSVGElement extends VirtualDOMElement {
  constructor(tagName, props) {
    const domElement = document.createElementNS("http://www.w3.org/2000/svg", tagName);

    super(props, domElement);
  }

  isAttributeName(name) {
    return isSVGAttributeName(name);
  }
}

module.exports = VirtualDOMSVGElement;
