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
      var element = undefined;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var children = childrenFromChildArguments(childArguments),
            props = Object.assign({}, properties, {
          children: children
        });

        if (firstArgument.prototype instanceof ReactComponent) {
          var reactComponentConstructor = firstArgument,
              ///
          reactComponent = new reactComponentConstructor();

          element = new ReactComponentElement(reactComponent, props);
        } else if (firstArgument instanceof ReactClass) {
          var reactClass = firstArgument; ///

          element = new ReactClassElement(reactClass, props);
        } else if (typeof firstArgument === 'function') {
          var reactFunction = firstArgument; ///

          element = new ReactFunctionElement(reactFunction, props);
        } else {
          var displayName = firstArgument; ///

          element = new DisplayElement(displayName, props);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRBcmd1bWVudHMiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJyZWFjdENvbXBvbmVudENvbnN0cnVjdG9yIiwicmVhY3RDb21wb25lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RGdW5jdGlvbiIsImRpc3BsYXlOYW1lIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxrQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsY0FBUixDQURuQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZUFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSxxQkFBUixDQUwxQjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx3QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSx5QkFBUixDQVA5Qjs7SUFTTVEsSzs7Ozs7OztnQ0FDZUMsTSxFQUFRO0FBQ3pCLGFBQU9SLFdBQVdTLFVBQVgsQ0FBc0JELE1BQXRCLENBQVA7QUFDRDs7O2tDQUVxQkUsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVVDLFNBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCRyxTQUF0QixFQUFpQztBQUFBLDBDQUhnQkMsY0FHaEI7QUFIZ0JBLHdCQUdoQjtBQUFBOztBQUMvQixZQUFNQyxXQUFXQywyQkFBMkJGLGNBQTNCLENBQWpCO0FBQUEsWUFDTUcsUUFBUUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLFVBQWxCLEVBQThCO0FBQ3BDSSxvQkFBVUE7QUFEMEIsU0FBOUIsQ0FEZDs7QUFLQSxZQUFJTCxjQUFjVSxTQUFkLFlBQW1DdEIsY0FBdkMsRUFBdUQ7QUFDckQsY0FBTXVCLDRCQUE0QlgsYUFBbEM7QUFBQSxjQUFrRDtBQUM1Q1ksMkJBQWlCLElBQUlELHlCQUFKLEVBRHZCOztBQUdBVCxvQkFBVSxJQUFJTixxQkFBSixDQUEwQmdCLGNBQTFCLEVBQTBDTCxLQUExQyxDQUFWO0FBQ0QsU0FMRCxNQUtPLElBQUlQLHlCQUF5QlYsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTXVCLGFBQWFiLGFBQW5CLENBRDhDLENBQ1o7O0FBRWxDRSxvQkFBVSxJQUFJUixpQkFBSixDQUFzQm1CLFVBQXRCLEVBQWtDTixLQUFsQyxDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUksT0FBT1AsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFNYyxnQkFBZ0JkLGFBQXRCLENBRDhDLENBQ1I7O0FBRXRDRSxvQkFBVSxJQUFJUCxvQkFBSixDQUF5Qm1CLGFBQXpCLEVBQXdDUCxLQUF4QyxDQUFWO0FBQ0QsU0FKTSxNQUlBO0FBQ0wsY0FBTVEsY0FBY2YsYUFBcEIsQ0FESyxDQUMrQjs7QUFFcENFLG9CQUFVLElBQUlULGNBQUosQ0FBbUJzQixXQUFuQixFQUFnQ1IsS0FBaEMsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0wsT0FBUDtBQUNGOzs7Ozs7QUFHSEwsTUFBTW1CLFNBQU4sR0FBa0I1QixjQUFsQjs7QUFFQTZCLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQjs7QUFFQSxTQUFTUywwQkFBVCxDQUFvQ0YsY0FBcEMsRUFBb0Q7QUFDbERBLG1CQUFpQkEsZUFBZWUsTUFBZixDQUFzQixVQUFTZixjQUFULEVBQXlCZ0IsYUFBekIsRUFBd0M7QUFDN0VoQixxQkFBaUJBLGVBQWVpQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPaEIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFNQyxXQUFXRCxlQUFla0IsR0FBZixDQUFtQixVQUFTRixhQUFULEVBQXdCO0FBQzFELFFBQU1HLFFBQVNILHlCQUF5QjdCLE9BQTFCLEdBQ0c2QixhQURILEdBQ21CO0FBQ2QsUUFBSTVCLFdBQUosQ0FBZ0I0QixhQUFoQixDQUZuQixDQUQwRCxDQUdQOztBQUVuRCxXQUFPRyxLQUFQO0FBQ0QsR0FOZ0IsQ0FBakI7O0FBUUEsU0FBT2xCLFFBQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgICB9KTtcblxuICAgICAgIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICBjb25zdCByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgY29uc3QgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJndW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl19