'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayNameOrDOMElement, properties, children) {
    _classCallCheck(this, DisplayElement);

    var domElement = typeof displayNameOrDOMElement === 'string' ? document.createElement(displayNameOrDOMElement) : displayNameOrDOMElement;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.properties = properties;

    _this.children = children;
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent);

      this.children.forEach(function (child) {
        child.mount(this, context);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remount', this).call(this, previousSibling);

      this.children.forEach(function (child) {
        child.mount(this, context);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remove',
    value: function remove() {
      ///

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remove', this).call(this);
    }
  }, {
    key: 'applyProperties',
    value: function applyProperties() {
      if (this.properties === null) {
        return;
      }

      var domElement = this.getDOMElement(),
          propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.properties[propertyName];

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              ref = domElement;

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var handlerName = lowercase(propertyName),
              handler = propertyValue;

          domElement[handlerName] = handler;
        } else {
          var attributeName = propertyName,
              attributeValue = propertyValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9kaXNwbGF5RWxlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSx1QkFBWixFQUFxQyxVQUFyQyxFQUFpRCxRQUFqRCxFQUEyRDswQkFEdkQsZ0JBQ3VEOztBQUN6RCxRQUFJLGFBQWEsT0FBUSx1QkFBUCxLQUFtQyxRQUFuQyxHQUNDLFNBQVMsYUFBVCxDQUF1Qix1QkFBdkIsQ0FERixHQUVJLHVCQUZKLENBRHdDOzt1RUFEdkQsMkJBTUksYUFMbUQ7O0FBT3pELFVBQUssVUFBTCxHQUFrQixVQUFsQixDQVB5RDs7QUFTekQsVUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBVHlEOztHQUEzRDs7ZUFESTs7MEJBYUUsUUFBUSxTQUFTO0FBQ3JCLGlDQWRFLHFEQWNVLE9BQVosQ0FEcUI7O0FBR3JCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLElBQVosRUFBa0IsT0FBbEIsRUFEb0M7T0FBaEIsQ0FFcEIsSUFGb0IsQ0FFZixJQUZlLENBQXRCLEVBSHFCOztBQU9yQixXQUFLLGVBQUwsR0FQcUI7Ozs7NEJBVWYsaUJBQWlCLFNBQVM7QUFDaEMsaUNBeEJFLHVEQXdCWSxnQkFBZCxDQURnQzs7QUFHaEMsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxLQUFOLENBQVksSUFBWixFQUFrQixPQUFsQixFQURvQztPQUFoQixDQUVwQixJQUZvQixDQUVmLElBRmUsQ0FBdEIsRUFIZ0M7O0FBT2hDLFdBQUssZUFBTCxHQVBnQzs7Ozs2QkFVekI7OztBQUdQLGlDQXBDRSxxREFvQ0YsQ0FITzs7OztzQ0FNUztBQUNoQixVQUFJLEtBQUssVUFBTCxLQUFvQixJQUFwQixFQUEwQjtBQUM1QixlQUQ0QjtPQUE5Qjs7QUFJQSxVQUFJLGFBQWEsS0FBSyxhQUFMLEVBQWI7VUFDQSxnQkFBZ0IsT0FBTyxJQUFQLENBQVksS0FBSyxVQUFMLENBQTVCLENBTlk7O0FBUWhCLG9CQUFjLE9BQWQsQ0FBc0IsVUFBVSxZQUFWLEVBQXdCO0FBQzVDLFlBQUksZ0JBQWdCLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUFoQixDQUR3Qzs7QUFHNUMsWUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksaUJBQWlCLEtBQWpCLEVBQXdCO0FBQ2pDLGNBQUksV0FBVyxhQUFYO2NBQ0EsTUFBTSxVQUFOLENBRjZCOztBQUlqQyxtQkFBUyxHQUFULEVBSmlDO1NBQTVCLE1BS0EsSUFBSSxXQUFXLFlBQVgsRUFBeUIsSUFBekIsQ0FBSixFQUFvQztBQUN6QyxjQUFJLGNBQWMsVUFBVSxZQUFWLENBQWQ7Y0FDQSxVQUFVLGFBQVYsQ0FGcUM7O0FBSXpDLHFCQUFXLFdBQVgsSUFBMEIsT0FBMUIsQ0FKeUM7U0FBcEMsTUFLQTtBQUNMLGNBQUksZ0JBQWdCLFlBQWhCO2NBQ0EsaUJBQWlCLGFBQWpCLENBRkM7O0FBSUwsZUFBSyxZQUFMLENBQWtCLGFBQWxCLEVBQWlDLGNBQWpDLEVBSks7U0FMQTtPQVZhLENBcUJwQixJQXJCb0IsQ0FxQmYsSUFyQmUsQ0FBdEIsRUFSZ0I7Ozs7U0F2Q2Q7RUFBdUI7O0FBd0U3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7O0FBRUEsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3pCLFNBQU8sT0FBTyxXQUFQLEVBQVAsQ0FEeUI7Q0FBM0I7O0FBSUEsU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDLE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLGVBQU4sQ0FBcEI7TUFDQSxVQUFVLE9BQU8sS0FBUCxDQUFhLE1BQWIsQ0FBVixDQUZ1Qzs7QUFJM0MsU0FBTyxDQUFDLENBQUMsT0FBRDtBQUptQyxDQUE3QyIsImZpbGUiOiJkaXNwbGF5RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWVPckRPTUVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSAodHlwZW9mIGRpc3BsYXlOYW1lT3JET01FbGVtZW50ID09PSAnc3RyaW5nJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lT3JET01FbGVtZW50O1xuICAgIFxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuICAgIFxuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzLCBjb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hcHBseVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHJlbW91bnQocHJldmlvdXNTaWJsaW5nLCBjb250ZXh0KSB7XG4gICAgc3VwZXIucmVtb3VudChwcmV2aW91c1NpYmxpbmcpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzLCBjb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hcHBseVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICAvLy9cbiAgICBcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcGVydGllcygpIHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLFxuICAgICAgICAgICAgcmVmID0gZG9tRWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHJlZilcbiAgICAgIH0gZWxzZSBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgZG9tRWxlbWVudFtoYW5kbGVyTmFtZV0gPSBoYW5kbGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIl19