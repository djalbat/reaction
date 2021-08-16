"use strict";

import React from "../react";
import ReactDOM from "../reactDOM";

import CommentsList from "./vanillaApp/commentsList";

import { ROOT, TIMEOUT } from "./vanillaApp/constants";

export default function vanillaApp() {
  const commentsList =

          <CommentsList/>

        ,
        rootDOMElement = document.getElementById(ROOT);

  ReactDOM.render(
    commentsList,
    rootDOMElement
  );

  setTimeout(() => {
    const messages = [
            "Hello world yet again!!!"
          ],
          state = {
            messages
          };

    commentsList.setState(state);
  }, TIMEOUT);
};
