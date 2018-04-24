'use strict';

var Element = require('./element'),
    ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    ReactClassElement = require('./element/react/class'),
    ReactFunctionElement = require('./element/react/function'),
    ReactComponentElement = require('./element/react/component'),
    VirtualDOMTextElement = require('./element/virtualDOMNode/textElement'),
    VirtualDOMElement = require('./element/virtualDOMNode/element');

function createClass(object) {
  return ReactClass.fromObject(object);
}

function createElement(firstArgument, properties) {
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

      assignMixins(reactClass, element);
    } else if (isSubclassOf(firstArgument, ReactComponent)) {
      var _ReactComponent = firstArgument,
          ///
      reactComponent = new _ReactComponent(),
          reactComponentElement = new ReactComponentElement(reactComponent, props);

      element = reactComponentElement;

      assignMixins(_ReactComponent, element);
    } else if (typeof firstArgument === 'function') {
      var reactFunction = firstArgument,
          ///
      reactFunctionElement = new ReactFunctionElement(reactFunction, props);

      element = reactFunctionElement;
    }
  }

  return element;
}

var Component = ReactComponent,
    ///
React = {
  Component: Component,
  createClass: createClass,
  createElement: createElement
};

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

function assignMixins(reactClassOrReactComponent, element) {
  var mixins = reactClassOrReactComponent.mixins;


  if (mixins) {
    mixins.forEach(function (mixin) {
      var name = mixin.name;


      element[name] = mixin;
    });
  }
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}
//# sourceMappingURL=data:application/json;base64,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YUFBUjtBQURvQyxLQUF0QyxNQUVPO0FBQ0wsWUFBTSxPQUFPLGFBQVA7O0FBQ0EsZ0NBQXdCLElBQUkscUJBQUosQ0FBMEIsSUFBMUIsQ0FBeEIsQ0FGRDs7QUFJTCxnQkFBUSxxQkFBUixDQUpLO09BRlA7O0FBU0EsV0FBTyxLQUFQLENBWjBEO0dBQXhCLENBQTlCLENBUDRDOztBQXNCbEQsU0FBTyxRQUFQLENBdEJrRDtDQUFwRDs7QUF5QkEsU0FBUyxZQUFULENBQXNCLDBCQUF0QixFQUFrRCxPQUFsRCxFQUEyRDtNQUNqRCxTQUFXLDJCQUFYLE9BRGlEOzs7QUFHekQsTUFBSSxNQUFKLEVBQVk7QUFDVixXQUFPLE9BQVAsQ0FBZSxVQUFTLEtBQVQsRUFBZ0I7VUFDckIsT0FBUyxNQUFULEtBRHFCOzs7QUFHN0IsY0FBUSxJQUFSLElBQWdCLEtBQWhCLENBSDZCO0tBQWhCLENBQWYsQ0FEVTtHQUFaO0NBSEY7O0FBWUEsU0FBUyxZQUFULENBQXNCLFFBQXRCLEVBQWdDLEtBQWhDLEVBQXVDO0FBQ3JDLE1BQUksU0FBUyxLQUFULENBRGlDOztBQUdyQyxNQUFJLGFBQWEsS0FBYixFQUFvQjs7QUFDdEIsYUFBUyxJQUFULENBRHNCO0dBQXhCLE1BRU87QUFDTCxlQUFXLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFYOztBQURLLFFBR0QsYUFBYSxJQUFiLEVBQW1CO0FBQ3JCLGVBQVMsYUFBYSxRQUFiLEVBQXVCLEtBQXZCLENBQVQsQ0FEcUI7S0FBdkI7R0FMRjs7QUFVQSxTQUFPLE1BQVAsQ0FicUM7Q0FBdkMiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY2xhc3MnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3JlYWN0L2Z1bmN0aW9uJyksXG4gICAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvY29tcG9uZW50JyksXG4gICAgICBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvdGV4dEVsZW1lbnQnKSxcbiAgICAgIFZpcnR1YWxET01FbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQnKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpLFxuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBuZXcgVmlydHVhbERPTUVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gdmlydHVhbERPTUVsZW1lbnRcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDtcblxuICAgICAgYXNzaWduTWl4aW5zKHJlYWN0Q2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnQgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudCgpLFxuICAgICAgICAgICAgcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnRFbGVtZW50O1xuXG4gICAgICBhc3NpZ25NaXhpbnMoUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzczogY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKGNoaWxkQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IGNoaWxkQXJndW1lbnQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkQXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTVRleHRFbGVtZW50ID0gbmV3IFZpcnR1YWxET01UZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhyZWFjdENsYXNzT3JSZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzc09yUmVhY3RDb21wb25lbnQ7XG5cbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKGZ1bmN0aW9uKG1peGluKSB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW47XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAgIC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==