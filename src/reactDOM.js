"use strict";

import ContainerElement from "./virtualDOM/container";

export default class ReactDOM {
  static render(element, parentDOMElement) {
    const parent = ContainerElement.fromDOMElement(parentDOMElement),
          reference = null,
          context = {};

    element.mount(parent, reference, context);
  }
}
