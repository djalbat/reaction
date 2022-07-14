"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _reactClass = /*#__PURE__*/ _interopRequireDefault(require("./reactClass"));
var _reactComponent = /*#__PURE__*/ _interopRequireDefault(require("./reactComponent"));
var _svg = /*#__PURE__*/ _interopRequireDefault(require("./virtualDOM/container/element/svg"));
var _html = /*#__PURE__*/ _interopRequireDefault(require("./virtualDOM/container/element/html"));
var _class = /*#__PURE__*/ _interopRequireDefault(require("./virtualDOM/react/class"));
var _function = /*#__PURE__*/ _interopRequireDefault(require("./virtualDOM/react/function"));
var _array = require("./utilities/array");
var _name = require("./utilities/name");
var _constants = require("./constants");
var _sanitiise = require("./utilities/sanitiise");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function createClass(object) {
    return _reactClass.default.create(object);
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    var element = null;
    if (firstArgument !== undefined) {
        children = sanitiseChildren(children);
        var props = Object.assign({}, properties, {
            children: children
        });
        if (false) {
        ///
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
            var tagName = firstArgument; ///
            element = (0, _name.isSVGTagName)(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
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
function sanitiseChildren(children) {
    children = (0, _array.flatten)(children);
    children = (0, _sanitiise.removeFalseyChildren)(children);
    children = (0, _sanitiise.replaceStringsWithTextChildren)(children);
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
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVtb3ZlRmFsc2V5Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwib2JqZWN0IiwiUmVhY3RDbGFzcyIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsInNhbml0aXNlQ2hpbGRyZW4iLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsIlNUUklORyIsInRhZ05hbWUiLCJpc1NWR1RhZ05hbWUiLCJTVkdFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RDbGFzc0VsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsImlzU3ViY2xhc3NPZiIsIlJlYWN0Q29tcG9uZW50IiwiUmVhY3RDb21wb25lbnRTdWJDbGFzcyIsInJlYWN0Q29tcG9uZW50IiwiYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMiLCJGVU5DVElPTiIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5Q2hpbGRyZW4iLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4iLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJmb3JFYWNoIiwibWl4aW4iLCJuYW1lIiwiYmluZCIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBdUViLFNBQXFCOzs7ZUFBckIsUUFBcUI7OzsrREFyRUUsY0FBYzttRUFDVixrQkFBa0I7d0RBRXRCLG9DQUFvQzt5REFDbkMscUNBQXFDOzBEQUMvQiwwQkFBMEI7NkRBQ3ZCLDZCQUE2QjtxQkFFdEMsbUJBQW1CO29CQUNkLGtCQUFrQjt5QkFDZCxhQUFhO3lCQUN1Qix1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLFNBQVNBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFO0lBQzNCLE9BQU9DLFdBQVUsUUFBQSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sQ0FBQyxDQUFDO0NBQ2xDO0FBRUQsU0FBU0csYUFBYSxDQUFDQyxhQUFhLEVBQUVDLFVBQVUsRUFBZTtJQUFiLElBQUEsSUFBQSxJQUFXLEdBQVgsU0FBVyxDQUFYLE1BQVcsRUFBWCxBQUFHQyxRQUFRLEdBQVgsVUFBQSxJQUFXLEdBQVgsQ0FBVyxHQUFYLElBQVcsR0FBWCxDQUFXLElBQUEsQ0FBQSxFQUFYLElBQVcsR0FBWCxDQUFXLEVBQVgsSUFBVyxHQUFYLElBQVcsRUFBWCxJQUFXLEVB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