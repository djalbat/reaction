'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var Component = React.Component;

var VanillaApp = function () {
  function VanillaApp() {
    _classCallCheck(this, VanillaApp);
  }

  _createClass(VanillaApp, null, [{
    key: 'run',
    value: function run() {
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
    }
  }]);

  return VanillaApp;
}();

module.exports = VanillaApp;