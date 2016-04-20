'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    var getInitialState = reactClass.getGetInitialState(),
        initialState = getInitialState();

    this.state = initialState; ///

    this.jsxElement = undefined; ///

    var children = this.childJSXElements,
        ///
    props = Object.assign({}, this.properties, { children: children }),
        state = this.state,
        displayName = reactClass.getDisplayName();

    this.instance = Object.assign({
      props: props,
      state: state,
      displayName: displayName
    });

    this.render();
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.reactClass.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      var oldJSXElement = this.jsxElement;

      this.render();

      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactClass.render.apply(this.instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;