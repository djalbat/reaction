'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var React = require('../react'),
    ReactDOM = require('../reactDOM');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwiVmFuaWxsYUFwcCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbW1lbnQiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tbWVudHNMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudHNMaXN0Iiwic2V0VGltZW91dCIsInNldFN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsVUFBUixDQUFkO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxhQUFSLENBRGpCOztJQUdNRSxVOzs7Ozs7OzBCQUNTO0FBQ1gsVUFBTUMsaUJBQWlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXZCOztBQUVBLFVBQUlDLFVBQVVQLE1BQU1RLFdBQU4sQ0FBa0I7QUFBQTs7QUFDOUJDLGdCQUFRLGtCQUFXO0FBQ2pCLGlCQUVJO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHLG1CQUFLQyxLQUFMLENBQVdDO0FBRGQ7QUFERixXQUZKO0FBUUQsU0FWNkI7QUFXOUJDLDJCQUFtQiw2QkFBVztBQUM1QixjQUFNRCxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGtCQUFRQyxHQUFSLENBQVksa0NBQWtDSCxPQUE5QztBQUNELFNBZjZCO0FBZ0I5QkksOEJBQXNCLGdDQUFXO0FBQy9CLGNBQU1KLFVBQVUsS0FBS0QsS0FBTCxDQUFXQyxPQUEzQjs7QUFFQUUsa0JBQVFDLEdBQVIsQ0FBWSxvQ0FBb0NILE9BQWhEO0FBQ0Q7QUFwQjZCLE9BQWxCLENBQWQ7O0FBdUJBLFVBQUlLLGVBQWVoQixNQUFNUSxXQUFOLENBQWtCO0FBQUE7QUFDbkNTLHVCQURtQyw2QkFDakI7QUFDaEIsY0FBTUMsV0FBVyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFqQjtBQUFBLGNBSU1DLFFBQVE7QUFDTkQsc0JBQVVBO0FBREosV0FKZDs7QUFRQSxpQkFBT0MsS0FBUDtBQUNELFNBWGtDOzs7QUFhbkNWLGdCQUFRLGtCQUFXO0FBQ2pCLGNBQUlTLFdBQVcsS0FBS0MsS0FBTCxDQUFXRCxRQUExQjs7QUFFQSxjQUFJRSxXQUFXRixTQUFTRyxHQUFULENBQWEsVUFBU1YsT0FBVCxFQUFrQjtBQUM1QyxtQkFBTyxvQkFBQyxPQUFELElBQVMsU0FBU0EsT0FBbEIsR0FBUDtBQUNELFdBRmMsQ0FBZjs7QUFJQSxpQkFFSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDR1M7QUFESCxXQUZKO0FBTUQsU0ExQmtDO0FBMkJuQ1IsMkJBQW1CLDZCQUFXO0FBQzVCQyxrQkFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7QUE3QmtDLE9BQWxCLENBQW5COztBQWdDQSxVQUFJUSxlQUFlLG9CQUFDLFlBQUQsT0FBbkI7O0FBRUFwQixlQUFTTyxNQUFULENBQWdCYSxZQUFoQixFQUE4QmxCLGNBQTlCOztBQUVBbUIsaUJBQVcsWUFBVztBQUNwQixZQUFNTCxXQUFXLENBQ1QsMEJBRFMsQ0FBakI7QUFBQSxZQUdNQyxRQUFRO0FBQ05ELG9CQUFVQTtBQURKLFNBSGQ7O0FBT0FJLHFCQUFhRSxRQUFiLENBQXNCTCxLQUF0QjtBQUNELE9BVEQsRUFTRyxJQVRILEVBOURXLENBdUVEO0FBQ1g7Ozs7OztBQUdITSxPQUFPQyxPQUFQLEdBQWlCdkIsVUFBakIiLCJmaWxlIjoidmFuaWxsYUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jbGFzcyBWYW5pbGxhQXBwIHtcbiAgc3RhdGljIHJ1bigpIHtcbiAgICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICB2YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgICB9LFxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfSxcblxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcblxuICAgICAgICB2YXIgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c0xpc3RcIj5cbiAgICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIiAgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcbiAgICAgIFxuICAgICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgICB9LCAxMDAwKTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWYW5pbGxhQXBwO1xuIl19