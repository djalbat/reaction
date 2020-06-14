"use strict";

import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../constants";

export default function visibilityFilter(state = SHOW_ALL, action = {}) {
  const { type } = action;

  switch (type) {
    case SET_VISIBILITY_FILTER :
      const { visibilityFilter } = action;

      state = visibilityFilter;
      break;
  }

  return state;
}
