"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = require("../../../index");
var _filterLink = _interopRequireDefault(require("./filterLink"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Footer = function(props, context) {
    /*#__PURE__*/ return _index.React.createElement("p", null, "Show: ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
    }, "All"), " - ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
    }, "Active"), " - ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
    }, "Completed"));
};
var _default = Footer;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJjb250ZXh0IiwicHJvcHMiLCJwIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWdCLENBQWhCLE1BQWdCO0FBRWYsR0FBYyxDQUFkLFdBQWM7QUFFaUIsR0FBYyxDQUFkLFVBQWM7Ozs7OztBQUVwRSxHQUFLLENBQUNBLE1BQU0sR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE9BQU87a0JBRTVCLE1BQ0EsQ0FUb0IsTUFBZ0IscUJBUW5DRSxDQUFDLFVBQ0MsQ0FBUSx1QkFUUyxNQUFnQixxQkFFZixXQUFjO1FBUXJCQyxNQUFNLEVBTmdDLFVBQWM7T0FNbEMsQ0FBRyxPQUNoQyxDQUFLLG9CQVhZLE1BQWdCLHFCQUVmLFdBQWM7UUFVckJBLE1BQU0sRUFSZ0MsVUFBYztPQVEvQixDQUFNLFVBQ3RDLENBQUssb0JBYlksTUFBZ0IscUJBRWYsV0FBYztRQVlyQkEsTUFBTSxFQVZnQyxVQUFjO09BVTVCLENBQVM7O2VBS2xDSixNQUFNIn0=