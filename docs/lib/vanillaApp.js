'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var VanillaApp = function VanillaApp() {
  _classCallCheck(this, VanillaApp);

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
    },
    componentDidMount: function componentDidMount() {
      console.log('comments list mounted');
    }
  });

  var commentsList = React.createElement(CommentsList, null);

  ReactDOM.render(commentsList, rootDOMElement);

  var messages = ["Hello world yet again!!!"],
      state = {
    messages: messages
  };

  setTimeout(function () {
    commentsList.setState(state);
  }, 1000); ///
};

module.exports = VanillaApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTixhQUNKLFNBREksVUFDSixHQUFjO3dCQURWLFlBQ1U7O0FBQ1osTUFBSSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBRFE7O0FBR1osTUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0FBVVIsdUJBQW1CLDZCQUFXO0FBQzVCLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBRGM7O0FBRzVCLGNBQVEsR0FBUixDQUFZLGtDQUFrQyxPQUFsQyxDQUFaLENBSDRCO0tBQVg7R0FYUCxDQUFWLENBSFE7O0FBcUJaLE1BQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNuQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxXQUFXLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQVg7VUFJQSxlQUFlO0FBQ2Isa0JBQVUsUUFBVjtPQURGLENBTHNCOztBQVMxQixhQUFPLFlBQVAsQ0FUMEI7S0FBWDtBQVdqQixZQUFRLGtCQUFXO0FBQ2pCLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQVMsT0FBVCxFQUFrQjtBQUN2RCxlQUFPLG9CQUFDLE9BQUQsSUFBUyxTQUFTLE9BQVQsRUFBVCxDQUFQLENBRHVEO09BQWxCLENBQW5DLENBRGE7O0FBS2pCLGFBRUU7O1VBQUssV0FBVSxjQUFWLEVBQUw7UUFDRyxRQURIO09BRkYsQ0FMaUI7S0FBWDtBQVlSLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSx1QkFBWixFQUQ0QjtLQUFYO0dBeEJGLENBQWYsQ0FyQlE7O0FBa0RaLE1BQUksZUFBZSxvQkFBQyxZQUFELE9BQWYsQ0FsRFE7O0FBb0RaLFdBQVMsTUFBVCxDQUFnQixZQUFoQixFQUE4QixjQUE5QixFQXBEWTs7QUFzRFosTUFBSSxXQUFXLENBQ1QsMEJBRFMsQ0FBWDtNQUdBLFFBQVE7QUFDTixjQUFVLFFBQVY7R0FERixDQXpEUTs7QUE2RFosYUFBVyxZQUFXO0FBQ3BCLGlCQUFhLFFBQWIsQ0FBc0IsS0FBdEIsRUFEb0I7R0FBWCxFQUVSLElBRkg7QUE3RFksQ0FBZDs7QUFtRUYsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6InZhbmlsbGFBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBWYW5pbGxhQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdmFyIHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZSAnICsgbWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb21tZW50cyA9IHRoaXMuc3RhdGUubWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb21tZW50c0xpc3QsIHJvb3RET01FbGVtZW50KTtcblxuICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9O1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSwgMTAwMCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFuaWxsYUFwcDtcbiJdfQ==