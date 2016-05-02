'use strict';

const reaction = require('../../index'),
      ReactDOM = reaction.ReactDOM,
      React = reaction.React;

const Component = React.Component;

class VanillaApp {
  static run() {
    const rootDOMElement = document.getElementById('root');

    var Comment = React.createClass({
      render: function() {
        return (

            <div className="comment">
              <p>
                {this.props.message}
              </p>
            </div>
        );
      },
      componentDidMount: function() {
        var message = this.props.message;

        console.log('comment mounted with message ' + message)
      }
    });

    var CommentsList = React.createClass({
      render: function() {
        var messages = [
          "Hello, world!",
          "Hello world again..."
        ];

        var comments = messages.map(function(message) {
          return <Comment message={message} />;
        });

        return (

            <div className="commentsList">
              {comments}
            </div>
        );
      },
      componentDidMount: function() {
        console.log('comments list mounted')
      }
    });

    var commentsList = <CommentsList />;

    ReactDOM.render(commentsList, rootDOMElement);
  }
}

module.exports = VanillaApp;
