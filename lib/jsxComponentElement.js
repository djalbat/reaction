'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXComponentElement = function () {
  function JSXComponentElement(reactComponent, properties, childJSXElements) {
    _classCallCheck(this, JSXComponentElement);

    this.reactComponent = reactComponent;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined; ///

    var children = this.childJSXElements,
        ///
    props = Object.assign({}, this.properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.render();
  }

  _createClass(JSXComponentElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldJSXElement = this.jsxElement;

      this.render();

      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      this.jsxElement.appendAfter(jsxElement);
    }
  }]);

  return JSXComponentElement;
}();

module.exports = JSXComponentElement;