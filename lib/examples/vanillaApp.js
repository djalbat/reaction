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
      var state = this.getState();
      var messages = state.messages;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicmVxdWlyZSIsIlJlYWN0RE9NIiwidmFuaWxsYUFwcCIsInJvb3RET01FbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNvbW1lbnQiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwibWVzc2FnZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiQ29tbWVudHNMaXN0IiwiZ2V0SW5pdGlhbFN0YXRlIiwibWVzc2FnZXMiLCJzdGF0ZSIsImdldFN0YXRlIiwibWFwIiwiY29tbWVudHMiLCJjb21tZW50c0xpc3QiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFNQSxRQUFRQyxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7QUFHQSxJQUFNRSxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixNQUFNQyxpQkFBaUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBdkI7O0FBRUEsTUFBTUMsVUFBVVAsTUFBTVEsV0FBTixDQUFrQjtBQUFBOztBQUNoQ0MsWUFBUSxrQkFBVztBQUNqQixhQUVFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNHLGVBQUtDLEtBQUwsQ0FBV0M7QUFEZDtBQURGLE9BRkY7QUFTRCxLQVgrQjs7QUFhaENDLHVCQUFtQiw2QkFBVztBQUM1QixVQUFNRCxVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGNBQVFDLEdBQVIsQ0FBWSxrQ0FBa0NILE9BQTlDO0FBQ0QsS0FqQitCOztBQW1CaENJLDBCQUFzQixnQ0FBVztBQUMvQixVQUFNSixVQUFVLEtBQUtELEtBQUwsQ0FBV0MsT0FBM0I7O0FBRUFFLGNBQVFDLEdBQVIsQ0FBWSxvQ0FBb0NILE9BQWhEO0FBQ0Q7QUF2QitCLEdBQWxCLENBQWhCOztBQTBCQSxNQUFNSyxlQUFlaEIsTUFBTVEsV0FBTixDQUFrQjtBQUFBO0FBQ3JDUyxtQkFEcUMsNkJBQ25CO0FBQ2hCLFVBQU1DLFdBQVcsQ0FDVCxlQURTLEVBRVQsc0JBRlMsQ0FBakI7QUFBQSxVQUlNQyxRQUFRO0FBQ05ELGtCQUFVQTtBQURKLE9BSmQ7O0FBUUEsYUFBT0MsS0FBUDtBQUNELEtBWG9DOzs7QUFhckNWLFlBQVEsa0JBQVc7QUFDWCxrQkFBUSxLQUFLVyxRQUFMLEVBQVI7QUFDQSxVQUFFRixRQUFGLEdBQWVDLEtBQWYsQ0FBRUQsUUFBRjtBQUNBLHFCQUFXQSxTQUFTRyxHQUFULENBQWEsVUFBU1YsT0FBVCxFQUFrQjtBQUN4QyxlQUFPLG9CQUFDLE9BQUQsSUFBUyxTQUFTQSxPQUFsQixHQUFQO0FBQ0QsT0FGVSxDQUFYOztBQUlOLGFBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0dXO0FBREgsT0FGRjtBQU9ELEtBM0JvQzs7QUE2QnJDVix1QkFBbUIsNkJBQVc7QUFDNUJDLGNBQVFDLEdBQVIsQ0FBWSx1QkFBWjtBQUNEO0FBL0JvQyxHQUFsQixDQUFyQjs7QUFrQ0EsTUFBTVMsZUFBZSxvQkFBQyxZQUFELE9BQXJCOztBQUVBckIsV0FBU08sTUFBVCxDQUFnQmMsWUFBaEIsRUFBOEJuQixjQUE5Qjs7QUFFQW9CLGFBQVcsWUFBVztBQUNwQixRQUFNTixXQUFXLENBQ1QsMEJBRFMsQ0FBakI7QUFBQSxRQUdNQyxRQUFRO0FBQ05ELGdCQUFVQTtBQURKLEtBSGQ7O0FBT0FLLGlCQUFhRSxRQUFiLENBQXNCTixLQUF0QjtBQUNELEdBVEQsRUFTRyxJQVRILEVBbkV1QixDQTRFYjtBQUNYLENBN0VEOztBQStFQU8sT0FBT0MsT0FBUCxHQUFpQnhCLFVBQWpCIiwiZmlsZSI6InZhbmlsbGFBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgdmFuaWxsYUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIGNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBzdGF0ZSxcbiAgICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c0xpc3RcIj5cbiAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG5cbiAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgIH07XG5cbiAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICB9LCAxMDAwKTsgLy8vXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbmlsbGFBcHA7XG4iXX0=