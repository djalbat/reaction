"use strict";

import ReactClass from "./reactClass";
import ReactComponent from "./reactComponent";
import VirtualDOMElement from "./virtualDOMElement";

import SVGElement from "./virtualDOM/container/element/svg";
import TextElement from "./virtualDOM/container/textElement";
import HTMLElement from "./virtualDOM/container/element/html";
import ReactClassElement from "./virtualDOM/react/class";
import ReactFunctionElement from "./virtualDOM/react/function";

import { flatten } from "./utilities/array";
import { isSVGTagName } from "./utilities/name";
import { STRING, FUNCTION } from "./constants";

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
    } else if (typeof firstArgument === STRING) {
      const tagName = firstArgument;  ///

      element = isSVGTagName(tagName) ?
                  new SVGElement(tagName, props) :
                    new HTMLElement(tagName, props);
    } else if (firstArgument instanceof ReactClass) {
      const reactClass = firstArgument, ///
            reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement;  ///

      const { mixins } = reactClass;

      assignMixins(mixins, element);
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      const ReactComponentSubClass = firstArgument,  ///
            reactComponent = new ReactComponentSubClass(props);

      element = reactComponent; ///

      assignReactComponentMixins(ReactComponentSubClass, element);
    } else if (typeof firstArgument === FUNCTION) {
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

  const children = [];

  remainingArguments.forEach((childArgument) => {
    let child;

    if (childArgument) {  ///
      if (isSubclassOf(childArgument.constructor, VirtualDOMElement)) { ///
        child = childArgument;  ///
      } else {
        const text = childArgument, ///
              textElement = new TextElement(text);

        child = textElement;
      }

      children.push(child);
    }
  });

  return children;
}

function assignReactComponentMixins(ReactComponentSubClass, element) {
  const { mixins } = ReactComponentSubClass;

  const ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass); ///

  if (ReactComponentSubClassPrototype !== ReactComponent) {
    ReactComponentSubClass = ReactComponentSubClassPrototype; ///

    assignReactComponentMixins(ReactComponentSubClass, element);
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
