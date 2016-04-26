'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;
    this.context = undefined;

    this.children = props.children; ///
  }

  _createClass(ReactElement, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remove();

      this.remount();
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling, context) {
      this.parent = parent;
      this.sibling = sibling;
      this.context = context;

      var childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });

      this.componentDidMount(context);

      return this;
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
      var context = this.context,
          childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render(context);

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.children.forEach(function (child) {
        child.remove();
      });
    }
  }, {
    key: 'prepend',
    value: function prepend(child) {
      return false;
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(sibling) {
      return false;
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;