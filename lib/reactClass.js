'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXElement = require('./jsxElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  _createClass(ReactClass, [{
    key: 'getRender',
    value: function getRender() {
      return this.render;
    }
  }, {
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }, {
    key: 'getGetInitialState',
    value: function getGetInitialState() {
      return this.getInitialState;
    }
  }, {
    key: 'getComponentDidMount',
    value: function getComponentDidMount() {
      return this.componentDidMount;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'] || defaultRender,
          displayName = properties['displayName'] || defaultDisplayName,
          getInitialState = properties['getInitialState'] || defaultGetInitialState,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,
      ///
  elementName = this.displayName,
      ///
  childJSXElements = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXElement(elementName, properties, childJSXElements);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {}