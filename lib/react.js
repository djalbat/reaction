'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    DisplayElement = require('./displayElement'),
    ReactClassElement = require('./reactClassElement'),
    ReactFunctionElement = require('./reactFunctionElement'),
    ReactComponentElement = require('./reactComponentElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(object) {
      return ReactClass.fromObject(object);
    }
  }, {
    key: 'createElement',
    value: function createElement(reactObjectOrDisplayName, properties) {
      if (reactObjectOrDisplayName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromChildArguments(childArguments),
          props = Object.assign({}, properties, { children: children });

      if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
        var reactComponentConstructor = reactObjectOrDisplayName,
            reactComponent = new reactComponentConstructor();

        return new ReactComponentElement(reactComponent, props);
      } else if (reactObjectOrDisplayName instanceof ReactClass) {
        var reactClass = reactObjectOrDisplayName;

        return new ReactClassElement(reactClass, props);
      } else if (typeof reactObjectOrDisplayName === 'function') {
        var reactFunction = reactObjectOrDisplayName;

        return new ReactFunctionElement(reactFunction, props);
      } else {
        var displayName = reactObjectOrDisplayName;

        return new DisplayElement(displayName, props);
      }
    }
  }]);

  return React;
}();

module.exports = React;

React.Component = ReactComponent;

function childrenFromChildArguments(childArguments) {
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument;
  }

  return childArguments.map(function (childArgument) {
    if (childArgument instanceof Element) {
      return childArgument;
    } else {
      var text = '' + childArgument; ///

      return new TextElement(text);
    }
  });
}

function first(array) {
  return array[0];
}