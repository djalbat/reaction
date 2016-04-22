'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
  }

  _createClass(ReactClass, [{
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'] || defaultRender,
          displayName = properties['displayName'] || defaultDisplayName,
          getInitialState = properties['getInitialState'] || defaultGetInitialState,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillunmount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount, componentWillUnmount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,
      ///
  displayName = this.displayName,
      ///
  children = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new DisplayElement(displayName, properties, children);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  return {};
}

function defaultComponentDidMount() {}

function defaultComponentWillunmount() {}