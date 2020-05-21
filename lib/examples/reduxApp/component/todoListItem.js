"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../../index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6WyJUb2RvTGlzdEl0ZW0iLCJwcm9wcyIsImNvbnRleHQiLCJjbGlja0hhbmRsZXIiLCJjb21wbGV0ZWQiLCJ0ZXh0IiwidGV4dERlY29yYXRpb24iLCJzdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFBQSxNQUMvQkMsWUFEK0IsR0FDR0YsS0FESCxDQUMvQkUsWUFEK0I7QUFBQSxNQUNqQkMsU0FEaUIsR0FDR0gsS0FESCxDQUNqQkcsU0FEaUI7QUFBQSxNQUNOQyxJQURNLEdBQ0dKLEtBREgsQ0FDTkksSUFETTtBQUFBLE1BRWpDQyxjQUZpQyxHQUVoQkYsU0FBUyxHQUNSLGNBRFEsR0FFTixNQUphO0FBQUEsTUFLakNHLEtBTGlDLEdBS3pCO0FBQ05ELElBQUFBLGNBQWMsRUFBZEE7QUFETSxHQUx5QjtBQVN2QyxzQkFFRTtBQUFJLElBQUEsS0FBSyxFQUFFQyxLQUFYO0FBQWtCLElBQUEsT0FBTyxFQUFFSjtBQUEzQixLQUNHRSxJQURILENBRkY7QUFPRCxDQWhCRDs7ZUFrQmVMLFkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjtcblxuY29uc3QgVG9kb0xpc3RJdGVtID0gKHByb3BzLCBjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY2xpY2tIYW5kbGVyLCBjb21wbGV0ZWQsIHRleHQgfSA9IHByb3BzLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbiA9IGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS10aHJvdWdoXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9uZVwiLFxuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvblxuICAgICAgICB9O1xuXG4gIHJldHVybiAoXG5cbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAge3RleHR9XG4gICAgPC9saT5cbiAgKTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RJdGVtO1xuIl19