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
};

module.exports = vanillaApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwidmFuaWxsYUFwcCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbW1lbnQiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tbWVudHNMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImNvbW1lbnRzIiwibWFwIiwiY29tbWVudHNMaXN0Iiwic2V0VGltZW91dCIsInNldFN0YXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxVQUFSLENBQWQ7QUFBQSxJQUNNQyxXQUFXRCxRQUFRLGFBQVIsQ0FEakI7O0FBR0EsSUFBTUUsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDdkIsTUFBTUMsaUJBQWlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXZCOztBQUVBLE1BQUlDLFVBQVVQLE1BQU1RLFdBQU4sQ0FBa0I7QUFBQTs7QUFDOUJDLFlBQVEsa0JBQVc7QUFDakIsYUFFSTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRyxlQUFLQyxLQUFMLENBQVdDO0FBRGQ7QUFERixPQUZKO0FBUUQsS0FWNkI7O0FBWTlCQyx1QkFBbUIsNkJBQVc7QUFDNUIsVUFBTUQsVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQTNCOztBQUVBRSxjQUFRQyxHQUFSLENBQVksa0NBQWtDSCxPQUE5QztBQUNELEtBaEI2Qjs7QUFrQjlCSSwwQkFBc0IsZ0NBQVc7QUFDL0IsVUFBTUosVUFBVSxLQUFLRCxLQUFMLENBQVdDLE9BQTNCOztBQUVBRSxjQUFRQyxHQUFSLENBQVksb0NBQW9DSCxPQUFoRDtBQUNEO0FBdEI2QixHQUFsQixDQUFkOztBQXlCQSxNQUFJSyxlQUFlaEIsTUFBTVEsV0FBTixDQUFrQjtBQUFBO0FBQ25DUyxtQkFEbUMsNkJBQ2pCO0FBQ2hCLFVBQU1DLFdBQVcsQ0FDVCxlQURTLEVBRVQsc0JBRlMsQ0FBakI7QUFBQSxVQUlNQyxRQUFRO0FBQ05ELGtCQUFVQTtBQURKLE9BSmQ7O0FBUUEsYUFBT0MsS0FBUDtBQUNELEtBWGtDOzs7QUFhbkNWLFlBQVEsa0JBQVc7QUFDakIsVUFBSVMsV0FBVyxLQUFLQyxLQUFMLENBQVdELFFBQTFCOztBQUVBLFVBQUlFLFdBQVdGLFNBQVNHLEdBQVQsQ0FBYSxVQUFTVixPQUFULEVBQWtCO0FBQzVDLGVBQU8sb0JBQUMsT0FBRCxJQUFTLFNBQVNBLE9BQWxCLEdBQVA7QUFDRCxPQUZjLENBQWY7O0FBSUEsYUFFSTtBQUFBO0FBQUEsVUFBSyxXQUFVLGNBQWY7QUFDR1M7QUFESCxPQUZKO0FBTUQsS0ExQmtDOztBQTRCbkNSLHVCQUFtQiw2QkFBVztBQUM1QkMsY0FBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7QUE5QmtDLEdBQWxCLENBQW5COztBQWlDQSxNQUFJUSxlQUFlLG9CQUFDLFlBQUQsT0FBbkI7O0FBRUFwQixXQUFTTyxNQUFULENBQWdCYSxZQUFoQixFQUE4QmxCLGNBQTlCOztBQUVBbUIsYUFBVyxZQUFXO0FBQ3BCLFFBQU1MLFdBQVcsQ0FDVCwwQkFEUyxDQUFqQjtBQUFBLFFBR01DLFFBQVE7QUFDTkQsZ0JBQVVBO0FBREosS0FIZDs7QUFPQUksaUJBQWFFLFFBQWIsQ0FBc0JMLEtBQXRCO0FBQ0QsR0FURCxFQVNHLElBVEgsRUFqRXVCLENBMEViO0FBQ1gsQ0EzRUQ7O0FBNkVBTSxPQUFPQyxPQUFQLEdBQWlCdkIsVUFBakIiLCJmaWxlIjoidmFuaWxsYUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB2YW5pbGxhQXBwID0gKCkgPT4ge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfVxuICB9KTtcblxuICB2YXIgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1lc3NhZ2VzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcztcblxuICAgICAgdmFyIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgfVxuICB9KTtcblxuICB2YXIgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIDEwMDApOyAvLy9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFuaWxsYUFwcDtcbiJdfQ==