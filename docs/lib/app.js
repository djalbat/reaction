'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var App = function App() {
  _classCallCheck(this, App);

  var bodyDOMElement = document.getElementsByTagName('body')[0];

  // var Comment = React.createClass({
  //   render: function() {
  //     return (
  //
  //       <div className="comment">
  //         <p>
  //           {this.props.message}
  //         </p>
  //       </div>
  //     );
  //   }
  // });
  //
  // var CommentsList = React.createClass({
  //   getInitialState: function() {
  //     var messages = [
  //           "Hello, world!",
  //           "Hello world again..."
  //         ],
  //         initialState = {
  //           messages: messages
  //         };
  //
  //     return initialState;
  //   },
  //   render: function() {
  //     var comments = this.state.messages.map(function(message) {
  //       return <Comment message={message} />;
  //     });
  //
  //     return (
  //
  //       <div className="commentsList">
  //         {comments}
  //       </div>
  //     );
  //   }
  // });
  //
  // var commentsList = <CommentsList />;
  //
  // ReactDOM.render(commentsList, bodyDOMElement);
  //
  // var messages = [
  //       "Hello world yet again!!!"
  //     ],
  //     state = {
  //       messages: messages
  //     };
  //
  // setTimeout(function() {
  //   commentsList.setState(state);
  // }, 1000); ///

  var Div = React.createClass({
    displayName: 'Div',

    getInitialState: function getInitialState() {
      return "";
    }
  });

  var div = React.createElement(Div, null);

  ReactDOM.render(div, bodyDOMElement);
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFDWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURRLE1BeURSLE1BQU0sTUFBTSxXQUFOLENBQWtCOzs7QUFDMUIscUJBQWlCLDJCQUFXO0FBQzFCLGFBQU8sRUFBUCxDQUQwQjtLQUFYO0dBRFQsQ0FBTixDQXpEUTs7QUErRFosTUFBSSxNQUFNLG9CQUFDLEdBQUQsT0FBTixDQS9EUTs7QUFpRVosV0FBUyxNQUFULENBQWdCLEdBQWhCLEVBQXFCLGNBQXJCLEVBakVZO0NBQWQ7O0FBcUVGLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgLy8gdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgLy8gICAgICAgICA8cD5cbiAgICAvLyAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAvLyAgICAgICAgIDwvcD5cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgLy8gICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgIC8vICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgIC8vICAgICAgICAgfTtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBjb21tZW50cyA9IHRoaXMuc3RhdGUubWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAvLyAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy9cbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgIC8vICAgICAgICAge2NvbW1lbnRzfVxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gdmFyIGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG4gICAgLy9cbiAgICAvLyBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCBib2R5RE9NRWxlbWVudCk7XG4gICAgLy9cbiAgICAvLyB2YXIgbWVzc2FnZXMgPSBbXG4gICAgLy8gICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgIC8vICAgICBdLFxuICAgIC8vICAgICBzdGF0ZSA9IHtcbiAgICAvLyAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAvLyAgICAgfTtcbiAgICAvL1xuICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgIC8vIH0sIDEwMDApOyAvLy9cblxuICAgIHZhciBEaXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBkaXYgPSA8RGl2PjwvRGl2PjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihkaXYsIGJvZHlET01FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==
