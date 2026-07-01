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
        } else if (_reactClass.default.prototype.isPrototypeOf(firstArgument)) {
            const reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
            element = reactClassElement; ///
            const { mixins } = reactClass;
            assignMixins(mixins, element);
        } else if (_reactComponent.default.prototype.isPrototypeOf(firstArgument)) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZHJlbiA9IHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZHJlblxuICAgIH0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgbmV3IFNWR0VsZW1lbnQodGFnTmFtZSwgcHJvcHMpIDpcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhUTUxFbGVtZW50KHRhZ05hbWUsIHByb3BzKTtcbiAgICB9IGVsc2UgaWYgKFJlYWN0Q2xhc3MucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoZmlyc3RBcmd1bWVudCkpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKFJlYWN0Q29tcG9uZW50LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRTdWJDbGFzcyhwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdENvbXBvbmVudDsgLy8vXG5cbiAgICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgcmVhY3RGdW5jdGlvbkVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RGdW5jdGlvbkVsZW1lbnQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBDb21wb25lbnQgPSBSZWFjdENvbXBvbmVudCwgLy8vXG4gICAgICBSZWFjdCA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBjcmVhdGVDbGFzcyxcbiAgICAgICAgY3JlYXRlRWxlbWVudFxuICAgICAgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBmbGF0dGVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICBjaGlsZHJlbiA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHsgbWl4aW5zIH0gPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzO1xuXG4gIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUmVhY3RDb21wb25lbnRTdWJDbGFzcyk7IC8vL1xuXG4gIGlmIChSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlICE9PSBSZWFjdENvbXBvbmVudCkge1xuICAgIFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlOyAvLy9cblxuICAgIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpO1xuICB9XG5cbiAgYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpIHtcbiAgaWYgKG1peGlucykge1xuICAgIG1peGlucy5mb3JFYWNoKChtaXhpbikgPT4ge1xuICAgICAgY29uc3QgeyBuYW1lIH0gPSBtaXhpbjtcblxuICAgICAgZWxlbWVudFtuYW1lXSA9IG1peGluLmJpbmQoZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsIlJlYWN0Q2xhc3MiLCJjcmVhdGUiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkcmVuIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iLCJTVFJJTkciLCJ0YWdOYW1lIiwiaXNTVkdUYWdOYW1lIiwiU1ZHRWxlbWVudCIsIkhUTUxFbGVtZW50IiwicHJvdG90eXBlIiwiaXNQcm90b3R5cGVPZiIsInJlYWN0Q2xhc3MiLCJyZWFjdENsYXNzRWxlbWVudCIsIlJlYWN0Q2xhc3NFbGVtZW50IiwibWl4aW5zIiwiYXNzaWduTWl4aW5zIiwiUmVhY3RDb21wb25lbnQiLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzIiwicmVhY3RDb21wb25lbnQiLCJhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyIsIkZVTkNUSU9OIiwicmVhY3RGdW5jdGlvbiIsInJlYWN0RnVuY3Rpb25FbGVtZW50IiwiUmVhY3RGdW5jdGlvbkVsZW1lbnQiLCJDb21wb25lbnQiLCJSZWFjdCIsImZsYXR0ZW4iLCJyZW1vdmVGYWxzZXlDaGlsZHJlbiIsInJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbiIsIlJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsImZvckVhY2giLCJtaXhpbiIsIm5hbWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1RUE7OztlQUFBOzs7bUVBckV1Qjt1RUFDSTs0REFFSjs2REFDQzs4REFDTTtpRUFDRzt1QkFFVDtzQkFDSzsyQkFDSTsyQkFDb0M7Ozs7OztBQUVyRSxTQUFTQSxZQUFZQyxNQUFNO0lBQ3pCLE9BQU9DLG1CQUFVLENBQUNDLE1BQU0sQ0FBQ0Y7QUFDM0I7QUFFQSxTQUFTRyxjQUFjQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxRQUFRO0lBQzNELElBQUlDLFVBQVU7SUFFZCxJQUFJSCxlQUFlO1FBQ2pCRSxXQUFXRSxpQkFBaUJGO1FBRTVCLE1BQU1HLFFBQVFDLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUdOLFlBQVk7WUFDMUNDO1FBQ0Y7UUFFQSxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJLE9BQU9GLGtCQUFrQlEsaUJBQU0sRUFBRTtZQUMxQyxNQUFNQyxVQUFVVCxlQUFnQixHQUFHO1lBRW5DRyxVQUFVTyxJQUFBQSxrQkFBWSxFQUFDRCxXQUNYLElBQUlFLFlBQVUsQ0FBQ0YsU0FBU0osU0FDdEIsSUFBSU8sYUFBVyxDQUFDSCxTQUFTSjtRQUN6QyxPQUFPLElBQUlSLG1CQUFVLENBQUNnQixTQUFTLENBQUNDLGFBQWEsQ0FBQ2QsZ0JBQWdCO1lBQzVELE1BQU1lLGFBQWFmLGVBQ2JnQixvQkFBb0IsSUFBSUMsY0FBaUIsQ0FBQ0YsWUFBWVY7WUFFNURGLFVBQVVhLG1CQUFvQixHQUFHO1lBRWpDLE1BQU0sRUFBRUUsTUFBTSxFQUFFLEdBQUdIO1lBRW5CSSxhQUFhRCxRQUFRZjtRQUN2QixPQUFPLElBQUlpQix1QkFBYyxDQUFDUCxTQUFTLENBQUNDLGFBQWEsQ0FBQ2QsZ0JBQWdCO1lBQ2hFLE1BQU1xQix5QkFBeUJyQixlQUN6QnNCLGlCQUFpQixJQUFJRCx1QkFBdUJoQjtZQUVsREYsVUFBVW1CLGdCQUFnQixHQUFHO1lBRTdCQywyQkFBMkJGLHdCQUF3QmxCO1FBQ3JELE9BQU8sSUFBSSxPQUFPSCxrQkFBa0J3QixtQkFBUSxFQUFFO1lBQzVDLE1BQU1DLGdCQUFnQnpCLGVBQ2hCMEIsdUJBQXVCLElBQUlDLGlCQUFvQixDQUFDRixlQUFlcEI7WUFFckVGLFVBQVV1QixzQkFBc0IsR0FBRztRQUNyQztJQUNGO0lBRUEsT0FBT3ZCO0FBQ1Q7QUFFQSxNQUFNeUIsWUFBWVIsdUJBQWMsRUFDMUJTLFFBQVE7SUFDTkQ7SUFDQWpDO0lBQ0FJO0FBQ0Y7TUFFTixXQUFlOEI7QUFFZixTQUFTekIsaUJBQWlCRixRQUFRO0lBQ2hDQSxXQUFXNEIsSUFBQUEsY0FBTyxFQUFDNUI7SUFFbkJBLFdBQVc2QixJQUFBQSwrQkFBb0IsRUFBQzdCO0lBRWhDQSxXQUFXOEIsSUFBQUEseUNBQThCLEVBQUM5QjtJQUUxQyxPQUFPQTtBQUNUO0FBRUEsU0FBU3FCLDJCQUEyQkYsc0JBQXNCLEVBQUVsQixPQUFPO0lBQ2pFLE1BQU0sRUFBRWUsTUFBTSxFQUFFLEdBQUdHO0lBRW5CLE1BQU1ZLGtDQUFrQzNCLE9BQU80QixjQUFjLENBQUNiLHlCQUF5QixHQUFHO0lBRTFGLElBQUlZLG9DQUFvQ2IsdUJBQWMsRUFBRTtRQUN0REMseUJBQXlCWSxpQ0FBaUMsR0FBRztRQUU3RFYsMkJBQTJCRix3QkFBd0JsQjtJQUNyRDtJQUVBZ0IsYUFBYUQsUUFBUWY7QUFDdkI7QUFFQSxTQUFTZ0IsYUFBYUQsTUFBTSxFQUFFZixPQUFPO0lBQ25DLElBQUllLFFBQVE7UUFDVkEsT0FBT2lCLE9BQU8sQ0FBQyxDQUFDQztZQUNkLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdEO1lBRWpCakMsT0FBTyxDQUFDa0MsS0FBSyxHQUFHRCxNQUFNRSxJQUFJLENBQUNuQztRQUM3QjtJQUNGO0FBQ0YifQ==