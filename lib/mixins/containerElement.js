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
function on(eventType, handler) {
    this.domElement.addEventListener(eventType, handler);
} ///
function off(eventType, handler) {
    this.domElement.removeEventListener(eventType, handler);
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
    on: on,
    off: off,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHsgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTsgfSAvLy9cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZSwgaGFuZGxlcikgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeSgoY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7IH1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbixcbiAgb2ZmLFxuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iXSwibmFtZXMiOlsib24iLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwiQ0xBU1NfTkFNRSIsIkNMQVNTIiwiSFRNTF9GT1IiLCJGT1IiLCJPQkpFQ1QiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsIkJPT0xFQU4iLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImhhc0NsYXNzZXMiLCJjbGFzc05hbWVzIiwiZXZlcnkiLCJjbGVhckNsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJnZXRUYWdOYW1lIiwidGFnTmFtZSIsImdldFN0eWxlIiwic3R5bGUiLCJzZXRTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0VBOzs7ZUFBQTs7O3lCQXBFZ0Y7Ozs7O0FBRWhGLFNBQVNBLEdBQUdDLFNBQVMsRUFBRUMsT0FBTztJQUFJLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxnQkFBZ0IsQ0FBQ0gsV0FBV0M7QUFBVSxFQUFFLEdBQUc7QUFFN0YsU0FBU0csSUFBSUosU0FBUyxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxVQUFVLENBQUNHLG1CQUFtQixDQUFDTCxXQUFXQztBQUFVO0FBRTVGLFNBQVNLLGFBQWFDLElBQUksRUFBRUMsS0FBSzs7SUFDL0IsSUFBSUQsU0FBU0UscUJBQVUsRUFBRTtRQUN2QkYsT0FBT0csZ0JBQUs7SUFDZDtJQUVBLElBQUlILFNBQVNJLG1CQUFRLEVBQUU7UUFDckJKLE9BQU9LLGNBQUc7SUFDWjtJQUVBLElBQUksQ0FBQSxPQUFPSixzQ0FBUCxTQUFPQSxNQUFJLE1BQU1LLGlCQUFNLEVBQUU7UUFDM0IsSUFBTUMsT0FBT0MsT0FBT0QsSUFBSSxDQUFDTjtRQUV6Qk0sS0FBS0UsT0FBTyxDQUFDLFNBQUNDO1lBQ1osTUFBS2YsVUFBVSxDQUFDSyxLQUFLLENBQUNVLElBQUksR0FBR1QsS0FBSyxDQUFDUyxJQUFJO1FBQ3pDO0lBQ0YsT0FBTyxJQUFJLENBQUEsT0FBT1Qsc0NBQVAsU0FBT0EsTUFBSSxNQUFNVSxrQkFBTyxFQUFFO1FBQ25DLElBQUlWLE9BQU87WUFDVEEs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