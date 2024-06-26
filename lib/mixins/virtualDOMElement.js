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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQuanMiXSwibmFtZXMiOlsiRk9SIiwiQ0xBU1MiLCJPQkpFQ1QiLCJCT09MRUFOIiwiQ0xBU1NfTkFNRSIsIkhUTUxfRk9SIiwiRU1QVFlfU1RSSU5HIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImZvckVhY2giLCJrZXkiLCJkb21FbGVtZW50IiwiZ2V0QXR0cmlidXRlIiwiY2xlYXJBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRBdHRyaWJ1dGUiLCJoYXNBdHRyaWJ1dGUiLCJzZXRDbGFzcyIsImNsYXNzTmFtZSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmUiLCJ0b2dnbGVDbGFzcyIsInRvZ2dsZSIsImhhc0NsYXNzIiwiY29udGFpbnMiLCJoYXNDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImV2ZXJ5IiwiY2xlYXJDbGFzc2VzIiwiZ2V0VGFnTmFtZSIsInRhZ05hbWUiLCJzZXRTdHlsZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVvRSxHQUFjLENBQWQsVUFBYzs7OztTQUVyRixZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2xDLEVBQUUsRUFBRSxJQUFJLEtBSHNFLFVBQWMsYUFHbkUsQ0FBQztRQUN4QixJQUFJLEdBSndFLFVBQWM7SUFLNUYsQ0FBQztJQUVELEVBQUUsRUFBRSxJQUFJLEtBUHNFLFVBQWMsV0FPckUsQ0FBQztRQUN0QixJQUFJLEdBUndFLFVBQWM7SUFTNUYsQ0FBQztJQUVELEVBQUUsVUFBUyxLQUFLLGlDQUFaLE9BQVksQ0FBTCxLQUFLLE9BWDhELFVBQWMsU0FXL0QsQ0FBQztRQUM1QixHQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFDLFFBQVEs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O0lBQ1osUUFBUSxFQUFSLFFBQVE7SUFDUixRQUFRLEVBQVIsUUFBUTtJQUNSLFdBQVcsRUFBWCxXQUFXO0lBQ1gsV0FBVyxFQUFYLFdBQVc7SUFDWCxRQUFRLEVBQVIsUUFBUTtJQUNSLFVBQVUsRUFBVixVQUFVO0lBQ1YsWUFBWSxFQUFaLFlBQVk7SUFDWixVQUFVLEVBQVYsVUFBVTtJQUNWLFFBQVEsRUFBUixRQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEJPT0xFQU4sIENMQVNTX05BTUUsIEhUTUxfRk9SLCBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykgeyByZXR1cm4gY2xhc3NOYW1lcy5ldmVyeSgoY2xhc3NOYW1lKSA9PiB0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgc2V0U3R5bGVcbn07XG4iXX0=