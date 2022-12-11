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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJwIiwiRmlsdGVyTGluayIsImZpbHRlciIsIlNIT1dfQUxMIiwiU0hPV19BQ1RJVkUiLCJTSE9XX0NPTVBMRVRFRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBQTs7O3FCQW5Cc0I7K0RBRUM7eUJBRStCOzs7Ozs7QUFFdEQsSUFBTUEsU0FBUyxTQUFDQyxPQUFPQzt5QkFFckIsMkJBQUNDLFdBQ0Usd0JBQ0QsMkJBQUNDLG1CQUFVO1FBQUNDLFFBQVFDLG1CQUFRO09BQUUsUUFDN0IscUJBQ0QsMkJBQUNGLG1CQUFVO1FBQUNDLFFBQVFFLHNCQUFXO09BQUUsV0FDaEMscUJBQ0QsMkJBQUNILG1CQUFVO1FBQUNDLFFBQVFHLHlCQUFjO09BQUU7O0lBS3hDLFdBQWVSIn0=