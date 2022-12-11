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
var _index = require("../../../index");
var _constants = require("../constants");
var TodoListItem = function(props, context) {
    var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? _constants.LINE_THROUGH : _constants.NONE, style = {
        textDecoration: textDecoration
    };
    return /*#__PURE__*/ _index.React.createElement("li", {
        style: style,
        onClick: clickHandler
    }, text);
};
var _default = TodoListItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBOT05FLCBMSU5FX1RIUk9VR0ggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBMSU5FX1RIUk9VR0ggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PTkUsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iXSwibmFtZXMiOlsiVG9kb0xpc3RJdGVtIiwicHJvcHMiLCJjb250ZXh0IiwiY2xpY2tIYW5kbGVyIiwiY29tcGxldGVkIiwidGV4dCIsInRleHREZWNvcmF0aW9uIiwiTElORV9USFJPVUdIIiwiTk9ORSIsInN0eWxlIiwibGkiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3QkE7OztlQUFBOzs7cUJBdEJzQjt5QkFFYTtBQUVuQyxJQUFNQSxlQUFlLFNBQUNDLE9BQU9DLFNBQVk7SUFDdkMsSUFBUUMsZUFBa0NGLE1BQWxDRSxjQUFjQyxZQUFvQkgsTUFBcEJHLFdBQVdDLE9BQVNKLE1BQVRJLE1BQzNCQyxpQkFBaUJGLFlBQ0NHLHVCQUFZLEdBQ1ZDLGVBQUksRUFDeEJDLFFBQVE7UUFDTkgsZ0JBQUFBO0lBQ0Y7SUFFTixxQkFFRSwyQkFBQ0k7UUFBR0QsT0FBT0E7UUFBT0UsU0FBU1I7T0FDeEJFO0FBSVA7SUFFQSxXQUFlTCJ9