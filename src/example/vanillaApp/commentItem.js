"use strict";

import { React } from "../../index";  ///

const { createClass } = React;

const CommentItem = createClass({
  render: function(update) {
    return (

      <li className="comment">
        <p>
          {this.props.message}
        </p>
      </li>

    );
  },

  componentDidMount: function() {
    const message = this.props.message;

    console.log(`Comment item mounted with message: '${message}'.`)
  },

  componentWillUnmount: function() {
    const message = this.props.message;

    console.log(`Comment item unmounted with message: '${message}'.`)
  }
});

export default CommentItem;
