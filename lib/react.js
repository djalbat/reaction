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
            var ReactComponent = firstArgument, reactComponent = new ReactComponent(props);
            // reactComponentElement = new ReactComponentElement(reactComponent, props);*/
            // element = reactComponentElement;  ///
            element = reactComponent; ///
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
    reactComponent = Object.getPrototypeOf(reactComponent); ///
    if (reactComponent !== _reactComponent.default) {
        assignReactComponentMixins(reactComponent, element);
    }
    var mixins = reactComponent.mixins;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb25cIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jb21wb25lbnRcIjtcbmltcG9ydCBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01IVE1MRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFZpcnR1YWxET01TVkdFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmdcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01TVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgVmlydHVhbERPTUhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHZpcnR1YWxET01FbGVtZW50IC8vL1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50ID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnQocHJvcHMpO1xuICAgICAgICAgICAgLy8gcmVhY3RDb21wb25lbnRFbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpOyovXG5cbiAgICAgIC8vIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xuXG4gIHJlbWFpbmluZ0FyZ3VtZW50cy5mb3JFYWNoKChjaGlsZEFyZ3VtZW50KSA9PiB7XG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKGNoaWxkQXJndW1lbnQpIHsgIC8vL1xuICAgICAgaWYgKGlzU3ViY2xhc3NPZihjaGlsZEFyZ3VtZW50LmNvbnN0cnVjdG9yLCBFbGVtZW50KSkgeyAvLy9cbiAgICAgICAgY2hpbGQgPSBjaGlsZEFyZ3VtZW50OyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICAgIHZpcnR1YWxET01UZXh0RWxlbWVudCA9IG5ldyBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgY2hpbGQgPSB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCkge1xuICByZWFjdENvbXBvbmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihyZWFjdENvbXBvbmVudCk7IC8vL1xuXG4gIGlmIChyZWFjdENvbXBvbmVudCAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhyZWFjdENvbXBvbmVudCwgZWxlbWVudCk7XG4gIH1cblxuICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDb21wb25lbnQ7XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgc3ViY2xhc3MgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQubmFtZSA9PT0gQ2xhc3MubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ViY2xhc3M7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xhc3MiLCJvYmplY3QiLCJjcmVhdGUiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMiLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJ2aXJ0dWFsRE9NRWxlbWVudCIsInJlYWN0Q2xhc3MiLCJyZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsImlzU3ViY2xhc3NPZiIsIlJlYWN0Q29tcG9uZW50IiwicmVhY3RDb21wb25lbnQiLCJhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiZm9yRWFjaCIsImNoaWxkQXJndW1lbnQiLCJjaGlsZCIsImNvbnN0cnVjdG9yIiwidGV4dCIsInZpcnR1YWxET01UZXh0RWxlbWVudCIsInB1c2giLCJnZXRQcm90b3R5cGVPZiIsIm1peGluIiwibmFtZSIsImJpbmQiLCJhcmd1bWVudCIsIkNsYXNzIiwic3ViY2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVEsR0FBVyxDQUFYLFFBQVc7QUFDUixHQUFjLENBQWQsV0FBYztBQUNWLEdBQWtCLENBQWxCLGVBQWtCO0FBQ2YsR0FBdUIsQ0FBdkIsTUFBdUI7QUFDcEIsR0FBMEIsQ0FBMUIsU0FBMEI7QUFDekIsR0FBMkIsQ0FBM0IsVUFBMkI7QUFDM0IsR0FBc0MsQ0FBdEMsWUFBc0M7QUFDdEMsR0FBdUMsQ0FBdkMsS0FBdUM7QUFDeEMsR0FBc0MsQ0FBdEMsSUFBc0M7QUFFL0MsR0FBbUIsQ0FBbkIsTUFBbUI7QUFDZCxHQUFrQixDQUFsQixLQUFrQjtBQUNkLEdBQWEsQ0FBYixVQUFhOzs7Ozs7Ozs7Ozs7Ozs7O1NBRXJDQSxXQUFXLENBQUNDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FkZSxXQUFjLFNBY2pCQyxNQUFNLENBQUNELE1BQU07QUFDakMsQ0FBQztTQUVRRSxhQUFhLENBQUNDLGFBQWEsRUFBRUMsVUFBVSxFQUF5QixDQUFDO0lBQXhCLEdBQUdDLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEJBLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO1FBQUVBLGtCQUFrQixDQUFyQixJQUFxQixHQUFyQixDQUFxQixJQUFyQixTQUFxQixDQUFy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