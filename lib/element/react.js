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

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    reactElementMixins = require('../mixins/reactElement');

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = /*#__PURE__*/function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    var _this;

    _classCallCheck(this, ReactElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactElement).call(this, props));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwidW5tb3VudCIsInVwZGF0ZSIsImdldENoaWxkUmVmZXJlbmNlIiwiaW5pdGlhbFN0YXRlIiwicmVtb3VudCIsIm5ld1N0YXRlIiwib2xkU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRQYXJlbnQiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFlBQUQsQ0FBdkI7QUFBQSxJQUNNQyxjQUFjLEdBQUdELE9BQU8sQ0FBQyxvQkFBRCxDQUQ5QjtBQUFBLElBRU1FLGtCQUFrQixHQUFHRixPQUFPLENBQUMsd0JBQUQsQ0FGbEM7O0lBSVFHLFMsR0FBeUJGLGMsQ0FBekJFLFM7SUFBV0MsUyxHQUFjSCxjLENBQWRHLFM7O0lBRWJDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FB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QUVPO0FBQ0x6QixRQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUVBUCxRQUFBQSxNQUFNLEdBQUdnQyxjQUFULENBSEssQ0FHcUI7O0FBRTFCL0IsUUFBQUEsU0FBUyxHQUFHMEIsYUFBYSxDQUFDM0IsTUFBRCxFQUFTTyxLQUFULENBQXpCO0FBQ0Q7QUFDRjs7QUFFRCxXQUFPTixTQUFQO0FBQ0QsR0FoQk0sRUFnQkosSUFoQkksQ0FBUDtBQWlCRCIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5JyksXG4gICAgICByZWFjdEVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi9taXhpbnMvcmVhY3RFbGVtZW50Jyk7XG5cbmNvbnN0IHsgZ3VhcmFudGVlLCByZW1haW5pbmcgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5zdGF0ZSA9IHVuZGVmaW5lZDsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7IC8vL1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIoKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCkpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7ICAvLy9cbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIGNvbnN0IG9sZFN0YXRlID0gdGhpcy5zdGF0ZTsgIC8vL1xuXG4gICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24ob2xkU3RhdGUsIG5ld1N0YXRlKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5yZW1vdW50KHVwZGF0ZSk7XG4gIH1cblxuICBnZXRDaGlsZFJlZmVyZW5jZSgpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpLFxuICAgICAgICAgIGNoaWxkID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oUmVhY3RFbGVtZW50LnByb3RvdHlwZSwgcmVhY3RFbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGxldCByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpLFxuICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKChyZWZlcmVuY2UgPT09IG51bGwpICYmIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSkge1xuICAgIGNoaWxkID0gcGFyZW50OyAvLy9cblxuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5nZXRDaGlsZHJlbigpLFxuICAgICAgICByZW1haW5pbmdDaGlsZHJlbiA9IHJlbWFpbmluZyhjaGlsZCwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiByZW1haW5pbmdDaGlsZHJlbi5yZWR1Y2UoKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpID0+IHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiJdfQ==