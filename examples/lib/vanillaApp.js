'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var VanillaApp = function () {
  function VanillaApp() {
    _classCallCheck(this, VanillaApp);
  }

  _createClass(VanillaApp, null, [{
    key: 'run',
    value: function run() {
      var rootDOMElement = document.getElementById('root');

      var Comment = React.createClass({
        displayName: 'Comment',

        render: function render() {
          return React.createElement(
            'div',
            { className: 'comment' },
            React.createElement(
              'p',
              null,
              this.props.message
            )
          );
        },
        componentDidMount: function componentDidMount() {
          var message = this.props.message;

          console.log('comment mounted with message ' + message);
        },
        componentWillUnmount: function componentWillUnmount() {
          var message = this.props.message;

          console.log('comment unmounted with message ' + message);
        }
      });

      var CommentsList = React.createClass({
        displayName: 'CommentsList',
        getInitialState: function getInitialState() {
          var messages = ["Hello, world!", "Hello world again..."],
              state = {
            messages: messages
          };

          return state;
        },


        render: function render() {
          var messages = this.state.messages;

          var comments = messages.map(function (message) {
            return React.createElement(Comment, { message: message });
          });

          return React.createElement(
            'div',
            { className: 'commentsList' },
            comments
          );
        },
        componentDidMount: function componentDidMount() {
          console.log('comments list mounted');
        }
      });

      var commentsList = React.createElement(CommentsList, null);

      ReactDOM.render(commentsList, rootDOMElement);

      setTimeout(function () {
        var messages = ["Hello world yet again!!!"],
            state = {
          messages: messages
        };

        commentsList.setState(state);
      }, 1000); ///
    }
  }]);

  return VanillaApp;
}();

module.exports = VanillaApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbInJlYWN0aW9uIiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiUmVhY3QiLCJWYW5pbGxhQXBwIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiQ29tbWVudCIsImNyZWF0ZUNsYXNzIiwicmVuZGVyIiwicHJvcHMiLCJtZXNzYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJDb21tZW50c0xpc3QiLCJnZXRJbml0aWFsU3RhdGUiLCJtZXNzYWdlcyIsInN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50c0xpc3QiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsV0FBV0MsUUFBUSxhQUFSLENBQWpCO0FBQUEsSUFDTUMsV0FBV0YsU0FBU0UsUUFEMUI7QUFBQSxJQUVNQyxRQUFRSCxTQUFTRyxLQUZ2Qjs7SUFJTUMsVTs7Ozs7OzswQkFDUztBQUNYLFVBQU1DLGlCQUFpQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF2Qjs7QUFFQSxVQUFJQyxVQUFVTCxNQUFNTSxXQUFOLENBQWtCO0FBQUE7O0FBQzlCQyxnQkFBUSxrQkFBVztBQUNqQixpQkFFSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRyxtQkFBS0MsS0FBTCxDQUFXQztBQURkO0FBREYsV0FGSjtBQVFELFNBVjZCO0FBVzlCQywyQkFBbUIsNkJBQVc7QUFDNUIsY0FBTUQsVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQTNCOztBQUVBRSxrQkFBUUMsR0FBUixDQUFZLGtDQUFrQ0gsT0FBOUM7QUFDRCxTQWY2QjtBQWdCOUJJLDhCQUFzQixnQ0FBVztBQUMvQixjQUFNSixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGtCQUFRQyxHQUFSLENBQVksb0NBQW9DSCxPQUFoRDtBQUNEO0FBcEI2QixPQUFsQixDQUFkOztBQXVCQSxVQUFJSyxlQUFlZCxNQUFNTSxXQUFOLENBQWtCO0FBQUE7QUFDbkNTLHVCQURtQyw2QkFDakI7QUFDaEIsY0FBTUMsV0FBVyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFqQjtBQUFBLGNBSU1DLFFBQVE7QUFDTkQsc0JBQVVBO0FBREosV0FKZDs7QUFRQSxpQkFBT0MsS0FBUDtBQUNELFNBWGtDOzs7QUFhbkNWLGdCQUFRLGtCQUFXO0FBQ2pCLGNBQUlTLFdBQVcsS0FBS0MsS0FBTCxDQUFXRCxRQUExQjs7QUFFQSxjQUFJRSxXQUFXRixTQUFTRyxHQUFULENBQWEsVUFBU1YsT0FBVCxFQUFrQjtBQUM1QyxtQkFBTyxvQkFBQyxPQUFELElBQVMsU0FBU0EsT0FBbEIsR0FBUDtBQUNELFdBRmMsQ0FBZjs7QUFJQSxpQkFFSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDR1M7QUFESCxXQUZKO0FBTUQsU0ExQmtDO0FBMkJuQ1IsMkJBQW1CLDZCQUFXO0FBQzVCQyxrQkFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7QUE3QmtDLE9BQWxCLENBQW5COztBQWdDQSxVQUFJUSxlQUFlLG9CQUFDLFlBQUQsT0FBbkI7O0FBRUFyQixlQUFTUSxNQUFULENBQWdCYSxZQUFoQixFQUE4QmxCLGNBQTlCOztBQUVBbUIsaUJBQVcsWUFBVztBQUNwQixZQUFNTCxXQUFXLENBQ1QsMEJBRFMsQ0FBakI7QUFBQSxZQUdNQyxRQUFRO0FBQ05ELG9CQUFVQTtBQURKLFNBSGQ7O0FBT0FJLHFCQUFhRSxRQUFiLENBQXNCTCxLQUF0QjtBQUNELE9BVEQsRUFTRyxJQVRILEVBOURXLENBdUVEO0FBQ1g7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCdkIsVUFBakIiLCJmaWxlIjoidmFuaWxsYUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFZhbmlsbGFBcHAge1xuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZSAnICsgbWVzc2FnZSlcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgdW5tb3VudGVkIHdpdGggbWVzc2FnZSAnICsgbWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9LFxuXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzO1xuXG4gICAgICAgIHZhciBjb21tZW50cyA9IG1lc3NhZ2VzLm1hcChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cyBsaXN0IG1vdW50ZWQnKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG4gICAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiICBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuICAgICAgXG4gICAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIDEwMDApOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbmlsbGFBcHA7XG4iXX0=