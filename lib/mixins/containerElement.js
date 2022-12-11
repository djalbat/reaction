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
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function setAttribute(name, value) {
    var _this = this;
    if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
    }
    if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
    }
    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
            _this.domElement[name][key] = value[key];
        });
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
    var _this = this;
    return classNames.every(function(className) {
        return _this.hasClass(className);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC50YWdOYW1lOyB9XG5cbmZ1bmN0aW9uIGdldFN0eWxlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTsgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiJdLCJuYW1lcyI6WyJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwidmFsdWUiLCJDTEFTU19OQU1FIiwiQ0xBU1MiLCJIVE1MX0ZPUiIsIkZPUiIsIk9CSkVDVCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiZG9tRWxlbWVudCIsIkJPT0xFQU4iLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImhhc0NsYXNzZXMiLCJjbGFzc05hbWVzIiwiZXZlcnkiLCJjbGVhckNsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJnZXRUYWdOYW1lIiwidGFnTmFtZSIsImdldFN0eWxlIiwic3R5bGUiLCJzZXRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNERBOzs7ZUFBQTs7O3lCQTFEZ0Y7Ozs7O0FBRWhGLFNBQVNBLGFBQWFDLElB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