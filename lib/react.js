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
            props = Object.assign({}, properties, { children: children });

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRBcmd1bWVudHMiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJyZWFjdENvbXBvbmVudENvbnN0cnVjdG9yIiwicmVhY3RDb21wb25lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RGdW5jdGlvbiIsImRpc3BsYXlOYW1lIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxrQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsY0FBUixDQURuQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZUFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSxxQkFBUixDQUwxQjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx3QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSx5QkFBUixDQVA5Qjs7SUFTTVEsSzs7Ozs7OztnQ0FDZUMsTSxFQUFRO0FBQ3pCLGFBQU9SLFdBQVdTLFVBQVgsQ0FBc0JELE1BQXRCLENBQVA7QUFDRDs7O2tDQUVxQkUsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVVDLFNBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCRyxTQUF0QixFQUFpQztBQUFBLDBDQUhnQkMsY0FHaEI7QUFIZ0JBLHdCQUdoQjtBQUFBOztBQUMvQixZQUFNQyxXQUFXQywyQkFBMkJGLGNBQTNCLENBQWpCO0FBQUEsWUFDTUcsUUFBUUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLFVBQWxCLEVBQThCLEVBQUNJLFVBQVVBLFFBQVgsRUFBOUIsQ0FEZDs7QUFHQSxZQUFJTCxjQUFjVSxTQUFkLFlBQW1DdEIsY0FBdkMsRUFBdUQ7QUFDckQsY0FBTXVCLDRCQUE0QlgsYUFBbEM7QUFBQSxjQUFrRDtBQUM1Q1ksMkJBQWlCLElBQUlELHlCQUFKLEVBRHZCOztBQUdBVCxvQkFBVSxJQUFJTixxQkFBSixDQUEwQmdCLGNBQTFCLEVBQTBDTCxLQUExQyxDQUFWO0FBQ0QsU0FMRCxNQUtPLElBQUlQLHlCQUF5QlYsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTXVCLGFBQWFiLGFBQW5CLENBRDhDLENBQ1o7O0FBRWxDRSxvQkFBVSxJQUFJUixpQkFBSixDQUFzQm1CLFVBQXRCLEVBQWtDTixLQUFsQyxDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUksT0FBT1AsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFNYyxnQkFBZ0JkLGFBQXRCLENBRDhDLENBQ1I7O0FBRXRDRSxvQkFBVSxJQUFJUCxvQkFBSixDQUF5Qm1CLGFBQXpCLEVBQXdDUCxLQUF4QyxDQUFWO0FBQ0QsU0FKTSxNQUlBO0FBQ0wsY0FBTVEsY0FBY2YsYUFBcEIsQ0FESyxDQUMrQjs7QUFFcENFLG9CQUFVLElBQUlULGNBQUosQ0FBbUJzQixXQUFuQixFQUFnQ1IsS0FBaEMsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0wsT0FBUDtBQUNGOzs7Ozs7QUFHSEwsTUFBTW1CLFNBQU4sR0FBa0I1QixjQUFsQjs7QUFFQTZCLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQjs7QUFFQSxTQUFTUywwQkFBVCxDQUFvQ0YsY0FBcEMsRUFBb0Q7QUFDbERBLG1CQUFpQkEsZUFBZWUsTUFBZixDQUFzQixVQUFTZixjQUFULEVBQXlCZ0IsYUFBekIsRUFBd0M7QUFDN0VoQixxQkFBaUJBLGVBQWVpQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPaEIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFNQyxXQUFXRCxlQUFla0IsR0FBZixDQUFtQixVQUFTRixhQUFULEVBQXdCO0FBQzFELFFBQU1HLFFBQVNILHlCQUF5QjdCLE9BQTFCLEdBQ0M2QixhQURELEdBQ2lCO0FBQ2QsUUFBSTVCLFdBQUosQ0FBZ0I0QixhQUFoQixDQUZqQixDQUQwRCxDQUdUOztBQUVqRCxXQUFPRyxLQUFQO0FBQ0QsR0FOZ0IsQ0FBakI7O0FBUUEsU0FBT2xCLFFBQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7Y2hpbGRyZW46IGNoaWxkcmVufSk7XG5cbiAgICAgICBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgICAgY29uc3QgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcHMpO1xuICAgICAgIH1cbiAgICAgfVxuXG4gICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGNvbnN0IGNoaWxkID0gKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSA/XG4gICAgICAgICAgICAgICAgICAgY2hpbGRBcmd1bWVudCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl19