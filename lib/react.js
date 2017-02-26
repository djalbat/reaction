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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwicmVhY3RPYmplY3RPckRpc3BsYXlOYW1lIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsImNoaWxkQXJndW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwicmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciIsInJlYWN0Q29tcG9uZW50IiwicmVhY3RDbGFzcyIsInJlYWN0RnVuY3Rpb24iLCJkaXNwbGF5TmFtZSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEFyZ3VtZW50IiwiY29uY2F0IiwibWFwIiwiY2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsa0JBQVIsQ0FBdkI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGNBQVIsQ0FEbkI7QUFBQSxJQUVNRSxVQUFVRixRQUFRLFdBQVIsQ0FGaEI7QUFBQSxJQUdNRyxjQUFjSCxRQUFRLGVBQVIsQ0FIcEI7QUFBQSxJQUlNSSxpQkFBaUJKLFFBQVEsa0JBQVIsQ0FKdkI7QUFBQSxJQUtNSyxvQkFBb0JMLFFBQVEscUJBQVIsQ0FMMUI7QUFBQSxJQU1NTSx1QkFBdUJOLFFBQVEsd0JBQVIsQ0FON0I7QUFBQSxJQU9NTyx3QkFBd0JQLFFBQVEseUJBQVIsQ0FQOUI7O0lBU01RLEs7Ozs7Ozs7Z0NBQ2VDLE0sRUFBUTtBQUN6QixhQUFPUixXQUFXUyxVQUFYLENBQXNCRCxNQUF0QixDQUFQO0FBQ0Q7OztrQ0FFcUJFLHdCLEVBQTBCQyxVLEVBQStCO0FBQzdFLFVBQUlELDZCQUE2QkUsU0FBakMsRUFBNEM7QUFDMUMsZUFBT0EsU0FBUDtBQUNEOztBQUg0RSx3Q0FBaEJDLGNBQWdCO0FBQWhCQSxzQkFBZ0I7QUFBQTs7QUFLN0UsVUFBTUMsV0FBV0MsMkJBQTJCRixjQUEzQixDQUFqQjtBQUFBLFVBQ01HLFFBQVFDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxVQUFsQixFQUE4QixFQUFDRyxVQUFVQSxRQUFYLEVBQTlCLENBRGQ7O0FBR0EsVUFBSUoseUJBQXlCUyxTQUF6QixZQUE4Q3JCLGNBQWxELEVBQWtFO0FBQ2hFLFlBQUlzQiw0QkFBNEJWLHdCQUFoQztBQUFBLFlBQ0lXLGlCQUFpQixJQUFJRCx5QkFBSixFQURyQjs7QUFHQSxlQUFPLElBQUlkLHFCQUFKLENBQTBCZSxjQUExQixFQUEwQ0wsS0FBMUMsQ0FBUDtBQUNELE9BTEQsTUFLTyxJQUFJTixvQ0FBb0NWLFVBQXhDLEVBQW9EO0FBQ3pELFlBQUlzQixhQUFhWix3QkFBakI7O0FBRUEsZUFBTyxJQUFJTixpQkFBSixDQUFzQmtCLFVBQXRCLEVBQWtDTixLQUFsQyxDQUFQO0FBQ0QsT0FKTSxNQUlBLElBQUksT0FBT04sd0JBQVAsS0FBb0MsVUFBeEMsRUFBb0Q7QUFDekQsWUFBSWEsZ0JBQWdCYix3QkFBcEI7O0FBRUEsZUFBTyxJQUFJTCxvQkFBSixDQUF5QmtCLGFBQXpCLEVBQXdDUCxLQUF4QyxDQUFQO0FBQ0QsT0FKTSxNQUlBO0FBQ0wsWUFBSVEsY0FBY2Qsd0JBQWxCOztBQUVBLGVBQU8sSUFBSVAsY0FBSixDQUFtQnFCLFdBQW5CLEVBQWdDUixLQUFoQyxDQUFQO0FBQ0Q7QUFDRjs7Ozs7O0FBR0hULE1BQU1rQixTQUFOLEdBQWtCM0IsY0FBbEI7O0FBRUE0QixPQUFPQyxPQUFQLEdBQWlCcEIsS0FBakI7O0FBRUEsU0FBU1EsMEJBQVQsQ0FBb0NGLGNBQXBDLEVBQW9EO0FBQ2xEQSxtQkFBaUJBLGVBQWVlLE1BQWYsQ0FBc0IsVUFBU2YsY0FBVCxFQUF5QmdCLGFBQXpCLEVBQXdDO0FBQzdFaEIscUJBQWlCQSxlQUFlaUIsTUFBZixDQUFzQkQsYUFBdEIsQ0FBakI7O0FBRUEsV0FBT2hCLGNBQVA7QUFDRCxHQUpnQixFQUlkLEVBSmMsQ0FBakI7O0FBTUEsTUFBSUMsV0FBV0QsZUFBZWtCLEdBQWYsQ0FBbUIsVUFBU0YsYUFBVCxFQUF3QjtBQUN4RCxRQUFJRyxRQUFTSCx5QkFBeUI1QixPQUExQixHQUNHNEIsYUFESCxHQUNtQjtBQUNkLFFBQUkzQixXQUFKLENBQWdCMkIsYUFBaEIsQ0FGakIsQ0FEd0QsQ0FHUDs7QUFFakQsV0FBT0csS0FBUDtBQUNELEdBTmMsQ0FBZjs7QUFRQSxTQUFPbEIsUUFBUDtBQUNEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gICAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7Y2hpbGRyZW46IGNoaWxkcmVufSk7XG5cbiAgICBpZiAocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSxcbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIHJldHVybiBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZTtcblxuICAgICAgcmV0dXJuIG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcHMpO1xuICAgIH1cbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIHZhciBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgdmFyIGNoaWxkID0gKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSA/XG4gICAgICAgICAgICAgICAgICAgY2hpbGRBcmd1bWVudCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl19