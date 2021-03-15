"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var TodoListItem = function(props, context) {
    var clickHandler = props.clickHandler, completed = props.completed, text = props.text, textDecoration = completed ? "line-through" : "none", style = {
        textDecoration: textDecoration
    };
    return _index.React.createElement("li", {
        style: style,
        onClick: clickHandler
    }, text);
};
var _default = TodoListItem;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxNQUFBO0lBRUEsWUFBQSxZQUFBLEtBQUEsRUFBQSxPQUFBO1FBQ0EsWUFBQSxHQUFBLEtBQUEsQ0FBQSxZQUFBLEVBQUEsU0FBQSxHQUFBLEtBQUEsQ0FBQSxTQUFBLEVBQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLEVBQ0EsY0FBQSxHQUFBLFNBQUEsSUFDQSxZQUFBLEtBQ0EsSUFBQSxHQUNBLEtBQUE7QUFDQSxzQkFBQSxFQUFBLGNBQUE7O1dBUkEsTUFBQSxzQkFhQSxFQUFBO0FBQUEsYUFBQSxFQUFBLEtBQUE7QUFBQSxlQUFBLEVBQUEsWUFBQTtPQUNBLElBQUE7O2VBTUEsWUFBQSJ9