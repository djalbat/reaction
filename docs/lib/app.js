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

  var message = "Hello world again...",
      state = {
    message: message
  };

  commentBox.setState(state);

  // var StatefulDiv = React.createClass({
  //   getInitialState: function() {
  //     var initialState = "Initial state...";
  //
  //     return initialState;
  //   },
  //   render: function() {
  //     return (
  //       <div>
  //         {this.state}
  //       </div>
  //     );
  //   }
  // });
  //
  // var statefulDiv = <StatefulDiv />;
  //
  // ReactDOM.render(statefulDiv, bodyDOMElement);
  //
  // var state = "...set state.";
  //
  // statefulDiv.setState(state);
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRlEsTUEwRlIsY0FBYyxNQUFNLFdBQU4sQ0FBa0I7OztBQUNsQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxRQUFRLFlBQVI7VUFDQSxlQUFlO0FBQ2IsZUFBTyxLQUFQO09BREYsQ0FGc0I7O0FBTTFCLGFBQU8sWUFBUCxDQU4wQjtLQUFYO0FBUWpCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLGFBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxLQUFYO1NBRkw7UUFJRTs7O1VBQ0csS0FBSyxLQUFMLENBQVcsT0FBWDtTQUxMO09BRkYsQ0FEaUI7S0FBWDtHQVRRLENBQWQsQ0ExRlE7O0FBa0haLE1BQUksYUFBYSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNqQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxVQUFVLGlCQUFWO1VBQ0EsZUFBZTtBQUNiLGlCQUFTLE9BQVQ7T0FERixDQUZzQjs7QUFNMUIsYUFBTyxZQUFQLENBTjBCO0tBQVg7QUFRakIsWUFBUSxrQkFBVztBQUNqQixhQUVFOztVQUFLLFdBQVUsWUFBVixFQUFMO1FBQ0Usb0JBQUMsV0FBRCxJQUFhLFNBQVMsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUF0QixDQURGO09BRkYsQ0FEaUI7S0FBWDtHQVRPLENBQWIsQ0FsSFE7O0FBcUlaLE1BQUksYUFBYSxvQkFBQyxVQUFELE9BQWIsQ0FySVE7O0FBdUlaLFdBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixjQUE1QixFQXZJWTs7QUF5SVosTUFBSSxVQUFVLHNCQUFWO01BQ0EsUUFBUTtBQUNOLGFBQVMsT0FBVDtHQURGLENBMUlROztBQThJWixhQUFXLFFBQVgsQ0FBb0IsS0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTlJWSxDQUFkOztBQXlLRixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB2YXIgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgLy8gdmFyIFByb2ZpbGUsXG4gICAgLy8gICAgIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgbmF2ID0gPE5hdiBjb2xvcj1cImJsdWVcIj48UHJvZmlsZT5jbGljazwvUHJvZmlsZT48L05hdj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChuYXYpO1xuXG4gICAgLy8gdmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLkxhYmVsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLklucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vIHZhciBmb3JtID0gKFxuICAgIC8vXG4gICAgLy8gICAgIDxGb3JtPlxuICAgIC8vICAgICAgIHsvKiBJdCdzIG9rYXkgdG8gcHV0IGNvbW1lbnRzIGluIGhlcmUgYXMgbG9uZyBhcyB5b3UgZW5jbG9zZSB0aGVtIGluIGN1cmx5IGJyYWNlcy4gKi99XG4gICAgLy8gICAgICAgPEZvcm0uUm93IC8qIENvbW1lbnRzIGluIGhlcmVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgb24gdGhlIG90aGVyIGhhbmRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgYXJlIGZpbmUgd2l0aG91dFxuICAgIC8vICAgICAgICAgICAgICAgICAgICBjdXJseSBicmFjZXMuICovPlxuICAgIC8vICAgICAgICAgPEZvcm0uTGFiZWwgLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLklucHV0IC8+XG4gICAgLy8gICAgICAgPC9Gb3JtLlJvdz5cbiAgICAvLyAgICAgPC9Gb3JtPlxuICAgIC8vICk7XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmb3JtKTtcblxuICAgIC8vIHZhciBJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgZmlyc3REaXNhYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZCAvPixcbiAgICAvLyAgICAgc2Vjb25kRGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3RydWV9IC8+LFxuICAgIC8vICAgICBmaXJzdEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgLz4sXG4gICAgLy8gICAgIHNlY29uZEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoc2Vjb25kRGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoZmlyc3RFbmFibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZEVuYWJsZWRJbnB1dCk7XG5cbiAgICAvLyB2YXIgUGVyc29uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBwZXJzb24gPSA8UGVyc29uIG5hbWU9e3dpbmRvdy5pc0xvZ2dlZEluID8gd2luZG93Lm5hbWUgOiAnJ30gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChwZXJzb24pO1xuXG4gICAgLy8gdmFyIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgY29udGFpbmVyID0gPENvbnRhaW5lcj57IXdpbmRvdy5pc0xvZ2dlZEluID8gPE5hdiAvPiA6IDxMb2dpbiAvPn08L0NvbnRhaW5lcj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgLy8gdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgIC8vICAgICAgICAgPGgyPlxuICAgIC8vICAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRob3J9XG4gICAgLy8gICAgICAgICA8L2gyPlxuICAgIC8vICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgLy8gICAgICAgPC9kaXY+XG4gICAgLy8gICAgICk7XG4gICAgLy8gICB9LFxuICAgIC8vICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmF1dGhvciArICdcXCdzIGNvbW1lbnQgbW91bnRlZCcpXG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cbiAgICAvLyB2YXIgQ29tbWVudExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgY29tbWVudHMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICAvLyAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgPENvbW1lbnQgYXV0aG9yPXtjb21tZW50LmF1dGhvcn0ga2V5PXtjb21tZW50LmlkfT5cbiAgICAvLyAgICAgICAgICAge2NvbW1lbnQudGV4dH1cbiAgICAvLyAgICAgICAgIDwvQ29tbWVudD5cbiAgICAvLyAgICAgICApO1xuICAgIC8vICAgICB9KTtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudExpc3RcIj5cbiAgICAvLyAgICAgICAgIHtjb21tZW50c31cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGUgY29tbWVudCBsaXN0IGNvbXBvbmVudCBtb3VudGVkJylcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcblxuICAgIHZhciBDb21tZW50TGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IFwiU29tZSB0aXRsZVwiLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgICB0aXRsZTogdGl0bGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50Qm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIkhlbGxvLCB3b3JsZCEhIVwiLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudEJveFwiPlxuICAgICAgICAgICAgPENvbW1lbnRMaXN0IG1lc3NhZ2U9e3RoaXMuc3RhdGUubWVzc2FnZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNvbW1lbnRCb3ggPSA8Q29tbWVudEJveCAvPjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb21tZW50Qm94LCBib2R5RE9NRWxlbWVudCk7XG5cbiAgICB2YXIgbWVzc2FnZSA9IFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIixcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxuICAgICAgICB9O1xuXG4gICAgY29tbWVudEJveC5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICAvLyB2YXIgU3RhdGVmdWxEaXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgLy8gICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICB2YXIgaW5pdGlhbFN0YXRlID0gXCJJbml0aWFsIHN0YXRlLi4uXCI7XG4gICAgLy9cbiAgICAvLyAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAvLyAgIH0sXG4gICAgLy8gICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgIDxkaXY+XG4gICAgLy8gICAgICAgICB7dGhpcy5zdGF0ZX1cbiAgICAvLyAgICAgICA8L2Rpdj5cbiAgICAvLyAgICAgKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIHZhciBzdGF0ZWZ1bERpdiA9IDxTdGF0ZWZ1bERpdiAvPjtcbiAgICAvL1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihzdGF0ZWZ1bERpdiwgYm9keURPTUVsZW1lbnQpO1xuICAgIC8vXG4gICAgLy8gdmFyIHN0YXRlID0gXCIuLi5zZXQgc3RhdGUuXCI7XG4gICAgLy9cbiAgICAvLyBzdGF0ZWZ1bERpdi5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cbiJdfQ==
