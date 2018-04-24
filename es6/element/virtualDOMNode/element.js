'use strict';

const VirtualDOMNode = require('../virtualDOMNode'),
      virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

class VirtualDOMElement extends VirtualDOMNode {
  constructor(tagName, props) {
    const domElement = document.createElement(tagName);

    super(props, domElement);
  }

  mount(parent, reference, context) {
    super.mount(parent, reference);

    const childParent = this,
          childReference = null,
          childContext = context,
          children = this.getChildren();

    children.forEach(function(child) {
      child.mount(childParent, childReference, childContext);
    });

    this.applyProps();
  }

  unmount(context) {
    const childContext = context,
          children = this.getChildren();

    children.forEach(function(child) {
      child.unmount(childContext);
    });

    super.unmount();
  }

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

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

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
