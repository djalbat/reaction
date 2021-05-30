"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function setAttribute(name, value) {
    if (name === "className") {
        name = "class";
    }
    if (name === "htmlFor") {
        name = "for";
    }
    if (typeof value === "object") {
        var keys = Object.keys(value);
        keys.forEach((function(key) {
            this.domElement[name][key] = value[key];
        }).bind(this));
    } else if (typeof value === "boolean") {
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
    this.domElement.className = "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gXCJjbGFzc05hbWVcIikge1xuICAgIG5hbWUgPSBcImNsYXNzXCI7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gXCJodG1sRm9yXCIpIHtcbiAgICBuYW1lID0gXCJmb3JcIjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHsgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4gdGhpcy5oYXNDbGFzcyhjbGFzc05hbWUpKTsgfVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBcIlwiOyB9XG5cbmZ1bmN0aW9uIGdldFRhZ05hbWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudGFnTmFtZTsgfVxuXG5mdW5jdGlvbiBzZXRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBzZXRTdHlsZVxufTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztTQUVILFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSztRQUMzQixJQUFJLE1BQUssU0FBVztRQUN0QixJQUFJLElBQUcsS0FBTzs7UUFHWixJQUFJLE1BQUssT0FBUztRQUNwQixJQUFJLElBQUcsR0FBSzs7ZUFHSCxLQUFLLE1BQUssTUFBUTtZQUNyQixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1FBRTlCLElBQUksQ0FBQyxPQUFPLFdBQUUsR0FBRztpQkFDVixVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRzs7c0JBRXhCLEtBQUssTUFBSyxPQUFTO1lBQy9CLEtBQUs7WUFDUCxLQUFLLEdBQUcsSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztpQkFFWixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLOzs7YUFHckMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSzs7O1NBSW5DLFlBQVksQ0FBQyxJQUFJO2dCQUFnQixVQUFVLENBQUMsWUFBWSxDQUFDLElBQUk7O1NBRTdELGNBQWMsQ0FBQyxJQUFJO1NBQVMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJOztTQUUzRCxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUs7U0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUs7O1NBRXpELGVBQWUsQ0FBQyxJQUFJO1NBQVMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJOztTQUU1RCxZQUFZLENBQUMsSUFBSTtnQkFBZ0IsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJOztTQUU3RCxRQUFRLENBQUMsU0FBUztTQUFTLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUzs7U0FFM0QsUUFBUSxDQUFDLFNBQVM7U0FBUyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTOztTQUU3RCxXQUFXLENBQUMsU0FBUztTQUFTLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVM7O1NBRW5FLFdBQVcsQ0FBQyxTQUFTO1NBQVMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUzs7U0FFbkUsUUFBUSxDQUFDLFNBQVM7Z0JBQWdCLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVM7O1NBRXpFLFVBQVUsQ0FBQyxVQUFVO1dBQVcsVUFBVSxDQUFDLEtBQUssV0FBRSxTQUFTO29CQUFVLFFBQVEsQ0FBQyxTQUFTOzs7U0FFdkYsWUFBWTtTQUFVLFVBQVUsQ0FBQyxTQUFTOztTQUUxQyxVQUFVO2dCQUFpQixVQUFVLENBQUMsT0FBTzs7U0FFN0MsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLO1NBQ3RCLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUs7OztJQUluQyxZQUFZLEVBQVosWUFBWTtJQUNaLFlBQVksRUFBWixZQUFZO0lBQ1osY0FBYyxFQUFkLGNBQWM7SUFDZCxZQUFZLEVBQVosWUFBWTtJQUNaLGVBQWUsRUFBZixlQUFlO0lBQ2YsWUFBWSxFQUFaLFlBQVk7SUFDWixRQUFRLEVBQVIsUUFBUTtJQUNSLFFBQVEsRUFBUixRQUFRO0lBQ1IsV0FBVyxFQUFYLFdBQVc7SUFDWCxXQUFXLEVBQVgsV0FBVztJQUNYLFFBQVEsRUFBUixRQUFRO0lBQ1IsVUFBVSxFQUFWLFVBQVU7SUFDVixZQUFZLEVBQVosWUFBWTtJQUNaLFVBQVUsRUFBVixVQUFVO0lBQ1YsUUFBUSxFQUFSLFFBQVEifQ==