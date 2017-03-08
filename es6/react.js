'use strict';

const ReactComponent = require('./reactComponent'),
      ReactClass = require('./reactClass'),
      Element = require('./element'),
      TextElement = require('./textElement'),
      DisplayElement = require('./displayElement'),
      ReactClassElement = require('./reactClassElement'),
      ReactFunctionElement = require('./reactFunctionElement'),
      ReactComponentElement = require('./reactComponentElement');

class React {
  static createClass(object) {
    return ReactClass.fromObject(object);
  }

   static createElement(firstArgument, properties, ...childArguments) {
     let element = null;

     if (firstArgument !== undefined) {
       const children = childrenFromChildArguments(childArguments),
             props = Object.assign({}, properties, {
               children: children
             });

       if (typeof firstArgument === 'string') {
         const tagName = firstArgument;  ///

         element = new DisplayElement(tagName, props);
       } else if (firstArgument instanceof ReactClass) {
         const reactClass = firstArgument; ///

         element = new ReactClassElement(reactClass, props);
       } else if (isTypeOf(firstArgument, ReactComponent)) {
         const ReactComponent = firstArgument,  ///
               reactComponent = new ReactComponent();

         element = new ReactComponentElement(reactComponent, props);
       } else if (typeof firstArgument === 'function') {
         const reactFunction = firstArgument;  ///

         element = new ReactFunctionElement(reactFunction, props);
       }
     }

     return element;
  }
}

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function(childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  const children = childArguments.map(function(childArgument) {
    const child = (childArgument instanceof Element) ?
                     childArgument : ///
                       new TextElement(childArgument); ///

    return child;
  });

  return children;
}

function isTypeOf(argument, constructor) {
  let typeOf = false;

  if (argument === constructor) {
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isTypeOf(argument, constructor);
    }
  }

  return typeOf;
}
