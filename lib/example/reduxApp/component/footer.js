"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../../../index");

var _filterLink = _interopRequireDefault(require("./filterLink"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
var Footer = function Footer(props, context) {
  return /*#__PURE__*/_index.React.createElement("p", null, "Show: ", /*#__PURE__*/_index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ALL
  }, "All"), " - ", /*#__PURE__*/_index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ACTIVE
  }, "Active"), " - ", /*#__PURE__*/_index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_COMPLETED
  }, "Completed"));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFKd0M7QUFNeEMsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSO0FBQUEsc0JBRWIsc0NBQ0csUUFESCxlQUVFLDJCQUFDLHNCQUFEO0FBQVksSUFBQSxNQUFNLEVBQUVDO0FBQXBCLFdBRkYsRUFHRyxLQUhILGVBSUUsMkJBQUMsc0JBQUQ7QUFBWSxJQUFBLE1BQU0sRUFBRUM7QUFBcEIsY0FKRixFQUtHLEtBTEgsZUFNRSwyQkFBQyxzQkFBRDtBQUFZLElBQUEsTUFBTSxFQUFFQztBQUFwQixpQkFORixDQUZhO0FBQUEsQ0FBZjs7ZUFhZUwsTSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IEZpbHRlckxpbmsgZnJvbSBcIi4vZmlsdGVyTGlua1wiO1xuXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19BQ1RJVkUsIFNIT1dfQ09NUExFVEVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBGb290ZXIgPSAocHJvcHMsIGNvbnRleHQpID0+XG5cbiAgPHA+XG4gICAge1wiU2hvdzogXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FMTH0+QWxsPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19BQ1RJVkV9PkFjdGl2ZTwvRmlsdGVyTGluaz5cbiAgICB7XCIgLSBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQ09NUExFVEVEfT5Db21wbGV0ZWQ8L0ZpbHRlckxpbms+XG4gIDwvcD5cblxuO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXX0=