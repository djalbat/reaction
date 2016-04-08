'use strict';

class ReactClass {
  constructor(render, displayName, getInitialState, componentDidMount) {
    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }
  
  getRender() {
    return this.render;
  }

  getDisplayName() {
    return this.displayName;
  }

  getGetInitialState() {
    return this.getInitialState;
  }
  
  getComponentDidMount() {
    return this.componentDidMount;
  }

  instance(properties, children) {
    var getInitialState = this.getGetInitialState(),
        initialState = getInitialState ? getInitialState() : {}, ///
        props = (properties === null) ? {} : properties;  ///

    props.children = children;

    var state = initialState,  ///
        instance = {
          props: props,
          state: state
        };

    return instance;
  }
  
  static fromProperties(properties) {
    var render = properties['render'],
        displayName = properties['displayName'],
        getInitialState = properties['getInitialState'],
        componentDidMount = properties['componentDidMount'],
        reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);
    
    return reactClass;
  }
}

module.exports = ReactClass;
