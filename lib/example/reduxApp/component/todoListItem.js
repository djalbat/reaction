"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../../index");

///
var TodoListItem = function TodoListItem(props, context) {
  var clickHandler = props.clickHandler,
      completed = props.completed,
      text = props.text,
      textDecoration = completed ? "line-through" : "none",
      style = {
    textDecoration: textDecoration
  };
  return /*#__PURE__*/_index.React.createElement("li", {
    style: style,
    onClick: clickHandler
  }, text);
};

var _default = TodoListItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJwcm9wcyIsImNvbnRleHQiLCJjbGlja0hhbmRsZXIiLCJjb21wbGV0ZWQiLCJ0ZXh0IiwidGV4dERlY29yYXRpb24iLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFBd0M7QUFFeEMsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsTUFDL0JDLFlBRCtCLEdBQ0dGLEtBREgsQ0FDL0JFLFlBRCtCO0FBQUEsTUFDakJDLFNBRGlCLEdBQ0dILEtBREgsQ0FDakJHLFNBRGlCO0FBQUEsTUFDTkMsSUFETSxHQUNHSixLQURILENBQ05JLElBRE07QUFBQSxNQUVqQ0MsY0FGaUMsR0FFaEJGLFNBQVMsR0FDUixjQURRLEdBRU4sTUFKYTtBQUFBLE1BS2pDRyxLQUxpQyxHQUt6QjtBQUNORCxJQUFBQSxjQUFjLEVBQWRBO0FBRE0sR0FMeUI7QUFTdkMsc0JBRUU7QUFBSSxJQUFBLEtBQUssRUFBRUMsS0FBWDtBQUFrQixJQUFBLE9BQU8sRUFBRUo7QUFBM0IsS0FDR0UsSUFESCxDQUZGO0FBT0QsQ0FoQkQ7O2VBa0JlTCxZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBUb2RvTGlzdEl0ZW0gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjbGlja0hhbmRsZXIsIGNvbXBsZXRlZCwgdGV4dCB9ID0gcHJvcHMsXG4gICAgICAgIHRleHREZWNvcmF0aW9uID0gY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXRocm91Z2hcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub25lXCIsXG4gICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgIHRleHREZWNvcmF0aW9uXG4gICAgICAgIH07XG5cbiAgcmV0dXJuIChcblxuICAgIDxsaSBzdHlsZT17c3R5bGV9IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuICApO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdEl0ZW07XG4iXX0=