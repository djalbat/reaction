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
var _filterLink = /*#__PURE__*/ _interopRequireDefault(require("./filterLink"));
var _constants = require("../constants");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Footer = function(props, context) {
    return /*#__PURE__*/ _index.React.createElement("p", null, "Show: ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ALL
    }, "All"), " - ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_ACTIVE
    }, "Active"), " - ", /*#__PURE__*/ _index.React.createElement(_filterLink.default, {
        filter: _constants.SHOW_COMPLETED
    }, "Completed"));
};
var _default = Footer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJwIiwiRmlsdGVyTGluayIsImZpbHRlciIsIlNIT1dfQUxMIiwiU0hPV19BQ1RJVkUiLCJTSE9XX0NPTVBMRVRFRCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQXFCYixTQUFzQjs7O2VBQXRCLFFBQXNCOzs7cUJBbkJBLGdCQUFnQjsrREFFZixjQUFjO3lCQUVpQixjQUFjOzs7Ozs7QUFFcEUsSUFBTUEsTUFBTSxHQUFHLFNBQUNDLEtBQUssRUFBRUMsT0FBTzt5QkFFNUIsMkJBQUNDLEdBQUMsUUFDQyxRQUFRLGdCQUNULDJCQUFDQyxXQUFVLFFBQUE7UUFBQ0MsTUFBTSxFQUFFQyxVQUFRLFNBQUE7T0FBRSxLQUFHLENBQWEsRUFDN0MsS0FBSyxnQkFDTiwyQkFBQ0YsV0FBVSxRQUFBO1FBQUNDLE1BQU0sRUFBRUUsVUFBVyxZQUFBO09BQUUsUUFBTSxDQUFhLEVBQ25ELEtBQUssZ0JBQ04sMkJBQUNILFdBQVUsUUFBQTtRQUFDQyxNQUFNLEVBQUVHLFVBQWMsZUFBQTtPQUFFLFdBQVMsQ0FBYSxDQUN4RDtDQUFBLEFBRUw7SUFFRCxRQUFzQixHQUFQUixNQUFNIn0=