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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFFQSxJQUFJLFdBQVcsUUFBUSxVQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOLE1BQ0osU0FESSxHQUNKLEdBQWM7d0JBRFYsS0FDVTs7QUFFWixNQUFJLGlCQUFpQixTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFGUSxNQXFEUixVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0dBREksQ0FBVixDQXJEUTs7QUFrRVosTUFBSSxlQUFlLE1BQU0sV0FBTixDQUFrQjs7O0FBQ25DLHFCQUFpQiwyQkFBVztBQUMxQixVQUFJLFdBQVcsQ0FDVCxlQURTLEVBRVQsc0JBRlMsQ0FBWDtVQUlBLGVBQWU7QUFDYixrQkFBVSxRQUFWO09BREYsQ0FMc0I7O0FBUzFCLGFBQU8sWUFBUCxDQVQwQjtLQUFYO0FBV2pCLFlBQVEsa0JBQVc7QUFDakIsVUFBSSxXQUFXLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBcEIsQ0FBd0IsVUFBUyxPQUFULEVBQWtCO0FBQ3ZELGVBQU8sb0JBQUMsT0FBRCxJQUFTLFNBQVMsT0FBVCxFQUFULENBQVAsQ0FEdUQ7T0FBbEIsQ0FBbkMsQ0FEYTs7QUFLakIsYUFFRTs7VUFBSyxXQUFVLGNBQVYsRUFBTDtRQUNHLFFBREg7T0FGRixDQUxpQjtLQUFYO0dBWlMsQ0FBZixDQWxFUTs7QUE0RlosTUFBSSxlQUFlLG9CQUFDLFlBQUQsT0FBZixDQTVGUTs7QUE4RlosV0FBUyxNQUFULENBQWdCLFlBQWhCLEVBQThCLGNBQTlCLEVBOUZZOztBQWdHWixNQUFJLFdBQVcsQ0FDVCwwQkFEUyxDQUFYO01BR0EsUUFBUTtBQUNOLGNBQVUsUUFBVjtHQURGLENBbkdROztBQXVHWixhQUFXLFlBQVc7QUFDcEIsaUJBQWEsUUFBYixDQUFzQixLQUF0QixFQURvQjtHQUFYLEVBRVIsSUFGSDtBQXZHWSxDQUFkOztBQTZHRixPQUFPLE9BQVAsR0FBaUIsR0FBakIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCdyZWFjdGlvbicpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB2YXIgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG4gICAgLy8gdmFyIFByb2ZpbGUsXG4gICAgLy8gICAgIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgbmF2ID0gPE5hdiBjb2xvcj1cImJsdWVcIj48UHJvZmlsZT5jbGljazwvUHJvZmlsZT48L05hdj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChuYXYpO1xuXG4gICAgLy8gdmFyIEZvcm0gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSk7XG4gICAgLy8gICAgIEZvcm0uUm93ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLkxhYmVsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vICAgICBGb3JtLklucHV0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pO1xuICAgIC8vIHZhciBmb3JtID0gKFxuICAgIC8vXG4gICAgLy8gICAgIDxGb3JtPlxuICAgIC8vICAgICAgIHsvKiBJdCdzIG9rYXkgdG8gcHV0IGNvbW1lbnRzIGluIGhlcmUgYXMgbG9uZyBhcyB5b3UgZW5jbG9zZSB0aGVtIGluIGN1cmx5IGJyYWNlcy4gKi99XG4gICAgLy8gICAgICAgPEZvcm0uUm93IC8qIENvbW1lbnRzIGluIGhlcmVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgb24gdGhlIG90aGVyIGhhbmRcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgYXJlIGZpbmUgd2l0aG91dFxuICAgIC8vICAgICAgICAgICAgICAgICAgICBjdXJseSBicmFjZXMuICovPlxuICAgIC8vICAgICAgICAgPEZvcm0uTGFiZWwgLz5cbiAgICAvLyAgICAgICAgIDxGb3JtLklucHV0IC8+XG4gICAgLy8gICAgICAgPC9Gb3JtLlJvdz5cbiAgICAvLyAgICAgPC9Gb3JtPlxuICAgIC8vICk7XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChmb3JtKTtcblxuICAgIC8vIHZhciBJbnB1dCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgZmlyc3REaXNhYmxlZElucHV0ID0gPElucHV0IHR5cGU9XCJidXR0b25cIiBkaXNhYmxlZCAvPixcbiAgICAvLyAgICAgc2Vjb25kRGlzYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e3RydWV9IC8+LFxuICAgIC8vICAgICBmaXJzdEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgLz4sXG4gICAgLy8gICAgIHNlY29uZEVuYWJsZWRJbnB1dCA9IDxJbnB1dCB0eXBlPVwiYnV0dG9uXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPjtcbiAgICAvL1xuICAgIC8vIGJvZHkuYXBwZW5kKGZpcnN0RGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoc2Vjb25kRGlzYWJsZWRJbnB1dCk7XG4gICAgLy8gYm9keS5hcHBlbmQoZmlyc3RFbmFibGVkSW5wdXQpO1xuICAgIC8vIGJvZHkuYXBwZW5kKHNlY29uZEVuYWJsZWRJbnB1dCk7XG5cbiAgICAvLyB2YXIgUGVyc29uID0gUmVhY3QuY3JlYXRlQ2xhc3Moe30pLFxuICAgIC8vICAgICBwZXJzb24gPSA8UGVyc29uIG5hbWU9e3dpbmRvdy5pc0xvZ2dlZEluID8gd2luZG93Lm5hbWUgOiAnJ30gLz47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChwZXJzb24pO1xuXG4gICAgLy8gdmFyIE5hdiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgTG9naW4gPSBSZWFjdC5jcmVhdGVDbGFzcyh7fSksXG4gICAgLy8gICAgIENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHt9KSxcbiAgICAvLyAgICAgY29udGFpbmVyID0gPENvbnRhaW5lcj57IXdpbmRvdy5pc0xvZ2dlZEluID8gPE5hdiAvPiA6IDxMb2dpbiAvPn08L0NvbnRhaW5lcj47XG4gICAgLy9cbiAgICAvLyBib2R5LmFwcGVuZChjb250YWluZXIpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb21tZW50cyA9IHRoaXMuc3RhdGUubWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCBib2R5RE9NRWxlbWVudCk7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICBdLFxuICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgfTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIDEwMDApOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuIl19
