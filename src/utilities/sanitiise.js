"use strict";

import TextElement from "../virtualDOM/container/textElement";

import { STRING } from "../constants";

export function removeFalseyChildren(children) {
  children = children.reduce((children, child) => {
    if (child) {
      children.push(child);
    }

    return children;
  }, []);

  return children;
}

export function replaceStringsWithTextChildren(children) {
  children = children.map((child) => {  ///
    if (typeof child === STRING) {
      const text = child,  ///
            textElement = new TextElement(text);

      child = textElement; ///
    }

    return child;
  });

  return children;
}
