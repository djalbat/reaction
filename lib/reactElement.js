'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactElement).call(this, domElement, props));

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = toArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount(context);
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

      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext() || this.context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
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
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return parent.childReference(child);
    }
  }]);

  return ReactElement;
}(Element);

module.exports = ReactElement;

function toArray(arrayOrElement) {
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}