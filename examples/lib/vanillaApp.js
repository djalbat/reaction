'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var VanillaApp = function VanillaApp() {
  _classCallCheck(this, VanillaApp);

  var rootDOMElement = document.getElementById('root');

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

    render: function render() {
      var messages = ["Hello, world!", "Hello world again..."];

      var comments = messages.map(function (message) {
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

  ReactDOM.render(commentsList, rootDOMElement);

  // const InnerElement = React.createClass({
  //   render() {
  //
  //     return <div></div>
  //   }
  // });
  //
  // const OuterElement = React.createClass({
  //   render() {
  //
  //     return <InnerElement />
  //   }
  // });
  //
  // var outerElement = <OuterElement />;
  //
  // ReactDOM.render(outerElement, rootDOMElement);
  //
  // outerElement.forceUpdate();
};

module.exports = VanillaApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTixhQUNKLFNBREksVUFDSixHQUFjO3dCQURWLFlBQ1U7O0FBQ1osTUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBRE07O0FBR1osTUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0FBVVIsdUJBQW1CLDZCQUFXO0FBQzVCLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBRGM7O0FBRzVCLGNBQVEsR0FBUixDQUFZLGtDQUFrQyxPQUFsQyxDQUFaLENBSDRCO0tBQVg7R0FYUCxDQUFWLENBSFE7O0FBcUJaLE1BQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNuQyxZQUFRLGtCQUFXO0FBQ2pCLFVBQUksV0FBVyxDQUNiLGVBRGEsRUFFYixzQkFGYSxDQUFYLENBRGE7O0FBTWpCLFVBQUksV0FBVyxTQUFTLEdBQVQsQ0FBYSxVQUFTLE9BQVQsRUFBa0I7QUFDNUMsZUFBTyxvQkFBQyxPQUFELElBQVMsU0FBUyxPQUFULEVBQVQsQ0FBUCxDQUQ0QztPQUFsQixDQUF4QixDQU5hOztBQVVqQixhQUVFOztVQUFLLFdBQVUsY0FBVixFQUFMO1FBQ0csUUFESDtPQUZGLENBVmlCO0tBQVg7QUFpQlIsdUJBQW1CLDZCQUFXO0FBQzVCLGNBQVEsR0FBUixDQUFZLHVCQUFaLEVBRDRCO0tBQVg7R0FsQkYsQ0FBZixDQXJCUTs7QUE0Q1osTUFBSSxlQUFlLG9CQUFDLFlBQUQsT0FBZixDQTVDUTs7QUE4Q1osV0FBUyxNQUFULENBQWdCLFlBQWhCLEVBQThCLGNBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE5Q1ksQ0FBZDs7QUFzRUYsT0FBTyxPQUFQLEdBQWlCLFVBQWpCIiwiZmlsZSI6InZhbmlsbGFBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBWYW5pbGxhQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgXTtcblxuICAgICAgICB2YXIgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuXG4gICAgLy8gY29uc3QgSW5uZXJFbGVtZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyKCkge1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiA8ZGl2PjwvZGl2PlxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgT3V0ZXJFbGVtZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyKCkge1xuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiA8SW5uZXJFbGVtZW50IC8+XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyB2YXIgb3V0ZXJFbGVtZW50ID0gPE91dGVyRWxlbWVudCAvPjtcbiAgICAvL1xuICAgIC8vIFJlYWN0RE9NLnJlbmRlcihvdXRlckVsZW1lbnQsIHJvb3RET01FbGVtZW50KTtcbiAgICAvL1xuICAgIC8vIG91dGVyRWxlbWVudC5mb3JjZVVwZGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFuaWxsYUFwcDtcbiJdfQ==