'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var App = function App() {
  _classCallCheck(this, App);

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

  var Comment = React.createClass({
    displayName: 'Comment',

    render: function render() {
      return React.createElement(
        'div',
        { className: 'comment' },
        React.createElement(
          'h2',
          null,
          this.props.author
        ),
        this.props.children
      );
    },
    componentDidMount: function componentDidMount() {
      console.log(this.props.author + '\'s comment mounted');
    }
  });

  var CommentList = React.createClass({
    displayName: 'CommentList',

    render: function render() {
      var comments = this.props.data.map(function (comment) {
        return React.createElement(
          Comment,
          { author: comment.author, key: comment.id },
          comment.text
        );
      });

      return React.createElement(
        'div',
        { className: 'commentList' },
        comments
      );
    },
    componentDidMount: function componentDidMount() {
      console.log('The comment list component mounted');
    }
  });

  var CommentBox = React.createClass({
    displayName: 'CommentBox',

    getInitialState: function getInitialState() {
      var data = [{ id: 1, author: "Pete Hunt", text: "This is one comment." }, { id: 2, author: "Joe Winner", text: "This is *another* comment..." }, { id: 3, author: "Jordan Walker", text: "This is **yet another** comment!" }],
          initialState = {
        data: data
      };

      return initialState;
    },
    render: function render() {
      return React.createElement(
        'div',
        { className: 'commentList' },
        React.createElement(CommentList, { data: this.state.data })
      );
    },
    componentDidMount: function componentDidMount() {
      console.log('The comment box component mounted');
    }
  });

  var commentBox = React.createElement(CommentBox, null);

  ReactDOM.render(commentBox, document.getElementsByTagName('body')[0]);

  setTimeout(function () {
    var data = [{ id: 4, author: "Billy Wright", text: "This is the last comment for now..." }],
        state = {
      data: data
    };

    commentBox.setState(state);
  }, 1000); ///
};

