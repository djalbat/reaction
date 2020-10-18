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
  return _index.React.createElement("li", {
    style: style,
    onClick: clickHandler
  }, text);
};

var _default = TodoListItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJwcm9wcyIsImNvbnRleHQiLCJjbGlja0hhbmRsZXIiLCJjb21wbGV0ZWQiLCJ0ZXh0IiwidGV4dERlY29yYXRpb24iLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFBd0M7QUFFeEMsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQUEsTUFDL0JDLFlBRCtCLEdBQ0dGLEtBREgsQ0FDL0JFLFlBRCtCO0FBQUEsTUFDakJDLFNBRGlCLEdBQ0dILEtBREgsQ0FDakJHLFNBRGlCO0FBQUEsTUFDTkMsSUFETSxHQUNHSixLQURILENBQ05JLElBRE07QUFBQSxNQUVqQ0MsY0FGaUMsR0FFaEJGLFNBQVMsR0FDUixjQURRLEdBRU4sTUFKYTtBQUFBLE1BS2pDRyxLQUxpQyxHQUt6QjtBQUNORCxJQUFBQSxjQUFjLEVBQWRBO0FBRE0sR0FMeUI7QUFTdkMsU0FFRTtBQUFJLElBQUEsS0FBSyxFQUFFQyxLQUFYO0FBQWtCLElBQUEsT0FBTyxFQUFFSjtBQUEzQixLQUNHRSxJQURILENBRkY7QUFPRCxDQWhCRDs7ZUFrQmVMLFkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IFRvZG9MaXN0SXRlbSA9IChwcm9wcywgY29udGV4dCkgPT4ge1xuICBjb25zdCB7IGNsaWNrSGFuZGxlciwgY29tcGxldGVkLCB0ZXh0IH0gPSBwcm9wcyxcbiAgICAgICAgdGV4dERlY29yYXRpb24gPSBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtdGhyb3VnaFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vbmVcIixcbiAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgdGV4dERlY29yYXRpb25cbiAgICAgICAgfTtcblxuICByZXR1cm4gKFxuXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gb25DbGljaz17Y2xpY2tIYW5kbGVyfT5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG4gICk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0SXRlbTtcbiJdfQ==