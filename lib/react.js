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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVtb3ZlRmFsc2V5Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsYXNzIiwib2JqZWN0IiwiUmVhY3RDbGFzcyIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsInNhbml0aXNlQ2hpbGRyZW4iLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsIlNUUklORyIsInRhZ05hbWUiLCJpc1NWR1RhZ05hbWUiLCJTVkdFbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJyZWFjdENsYXNzIiwicmVhY3RDbGFzc0VsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsImlzU3ViY2xhc3NPZiIsIlJlYWN0Q29tcG9uZW50IiwiUmVhY3RDb21wb25lbnRTdWJDbGFzcyIsInJlYWN0Q29tcG9uZW50IiwiYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMiLCJGVU5DVElPTiIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5Q2hpbGRyZW4iLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4iLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJmb3JFYWNoIiwibWl4aW4iLCJuYW1lIiwiYmluZCIsImFyZ3VtZW50IiwiQ2xhc3MiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7K0RBckV1QjttRUFDSTt3REFFSjt5REFDQzswREFDTTs2REFDRztxQkFFVDtvQkFDSzt5QkFDSTt5QkFDb0M7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJFLFNBQVNBLFlBQVlDLE1BQU0sRUFBRTtJQUMzQixPQUFPQyxtQkFBVSxDQUFDQyxNQUFNLENBQUNGO0FBQzNCO0FBRUEsU0FBU0csY0FBY0MsYUFBYSxFQUFFQyxVQUFVLEVBQWU7SUFBYixJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsV0FBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLEtBQVcsR0FBWCxPQUFBLEdBQUEsT0FBQSxNQUFBLE9BQUE7UUFBR0EsU0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQVc7SUFBRDtJQUMxRCxJQUFJQyxVQUFVLElBQUk7SUFFbEIsSUFBSUgsa0JBQWtCSSxXQUFXO1FBQy9CRixXQUFXRyxpQkFBaUJIO1FBRTVCLElBQU1JLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdQLFlBQVk7WUFDMUNDLFVBQUFBO1FBQ0Y7UUFFQSxJQUFJLEtBQUssRUFBRTtRQUNULEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQSxPQUFPRiw4Q0FBUCxRQUFPQSxjQUFhLEFBQUQsTUFBTVMsaUJBQU0sRUFBRTtZQUMxQyxJQUFNQyxVQUFVVixlQUFnQixHQUFHO1lBRW5DRyxVQUFVUSxJQUFBQSxrQkFBWSxFQUFDRCxXQUNYLElBQUlFLFlBQVUsQ0FBQ0YsU0FBU0osU0FDdEIsSUFBSU8sYUFBVyxDQUFDSCxTQUFTSixNQUFNO1FBQy9DLE9BQU8sSUFBSU4sQUFBYSxZQUFiQSxlQUF5QkgsbUJBQVUsR0FBRTtZQUM5QyxJQUFNaUIsYUFBYWQsZUFDYmUsb0JBQW9CLElBQUlDLGNBQWlCLENBQUNGLFlBQVlSO1lBRTVESCxVQUFVWSxtQkFBb0IsR0FBRztZQUVqQyxJQUFNLEFBQUVFLFNBQVdILFdBQVhHO1lBRVJDLGFBQWFELFFBQVFkO1FBQ3ZCLE9BQU8sSUFBSWdCLGFBQWFuQixlQUFlb0IsdUJBQWMsR0FBRztZQUN0RCxJQUFNQyx5QkFBeUJyQixlQUN6QnNCLGlCQUFpQixJQUFJRCx1QkFBdUJmO1lBRWxESCxVQUFVbUIsZ0JBQWdCLEdBQUc7WUFFN0JDLDJCQUEyQkYsd0JBQXdCbEI7UUFDckQsT0FBTyxJQUFJLENBQUEsT0FBT0gsOENBQVAsUUFBT0EsY0FBYSxBQUFELE1BQU13QixtQkFBUSxFQUFFO1lBQzVDLElBQU1DLGdCQUFnQnpCLGVBQ2hCMEIsdUJBQXVCLElBQUlDLGlCQUFvQixDQUFDRixlQUFlbkI7WUFFckVILFVBQVV1QixzQkFBc0IsR0FBRztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztJQUVELE9BQU92QjtBQUNUO0FBRUEsSUFBTXlCLFlBQVlSLHVCQUFjLEVBQzFCUyxRQUFRO0lBQ05ELFdBQUFBO0lBQ0FqQyxhQUFBQTtJQUNBSSxlQUFBQTtBQUNGO0lBRU4sV0FBZThCO0FBRWYsU0FBU3hCLGlCQUFpQkgsUUFBUSxFQUFFO0lBQ2xDQSxXQUFXNEIsSUFBQUEsY0FBTyxFQUFDNUI7SUFFbkJBLFdBQVc2QixJQUFBQSwrQkFBb0IsRUFBQzdCO0lBRWhDQSxXQUFXOEIsSUFBQUEseUNBQThCLEVBQUM5QjtJQUUxQyxPQUFPQTtBQUNUO0FBRUEsU0FBU3FCLDJCQUEyQkYsc0JBQXNCLEVBQUVsQixPQUFPLEVBQUU7SUFDbkUsSUFBTSxBQUFFYyxTQUFXSSx1QkFBWEo7SUFFUixJQUFNZ0Isa0NBQWtDMUIsT0FBTzJCLGNBQWMsQ0FBQ2IseUJBQXlCLEdBQUc7SUFFMUYsSUFBSVksb0NBQW9DYix1QkFBYyxFQUFFO1FBQ3REQyx5QkFBeUJZLGlDQUFpQyxHQUFHO1FBRTdEViwyQkFBMkJGLHdCQUF3QmxCO0lBQ3JELENBQUM7SUFFRGUsYUFBYUQsUUFBUWQ7QUFDdkI7QUFFQSxTQUFTZSxhQUFhRCxNQUFNLEVBQUVkLE9BQU8sRUFBRTtJQUNyQyxJQUFJYyxRQUFRO1FBQ1ZBLE9BQU9rQixPQUFPLENBQUMsU0FBQ0MsT0FBVTtZQUN4QixJQUFNLEFBQUVDLE9BQVNELE1BQVRDO1lBRVJsQyxPQUFPLENBQUNrQyxLQUFLLEdBQUdELE1BQU1FLElBQUksQ0FBQ25DO1FBQzdCO0lBQ0YsQ0FBQztBQUNIO0FBRUEsU0FBU2dCLGFBQWFvQixRQUFRLEVBQUVDLEtBQUssRUFBRTtJQUNyQyxJQUFNQyxhQUFjRixBQUFrQixZQUFsQkEsU0FBU0csU0FBUyxFQUFZRjtJQUVsRCxPQUFPQztBQUNUIn0=