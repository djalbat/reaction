'use strict';

class ReactClass {
  constructor(render, elementName, getInitialState, componentDidMount) {
    this.render = render;
    this.elementName = elementName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  getRender() {
    return this.render;
  }

  getElementName() {
    return this.elementName;
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
        elementName = displayName,  ///
        reactClass = new ReactClass(render, elementName, getInitialState, componentDidMount);
    
    return reactClass;
  }
}

module.exports = ReactClass;
