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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwicmVhY3RPYmplY3RPckRpc3BsYXlOYW1lIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsImNoaWxkQXJndW1lbnRzIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwicmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciIsInJlYWN0Q29tcG9uZW50IiwicmVhY3RDbGFzcyIsInJlYWN0RnVuY3Rpb24iLCJkaXNwbGF5TmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJDb21wb25lbnQiLCJmaXJzdENoaWxkQXJndW1lbnQiLCJmaXJzdCIsIkFycmF5IiwibWFwIiwiY2hpbGRBcmd1bWVudCIsInRleHQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxrQkFBUixDQUF2QjtBQUFBLElBQ01DLGFBQWFELFFBQVEsY0FBUixDQURuQjtBQUFBLElBRU1FLFVBQVVGLFFBQVEsV0FBUixDQUZoQjtBQUFBLElBR01HLGNBQWNILFFBQVEsZUFBUixDQUhwQjtBQUFBLElBSU1JLGlCQUFpQkosUUFBUSxrQkFBUixDQUp2QjtBQUFBLElBS01LLG9CQUFvQkwsUUFBUSxxQkFBUixDQUwxQjtBQUFBLElBTU1NLHVCQUF1Qk4sUUFBUSx3QkFBUixDQU43QjtBQUFBLElBT01PLHdCQUF3QlAsUUFBUSx5QkFBUixDQVA5Qjs7SUFTTVEsSzs7Ozs7OztnQ0FDZUMsTSxFQUFRO0FBQ3pCLGFBQU9SLFdBQVdTLFVBQVgsQ0FBc0JELE1BQXRCLENBQVA7QUFDRDs7O2tDQUVxQkUsd0IsRUFBMEJDLFUsRUFBK0I7QUFDN0UsVUFBSUQsNkJBQTZCRSxTQUFqQyxFQUE0QztBQUMxQyxlQUFPQSxTQUFQO0FBQ0Q7O0FBSDRFLHdDQUFoQkMsY0FBZ0I7QUFBaEJBLHNCQUFnQjtBQUFBOztBQUs3RSxVQUFNQyxXQUFXQywyQkFBMkJGLGNBQTNCLENBQWpCO0FBQUEsVUFDTUcsUUFBUUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLFVBQWxCLEVBQThCLEVBQUNHLFVBQVVBLFFBQVgsRUFBOUIsQ0FEZDs7QUFHQSxVQUFJSix5QkFBeUJTLFNBQXpCLFlBQThDckIsY0FBbEQsRUFBa0U7QUFDaEUsWUFBSXNCLDRCQUE0QlYsd0JBQWhDO0FBQUEsWUFDSVcsaUJBQWlCLElBQUlELHlCQUFKLEVBRHJCOztBQUdBLGVBQU8sSUFBSWQscUJBQUosQ0FBMEJlLGNBQTFCLEVBQTBDTCxLQUExQyxDQUFQO0FBQ0QsT0FMRCxNQUtPLElBQUlOLG9DQUFvQ1YsVUFBeEMsRUFBb0Q7QUFDekQsWUFBSXNCLGFBQWFaLHdCQUFqQjs7QUFFQSxlQUFPLElBQUlOLGlCQUFKLENBQXNCa0IsVUFBdEIsRUFBa0NOLEtBQWxDLENBQVA7QUFDRCxPQUpNLE1BSUEsSUFBSSxPQUFPTix3QkFBUCxLQUFvQyxVQUF4QyxFQUFvRDtBQUN6RCxZQUFJYSxnQkFBZ0JiLHdCQUFwQjs7QUFFQSxlQUFPLElBQUlMLG9CQUFKLENBQXlCa0IsYUFBekIsRUFBd0NQLEtBQXhDLENBQVA7QUFDRCxPQUpNLE1BSUE7QUFDTCxZQUFJUSxjQUFjZCx3QkFBbEI7O0FBRUEsZUFBTyxJQUFJUCxjQUFKLENBQW1CcUIsV0FBbkIsRUFBZ0NSLEtBQWhDLENBQVA7QUFDRDtBQUNGOzs7Ozs7QUFHSFMsT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCOztBQUVBQSxNQUFNb0IsU0FBTixHQUFrQjdCLGNBQWxCOztBQUVBLFNBQVNpQiwwQkFBVCxDQUFvQ0YsY0FBcEMsRUFBb0Q7QUFDbEQsTUFBSWUscUJBQXFCQyxNQUFNaEIsY0FBTixDQUF6Qjs7QUFFQSxNQUFJZSw4QkFBOEJFLEtBQWxDLEVBQXlDO0FBQ3ZDakIscUJBQWlCZSxrQkFBakI7QUFDRDs7QUFFRCxTQUFPZixlQUFla0IsR0FBZixDQUFtQixVQUFTQyxhQUFULEVBQXdCO0FBQ2hELFFBQUlBLHlCQUF5Qi9CLE9BQTdCLEVBQXNDO0FBQ3BDLGFBQU8rQixhQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsVUFBSUMsT0FBTyxLQUFLRCxhQUFoQixDQURLLENBQzJCOztBQUVoQyxhQUFPLElBQUk5QixXQUFKLENBQWdCK0IsSUFBaEIsQ0FBUDtBQUNEO0FBQ0YsR0FSTSxDQUFQO0FBU0Q7O0FBRUQsU0FBU0osS0FBVCxDQUFlSyxLQUFmLEVBQXNCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50JyksXG4gICAgICBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzRWxlbWVudCcpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgICByZXR1cm4gUmVhY3RDbGFzcy5mcm9tT2JqZWN0KG9iamVjdCk7XG4gIH1cblxuICAgc3RhdGljIGNyZWF0ZUVsZW1lbnQocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KTtcblxuICAgIGlmIChyZWFjdE9iamVjdE9yRGlzcGxheU5hbWUucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lLFxuICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IoKTtcblxuICAgICAgcmV0dXJuIG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZWFjdE9iamVjdE9yRGlzcGxheU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZWFjdEZ1bmN0aW9uID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RPYmplY3RPckRpc3BsYXlOYW1lO1xuXG4gICAgICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICB2YXIgZmlyc3RDaGlsZEFyZ3VtZW50ID0gZmlyc3QoY2hpbGRBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdENoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gZmlyc3RDaGlsZEFyZ3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgaWYgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY2hpbGRBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIGNoaWxkQXJndW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==