"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("../constants");
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function setAttribute(name, value) {
    if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
    }
    if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
    }
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach((function(key) {
            this.domElement[name][key] = value[key];
        }).bind(this));
    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
            value = name; ///
            this.domElement.setAttribute(name, value);
        }
    } else {
        this.domElement.setAttribute(name, value);
    }
}
function getAttribute(name) {
    return this.domElement.getAttribute(name);
}
function clearAttribute(name) {
    this.domElement.removeAttribute(name);
}
function addAttribute(name, value) {
    this.setAttribute(name, value);
}
function removeAttribute(name) {
    this.domElement.removeAttribute(name);
}
function hasAttribute(name) {
    return this.domElement.hasAttribute(name);
}
function setClass(className) {
    this.domElement.className = className;
}
function addClass(className) {
    this.domElement.classList.add(className);
}
function removeClass(className) {
    this.domElement.classList.remove(className);
}
function toggleClass(className) {
    this.domElement.classList.toggle(className);
}
function hasClass(className) {
    return this.domElement.classList.contains(className);
}
function hasClasses(classNames) {
    return classNames.every((function(className) {
        return this.hasClass(className);
    }).bind(this));
}
function clearClasses() {
    this.domElement.className = _constants.EMPTY_STRING;
}
function getTagName() {
    return this.domElement.tagName;
}
function setStyle(name, value) {
    this.domElement.style[name] = value;
}
var _default = {
    setAttribute: setAttribute,
    getAttribute: getAttribute,
    clearAttribute: clearAttribute,
    addAttribute: addAttribute,
    removeAttribute: removeAttribute,
    hasAttribute: hasAttribute,
    setClass: setClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    hasClass: hasClass,
    hasClasses: hasClasses,
    clearClasses: clearClasses,
    getTagName: getTagName,
    setStyle: setStyle
};
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgQk9PTEVBTiwgQ0xBU1NfTkFNRSwgSFRNTF9GT1IsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7IHJldHVybiBjbGFzc05hbWVzLmV2ZXJ5KChjbGFzc05hbWUpID0+IHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSk7IH1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVvRSxHQUFjLENBQWQsVUFBYzs7OztTQUVyRixZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBSHNFLFVBQWMsYUFHbkUsQ0FBQztRQUN4QixJQUFJLEdBSndFLFVBQWM7SUFLNUYsQ0FBQztJQUVELEVBQUUsRUFBRSxJQUFJLEtBUHNFLFVBQWMsV0FPckUsQ0FBQztRQUN0QixJQUFJLEdBUndFLFVBQWM7SUFTNUYsQ0FBQztJQUVELEVBQUUsVUFBUyxLQUFLLGlDQUFaLE9BQVksQ0FBTCxLQUFLLE9BWDhELFVBQWMsU0FXL0QsQ0FBQztRQUM1QixHQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztRQUU5QixJQUFJLENBQUMsT0FBTyxXQUFFLEdBQUcsRUFBSyxDQUFDO2lCQUNoQixVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRztRQUN4QyxDQUFDO0lBQ0gsQ0FBQyxNQUFNLEVBQUUsVUFBUyxLQUFLLGlDQUFaLE9BQVksQ0FBTCxLQUFLLE9BakJ1RCxVQUFjLFVBaUJ2RCxDQUFDO1FBQ3BDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUNWLEtBQUssR0FBRyxJQUFJLENBQUUs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