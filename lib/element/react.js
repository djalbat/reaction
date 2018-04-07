'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element'),
    arrayUtilities = require('../utilities/array'),
    inferenceMixins = require('../mixins/react/inference');

var guarantee = arrayUtilities.guarantee;
var remaining = arrayUtilities.remaining;

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
      this.context = context;

      var childContext = this.getChildContext(context),
          children = guarantee(this.render());

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, children);

      children.forEach(function (child) {
        var childParent = this,
            childReference = reference;

        child.mount(childParent, childReference, childContext);
      }.bind(this));

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
        child.unmount(childContext);
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
        child.unmount(childContext);
      });

      this.children = guarantee(this.render(update));

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
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

Object.assign(ReactElement.prototype, inferenceMixins);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L3JlYWN0LmpzIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJyZXF1aXJlIiwiYXJyYXlVdGlsaXRpZXMiLCJpbmZlcmVuY2VNaXhpbnMiLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJSZWFjdEVsZW1lbnQiLCJwcm9wcyIsInN0YXRlIiwidW5kZWZpbmVkIiwiY29udGV4dCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkQ29udGV4dCIsImdldENoaWxkQ29udGV4dCIsImNoaWxkcmVuIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkIiwiY2hpbGRQYXJlbnQiLCJjaGlsZFJlZmVyZW5jZSIsIm1vdW50IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRDaGlsZHJlbiIsInVubW91bnQiLCJ1cGRhdGUiLCJnZXRDaGlsZFJlZmVyZW5jZSIsImluaXRpYWxTdGF0ZSIsInJlbW91bnQiLCJuZXdTdGF0ZSIsIm9sZFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0UGFyZW50IiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImZpbmRSZWZlcmVuY2UiLCJwYXJlbnRET01FbGVtZW50IiwiZ2V0RE9NRWxlbWVudCIsInJlbWFpbmluZ0NoaWxkcmVuIiwicmVkdWNlIiwicmVtYWluaW5nQ2hpbGQiLCJyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLFlBQVIsQ0FBaEI7QUFBQSxJQUNNQyxpQkFBaUJELFFBQVEsb0JBQVIsQ0FEdkI7QUFBQSxJQUVNRSxrQkFBa0JGLFFBQVEsMkJBQVIsQ0FGeEI7O0lBSVFHLFMsR0FBeUJGLGMsQ0FBekJFLFM7SUFBV0MsUyxHQUFjSCxjLENBQWRHLFM7O0lBRWJDLFk7OztBQUNKLHdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtB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a0M7QUFDaEMsTUFBSU4sWUFBWTJCLGNBQWM1QixNQUFkLEVBQXNCTyxLQUF0QixDQUFoQjtBQUFBLE1BQ0lzQixtQkFBbUI3QixPQUFPOEIsYUFBUCxFQUR2Qjs7QUFHQSxTQUFRN0IsY0FBYyxJQUFmLElBQXlCNEIscUJBQXFCLElBQXJELEVBQTREO0FBQzFEdEIsWUFBUVAsTUFBUixDQUQwRCxDQUMxQzs7QUFFaEJBLGFBQVNBLE9BQU93QixTQUFQLEVBQVQ7O0FBRUF2QixnQkFBWTJCLGNBQWM1QixNQUFkLEVBQXNCTyxLQUF0QixDQUFaOztBQUVBc0IsdUJBQW1CN0IsT0FBTzhCLGFBQVAsRUFBbkI7QUFDRDs7QUFFRCxTQUFPN0IsU0FBUDtBQUNEOztBQUVELFNBQVMyQixhQUFULENBQXVCNUIsTUFBdkIsRUFBK0JPLEtBQS9CLEVBQXNDO0FBQ3BDLE1BQU1ILFdBQVdKLE9BQU9jLFdBQVAsRUFBakI7QUFBQSxNQUNNaUIsb0JBQW9CckMsVUFBVWEsS0FBVixFQUFpQkgsUUFBakIsQ0FEMUI7O0FBR0EsU0FBTzJCLGtCQUFrQkMsTUFBbEIsQ0FBeUIsVUFBUy9CLFNBQVQsRUFBb0JnQyxjQUFwQixFQUFvQztBQUNsRSxRQUFJaEMsY0FBYyxJQUFsQixFQUF3QjtBQUN0QixVQUFNaUMsMkJBQTJCRCxlQUFlSCxhQUFmLEVBQWpDOztBQUVBLFVBQUlJLDZCQUE2QixJQUFqQyxFQUF1QztBQUNyQ2pDLG9CQUFZZ0MsY0FBWixDQURxQyxDQUNUO0FBQzdCLE9BRkQsTUFFTztBQUNMMUIsZ0JBQVEsSUFBUjs7QUFFQVAsaUJBQVNpQyxjQUFULENBSEssQ0FHcUI7O0FBRTFCaEMsb0JBQVkyQixjQUFjNUIsTUFBZCxFQUFzQk8sS0FBdEIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT04sU0FBUDtBQUNELEdBaEJNLEVBZ0JKLElBaEJJLENBQVA7QUFpQkQiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50JyksXG4gICAgICBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgaW5mZXJlbmNlTWl4aW5zID0gcmVxdWlyZSgnLi4vbWl4aW5zL3JlYWN0L2luZmVyZW5jZScpO1xuXG5jb25zdCB7IGd1YXJhbnRlZSwgcmVtYWluaW5nIH0gPSBhcnJheVV0aWxpdGllcztcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0ID0gdW5kZWZpbmVkOyAvLy9cbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKCkpO1xuXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICByZW1vdW50KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gZ3VhcmFudGVlKHRoaXMucmVuZGVyKHVwZGF0ZSkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUobmV3U3RhdGUpIHtcbiAgICBjb25zdCBvbGRTdGF0ZSA9IHRoaXMuc3RhdGU7ICAvLy9cblxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKG9sZFN0YXRlLCBuZXdTdGF0ZSk7XG5cbiAgICB0aGlzLnJlbW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKHVwZGF0ZSkge1xuICAgIHRoaXMucmVtb3VudCh1cGRhdGUpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDsgLy8vXG5cbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuZ2V0Q2hpbGRyZW4oKSxcbiAgICAgICAgcmVtYWluaW5nQ2hpbGRyZW4gPSByZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7IC8vL1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBudWxsO1xuXG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkOyAgLy8vXG5cbiAgICAgICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9LCBudWxsKTtcbn1cbiJdfQ==