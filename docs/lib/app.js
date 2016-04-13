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

  // var CommentBox = React.createClass({
  //   getInitialState: function() {
  //     var data = [
  //           {id: 1, author: "Pete Hunt", text: "This is one comment."},
  //           {id: 2, author: "Joe Winner", text: "This is *another* comment..."},
  //           {id: 3, author: "Jordan Walker", text: "This is **yet another** comment!"}
  //         ],
  //         initialState = {
  //           data: data
  //         };
  //
  //     return initialState;
  //   },
  //   render: function() {
  //     return (
  //       <div className="commentList">
  //         <CommentList data={this.state.data}/>
  //       </div>
  //     );
  //   },
  //   componentDidMount: function() {
  //     console.log('The comment box component mounted')
  //   }
  // });

  // var commentBox = <CommentBox />;
  //
  // ReactDOM.render(commentBox, bodyDOMElement);

  var StatefulDiv = React.createClass({
    displayName: 'StatefulDiv',

    getInitialState: function getInitialState() {
      var initialState = "Hello world...";

      return initialState;
    },
    render: function render() {
      return React.createElement(
        'p',
        null,
        this.state
      );
    },
    componentDidMount: function componentDidMount() {
      console.log('the stateful div mounted');
    }
  });

  var statefulDiv = React.createElement(StatefulDiv, { message: 'Another message...' });

  ReactDOM.render(statefulDiv, bodyDOMElement);

  statefulDiv.setState('Hello world again!');
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGUSxNQXVIUixjQUFjLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2xDLHFCQUFpQiwyQkFBVztBQUMxQixVQUFJLGVBQWUsZ0JBQWYsQ0FEc0I7O0FBRzFCLGFBQU8sWUFBUCxDQUgwQjtLQUFYO0FBS2pCLFlBQVEsa0JBQVc7QUFDakIsYUFDRTs7O1FBQ0MsS0FBSyxLQUFMO09BRkgsQ0FEaUI7S0FBWDtBQU9SLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSwwQkFBWixFQUQ0QjtLQUFYO0dBYkgsQ0FBZCxDQXZIUTs7QUF5SVosTUFBSSxjQUFjLG9CQUFDLFdBQUQsSUFBYSxTQUFRLG9CQUFSLEVBQWIsQ0FBZCxDQXpJUTs7QUEySVosV0FBUyxNQUFULENBQWdCLFdBQWhCLEVBQTZCLGNBQTdCLEVBM0lZOztBQTZJWixjQUFZLFFBQVosQ0FBcUIsb0JBQXJCLEVBN0lZO0NBQWQ7O0FBaUpGLE9BQU8sT0FBUCxHQUFpQixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJ3JlYWN0aW9uJyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHZhciBib2R5RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbiAgICAvLyB2YXIgUHJvZmlsZSxcbiAgICAvLyAgICAgTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBuYXYgPSA8TmF2IGNvbG9yPVwiYmx1ZVwiPjxQcm9maWxlPmNsaWNrPC9Qcm9maWxlPjwvTmF2PjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKG5hdik7XG5cbiAgICAvLyB2YXIgRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5Sb3cgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uTGFiZWwgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gdmFyIGZvcm0gPSAoXG4gICAgLy9cbiAgICAvLyAgICAgPEZvcm0+XG4gICAgLy8gICAgICAgey8qIEl0J3Mgb2theSB0byBwdXQgY29tbWVudHMgaW4gaGVyZSBhcyBsb25nIGFzIHlvdSBlbmNsb3NlIHRoZW0gaW4gY3VybHkgYnJhY2VzLiAqL31cbiAgICAvLyAgICAgICA8Rm9ybS5Sb3cgLyogQ29tbWVudHMgaW4gaGVyZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBvbiB0aGUgb3RoZXIgaGFuZFxuICAgIC8vICAgICAgICAgICAgICAgICAgICBhcmUgZmluZSB3aXRob3V0XG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGN1cmx5IGJyYWNlcy4gKi8+XG4gICAgLy8gICAgICAgICA8Rm9ybS5MYWJlbCAvPlxuICAgIC8vICAgICAgICAgPEZvcm0uSW5wdXQgLz5cbiAgICAvLyAgICAgICA8L0Zvcm0uUm93PlxuICAgIC8vICAgICA8L0Zvcm0+XG4gICAgLy8gKTtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGZvcm0pO1xuXG4gICAgLy8gdmFyIElucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBmaXJzdERpc2FibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkIC8+LFxuICAgIC8vICAgICBzZWNvbmREaXNhYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17dHJ1ZX0gLz4sXG4gICAgLy8gICAgIGZpcnN0RW5hYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiAvPixcbiAgICAvLyAgICAgc2Vjb25kRW5hYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZD17ZmFsc2V9IC8+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoZmlyc3REaXNhYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChzZWNvbmREaXNhYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChmaXJzdEVuYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoc2Vjb25kRW5hYmxlZElucHV0KTtcblxuICAgIC8vIHZhciBQZXJzb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIHBlcnNvbiA9IDxQZXJzb24gbmFtZT17d2luZG93LmlzTG9nZ2VkSW4gPyB3aW5kb3cubmFtZSA6ICcnfSAvPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKHBlcnNvbik7XG5cbiAgICAvLyB2YXIgTmF2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBMb2dpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBjb250YWluZXIgPSA8Q29udGFpbmVyPnshd2luZG93LmlzTG9nZ2VkSW4gPyA8TmF2IC8+IDogPExvZ2luIC8+fTwvQ29udGFpbmVyPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAvLyB2YXIgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgLy8gICAgICAgICA8aDI+XG4gICAgLy8gICAgICAgICAgIHt0aGlzLnByb3BzLmF1dGhvcn1cbiAgICAvLyAgICAgICAgIDwvaDI+XG4gICAgLy8gICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXV0aG9yICsgJ1xcJ3MgY29tbWVudCBtb3VudGVkJylcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIC8vIHZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBjb21tZW50cyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24oY29tbWVudCkge1xuICAgIC8vICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICA8Q29tbWVudCBhdXRob3I9e2NvbW1lbnQuYXV0aG9yfSBrZXk9e2NvbW1lbnQuaWR9PlxuICAgIC8vICAgICAgICAgICB7Y29tbWVudC50ZXh0fVxuICAgIC8vICAgICAgICAgPC9Db21tZW50PlxuICAgIC8vICAgICAgICk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgIC8vICAgICAgICAge2NvbW1lbnRzfVxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1RoZSBjb21tZW50IGxpc3QgY29tcG9uZW50IG1vdW50ZWQnKVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIENvbW1lbnRCb3ggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgZGF0YSA9IFtcbiAgICAvLyAgICAgICAgICAge2lkOiAxLCBhdXRob3I6IFwiUGV0ZSBIdW50XCIsIHRleHQ6IFwiVGhpcyBpcyBvbmUgY29tbWVudC5cIn0sXG4gICAgLy8gICAgICAgICAgIHtpZDogMiwgYXV0aG9yOiBcIkpvZSBXaW5uZXJcIiwgdGV4dDogXCJUaGlzIGlzICphbm90aGVyKiBjb21tZW50Li4uXCJ9LFxuICAgIC8vICAgICAgICAgICB7aWQ6IDMsIGF1dGhvcjogXCJKb3JkYW4gV2Fsa2VyXCIsIHRleHQ6IFwiVGhpcyBpcyAqKnlldCBhbm90aGVyKiogY29tbWVudCFcIn1cbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgLy8gICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAvLyAgICAgICAgIH07XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudExpc3RcIj5cbiAgICAvLyAgICAgICAgIDxDb21tZW50TGlzdCBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGUgY29tbWVudCBib3ggY29tcG9uZW50IG1vdW50ZWQnKVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIGNvbW1lbnRCb3ggPSA8Q29tbWVudEJveCAvPjtcbiAgICAvL1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihjb21tZW50Qm94LCBib2R5RE9NRWxlbWVudCk7XG5cbiAgICB2YXIgU3RhdGVmdWxEaXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaW5pdGlhbFN0YXRlID0gXCJIZWxsbyB3b3JsZC4uLlwiO1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhlIHN0YXRlZnVsIGRpdiBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzdGF0ZWZ1bERpdiA9IDxTdGF0ZWZ1bERpdiBtZXNzYWdlPVwiQW5vdGhlciBtZXNzYWdlLi4uXCIvPjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihzdGF0ZWZ1bERpdiwgYm9keURPTUVsZW1lbnQpO1xuXG4gICAgc3RhdGVmdWxEaXYuc2V0U3RhdGUoJ0hlbGxvIHdvcmxkIGFnYWluIScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIl19
