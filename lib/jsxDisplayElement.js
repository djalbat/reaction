'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXDOMElement = require('./jsxDOMElement');

var JSXDisplayElement = function (_JSXDOMElement) {
  _inherits(JSXDisplayElement, _JSXDOMElement);

  function JSXDisplayElement(refOrDisplayName, properties, children) {
    _classCallCheck(this, JSXDisplayElement);

    var ref;

    if (typeof refOrDisplayName === 'string') {
      var displayName = refOrDisplayName; ///

      ref = document.createElement(displayName);
    } else {
      ref = refOrDisplayName; ///
    }

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXDisplayElement).call(this, ref));

    _this.addPropertiesToDOMElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(_this));
    return _this;
  }

  _createClass(JSXDisplayElement, [{
    key: 'addPropertiesToDOMElement',
    value: function addPropertiesToDOMElement(properties) {
      if (properties === null) {
        return;
      }

      var ref = this.getRef(),
          propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var onevent = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          ref[onevent] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue; ///

          ref.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName; ///

          var keys = Object.keys(propertyValue); ///
          keys.forEach(function (key) {
            var value = propertyValue[key];

            ref[attributeName][key] = value;
          });
        } else {
          ///
        }
      });
    }
  }], [{
    key: 'fromRef',
    value: function fromRef(ref) {
      var properties = null,
          children = [];

      return new JSXDisplayElement(ref, properties, children);
    }
  }]);

  return JSXDisplayElement;
}(JSXDOMElement);

module.exports = JSXDisplayElement;

function attributeNameFromPropertyName(propertyName) {
  switch (propertyName) {
    case 'className':
      return 'class';

    case 'htmlFor':
      return 'for';
  }

  return propertyName; ///
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}