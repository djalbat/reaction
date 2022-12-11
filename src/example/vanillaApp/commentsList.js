"use strict";

import React from "../../react";

import Comment from "./comment";

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

  render: function(update) {
    const { messages } = this.getState(),
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

export default CommentsList;
