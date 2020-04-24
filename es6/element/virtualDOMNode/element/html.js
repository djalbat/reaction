"use strict";

const nameUtilities = require("../../../utilities/name"),
      VirtualDOMElement = require("../element");

const { isHTMLAttributeName } = nameUtilities;

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

