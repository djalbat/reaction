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
  return _index.React.createElement("p", null, "Show: ", _index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ALL
  }, "All"), " - ", _index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_ACTIVE
  }, "Active"), " - ", _index.React.createElement(_filterLink["default"], {
    filter: _constants.SHOW_COMPLETED
  }, "Completed"));
};

var _default = Footer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJwcm9wcyIsImNvbnRleHQiLCJTSE9XX0FMTCIsIlNIT1dfQUNUSVZFIiwiU0hPV19DT01QTEVURUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7QUFKd0M7QUFNeEMsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSO0FBQUEsU0FFYixzQ0FDRyxRQURILEVBRUUsMkJBQUMsc0JBQUQ7QUFBWSxJQUFBLE1BQU0sRUFBRUM7QUFBcEIsV0FGRixFQUdHLEtBSEgsRUFJRSwyQkFBQyxzQkFBRDtBQUFZLElBQUEsTUFBTSxFQUFFQztBQUFwQixjQUpGLEVBS0csS0FMSCxFQU1FLDJCQUFDLHNCQUFEO0FBQVksSUFBQSxNQUFNLEVBQUVDO0FBQXBCLGlCQU5GLENBRmE7QUFBQSxDQUFmOztlQWFlTCxNIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgRmlsdGVyTGluayBmcm9tIFwiLi9maWx0ZXJMaW5rXCI7XG5cbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IEZvb3RlciA9IChwcm9wcywgY29udGV4dCkgPT5cblxuICA8cD5cbiAgICB7XCJTaG93OiBcIn1cbiAgICA8RmlsdGVyTGluayBmaWx0ZXI9e1NIT1dfQUxMfT5BbGw8L0ZpbHRlckxpbms+XG4gICAge1wiIC0gXCJ9XG4gICAgPEZpbHRlckxpbmsgZmlsdGVyPXtTSE9XX0FDVElWRX0+QWN0aXZlPC9GaWx0ZXJMaW5rPlxuICAgIHtcIiAtIFwifVxuICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj17U0hPV19DT01QTEVURUR9PkNvbXBsZXRlZDwvRmlsdGVyTGluaz5cbiAgPC9wPlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ==