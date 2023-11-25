"use strict";

const { Component } = React;

import { ClassUseStateParagraph } from "./useState/class";
import { FunctionUseStateParagraph } from "./useState/function";

export default class View extends Component {
  render(update) {
    return (

      <div className="view">
        <ClassUseStateParagraph/>
        <FunctionUseStateParagraph/>
      </div>

    );
  }
}
