"use strict";

import { React } from "../../index";  ///

import CommentItem from "./commentItem";

const { createClass } = React;

const CommentsList = createClass({
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
          commentItems = messages.map((message) =>

            <CommentItem message={message} />

          );

    return (

      <ul className="comments">
        {commentItems}
      </ul>

    );
  }
});

export default CommentsList;
