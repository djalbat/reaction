"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Element = require("../element"),
    arrayUtilities = require("../utilities/array"),
    reactElementMixins = require("../mixins/reactElement");

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = /*#__PURE__*/function (_Element) {
  _inherits(ReactElement, _Element);

  var _super = _createSuper(ReactElement);

  function ReactElement(props) {
    var _this;

    _classCallCheck(this, ReactElement);

    _this = _super.call(this, props);
    _this.state = undefined; ///

    _this.context = undefined; ///

    return _this;
  }

  _createClass(ReactElement, [{
    key: "mount",
    value: function mount(parent, reference, context) {
      var _this2 = this;

      this.context = context;
      var childContext = this.getChildContext(context),
          children = guarantee(this.render());

      _get(_getPrototypeOf(ReactElement.prototype), "mount", this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;
        child.mount(childParent, childReference, childContext);
      });
      this.componentDidMount();
    }
  }, {
    key: "unmount",
    value: function unmount(context) {
      this.context = context;
      this.componentWillUnmount();
      var childContext = this.getChildContext(context),
          children = this.getChildren();
      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(_getPrototypeOf(ReactElement.prototype), "unmount", this).call(this);
    }
  }, {
    key: "remount",
    value: function remount(update) {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context);
      this.children.forEach(function (child) {
        return child.unmount(childContext);
      });
      this.children = guarantee(this.render(update));
      this.children.forEach(function (child) {
        return child.mount(childParent, childReference, childContext);
      });
    }
  }, {
    key: "getDOMElement",
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.state;
    }
  }, {
    key: "setInitialState",
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: "setState",
    value: function setState(state) {
      this.state = state;
      this.remount();
    }
  }, {
    key: "updateState",
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);
      this.remount();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: "getChildReference",
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this; ///

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

