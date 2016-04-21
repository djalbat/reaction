'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    JSXElement = require('./jsxElement'),
    JSXDOMElement = require('./jsxDOMElement'),
    JSXTextElement = require('./jsxTextElement'),
    JSXClassElement = require('./jsxClassElement'),
    JSXDOMTextElement = require('./jsxDOMTextElement'),
    JSXFunctionElement = require('./jsxFunctionElement'),
    JSXComponentElement = require('./jsxComponentElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(properties) {
      var reactClass = ReactClass.fromProperties(properties);

      return reactClass;
    }
  }, {
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      if (firstArgument === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromRemainingArguments(remainingArguments),
          jsxElement;

      if (false) {} else if (firstArgument.prototype instanceof ReactComponent) {
        var reactComponentConstructor = firstArgument,
            ///
        reactComponent = new reactComponentConstructor();

        jsxElement = new JSXComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        jsxElement = new JSXClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        jsxElement = new JSXFunctionElement(reactFunction, properties, children);
      } else {
        var displayName = firstArgument; ///

        jsxElement = new JSXDOMElement(displayName, properties, children);
      }

      return jsxElement;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  var firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument instanceof Array) {
    remainingArguments = firstRemainingArgument; ///
  }

  var children = remainingArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof JSXElement || remainingArgument instanceof JSXDOMElement || remainingArgument instanceof JSXDOMTextElement) {
      child = remainingArgument; ///
    } else {
        var text = '' + remainingArgument,
            ///
        jsxTextElement = new JSXTextElement(text);

        child = jsxTextElement; ///
      }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7SUFDQSxhQUFhLFFBQVEsY0FBUixDQUFiO0lBQ0EsZ0JBQWdCLFFBQVEsaUJBQVIsQ0FBaEI7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjtJQUNBLGtCQUFrQixRQUFRLG1CQUFSLENBQWxCO0lBQ0Esb0JBQW9CLFFBQVEscUJBQVIsQ0FBcEI7SUFDQSxxQkFBcUIsUUFBUSxzQkFBUixDQUFyQjtJQUNBLHNCQUFzQixRQUFRLHVCQUFSLENBQXRCOztJQUVFOzs7Ozs7O2dDQUNlLFlBQVk7QUFDN0IsVUFBSSxhQUFhLFdBQVcsY0FBWCxDQUEwQixVQUExQixDQUFiLENBRHlCOztBQUc3QixhQUFPLFVBQVAsQ0FINkI7Ozs7a0NBTVYsZUFBZSxZQUFtQztBQUNyRSxVQUFJLGtCQUFrQixTQUFsQixFQUE2QjtBQUMvQixlQUFPLFNBQVAsQ0FEK0I7T0FBakM7O3dDQURpRDs7T0FBb0I7O0FBS3JFLFVBQUksV0FBVywrQkFBK0Isa0JBQS9CLENBQVg7VUFDQSxVQURKLENBTHFFOztBQVFyRSxVQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxjQUFjLFNBQWQsWUFBbUMsY0FBbkMsRUFBbUQ7QUFDNUQsWUFBSSw0QkFBNEIsYUFBNUI7O0FBQ0EseUJBQWlCLElBQUkseUJBQUosRUFBakIsQ0FGd0Q7O0FBSTVELHFCQUFhLElBQUksbUJBQUosQ0FBd0IsY0FBeEIsRUFBd0MsVUFBeEMsRUFBb0QsUUFBcEQsQ0FBYixDQUo0RDtPQUF2RCxNQUtBLElBQUkseUJBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksYUFBYSxhQUFiOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGVBQUosQ0FBb0IsVUFBcEIsRUFBZ0MsVUFBaEMsRUFBNEMsUUFBNUMsQ0FBYixDQUg4QztPQUF6QyxNQUlBLElBQUksT0FBTyxhQUFQLEtBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksZ0JBQWdCLGFBQWhCOztBQUQwQyxrQkFHOUMsR0FBYSxJQUFJLGtCQUFKLENBQXVCLGFBQXZCLEVBQXNDLFVBQXRDLEVBQWtELFFBQWxELENBQWIsQ0FIOEM7T0FBekMsTUFJQTtBQUNMLFlBQUksY0FBYyxhQUFkOztBQURDLGtCQUdMLEdBQWEsSUFBSSxhQUFKLENBQWtCLFdBQWxCLEVBQStCLFVBQS9CLEVBQTJDLFFBQTNDLENBQWIsQ0FISztPQUpBOztBQVVQLGFBQU8sVUFBUCxDQTdCcUU7Ozs7U0FQbkU7OztBQXdDTixNQUFNLFNBQU4sR0FBa0IsY0FBbEI7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOztBQUVBLFNBQVMsOEJBQVQsQ0FBd0Msa0JBQXhDLEVBQTREO0FBQzFELE1BQUkseUJBQXlCLE1BQU0sa0JBQU4sQ0FBekIsQ0FEc0Q7O0FBRzFELE1BQUksa0NBQWtDLEtBQWxDLEVBQXlDO0FBQzNDLHlCQUFxQixzQkFBckI7QUFEMkMsR0FBN0M7O0FBSUEsTUFBSSxXQUFXLG1CQUFtQixHQUFuQixDQUF1QixVQUFTLGlCQUFULEVBQTRCO0FBQ2hFLFFBQUksS0FBSixDQURnRTs7QUFHaEUsUUFBSSw2QkFBNkIsVUFBN0IsSUFDQSw2QkFBNkIsYUFBN0IsSUFDQSw2QkFBNkIsaUJBQTdCLEVBQWdEO0FBQ2xELGNBQVEsaUJBQVI7QUFEa0QsS0FGcEQsTUFJTztBQUNMLFlBQUksT0FBTyxLQUFLLGlCQUFMOztBQUNQLHlCQUFpQixJQUFJLGNBQUosQ0FBbUIsSUFBbkIsQ0FBakIsQ0FGQzs7QUFJTCxnQkFBUSxjQUFSO0FBSkssT0FKUDs7QUFXQSxXQUFPLEtBQVAsQ0FkZ0U7R0FBNUIsQ0FBbEMsQ0FQc0Q7O0FBd0IxRCxTQUFPLFFBQVAsQ0F4QjBEO0NBQTVEOztBQTJCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKSxcbiAgICBKU1hET01FbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hET01FbGVtZW50JyksXG4gICAgSlNYVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeFRleHRFbGVtZW50JyksXG4gICAgSlNYQ2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9qc3hDbGFzc0VsZW1lbnQnKSxcbiAgICBKU1hET01UZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vanN4RE9NVGV4dEVsZW1lbnQnKSxcbiAgICBKU1hGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgIEpTWENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAganN4RWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYQ29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYQ2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAganN4RWxlbWVudCA9IG5ldyBKU1hGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGpzeEVsZW1lbnQgPSBuZXcgSlNYRE9NRWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBqc3hFbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHZhciBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDsgIC8vL1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gcmVtYWluaW5nQXJndW1lbnRzLm1hcChmdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudCkge1xuICAgIHZhciBjaGlsZDtcblxuICAgIGlmIChyZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEpTWEVsZW1lbnRcbiAgICAgfHwgcmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBKU1hET01FbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgSlNYRE9NVGV4dEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gcmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIHJlbWFpbmluZ0FyZ3VtZW50LCAgLy8vXG4gICAgICAgICAganN4VGV4dEVsZW1lbnQgPSBuZXcgSlNYVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0ganN4VGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==