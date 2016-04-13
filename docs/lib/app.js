'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var App = function App() {
  _classCallCheck(this, App);

  var bodyDOMElement = document.getElementsByTagName('body')[0];

  // var Profile,
  //     Nav = React.createClass({}),
  //     nav = <Nav color="blue"><Profile>click</Profile></Nav>;
  //
  // body.append(nav);

  // var Form = React.createClass({});
  //     Form.Row = React.createClass({});
  //     Form.Label = React.createClass({});
  //     Form.Input = React.createClass({});
  // var form = (
  //
  //     <Form>
  //       {/* It's okay to put comments in here as long as you enclose them in curly braces. */}
  //       <Form.Row /* Comments in here
  //                    on the other hand
  //                    are fine without
  //                    curly braces. */>
  //         <Form.Label />
  //         <Form.Input />
  //       </Form.Row>
  //     </Form>
  // );
  //
  // body.append(form);

  // var Input = React.createClass({}),
  //     firstDisabledInput = <Input type="button" disabled />,
  //     secondDisabledInput = <Input type="button" disabled={true} />,
  //     firstEnabledInput = <Input type="button" />,
  //     secondEnabledInput = <Input type="button" disabled={false} />;
  //
  // body.append(firstDisabledInput);
  // body.append(secondDisabledInput);
  // body.append(firstEnabledInput);
  // body.append(secondEnabledInput);

  // var Person = React.createClass({}),
  //     person = <Person name={window.isLoggedIn ? window.name : ''} />;
  //
  // body.append(person);

  // var Nav = React.createClass({}),
  //     Login = React.createClass({}),
  //     Container = React.createClass({}),
  //     container = <Container>{!window.isLoggedIn ? <Nav /> : <Login />}</Container>;
  //
  // body.append(container);

  // var Comment = React.createClass({
  //   render: function() {
  //     return (
  //       <div className="comment">
  //         <h2>
  //           {this.props.author}
  //         </h2>
  //         {this.props.children}
  //       </div>
  //     );
  //   },
  //   componentDidMount: function() {
  //     console.log(this.props.author + '\'s comment mounted')
  //   }
  // });

  // var CommentList = React.createClass({
  //   render: function() {
  //     var comments = this.props.data.map(function(comment) {
  //       return (
  //         <Comment author={comment.author} key={comment.id}>
  //           {comment.text}
  //         </Comment>
  //       );
  //     });
  //
  //     return (
  //       <div className="commentList">
  //         {comments}
  //       </div>
  //     );
  //   },
  //   componentDidMount: function() {
  //     console.log('The comment list component mounted')
  //   }
  // });

  var CommentList = React.createClass({
    displayName: 'CommentList',

    render: function render() {
      return React.createElement(
        'div',
        { className: 'commentList' },
        ' '
      );
    }
  });

  var CommentBox = React.createClass({
    displayName: 'CommentBox'
  });

  var commentBox = React.createElement(
    'div',
    { className: 'commentBox' },
    React.createElement(CommentList, null)
  );

  ReactDOM.render(commentBox, bodyDOMElement);

  // var StatefulDiv = React.createClass({
  //   getInitialState: function() {
  //     var title = "Hello world...",
  //         initialState = {
  //           title: title
  //         };
  //
  //     return initialState;
  //   },
  //   render: function() {
  //     return (
  //       <div>
  //         <h2>
  //           {this.state.title}
  //         </h2>
  //         <p>
  //           {this.props.message}
  //         </p>
  //       </div>
  //     );
  //   },
  //   componentDidMount: function() {
  //     console.log('the stateful div mounted')
  //   }
  // });
  //
  // var statefulDiv = <StatefulDiv message="Another message..."/>;
  //
  // ReactDOM.render(statefulDiv, bodyDOMElement);
  //
  // var title = "Hello world again!",
  //     state = {
  //       title: title
  //     };
  //
  // statefulDiv.setState(state);
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRlEsTUEwRlIsY0FBYyxNQUFNLFdBQU4sQ0FBa0I7OztBQUNsQyxZQUFRLGtCQUFXO0FBQ2pCLGFBQ0U7O1VBQUssV0FBVSxhQUFWLEVBQUw7O09BREYsQ0FEaUI7S0FBWDtHQURRLENBQWQsQ0ExRlE7O0FBa0daLE1BQUksYUFBYSxNQUFNLFdBQU4sQ0FBa0I7O0dBQWxCLENBQWIsQ0FsR1E7O0FBb0daLE1BQUksYUFFRjs7TUFBSyxXQUFVLFlBQVYsRUFBTDtJQUNFLG9CQUFDLFdBQUQsT0FERjtHQUZFLENBcEdROztBQTJHWixXQUFTLE1BQVQsQ0FBZ0IsVUFBaEIsRUFBNEIsY0FBNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM0dZLENBQWQ7O0FBb0pGLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHZhciBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAvLyB2YXIgUHJvZmlsZSxcbiAgICAvLyAgICAgTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBuYXYgPSA8TmF2IGNvbG9yPVwiYmx1ZVwiPjxQcm9maWxlPmNsaWNrPC9Qcm9maWxlPjwvTmF2PjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKG5hdik7XG5cbiAgICAvLyB2YXIgRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5Sb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uTGFiZWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gdmFyIGZvcm0gPSAoXG4gICAgLy9cbiAgICAvLyAgICAgPEZvcm0+XG4gICAgLy8gICAgICAgey8qIEl0J3Mgb2theSB0byBwdXQgY29tbWVudHMgaW4gaGVyZSBhcyBsb25nIGFzIHlvdSBlbmNsb3NlIHRoZW0gaW4gY3VybHkgYnJhY2VzLiAqL31cbiAgICAvLyAgICAgICA8Rm9ybS5Sb3cgLyogQ29tbWVudHMgaW4gaGVyZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBvbiB0aGUgb3RoZXIgaGFuZFxuICAgIC8vICAgICAgICAgICAgICAgICAgICBhcmUgZmluZSB3aXRob3V0XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGN1cmx5IGJyYWNlcy4gKi8+XG4gICAgLy8gICAgICAgICA8Rm9ybS5MYWJlbCAvPlxuICAgIC8vICAgICAgICAgPEZvcm0uSW5wdXQgLz5cbiAgICAvLyAgICAgICA8L0Zvcm0uUm93PlxuICAgIC8vICAgICA8L0Zvcm0+XG4gICAgLy8gKTtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGZvcm0pO1xuXG4gICAgLy8gdmFyIElucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBmaXJzdERpc2FibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkIC8+LFxuICAgIC8vICAgICBzZWNvbmREaXNhYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17dHJ1ZX0gLz4sXG4gICAgLy8gICAgIGZpcnN0RW5hYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiAvPixcbiAgICAvLyAgICAgc2Vjb25kRW5hYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17ZmFsc2V9IC8+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoZmlyc3REaXNhYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChzZWNvbmREaXNhYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChmaXJzdEVuYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoc2Vjb25kRW5hYmxlZElucHV0KTtcblxuICAgIC8vIHZhciBQZXJzb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIHBlcnNvbiA9IDxQZXJzb24gbmFtZT17d2luZG93LmlzTG9nZ2VkSW4gPyB3aW5kb3cubmFtZSA6ICcnfSAvPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKHBlcnNvbik7XG5cbiAgICAvLyB2YXIgTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBjb250YWluZXIgPSA8Q29udGFpbmVyPnshd2luZG93LmlzTG9nZ2VkSW4gPyA8TmF2IC8+IDogPExvZ2luIC8+fTwvQ29udGFpbmVyPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAvLyB2YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgLy8gICAgICAgICA8aDI+XG4gICAgLy8gICAgICAgICAgIHt0aGlzLnByb3BzLmF1dGhvcn1cbiAgICAvLyAgICAgICAgIDwvaDI+XG4gICAgLy8gICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXV0aG9yICsgJ1xcJ3MgY29tbWVudCBtb3VudGVkJylcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIC8vIHZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBjb21tZW50cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oY29tbWVudCkge1xuICAgIC8vICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICA8Q29tbWVudCBhdXRob3I9e2NvbW1lbnQuYXV0aG9yfSBrZXk9e2NvbW1lbnQuaWR9PlxuICAgIC8vICAgICAgICAgICB7Y29tbWVudC50ZXh0fVxuICAgIC8vICAgICAgICAgPC9Db21tZW50PlxuICAgIC8vICAgICAgICk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgIC8vICAgICAgICAge2NvbW1lbnRzfVxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1RoZSBjb21tZW50IGxpc3QgY29tcG9uZW50IG1vdW50ZWQnKVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgdmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+IDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRCb3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG5cbiAgICB2YXIgY29tbWVudEJveCA9IChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50Qm94XCI+XG4gICAgICAgIDxDb21tZW50TGlzdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb21tZW50Qm94LCBib2R5RE9NRWxlbWVudCk7XG5cbiAgICAvLyB2YXIgU3RhdGVmdWxEaXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgdGl0bGUgPSBcIkhlbGxvIHdvcmxkLi4uXCIsXG4gICAgLy8gICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICAgIHRpdGxlOiB0aXRsZVxuICAgIC8vICAgICAgICAgfTtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdj5cbiAgICAvLyAgICAgICAgIDxoMj5cbiAgICAvLyAgICAgICAgICAge3RoaXMuc3RhdGUudGl0bGV9XG4gICAgLy8gICAgICAgICA8L2gyPlxuICAgIC8vICAgICAgICAgPHA+XG4gICAgLy8gICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgLy8gICAgICAgICA8L3A+XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9LFxuICAgIC8vICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygndGhlIHN0YXRlZnVsIGRpdiBtb3VudGVkJylcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIHZhciBzdGF0ZWZ1bERpdiA9IDxTdGF0ZWZ1bERpdiBtZXNzYWdlPVwiQW5vdGhlciBtZXNzYWdlLi4uXCIvPjtcbiAgICAvL1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihzdGF0ZWZ1bERpdiwgYm9keURPTUVsZW1lbnQpO1xuICAgIC8vXG4gICAgLy8gdmFyIHRpdGxlID0gXCJIZWxsbyB3b3JsZCBhZ2FpbiFcIixcbiAgICAvLyAgICAgc3RhdGUgPSB7XG4gICAgLy8gICAgICAgdGl0bGU6IHRpdGxlXG4gICAgLy8gICAgIH07XG4gICAgLy9cbiAgICAvLyBzdGF0ZWZ1bERpdi5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iXX0=
