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

    if (false) {
      ///
    } else if (typeof firstArgument === 'string') {
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


      element[name] = mixin.bind(element);
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
//# sourceMappingURL=data:application/json;base64,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QyxNQUVPO0FBQ0wsWUFBTSxPQUFPLGFBQVA7O0FBQ0EsZ0NBQXdCLElBQUkscUJBQUosQ0FBMEIsSUFBMUIsQ0FBeEIsQ0FGRDs7QUFJTCxnQkFBUSxxQkFBUixDQUpLO09BRlA7O0FBU0EsV0FBTyxLQUFQLENBWjBEO0dBQXhCLENBQTlCLENBUDRDOztBQXNCbEQsU0FBTyxRQUFQLENBdEJrRDtDQUFwRDs7QUF5QkEsU0FBUyxZQUFULENBQXNCLDBCQUF0QixFQUFrRCxPQUFsRCxFQUEyRDtNQUNqRCxTQUFXLDJCQUFYLE9BRGlEOzs7QUFHekQsTUFBSSxNQUFKLEVBQVk7QUFDVixXQUFPLE9BQVAsQ0FBZSxVQUFTLEtBQVQsRUFBZ0I7VUFDckIsT0FBUyxNQUFULEtBRHFCOzs7QUFHN0IsY0FBUSxJQUFSLElBQWdCLE1BQU0sSUFBTixDQUFXLE9BQVgsQ0FBaEIsQ0FINkI7S0FBaEIsQ0FBZixDQURVO0dBQVo7Q0FIRjs7QUFZQSxTQUFTLFlBQVQsQ0FBc0IsUUFBdEIsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDckMsTUFBSSxTQUFTLEtBQVQsQ0FEaUM7O0FBR3JDLE1BQUksYUFBYSxLQUFiLEVBQW9COztBQUN0QixhQUFTLElBQVQsQ0FEc0I7R0FBeEIsTUFFTztBQUNMLGVBQVcsT0FBTyxjQUFQLENBQXNCLFFBQXRCLENBQVg7O0FBREssUUFHRCxhQUFhLElBQWIsRUFBbUI7QUFDckIsZUFBUyxhQUFhLFFBQWIsRUFBdUIsS0FBdkIsQ0FBVCxDQURxQjtLQUF2QjtHQUxGOztBQVVBLFNBQU8sTUFBUCxDQWJxQztDQUF2QyIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jbGFzcycpLFxuICAgICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb24nKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC9yZWFjdC9jb21wb25lbnQnKSxcbiAgICAgIFZpcnR1YWxET01UZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudCcpLFxuICAgICAgVmlydHVhbERPTUVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudCcpO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01FbGVtZW50ID0gbmV3IFZpcnR1YWxET01FbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7XG5cbiAgICAgIGFzc2lnbk1peGlucyhyZWFjdENsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50RWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50RWxlbWVudDtcblxuICAgICAgYXNzaWduTWl4aW5zKFJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cykge1xuICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEFyZ3VtZW50cywgY2hpbGRBcmd1bWVudCkge1xuICAgIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMuY29uY2F0KGNoaWxkQXJndW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkQXJndW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGxldCBjaGlsZDtcblxuICAgIGlmIChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdmlydHVhbERPTVRleHRFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMocmVhY3RDbGFzc09yUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3NPclJlYWN0Q29tcG9uZW50O1xuXG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaChmdW5jdGlvbihtaXhpbikge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAgIC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==