'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    this.props = props;

    this.parentDOMElement = undefined;
    this.siblingDOMElement = undefined;

    this.context = undefined;

    this.children = props.children; ///
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parentDOMElement, siblingDOMElement, context) {
      this.parentDOMElement = parentDOMElement;
      this.siblingDOMElement = siblingDOMElement;

      this.context = context;

      this.children = toArray(this.render());

      var childParentDOMElement = parentDOMElement,
          childSiblingDOMElement = siblingDOMElement,
          childContext = this.getChildContext() || context;

      reverse(this.children).forEach(function (child) {
        childSiblingDOMElement = child.mount(childParentDOMElement, childSiblingDOMElement, childContext);
      });

      this.componentDidMount(context);

      return this.getDOMElement();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.children.forEach(function (child) {
        child.remove();
      });

      this.children = toArray(this.render());

      var childParentDOMElement = this.parentDOMElement,
          childSiblingDOMElement = this.siblingDOMElement,
          childContext = this.getChildContext() || this.context;

      reverse(this.children).forEach(function (child) {
        childSiblingDOMElement = child.mount(childParentDOMElement, childSiblingDOMElement, childContext);
      }.bind(this));
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.children.forEach(function (child) {
        child.remove();
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      var domElement = null;

      this.children.some(function (child) {
        var childDOMElement = child.getDOMElement();

        if (childDOMElement !== null) {
          domElement = childDOMElement;

          return true;
        } else {
          return false;
        }
      });

      return domElement;
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;

function reverse(array) {
  return array.slice().reverse();
}
function toArray(arrayOrElement) {
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}