module.exports = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0RaLE1BQUksVUFBVSxNQUFNLFdBQU4sQ0FBa0I7OztBQUM5QixZQUFRLGtCQUFXO0FBQ2pCLGFBQ0U7O1VBQUssV0FBVSxTQUFWLEVBQUw7UUFDRTs7O1VBQ0csS0FBSyxLQUFMLENBQVcsTUFBWDtTQUZMO1FBSUcsS0FBSyxLQUFMLENBQVcsUUFBWDtPQUxMLENBRGlCO0tBQVg7QUFVUix1QkFBbUIsNkJBQVc7QUFDNUIsY0FBUSxHQUFSLENBQVksS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixxQkFBcEIsQ0FBWixDQUQ0QjtLQUFYO0dBWFAsQ0FBVixDQWxEUTs7QUFrRVosTUFBSSxjQUFjLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2xDLFlBQVEsa0JBQVc7QUFDakIsVUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBUyxPQUFULEVBQWtCO0FBQ25ELGVBQ0U7QUFBQyxpQkFBRDtZQUFTLFFBQVEsUUFBUSxNQUFSLEVBQWdCLEtBQUssUUFBUSxFQUFSLEVBQXRDO1VBQ0csUUFBUSxJQUFSO1NBRkwsQ0FEbUQ7T0FBbEIsQ0FBL0IsQ0FEYTs7QUFTakIsYUFDRTs7VUFBSyxXQUFVLGFBQVYsRUFBTDtRQUNHLFFBREg7T0FERixDQVRpQjtLQUFYO0FBZVIsdUJBQW1CLDZCQUFXO0FBQzVCLGNBQVEsR0FBUixDQUFZLG9DQUFaLEVBRDRCO0tBQVg7R0FoQkgsQ0FBZCxDQWxFUTs7QUF1RlosTUFBSSxhQUFhLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2pDLHFCQUFpQiwyQkFBVztBQUMxQixVQUFJLE9BQU8sQ0FDTCxFQUFDLElBQUksQ0FBSixFQUFPLFFBQVEsV0FBUixFQUFxQixNQUFNLHNCQUFOLEVBRHhCLEVBRUwsRUFBQyxJQUFJLENBQUosRUFBTyxRQUFRLFlBQVIsRUFBc0IsTUFBTSw4QkFBTixFQUZ6QixFQUdMLEVBQUMsSUFBSSxDQUFKLEVBQU8sUUFBUSxlQUFSLEVBQXlCLE1BQU0sa0NBQU4sRUFINUIsQ0FBUDtVQUtBLGVBQWU7QUFDYixjQUFNLElBQU47T0FERixDQU5zQjs7QUFVMUIsYUFBTyxZQUFQLENBVjBCO0tBQVg7QUFZakIsWUFBUSxrQkFBVztBQUNqQixhQUNFOztVQUFLLFdBQVUsYUFBVixFQUFMO1FBQ0Usb0JBQUMsV0FBRCxJQUFhLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFuQixDQURGO09BREYsQ0FEaUI7S0FBWDtBQU9SLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSxtQ0FBWixFQUQ0QjtLQUFYO0dBcEJKLENBQWIsQ0F2RlE7O0FBZ0haLE1BQUksYUFBYSxvQkFBQyxVQUFELE9BQWIsQ0FoSFE7O0FBa0haLFdBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTVCLEVBbEhZOztBQW9IWixhQUFXLFlBQVc7QUFDcEIsUUFBSSxPQUFPLENBQ0wsRUFBQyxJQUFHLENBQUgsRUFBTSxRQUFRLGNBQVIsRUFBd0IsTUFBTSxxQ0FBTixFQUQxQixDQUFQO1FBR0EsUUFBUTtBQUNOLFlBQU0sSUFBTjtLQURGLENBSmdCOztBQVFwQixlQUFXLFFBQVgsQ0FBb0IsS0FBcEIsRUFSb0I7R0FBWCxFQVNSLElBVEg7QUFwSFksQ0FBZDs7QUFpSUYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHZhciBQcm9maWxlLFxuICAgIC8vICAgICBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIG5hdiA9IDxOYXYgY29sb3I9XCJibHVlXCI+PFByb2ZpbGU+Y2xpY2s8L1Byb2ZpbGU+PC9OYXY+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQobmF2KTtcblxuICAgIC8vIHZhciBGb3JtID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLlJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5MYWJlbCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyAgICAgRm9ybS5JbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KTtcbiAgICAvLyB2YXIgZm9ybSA9IChcbiAgICAvL1xuICAgIC8vICAgICA8Rm9ybT5cbiAgICAvLyAgICAgICB7LyogSXQncyBva2F5IHRvIHB1dCBjb21tZW50cyBpbiBoZXJlIGFzIGxvbmcgYXMgeW91IGVuY2xvc2UgdGhlbSBpbiBjdXJseSBicmFjZXMuICovfVxuICAgIC8vICAgICAgIDxGb3JtLlJvdyAvKiBDb21tZW50cyBpbiBoZXJlXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIG9uIHRoZSBvdGhlciBoYW5kXG4gICAgLy8gICAgICAgICAgICAgICAgICAgIGFyZSBmaW5lIHdpdGhvdXRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgY3VybHkgYnJhY2VzLiAqLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLkxhYmVsIC8+XG4gICAgLy8gICAgICAgICA8Rm9ybS5JbnB1dCAvPlxuICAgIC8vICAgICAgIDwvRm9ybS5Sb3c+XG4gICAgLy8gICAgIDwvRm9ybT5cbiAgICAvLyApO1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoZm9ybSk7XG5cbiAgICAvLyB2YXIgSW5wdXQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGZpcnN0RGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQgLz4sXG4gICAgLy8gICAgIHNlY29uZERpc2FibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXt0cnVlfSAvPixcbiAgICAvLyAgICAgZmlyc3RFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIC8+LFxuICAgIC8vICAgICBzZWNvbmRFbmFibGVkSW5wdXQgPSA8SW5wdXQgdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkPXtmYWxzZX0gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmaXJzdERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZERpc2FibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RW5hYmxlZElucHV0KTtcbiAgICAvLyBib2R5LmFwcGVuZChzZWNvbmRFbmFibGVkSW5wdXQpO1xuXG4gICAgLy8gdmFyIFBlcnNvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgcGVyc29uID0gPFBlcnNvbiBuYW1lPXt3aW5kb3cuaXNMb2dnZWRJbiA/IHdpbmRvdy5uYW1lIDogJyd9IC8+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQocGVyc29uKTtcblxuICAgIC8vIHZhciBOYXYgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIExvZ2luID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIGNvbnRhaW5lciA9IDxDb250YWluZXI+eyF3aW5kb3cuaXNMb2dnZWRJbiA/IDxOYXYgLz4gOiA8TG9naW4gLz59PC9Db250YWluZXI+O1xuICAgIC8vXG4gICAgLy8gYm9keS5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuYXV0aG9yfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hdXRob3IgKyAnXFwncyBjb21tZW50IG1vdW50ZWQnKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbihjb21tZW50KSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDb21tZW50IGF1dGhvcj17Y29tbWVudC5hdXRob3J9IGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgICAgIHtjb21tZW50LnRleHR9XG4gICAgICAgICAgICA8L0NvbW1lbnQ+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGNvbW1lbnQgbGlzdCBjb21wb25lbnQgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29tbWVudEJveCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkYXRhID0gW1xuICAgICAgICAgICAgICB7aWQ6IDEsIGF1dGhvcjogXCJQZXRlIEh1bnRcIiwgdGV4dDogXCJUaGlzIGlzIG9uZSBjb21tZW50LlwifSxcbiAgICAgICAgICAgICAge2lkOiAyLCBhdXRob3I6IFwiSm9lIFdpbm5lclwiLCB0ZXh0OiBcIlRoaXMgaXMgKmFub3RoZXIqIGNvbW1lbnQuLi5cIn0sXG4gICAgICAgICAgICAgIHtpZDogMywgYXV0aG9yOiBcIkpvcmRhbiBXYWxrZXJcIiwgdGV4dDogXCJUaGlzIGlzICoqeWV0IGFub3RoZXIqKiBjb21tZW50IVwifVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50TGlzdFwiPlxuICAgICAgICAgICAgPENvbW1lbnRMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBjb21tZW50IGJveCBjb21wb25lbnQgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY29tbWVudEJveCA9IDxDb21tZW50Qm94IC8+O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRCb3gsIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pO1xuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZGF0YSA9IFtcbiAgICAgICAgICAgIHtpZDo0LCBhdXRob3I6IFwiQmlsbHkgV3JpZ2h0XCIsIHRleHQ6IFwiVGhpcyBpcyB0aGUgbGFzdCBjb21tZW50IGZvciBub3cuLi5cIn1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbW1lbnRCb3guc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIDEwMDApOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiJdfQ==
