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
function isSubclassOf(ClassA, ClassB) {
    var subclass = false;
    if (ClassA.name === ClassB.name) {
        subclass = true;
    } else {
        ClassA = Object.getPrototypeOf(ClassA); ///
        if (ClassA !== null) {
            subclass = isSubclassOf(ClassA, ClassB);
        }
    }
    return subclass;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0Q2xhc3MgZnJvbSBcIi4vcmVhY3RDbGFzc1wiO1xuaW1wb3J0IFJlYWN0Q29tcG9uZW50IGZyb20gXCIuL3JlYWN0Q29tcG9uZW50XCI7XG5cbmltcG9ydCBTVkdFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnXCI7XG5pbXBvcnQgSFRNTEVsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sXCI7XG5pbXBvcnQgUmVhY3RDbGFzc0VsZW1lbnQgZnJvbSBcIi4vdmlydHVhbERPTS9yZWFjdC9jbGFzc1wiO1xuaW1wb3J0IFJlYWN0RnVuY3Rpb25FbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUNoaWxkcmVuLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvc2FuaXRpaXNlXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICByZXR1cm4gUmVhY3RDbGFzcy5jcmVhdGUob2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZHJlbikge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGNoaWxkcmVuID0gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgIGNoaWxkcmVuXG4gICAgfSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICBuZXcgU1ZHRWxlbWVudCh0YWdOYW1lLCBwcm9wcykgOlxuICAgICAgICAgICAgICAgICAgICBuZXcgSFRNTEVsZW1lbnQodGFnTmFtZSwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAvLy9cbiAgICAgICAgICAgIHJlYWN0Q2xhc3NFbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q2xhc3NFbGVtZW50OyAgLy8vXG5cbiAgICAgIGNvbnN0IHsgbWl4aW5zIH0gPSByZWFjdENsYXNzO1xuXG4gICAgICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBSZWFjdENvbXBvbmVudCkpIHtcbiAgICAgIGNvbnN0IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyBSZWFjdENvbXBvbmVudFN1YkNsYXNzKHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0Q29tcG9uZW50OyAvLy9cblxuICAgICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICByZWFjdEZ1bmN0aW9uRWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG5cbiAgICAgIGVsZW1lbnQgPSByZWFjdEZ1bmN0aW9uRWxlbWVudDsgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IENvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50LCAvLy9cbiAgICAgIFJlYWN0ID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGNyZWF0ZUNsYXNzLFxuICAgICAgICBjcmVhdGVFbGVtZW50XG4gICAgICB9O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGZsYXR0ZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVtb3ZlRmFsc2V5Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIGNoaWxkcmVuID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuKGNoaWxkcmVuKTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlYWN0Q29tcG9uZW50TWl4aW5zKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MsIGVsZW1lbnQpIHtcbiAgY29uc3QgeyBtaXhpbnMgfSA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3M7XG5cbiAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihSZWFjdENvbXBvbmVudFN1YkNsYXNzKTsgLy8vXG5cbiAgaWYgKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGUgIT09IFJlYWN0Q29tcG9uZW50KSB7XG4gICAgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3NQcm90b3R5cGU7IC8vL1xuXG4gICAgYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCk7XG4gIH1cblxuICBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduTWl4aW5zKG1peGlucywgZWxlbWVudCkge1xuICBpZiAobWl4aW5zKSB7XG4gICAgbWl4aW5zLmZvckVhY2goKG1peGluKSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IG1peGluO1xuXG4gICAgICBlbGVtZW50W25hbWVdID0gbWl4aW4uYmluZChlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoQ2xhc3NBLCBDbGFzc0IpIHtcbiAgbGV0IHN1YmNsYXNzID0gZmFsc2U7XG5cbiAgaWYgKENsYXNzQS5uYW1lID09PSBDbGFzc0IubmFtZSkgeyAvLy9cbiAgICBzdWJjbGFzcyA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQ2xhc3NBID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzQSk7IC8vL1xuXG4gICAgaWYgKENsYXNzQSAhPT0gbnVsbCkge1xuICAgICAgc3ViY2xhc3MgPSBpc1N1YmNsYXNzT2YoQ2xhc3NBLCBDbGFzc0IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzcztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGFzcyIsIm9iamVjdCIsImNyZWF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkcmVuIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsInNhbml0aXNlQ2hpbGRyZW4iLCJwcm9wcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJyZWFjdENsYXNzIiwicmVhY3RDbGFzc0VsZW1lbnQiLCJtaXhpbnMiLCJhc3NpZ25NaXhpbnMiLCJpc1N1YmNsYXNzT2YiLCJSZWFjdENvbXBvbmVudFN1YkNsYXNzIiwicmVhY3RDb21wb25lbnQiLCJhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyIsInJlYWN0RnVuY3Rpb24iLCJyZWFjdEZ1bmN0aW9uRWxlbWVudCIsIkNvbXBvbmVudCIsIlJlYWN0IiwiUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiZm9yRWFjaCIsIm1peGluIiwibmFtZSIsImJpbmQiLCJDbGFzc0EiLCJDbGFzc0IiLCJzdWJjbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVyxHQUFjLENBQWQsV0FBYztBQUNWLEdBQWtCLENBQWxCLGVBQWtCO0FBRXRCLEdBQW9DLENBQXBDLElBQW9DO0FBQ25DLEdBQXFDLENBQXJDLEtBQXFDO0FBQy9CLEdBQTBCLENBQTFCLE1BQTBCO0FBQ3ZCLEdBQTZCLENBQTdCLFNBQTZCO0FBRXRDLEdBQW1CLENBQW5CLE1BQW1CO0FBQ2QsR0FBa0IsQ0FBbEIsS0FBa0I7QUFDZCxHQUFhLENBQWIsVUFBYTtBQUN1QixHQUF1QixDQUF2QixVQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFbkZBLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7SUFDNUIsTUFBTSxDQWRlLFdBQWMsU0FjakJDLE1BQU0sQ0FBQ0QsTUFBTTtBQUNqQyxDQUFDO1NBRVFFLGFBQWEsQ0FBQ0MsYUFBYSxFQUFFQyxVQUFVLEVBQWUsQ0FBQztJQUFkLEdBQUdDLENBQUgsR0FBVyxDQUFYLElBQVcsR0FBWCxTQUFXLENBQVgsTUFBVyxFQUFSQSxRQUFRLEdBQVgsR0FBVyxPQUFYLElBQVcsR0FBWCxDQUFXLEdBQVgsSUFBVyxHQUFYLENBQVcsT0FBWCxJQUFXLEdBQVgsQ0FBVyxFQUFYLElBQVcs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