"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeFalseyChildren = removeFalseyChildren;
exports.replaceStringsWithTextChildren = replaceStringsWithTextChildren;
var _textElement = _interopRequireDefault(require("../virtualDOM/container/textElement"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function removeFalseyChildren(children1) {
    children1 = children1.reduce(function(children, child) {
        if (child) {
            children.push(child);
        }
        return children;
    }, []);
    return children1;
}
function replaceStringsWithTextChildren(children) {
    children = children.map(function(child) {
        if ((typeof child === "undefined" ? "undefined" : _typeof(child)) === _constants.STRING) {
            var text = child, textElement = new _textElement.default(text);
            child = textElement; ///
        }
        return child;
    });
    return children;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvc2FuaXRpaXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iXSwibmFtZXMiOlsicmVtb3ZlRmFsc2V5Q2hpbGRyZW4iLCJyZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4iLCJjaGlsZHJlbiIsInJlZHVjZSIsImNoaWxkIiwicHVzaCIsIm1hcCIsInRleHQiLCJ0ZXh0RWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQU1JQSxvQkFBb0IsR0FBcEJBLG9CQUFvQjtRQVlwQkMsOEJBQThCLEdBQTlCQSw4QkFBOEI7QUFoQnRCLEdBQXFDLENBQXJDLFlBQXFDO0FBRXRDLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7O1NBRXJCRCxvQkFBb0IsQ0FBQ0UsU0FBUSxFQUFFLENBQUM7SUFDOUNBLFNBQVEsR0FBR0EsU0FBUSxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQRCxRQUFRLEVBQUVFLEtBQUssRUFBSyxDQUFDO1FBQy9DLEVBQUUsRUFBRUEsS0FBSyxFQUFFLENBQUM7WUFDVkYsUUFBUSxDQUFDRyxJQUFJLENBQUNELEtBQUs7UUFDckIsQ0FBQztRQUVELE1BQU0sQ0FBQ0YsUUFBUTtJQUNqQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSxDQUFDQSxTQUFRO0FBQ2pCLENBQUM7U0FFZUQsOEJBQThCLENBQUNDLFFBQVEsRUFBRSxDQUFDO0lBQ3hEQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBUEYsS0FBSyxFQUFLLENBQUM7UUFDbEMsRUFBRSxVQUFTQSxLQUFLLGlDQUFaLE9BQVksQ0FBTEEsS0FBSyxPQWhCRyxVQUFjLFNBZ0JKLENBQUM7WUFDNUIsR0FBSyxDQUFDRyxJQUFJLEdBQUdILEtBQUssRUFDWkksV0FBVyxHQUFHLEdBQUcsQ0FwQkwsWUFBcUMsU0FvQm5CRCxJQUFJO1lBRXhDSCxLQUFLLEdBQUdJLFdBQVcsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFDMUIsQ0FBQztRQUVELE1BQU0sQ0FBQ0osS0FBSztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUNGLFFBQVE7QUFDakIsQ0FBQyJ9