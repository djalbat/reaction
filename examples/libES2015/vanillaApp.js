'use strict';

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class VanillaApp {
  constructor() {
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
  }
}

module.exports = VanillaApp;
