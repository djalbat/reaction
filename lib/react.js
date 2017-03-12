'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMElement = require('./element/virtualDOMNode/element'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement');

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
    value: function createElement(firstArgument, properties) {
      var element = null;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var children = childrenFromChildArguments(childArguments),
            props = Object.assign({}, properties, {
          children: children
        });

        if (false) {} else if (typeof firstArgument === 'string') {
          var tagName = firstArgument,
              ///
          virtualDOMElement = new VirtualDOMElement(tagName, props);

          element = virtualDOMElement;
        } else if (firstArgument instanceof ReactClass) {
          var reactClass = firstArgument,
              ///
          reactClassElement = new ReactClassElement(reactClass, props);

          element = reactClassElement;
        } else if (isTypeOf(firstArgument, ReactComponent)) {
          var _ReactComponent = firstArgument,
              ///
          reactComponent = new _ReactComponent(),
              reactComponentElement = new ReactComponentElement(reactComponent, props);

          element = reactComponentElement;
        } else if (typeof firstArgument === 'function') {
          var reactFunction = firstArgument,
              ///
          reactFunctionElement = new ReactFunctionElement(reactFunction, props);

          element = reactFunctionElement;
        }
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var children = childArguments.map(function (childArgument) {
    var child = void 0;

    if (childArgument instanceof Element) {
      child = childArgument; ///
    } else {
      var text = childArgument,
          ///
      virtualDOMTextElement = new VirtualDOMTextElement(text);

      child = virtualDOMTextElement;
    }

    return child;
  });

  return children;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlJlYWN0Q2xhc3NFbGVtZW50IiwiUmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJSZWFjdENvbXBvbmVudEVsZW1lbnQiLCJWaXJ0dWFsRE9NRWxlbWVudCIsIlZpcnR1YWxET01UZXh0RWxlbWVudCIsIlJlYWN0Iiwib2JqZWN0IiwiZnJvbU9iamVjdCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImNoaWxkQXJndW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsInZpcnR1YWxET01FbGVtZW50IiwicmVhY3RDbGFzcyIsInJlYWN0Q2xhc3NFbGVtZW50IiwiaXNUeXBlT2YiLCJyZWFjdENvbXBvbmVudCIsInJlYWN0Q29tcG9uZW50RWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEFyZ3VtZW50IiwiY29uY2F0IiwibWFwIiwiY2hpbGQiLCJ0ZXh0IiwidmlydHVhbERPTVRleHRFbGVtZW50IiwiYXJndW1lbnQiLCJDbGFzcyIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLGtCQUFSLENBQXZCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxjQUFSLENBRG5CO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxXQUFSLENBRmhCO0FBQUEsSUFHTUcsb0JBQW9CSCxRQUFRLHVCQUFSLENBSDFCO0FBQUEsSUFJTUksdUJBQXVCSixRQUFRLDBCQUFSLENBSjdCO0FBQUEsSUFLTUssd0JBQXdC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LFNBQVMsS0FBYjs7QUFFQSxNQUFJRixhQUFhQyxLQUFqQixFQUF3QjtBQUFJO0FBQzFCQyxhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEYsZUFBV3JCLE9BQU93QixjQUFQLENBQXNCSCxRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLGFBQWEsSUFBakIsRUFBdUI7QUFDckJFLGVBQVNqQixTQUFTZSxRQUFULEVBQW1CQyxLQUFuQixDQUFUO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPQyxNQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY2xhc3MnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uJyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50JyksXG4gICAgICBWaXJ0dWFsRE9NRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS9lbGVtZW50JyksXG4gICAgICBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gICAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgICB9KTtcblxuICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgICAgIFxuICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBuZXcgVmlydHVhbERPTUVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgICAgICAgXG4gICAgICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnRcbiAgICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgICAgICBcbiAgICAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDtcbiAgICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50O1xuICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgICBcbiAgICAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiAgICAgICB9XG4gICAgIH1cblxuICAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7ICAgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=