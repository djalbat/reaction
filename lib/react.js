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
const _reactClass = /*#__PURE__*/ _interop_require_default(require("./reactClass"));
const _reactComponent = /*#__PURE__*/ _interop_require_default(require("./reactComponent"));
const _svg = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container/element/svg"));
const _html = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/container/element/html"));
const _class = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/react/class"));
const _function = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/react/function"));
const _array = require("./utilities/array");
const _name = require("./utilities/name");
const _constants = require("./constants");
const _sanitiise = require("./utilities/sanitiise");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createClass(object) {
    return _reactClass.default.create(object);
}
function createElement(firstArgument, properties, ...children) {
    let element = null;
    if (firstArgument) {
        children = sanitiseChildren(children);
        const props = Object.assign({}, properties, {
            children
        });
        if (false) {
        ///
        } else if (typeof firstArgument === _constants.STRING) {
            const tagName = firstArgument; ///
            element = (0, _name.isSVGTagName)(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
        } else if (_reactClass.default.isPrototypeOf(firstArgument)) {
            const reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
            element = reactClassElement; ///
            const { mixins } = reactClass;
            assignMixins(mixins, element);
        } else if (_reactComponent.default.isPrototypeOf(firstArgument)) {
            const ReactComponentSubClass = firstArgument, reactComponent = new ReactComponentSubClass(props);
            element = reactComponent; ///
            assignReactComponentMixins(ReactComponentSubClass, element);
        } else if (typeof firstArgument === _constants.FUNCTION) {
            const reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
            element = reactFunctionElement; ///
        }
    }
    return element;
}
const Component = _reactComponent.default, React = {
    Component,
    createClass,
    createElement
};
const _default = React;
function sanitiseChildren(children) {
    children = (0, _array.flatten)(children);
    children = (0, _sanitiise.removeFalseyChildren)(children);
    children = (0, _sanitiise.replaceStringsWithTextChildren)(children);
    return children;
}
function assignReactComponentMixins(ReactComponentSubClass, element) {
    const { mixins } = ReactComponentSubClass;
    const ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass); ///
    if (ReactComponentSubClassPrototype !== _reactComponent.default) {
        ReactComponentSubClass = ReactComponentSubClassPrototype; ///
        assignReactComponentMixins(ReactComponentSubClass, element);
    }
    assignMixins(mixins, element);
}
function assignMixins(mixins, element) {
    if (mixins) {
        mixins.forEach((mixin)=>{
            const { name } = mixin;
            element[name] = mixin.bind(element);
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZHJlbiA9IHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgbmV3IFNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKFJlYWN0Q2xhc3MuaXNQcm90b3R5cGVPZihmaXJzdEFyZ3VtZW50KSkge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoUmVhY3RDb21wb25lbnQuaXNQcm90b3R5cGVPZihmaXJzdEFyZ3VtZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MocHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnQ7IC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gZmxhdHRlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZW1vdmVGYWxzZXlDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gUmVhY3RDb21wb25lbnRTdWJDbGFzcztcblxuICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MpOyAvLy9cblxuICBpZiAoUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZTsgLy8vXG5cbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xhc3MiLCJvYmplY3QiLCJSZWFjdENsYXNzIiwiY3JlYXRlIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRyZW4iLCJlbGVtZW50Iiwic2FuaXRpc2VDaGlsZHJlbiIsInByb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwiU1RSSU5HIiwidGFnTmFtZSIsImlzU1ZHVGFnTmFtZSIsIlNWR0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsImlzUHJvdG90eXBlT2YiLCJyZWFjdENsYXNzIiwicmVhY3RDbGFzc0VsZW1lbnQiLCJSZWFjdENsYXNzRWxlbWVudCIsIm1peGlucyIsImFzc2lnbk1peGlucyIsIlJlYWN0Q29tcG9uZW50IiwiUmVhY3RDb21wb25lbnRTdWJDbGFzcyIsInJlYWN0Q29tcG9uZW50IiwiYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMiLCJGVU5DVElPTiIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIlJlYWN0RnVuY3Rpb25FbGVtZW50IiwiQ29tcG9uZW50IiwiUmVhY3QiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5Q2hpbGRyZW4iLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4iLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJmb3JFYWNoIiwibWl4aW4iLCJuYW1lIiwiYmluZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUVBOzs7ZUFBQTs7O21FQXJFdUI7dUVBQ0k7NERBRUo7NkRBQ0M7OERBQ007aUVBQ0c7dUJBRVQ7c0JBQ0s7MkJBQ0k7MkJBQ29DOzs7Ozs7QUFFckUsU0FBU0EsWUFBWUMsTUFBTTtJQUN6QixPQUFPQyxtQkFBVSxDQUFDQyxNQUFNLENBQUNGO0FBQzNCO0FBRUEsU0FBU0csY0FBY0MsYUFBYSxFQUFFQyxVQUFVLEVBQUUsR0FBR0MsUUFBUTtJQUMzRCxJQUFJQyxVQUFVO0lBRWQsSUFBSUgsZUFBZTtRQUNqQkUsV0FBV0UsaUJBQWlCRjtRQUU1QixNQUFNRyxRQUFRQyxPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHTixZQUFZO1lBQzFDQztRQUNGO1FBRUEsSUFBSSxPQUFPO1FBQ1QsR0FBRztRQUNMLE9BQU8sSUFBSSxPQUFPRixrQkFBa0JRLGlCQUFNLEVBQUU7WUFDMUMsTUFBTUMsVUFBVVQsZUFBZ0IsR0FBRztZQUVuQ0csVUFBVU8sSUFBQUEsa0JBQVksRUFBQ0QsV0FDWCxJQUFJRSxZQUFVLENBQUNGLFNBQVNKLFNBQ3RCLElBQUlPLGFBQVcsQ0FBQ0gsU0FBU0o7UUFDekMsT0FBTyxJQUFJUixtQkFBVSxDQUFDZ0IsYUFBYSxDQUFDYixnQkFBZ0I7WUFDbEQsTUFBTWMsYUFBYWQsZUFDYmUsb0JBQW9CLElBQUlDLGNBQWlCLENBQUNGLFlBQVlUO1lBRTVERixVQUFVWSxtQkFBb0IsR0FBRztZQUVqQyxNQUFNLEVBQUVFLE1BQU0sRUFBRSxHQUFHSDtZQUVuQkksYUFBYUQsUUFBUWQ7UUFDdkIsT0FBTyxJQUFJZ0IsdUJBQWMsQ0FBQ04sYUFBYSxDQUFDYixnQkFBZ0I7WUFDdEQsTUFBTW9CLHlCQUF5QnBCLGVBQ3pCcUIsaUJBQWlCLElBQUlELHVCQUF1QmY7WUFFbERGLFVBQVVrQixnQkFBZ0IsR0FBRztZQUU3QkMsMkJBQTJCRix3QkFBd0JqQjtRQUNyRCxPQUFPLElBQUksT0FBT0gsa0JBQWtCdUIsbUJBQVEsRUFBRTtZQUM1QyxNQUFNQyxnQkFBZ0J4QixlQUNoQnlCLHVCQUF1QixJQUFJQyxpQkFBb0IsQ0FBQ0YsZUFBZW5CO1lBRXJFRixVQUFVc0Isc0JBQXNCLEdBQUc7UUFDckM7SUFDRjtJQUVBLE9BQU90QjtBQUNUO0FBRUEsTUFBTXdCLFlBQVlSLHVCQUFjLEVBQzFCUyxRQUFRO0lBQ05EO0lBQ0FoQztJQUNBSTtBQUNGO01BRU4sV0FBZTZCO0FBRWYsU0FBU3hCLGlCQUFpQkYsUUFBUTtJQUNoQ0EsV0FBVzJCLElBQUFBLGNBQU8sRUFBQzNCO0lBRW5CQSxXQUFXNEIsSUFBQUEsK0JBQW9CLEVBQUM1QjtJQUVoQ0EsV0FBVzZCLElBQUFBLHlDQUE4QixFQUFDN0I7SUFFMUMsT0FBT0E7QUFDVDtBQUVBLFNBQVNvQiwyQkFBMkJGLHNCQUFzQixFQUFFakIsT0FBTztJQUNqRSxNQUFNLEVBQUVjLE1BQU0sRUFBRSxHQUFHRztJQUVuQixNQUFNWSxrQ0FBa0MxQixPQUFPMkIsY0FBYyxDQUFDYix5QkFBeUIsR0FBRztJQUUxRixJQUFJWSxvQ0FBb0NiLHVCQUFjLEVBQUU7UUFDdERDLHlCQUF5QlksaUNBQWlDLEdBQUc7UUFFN0RWLDJCQUEyQkYsd0JBQXdCakI7SUFDckQ7SUFFQWUsYUFBYUQsUUFBUWQ7QUFDdkI7QUFFQSxTQUFTZSxhQUFhRCxNQUFNLEVBQUVkLE9BQU87SUFDbkMsSUFBSWMsUUFBUTtRQUNWQSxPQUFPaUIsT0FBTyxDQUFDLENBQUNDO1lBQ2QsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBR0Q7WUFFakJoQyxPQUFPLENBQUNpQyxLQUFLLEdBQUdELE1BQU1FLElBQUksQ0FBQ2xDO1FBQzdCO0lBQ0Y7QUFDRiJ9