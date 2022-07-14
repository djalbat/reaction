"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _reactClass = _interopRequireDefault(require("./reactClass"));
var _reactComponent = _interopRequireDefault(require("./reactComponent"));
var _svg = _interopRequireDefault(require("./virtualDOM/container/element/svg"));
var _html = _interopRequireDefault(require("./virtualDOM/container/element/html"));
var _class = _interopRequireDefault(require("./virtualDOM/react/class"));
var _function = _interopRequireDefault(require("./virtualDOM/react/function"));
var _array = require("./utilities/array");
var _name = require("./utilities/name");
var _constants = require("./constants");
var _sanitiise = require("./utilities/sanitiise");
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
function sanitiseChildren(children) {
    children = (0, _array).flatten(children);
    children = (0, _sanitiise).removeFalseyChildren(children);
    children = (0, _sanitiise).replaceStringsWithTextChildren(children);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVtb3ZlRmFsc2V5Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwib2JqZWN0IiwiY3JlYXRlIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwidW5kZWZpbmVkIiwic2FuaXRpc2VDaGlsZHJlbiIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsInJlYWN0Q2xhc3MiLCJyZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsImlzU3ViY2xhc3NPZiIsIlJlYWN0Q29tcG9uZW50U3ViQ2xhc3MiLCJyZWFjdENvbXBvbmVudCIsImFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zIiwicmVhY3RGdW5jdGlvbiIsInJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJmb3JFYWNoIiwibWl4aW4iLCJuYW1lIiwiYmluZCIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVXLEdBQWMsQ0FBZCxXQUFjO0FBQ1YsR0FBa0IsQ0FBbEIsZUFBa0I7QUFFdEIsR0FBb0MsQ0FBcEMsSUFBb0M7QUFDbkMsR0FBcUMsQ0FBckMsS0FBcUM7QUFDL0IsR0FBMEIsQ0FBMUIsTUFBMEI7QUFDdkIsR0FBNkIsQ0FBN0IsU0FBNkI7QUFFdEMsR0FBbUIsQ0FBbkIsTUFBbUI7QUFDZCxHQUFrQixDQUFsQixLQUFrQjtBQUNkLEdBQWEsQ0FBYixVQUFhO0FBQ3VCLEdBQXVCLENBQXZCLFVBQXVCOzs7Ozs7Ozs7Ozs7Ozs7OztTQUVuRkEsV0FBVyxDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixNQUFNLENBZGUsV0FBYyxTQWNqQkMsTUFBTSxDQUFDRCxNQUFNO0FBQ2pDLENBQUM7U0FFUUUsYUFBYSxDQUFDQyxhQUFhLEVBQUVDLFVBQVUsRUFBZSxDQUFDO0lBQWQsR0FBR0MsQ0FBSCxHQUFXLENBQVgsSUFBVyxHQUFYLFNBQVcsQ0FBWCxNQUFXLEVBQVJBLFFBQVEsR0FBWCxHQUFXLE9BQVgsSUFBVyxHQUFYLENBQVcsR0FBWCxJQUFXLEdBQVgsQ0FBVyxPQUFYLElBQVcsR0FBWCxDQUFXLEVBQVgsSUFBVyxHQUFYLElBQVcsRUFBWCxJQUFXLEdBQVgsQ0FBQztRQUFFQSxRQUFRLENBQVgsSUFBVyxHQUFYLENBQVcsSUFBWCxTQUFXLENBQVgsSUFBVztJQUFELENBQUM7SUFDM0QsR0FBRyxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUVsQixFQUFFLEVBQUVILGFBQWEsS0FBS0ksU0FBUyxFQUFFLENB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