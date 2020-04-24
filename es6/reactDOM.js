"use strict";

import VirtualDOMNode from "./element/virtualDOMNode";

export default class ReactDOM {
  static render(element, parentDOMElement) {
    const parent = VirtualDOMNode.fromDOMElement(parentDOMElement),
          reference = null,
          context = {};

    element.mount(parent, reference, context);
  }
}
