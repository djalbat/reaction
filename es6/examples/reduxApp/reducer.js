"use strict";

import { combineReducers } from "./redux";

import todos from "./reducer/todos";
import visibilityFilter from "./reducer/visibilityFilter";

const reducer = combineReducers({
  todos,
  visibilityFilter
});

export default reducer;
