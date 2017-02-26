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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRBcmd1bWVudHMiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJyZWFjdENvbXBvbmVudENvbnN0cnVjdG9yIiwicmVhY3RDb21wb25lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RGdW5jdGlvbiIsImRpc3BsYXlOYW1lIiwiQ29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkQXJndW1lbnQiLCJjb25jYXQiLCJtYXAiLCJjaGlsZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxrQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsY0FBUixDQURuQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZUFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSxxQkFBUixDQUwxQjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx3QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSx5QkFBUixDQVA5Qjs7SUFTTVEsSzs7Ozs7OztnQ0FDZUMsTSxFQUFRO0FBQ3pCLGFBQU9SLFdBQVdTLFVBQVgsQ0FBc0JELE1BQXRCLENBQVA7QUFDRDs7O2tDQUVxQkUsYSxFQUFlQyxVLEVBQStCO0FBQ2pFLFVBQUlDLFVBQVVDLFNBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCRyxTQUF0QixFQUFpQztBQUFBLDBDQUhnQkMsY0FHaEI7QUFIZ0JBLHdCQUdoQjtBQUFBOztBQUMvQixZQUFNQyxXQUFXQywyQkFBMkJGLGNBQTNCLENBQWpCO0FBQUEsWUFDTUcsUUFBUUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JSLFVBQWxCLEVBQThCLEVBQUNJLFVBQVVBLFFBQVgsRUFBOUIsQ0FEZDs7QUFHQSxZQUFJTCxjQUFjVSxTQUFkLFlBQW1DdEIsY0FBdkMsRUFBdUQ7QUFDckQsY0FBSXVCLDRCQUE0QlgsYUFBaEM7QUFBQSxjQUFnRDtBQUM1Q1ksMkJBQWlCLElBQUlELHlCQUFKLEVBRHJCOztBQUdBVCxvQkFBVSxJQUFJTixxQkFBSixDQUEwQmdCLGNBQTFCLEVBQTBDTCxLQUExQyxDQUFWO0FBQ0QsU0FMRCxNQUtPLElBQUlQLHlCQUF5QlYsVUFBN0IsRUFBeUM7QUFDOUMsY0FBSXVCLGFBQWFiLGFBQWpCLENBRDhDLENBQ2Q7O0FBRWhDRSxvQkFBVSxJQUFJUixpQkFBSixDQUFzQm1CLFVBQXRCLEVBQWtDTixLQUFsQyxDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUksT0FBT1AsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFJYyxnQkFBZ0JkLGFBQXBCLENBRDhDLENBQ1Y7O0FBRXBDRSxvQkFBVSxJQUFJUCxvQkFBSixDQUF5Qm1CLGFBQXpCLEVBQXdDUCxLQUF4QyxDQUFWO0FBQ0QsU0FKTSxNQUlBO0FBQ0wsY0FBSVEsY0FBY2YsYUFBbEIsQ0FESyxDQUM2Qjs7QUFFbENFLG9CQUFVLElBQUlULGNBQUosQ0FBbUJzQixXQUFuQixFQUFnQ1IsS0FBaEMsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0wsT0FBUDtBQUNGOzs7Ozs7QUFHSEwsTUFBTW1CLFNBQU4sR0FBa0I1QixjQUFsQjs7QUFFQTZCLE9BQU9DLE9BQVAsR0FBaUJyQixLQUFqQjs7QUFFQSxTQUFTUywwQkFBVCxDQUFvQ0YsY0FBcEMsRUFBb0Q7QUFDbERBLG1CQUFpQkEsZUFBZWUsTUFBZixDQUFzQixVQUFTZixjQUFULEVBQXlCZ0IsYUFBekIsRUFBd0M7QUFDN0VoQixxQkFBaUJBLGVBQWVpQixNQUFmLENBQXNCRCxhQUF0QixDQUFqQjs7QUFFQSxXQUFPaEIsY0FBUDtBQUNELEdBSmdCLEVBSWQsRUFKYyxDQUFqQjs7QUFNQSxNQUFJQyxXQUFXRCxlQUFla0IsR0FBZixDQUFtQixVQUFTRixhQUFULEVBQXdCO0FBQ3hELFFBQUlHLFFBQVNILHlCQUF5QjdCLE9BQTFCLEdBQ0c2QixhQURILEdBQ21CO0FBQ2QsUUFBSTVCLFdBQUosQ0FBZ0I0QixhQUFoQixDQUZqQixDQUR3RCxDQUdQOztBQUVqRCxXQUFPRyxLQUFQO0FBQ0QsR0FOYyxDQUFmOztBQVFBLFNBQU9sQixRQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50JyksXG4gICAgICBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzRWxlbWVudCcpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICAgdmFyIGVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbiAgICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpLFxuICAgICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge2NoaWxkcmVuOiBjaGlsZHJlbn0pO1xuXG4gICAgICAgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICAgICB2YXIgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcHMpO1xuICAgICAgIH1cbiAgICAgfVxuXG4gICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgdmFyIGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICBjaGlsZEFyZ3VtZW50IDogLy8vXG4gICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dEVsZW1lbnQoY2hpbGRBcmd1bWVudCk7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iXX0=