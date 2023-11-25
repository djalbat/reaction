"use strict";

const { Component } = React;

import UseStateParagraph from "./paragraph/useState";

export default class View extends Component {
  render(update) {
    return (

      <div className="view">
        <UseStateParagraph/>
      </div>

    );
  }
}
