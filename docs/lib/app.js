'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var App = function App() {
  _classCallCheck(this, App);

  var bodyDOMElement = document.getElementsByTagName('body')[0];

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
    }
  });

  var CommentsList = React.createClass({
    displayName: 'CommentsList',

    getInitialState: function getInitialState() {
      var messages = ["Hello, world!", "Hello world again..."],
          initialState = {
        messages: messages
      };

      return initialState;
    },
    render: function render() {
      var comments = this.state.messages.map(function (message) {
        return React.createElement(Comment, { message: message });
      });

      return React.createElement(
        'div',
        { className: 'commentsList' },
        comments
      );
    }
  });

  var commentsList = React.createElement(CommentsList, null);

  ReactDOM.render(commentsList, bodyDOMElement);

  var messages = ["Hello world yet again!!!"],
      state = {
    messages: messages
  };

  setTimeout(function () {
    commentsList.setState(state);
  }, 1000); ///
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCLENBRlE7O0FBSVosTUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0dBREksQ0FBVixDQUpROztBQWlCWixNQUFJLGVBQWUsTUFBTSxXQUFOLENBQWtCOzs7QUFDbkMscUJBQWlCLDJCQUFXO0FBQzFCLFVBQUksV0FBVyxDQUNULGVBRFMsRUFFVCxzQkFGUyxDQUFYO1VBSUEsZUFBZTtBQUNiLGtCQUFVLFFBQVY7T0FERixDQUxzQjs7QUFTMUIsYUFBTyxZQUFQLENBVDBCO0tBQVg7QUFXakIsWUFBUSxrQkFBVztBQUNqQixVQUFJLFdBQVcsS0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixHQUFwQixDQUF3QixVQUFTLE9BQVQsRUFBa0I7QUFDdkQsZUFBTyxvQkFBQyxPQUFELElBQVMsU0FBUyxPQUFULEVBQVQsQ0FBUCxDQUR1RDtPQUFsQixDQUFuQyxDQURhOztBQUtqQixhQUVFOztVQUFLLFdBQVUsY0FBVixFQUFMO1FBQ0csUUFESDtPQUZGLENBTGlCO0tBQVg7R0FaUyxDQUFmLENBakJROztBQTJDWixNQUFJLGVBQWUsb0JBQUMsWUFBRCxPQUFmLENBM0NROztBQTZDWixXQUFTLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEIsY0FBOUIsRUE3Q1k7O0FBK0NaLE1BQUksV0FBVyxDQUNULDBCQURTLENBQVg7TUFHQSxRQUFRO0FBQ04sY0FBVSxRQUFWO0dBREYsQ0FsRFE7O0FBc0RaLGFBQVcsWUFBVztBQUNwQixpQkFBYSxRQUFiLENBQXNCLEtBQXRCLEVBRG9CO0dBQVgsRUFFUixJQUZIO0FBdERZLENBQWQ7O0FBNERGLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHZhciBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICB2YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb21tZW50c0xpc3QsIGJvZHlET01FbGVtZW50KTtcblxuICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSwgMTAwMCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iXX0=
