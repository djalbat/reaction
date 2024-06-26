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
function on(eventType, handler) {
    var firstChild = this.getFirstChild();
    return firstChild.on(eventType, handler);
}
function off(eventType, handler) {
    var firstChild = this.getFirstChild();
    return firstChild.off(eventType, handler);
}
function setAttribute(name, value) {
    var firstChild = this.getFirstChild();
    return firstChild.setAttribute(name, value);
}
function getAttribute(name) {
    var firstChild = this.getFirstChild();
    return firstChild.getAttribute(name);
}
function clearAttribute(name) {
    var firstChild = this.getFirstChild();
    firstChild.clearAttribute(name);
}
function addAttribute(name, value) {
    var firstChild = this.getFirstChild();
    firstChild.addAttribute(name, value);
}
function removeAttribute(name) {
    var firstChild = this.getFirstChild();
    firstChild.removeAttribute(name);
}
function hasAttribute(name) {
    var firstChild = this.getFirstChild();
    return firstChild.hasAttribute(name);
}
function setClass(className) {
    var firstChild = this.getFirstChild();
    firstChild.setClass(className);
}
function addClass(className) {
    var firstChild = this.getFirstChild();
    firstChild.addClass(className);
}
function removeClass(className) {
    var firstChild = this.getFirstChild();
    firstChild.removeClass(className);
}
function toggleClass(className) {
    var firstChild = this.getFirstChild();
    firstChild.toggleClass(className);
}
function hasClass(className) {
    var firstChild = this.getFirstChild();
    return firstChild.hasClass(className);
}
function hasClasses(classNames) {
    var firstChild = this.getFirstChild();
    return firstChild.hasClasses(classNames);
}
function clearClasses() {
    var firstChild = this.getFirstChild();
    firstChild.clearClasses();
}
function getTagName() {
    return null; ///
}
function getStyle(name) {
    var firstChild = this.getFirstChild();
    return firstChild.getStyle(name);
}
function setStyle(name, value) {
    var firstChild = this.getFirstChild();
    firstChild.setStyle(name, value);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5cblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBvZmYoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5vZmYoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQXR0cmlidXRlKG5hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG59XG5cbmZ1bmN0aW9uIGhhc0F0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5zZXRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC50b2dnbGVDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0NsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzZXMoY2xhc3NOYW1lcykge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3NlcyhjbGFzc05hbWVzKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDbGFzc2VzKCkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5jbGVhckNsYXNzZXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFnTmFtZSgpIHtcbiAgcmV0dXJuIG51bGw7ICAvLy9cbn1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuZ2V0U3R5bGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldFN0eWxlKG5hbWUsIHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBvbixcbiAgb2ZmLFxuICBzZXRBdHRyaWJ1dGUsXG4gIGdldEF0dHJpYnV0ZSxcbiAgY2xlYXJBdHRyaWJ1dGUsXG4gIGFkZEF0dHJpYnV0ZSxcbiAgcmVtb3ZlQXR0cmlidXRlLFxuICBoYXNBdHRyaWJ1dGUsXG4gIHNldENsYXNzLFxuICBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3MsXG4gIHRvZ2dsZUNsYXNzLFxuICBoYXNDbGFzcyxcbiAgaGFzQ2xhc3NlcyxcbiAgY2xlYXJDbGFzc2VzLFxuICBnZXRUYWdOYW1lLFxuICBnZXRTdHlsZSxcbiAgc2V0U3R5bGVcbn07XG4iXSwibmFtZXMiOlsib24iLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiZmlyc3RDaGlsZCIsImdldEZpcnN0Q2hpbGQiLCJvZmYiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImFkZEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsInNldENsYXNzIiwiY2xhc3NOYW1lIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJoYXNDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImNsZWFyQ2xhc3NlcyIsImdldFRhZ05hbWUiLCJnZXRTdHlsZSIsInNldFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThHQTs7O2VBQUE7OztBQTFHQSxTQUFTQSxHQUFHQyxTQUFTLEVBQUVDLE9BQU87SUFDNUIsSUFBTUMsYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckMsT0FBT0QsV0FBV0gsRUFBRSxDQUFDQyxXQUFXQztBQUNsQztBQUVBLFNBQVNHLElBQUlKLFNBQVMsRUFBRUMsT0FBTztJQUM3QixJQUFNQyxhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQyxPQUFPRCxXQUFXRSxHQUFHLENBQUNKLFdBQVdDO0FBQ25DO0FBRUEsU0FBU0ksYUFBYUMsSUFBSSxFQUFFQyxLQUFLO0lBQy9CLElBQU1MLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLE9BQU9ELFdBQVdHLFlBQVksQ0FBQ0MsTUFBTUM7QUFDdkM7QUFFQSxTQUFTQyxhQUFhRixJQUFJO0lBQ3hCLElBQU1KLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDLE9BQU9ELFdBQVdNLFlBQVksQ0FBQ0Y7QUFDakM7QUFFQSxTQUFTRyxlQUFlSCxJQUFJO0lBQzFCLElBQU1KLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXTyxjQUFjLENBQUNIO0FBQzVCO0FBRUEsU0FBU0ksYUFBYUosSUFBSSxFQUFFQyxLQUFLO0lBQy9CLElBQU1MLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXUSxZQUFZLENBQUNKLE1BQU1DO0FBQ2hDO0FBRUEsU0FBU0ksZ0JBQWdCTCxJQUFJO0lBQzNCLElBQU1KLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXUyxlQUFlLENBQUNMO0FBQzdCO0FBRUEsU0FBU00sYUFBYU4sSUFBSTtJQUN4QixJQUFNSixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQyxPQUFPRCxXQUFXVSxZQUFZLENBQUNOO0FBQ2pDO0FBRUEsU0FBU08sU0FBU0MsU0FBUztJQUN6QixJQUFNWixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV1csUUFBUSxDQUFDQztBQUN0QjtBQUVBLFNBQVNDLFNBQVNELFNBQVM7SUFDekIsSUFBTVosYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckNELFdBQVdhLFFBQVEsQ0FBQ0Q7QUFDdEI7QUFFQSxTQUFTRSxZQUFZRixTQUFTO0lBQzVCLElBQU1aLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXYyxXQUFXLENBQUNGO0FBQ3pCO0FBRUEsU0FBU0csWUFBWUgsU0FBUztJQUM1QixJQUFNWixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV2UsV0FBVyxDQUFDSDtBQUN6QjtBQUVBLFNBQVNJLFNBQVNKLFNBQVM7SUFDekIsSUFBTVosYUFBYSxJQUFJLENBQUNDLGFBQWE7SUFFckMsT0FBT0QsV0FBV2dCLFFBQVEsQ0FBQ0o7QUFDN0I7QUFFQSxTQUFTSyxXQUFXQyxVQUFVO0lBQzVCLElBQU1sQixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQyxPQUFPRCxXQUFXaUIsVUFBVSxDQUFDQztBQUMvQjtBQUVBLFNBQVNDO0lBQ1AsSUFBTW5CLGFBQWEsSUFBSSxDQUFDQyxhQUFhO0lBRXJDRCxXQUFXbUIsWUFBWTtBQUN6QjtBQUVBLFNBQVNDO0lBQ1AsT0FBTyxNQUFPLEdBQUc7QUFDbkI7QUFFQSxTQUFTQyxTQUFTakIsSUFBSTtJQUNwQixJQUFNSixhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQyxPQUFPRCxXQUFXcUIsUUFBUSxDQUFDakI7QUFDN0I7QUFFQSxTQUFTa0IsU0FBU2xCLElBQUksRUFBRUMsS0FBSztJQUMzQixJQUFNTCxhQUFhLElBQUksQ0FBQ0MsYUFBYTtJQUVyQ0QsV0FBV3NCLFFBQVEsQ0FBQ2xCLE1BQU1DO0FBQzVCO0lBRUEsV0FBZTtJQUNiUixJQUFBQTtJQUNBSyxLQUFBQTtJQUNBQyxjQUFBQTtJQUNBRyxjQUFBQTtJQUNBQyxnQkFBQUE7SUFDQUMsY0FBQUE7SUFDQUMsaUJBQUFBO0lBQ0FDLGNBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FFLFVBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FDLGFBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FFLGNBQUFBO0lBQ0FDLFlBQUFBO0lBQ0FDLFVBQUFBO0lBQ0FDLFVBQUFBO0FBQ0YifQ==