Object.assign(ReactElement.prototype, reactElementMixins);
module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent; ///

    parent = parent.getParent();
    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = remaining(child, children);
  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild; ///
      } else {
        child = null;
        parent = remainingChild; ///

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwidW5tb3VudCIsInVwZGF0ZSIsImdldENoaWxkUmVmZXJlbmNlIiwiaW5pdGlhbFN0YXRlIiwicmVtb3VudCIsIm5ld1N0YXRlIiwib2xkU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRQYXJlbnQiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXZCO0FBQUEsSUFDTUMsY0FBYyxHQUFHRCxPQUFPLENBQUMsb0JBQUQsQ0FEOUI7QUFBQSxJQUVNRSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDLHdCQUFELENBRmxDOztJQUlRRyxTLEdBQXlCRixjLENBQXpCRSxTO0lBQVdDLFMsR0FBY0gsYyxDQUFkRyxTOztJQUViQyxZOzs7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhQyxTQUFiLENBSGlCLENBR087O0FBRXhCLFVBQUtDLE9BQUwsR0FBZUQsU0FBZixDQUxpQixDQUtTOztBQUxUO0FBTWxCOzs7OzBCQUVLRSxNLEVBQVFDLFMsRUFBV0YsTyxFQUFTO0FBQUE7O0FBQ2hDLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFVBQU1HLFlBQVksR0FBRyxLQUFLQyxlQUFMLENBQXFCSixPQUFyQixDQUFyQjtBQUFBLFVBQ01LLFFBQVEsR0FBR1gsU0FBUyxDQUFDLEtBQUtZLE1BQUwsRUFBRCxDQUQxQjs7QUFHQSw4RUFBWUwsTUFBWixFQUFvQkksUUFBcEI7O0FBRUFBLE1BQUFBLFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFDQyxLQUFELEVBQVc7QUFDMUIsWUFBTUMsV0FBVyxHQUFHLE1BQXBCO0FBQUEsWUFDTUMsY0FBYyxHQUFHUixTQUR2QjtBQUdBTSxRQUFBQSxLQUFLLENBQUNHLEtBQU4sQ0FBWUYsV0FBWixFQUF5QkMsY0FBekIsRUFBeUNQLFlBQXpDO0FBQ0QsT0FMRDtBQU9BLFdBQUtTLGlCQUFMO0FBQ0Q7Ozs0QkFFT1osTyxFQUFTO0FBQ2YsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBRUEsV0FBS2Esb0JBQUw7QUFFQSxVQUFNVixZQUFZLEdBQUcsS0FBS0MsZUFBTCxDQUFxQkosT0FBckIsQ0FBckI7QUFBQSxVQUNNSyxRQUFRLEdBQUcsS0FBS1MsV0FBTCxFQURqQjtBQUdBVCxNQUFBQSxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ08sT0FBTixDQUFjWixZQUFkLENBQVg7QUFBQSxPQUFqQjs7QUFFQTtBQUNEOzs7NEJBRU9hLE0sRUFBUTtBQUNkLFVBQU1QLFdBQVcsR0FBRyxJQUFwQjtBQUFBLFVBQ01DLGNBQWMsR0FBRyxLQUFLTyxpQkFBTCxFQUR2QjtBQUFBLFVBRU1kLFlBQVksR0FBRyxLQUFLQyxlQUFMLENBQXFCLEtBQUtKLE9BQTFCLENBRnJCO0FBSUEsV0FBS0ssUUFBTCxDQUFjRSxPQUFkLENBQXNCLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNPLE9BQU4sQ0FBY1osWUFBZCxDQUFYO0FBQUEsT0FBdEI7QUFFQSxXQUFLRSxRQUFMLEdBQWdCWCxTQUFTLENBQUMsS0FBS1ksTUFBTCxDQUFZVSxNQUFaLENBQUQsQ0FBekI7QUFFQSxXQUFLWCxRQUFMLENBQWNFLE9BQWQsQ0FBc0IsVUFBQ0MsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0csS0FBTixDQUFZRixXQUFaLEVBQXlCQyxjQUF6QixFQUF5Q1AsWUFBekMsQ0FBWDtBQUFBLE9BQXRCO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUtMLEtBQVo7QUFDRDs7O29DQUVlb0IsWSxFQUFjO0FBQzVCLFdBQUtwQixLQUFMLEdBQWFvQixZQUFiLENBRDRCLENBQ0E7QUFDN0I7Ozs2QkFFUXBCLEssRUFBTztBQUNkLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUVBLFdBQUtxQixPQUFMO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVO0FBQ3BCLFVBQU1DLFFBQVEsR0FBRyxLQUFLdkIsS0FBdEIsQ0FEb0IsQ0FDVTs7QUFFOUIsV0FBS0EsS0FBTCxHQUFhd0IsTUFBTSxDQUFDQyxNQUFQLENBQWNGLFFBQWQsRUFBd0JELFFBQXhCLENBQWI7QUFFQSxXQUFLRCxPQUFMO0FBQ0Q7OztnQ0FFV0gsTSxFQUFRO0FBQ2xCLFdBQUtHLE9BQUwsQ0FBYUgsTUFBYjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1mLE1BQU0sR0FBRyxLQUFLdUIsU0FBTCxFQUFmO0FBQUEsVUFDTWhCLEtBQUssR0FBRyxJQURkLENBRGtCLENBRUU7O0FBRXBCLGFBQU9OLFNBQVMsQ0FBQ0QsTUFBRCxFQUFTTyxLQUFULENBQWhCO0FBQ0Q7Ozs7RUF2RndCbEIsTzs7QUEwRjNCZ0MsTUFBTSxDQUFDQyxNQUFQLENBQWMzQixZQUFZLENBQUM2QixTQUEzQixFQUFzQ2hDLGtCQUF0QztBQUVBaUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCL0IsWUFBakI7O0FBRUEsU0FBU00sU0FBVCxDQUFtQkQsTUFBbkIsRUFBMkJPLEtBQTNCLEVBQWtDO0FBQ2hDLE1BQUlOLFNBQVMsR0FBRzBCLGFBQWEsQ0FBQzNCLE1BQUQsRUFBU08sS0FBVCxDQUE3QjtBQUFBLE1BQ0lxQixnQkFBZ0IsR0FBRzVCLE1BQU0sQ0FBQzZCLGFBQVAsRUFEdkI7O0FBR0EsU0FBUTVCLFNBQVMsS0FBSyxJQUFmLElBQXlCMkIsZ0JBQWdCLEtBQUssSUFBckQsRUFBNEQ7QUFDMURyQixJQUFBQSxLQUFLLEdBQUdQLE1BQVIsQ0FEMEQsQ0FDMUM7O0FBRWhCQSxJQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3VCLFNBQVAsRUFBVDtBQUVBdEIsSUFBQUEsU0FBUyxHQUFHMEIsYUFBYSxDQUFDM0IsTUFBRCxFQUFTTyxLQUFULENBQXpCO0FBRUFxQixJQUFBQSxnQkFBZ0IsR0FBRzVCLE1BQU0sQ0FBQzZCLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPNUIsU0FBUDtBQUNEOztBQUVELFNBQVMwQixhQUFULENBQXVCM0IsTUFBdkIsRUFBK0JPLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQU1ILFFBQVEsR0FBR0osTUFBTSxDQUFDYSxXQUFQLEVBQWpCO0FBQUEsTUFDTWlCLGlCQUFpQixHQUFHcEMsU0FBUyxDQUFDYSxLQUFELEVBQVFILFFBQVIsQ0FEbkM7QUFHQSxTQUFPMEIsaUJBQWlCLENBQUNDLE1BQWxCLENBQXlCLFVBQUM5QixTQUFELEVBQVkrQixjQUFaLEVBQStCO0FBQzdELFFBQUkvQixTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEIsVUFBTWdDLHdCQUF3QixHQUFHRCxjQUFjLENBQUNILGFBQWYsRUFBakM7O0FBRUEsVUFBSUksd0JBQXdCLEtBQUssSUFBakMsRUFBdUM7QUFDckNoQyxRQUFBQSxTQUFTLEdBQUcrQixjQUFaLENBRHFDLENBQ1Q7QUFDN0IsT0FGRCxNQUVPO0FBQ0x6QixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUVBUCxRQUFBQSxNQUFNLEdBQUdnQyxjQUFULENBSEssQ0FHcUI7O0FBRTFCL0IsUUFBQUEsU0FBUyxHQUFHMEIsYUFBYSxDQUFDM0IsTUFBRCxFQUFTTyxLQUFULENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPTixTQUFQO0FBQ0QsR0FoQk0sRUFnQkosSUFoQkksQ0FBUDtBQWlCRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZShcIi4uL2VsZW1lbnRcIiksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoXCIuLi91dGlsaXRpZXMvYXJyYXlcIiksXG4gICAgICByZWFjdEVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3JlYWN0RWxlbWVudFwiKTtcblxuY29uc3QgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl19