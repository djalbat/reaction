"use strict";

import { React } from "reaction";

import FilterLink from "./filterLink";

import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../constants";

const Footer = (props, context) =>

  <p>
    {"Show: "}
    <FilterLink filter={SHOW_ALL}>All</FilterLink>
    {" - "}
    <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
    {" - "}
    <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
  </p>

;

export default Footer;
