'use strict';

const React = require('../react'),
      ReactDOM = require('../reactDOM');

const vanillaApp = () => {
  const rootDOMElement = document.getElementById('root');

  const Comment = React.createClass({
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
      const message = this.props.message;

      console.log('comment mounted with message ' + message)
    },

    componentWillUnmount: function() {
      const message = this.props.message;

      console.log('comment unmounted with message ' + message)
    }
  });

  const CommentsList = React.createClass({
    getInitialState() {
      const messages = [
              "Hello, world!",
              "Hello world again..."
            ],
            state = {
              messages: messages
            };

      return state;
    },

    render: function() {
      const messages = this.state.messages,
          comments = messages.map(function(message) {
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

  const commentsList = <CommentsList />;

  ReactDOM.render(commentsList, rootDOMElement);

  setTimeout(function() {
    const messages = [
            "Hello world yet again!!!"
          ],
          state = {
            messages: messages
          };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;
