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
          var tagName = firstArgument; ///

          element = new DisplayElement(tagName, props);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJSZWFjdENvbXBvbmVudCIsInJlcXVpcmUiLCJSZWFjdENsYXNzIiwiRWxlbWVudCIsIlRleHRFbGVtZW50IiwiRGlzcGxheUVsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RDb21wb25lbnRFbGVtZW50IiwiUmVhY3QiLCJvYmplY3QiLCJmcm9tT2JqZWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRBcmd1bWVudHMiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJyZWFjdENvbXBvbmVudENvbnN0cnVjdG9yIiwicmVhY3RDb21wb25lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RGdW5jdGlvbiIsInRhZ05hbWUiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwiY2hpbGRBcmd1bWVudCIsImNvbmNhdCIsIm1hcCIsImNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLGtCQUFSLENBQXZCO0FBQUEsSUFDTUMsYUFBYUQsUUFBUSxjQUFSLENBRG5CO0FBQUEsSUFFTUUsVUFBVUYsUUFBUSxXQUFSLENBRmhCO0FBQUEsSUFHTUcsY0FBY0gsUUFBUSxlQUFSLENBSHBCO0FBQUEsSUFJTUksaUJBQWlCSixRQUFRLGtCQUFSLENBSnZCO0FBQUEsSUFLTUssb0JBQW9CTCxRQUFRLHFCQUFSLENBTDFCO0FBQUEsSUFNTU0sdUJBQXVCTixRQUFRLHdCQUFSLENBTjdCO0FBQUEsSUFPTU8sd0JBQXdCUCxRQUFRLHlCQUFSLENBUDlCOztJQVNNUSxLOzs7Ozs7O2dDQUNlQyxNLEVBQVE7QUFDekIsYUFBT1IsV0FBV1MsVUFBWCxDQUFzQkQsTUFBdEIsQ0FBUDtBQUNEOzs7a0NBRXFCRSxhLEVBQWVDLFUsRUFBK0I7QUFDakUsVUFBSUMsVUFBVUMsU0FBZDs7QUFFQSxVQUFJSCxrQkFBa0JHLFNBQXRCLEVBQWlDO0FBQUEsMENBSGdCQyxjQUdoQjtBQUhnQkEsd0JBR2hCO0FBQUE7O0FBQy9CLFlBQU1DLFdBQVdDLDJCQUEyQkYsY0FBM0IsQ0FBakI7QUFBQSxZQUNNRyxRQUFRQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQlIsVUFBbEIsRUFBOEI7QUFDcENJLG9CQUFVQTtBQUQwQixTQUE5QixDQURkOztBQUtBLFlBQUlMLGNBQWNVLFNBQWQsWUFBbUN0QixjQUF2QyxFQUF1RDtBQUNyRCxjQUFNdUIsNEJBQTRCWCxhQUFsQztBQUFBLGNBQWtEO0FBQzVDWSwyQkFBaUIsSUFBSUQseUJBQUosRUFEdkI7O0FBR0FULG9CQUFVLElBQUlOLHFCQUFKLENBQTBCZ0IsY0FBMUIsRUFBMENMLEtBQTFDLENBQVY7QUFDRCxTQUxELE1BS08sSUFBSVAseUJBQXlCVixVQUE3QixFQUF5QztBQUM5QyxjQUFNdUIsYUFBYWIsYUFBbkIsQ0FEOEMsQ0FDWjs7QUFFbENFLG9CQUFVLElBQUlSLGlCQUFKLENBQXNCbUIsVUFBdEIsRUFBa0NOLEtBQWxDLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSSxPQUFPUCxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQzlDLGNBQU1jLGdCQUFnQmQsYUFBdEIsQ0FEOEMsQ0FDUjs7QUFFdENFLG9CQUFVLElBQUlQLG9CQUFKLENBQXlCbUIsYUFBekIsRUFBd0NQLEtBQXhDLENBQVY7QUFDRCxTQUpNLE1BSUE7QUFDTCxjQUFNUSxVQUFVZixhQUFoQixDQURLLENBQzJCOztBQUVoQ0Usb0JBQVUsSUFBSVQsY0FBSixDQUFtQnNCLE9BQW5CLEVBQTRCUixLQUE1QixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPTCxPQUFQO0FBQ0Y7Ozs7OztBQUdITCxNQUFNbUIsU0FBTixHQUFrQjVCLGNBQWxCOztBQUVBNkIsT0FBT0MsT0FBUCxHQUFpQnJCLEtBQWpCOztBQUVBLFNBQVNTLDBCQUFULENBQW9DRixjQUFwQyxFQUFvRDtBQUNsREEsbUJBQWlCQSxlQUFlZSxNQUFmLENBQXNCLFVBQVNmLGNBQVQsRUFBeUJnQixhQUF6QixFQUF3QztBQUM3RWhCLHFCQUFpQkEsZUFBZWlCLE1BQWYsQ0FBc0JELGFBQXRCLENBQWpCOztBQUVBLFdBQU9oQixjQUFQO0FBQ0QsR0FKZ0IsRUFJZCxFQUpjLENBQWpCOztBQU1BLE1BQU1DLFdBQVdELGVBQWVrQixHQUFmLENBQW1CLFVBQVNGLGFBQVQsRUFBd0I7QUFDMUQsUUFBTUcsUUFBU0gseUJBQXlCN0IsT0FBMUIsR0FDRzZCLGFBREgsR0FDbUI7QUFDZCxRQUFJNUIsV0FBSixDQUFnQjRCLGFBQWhCLENBRm5CLENBRDBELENBR1A7O0FBRW5ELFdBQU9HLEtBQVA7QUFDRCxHQU5nQixDQUFqQjs7QUFRQSxTQUFPbEIsUUFBUDtBQUNEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gICAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgY29uc3QgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJndW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIl19