'use strict';

const VirtualDOMNode = require('../virtualDOMNode');

class VirtualDOMElement extends VirtualDOMNode {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

    super(props, domElement);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);

    const childParent = this,
          childReference = null,
          childContext = context;

    this.children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    });

    this.applyProps();
  }

  unmount(context) {
    const childContext = context;

    this.children.forEach(function(child) {
      child.unmount(childContext);
    });

    super.unmount();
  }

  getTagName() {
    const domElement = this.getDOMElement(),
          tagName = domElement.tagName; 

    return tagName;
  }

  spliceChildren(start, removedChildrenCount, addedChildren, context) {
    const childParent = this,
          childReference = null,
          childContext = context;

    addedChildren.forEach(function(addedChild) {
      addedChild.mount(childParent, childReference, childContext);
    });

    const args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

    removedChildren.forEach(function(removedChild) {
      removedChild.unmount(childContext);
    });
  }

  addChild(child, context) {
    const start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

    this.spliceChildren(start, removedChildrenCount, addedChildren, context);
  }

  removeChild(child, context) {
    const index = this.children.indexOf(child);

    if (index > -1) {
      const start = index,
            removedChildrenCount = 1,
            addedChildren = [];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }
  
  setAttribute(name, value) {
    if (name === 'className') {
      name = 'class';
    }
    
    if (name === 'htmlFor') {
      name = 'for';
    }

    if (typeof value === 'object') {
      const keys = Object.keys(value);

      keys.forEach(function (key) {
        this.domElement[name][key] = value[key];
      }.bind(this));
    } else if (typeof value === 'boolean') {
      if (value) {
        value = name; ///

        this.domElement.setAttribute(name, value);
      }
    } else {
      this.domElement.setAttribute(name, value);
    }
  }

  getAttribute(name) { return this.domElement.getAttribute(name); }

  clearAttribute(name) { this.domElement.removeAttribute(name); }

  addAttribute(name, value) { this.setAttribute(name, value); }
  
  removeAttribute(name) { this.clearAttribute(name); }

  setClass(className) { this.domElement.className = className; }

  addClass(className) { this.domElement.classList.add(className); }

  removeClass(className) { this.domElement.classList.remove(className); }

  toggleClass(className) { this.domElement.classList.toggle(className); }

  hasClass(className) { return this.domElement.classList.contains(className); }

  clearClasses() { this.domElement.className = ''; }

  applyProps() {
    const names = Object.keys(this.props);

    names.forEach(function(name) {
      const value = this.props[name];

      if (false) {

      } else if (isHandlerName(name)) {
        this.setHandler(name, value);
      } else if (isAttributeName(name)) {
        this.setAttribute(name, value);
      } else if (name === 'ref') {
        const callback = value; ///
        
        callback(this.domElement);
      }
    }.bind(this));
  }

  setHandler(name, value) {
    const eventType = name.substr(2).toLowerCase(), ///
          handler = value;  ///

    this.domElement.addEventListener(eventType,  handler);
  }
}

module.exports = VirtualDOMElement;


function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

const attributeNames = [
  'accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay',
  'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin',
  'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable',
  'encType',
  'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder',
  'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv',
  'icon', 'id', 'inputMode', 'integrity', 'is',
  'keyParams', 'keyType', 'kind',
  'label', 'lang', 'list', 'loop', 'low',
  'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted',
  'name', 'noValidate', 'nonce',
  'open', 'optimum',
  'pattern', 'placeholder', 'poster', 'preload', 'profile',
  'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows',
  'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary',
  'tabIndex', 'target', 'title', 'type',
  'useMap',
  'value',
  'width',
  'wmode',
  'wrap'
];
