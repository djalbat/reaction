"use strict";

import { React } from "../../../index"; ///

import { SET_VISIBILITY_FILTER } from "../constants";

const { Component } = React;

export default class FilterLink extends Component {
  // static mixins = [
  //   updateHandler
  // ];

  updateHandler(update) {
    this.forceUpdate(update);
  }

  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => this.updateHandler());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context,
          state = store.getState(),
          { visibilityFilter } = state,
          { children, filter } = this.props,
          active = (filter === visibilityFilter);

    if (active) {
      return (

        <span>{children}</span>

      );
    }

    return (

      <a href="#"
         className="filter"
         onClick={(event) => {

           event.preventDefault();

           const type = SET_VISIBILITY_FILTER,
                 visibilityFilter = filter,
                 action = {
                   type,
                   visibilityFilter
                 };

           store.dispatch(action);

         }}
      >
        {children}
      </a>
    );
  }
}

// function updateHandler(update) {
//   this.forceUpdate(update);
// }
