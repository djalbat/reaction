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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVtb3ZlRmFsc2V5Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHN1YmNsYXNzID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdWJjbGFzcyA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsInNhbml0aXNlQ2hpbGRyZW4iLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJyZWFjdENsYXNzIiwicmVhY3RDbGFzc0VsZW1lbnQiLCJtaXhpbnMiLCJhc3NpZ25NaXhpbnMiLCJpc1N1YmNsYXNzT2YiLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzIiwicmVhY3RDb21wb25lbnQiLCJhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiZm9yRWFjaCIsIm1peGluIiwibmFtZSIsImJpbmQiLCJhcmd1bWVudCIsIkNsYXNzIiwic3ViY2xhc3MiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVcsR0FBYyxDQUFkLFdBQWM7QUFDVixHQUFrQixDQUFsQixlQUFrQjtBQUV0QixHQUFvQyxDQUFwQyxJQUFvQztBQUNuQyxHQUFxQyxDQUFyQyxLQUFxQztBQUMvQixHQUEwQixDQUExQixNQUEwQjtBQUN2QixHQUE2QixDQUE3QixTQUE2QjtBQUV0QyxHQUFtQixDQUFuQixNQUFtQjtBQUNkLEdBQWtCLENBQWxCLEtBQWtCO0FBQ2QsR0FBYSxDQUFiLFVBQWE7QUFDdUIsR0FBdUIsQ0FBdkIsVUFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRW5GQSxXQUFXLENBQUNDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLE1BQU0sQ0FkZSxXQUFjLFNBY2pCQyxNQUFNLENBQUNELE1BQU07QUFDakMsQ0FBQztTQUVRRSxhQUFhLENBQUNDLGFBQWEsRUFBRUMsVUFBVSxFQUFlLENBQUM7SUFBZCxHQUFHQyxDQUFILEdBQVcsQ0FBWCxJQUFXLEdBQVgsU0FBVyxDQUFYLE1BQVcsRUFBUkEsUUFBUSxHQUFYLEdBQVcsT0FBWCxJQUFXLEdBQVgsQ0FBVyxHQUFYLElBQVcsR0FBWCxDQUFXLE9BQVgsSUFBVyxHQUFYLENBQVcs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