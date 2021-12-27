"use strict";

import Element from "../element";

import { isSVGAttributeName } from "../../../utilities/name";
import { HTTP_WWW_W3_ORG_2000_SVG } from "../../../constants";

export default class SVGElement extends Element {
  constructor(tagName, props) {
    const domElement = document.createElementNS(HTTP_WWW_W3_ORG_2000_SVG, tagName);

    super(props, domElement);
  }

  isAttributeName(name) {
    return isSVGAttributeName(name);
  }
}
