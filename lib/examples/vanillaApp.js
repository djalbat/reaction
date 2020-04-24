"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = vanillaApp;

var _react = _interopRequireDefault(require("../react"));

var _reactDOM = _interopRequireDefault(require("../reactDOM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Comment = _react["default"].createClass({
  render: function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comment"
    }, /*#__PURE__*/_react["default"].createElement("p", null, this.props.message));
  },
  componentDidMount: function componentDidMount() {
    var message = this.props.message;
    console.log("Comment mounted with message: " + message);
  },
  componentWillUnmount: function componentWillUnmount() {
    var message = this.props.message;
    console.log("Comment unmounted with message: " + message);
  }
});

var CommentsList = _react["default"].createClass({
  getInitialState: function getInitialState() {
    var messages = ["Hello, world!", "Hello world again..."],
        state = {
      messages: messages
    };
    return state;
  },
  componentDidMount: function componentDidMount() {
    console.log("Comments list mounted.");
  },
  render: function render() {
    var state = this.getState(),
        messages = state.messages,
        comments = messages.map(function (message) {
      return /*#__PURE__*/_react["default"].createElement(Comment, {
        message: message
      });
    });
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "comments-list"
    }, comments);
  }
});

function vanillaApp() {
  var commentsList = /*#__PURE__*/_react["default"].createElement(CommentsList, null),
      rootDOMElement = document.getElementById("root");

  _reactDOM["default"].render(commentsList, rootDOMElement);

  setTimeout(function () {
    var messages = ["Hello world yet again!!!"],
        state = {
      messages: messages
    };
    commentsList.setState(state);
  }, 1000); ///
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmlsbGFBcHAuanMiXSwibmFtZXMiOlsiQ29tbWVudCIsIlJlYWN0IiwiY3JlYXRlQ2xhc3MiLCJyZW5kZXIiLCJwcm9wcyIsIm1lc3NhZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnRXaWxsVW5tb3VudCIsIkNvbW1lbnRzTGlzdCIsImdldEluaXRpYWxTdGF0ZSIsIm1lc3NhZ2VzIiwic3RhdGUiLCJnZXRTdGF0ZSIsImNvbW1lbnRzIiwibWFwIiwidmFuaWxsYUFwcCIsImNvbW1lbnRzTGlzdCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJlYWN0RE9NIiwic2V0VGltZW91dCIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHQyxrQkFBTUMsV0FBTixDQUFrQjtBQUNoQ0MsRUFBQUEsTUFBTSxFQUFFLGtCQUFXO0FBQ2pCLHdCQUVFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSwyQ0FDRyxLQUFLQyxLQUFMLENBQVdDLE9BRGQsQ0FERixDQUZGO0FBU0QsR0FYK0I7QUFhaENDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFXO0FBQzVCLFFBQU1ELE9BQU8sR0FBRyxLQUFLRCxLQUFMLENBQVdDLE9BQTNCO0FBRUFFLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFtQ0gsT0FBL0M7QUFDRCxHQWpCK0I7QUFtQmhDSSxFQUFBQSxvQkFBb0IsRUFBRSxnQ0FBVztBQUMvQixRQUFNSixPQUFPLEdBQUcsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjtBQUVBRSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxxQ0FBcUNILE9BQWpEO0FBQ0Q7QUF2QitCLENBQWxCLENBQWhCOztBQTBCQSxJQUFNSyxZQUFZLEdBQUdULGtCQUFNQyxXQUFOLENBQWtCO0FBQ3JDUyxFQUFBQSxlQURxQyw2QkFDbkI7QUFDaEIsUUFBTUMsUUFBUSxHQUFHLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQWpCO0FBQUEsUUFJTUMsS0FBSyxHQUFHO0FBQ05ELE1BQUFBLFFBQVEsRUFBUkE7QUFETSxLQUpkO0FBUUEsV0FBT0MsS0FBUDtBQUNELEdBWG9DO0FBYXJDUCxFQUFBQSxpQkFBaUIsRUFBRSw2QkFBVztBQUM1QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQVo7QUFDRCxHQWZvQztBQWlCckNMLEVBQUFBLE1BQU0sRUFBRSxrQkFBVztBQUNYLFFBQUFVLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxRQUNFRixRQURGLEdBQ2VDLEtBRGYsQ0FDRUQsUUFERjtBQUFBLFFBRUFHLFFBRkEsR0FFV0gsUUFBUSxDQUFDSSxHQUFULENBQWEsVUFBQ1gsT0FBRDtBQUFBLDBCQUV0QixnQ0FBQyxPQUFEO0FBQVMsUUFBQSxPQUFPLEVBQUVBO0FBQWxCLFFBRnNCO0FBQUEsS0FBYixDQUZYO0FBUU4sd0JBRUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0dVLFFBREgsQ0FGRjtBQU9EO0FBakNvQyxDQUFsQixDQUFyQjs7QUFvQ2UsU0FBU0UsVUFBVCxHQUFzQjtBQUNuQyxNQUFNQyxZQUFZLGdCQUVWLGdDQUFDLFlBQUQsT0FGUjtBQUFBLE1BS01DLGNBQWMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBTHZCOztBQVFBQyx1QkFBU25CLE1BQVQsQ0FDRWUsWUFERixFQUVFQyxjQUZGOztBQUtBSSxFQUFBQSxVQUFVLENBQUMsWUFBVztBQUNwQixRQUFNWCxRQUFRLEdBQUcsQ0FDVCwwQkFEUyxDQUFqQjtBQUFBLFFBR01DLEtBQUssR0FBRztBQUNORCxNQUFBQSxRQUFRLEVBQVJBO0FBRE0sS0FIZDtBQU9BTSxJQUFBQSxZQUFZLENBQUNNLFFBQWIsQ0FBc0JYLEtBQXRCO0FBQ0QsR0FUUyxFQVNQLElBVE8sQ0FBVixDQWRtQyxDQXVCekI7QUFDWDs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcIi4uL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcIi4uL3JlYWN0RE9NXCI7XG5cbmNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZTogXCIgKyBtZXNzYWdlKVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgY29uc29sZS5sb2coXCJDb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2U6IFwiICsgbWVzc2FnZSlcbiAgfVxufSk7XG5cbmNvbnN0IENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbW1lbnRzIGxpc3QgbW91bnRlZC5cIilcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PlxuXG4gICAgICAgICAgICA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPlxuXG4gICAgICAgICAgKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHMtbGlzdFwiPlxuICAgICAgICB7Y29tbWVudHN9XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YW5pbGxhQXBwKCkge1xuICBjb25zdCBjb21tZW50c0xpc3QgPVxuXG4gICAgICAgICAgPENvbW1lbnRzTGlzdCAvPlxuXG4gICAgICAgICxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XG5cblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgY29tbWVudHNMaXN0LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcbiJdfQ==