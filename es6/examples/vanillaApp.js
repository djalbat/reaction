"use strict";

import React from "../react";
import ReactDOM from "../reactDOM";

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

    console.log("Comment mounted with message: " + message)
  },

  componentWillUnmount: function() {
    const message = this.props.message;

    console.log("Comment unmounted with message: " + message)
  }
});

const CommentsList = React.createClass({
  getInitialState() {
    const messages = [
            "Hello, world!",
            "Hello world again..."
          ],
          state = {
            messages
          };

    return state;
  },

  componentDidMount: function() {
    console.log("Comments list mounted.")
  },

  render: function() {
    const state = this.getState(),
          { messages } = state,
          comments = messages.map((message) =>

            <Comment message={message} />

          );

    return (

      <div className="comments-list">
        {comments}
      </div>

    );
  }
});

const vanillaApp = () => {
  const commentsList =

          <CommentsList />

        ,
        rootDOMElement = document.getElementById("root");


  ReactDOM.render(
    commentsList,
    rootDOMElement
  );

  setTimeout(function() {
    const messages = [
            "Hello world yet again!!!"
          ],
          state = {
            messages
          };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;
