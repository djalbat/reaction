"use strict";

import ReactElement from "./element/react";

export default class ReactComponent extends ReactElement {
  constructor(props) {
    super(props);

    // this.reactComponent = reactComponent;

    const initialState = this.getInitialState();

    this.setInitialState(initialState);
  }

  // render(update) {
  //   return this.reactComponent.render.call(this, update);
  // }

  // getInitialState() {
  //   return this.reactComponent.getInitialState.call(this);
  // }

  // getChildContext(context) {
  //   return this.reactComponent.getChildContext.call(this, context);
  // }

  // componentDidMount() {
  //   this.reactComponent.componentDidMount.call(this);
  // }

  // componentWillUnmount() {
  //   this.reactComponent.componentWillUnmount.call(this);
  // }









  getInitialState() {
    return {};
  }
  
  getChildContext(context) {
    return context;
  }

  componentDidMount() {
   
  }
 
  componentWillUnmount() {

  }






}
