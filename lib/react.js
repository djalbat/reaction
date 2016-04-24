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

      if (false) {} else if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
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
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument; ///
  }

  return childArguments.map(function (childArgument) {
    if (childArgument instanceof Element || childArgument instanceof ReactElement) {
      return childArgument;
    } else {
      var text = '' + childArgument,
          props = { children: [] }; ///

      return new TextElement(text, props);
    }
  });
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjtJQUNBLGFBQWEsUUFBUSxjQUFSLENBQWI7SUFDQSxVQUFVLFFBQVEsV0FBUixDQUFWO0lBQ0EsY0FBYyxRQUFRLGVBQVIsQ0FBZDtJQUNBLGVBQWUsUUFBUSxnQkFBUixDQUFmO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxvQkFBb0IsUUFBUSxxQkFBUixDQUFwQjtJQUNBLHVCQUF1QixRQUFRLHdCQUFSLENBQXZCO0lBQ0Esd0JBQXdCLFFBQVEseUJBQVIsQ0FBeEI7O0lBRUU7Ozs7Ozs7Z0NBQ2UsUUFBUTtBQUN6QixhQUFPLFdBQVcsVUFBWCxDQUFzQixNQUF0QixDQUFQLENBRHlCOzs7O2tDQUlOLDBCQUEwQixZQUErQjtBQUM1RSxVQUFJLDZCQUE2QixTQUE3QixFQUF3QztBQUMxQyxlQUFPLFNBQVAsQ0FEMEM7T0FBNUM7O3dDQUQ0RDs7T0FBZ0I7O0FBSzVFLFVBQU0sV0FBVywyQkFBMkIsY0FBM0IsQ0FBWDtVQUNBLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixVQUFsQixFQUE4QixFQUFDLFVBQVUsUUFBVixFQUEvQixDQUFSLENBTnNFOztBQVE1RSxVQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSx5QkFBeUIsU0FBekIsWUFBOEMsY0FBOUMsRUFBOEQ7QUFDdkUsWUFBSSw0QkFBNEIsd0JBQTVCO1lBQ0EsaUJBQWlCLElBQUkseUJBQUosRUFBakIsQ0FGbUU7O0FBSXZFLGVBQU8sSUFBSSxxQkFBSixDQUEwQixjQUExQixFQUEwQyxLQUExQyxDQUFQLENBSnVFO09BQWxFLE1BS0EsSUFBSSxvQ0FBb0MsVUFBcEMsRUFBZ0Q7QUFDekQsWUFBSSxhQUFhLHdCQUFiLENBRHFEOztBQUd6RCxlQUFPLElBQUksaUJBQUosQ0FBc0IsVUFBdEIsRUFBa0MsS0FBbEMsQ0FBUCxDQUh5RDtPQUFwRCxNQUlBLElBQUksT0FBTyx3QkFBUCxLQUFvQyxVQUFwQyxFQUFnRDtBQUN6RCxZQUFJLGdCQUFnQix3QkFBaEIsQ0FEcUQ7O0FBR3pELGVBQU8sSUFBSSxvQkFBSixDQUF5QixhQUF6QixFQUF3QyxLQUF4QyxDQUFQLENBSHlEO09BQXBELE1BSUE7QUFDTCxZQUFJLGNBQWMsd0JBQWQsQ0FEQzs7QUFHTCxlQUFPLElBQUksY0FBSixDQUFtQixXQUFuQixFQUFnQyxLQUFoQyxDQUFQLENBSEs7T0FKQTs7OztTQXhCTDs7O0FBb0NOLE1BQU0sU0FBTixHQUFrQixjQUFsQjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsS0FBakI7O0FBRUEsU0FBUywwQkFBVCxDQUFvQyxjQUFwQyxFQUFvRDtBQUNsRCxNQUFJLHFCQUFxQixNQUFNLGNBQU4sQ0FBckIsQ0FEOEM7O0FBR2xELE1BQUksOEJBQThCLEtBQTlCLEVBQXFDO0FBQ3ZDLHFCQUFpQixrQkFBakI7QUFEdUMsR0FBekM7O0FBSUEsU0FBTyxlQUFlLEdBQWYsQ0FBbUIsVUFBUyxhQUFULEVBQXdCO0FBQ2hELFFBQUkseUJBQXlCLE9BQXpCLElBQ0EseUJBQXlCLFlBQXpCLEVBQXVDO0FBQ3pDLGFBQU8sYUFBUCxDQUR5QztLQUQzQyxNQUdPO0FBQ0wsVUFBSSxPQUFPLEtBQUssYUFBTDtVQUNQLFFBQVEsRUFBQyxVQUFVLEVBQVYsRUFBVDs7QUFGQyxhQUlFLElBQUksV0FBSixDQUFnQixJQUFoQixFQUFzQixLQUF0QixDQUFQLENBSks7S0FIUDtHQUR3QixDQUExQixDQVBrRDtDQUFwRDs7QUFvQkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0QiIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50JyksXG4gICAgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKSxcbiAgICBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKSxcbiAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLFxuICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWFjdEZ1bmN0aW9uID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgfVxuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICB2YXIgZmlyc3RDaGlsZEFyZ3VtZW50ID0gZmlyc3QoY2hpbGRBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdENoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gZmlyc3RDaGlsZEFyZ3VtZW50OyAgLy8vXG4gIH1cblxuICByZXR1cm4gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBpZiAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgfHwgY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0RWxlbWVudCkge1xuICAgICAgcmV0dXJuIGNoaWxkQXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyBjaGlsZEFyZ3VtZW50LFxuICAgICAgICAgIHByb3BzID0ge2NoaWxkcmVuOiBbXX07ICAvLy9cbiAgICAgIFxuICAgICAgcmV0dXJuIG5ldyBUZXh0RWxlbWVudCh0ZXh0LCBwcm9wcyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iXX0=