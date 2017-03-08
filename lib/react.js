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

        if (typeof firstArgument === 'string') {
          var tagName = firstArgument; ///

          element = new DisplayElement(tagName, props);
        } else if (firstArgument instanceof ReactClass) {
          var reactClass = firstArgument; ///

          element = new ReactClassElement(reactClass, props);
        } else if (isTypeOf(firstArgument, ReactComponent)) {
          var _ReactComponent = firstArgument,
              ///
          reactComponent = new _ReactComponent();

          element = new ReactComponentElement(reactComponent, props);
        } else if (typeof firstArgument === 'function') {
          var reactFunction = firstArgument; ///

          element = new ReactFunctionElement(reactFunction, props);
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
    var child = childArgument instanceof Element ? childArgument : ///
    new TextElement(childArgument); ///

    return child;
  });

  return children;
}

function isTypeOf(argument, constructor) {
  var typeOf = false;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRBcmd1bWVudHMiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwicmVhY3RDbGFzcyIsImlzVHlwZU9mIiwicmVhY3RDb21wb25lbnQiLCJyZWFjdEZ1bmN0aW9uIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZCIsImFyZ3VtZW50IiwiY29uc3RydWN0b3IiLCJ0eXBlT2YiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxrQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsY0FBUixDQURuQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZUFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSxxQkFBUixDQUwxQjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx3QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSx5QkFBUixDQVA5Qjs7SUFTTVEsSzs7Ozs7OztnQ0FDZUMsTSxFQUFRO0FBQ3pCLGFBQU9SLFdBQVdTLFVBQVgsQ0FBc0JELE1BQXRCLENBQVA7QUFDRDs7O2tDQUVxQkUsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVUsSUFBZDs7QUFFQSxVQUFJRixrQkFBa0JHLFNBQXRCLEVBQWlDO0FBQUEsMENBSGdCQyxjQUdoQjtBQUhnQkEsd0JBR2hCO0FBQUE7O0FBQy9CLFlBQU1DLFdBQVdDLDJCQUEyQkYsY0FBM0IsQ0FBakI7QUFBQSxZQUNNRyxRQUFRQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlIsVUFBbEIsRUFBOEI7QUFDcENJLG9CQUFVQTtBQUQwQixTQUE5QixDQURkOztBQUtBLFlBQUksT0FBT0wsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUNyQyxjQUFNVSxVQUFVVixhQUFoQixDQURxQyxDQUNMOztBQUVoQ0Usb0JBQVUsSUFBSVQsY0FBSixDQUFtQmlCLE9BQW5CLEVBQTRCSCxLQUE1QixDQUFWO0FBQ0QsU0FKRCxNQUlPLElBQUlQLHlCQUF5QlYsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTXFCLGFBQWFYLGFBQW5CLENBRDhDLENBQ1o7O0FBRWxDRSxvQkFBVSxJQUFJUixpQkFBSixDQUFzQmlCLFVBQXRCLEVBQWtDSixLQUFsQyxDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUlLLFNBQVNaLGFBQVQsRUFBd0JaLGNBQXhCLENBQUosRUFBNkM7QUFDbEQsY0FBTUEsa0JBQWlCWSxhQUF2QjtBQUFBLGNBQXVDO0FBQ2pDYSwyQkFBaUIsSUFBSXpCLGVBQUosRUFEdkI7O0FBR0FjLG9CQUFVLElBQUlOLHFCQUFKLENBQTBCaUIsY0FBMUIsRUFBMENOLEtBQTFDLENBQVY7QUFDRCxTQUxNLE1BS0EsSUFBSSxPQUFPUCxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQzlDLGNBQU1jLGdCQUFnQmQsYUFBdEIsQ0FEOEMsQ0FDUjs7QUFFdENFLG9CQUFVLElBQUlQLG9CQUFKLENBQXlCbUIsYUFBekIsRUFBd0NQLEtBQXhDLENBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9MLE9BQVA7QUFDRjs7Ozs7O0FBR0hMLE1BQU1rQixTQUFOLEdBQWtCM0IsY0FBbEI7O0FBRUE0QixPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakI7O0FBRUEsU0FBU1MsMEJBQVQsQ0FBb0NGLGNBQXBDLEVBQW9EO0FBQ2xEQSxtQkFBaUJBLGVBQWVjLE1BQWYsQ0FBc0IsVUFBU2QsY0FBVCxFQUF5QmUsYUFBekIsRUFBd0M7QUFDN0VmLHFCQUFpQkEsZUFBZWdCLE1BQWYsQ0FBc0JELGFBQXRCLENBQWpCOztBQUVBLFdBQU9mLGNBQVA7QUFDRCxHQUpnQixFQUlkLEVBSmMsQ0FBakI7O0FBTUEsTUFBTUMsV0FBV0QsZUFBZWlCLEdBQWYsQ0FBbUIsVUFBU0YsYUFBVCxFQUF3QjtBQUMxRCxRQUFNRyxRQUFTSCx5QkFBeUI1QixPQUExQixHQUNHNEIsYUFESCxHQUNtQjtBQUNkLFFBQUkzQixXQUFKLENBQWdCMkIsYUFBaEIsQ0FGbkIsQ0FEMEQsQ0FHUDs7QUFFbkQsV0FBT0csS0FBUDtBQUNELEdBTmdCLENBQWpCOztBQVFBLFNBQU9qQixRQUFQO0FBQ0Q7O0FBRUQsU0FBU08sUUFBVCxDQUFrQlcsUUFBbEIsRUFBNEJDLFdBQTVCLEVBQXlDO0FBQ3ZDLE1BQUlDLFNBQVMsS0FBYjs7QUFFQSxNQUFJRixhQUFhQyxXQUFqQixFQUE4QjtBQUM1QkMsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xGLGVBQVdmLE9BQU9rQixjQUFQLENBQXNCSCxRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLGFBQWEsSUFBakIsRUFBdUI7QUFDckJFLGVBQVNiLFNBQVNXLFFBQVQsRUFBbUJDLFdBQW5CLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9DLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpLFxuICAgICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgICAgfSk7XG5cbiAgICAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuICAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCk7XG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgY29uc3QgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJndW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgY29uc3RydWN0b3IpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gY29uc3RydWN0b3IpIHtcbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==