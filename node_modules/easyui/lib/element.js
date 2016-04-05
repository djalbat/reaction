'use strict';

var $ = require('jquery');

var Bounds = require('./bounds');

class Element {
  constructor(selectorOr$Element) {
    this.$element = $element(selectorOr$Element);

    this.$element.data('element', this);
  }

  clone() {
    var clonedElement = Element.clone(this.$element);

    return clonedElement;
  }

  show() { this.$element.show(); }
  hide() { this.$element.hide(); }
  enable() { this.$element.removeAttr('disabled'); }
  disable() { this.$element.attr('disabled', true); }

  setWidth(width) { this.$element.width(width); }
  setHeight(height) { this.$element.height(height); }

  getWidth() { return this.$element.width(); }
  getHeight() { return this.$element.height(); }

  getBounds() {
    var $offset = this.$element.offset(),
        top = $offset.top,  ///
        left = $offset.left,  ///
        width = this.getWidth(),
        height = this.getHeight(),
        bottom = top + height,
        right = left + width,
        bounds = new Bounds(top, left, bottom, right);

    return bounds;
  }

  getAttribute(name) { return this.$element.attr(name); }
  addAttribute(name, value) { this.$element.attr(name, value); }
  removeAttribute(name) { this.$element.removeAttr(name); }

  prependBefore(element) { this.$element.before(element.$element); }
  appendAfter(element) { this.$element.after(element.$element); }
  prepend(element) { this.$element.prepend(element.$element); }
  append(element) { this.$element.append(element.$element); }
  remove() { this.$element.remove(); }
  detach() { this.$element.detach(); }

  hasClass(className) { return this.$element.hasClass(className); }
  addClass(className) { this.$element.addClass(className); }
  removeClass(className) { this.$element.removeClass(className); }
  removeClasses() { this.$element.removeClass(); }

  html(html) {
    if (arguments.length === 1) {
      this.$element.html(html)
    } else {
      html = this.$element.html();

      return html;
    }
  }

  css(css) {
    if (typeof css === 'string') {
      var propertyName = css;

      css = this.$element.css(propertyName);

      return css;
    } else {
      this.$element.css(css);
    }
  }

  findElements(selector) {
    var foundDOMElements = this.$element.find(selector),
        foundElements = elementsFromDOMElements(foundDOMElements);

    return foundElements;
  }

  childElements(selector) {
    var childDOMElements = this.$element.children(selector),
        childElements = elementsFromDOMElements(childDOMElements);

    return childElements;
  }

  parentElement(selector) {
    var parentDOMElements = this.$element.parent(selector),
        parentElements = elementsFromDOMElements(parentDOMElements),
        firstParentElement = first(parentElements),
        parentElement = firstParentElement || null;

    return parentElement;
  }

  parentElements(selector) {
    var parentDOMElements = this.$element.parents(selector),
        parentElements = elementsFromDOMElements(parentDOMElements);

    return parentElements;
  }

  on(events, handler) { this.$element.on(events, handler); }

  onMouseUp(handler) { this.$element.on('mouseup', returnMouseEventHandler(handler)); }
  onMouseDown(handler) { this.$element.on('mousedown', returnMouseEventHandler(handler)); }
  onMouseOver(handler) { this.$element.on('mouseover', returnMouseEventHandler(handler)); }
  onMouseOut(handler) { this.$element.on('mouseout', returnMouseEventHandler(handler)); }
  onMouseMove(handler) { this.$element.on('mousemove', returnMouseEventHandler(handler)); }

  sameAs(element) {
    return this.$element === element.$element;  ///
  }
}

Element.fromHTML = function(html) {
  var Class,
      args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    html = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $htmlElement = $(html);

  return instance(Class, $htmlElement, args);
};

Element.clone = function(selectorOr$Element) {
  var Class,
      args;

  if (arguments.length === 1) {
    Class = Element;
    args = [];
  } else {
    Class = arguments[0];
    selectorOr$Element = arguments[1];
    args = Array.prototype.slice.call(arguments, 2);
  }

  var $clonedElement = $element(selectorOr$Element).clone();

  return instance(Class, $clonedElement, args);
};

Element.LEFT_MOUSE_BUTTON = 1;
Element.MIDDLE_MOUSE_BUTTON = 2;
Element.RIGHT_MOUSE_BUTTON = 3;

module.exports = Element;

function returnMouseEventHandler(handler) {
  return function(event) {
    var mouseTop = event.pageY,  ///
        mouseLeft = event.pageX, ///
        mouseButton = event.which; ///

    handler(mouseTop, mouseLeft, mouseButton);
  };
}

function $element(selectorOr$Element) {
  var $element;

  if (selectorOr$Element instanceof $) {
    $element = selectorOr$Element;
  } else if (typeof selectorOr$Element === 'string') {
    $element = $(selectorOr$Element);
  } else {
    var parentSelectorOr$Element = selectorOr$Element[0], ///
        childSelector = selectorOr$Element[1],  ///
        parent$Element = (parentSelectorOr$Element instanceof $) ? parentSelectorOr$Element : $(parentSelectorOr$Element);

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function instance(Class, $element, args) {
  args.unshift($element);

  args.unshift(null); ///
  
  var instance = new (Class.bind.apply(Class, args));  ///

  return instance;
}

function elementsFromDOMElements(domElements) {
  var elements = [],
      domElementsLength = domElements.length;

  for (var i = 0; i < domElementsLength; i++) {
    var domElement = domElements[i],
        $element = $(domElement),
        element = $element.data('element');

    if (element) {
      elements.push(element);
    }
  }

  return elements;
}

function first(array) { return array[0]; }
