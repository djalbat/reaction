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

    getInitialState: function getInitialState() {
      var title = "Some title",
          initialState = {
        title: title
      };

      return initialState;
    },
    render: function render() {
      return React.createElement(
        'div',
        { className: 'commentList' },
        React.createElement(
          'h2',
          null,
          this.state.title
        ),
        React.createElement(
          'p',
          null,
          this.props.message
        )
      );
    }
  });

  var CommentBox = React.createClass({
    displayName: 'CommentBox',

    getInitialState: function getInitialState() {
      var message = "Hello, world!!!",
          initialState = {
        message: message
      };

      return initialState;
    },
    render: function render() {
      return React.createElement(
        'div',
        { className: 'commentBox' },
        React.createElement(CommentList, { message: this.state.message })
      );
    }
  });

  var commentBox = React.createElement(CommentBox, null);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRlEsTUEwRlIsY0FBYyxNQUFNLFdBQU4sQ0FBa0I7OztBQUNsQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxRQUFRLFlBQVI7VUFDQSxlQUFlO0FBQ2IsZUFBTyxLQUFQO09BREYsQ0FGc0I7O0FBTTFCLGFBQU8sWUFBUCxDQU4wQjtLQUFYO0FBUWpCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLGFBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxLQUFYO1NBRkw7UUFJRTs7O1VBQ0csS0FBSyxLQUFMLENBQVcsT0FBWDtTQUxMO09BRkYsQ0FEaUI7S0FBWDtHQVRRLENBQWQsQ0ExRlE7O0FBa0haLE1BQUksYUFBYSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNqQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxVQUFVLGlCQUFWO1VBQ0EsZUFBZTtBQUNiLGlCQUFTLE9BQVQ7T0FERixDQUZzQjs7QUFNMUIsYUFBTyxZQUFQLENBTjBCO0tBQVg7QUFRakIsWUFBUSxrQkFBVztBQUNqQixhQUVFOztVQUFLLFdBQVUsWUFBVixFQUFMO1FBQ0Usb0JBQUMsV0FBRCxJQUFhLFNBQVMsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUF0QixDQURGO09BRkYsQ0FEaUI7S0FBWDtHQVRPLENBQWIsQ0FsSFE7O0FBcUlaLE1BQUksYUFBYSxvQkFBQyxVQUFELE9BQWIsQ0FySVE7O0FBdUlaLFdBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixjQUE1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2SVksQ0FBZDs7QUFnTEYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdmFyIGJvZHlET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgIC8vIHZhciBQcm9maWxlLFxuICAgIC8vICAgICBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIG5hdiA9IDxOYXYgY29sb3I9XCJibHVlXCI+PFByb2ZpbGU+Y2xpY2s8L1Byb2ZpbGU+PC9OYXY+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQobmF2KTtcblxuICAgIC8vIHZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLlJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5MYWJlbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5JbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyB2YXIgZm9ybSA9IChcbiAgICAvL1xuICAgIC8vICAgICA8Rm9ybT5cbiAgICAvLyAgICAgICB7LyogSXQncyBva2F5IHRvIHB1dCBjb21tZW50cyBpbiBoZXJlIGFzIGxvbmcgYXMgeW91IGVuY2xvc2UgdGhlbSBpbiBjdXJseSBicmFjZXMuICovfVxuICAgIC8vICAgICAgIDxGb3JtLlJvdyAvKiBDb21tZW50cyBpbiBoZXJlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG9uIHRoZSBvdGhlciBoYW5kXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGFyZSBmaW5lIHdpdGhvdXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgY3VybHkgYnJhY2VzLiAqLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLkxhYmVsIC8+XG4gICAgLy8gICAgICAgICA8Rm9ybS5JbnB1dCAvPlxuICAgIC8vICAgICAgIDwvRm9ybS5Sb3c+XG4gICAgLy8gICAgIDwvRm9ybT5cbiAgICAvLyApO1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoZm9ybSk7XG5cbiAgICAvLyB2YXIgSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGZpcnN0RGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQgLz4sXG4gICAgLy8gICAgIHNlY29uZERpc2FibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXt0cnVlfSAvPixcbiAgICAvLyAgICAgZmlyc3RFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIC8+LFxuICAgIC8vICAgICBzZWNvbmRFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtmYWxzZX0gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmaXJzdERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RW5hYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChzZWNvbmRFbmFibGVkSW5wdXQpO1xuXG4gICAgLy8gdmFyIFBlcnNvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgcGVyc29uID0gPFBlcnNvbiBuYW1lPXt3aW5kb3cuaXNMb2dnZWRJbiA/IHdpbmRvdy5uYW1lIDogJyd9IC8+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQocGVyc29uKTtcblxuICAgIC8vIHZhciBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGNvbnRhaW5lciA9IDxDb250YWluZXI+eyF3aW5kb3cuaXNMb2dnZWRJbiA/IDxOYXYgLz4gOiA8TG9naW4gLz59PC9Db250YWluZXI+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgIC8vIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAvLyAgICAgICAgIDxoMj5cbiAgICAvLyAgICAgICAgICAge3RoaXMucHJvcHMuYXV0aG9yfVxuICAgIC8vICAgICAgICAgPC9oMj5cbiAgICAvLyAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hdXRob3IgKyAnXFwncyBjb21tZW50IG1vdW50ZWQnKVxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG4gICAgLy8gICAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICAgIDxDb21tZW50IGF1dGhvcj17Y29tbWVudC5hdXRob3J9IGtleT17Y29tbWVudC5pZH0+XG4gICAgLy8gICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgLy8gICAgICAgICA8L0NvbW1lbnQ+XG4gICAgLy8gICAgICAgKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIChcbiAgICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgLy8gICAgICAgICB7Y29tbWVudHN9XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9LFxuICAgIC8vICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnVGhlIGNvbW1lbnQgbGlzdCBjb21wb25lbnQgbW91bnRlZCcpXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICB2YXIgQ29tbWVudExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSBcIlNvbWUgdGl0bGVcIixcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudExpc3RcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29tbWVudEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJIZWxsbywgd29ybGQhISFcIixcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRCb3hcIj5cbiAgICAgICAgICAgIDxDb21tZW50TGlzdCBtZXNzYWdlPXt0aGlzLnN0YXRlLm1lc3NhZ2V9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50Qm94ID0gPENvbW1lbnRCb3ggLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudEJveCwgYm9keURPTUVsZW1lbnQpO1xuXG4gICAgLy8gdmFyIFN0YXRlZnVsRGl2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgdmFyIHRpdGxlID0gXCJIZWxsbyB3b3JsZC4uLlwiLFxuICAgIC8vICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgIC8vICAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAvLyAgICAgICAgIH07XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxkaXY+XG4gICAgLy8gICAgICAgICA8aDI+XG4gICAgLy8gICAgICAgICAgIHt0aGlzLnN0YXRlLnRpdGxlfVxuICAgIC8vICAgICAgICAgPC9oMj5cbiAgICAvLyAgICAgICAgIDxwPlxuICAgIC8vICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgIC8vICAgICAgICAgPC9wPlxuICAgIC8vICAgICAgIDwvZGl2PlxuICAgIC8vICAgICApO1xuICAgIC8vICAgfSxcbiAgICAvLyAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3RoZSBzdGF0ZWZ1bCBkaXYgbW91bnRlZCcpXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyB2YXIgc3RhdGVmdWxEaXYgPSA8U3RhdGVmdWxEaXYgbWVzc2FnZT1cIkFub3RoZXIgbWVzc2FnZS4uLlwiLz47XG4gICAgLy9cbiAgICAvLyBSZWFjdERPTS5yZW5kZXIoc3RhdGVmdWxEaXYsIGJvZHlET01FbGVtZW50KTtcbiAgICAvL1xuICAgIC8vIHZhciB0aXRsZSA9IFwiSGVsbG8gd29ybGQgYWdhaW4hXCIsXG4gICAgLy8gICAgIHN0YXRlID0ge1xuICAgIC8vICAgICAgIHRpdGxlOiB0aXRsZVxuICAgIC8vICAgICB9O1xuICAgIC8vXG4gICAgLy8gc3RhdGVmdWxEaXYuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG4iXX0=
