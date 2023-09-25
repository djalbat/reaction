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
var _constants = require("../constants");
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function setAttribute(name, value) {
    var _this = this;
    if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
    }
    if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
    }
    if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            _this.domElement[name][key] = value[key];
        });
    } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN) {
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
    var _this = this;
    return classNames.every(function(className) {
        if (_this.hasClass(className)) {
            return true;
        }
    });
}
function clearClasses() {
    this.domElement.className = _constants.EMPTY_STRING;
}
function getTagName() {
    return this.domElement.tagName;
}
function getStyle(name) {
    return this.domElement.style[name];
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
    getStyle: getStyle,
    setStyle: setStyle
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIl0sIm5hbWVzIjpbInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJ2YWx1ZSIsIkNMQVNTX05BTUUiLCJDTEFTUyIsIkhUTUxfRk9SIiwiRk9SIiwiT0JKRUNUIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJkb21FbGVtZW50IiwiQk9PTEVBTiIsImdldEF0dHJpYnV0ZSIsImNsZWFyQXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkQXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwic2V0Q2xhc3MiLCJjbGFzc05hbWUiLCJhZGRDbGFzcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidG9nZ2xlQ2xhc3MiLCJ0b2dnbGUiLCJoYXNDbGFzcyIsImNvbnRhaW5zIiwiaGFzQ2xhc3NlcyIsImNsYXNzTmFtZXMiLCJldmVyeSIsImNsZWFyQ2xhc3NlcyIsIkVNUFRZX1NUUklORyIsImdldFRhZ05hbWUiLCJ0YWdOYW1lIiwiZ2V0U3R5bGUiLCJzdHlsZSIsInNldFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7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