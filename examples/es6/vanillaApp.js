'use strict';

const reaction = require('../../index'),
      ReactDOM = reaction.ReactDOM,
      React = reaction.React;

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
        const message = this.props.message;

        console.log('comment mounted with message ' + message)
      },
      componentWillUnmount: function() {
        const message = this.props.message;

        console.log('comment unmounted with message ' + message)
      }
    });

    var CommentsList = React.createClass({
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
        var messages = this.state.messages;

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
    
    setTimeout(function() {
      const messages = [
              "Hello world yet again!!!"  
            ],
            state = {
              messages: messages
            };
      
      commentsList.setState(state);
    }, 1000); ///
  }
}

module.exports = VanillaApp;
