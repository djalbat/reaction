'use strict';

class ReactClass {
  constructor(displayName) {
    this.displayName = displayName;
  }

  getDisplayName() {
    return this.displayName;
  }
  
  getElementName() {
    var elementName = this.displayName; ///
    
    return elementName;
  }
  
  static fromProperties(properties) {
    var displayName = properties.displayName;

    return new ReactClass(displayName);
  }
}

module.exports = ReactClass;
