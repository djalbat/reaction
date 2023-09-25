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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZHJlbiA9IHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgbmV3IFNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICBjb25zdCByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudCwgLy8vXG4gICAgICAgICAgICByZWFjdENsYXNzRWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENsYXNzRWxlbWVudDsgIC8vL1xuXG4gICAgICBjb25zdCB7IG1peGlucyB9ID0gcmVhY3RDbGFzcztcblxuICAgICAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgUmVhY3RDb21wb25lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRTdWJDbGFzcyhwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudDsgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsIlJlYWN0Q2xhc3MiLCJjcmVhdGUiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkcmVuIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJTVFJJTkciLCJ0YWdOYW1lIiwiaXNTVkdUYWdOYW1lIiwiU1ZHRWxlbWVudCIsIkhUTUxFbGVtZW50IiwicmVhY3RDbGFzcyIsInJlYWN0Q2xhc3NFbGVtZW50IiwiUmVhY3RDbGFzc0VsZW1lbnQiLCJtaXhpbnMiLCJhc3NpZ25NaXhpbnMiLCJpc1N1YmNsYXNzT2YiLCJSZWFjdENvbXBvbmVudCIsIlJlYWN0Q29tcG9uZW50U3ViQ2xhc3MiLCJyZWFjdENvbXBvbmVudCIsImFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zIiwiRlVOQ1RJT04iLCJyZWFjdEZ1bmN0aW9uIiwicmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJSZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUNoaWxkcmVuIiwicmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIiwiUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiZm9yRWFjaCIsIm1peGluIiwibmFtZSIsImJpbmQiLCJhcmd1bWVudCIsIkNsYXNzIiwic3ViY2xhc3NPZiIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUVBOzs7ZUFBQTs7O2lFQXJFdUI7cUVBQ0k7MERBRUo7MkRBQ0M7NERBQ007K0RBQ0c7cUJBRVQ7b0JBQ0s7eUJBQ0k7eUJBQ29DOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVyRSxTQUFTQSxZQUFZQyxNQUFNO0lBQ3pCLE9BQU9DLG1CQUFVLENBQUNDLE1BQU0sQ0FBQ0Y7QUFDM0I7QUFFQSxTQUFTRyxjQUFjQyxhQUFhLEVBQUVDLFVBQVU7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsV0FBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQSxPQUFBO1FBQUdBLFNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFXO0lBQUQ7SUFDMUQsSUFBSUMsVUFBVTtJQUVkLElBQUlILGVBQWU7UUFDakJFLFdBQVdFLGlCQUFpQkY7UUFFNUIsSUFBTUcsUUFBUUMsT0FBT0MsTUFBTSxDQUFDLENBQUMsR0FBR04sWUFBWTtZQUMxQ0MsVUFBQUE7UUFDRjtRQUVBLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQSxPQUFPRiw4Q0FBUCxTQUFPQSxjQUFZLE1BQU1RLGlCQUFNLEVBQUU7WUFDMUMsSUFBTUMsVUFBVVQsZUFBZ0IsR0FBRztZQUVuQ0csVUFBVU8sSUFBQUEsa0JBQVksRUFBQ0QsV0FDWCxJQUFJRSxZQUFVLENBQUNGLFNBQVNKLFNBQ3RCLElBQUlPLGFBQVcsQ0FBQ0gsU0FBU0o7UUFDekMsT0FBTyxJQUFJTCxBQUFhLFlBQWJBLGVBQXlCSCxtQkFBVSxHQUFFO1lBQzlDLElBQU1nQixhQUFhYixlQUNiYyxvQkFBb0IsSUFBSUMsY0FBaUIsQ0FBQ0YsWUFBWVI7WUFFNURGLFVBQVVXLG1CQUFvQixHQUFHO1lBRWpDLElBQU0sQUFBRUUsU0FBV0gsV0FBWEc7WUFFUkMsYUFBYUQsUUFBUWI7UUFDdkIsT0FBTyxJQUFJZSxhQUFhbEIsZUFBZW1CLHVCQUFjLEdBQUc7WUFDdEQsSUFBTUMseUJBQXlCcEIsZUFDekJxQixpQkFBaUIsSUFBSUQsdUJBQXVCZjtZQUVsREYsVUFBVWtCLGdCQUFnQixHQUFHO1lBRTdCQywyQkFBMkJGLHdCQUF3QmpCO1FBQ3JELE9BQU8sSUFBSSxDQUFBLE9BQU9ILDhDQUFQLFNBQU9BLGNBQVksTUFBTXVCLG1CQUFRLEVBQUU7WUFDNUMsSUFBTUMsZ0JBQWdCeEIsZUFDaEJ5Qix1QkFBdUIsSUFBSUMsaUJBQW9CLENBQUNGLGVBQWVuQjtZQUVyRUYsVUFBVXNCLHNCQUFzQixHQUFHO1FBQ3JDO0lBQ0Y7SUFFQSxPQUFPdEI7QUFDVDtBQUVBLElBQU13QixZQUFZUix1QkFBYyxFQUMxQlMsUUFBUTtJQUNORCxXQUFBQTtJQUNBaEMsYUFBQUE7SUFDQUksZUFBQUE7QUFDRjtJQUVOLFdBQWU2QjtBQUVmLFNBQVN4QixpQkFBaUJGLFFBQVE7SUFDaENBLFdBQVcyQixJQUFBQSxjQUFPLEVBQUMzQjtJQUVuQkEsV0FBVzRCLElBQUFBLCtCQUFvQixFQUFDNUI7SUFFaENBLFdBQVc2QixJQUFBQSx5Q0FBOEIsRUFBQzdCO0lBRTFDLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTb0IsMkJBQTJCRixzQkFBc0IsRUFBRWpCLE9BQU87SUFDakUsSUFBTSxBQUFFYSxTQUFXSSx1QkFBWEo7SUFFUixJQUFNZ0Isa0NBQWtDMUIsT0FBTzJCLGNBQWMsQ0FBQ2IseUJBQXlCLEdBQUc7SUFFMUYsSUFBSVksb0NBQW9DYix1QkFBYyxFQUFFO1FBQ3REQyx5QkFBeUJZLGlDQUFpQyxHQUFHO1FBRTdEViwyQkFBMkJGLHdCQUF3QmpCO0lBQ3JEO0lBRUFjLGFBQWFELFFBQVFiO0FBQ3ZCO0FBRUEsU0FBU2MsYUFBYUQsTUFBTSxFQUFFYixPQUFPO0lBQ25DLElBQUlhLFFBQVE7UUFDVkEsT0FBT2tCLE9BQU8sQ0FBQyxTQUFDQztZQUNkLElBQU0sQUFBRUMsT0FBU0QsTUFBVEM7WUFFUmpDLE9BQU8sQ0FBQ2lDLEtBQUssR0FBR0QsTUFBTUUsSUFBSSxDQUFDbEM7UUFDN0I7SUFDRjtBQUNGO0FBRUEsU0FBU2UsYUFBYW9CLFFBQVEsRUFBRUMsS0FBSztJQUNuQyxJQUFNQyxhQUFjRixBQUFrQixZQUFsQkEsU0FBU0csU0FBUyxFQUFZRjtJQUVsRCxPQUFPQztBQUNUIn0=