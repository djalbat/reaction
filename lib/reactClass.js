'use strict';

class ReactClass {
  constructor(elementName, render, getInitialState) {
    this.elementName = elementName;
    this.render = render;
    this.getInitialState = getInitialState;
  }

  getElementName() {
    return this.elementName;
  }

  getRender() {
    return this.render;
  }

  getGetInitialState() {
    return this.getInitialState;
  }
  
  static fromProperties(properties) {
    var displayName = properties['displayName'],
        render = properties['render'],
        getInitialState = properties['getInitialState'] || defaultGetInitialState,
        elementName = displayName;  ///

    return new ReactClass(elementName, render, getInitialState);
  }
}

function defaultGetInitialState () {
  var initialState = {};
  
  return initialState;
}

module.exports = ReactClass;
