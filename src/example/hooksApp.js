"use strict";

import React from "../react";
import ReactDOM from "../reactDOM";

import View from "./hooksApp/view";

import { ROOT } from "./hooksApp/constants";

export default function hooksApp() {
  const rootDOMElement = document.getElementById(ROOT);

  ReactDOM.render(

      <View/>

    ,
    rootDOMElement
  );
};
