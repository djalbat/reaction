'use strict';

class ReactClass {
  constructor(displayName, render) {
    this.displayName = displayName;
    this.render = render;
  }

  getDisplayName() {
    return this.displayName;
  }
  
  getRender() {
    return this.render;
  }
  
  getElementName() {
    var elementName = this.displayName; ///
    
    return elementName;
  }
  
  static fromProperties(properties) {
    var displayName = properties['displayName'],
        render = properties['render'];

    return new ReactClass(displayName, render);
  }
}

module.exports = ReactClass;
