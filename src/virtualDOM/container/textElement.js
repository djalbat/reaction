"use strict";

import ContainerElement from "../container";

export default class TextElement extends ContainerElement {
  constructor(text) {
    const domElement = document.createTextNode(text),
          children = [],
          props = {
            children
          };

    super(props, domElement);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);
  }
  
  unmount(context) {
    super.unmount();
  }

  getText() {
    const nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

    return text;
  }

  setText(text) {
    const nodeValue = text; ///

    this.domElement.nodeValue = nodeValue;
  }
}
