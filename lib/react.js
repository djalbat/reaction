"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _element = _interopRequireDefault(require("./element"));
var _reactClass = _interopRequireDefault(require("./reactClass"));
var _reactComponent = _interopRequireDefault(require("./reactComponent"));
var _class = _interopRequireDefault(require("./element/react/class"));
var _function = _interopRequireDefault(require("./element/react/function"));
var _component = _interopRequireDefault(require("./element/react/component"));
var _textElement = _interopRequireDefault(require("./element/virtualDOMNode/textElement"));
var _html = _interopRequireDefault(require("./element/virtualDOMNode/element/html"));
var _svg = _interopRequireDefault(require("./element/virtualDOMNode/element/svg"));
var _array = require("./utilities/array");
var _name = require("./utilities/name");
var _constants = require("./constants");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function createClass(object) {
    return _reactClass.default.create(object);
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        remainingArguments[_key - 2] = arguments[_key];
    }
    var element = null;
    if (firstArgument !== undefined) {
        var children = childrenFromRemainingArguments(remainingArguments), props = Object.assign({
        }, properties, {
            children: children
        });
        if (false) {
        ///
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
            var tagName = firstArgument, virtualDOMElement = (0, _name).isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
            element = virtualDOMElement ///
            ;
        } else if (_instanceof(firstArgument, _reactClass.default)) {
            var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
            element = reactClassElement; ///
            var mixins = reactClass.mixins;
            assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
            var ReactComponent = firstArgument, reactComponent = new ReactComponent(), reactComponentElement = new _component.default(reactComponent, props);
            element = reactComponentElement; ///
            assignReactComponentMixins(ReactComponent, element);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
            var reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
            element = reactFunctionElement; ///
        }
    }
    return element;
}
var Component = _reactComponent.default, React = {
    Component: Component,
    createClass: createClass,
    createElement: createElement
};
var _default = React;
exports.default = _default;
function childrenFromRemainingArguments(remainingArguments) {
    remainingArguments = (0, _array).flatten(remainingArguments); ///
    var children = [];
    remainingArguments.forEach(function(childArgument) {
        var child;
        if (childArgument) {
            if (isSubclassOf(childArgument.constructor, _element.default)) {
                child = childArgument; ///
            } else {
                var text = childArgument, virtualDOMTextElement = new _textElement.default(text);
                child = virtualDOMTextElement;
            }
            children.push(child);
        }
    });
    return children;
}
function assignReactComponentMixins(reactComponent, element) {
    var mixins = reactComponent.mixins;
    reactComponent = Object.getPrototypeOf(reactComponent); ///
    if (reactComponent !== _reactComponent.default) {
        assignReactComponentMixins(reactComponent, element);
    }
    assignMixins(mixins, element);
}
function assignMixins(mixins, element) {
    if (mixins) {
        mixins.forEach(function(mixin) {
            var name = mixin.name;
            element[name] = mixin.bind(element);
        });
    }
}
function isSubclassOf(argument, Class) {
    var subclass = false;
    if (argument.name === Class.name) {
        subclass = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument !== null) {
            subclass = isSubclassOf(argument, Class);
        }
    }
    return subclass;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb25cIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jb21wb25lbnRcIjtcbmltcG9ydCBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01IVE1MRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFZpcnR1YWxET01TVkdFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmdcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01TVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTUhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50IC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQoKSxcbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50RWxlbWVudCA9IG5ldyBSZWFjdENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50RWxlbWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudCwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMgPSBmbGF0dGVuKHJlbWFpbmluZ0FyZ3VtZW50cyk7IC8vL1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgcmVtYWluaW5nQXJndW1lbnRzLmZvckVhY2goKGNoaWxkQXJndW1lbnQpID0+IHtcbiAgICBsZXQgY2hpbGQ7XG5cbiAgICBpZiAoY2hpbGRBcmd1bWVudCkgeyAgLy8vXG4gICAgICBpZiAoaXNTdWJjbGFzc09mKGNoaWxkQXJndW1lbnQuY29uc3RydWN0b3IsIEVsZW1lbnQpKSB7IC8vL1xuICAgICAgICBjaGlsZCA9IGNoaWxkQXJndW1lbnQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgICAgdmlydHVhbERPTVRleHRFbGVtZW50ID0gbmV3IFZpcnR1YWxET01UZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKHJlYWN0Q29tcG9uZW50LCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENvbXBvbmVudDtcblxuICByZWFjdENvbXBvbmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihyZWFjdENvbXBvbmVudCk7IC8vL1xuXG4gIGlmIChyZWFjdENvbXBvbmVudCAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsInZpcnR1YWxET01FbGVtZW50IiwicmVhY3RDbGFzcyIsInJlYWN0Q2xhc3NFbGVtZW50IiwibWl4aW5zIiwiYXNzaWduTWl4aW5zIiwiaXNTdWJjbGFzc09mIiwiUmVhY3RDb21wb25lbnQiLCJyZWFjdENvbXBvbmVudCIsInJlYWN0Q29tcG9uZW50RWxlbWVudCIsImFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zIiwicmVhY3RGdW5jdGlvbiIsInJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmb3JFYWNoIiwiY2hpbGRBcmd1bWVudCIsImNoaWxkIiwiY29uc3RydWN0b3IiLCJ0ZXh0IiwidmlydHVhbERPTVRleHRFbGVtZW50IiwicHVzaCIsImdldFByb3RvdHlwZU9mIiwibWl4aW4iLCJuYW1lIiwiYmluZCIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFUSxHQUFXLENBQVgsUUFBVztBQUNSLEdBQWMsQ0FBZCxXQUFjO0FBQ1YsR0FBa0IsQ0FBbEIsZUFBa0I7QUFDZixHQUF1QixDQUF2QixNQUF1QjtBQUNwQixHQUEwQixDQUExQixTQUEwQjtBQUN6QixHQUEyQixDQUEzQixVQUEyQjtBQUMzQixHQUFzQyxDQUF0QyxZQUFzQztBQUN0QyxHQUF1QyxDQUF2QyxLQUF1QztBQUN4QyxHQUFzQyxDQUF0QyxJQUFzQztBQUUvQyxHQUFtQixDQUFuQixNQUFtQjtBQUNkLEdBQWtCLENBQWxCLEtBQWtCO0FBQ2QsR0FBYSxDQUFiLFVBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFckNBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQWRlLFdBQWMsU0FjakJDLE1BQU0sQ0FBQ0QsTUFBTTtBQUNqQyxDQUFDO1NBRVFFLGFBQWEsQ0FBQ0MsYUFBYSxFQUFFQyxVQUFVLEVBQXlCLENBQUM7SUFBeEIsR0FBR0MsQ0FBSCxHQUFxQixDQUFyQixJQUFxQixHQUFyQixTQUFxQixDQUFyQixNQUFxQixFQUFsQkEsa0JBQWtCLEdBQXJCLEdBQXFCLE9BQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEdBQXJCLENBQXFCLEdBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEdBQXJCLENBQUM7UUFBRUEsa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLENBQXJCLElBQXFCO0lBQUQsQ0FBQztJQUNyRSxHQUFH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