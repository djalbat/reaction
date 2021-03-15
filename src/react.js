"use strict";

import Element from "./element";
import ReactClass from "./reactClass";
import ReactComponent from "./reactComponent";
import ReactClassElement from "./element/react/class";
import ReactFunctionElement from "./element/react/function";
import ReactComponentElement from "./element/react/component";
import VirtualDOMTextElement from "./element/virtualDOMNode/textElement";
import VirtualDOMHTMLElement from "./element/virtualDOMNode/element/html";
import VirtualDOMSVGElement from "./element/virtualDOMNode/element/svg";

import { flatten } from "./utilities/array";
import { isSVGTagName } from "./utilities/name";

function createClass(object) {
  return ReactClass.create(object);
}

function createElement(firstArgument, properties, ...remainingArguments) {
  let element = null;

  if (firstArgument !== undefined) {
    const children = childrenFromRemainingArguments(remainingArguments),
          props = Object.assign({}, properties, {
            children
          });

    if (false) {
      ///
    } else if (typeof firstArgument === "string") {
      const tagName = firstArgument,  ///
            virtualDOMElement = isSVGTagName(tagName) ?
                                  new VirtualDOMSVGElement(tagName, props) :
                                    new VirtualDOMHTMLElement(tagName, props);

      element = virtualDOMElement ///
    } else if (firstArgument instanceof ReactClass) {
      const reactClass = firstArgument, ///
            reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement;  ///

      const { mixins } = reactClass;

      assignMixins(mixins, element);
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      const ReactComponent = firstArgument,  ///
            reactComponent = new ReactComponent(),
            reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;  ///

      assignReactComponentMixins(ReactComponent, element);
    } else if (typeof firstArgument === "function") {
      const reactFunction = firstArgument,  ///
            reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement; ///
    }
  }

  return element;
}

const Component = ReactComponent, ///
      React = {
        Component,
        createClass,
        createElement
      };

export default React;

function childrenFromRemainingArguments(remainingArguments) {
  remainingArguments = flatten(remainingArguments); ///

  const children = remainingArguments.map((childArgument) => {
    let child;

    if (isSubclassOf(childArgument.constructor, Element)) { ///
      child = childArgument;  ///
    } else {
      const text = childArgument, ///
            virtualDOMTextElement = new VirtualDOMTextElement(text);

      child = virtualDOMTextElement;
    }

    return child;
  });

  return children;
}

function assignReactComponentMixins(reactComponent, element) {
  const { mixins } = reactComponent;

  reactComponent = Object.getPrototypeOf(reactComponent); ///

  if (reactComponent !== ReactComponent) {
    assignReactComponentMixins(reactComponent, element);
  }

  assignMixins(mixins, element);
}

function assignMixins(mixins, element) {
  if (mixins) {
    mixins.forEach((mixin) => {
      const { name } = mixin;

      element[name] = mixin.bind(element);
    });
  }
}

function isSubclassOf(argument, Class) {
  let subclass = false;

  if (argument.name === Class.name) { ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
