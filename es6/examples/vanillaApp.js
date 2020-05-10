"use strict";

import React from "../react";
import ReactDOM from "../reactDOM";

import CommentsList from "./vanillaApp/commentsList";

export default function vanillaApp() {
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
