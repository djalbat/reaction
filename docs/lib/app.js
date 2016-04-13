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
        'div',
        null,
        React.createElement(
          'h2',
          null,
          this.props.message
        ),
        React.createElement(
          'p',
          null,
          this.state
        )
      );
    },
    componentDidMount: function componentDidMount() {
      console.log('the stateful div mounted');
    }
  });

  var statefulDiv = React.createElement(StatefulDiv, { message: 'Another message...' });

  ReactDOM.render(statefulDiv, bodyDOMElement);

  statefulDiv.setState('Hello world, again!');
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGUSxNQXVIUixjQUFjLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2xDLHFCQUFpQiwyQkFBVztBQUMxQixVQUFJLGVBQWUsZ0JBQWYsQ0FEc0I7O0FBRzFCLGFBQU8sWUFBUCxDQUgwQjtLQUFYO0FBS2pCLFlBQVEsa0JBQVc7QUFDakIsYUFDRTs7O1FBQ0U7OztVQUNHLEtBQUssS0FBTCxDQUFXLE9BQVg7U0FGTDtRQUlFOzs7VUFDRyxLQUFLLEtBQUw7U0FMTDtPQURGLENBRGlCO0tBQVg7QUFZUix1QkFBbUIsNkJBQVc7QUFDNUIsY0FBUSxHQUFSLENBQVksMEJBQVosRUFENEI7S0FBWDtHQWxCSCxDQUFkLENBdkhROztBQThJWixNQUFJLGNBQWMsb0JBQUMsV0FBRCxJQUFhLFNBQVEsb0JBQVIsRUFBYixDQUFkLENBOUlROztBQWdKWixXQUFTLE1BQVQsQ0FBZ0IsV0FBaEIsRUFBNkIsY0FBN0IsRUFoSlk7O0FBa0paLGNBQVksUUFBWixDQUFxQixxQkFBckIsRUFsSlk7Q0FBZDs7QUFzSkYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdmFyIGJvZHlET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgIC8vIHZhciBQcm9maWxlLFxuICAgIC8vICAgICBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIG5hdiA9IDxOYXYgY29sb3I9XCJibHVlXCI+PFByb2ZpbGU+Y2xpY2s8L1Byb2ZpbGU+PC9OYXY+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQobmF2KTtcblxuICAgIC8vIHZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLlJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5MYWJlbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5JbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyB2YXIgZm9ybSA9IChcbiAgICAvL1xuICAgIC8vICAgICA8Rm9ybT5cbiAgICAvLyAgICAgICB7LyogSXQncyBva2F5IHRvIHB1dCBjb21tZW50cyBpbiBoZXJlIGFzIGxvbmcgYXMgeW91IGVuY2xvc2UgdGhlbSBpbiBjdXJseSBicmFjZXMuICovfVxuICAgIC8vICAgICAgIDxGb3JtLlJvdyAvKiBDb21tZW50cyBpbiBoZXJlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG9uIHRoZSBvdGhlciBoYW5kXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGFyZSBmaW5lIHdpdGhvdXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgY3VybHkgYnJhY2VzLiAqLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLkxhYmVsIC8+XG4gICAgLy8gICAgICAgICA8Rm9ybS5JbnB1dCAvPlxuICAgIC8vICAgICAgIDwvRm9ybS5Sb3c+XG4gICAgLy8gICAgIDwvRm9ybT5cbiAgICAvLyApO1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoZm9ybSk7XG5cbiAgICAvLyB2YXIgSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGZpcnN0RGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQgLz4sXG4gICAgLy8gICAgIHNlY29uZERpc2FibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXt0cnVlfSAvPixcbiAgICAvLyAgICAgZmlyc3RFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIC8+LFxuICAgIC8vICAgICBzZWNvbmRFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtmYWxzZX0gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmaXJzdERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RW5hYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChzZWNvbmRFbmFibGVkSW5wdXQpO1xuXG4gICAgLy8gdmFyIFBlcnNvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgcGVyc29uID0gPFBlcnNvbiBuYW1lPXt3aW5kb3cuaXNMb2dnZWRJbiA/IHdpbmRvdy5uYW1lIDogJyd9IC8+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQocGVyc29uKTtcblxuICAgIC8vIHZhciBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGNvbnRhaW5lciA9IDxDb250YWluZXI+eyF3aW5kb3cuaXNMb2dnZWRJbiA/IDxOYXYgLz4gOiA8TG9naW4gLz59PC9Db250YWluZXI+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgIC8vIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAvLyAgICAgICAgIDxoMj5cbiAgICAvLyAgICAgICAgICAge3RoaXMucHJvcHMuYXV0aG9yfVxuICAgIC8vICAgICAgICAgPC9oMj5cbiAgICAvLyAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hdXRob3IgKyAnXFwncyBjb21tZW50IG1vdW50ZWQnKVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG4gICAgLy8gICAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICAgIDxDb21tZW50IGF1dGhvcj17Y29tbWVudC5hdXRob3J9IGtleT17Y29tbWVudC5pZH0+XG4gICAgLy8gICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgLy8gICAgICAgICA8L0NvbW1lbnQ+XG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgLy8gICAgICAgICB7Y29tbWVudHN9XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9LFxuICAgIC8vICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnVGhlIGNvbW1lbnQgbGlzdCBjb21wb25lbnQgbW91bnRlZCcpXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyB2YXIgQ29tbWVudEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHZhciBkYXRhID0gW1xuICAgIC8vICAgICAgICAgICB7aWQ6IDEsIGF1dGhvcjogXCJQZXRlIEh1bnRcIiwgdGV4dDogXCJUaGlzIGlzIG9uZSBjb21tZW50LlwifSxcbiAgICAvLyAgICAgICAgICAge2lkOiAyLCBhdXRob3I6IFwiSm9lIFdpbm5lclwiLCB0ZXh0OiBcIlRoaXMgaXMgKmFub3RoZXIqIGNvbW1lbnQuLi5cIn0sXG4gICAgLy8gICAgICAgICAgIHtpZDogMywgYXV0aG9yOiBcIkpvcmRhbiBXYWxrZXJcIiwgdGV4dDogXCJUaGlzIGlzICoqeWV0IGFub3RoZXIqKiBjb21tZW50IVwifVxuICAgIC8vICAgICAgICAgXSxcbiAgICAvLyAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAvLyAgICAgICAgICAgZGF0YTogZGF0YVxuICAgIC8vICAgICAgICAgfTtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgIC8vICAgICAgICAgPENvbW1lbnRMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1RoZSBjb21tZW50IGJveCBjb21wb25lbnQgbW91bnRlZCcpXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyB2YXIgY29tbWVudEJveCA9IDxDb21tZW50Qm94IC8+O1xuICAgIC8vXG4gICAgLy8gUmVhY3RET00ucmVuZGVyKGNvbW1lbnRCb3gsIGJvZHlET01FbGVtZW50KTtcblxuICAgIHZhciBTdGF0ZWZ1bERpdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpbml0aWFsU3RhdGUgPSBcIkhlbGxvIHdvcmxkLi4uXCI7XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoZSBzdGF0ZWZ1bCBkaXYgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgc3RhdGVmdWxEaXYgPSA8U3RhdGVmdWxEaXYgbWVzc2FnZT1cIkFub3RoZXIgbWVzc2FnZS4uLlwiLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoc3RhdGVmdWxEaXYsIGJvZHlET01FbGVtZW50KTtcblxuICAgIHN0YXRlZnVsRGl2LnNldFN0YXRlKCdIZWxsbyB3b3JsZCwgYWdhaW4hJyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iXX0=
