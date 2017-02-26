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
     var element = undefined;

     if (firstArgument !== undefined) {
       const children = childrenFromChildArguments(childArguments),
             props = Object.assign({}, properties, {children: children});

       if (firstArgument.prototype instanceof ReactComponent) {
         var reactComponentConstructor = firstArgument,  ///
             reactComponent = new reactComponentConstructor();

         element = new ReactComponentElement(reactComponent, props);
       } else if (firstArgument instanceof ReactClass) {
         var reactClass = firstArgument; ///

         element = new ReactClassElement(reactClass, props);
       } else if (typeof firstArgument === 'function') {
         var reactFunction = firstArgument;  ///

         element = new ReactFunctionElement(reactFunction, props);
       } else {
         var displayName = firstArgument;  ///

         element = new DisplayElement(displayName, props);
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

  var children = childArguments.map(function(childArgument) {
    var child = (childArgument instanceof Element) ?
                   childArgument : ///
                     new TextElement(childArgument); ///

    return child;
  });

  return children;
}
