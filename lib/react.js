'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    ReactElement = require('./reactElement'),
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
      var reactClass = ReactClass.fromObject(object);

      return reactClass;
    }
  }, {
    key: 'createElement',
    value: function createElement(reactObjectOrDisplayName, props) {
      if (reactObjectOrDisplayName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromChildArguments(childArguments),
          element;

      if (false) {} else if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
        var reactComponentConstructor = reactObjectOrDisplayName,
            reactComponent = new reactComponentConstructor();

        element = new ReactComponentElement(reactComponent, props, children);
      } else if (reactObjectOrDisplayName instanceof ReactClass) {
        var reactClass = reactObjectOrDisplayName;

        element = new ReactClassElement(reactClass, props, children);
      } else if (typeof reactObjectOrDisplayName === 'function') {
        var reactFunction = reactObjectOrDisplayName;

        element = new ReactFunctionElement(reactFunction, props, children);
      } else {
        var displayName = reactObjectOrDisplayName;

        element = new DisplayElement(displayName, props, children);
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument;
  }

  var children = childArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof Element || remainingArgument instanceof ReactElement) {
      child = remainingArgument;
    } else {
      var text = '' + remainingArgument,
          textElement = new TextElement(text);

      child = textElement;
    }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,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c291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpLFxuICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzRWxlbWVudCcpLFxuICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSwgcHJvcHMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLFxuICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZTtcblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSByZWFjdE9iamVjdE9yRGlzcGxheU5hbWU7XG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcywgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICB2YXIgZmlyc3RDaGlsZEFyZ3VtZW50ID0gZmlyc3QoY2hpbGRBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdENoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gZmlyc3RDaGlsZEFyZ3VtZW50O1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0RWxlbWVudCkge1xuICAgICAgY2hpbGQgPSByZW1haW5pbmdBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIHJlbWFpbmluZ0FyZ3VtZW50LFxuICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==