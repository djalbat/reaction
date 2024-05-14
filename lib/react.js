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
var _reactClass = /*#__PURE__*/ _interop_require_default(require("./reactClass"));
var _reactComponent = /*#__PURE__*/ _interop_require_default(require("./reactComponent"));
var _svg = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container/element/svg"));
var _html = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container/element/html"));
var _class = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/react/class"));
var _function = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/react/function"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function createClass(object) {
    return _reactClass.default.create(object);
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        children[_key - 2] = arguments[_key];
    }
    var element = null;
    if (firstArgument) {
        children = sanitiseChildren(children);
        var props = Object.assign({}, properties, {
            children: children
        });
        if (false) {
        ///
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.STRING) {
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
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZHJlbiA9IHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgbmV3IFNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRTdWJDbGFzcyhwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudDsgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsIlJlYWN0Q2xhc3MiLCJjcmVhdGUiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkcmVuIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJTVFJJTkciLCJ0YWdOYW1lIiwiaXNTVkdUYWdOYW1lIiwiU1ZHRWxlbWVudCIsIkhUTUxFbGVtZW50IiwicmVhY3RDbGFzcyIsInJlYWN0Q2xhc3NFbGVtZW50IiwiUmVhY3RDbGFzc0VsZW1lbnQiLCJtaXhpbnMiLCJhc3NpZ25NaXhpbnMiLCJpc1N1YmNsYXNzT2YiLCJSZWFjdENvbXBvbmVudCIsIlJlYWN0Q29tcG9uZW50U3ViQ2xhc3MiLCJyZWFjdENvbXBvbmVudCIsImFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zIiwiRlVOQ1RJT04iLCJyZWFjdEZ1bmN0aW9uIiwicmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJSZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUNoaWxkcmVuIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIiwiUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiZm9yRWFjaCIsIm1peGluIiwibmFtZSIsImJpbmQiLCJhcmd1bWVudCIsIkNsYXNzIiwic3ViY2xhc3NPZiIsInByb3RvdHlwZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVFQTs7O2VBQUE7OztpRUFyRXVCO3FFQUNJOzBEQUVKOzJEQUNDOzREQUNNOytEQUNHO3FCQUVUO29CQUNLO3lCQUNJO3lCQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckUsU0FBU0EsWUFBWUMsTUFBTTtJQUN6QixPQUFPQyxtQkFBVSxDQUFDQyxNQUFNLENBQUNGO0FBQzNCO0FBRUEsU0FBU0csY0FBY0MsYUFBYSxFQUFFQyxVQUFVO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLFdBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsU0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQVc7O0lBQzNELElBQUlDLFVBQVU7SUFFZCxJQUFJSCxlQUFlO1FBQ2pCRSxXQUFXRSxpQkFBaUJGO1FBRTVCLElBQU1HLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdOLFlBQVk7WUFDMUNDLFVBQUFBO1FBQ0Y7UUFFQSxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUEsT0FBT0YsOENBQVAsU0FBT0EsY0FBWSxNQUFNUSxpQkFBTSxFQUFFO1lBQzFDLElBQU1DLFVBQVVULGVBQWdCLEdBQUc7WUFFbkNHLFVBQVVPLElBQUFBLGtCQUFZLEVBQUNELFdBQ1gsSUFBSUUsWUFBVSxDQUFDRixTQUFTSixTQUN0QixJQUFJTyxhQUFXLENBQUNILFNBQVNKO1FBQ3pDLE9BQU8sSUFBSUwsQUFBYSxZQUFiQSxlQUF5QkgsbUJBQVUsR0FBRTtZQUM5QyxJQUFNZ0IsYUFBYWIsZUFDYmMsb0JBQW9CLElBQUlDLGNBQWlCLENBQUNGLFlBQVlSO1lBRTVERixVQUFVVyxtQkFBb0IsR0FBRztZQUVqQyxJQUFNLEFBQUVFLFNBQVdILFdBQVhHO1lBRVJDLGFBQWFELFFBQVFiO1FBQ3ZCLE9BQU8sSUFBSWUsYUFBYWxCLGVBQWVtQix1QkFBYyxHQUFHO1lBQ3RELElBQU1DLHlCQUF5QnBCLGVBQ3pCcUIsaUJBQWlCLElBQUlELHVCQUF1QmY7WUFFbERGLFVBQVVrQixnQkFBZ0IsR0FBRztZQUU3QkMsMkJBQTJCRix3QkFBd0JqQjtRQUNyRCxPQUFPLElBQUksQ0FBQSxPQUFPSCw4Q0FBUCxTQUFPQSxjQUFZLE1BQU11QixtQkFBUSxFQUFFO1lBQzVDLElBQU1DLGdCQUFnQnhCLGVBQ2hCeUIsdUJBQXVCLElBQUlDLGlCQUFvQixDQUFDRixlQUFlbkI7WUFFckVGLFVBQVVzQixzQkFBc0IsR0FBRztRQUNyQztJQUNGO0lBRUEsT0FBT3RCO0FBQ1Q7QUFFQSxJQUFNd0IsWUFBWVIsdUJBQWMsRUFDMUJTLFFBQVE7SUFDTkQsV0FBQUE7SUFDQWhDLGFBQUFBO0lBQ0FJLGVBQUFBO0FBQ0Y7SUFFTixXQUFlNkI7QUFFZixTQUFTeEIsaUJBQWlCRixRQUFRO0lBQ2hDQSxXQUFXMkIsSUFBQUEsY0FBTyxFQUFDM0I7SUFFbkJBLFdBQVc0QixJQUFBQSwrQkFBb0IsRUFBQzVCO0lBRWhDQSxXQUFXNkIsSUFBQUEseUNBQThCLEVBQUM3QjtJQUUxQyxPQUFPQTtBQUNUO0FBRUEsU0FBU29CLDJCQUEyQkYsc0JBQXNCLEVBQUVqQixPQUFPO0lBQ2pFLElBQU0sQUFBRWEsU0FBV0ksdUJBQVhKO0lBRVIsSUFBTWdCLGtDQUFrQzFCLE9BQU8yQixjQUFjLENBQUNiLHlCQUF5QixHQUFHO0lBRTFGLElBQUlZLG9DQUFvQ2IsdUJBQWMsRUFBRTtRQUN0REMseUJBQXlCWSxpQ0FBaUMsR0FBRztRQUU3RFYsMkJBQTJCRix3QkFBd0JqQjtJQUNyRDtJQUVBYyxhQUFhRCxRQUFRYjtBQUN2QjtBQUVBLFNBQVNjLGFBQWFELE1BQU0sRUFBRWIsT0FBTztJQUNuQyxJQUFJYSxRQUFRO1FBQ1ZBLE9BQU9rQixPQUFPLENBQUMsU0FBQ0M7WUFDZCxJQUFNLEFBQUVDLE9BQVNELE1BQVRDO1lBRVJqQyxPQUFPLENBQUNpQyxLQUFLLEdBQUdELE1BQU1FLElBQUksQ0FBQ2xDO1FBQzdCO0lBQ0Y7QUFDRjtBQUVBLFNBQVNlLGFBQWFvQixRQUFRLEVBQUVDLEtBQUs7SUFDbkMsSUFBTUMsYUFBY0YsQUFBa0IsWUFBbEJBLFNBQVNHLFNBQVMsRUFBWUY7SUFFbEQsT0FBT0M7QUFDVCJ9