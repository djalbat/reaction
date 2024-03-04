"use strict";

import { React, ReactDOM } from "../index"; ///

import CommentsList from "./vanillaApp/commentsList";

import { ROOT, DELAY } from "./vanillaApp/constants";

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
  }, DELAY);
};
