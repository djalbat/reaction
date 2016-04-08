'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

// var Bounds = require('./bounds');

var Element = function () {
  function Element(selectorOr$Element) {
    _classCallCheck(this, Element);

    this.$element = $element(selectorOr$Element);

    this.$element.data('element', this);
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      var clonedElement = Element.clone(this.$element);

      return clonedElement;
    }
  }, {
    key: 'show',
    value: function show() {
      this.$element.show();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.$element.hide();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.$element.removeAttr('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.$element.attr('disabled', true);
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.$element.width(width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.$element.height(height);
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      return this.$element.width();
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.$element.height();
    }

    // getBounds() {
    //   var $offset = this.$element.offset(),
    //       top = $offset.top,  ///
    //       left = $offset.left,  ///
    //       width = this.getWidth(),
    //       height = this.getHeight(),
    //       bottom = top + height,
    //       right = left + width,
    //       bounds = new Bounds(top, left, bottom, right);
    //
    //   return bounds;
    // }

  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.$element.attr(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.$element.attr(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.$element.removeAttr(name);
    }
  }, {
    key: 'prependBefore',
    value: function prependBefore(element) {
      this.$element.before(element.$element);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      this.$element.after(element.$element);
    }
  }, {
    key: 'prepend',
    value: function prepend(element) {
      this.$element.prepend(element.$element);
    }
  }, {
    key: 'append',
    value: function append(elementOrString) {
      if (typeof elementOrString === 'string') {
        var string = elementOrString; ///

        this.$element.append(string);
      } else {
        var element = elementOrString,
            ///
        $element = element.$element;

        this.$element.append($element);
      }
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.$element.remove();
    }
  }, {
    key: 'detach',
    value: function detach() {
      this.$element.detach();
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.$element.hasClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.$element.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.$element.removeClass(className);
    }
  }, {
    key: 'removeClasses',
    value: function removeClasses() {
      this.$element.removeClass();
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (arguments.length === 1) {
        this.$element.html(_html);
      } else {
        _html = this.$element.html();

        return _html;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (typeof _css === 'string') {
        var propertyName = _css;

        _css = this.$element.css(propertyName);

        return _css;
      } else {
        this.$element.css(_css);
      }
    }
  }, {
    key: 'data',
    value: function data() {
      var argumentsLength = arguments.length,
          key = arguments[0],
          value;

      if (argumentsLength === 1) {
        value = this.$element.data(key);

        return value;
      } else {
        value = arguments[1];

        this.$element.data(key, value);
      }
    }
  }, {
    key: 'findElements',
    value: function findElements(selector) {
      var foundDOMElements = this.$element.find(selector),
          foundElements = elementsFromDOMElements(foundDOMElements);

      return foundElements;
    }
  }, {
    key: 'childElements',
    value: function childElements(selector) {
      var childDOMElements = this.$element.children(selector),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'parentElement',
    value: function parentElement(selector) {
      var parentDOMElements = this.$element.parent(selector),
          parentElements = elementsFromDOMElements(parentDOMElements),
          firstParentElement = first(parentElements),
          parentElement = firstParentElement || null;

      return parentElement;
    }
  }, {
    key: 'parentElements',
    value: function parentElements(selector) {
      var parentDOMElements = this.$element.parents(selector),
          parentElements = elementsFromDOMElements(parentDOMElements);

      return parentElements;
    }
  }, {
    key: 'on',
    value: function on(events, handler) {
      this.$element.on(events, handler);
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(handler) {
      this.$element.on('mouseup', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(handler) {
      this.$element.on('mousedown', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(handler) {
      this.$element.on('mouseover', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(handler) {
      this.$element.on('mouseout', returnMouseEventHandler(handler));
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(handler) {
      this.$element.on('mousemove', returnMouseEventHandler(handler));
    }
  }, {
    key: 'sameAs',
    value: function sameAs(element) {
      return this.$element === element.$element; ///
    }
  }]);

  return Element;
}();

Element.fromHTML = function (html) {
  var Class, args;

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

Element.clone = function (selectorOr$Element) {
  var Class, args;

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
  return function (event) {
    var mouseTop = event.pageY,
        ///
    mouseLeft = event.pageX,
        ///
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
    var parentSelectorOr$Element = selectorOr$Element[0],
        ///
    childSelector = selectorOr$Element[1],
        ///
    parent$Element = parentSelectorOr$Element instanceof $ ? parentSelectorOr$Element : $(parentSelectorOr$Element);

    $element = parent$Element.find(childSelector);
  }

  return $element;
}

function instance(Class, $element, args) {
  args.unshift($element);

  args.unshift(null); ///

  var instance = new (Function.prototype.bind.apply(Class, args))(); ///

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

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJLElBQUksUUFBUSxRQUFSLENBQUo7Ozs7SUFJRTtBQUNKLFdBREksT0FDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixTQUM0Qjs7QUFDOUIsU0FBSyxRQUFMLEdBQWdCLFNBQVMsa0JBQVQsQ0FBaEIsQ0FEOEI7O0FBRzlCLFNBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsU0FBbkIsRUFBOEIsSUFBOUIsRUFIOEI7R0FBaEM7O2VBREk7OzRCQU9JO0FBQ04sVUFBSSxnQkFBZ0IsUUFBUSxLQUFSLENBQWMsS0FBSyxRQUFMLENBQTlCLENBREU7O0FBR04sYUFBTyxhQUFQLENBSE07Ozs7MkJBTUQ7QUFBRSxXQUFLLFFBQUwsQ0FBYyxJQUFkLEdBQUY7Ozs7MkJBQ0E7QUFBRSxXQUFLLFFBQUwsQ0FBYyxJQUFkLEdBQUY7Ozs7NkJBQ0U7QUFBRSxXQUFLLFFBQUwsQ0FBYyxVQUFkLENBQXlCLFVBQXpCLEVBQUY7Ozs7OEJBQ0M7QUFBRSxXQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLFVBQW5CLEVBQStCLElBQS9CLEVBQUY7Ozs7NkJBRUQsT0FBTztBQUFFLFdBQUssUUFBTCxDQUFjLEtBQWQsQ0FBb0IsS0FBcEIsRUFBRjs7Ozs4QkFDTixRQUFRO0FBQUUsV0FBSyxRQUFMLENBQWMsTUFBZCxDQUFxQixNQUFyQixFQUFGOzs7OytCQUVQO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQVAsQ0FBRjs7OztnQ0FDQztBQUFFLGFBQU8sS0FBSyxRQUFMLENBQWMsTUFBZCxFQUFQLENBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FlQyxNQUFNO0FBQUUsYUFBTyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQVAsQ0FBRjs7OztpQ0FDTixNQUFNLE9BQU87QUFBRSxXQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5C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QUFJLElBQUksQ0FBSixFQUFPLElBQUksaUJBQUosRUFBdUIsR0FBdkMsRUFBNEM7QUFDMUMsUUFBSSxhQUFhLFlBQVksQ0FBWixDQUFiO1FBQ0EsV0FBVyxFQUFFLFVBQUYsQ0FBWDtRQUNBLFVBQVUsU0FBUyxJQUFULENBQWMsU0FBZCxDQUFWLENBSHNDOztBQUsxQyxRQUFJLE9BQUosRUFBYTtBQUNYLGVBQVMsSUFBVCxDQUFjLE9BQWQsRUFEVztLQUFiO0dBTEY7O0FBVUEsU0FBTyxRQUFQLENBZDRDO0NBQTlDOztBQWlCQSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUCxDQUFGO0NBQXRCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5cbi8vIHZhciBCb3VuZHMgPSByZXF1aXJlKCcuL2JvdW5kcycpO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPciRFbGVtZW50KSB7XG4gICAgdGhpcy4kZWxlbWVudCA9ICRlbGVtZW50KHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ2VsZW1lbnQnLCB0aGlzKTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHZhciBjbG9uZWRFbGVtZW50ID0gRWxlbWVudC5jbG9uZSh0aGlzLiRlbGVtZW50KTtcblxuICAgIHJldHVybiBjbG9uZWRFbGVtZW50O1xuICB9XG5cbiAgc2hvdygpIHsgdGhpcy4kZWxlbWVudC5zaG93KCk7IH1cbiAgaGlkZSgpIHsgdGhpcy4kZWxlbWVudC5oaWRlKCk7IH1cbiAgZW5hYmxlKCkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IH1cbiAgZGlzYWJsZSgpIHsgdGhpcy4kZWxlbWVudC5hdHRyKCdkaXNhYmxlZCcsIHRydWUpOyB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHsgdGhpcy4kZWxlbWVudC53aWR0aCh3aWR0aCk7IH1cbiAgc2V0SGVpZ2h0KGhlaWdodCkgeyB0aGlzLiRlbGVtZW50LmhlaWdodChoZWlnaHQpOyB9XG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLiRlbGVtZW50LndpZHRoKCk7IH1cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy4kZWxlbWVudC5oZWlnaHQoKTsgfVxuXG4gIC8vIGdldEJvdW5kcygpIHtcbiAgLy8gICB2YXIgJG9mZnNldCA9IHRoaXMuJGVsZW1lbnQub2Zmc2V0KCksXG4gIC8vICAgICAgIHRvcCA9ICRvZmZzZXQudG9wLCAgLy8vXG4gIC8vICAgICAgIGxlZnQgPSAkb2Zmc2V0LmxlZnQsICAvLy9cbiAgLy8gICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gIC8vICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCksXG4gIC8vICAgICAgIGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgLy8gICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gIC8vICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gYm91bmRzO1xuICAvLyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuJGVsZW1lbnQuYXR0cihuYW1lKTsgfVxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy4kZWxlbWVudC5hdHRyKG5hbWUsIHZhbHVlKTsgfVxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHIobmFtZSk7IH1cblxuICBwcmVwZW5kQmVmb3JlKGVsZW1lbnQpIHsgdGhpcy4kZWxlbWVudC5iZWZvcmUoZWxlbWVudC4kZWxlbWVudCk7IH1cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LmFmdGVyKGVsZW1lbnQuJGVsZW1lbnQpOyB9XG4gIHByZXBlbmQoZWxlbWVudCkgeyB0aGlzLiRlbGVtZW50LnByZXBlbmQoZWxlbWVudC4kZWxlbWVudCk7IH1cblxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgICAgdGhpcy4kZWxlbWVudC5hcHBlbmQoc3RyaW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50T3JTdHJpbmcsICAvLy9cbiAgICAgICAgICAkZWxlbWVudCA9IGVsZW1lbnQuJGVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuJGVsZW1lbnQuYXBwZW5kKCRlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlKCk7IH1cbiAgZGV0YWNoKCkgeyB0aGlzLiRlbGVtZW50LmRldGFjaCgpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZSk7IH1cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTsgfVxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpOyB9XG4gIHJlbW92ZUNsYXNzZXMoKSB7IHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3MoKTsgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lmh0bWwoaHRtbClcbiAgICB9IGVsc2Uge1xuICAgICAgaHRtbCA9IHRoaXMuJGVsZW1lbnQuaHRtbCgpO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgcHJvcGVydHlOYW1lID0gY3NzO1xuXG4gICAgICBjc3MgPSB0aGlzLiRlbGVtZW50LmNzcyhwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbGVtZW50LmNzcyhjc3MpO1xuICAgIH1cbiAgfVxuXG4gIGRhdGEoKSB7XG4gICAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGtleSA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgdmFsdWU7XG4gICAgXG4gICAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgICAgdmFsdWUgPSB0aGlzLiRlbGVtZW50LmRhdGEoa2V5KTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIFxuICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRFbGVtZW50cyhzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5maW5kKHNlbGVjdG9yKSxcbiAgICAgICAgZm91bmRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGZvdW5kRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZvdW5kRWxlbWVudHM7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudHMgPSB0aGlzLiRlbGVtZW50LmNoaWxkcmVuKHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBwYXJlbnRFbGVtZW50KHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnQoc2VsZWN0b3IpLFxuICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpLFxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbiAgfVxuXG4gIHBhcmVudEVsZW1lbnRzKHNlbGVjdG9yKSB7XG4gICAgdmFyIHBhcmVudERPTUVsZW1lbnRzID0gdGhpcy4kZWxlbWVudC5wYXJlbnRzKHNlbGVjdG9yKSxcbiAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcGFyZW50RWxlbWVudHM7XG4gIH1cblxuICBvbihldmVudHMsIGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbihldmVudHMsIGhhbmRsZXIpOyB9XG5cbiAgb25Nb3VzZVVwKGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2V1cCcsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxuICBvbk1vdXNlRG93bihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlZG93bicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxuICBvbk1vdXNlT3ZlcihoYW5kbGVyKSB7IHRoaXMuJGVsZW1lbnQub24oJ21vdXNlb3ZlcicsIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIpIHsgdGhpcy4kZWxlbWVudC5vbignbW91c2VvdXQnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cbiAgb25Nb3VzZU1vdmUoaGFuZGxlcikgeyB0aGlzLiRlbGVtZW50Lm9uKCdtb3VzZW1vdmUnLCByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSk7IH1cblxuICBzYW1lQXMoZWxlbWVudCkge1xuICAgIHJldHVybiB0aGlzLiRlbGVtZW50ID09PSBlbGVtZW50LiRlbGVtZW50OyAgLy8vXG4gIH1cbn1cblxuRWxlbWVudC5mcm9tSFRNTCA9IGZ1bmN0aW9uKGh0bWwpIHtcbiAgdmFyIENsYXNzLFxuICAgICAgYXJncztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIENsYXNzID0gRWxlbWVudDtcbiAgICBhcmdzID0gW107XG4gIH0gZWxzZSB7XG4gICAgQ2xhc3MgPSBhcmd1bWVudHNbMF07XG4gICAgaHRtbCA9IGFyZ3VtZW50c1sxXTtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgfVxuXG4gIHZhciAkaHRtbEVsZW1lbnQgPSAkKGh0bWwpO1xuXG4gIHJldHVybiBpbnN0YW5jZShDbGFzcywgJGh0bWxFbGVtZW50LCBhcmdzKTtcbn07XG5cbkVsZW1lbnQuY2xvbmUgPSBmdW5jdGlvbihzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyIENsYXNzLFxuICAgICAgYXJncztcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIENsYXNzID0gRWxlbWVudDtcbiAgICBhcmdzID0gW107XG4gIH0gZWxzZSB7XG4gICAgQ2xhc3MgPSBhcmd1bWVudHNbMF07XG4gICAgc2VsZWN0b3JPciRFbGVtZW50ID0gYXJndW1lbnRzWzFdO1xuICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICB9XG5cbiAgdmFyICRjbG9uZWRFbGVtZW50ID0gJGVsZW1lbnQoc2VsZWN0b3JPciRFbGVtZW50KS5jbG9uZSgpO1xuXG4gIHJldHVybiBpbnN0YW5jZShDbGFzcywgJGNsb25lZEVsZW1lbnQsIGFyZ3MpO1xufTtcblxuRWxlbWVudC5MRUZUX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50Lk1JRERMRV9NT1VTRV9CVVRUT04gPSAyO1xuRWxlbWVudC5SSUdIVF9NT1VTRV9CVVRUT04gPSAzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LndoaWNoOyAvLy9cblxuICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuICB9O1xufVxuXG5mdW5jdGlvbiAkZWxlbWVudChzZWxlY3Rvck9yJEVsZW1lbnQpIHtcbiAgdmFyICRlbGVtZW50O1xuXG4gIGlmIChzZWxlY3Rvck9yJEVsZW1lbnQgaW5zdGFuY2VvZiAkKSB7XG4gICAgJGVsZW1lbnQgPSBzZWxlY3Rvck9yJEVsZW1lbnQ7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yT3IkRWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAkZWxlbWVudCA9ICQoc2VsZWN0b3JPciRFbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFyZW50U2VsZWN0b3JPciRFbGVtZW50ID0gc2VsZWN0b3JPciRFbGVtZW50WzBdLCAvLy9cbiAgICAgICAgY2hpbGRTZWxlY3RvciA9IHNlbGVjdG9yT3IkRWxlbWVudFsxXSwgIC8vL1xuICAgICAgICBwYXJlbnQkRWxlbWVudCA9IChwYXJlbnRTZWxlY3Rvck9yJEVsZW1lbnQgaW5zdGFuY2VvZiAkKSA/IHBhcmVudFNlbGVjdG9yT3IkRWxlbWVudCA6ICQocGFyZW50U2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgICRlbGVtZW50ID0gcGFyZW50JEVsZW1lbnQuZmluZChjaGlsZFNlbGVjdG9yKTtcbiAgfVxuXG4gIHJldHVybiAkZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2UoQ2xhc3MsICRlbGVtZW50LCBhcmdzKSB7XG4gIGFyZ3MudW5zaGlmdCgkZWxlbWVudCk7XG5cbiAgYXJncy51bnNoaWZ0KG51bGwpOyAvLy9cblxuICB2YXIgaW5zdGFuY2UgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCBhcmdzKSk7ICAvLy9cblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIHZhciBlbGVtZW50cyA9IFtdLFxuICAgICAgZG9tRWxlbWVudHNMZW5ndGggPSBkb21FbGVtZW50cy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21FbGVtZW50c0xlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb21FbGVtZW50c1tpXSxcbiAgICAgICAgJGVsZW1lbnQgPSAkKGRvbUVsZW1lbnQpLFxuICAgICAgICBlbGVtZW50ID0gJGVsZW1lbnQuZGF0YSgnZWxlbWVudCcpO1xuXG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==
