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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBCT09MRUFOLCBDTEFTU19OQU1FLCBIVE1MX0ZPUiwgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHsgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTsgfSAvLy9cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZSwgaGFuZGxlcikgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeSgoY2xhc3NOYW1lKSA9PiB7XG4gICAgaWYgKHRoaXMuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5mdW5jdGlvbiBnZXRTdHlsZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7IH1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbixcbiAgb2ZmLFxuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iXSwibmFtZXMiOlsib24iLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiZG9tRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwiQ0xBU1NfTkFNRSIsIkNMQVNTIiwiSFRNTF9GT1IiLCJGT1IiLCJPQkpFQ1QiLCJrZXlzIiwiT2JqZWN0IiwiZm9yRWFjaCIsImtleSIsIkJPT0xFQU4iLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInRvZ2dsZUNsYXNzIiwidG9nZ2xlIiwiaGFzQ2xhc3MiLCJjb250YWlucyIsImhhc0NsYXNzZXMiLCJjbGFzc05hbWVzIiwiZXZlcnkiLCJjbGVhckNsYXNzZXMiLCJFTVBUWV9TVFJJTkciLCJnZXRUYWdOYW1lIiwidGFnTmFtZSIsImdldFN0eWxlIiwic3R5bGUiLCJzZXRTdHlsZSJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzRUE7OztlQUFBOzs7eUJBcEVnRjs7Ozs7QUFFaEYsU0FBU0EsR0FBR0MsU0FBUyxFQUFFQyxPQUFPO0lBQUksSUFBSSxDQUFDQyxVQUFVLENBQUNDLGdCQUFnQixDQUFDSCxXQUFXQztBQUFVLEVBQUUsR0FBRztBQUU3RixTQUFTRyxJQUFJSixTQUFTLEVBQUVDLE9BQU87SUFBSSxJQUFJLENBQUNDLFVBQVUsQ0FBQ0csbUJBQW1CLENBQUNMLFdBQVdDO0FBQVU7QUFFNUYsU0FBU0ssYUFBYUMsSUFBSSxFQUFFQyxLQUFLOztJQUMvQixJQUFJRCxTQUFTRSxxQkFBVSxFQUFFO1FBQ3ZCRixPQUFPRyxnQkFBSztJQUNkO0lBRUEsSUFBSUgsU0FBU0ksbUJBQVEsRUFBRTtRQUNyQkosT0FBT0ssY0FBRztJQUNaO0lBRUEsSUFBSSxDQUFBLE9BQU9KLHNDQUFQLFNBQU9BLE1BQUksTUFBTUssaUJBQU0sRUFBRTtRQUMzQixJQUFNQyxPQUFPQyxPQUFPRCxJQUFJLENBQUNOO1FBRXpCTSxLQUFLRSxPQUFPLENBQUMsU0FBQ0M7WUFDWixNQUFLZixVQUFVLENB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