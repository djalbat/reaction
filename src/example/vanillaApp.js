"use strict";

import { React, ReactDOM } from "../index"; ///

import CommentsList from "./vanillaApp/commentsList";

import { ROOT, MESSAGES_DELAY } from "./vanillaApp/constants";

export default function vanillaApp() {
  const commentsList =

          <CommentsList/>

        ,
        rootDOMElement = document.getElementById(ROOT);

  ReactDOM.render(
    commentsList,
    rootDOMElement
  );

  const delay = MESSAGES_DELAY;

  setTimeout(() => {
    const messages = [
            "Hello world yet again!!!"
          ],
          state = {
            messages
          };

    commentsList.setState(state);
  }, delay);
};
