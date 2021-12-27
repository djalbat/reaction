"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reactClass = _interopRequireDefault(require("./reactClass"));
var _reactComponent = _interopRequireDefault(require("./reactComponent"));
var _virtualDOMElement = _interopRequireDefault(require("./virtualDOMElement"));
var _svg = _interopRequireDefault(require("./virtualDOM/container/element/svg"));
var _textElement = _interopRequireDefault(require("./virtualDOM/container/textElement"));
var _html = _interopRequireDefault(require("./virtualDOM/container/element/html"));
var _class = _interopRequireDefault(require("./virtualDOM/react/class"));
var _function = _interopRequireDefault(require("./virtualDOM/react/function"));
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
            var tagName = firstArgument; ///
            element = (0, _name).isSVGTagName(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
        } else if (_instanceof(firstArgument, _reactClass.default)) {
            var reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
            element = reactClassElement; ///
            var mixins = reactClass.mixins;
            assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
            var ReactComponentSubClass = firstArgument, reactComponent = new ReactComponentSubClass(props);
            element = reactComponent; ///
            assignReactComponentMixins(ReactComponentSubClass, element);
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
            if (isSubclassOf(childArgument.constructor, _virtualDOMElement.default)) {
                child = childArgument; ///
            } else {
                var text = childArgument, textElement = new _textElement.default(text);
                child = textElement;
            }
            children.push(child);
        }
    });
    return children;
}
function assignReactComponentMixins(ReactComponentSubClass, element) {
    var mixins = ReactComponentSubClass.mixins;
    var ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass); ///
    if (ReactComponentSubClassPrototype !== _reactComponent.default) {
        ReactComponentSubClass = ReactComponentSubClassPrototype; ///
        assignReactComponentMixins(ReactComponentSubClass, element);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5pbXBvcnQgVmlydHVhbERPTUVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTUVsZW1lbnRcIjtcblxuaW1wb3J0IFNWR0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9zdmdcIjtcbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudFwiO1xuaW1wb3J0IEhUTUxFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgIG5ldyBTVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MocHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnQ7IC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZsYXR0ZW4ocmVtYWluaW5nQXJndW1lbnRzKTsgLy8vXG5cbiAgY29uc3QgY2hpbGRyZW4gPSBbXTtcblxuICByZW1haW5pbmdBcmd1bWVudHMuZm9yRWFjaCgoY2hpbGRBcmd1bWVudCkgPT4ge1xuICAgIGxldCBjaGlsZDtcblxuICAgIGlmIChjaGlsZEFyZ3VtZW50KSB7ICAvLy9cbiAgICAgIGlmIChpc1N1YmNsYXNzT2YoY2hpbGRBcmd1bWVudC5jb25zdHJ1Y3RvciwgVmlydHVhbERPTUVsZW1lbnQpKSB7IC8vL1xuICAgICAgICBjaGlsZCA9IGNoaWxkQXJndW1lbnQ7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBjaGlsZEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDtcbiAgICAgIH1cblxuICAgICAgY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsImNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsInJlYWN0Q2xhc3MiLCJyZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsImlzU3ViY2xhc3NPZiIsIlJlYWN0Q29tcG9uZW50U3ViQ2xhc3MiLCJyZWFjdENvbXBvbmVudCIsImFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zIiwicmVhY3RGdW5jdGlvbiIsInJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmb3JFYWNoIiwiY2hpbGRBcmd1bWVudCIsImNoaWxkIiwiY29uc3RydWN0b3IiLCJ0ZXh0IiwidGV4dEVsZW1lbnQiLCJwdXNoIiwiUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwibWl4aW4iLCJuYW1lIiwiYmluZCIsImFyZ3VtZW50Iiwi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