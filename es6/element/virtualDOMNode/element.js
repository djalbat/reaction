"use strict";

import VirtualDOMNode from "../virtualDOMNode";

import virtualDOMElementMixins from "../../mixins/virtualDOMElement";

class VirtualDOMElement extends VirtualDOMNode {
  mount(parent, reference, context) {
    super.mount(parent, reference);

    const childParent = this,
          childReference = null,
          childContext = context,
          children = this.getChildren();

    children.forEach((child) => child.mount(childParent, childReference, childContext));

    this.applyProps();
  }

  unmount(context) {
    const childContext = context,
          children = this.getChildren();

    children.forEach((child) => child.unmount(childContext));

    super.unmount();
  }

  applyProps() {
    const names = Object.keys(this.props);

    names.forEach((name) => {
      const value = this.props[name];

      if (false) {

      } else if (this.isHandlerName(name)) {
        this.setHandler(name, value);
      } else if (this.isAttributeName(name)) {
        this.setAttribute(name, value);
      } else if (name === "ref") {
        const callback = value; ///
        
        callback(this.domElement);
      }
    });
  }

  setHandler(name, value) {
    const eventType = name.substr(2).toLowerCase(), ///
          handler = value;  ///

    this.domElement.addEventListener(eventType,  handler);
  }

	isHandlerName(name) {
		return name.match(/^on/);
	}
}

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

export default VirtualDOMElement;
