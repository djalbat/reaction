'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    reactElementMixins = require('../mixins/reactElement');

var guarantee = arrayUtilities.guarantee,
    remaining = arrayUtilities.remaining;

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, props));

    _this.state = undefined; ///

    _this.context = undefined; ///
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      var _this2 = this;

      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = _this2,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context),
          children = this.getChildren();

      children.forEach(function (child) {
        return child.unmount(childContext);
      });

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'remount',
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
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getState',
    value: function getState() {
      return this.state;
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState(initialState) {
      this.state = initialState; ///
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'updateState',
    value: function updateState(newState) {
      var oldState = this.state; ///

      this.state = Object.assign(oldState, newState);

      this.remount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      this.remount(update);
    }
  }, {
    key: 'getChildReference',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJyZWFjdEVsZW1lbnRNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldENoaWxkcmVuIiwidW5tb3VudCIsInVwZGF0ZSIsImdldENoaWxkUmVmZXJlbmNlIiwiaW5pdGlhbFN0YXRlIiwicmVtb3VudCIsIm5ld1N0YXRlIiwib2xkU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXRQYXJlbnQiLCJwcm90b3R5cGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZmluZFJlZmVyZW5jZSIsInBhcmVudERPTUVsZW1lbnQiLCJnZXRET01FbGVtZW50IiwicmVtYWluaW5nQ2hpbGRyZW4iLCJyZWR1Y2UiLCJyZW1haW5pbmdDaGlsZCIsInJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsWUFBUixDQUFoQjtBQUFBLElBQ01DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUR2QjtBQUFBLElBRU1FLHFCQUFxQkYsUUFBUSx3QkFBUixDQUYzQjs7SUFJUUcsUyxHQUF5QkYsYyxDQUF6QkUsUztJQUFXQyxTLEdBQWNILGMsQ0FBZEcsUzs7SUFFYkMsWTs7O0FBQ0osd0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7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QixDQUFoQjtBQUFBLE1BQ0lxQixtQkFBbUI1QixPQUFPNkIsYUFBUCxFQUR2Qjs7QUFHQSxTQUFRNUIsY0FBYyxJQUFmLElBQXlCMkIscUJBQXFCLElBQXJELEVBQTREO0FBQzFEckIsWUFBUVAsTUFBUixDQUQwRCxDQUMxQzs7QUFFaEJBLGFBQVNBLE9BQU91QixTQUFQLEVBQVQ7O0FBRUF0QixnQkFBWTBCLGNBQWMzQixNQUFkLEVBQXNCTyxLQUF0QixDQUFaOztBQUVBcUIsdUJBQW1CNUIsT0FBTzZCLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPNUIsU0FBUDtBQUNEOztBQUVELFNBQVMwQixhQUFULENBQXVCM0IsTUFBdkIsRUFBK0JPLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQU1ILFdBQVdKLE9BQU9hLFdBQVAsRUFBakI7QUFBQSxNQUNNaUIsb0JBQW9CcEMsVUFBVWEsS0FBVixFQUFpQkgsUUFBakIsQ0FEMUI7O0FBR0EsU0FBTzBCLGtCQUFrQkMsTUFBbEIsQ0FBeUIsVUFBQzlCLFNBQUQsRUFBWStCLGNBQVosRUFBK0I7QUFDN0QsUUFBSS9CLGNBQWMsSUFBbEIsRUFBd0I7QUFDdEIsVUFBTWdDLDJCQUEyQkQsZUFBZUgsYUFBZixFQUFqQzs7QUFFQSxVQUFJSSw2QkFBNkIsSUFBakMsRUFBdUM7QUFDckNoQyxvQkFBWStCLGNBQVosQ0FEcUMsQ0FDVDtBQUM3QixPQUZELE1BRU87QUFDTHpCLGdCQUFRLElBQVI7O0FBRUFQLGlCQUFTZ0MsY0FBVCxDQUhLLENBR3FCOztBQUUxQi9CLG9CQUFZMEIsY0FBYzNCLE1BQWQsRUFBc0JPLEtBQXRCLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU9OLFNBQVA7QUFDRCxHQWhCTSxFQWdCSixJQWhCSSxDQUFQO0FBaUJEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJlYWN0RWxlbWVudE1peGlucyA9IHJlcXVpcmUoJy4uL21peGlucy9yZWFjdEVsZW1lbnQnKTtcblxuY29uc3QgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFJlYWN0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gdW5kZWZpbmVkOyAvLy9cblxuICAgIHRoaXMuY29udGV4dCA9IHVuZGVmaW5lZDsgLy8vXG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcigpKTtcblxuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgY2hpbGRyZW4pO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4gY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpKTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHJlbW91bnQodXBkYXRlKSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gdGhpcy5nZXRDaGlsZFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGd1YXJhbnRlZSh0aGlzLnJlbmRlcih1cGRhdGUpKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KSk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxTdGF0ZTsgIC8vL1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlOyAgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlbW91bnQodXBkYXRlKTtcbiAgfVxuXG4gIGdldENoaWxkUmVmZXJlbmNlKCkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0UGFyZW50KCksXG4gICAgICAgICAgY2hpbGQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZWFjdEVsZW1lbnQucHJvdG90eXBlLCByZWFjdEVsZW1lbnRNaXhpbnMpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIl19