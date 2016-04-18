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

    this.parentJSXElement = undefined; ///
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.parentJSXElement = parentJSXElement;

      this.render();

      this.remount();

      this.componentDidMount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.jsxElement.remove();

      this.render();

      this.remount();
    }
  }, {
    key: 'render',
    value: function render() {
      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          displayName = reactClass.getDisplayName(),
          instance = this.instance();

      instance.displayName = displayName;

      this.jsxElement = render.apply(instance);
    }
  }, {
    key: 'remount',
    value: function remount() {
      this.jsxElement.mount(this.parentJSXElement);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var reactClass = this.reactClass,
          componentDidMount = reactClass.getComponentDidMount(),
          instance = this.instance();

      componentDidMount.apply(instance);
    }
  }, {
    key: 'instance',
    value: function instance() {
      var props = this.properties || {},
          ///
      state = this.state,
          instance = {
        props: props,
        state: state
      };

      props.children = this.childJSXElements; ///;

      return instance;
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;