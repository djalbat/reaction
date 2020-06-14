"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../../index");

var _footer = _interopRequireDefault(require("./footer"));

var _addTodo = _interopRequireDefault(require("./addTodo"));

var _todoList = _interopRequireDefault(require("./todoList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var TodoApp = function TodoApp(props, context) {
  return /*#__PURE__*/_index.React.createElement("div", null, /*#__PURE__*/_index.React.createElement(_addTodo["default"], null), /*#__PURE__*/_index.React.createElement(_todoList["default"], null), /*#__PURE__*/_index.React.createElement(_footer["default"], null));
};

var _default = TodoApp;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9BcHAuanMiXSwibmFtZXMiOlsiVG9kb0FwcCIsInByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQUp3QztBQU14QyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE9BQVI7QUFBQSxzQkFFZCxxREFDRSwyQkFBQyxtQkFBRCxPQURGLGVBRUUsMkJBQUMsb0JBQUQsT0FGRixlQUdFLDJCQUFDLGtCQUFELE9BSEYsQ0FGYztBQUFBLENBQWhCOztlQVVlRixPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL3RvZG9MaXN0XCI7XG5cbmNvbnN0IFRvZG9BcHAgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPGRpdj5cbiAgICA8QWRkVG9kbyAvPlxuICAgIDxUb2RvTGlzdCAvPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcbiJdfQ==