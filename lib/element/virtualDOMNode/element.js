'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement() {
    _classCallCheck(this, VirtualDOMElement);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).apply(this, arguments));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var _this2 = this;

      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = _this2.props[name];

        if (false) {} else if (_this2.isHandlerName(name)) {
          _this2.setHandler(name, value);
        } else if (_this2.isAttributeName(name)) {
          _this2.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(_this2.domElement);
        }
      });
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }, {
    key: 'isHandlerName',
    value: function isHandlerName(name) {
      return name.match(/^on/);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

module.exports = VirtualDOMElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwidmlydHVhbERPTUVsZW1lbnRNaXhpbnMiLCJWaXJ0dWFsRE9NRWxlbWVudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIm1vdW50IiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJzZXRIYW5kbGVyIiwiaXNBdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJkb21FbGVtZW50IiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hdGNoIiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxtQkFBUixDQUF2QjtBQUFBLElBQ01DLDBCQUEwQkQsUUFBUSxnQ0FBUixDQURoQzs7SUFHTUUsaUI7Ozs7Ozs7Ozs7OzBCQUNFQyxNLEVBQVFDLFMsRUFBV0MsTyxFQUFTO0FBQ2hDLGtJQUFZRixNQUFaLEVBQW9CQyxTQUFwQjs7QUFFQSxVQUFNRSxjQUFjLElBQXBCO0FBQUEsVUFDTUMsaUJBQWlCLElBRHZCO0FBQUEsVUFFTUMsZUFBZUgsT0FGckI7QUFBQSxVQUdNSSxXQUFXLEtBQUtDLFdBQUwsRUFIakI7O0FBS0FELGVBQVNFLE9BQVQsQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLE1BQU1DLEtBQU4sQ0FBWVAsV0FBWixFQUF5QkMsY0FBekIsRUFBeUNDLFlBQXpDLENBQVg7QUFBQSxPQUFqQjs7QUFFQSxXQUFLTSxVQUFMO0FBQ0Q7Ozs0QkFFT1QsTyxFQUFTO0FBQ2YsVUFBTUcsZUFBZUgsT0FBckI7QUFBQSxVQUNNSSxXQUFXLEtBQUtDLFdBQUwsRUFEakI7O0FBR0FELGVBQVNFLE9BQVQsQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLE1BQU1HLE9BQU4sQ0FBY1AsWUFBZCxDQUFYO0FBQUEsT0FBakI7O0FBRUE7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBTVEsUUFBUUMsT0FBT0MsSUFBUCxDQUFZLEtBQUtDLEtBQWpCLENBQWQ7O0FBRUFILFlBQU1MLE9BQU4sQ0FBYyxVQUFDUyxJQUFELEVBQVU7QUFDdEIsWUFBTUMsUUFBUSxPQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZDs7QUFFQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLE9BQUtFLGFBQUwsQ0FBbUJGLElBQW5CLENBQUosRUFBOEI7QUFDbkMsaUJBQUtHLFVBQUwsQ0FBZ0JILElBQWhCLEVBQXNCQyxLQUF0QjtBQUNELFNBRk0sTUFFQSxJQUFJLE9BQUtHLGVBQUwsQ0FBcUJKLElBQXJCLENBQUosRUFBZ0M7QUFDckMsaUJBQUtLLFlBQUwsQ0FBa0JMLElBQWxCLEVBQXdCQyxLQUF4QjtBQUNELFNBRk0sTUFFQSxJQUFJRCxTQUFTLEtBQWIsRUFBb0I7QUFDekIsY0FBTU0sV0FBV0wsS0FBakIsQ0FEeUIsQ0FDRDs7QUFFeEJLLG1CQUFTLE9BQUtDLFVBQWQ7QUFDRDtBQUNGLE9BZEQ7QUFlRDs7OytCQUVVUCxJLEVBQU1DLEssRUFBTztBQUN0QixVQUFNTyxZQUFZUixLQUFLUyxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQWxCO0FBQUEsVUFBZ0Q7QUFDMUNDLGdCQUFVVixLQURoQixDQURzQixDQUVFOztBQUV4QixXQUFLTSxVQUFMLENBQWdCSyxnQkFBaEIsQ0FBaUNKLFNBQWpDLEVBQTZDRyxPQUE3QztBQUNEOzs7a0NBRVlYLEksRUFBTTtBQUNuQixhQUFPQSxLQUFLYSxLQUFMLENBQVcsS0FBWCxDQUFQO0FBQ0E7Ozs7RUFwRDhCbEMsYzs7QUF1RGhDa0IsT0FBT2lCLE1BQVAsQ0FBY2hDLGtCQUFrQmlDLFNBQWhDLEVBQTJDbEMsdUJBQTNDOztBQUVBbUMsT0FBT0MsT0FBUCxHQUFpQm5DLGlCQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBWaXJ0dWFsRE9NTm9kZSA9IHJlcXVpcmUoJy4uL3ZpcnR1YWxET01Ob2RlJyksXG4gICAgICB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyA9IHJlcXVpcmUoJy4uLy4uL21peGlucy92aXJ0dWFsRE9NRWxlbWVudCcpO1xuXG5jbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG5cbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQsXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRIYW5kbGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lID09PSAncmVmJykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcblx0fVxufVxuXG5PYmplY3QuYXNzaWduKFZpcnR1YWxET01FbGVtZW50LnByb3RvdHlwZSwgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxET01FbGVtZW50O1xuXG4iXX0=