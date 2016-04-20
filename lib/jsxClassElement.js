'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXElement = require('./jsxElement');

var JSXClassElement = function (_JSXElement) {
  _inherits(JSXClassElement, _JSXElement);

  function JSXClassElement(reactClass, properties, children) {
    _classCallCheck(this, JSXClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXClassElement).call(this, properties, children));

    _this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    _this.instance = Object.assign(_this.instance, {
      displayName: displayName,
      state: state
    });

    _this.render();
    return _this;
  }

  _createClass(JSXClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance = Object.assign(this.instance, {
        state: state
      });

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }]);

  return JSXClassElement;
}(JSXElement);

module.exports = JSXClassElement;