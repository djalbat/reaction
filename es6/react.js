'use strict';

const Element = require('./element'),
      ReactClass = require('./reactClass'),
      ReactComponent = require('./reactComponent'),
      ReactClassElement = require('./element/react/class'),
      ReactFunctionElement = require('./element/react/function'),
      ReactComponentElement = require('./element/react/component'),
      VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
      VirtualDOMElement = require('./element/virtualDOMNode/element'),
      mixinUtilities = require('./utilities/mixin');

const { assign } = mixinUtilities;

function createClass(object) {
  return ReactClass.fromObject(object);
}

function createElement(firstArgument, properties, ...childArguments) {
  let element = null;

  if (firstArgument !== undefined) {
    const children = childrenFromChildArguments(childArguments),
          props = Object.assign({}, properties, {
            children: children
          });

    if (false) {

    } else if (typeof firstArgument === 'string') {
      const tagName = firstArgument,  ///
            virtualDOMElement = new VirtualDOMElement(tagName, props);

      element = virtualDOMElement
    } else if (firstArgument instanceof ReactClass) {
      const reactClass = firstArgument, ///
            reactClassElement = new ReactClassElement(reactClass, props);

      element = reactClassElement;

      const { mixins } = reactClass;

      if (mixins) {
        assign(element, mixins);
      }
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      const ReactComponent = firstArgument,  ///
            reactComponent = new ReactComponent(),
            reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;

      const { mixins } = ReactComponent;

      if (mixins) {
        assign(element, mixins);
      }
    } else if (typeof firstArgument === 'function') {
      const reactFunction = firstArgument,  ///
            reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement;
    }
  }

  return element;
}

const Component = ReactComponent, ///
      React = {
        Component: Component,
        createClass: createClass,
        createElement: createElement
      };

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function(childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  const children = childArguments.map(function(childArgument) {
    let child;

    if (childArgument instanceof Element) {
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

function isSubclassOf(argument, Class) {
  let typeOf = false;

  if (argument === Class) {   ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
