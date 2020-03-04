'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var VirtualDOMNode = require('../virtualDOMNode'),
    virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

var VirtualDOMElement = /*#__PURE__*/function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement() {
    _classCallCheck(this, VirtualDOMElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMElement).apply(this, arguments));
  }

  _createClass(VirtualDOMElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      _get(_getPrototypeOf(VirtualDOMElement.prototype), "mount", this).call(this, parent, reference);

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
    key: "unmount",
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();
      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(_getPrototypeOf(VirtualDOMElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "applyProps",
    value: function applyProps() {
      var _this = this;

      var names = Object.keys(this.props);
      names.forEach(function (name) {
        var value = _this.props[name];

        if (false) {} else if (_this.isHandlerName(name)) {
          _this.setHandler(name, value);
        } else if (_this.isAttributeName(name)) {
          _this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(_this.domElement);
        }
      });
    }
  }, {
    key: "setHandler",
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }, {
    key: "isHandlerName",
    value: function isHandlerName(name) {
      return name.match(/^on/);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);
module.exports = VirtualDOMElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwidmlydHVhbERPTUVsZW1lbnRNaXhpbnMiLCJWaXJ0dWFsRE9NRWxlbWVudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJjaGlsZFBhcmVudCIsImNoaWxkUmVmZXJlbmNlIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIm1vdW50IiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJwcm9wcyIsIm5hbWUiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJzZXRIYW5kbGVyIiwiaXNBdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJkb21FbGVtZW50IiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hdGNoIiwiYXNzaWduIiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDLG1CQUFELENBQTlCO0FBQUEsSUFDTUMsdUJBQXVCLEdBQUdELE9BQU8sQ0FBQyxnQ0FBRCxDQUR2Qzs7SUFHTUUsaUI7Ozs7Ozs7Ozs7OzBCQUNFQyxNLEVBQVFDLFMsRUFBV0MsTyxFQUFTO0FBQ2hDLG1GQUFZRixNQUFaLEVBQW9CQyxTQUFwQjs7QUFFQSxVQUFNRSxXQUFXLEdBQUcsSUFBcEI7QUFBQSxVQUNNQyxjQUFjLEdBQUcsSUFEdkI7QUFBQSxVQUVNQyxZQUFZLEdBQUdILE9BRnJCO0FBQUEsVUFHTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFIakI7QUFLQUQsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVAsV0FBWixFQUF5QkMsY0FBekIsRUFBeUNDLFlBQXpDLENBQVg7QUFBQSxPQUFqQjtBQUVBLFdBQUtNLFVBQUw7QUFDRDs7OzRCQUVPVCxPLEVBQVM7QUFDZixVQUFNRyxZQUFZLEdBQUdILE9BQXJCO0FBQUEsVUFDTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFEakI7QUFHQUQsTUFBQUEsUUFBUSxDQUFDRSxPQUFULENBQWlCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNHLE9BQU4sQ0FBY1AsWUFBZCxDQUFYO0FBQUEsT0FBakI7O0FBRUE7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1gsVUFBTVEsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLQyxLQUFqQixDQUFkO0FBRUFILE1BQUFBLEtBQUssQ0FBQ0wsT0FBTixDQUFjLFVBQUNTLElBQUQsRUFBVTtBQUN0QixZQUFNQyxLQUFLLEdBQUcsS0FBSSxDQUFDRixLQUFMLENBQVdDLElBQVgsQ0FBZDs7QUFFQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLEtBQUksQ0FBQ0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBSixFQUE4QjtBQUNuQyxVQUFBLEtBQUksQ0FBQ0csVUFBTCxDQUFnQkgsSUFBaEIsRUFBc0JDLEtBQXRCO0FBQ0QsU0FGTSxNQUVBLElBQUksS0FBSSxDQUFDRyxlQUFMLENBQXFCSixJQUFyQixDQUFKLEVBQWdDO0FBQ3JDLFVBQUEsS0FBSSxDQUFDSyxZQUFMLENBQWtCTCxJQUFsQixFQUF3QkMsS0FBeEI7QUFDRCxTQUZNLE1BRUEsSUFBSUQsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDekIsY0FBTU0sUUFBUSxHQUFHTCxLQUFqQixDQUR5QixDQUNEOztBQUV4QkssVUFBQUEsUUFBUSxDQUFDLEtBQUksQ0FBQ0MsVUFBTixDQUFSO0FBQ0Q7QUFDRixPQWREO0FBZUQ7OzsrQkFFVVAsSSxFQUFNQyxLLEVBQU87QUFDdEIsVUFBTU8sU0FBUyxHQUFHUixJQUFJLENBQUNTLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsRUFBbEI7QUFBQSxVQUFnRDtBQUMxQ0MsTUFBQUEsT0FBTyxHQUFHVixLQURoQixDQURzQixDQUVFOztBQUV4QixXQUFLTSxVQUFMLENBQWdCSyxnQkFBaEIsQ0FBaUNKLFNBQWpDLEVBQTZDRyxPQUE3QztBQUNEOzs7a0NBRVlYLEksRUFBTTtBQUNuQixhQUFPQSxJQUFJLENBQUNhLEtBQUwsQ0FBVyxLQUFYLENBQVA7QUFDQTs7OztFQXBEOEJsQyxjOztBQXVEaENrQixNQUFNLENBQUNpQixNQUFQLENBQWNoQyxpQkFBaUIsQ0FBQ2lDLFNBQWhDLEVBQTJDbEMsdUJBQTNDO0FBRUFtQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQyxpQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKSxcbiAgICAgIHZpcnR1YWxET01FbGVtZW50TWl4aW5zID0gcmVxdWlyZSgnLi4vLi4vbWl4aW5zL3ZpcnR1YWxET01FbGVtZW50Jyk7XG5cbmNsYXNzIFZpcnR1YWxET01FbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTU5vZGUge1xuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEhhbmRsZXIobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgIGhhbmRsZXIpO1xuICB9XG5cblx0aXNIYW5kbGVyTmFtZShuYW1lKSB7XG5cdFx0cmV0dXJuIG5hbWUubWF0Y2goL15vbi8pO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlydHVhbERPTUVsZW1lbnQucHJvdG90eXBlLCB2aXJ0dWFsRE9NRWxlbWVudE1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbiJdfQ==