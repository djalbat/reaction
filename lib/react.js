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
        } else if (typeof firstArgument === "string") {
            var tagName = firstArgument, virtualDOMElement = _name.isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
            element = virtualDOMElement; ///
        } else if (_instanceof(firstArgument, _reactClass.default)) {
            var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
            element = reactClassElement; ///
            var mixins = reactClass.mixins;
            assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
            var ReactComponent = firstArgument, reactComponent = new ReactComponent(), reactComponentElement = new _component.default(reactComponent, props);
            element = reactComponentElement; ///
            assignReactComponentMixins(ReactComponent, element);
        } else if (typeof firstArgument === "function") {
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
    remainingArguments = _array.flatten(remainingArguments); ///
    var children = remainingArguments.map(function(childArgument) {
        var child;
        if (isSubclassOf(childArgument.constructor, _element.default)) {
            child = childArgument; ///
        } else {
            var text = childArgument, virtualDOMTextElement = new _textElement.default(text);
            child = virtualDOMTextElement;
        }
        return child;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvcmVhY3QvZnVuY3Rpb25cIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9yZWFjdC9jb21wb25lbnRcIjtcbmltcG9ydCBWaXJ0dWFsRE9NVGV4dEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC92aXJ0dWFsRE9NTm9kZS90ZXh0RWxlbWVudFwiO1xuaW1wb3J0IFZpcnR1YWxET01IVE1MRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFZpcnR1YWxET01TVkdFbGVtZW50IGZyb20gXCIuL2VsZW1lbnQvdmlydHVhbERPTU5vZGUvZWxlbWVudC9zdmdcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gIHJldHVybiBSZWFjdENsYXNzLmNyZWF0ZShvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgdmlydHVhbERPTUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBWaXJ0dWFsRE9NU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFZpcnR1YWxET01IVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSB2aXJ0dWFsRE9NRWxlbWVudCAvLy9cbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudCA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50KCksXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudEVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudEVsZW1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnQsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZsYXR0ZW4ocmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG5cbiAgY29uc3QgY2hpbGRyZW4gPSByZW1haW5pbmdBcmd1bWVudHMubWFwKChjaGlsZEFyZ3VtZW50KSA9PiB7XG4gICAgbGV0IGNoaWxkO1xuXG4gICAgaWYgKGlzU3ViY2xhc3NPZihjaGlsZEFyZ3VtZW50LmNvbnN0cnVjdG9yLCBFbGVtZW50KSkgeyAvLy9cbiAgICAgIGNoaWxkID0gY2hpbGRBcmd1bWVudDsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXh0ID0gY2hpbGRBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICB2aXJ0dWFsRE9NVGV4dEVsZW1lbnQgPSBuZXcgVmlydHVhbERPTVRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IHZpcnR1YWxET01UZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMocmVhY3RDb21wb25lbnQsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q29tcG9uZW50O1xuXG4gIHJlYWN0Q29tcG9uZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHJlYWN0Q29tcG9uZW50KTsgLy8vXG5cbiAgaWYgKHJlYWN0Q29tcG9uZW50ICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKHJlYWN0Q29tcG9uZW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsUUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsTUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLEtBQUE7SUFDQSxJQUFBO0lBRUEsTUFBQTtJQUNBLEtBQUE7Ozs7Ozs7Ozs7Ozs7U0FFQSxXQUFBLENBQUEsTUFBQTtXQVpBLFdBQUEsU0FhQSxNQUFBLENBQUEsTUFBQTs7U0FHQSxhQUFBLENBQUEsYUFBQSxFQUFBLFVBQUE7WUFBQSxJQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxrQkFBQSxhQUFBLElBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxFQUFBLElBQUE7QUFBQSwwQkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLElBQUE7O1FBQ0EsT0FBQSxHQUFBLElBQUE7UUFFQSxhQUFBLEtBQUEsU0FBQTtZQUNBLFFBQUEsR0FBQSw4QkFBQSxDQUFBLGtCQUFBLEdBQ0EsS0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBO1dBQUEsVUFBQTtBQUNBLG9CQUFBLEVBQUEsUUFB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