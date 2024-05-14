"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    removeFalseyChildren: function() {
        return removeFalseyChildren;
    },
    replaceStringsWithTextChildren: function() {
        return replaceStringsWithTextChildren;
    }
});
var _textElement = /*#__PURE__*/ _interop_require_default(require("../virtualDOM/container/textElement"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function removeFalseyChildren(children) {
    children = children.reduce(function(children, child) {
        if (child) {
            children.push(child);
        }
        return children;
    }, []);
    return children;
}
function replaceStringsWithTextChildren(children) {
    children = children.map(function(child) {
        if ((typeof child === "undefined" ? "undefined" : _type_of(child)) === _constants.STRING) {
            var text = child, textElement = new _textElement.default(text);
            child = textElement; ///
        }
        return child;
    });
    return children;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5Q2hpbGRyZW4iLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4iLCJjaGlsZHJlbiIsInJlZHVjZSIsImNoaWxkIiwicHVzaCIsIm1hcCIsIlNUUklORyIsInRleHQiLCJ0ZXh0RWxlbWVudCIsIlRleHRFbGVtZW50Il0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLG9CQUFvQjtlQUFwQkE7O0lBWUFDLDhCQUE4QjtlQUE5QkE7OztrRUFoQlE7eUJBRUQ7Ozs7Ozs7Ozs7QUFFaEIsU0FBU0QscUJBQXFCRSxRQUFRO0lBQzNDQSxXQUFXQSxTQUFTQyxNQUFNLENBQUMsU0FBQ0QsVUFBVUU7UUFDcEMsSUFBSUEsT0FBTztZQUNURixTQUFTRyxJQUFJLENBQUNEO1FBQ2hCO1FBRUEsT0FBT0Y7SUFDVCxHQUFHLEVBQUU7SUFFTCxPQUFPQTtBQUNUO0FBRU8sU0FBU0QsK0JBQStCQyxRQUFRO0lBQ3JEQSxXQUFXQSxTQUFTSSxHQUFHLENBQUMsU0FBQ0Y7UUFDdkIsSUFBSSxDQUFBLE9BQU9BLHNDQUFQLFNBQU9BLE1BQUksTUFBTUcsaUJBQU0sRUFBRTtZQUMzQixJQUFNQyxPQUFPSixPQUNQSyxjQUFjLElBQUlDLG9CQUFXLENBQUNGO1lBRXBDSixRQUFRSyxhQUFhLEdBQUc7UUFDMUI7UUFFQSxPQUFPTDtJQUNUO0lBRUEsT0FBT0Y7QUFDVCJ9