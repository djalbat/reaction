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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFDWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCLENBRFE7O0FBR1osTUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0FBVVIsdUJBQW1CLDZCQUFXO0FBQzVCLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBRGM7O0FBRzVCLGNBQVEsR0FBUixDQUFZLGtDQUFrQyxPQUFsQyxDQUFaLENBSDRCO0tBQVg7R0FYUCxDQUFWLENBSFE7O0FBcUJaLE1BQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNuQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxXQUFXLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQVg7VUFJQSxlQUFlO0FBQ2Isa0JBQVUsUUFBVjtPQURGLENBTHNCOztBQVMxQixhQUFPLFlBQVAsQ0FUMEI7S0FBWDtBQVdqQixZQUFRLGtCQUFXO0FBQ2pCLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQVMsT0FBVCxFQUFrQjtBQUN2RCxlQUFPLG9CQUFDLE9BQUQsSUFBUyxTQUFTLE9BQVQsRUFBVCxDQUFQLENBRHVEO09BQWxCLENBQW5DLENBRGE7O0FBS2pCLGFBRUU7O1VBQUssV0FBVSxjQUFWLEVBQUw7UUFDRyxRQURIO09BRkYsQ0FMaUI7S0FBWDtBQVlSLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSx1QkFBWixFQUQ0QjtLQUFYO0dBeEJGLENBQWYsQ0FyQlE7O0FBa0RaLE1BQUksZUFBZSxvQkFBQyxZQUFELE9BQWYsQ0FsRFE7O0FBb0RaLFdBQVMsTUFBVCxDQUFnQixZQUFoQixFQUE4QixjQUE5QixFQXBEWTs7QUFzRFosTUFBSSxXQUFXLENBQ1QsMEJBRFMsQ0FBWDtNQUdBLFFBQVE7QUFDTixjQUFVLFFBQVY7R0FERixDQXpEUTs7QUE2RFosYUFBVyxZQUFXO0FBQ3BCLGlCQUFhLFFBQWIsQ0FBc0IsS0FBdEIsRUFEb0I7R0FBWCxFQUVSLElBRkg7QUE3RFksQ0FBZDs7QUFtRUYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZhciBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICB2YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29tbWVudHMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c0xpc3RcIj5cbiAgICAgICAgICAgIHtjb21tZW50c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cyBsaXN0IG1vdW50ZWQnKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCBib2R5RE9NRWxlbWVudCk7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICBdLFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgfTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIDEwMDApOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==
