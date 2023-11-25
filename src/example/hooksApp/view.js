"use strict";

const { Component } = React;

import { ClassUseStateParagraph } from "./useState/class";
import { FunctionUseStateParagraph } from "./useState/function";
import { ComponentUseStateParagraph } from "./useState/component";

export default class View extends Component {
  render(update) {
    return (

      <div className="view">
        <ClassUseStateParagraph/>
        <FunctionUseStateParagraph/>
        <ComponentUseStateParagraph/>
      </div>

    );
  }
}
