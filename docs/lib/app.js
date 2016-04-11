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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURaLE1BQUksVUFBVSxNQUFNLFdBQU4sQ0FBa0I7OztBQUM5QixZQUFRLGtCQUFXO0FBQ2pCLGFBQ0U7O1VBQUssV0FBVSxTQUFWLEVBQUw7UUFDRTs7O1VBQ0csS0FBSyxLQUFMLENBQVcsTUFBWDtTQUZMO1FBSUcsS0FBSyxLQUFMLENBQVcsUUFBWDtPQUxMLENBRGlCO0tBQVg7QUFVUix1QkFBbUIsNkJBQVc7QUFDNUIsY0FBUSxHQUFSLENBQVksS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFvQixxQkFBcEIsQ0FBWixDQUQ0QjtLQUFYO0dBWFAsQ0FBVixDQW5EUTs7QUFtRVosTUFBSSxjQUFjLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2xDLFlBQVEsa0JBQVc7QUFDakIsVUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBUyxPQUFULEVBQWtCO0FBQ25ELGVBQ0U7QUFBQyxpQkFBRDtZQUFTLFFBQVEsUUFBUSxNQUFSLEVBQWdCLEtBQUssUUFBUSxFQUFSLEVBQXRDO1VBQ0csUUFBUSxJQUFSO1NBRkwsQ0FEbUQ7T0FBbEIsQ0FBL0IsQ0FEYTs7QUFTakIsYUFDRTs7VUFBSyxXQUFVLGFBQVYsRUFBTDtRQUNHLFFBREg7T0FERixDQVRpQjtLQUFYO0FBZVIsdUJBQW1CLDZCQUFXO0FBQzVCLGNBQVEsR0FBUixDQUFZLG9DQUFaLEVBRDRCO0tBQVg7R0FoQkgsQ0FBZCxDQW5FUTs7QUF3RlosTUFBSSxhQUFhLE1BQU0sV0FBTixDQUFrQjs7O0FBQ2pDLHFCQUFpQiwyQkFBVztBQUMxQixVQUFJLE9BQU8sQ0FDTCxFQUFDLElBQUksQ0FBSixFQUFPLFFBQVEsV0FBUixFQUFxQixNQUFNLHNCQUFOLEVBRHhCLEVBRUwsRUFBQyxJQUFJLENBQUosRUFBTyxRQUFRLFlBQVIsRUFBc0IsTUFBTSw4QkFBTixFQUZ6QixFQUdMLEVBQUMsSUFBSSxDQUFKLEVBQU8sUUFBUSxlQUFSLEVBQXlCLE1BQU0sa0NBQU4sRUFINUIsQ0FBUDtVQUtBLGVBQWU7QUFDYixjQUFNLElBQU47T0FERixDQU5zQjs7QUFVMUIsYUFBTyxZQUFQLENBVjBCO0tBQVg7QUFZakIsWUFBUSxrQkFBVztBQUNqQixhQUNFOztVQUFLLFdBQVUsYUFBVixFQUFMO1FBQ0Usb0JBQUMsV0FBRCxJQUFhLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFuQixDQURGO09BREYsQ0FEaUI7S0FBWDtBQU9SLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSxtQ0FBWixFQUQ0QjtLQUFYO0dBcEJKLENBQWIsQ0F4RlE7O0FBaUhaLE1BQUksYUFBYSxvQkFBQyxVQUFELE9BQWIsQ0FqSFE7O0FBbUhaLFdBQVMsTUFBVCxDQUFnQixVQUFoQixFQUE0QixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTVCLEVBbkhZOztBQXFIWixhQUFXLFlBQVc7QUFDcEIsUUFBSSxPQUFPLENBQ0wsRUFBQyxJQUFHLENBQUgsRUFBTSxRQUFRLGNBQVIsRUFBd0IsTUFBTSxxQ0FBTixFQUQxQixDQUFQO1FBR0EsUUFBUTtBQUNOLFlBQU0sSUFBTjtLQURGLENBSmdCOztBQVFwQixlQUFXLFFBQVgsQ0FBb0IsS0FBcEIsRUFSb0I7R0FBWCxFQVNSLElBVEg7QUFySFksQ0FBZDs7QUFrSUYsT0FBTyxPQUFQLEdBQWlCLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgncmVhY3Rpb24nKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gdmFyIFByb2ZpbGUsXG4gICAgLy8gICAgIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgbmF2ID0gPE5hdiBjb2xvcj1cImJsdWVcIj48UHJvZmlsZT5jbGljazwvUHJvZmlsZT48L05hdj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChuYXYpO1xuXG4gICAgLy8gdmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLkxhYmVsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLklucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vIHZhciBmb3JtID0gKFxuICAgIC8vXG4gICAgLy8gICAgIDxGb3JtPlxuICAgIC8vICAgICAgIHsvKiBJdCdzIG9rYXkgdG8gcHV0IGNvbW1lbnRzIGluIGhlcmUgYXMgbG9uZyBhcyB5b3UgZW5jbG9zZSB0aGVtIGluIGN1cmx5IGJyYWNlcy4gKi99XG4gICAgLy8gICAgICAgPEZvcm0uUm93IC8qIENvbW1lbnRzIGluIGhlcmVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgb24gdGhlIG90aGVyIGhhbmRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgYXJlIGZpbmUgd2l0aG91dFxuICAgIC8vICAgICAgICAgICAgICAgICAgICBjdXJseSBicmFjZXMuICovPlxuICAgIC8vICAgICAgICAgPEZvcm0uTGFiZWwgLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLklucHV0IC8+XG4gICAgLy8gICAgICAgPC9Gb3JtLlJvdz5cbiAgICAvLyAgICAgPC9Gb3JtPlxuICAgIC8vICk7XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmb3JtKTtcblxuICAgIC8vIHZhciBJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgZmlyc3REaXNhYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZCAvPixcbiAgICAvLyAgICAgc2Vjb25kRGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3RydWV9IC8+LFxuICAgIC8vICAgICBmaXJzdEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgLz4sXG4gICAgLy8gICAgIHNlY29uZEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoc2Vjb25kRGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoZmlyc3RFbmFibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZEVuYWJsZWRJbnB1dCk7XG5cbiAgICAvLyB2YXIgUGVyc29uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBwZXJzb24gPSA8UGVyc29uIG5hbWU9e3dpbmRvdy5pc0xvZ2dlZEluID8gd2luZG93Lm5hbWUgOiAnJ30gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChwZXJzb24pO1xuXG4gICAgLy8gdmFyIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgY29udGFpbmVyID0gPENvbnRhaW5lcj57IXdpbmRvdy5pc0xvZ2dlZEluID8gPE5hdiAvPiA6IDxMb2dpbiAvPn08L0NvbnRhaW5lcj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hdXRob3J9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmF1dGhvciArICdcXCdzIGNvbW1lbnQgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgQ29tbWVudExpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29tbWVudHMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKGNvbW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENvbW1lbnQgYXV0aG9yPXtjb21tZW50LmF1dGhvcn0ga2V5PXtjb21tZW50LmlkfT5cbiAgICAgICAgICAgICAge2NvbW1lbnQudGV4dH1cbiAgICAgICAgICAgIDwvQ29tbWVudD5cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudExpc3RcIj5cbiAgICAgICAgICAgIHtjb21tZW50c31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGUgY29tbWVudCBsaXN0IGNvbXBvbmVudCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50Qm94ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXG4gICAgICAgICAgICAgIHtpZDogMSwgYXV0aG9yOiBcIlBldGUgSHVudFwiLCB0ZXh0OiBcIlRoaXMgaXMgb25lIGNvbW1lbnQuXCJ9LFxuICAgICAgICAgICAgICB7aWQ6IDIsIGF1dGhvcjogXCJKb2UgV2lubmVyXCIsIHRleHQ6IFwiVGhpcyBpcyAqYW5vdGhlciogY29tbWVudC4uLlwifSxcbiAgICAgICAgICAgICAge2lkOiAzLCBhdXRob3I6IFwiSm9yZGFuIFdhbGtlclwiLCB0ZXh0OiBcIlRoaXMgaXMgKip5ZXQgYW5vdGhlcioqIGNvbW1lbnQhXCJ9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgaW5pdGlhbFN0YXRlID0ge1xuICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRMaXN0XCI+XG4gICAgICAgICAgICA8Q29tbWVudExpc3QgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVGhlIGNvbW1lbnQgYm94IGNvbXBvbmVudCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50Qm94ID0gPENvbW1lbnRCb3ggLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudEJveCwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSk7XG4gICAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkYXRhID0gW1xuICAgICAgICAgICAge2lkOjQsIGF1dGhvcjogXCJCaWxseSBXcmlnaHRcIiwgdGV4dDogXCJUaGlzIGlzIHRoZSBsYXN0IGNvbW1lbnQgZm9yIG5vdy4uLlwifVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgfTtcbiAgICAgIFxuICAgICAgY29tbWVudEJveC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSwgMTAwMCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuIl19
