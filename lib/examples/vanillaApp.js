'use strict';

var React = require('../react'),
    ReactDOM = require('../reactDOM');

var vanillaApp = function vanillaApp() {
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
      var state = this.getState(),
          messages = state.messages,
          comments = messages.map(function (message) {
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
};

module.exports = vanillaApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwidmFuaWxsYUFwcCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbW1lbnQiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tbWVudHNMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImdldFN0YXRlIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50c0xpc3QiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7QUFHQSxJQUFNRSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxpQkFBaUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBdkI7O0FBRUEsTUFBTUMsVUFBVVAsTUFBTVEsV0FBTixDQUFrQjtBQUFBOztBQUNoQ0MsWUFBUSxrQkFBVztBQUNqQixhQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUtDLEtBQUwsQ0FBV0M7QUFEZDtBQURGLE9BRkY7QUFTRCxLQVgrQjs7QUFhaENDLHVCQUFtQiw2QkFBVztBQUM1QixVQUFNRCxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGNBQVFDLEdBQVIsQ0FBWSxrQ0FBa0NILE9BQTlDO0FBQ0QsS0FqQitCOztBQW1CaENJLDBCQUFzQixnQ0FBVztBQUMvQixVQUFNSixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGNBQVFDLEdBQVIsQ0FBWSxvQ0FBb0NILE9BQWhEO0FBQ0Q7QUF2QitCLEdBQWxCLENBQWhCOztBQTBCQSxNQUFNSyxlQUFlaEIsTUFBTVEsV0FBTixDQUFrQjtBQUFBO0FBQ3JDUyxtQkFEcUMsNkJBQ25CO0FBQ2hCLFVBQU1DLFdBQVcsQ0FDVCxlQURTLEVBRVQsc0JBRlMsQ0FBakI7QUFBQSxVQUlNQyxRQUFRO0FBQ05ELGtCQUFVQTtBQURKLE9BSmQ7O0FBUUEsYUFBT0MsS0FBUDtBQUNELEtBWG9DOzs7QUFhckNWLFlBQVEsa0JBQVc7QUFDWCxrQkFBUSxLQUFLVyxRQUFMLEVBQVI7QUFBQSxVQUNFRixRQURGLEdBQ2VDLEtBRGYsQ0FDRUQsUUFERjtBQUFBLFVBRUFHLFFBRkEsR0FFV0gsU0FBU0ksR0FBVCxDQUFhLFVBQVNYLE9BQVQsRUFBa0I7QUFDeEMsZUFBTyxvQkFBQyxPQUFELElBQVMsU0FBU0EsT0FBbEIsR0FBUDtBQUNELE9BRlUsQ0FGWDs7O0FBTU4sYUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDR1U7QUFESCxPQUZGO0FBT0QsS0EzQm9DOztBQTZCckNULHVCQUFtQiw2QkFBVztBQUM1QkMsY0FBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7QUEvQm9DLEdBQWxCLENBQXJCOztBQWtDQSxNQUFNUyxlQUFlLG9CQUFDLFlBQUQsT0FBckI7O0FBRUFyQixXQUFTTyxNQUFULENBQWdCYyxZQUFoQixFQUE4Qm5CLGNBQTlCOztBQUVBb0IsYUFBVyxZQUFXO0FBQ3BCLFFBQU1OLFdBQVcsQ0FDVCwwQkFEUyxDQUFqQjtBQUFBLFFBR01DLFFBQVE7QUFDTkQsZ0JBQVVBO0FBREosS0FIZDs7QUFPQUssaUJBQWFFLFFBQWIsQ0FBc0JOLEtBQXRCO0FBQ0QsR0FURCxFQVNHLElBVEgsRUFuRXVCLENBNEViO0FBQ1gsQ0E3RUQ7O0FBK0VBTyxPQUFPQyxPQUFQLEdBQWlCeEIsVUFBakIiLCJmaWxlIjoidmFuaWxsYUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB2YW5pbGxhQXBwID0gKCkgPT4ge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IHN0YXRlLFxuICAgICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgIHtjb21tZW50c31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cyBsaXN0IG1vdW50ZWQnKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIDEwMDApOyAvLy9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFuaWxsYUFwcDtcbiJdfQ==