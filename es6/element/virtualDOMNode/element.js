"use strict";

import VirtualDOMNode from "../virtualDOMNode";

import { setAttribute,
         getAttribute,
         clearAttribute,
         addAttribute,
         removeAttribute,
         hasAttribute,
         setClass,
         addClass,
         removeClass,
         toggleClass,
         hasClass,
         hasClasses,
         clearClasses,
         getTagName,
         setStyle } from "../../mixins/virtualDOMElement";

export default class VirtualDOMElement extends VirtualDOMNode {
  setAttribute = setAttribute;
  getAttribute = getAttribute;
  clearAttribute = clearAttribute;
  addAttribute = addAttribute;
  removeAttribute = removeAttribute;
  hasAttribute = hasAttribute;
  setClass = setClass;
  addClass = addClass;
  removeClass = removeClass;
  toggleClass = toggleClass;
  hasClass = hasClass;
  hasClasses = hasClasses;
  clearClasses = clearClasses;
  getTagName = getTagName;
  setStyle = setStyle;

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
