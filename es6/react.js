'use strict';

const ReactComponent = require('./reactComponent'),
      ReactClass = require('./reactClass'),
      Element = require('./element'),
      ReactClassElement = require('./element/react/class'),
      ReactFunctionElement = require('./element/react/function'),
      ReactComponentElement = require('./element/react/component'),
      VirtualDOMElement = require('./element/virtualDOMNode/element'),
      VirtualDOMTextElement = require('./element/virtualDOMNode/textElement');

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
    } else if (isTypeOf(firstArgument, ReactComponent)) {
      const ReactComponent = firstArgument,  ///
            reactComponent = new ReactComponent(),
            reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;
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

function isTypeOf(argument, Class) {
  let typeOf = false;

  if (argument === Class) {   ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
