"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = reduxApp;

var _index = require("../index");

var _redux = require("./reduxApp/redux");

var _reducer = _interopRequireDefault(require("./reduxApp/reducer"));

var _todoApp = _interopRequireDefault(require("./reduxApp/component/todoApp"));

var _provider = _interopRequireDefault(require("./reduxApp/component/provider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
function reduxApp() {
  var store = (0, _redux.createStore)(_reducer["default"]),
      rootDOMElement = document.getElementById("root");

  _index.ReactDOM.render(_index.React.createElement(_provider["default"], {
    store: store
  }, _index.React.createElement(_todoApp["default"], null)), rootDOMElement);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHV4QXBwLmpzIl0sIm5hbWVzIjpbInJlZHV4QXBwIiwic3RvcmUiLCJyZWR1Y2VyIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFONEM7QUFRN0IsU0FBU0EsUUFBVCxHQUFvQjtBQUNqQyxNQUFNQyxLQUFLLEdBQUcsd0JBQVlDLG1CQUFaLENBQWQ7QUFBQSxNQUNNQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUR2Qjs7QUFHQUMsa0JBQVNDLE1BQVQsQ0FFSSwyQkFBQyxvQkFBRDtBQUFVLElBQUEsS0FBSyxFQUFFTjtBQUFqQixLQUNFLDJCQUFDLG1CQUFELE9BREYsQ0FGSixFQU9FRSxjQVBGO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QsIFJlYWN0RE9NIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gXCIuL3JlZHV4QXBwL3JlZHV4XCI7XG5cbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL3JlZHV4QXBwL3JlZHVjZXJcIjtcbmltcG9ydCBUb2RvQXBwIGZyb20gXCIuL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvQXBwXCI7XG5pbXBvcnQgUHJvdmlkZXIgZnJvbSBcIi4vcmVkdXhBcHAvY29tcG9uZW50L3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHV4QXBwKCkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8VG9kb0FwcCAvPlxuICAgICAgPC9Qcm92aWRlcj5cblxuICAgICxcbiAgICByb290RE9NRWxlbWVudFxuXG4gICk7XG59XG4iXX0=