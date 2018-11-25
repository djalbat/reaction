'use strict';

const Element = require('./element'),
      ReactClass = require('./reactClass'),
      ReactComponent = require('./reactComponent'),
      arrayUtilities = require('./utilities/array'),
      ReactClassElement = require('./element/react/class'),
      ReactFunctionElement = require('./element/react/function'),
      ReactComponentElement = require('./element/react/component'),
      VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
      VirtualDOMHTMLElement = require('./element/virtualDOMNode/element/html');

const { flatten } = arrayUtilities;

function createClass(object) {
  return ReactClass.create(object);
}

function createElement(firstArgument, properties, ...childArguments) {
  let element = null;

  if (firstArgument !== undefined) {
    const children = childrenFromChildArguments(childArguments),
          props = Object.assign({}, properties, {
            children
          });

    if (false) {
      ///
    } else if (typeof firstArgument === 'string') {
      const tagName = firstArgument,  ///
            virtualDOMElement = new VirtualDOMHTMLElement(tagName, props);

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
    } else if (typeof firstArgument === 'function') {
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

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = flatten(childArguments); ///

  const children = childArguments.map(function(childArgument) {
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
    mixins.forEach(function(mixin) {
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
