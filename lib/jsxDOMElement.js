'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDOMElement = function () {
  function JSXDOMElement(ref) {
    _classCallCheck(this, JSXDOMElement);

    this.ref = ref;
  }

  _createClass(JSXDOMElement, [{
    key: 'getRef',
    value: function getRef() {
      return this.ref;
    }
  }, {
    key: 'mount',
    value: function mount(parentJSXElement) {
      parentJSXElement.append(this);
    }
  }, {
    key: 'update',
    value: function update(oldJSXElement) {
      oldJSXElement.appendAfter(this);

      oldJSXElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(jsxElement) {
      var ref = jsxElement.getRef();

      this.ref.appendChild(ref);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      var element = jsxElement.getRef();

      this.ref.parentNode.insertBefore(element, this.ref.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.ref.parentNode.removeChild(this.ref);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.ref.firstChild) {
        this.ref.removeChild(this.ref.firstChild);
      }
    }
  }]);

  return JSXDOMElement;
}();

module.exports = JSXDOMElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hET01FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksYUFDSixDQUFZLEdBQVosRUFBaUI7MEJBRGIsZUFDYTs7QUFDZixTQUFLLEdBQUwsR0FBVyxHQUFYLENBRGU7R0FBakI7O2VBREk7OzZCQUtLO0FBQ1AsYUFBTyxLQUFLLEdBQUwsQ0FEQTs7OzswQkFJSCxrQkFBa0I7QUFDdEIsdUJBQWlCLE1BQWpCLENBQXdCLElBQXhCLEVBRHNCOzs7OzJCQUlqQixlQUFlO0FBQ3BCLG9CQUFjLFdBQWQsQ0FBMEIsSUFBMUIsRUFEb0I7O0FBR3BCLG9CQUFjLE1BQWQsR0FIb0I7Ozs7OEJBTVo7QUFDUixXQUFLLE1BQUwsR0FEUTs7OzsyQkFJSCxZQUFZO0FBQ2pCLFVBQUksTUFBTSxXQUFXLE1BQVgsRUFBTixDQURhOztBQUdqQixXQUFLLEdBQUwsQ0FBUyxXQUFULENBQXFCLEdBQXJCLEVBSGlCOzs7O2dDQU1QLFlBQVk7QUFDdEIsVUFBSSxVQUFVLFdBQVcsTUFBWCxFQUFWLENBRGtCOztBQUd0QixXQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLFlBQXBCLENBQWlDLE9BQWpDLEVBQTBDLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBMUMsQ0FIc0I7Ozs7NkJBTWY7QUFBRSxXQUFLLEdBQUwsQ0FBUyxVQUFULENBQW9CLFdBQXBCLENBQWdDLEtBQUssR0FBTCxDQUFoQyxDQUFGOzs7OzRCQUVEO0FBQUUsYUFBTyxLQUFLLEdBQUwsQ0FBUyxVQUFULEVBQXFCO0FBQUUsYUFBSyxHQUFMLENBQVMsV0FBVCxDQUFxQixLQUFLLEdBQUwsQ0FBUyxVQUFULENBQXJCLENBQUY7T0FBNUI7Ozs7U0FyQ047OztBQXdDTixPQUFPLE9BQVAsR0FBaUIsYUFBakIiLCJmaWxlIjoianN4RE9NRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlZikge1xuICAgIHRoaXMucmVmID0gcmVmO1xuICB9XG5cbiAgZ2V0UmVmKCkge1xuICAgIHJldHVybiB0aGlzLnJlZjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICBwYXJlbnRKU1hFbGVtZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShvbGRKU1hFbGVtZW50KSB7XG4gICAgb2xkSlNYRWxlbWVudC5hcHBlbmRBZnRlcih0aGlzKTtcblxuICAgIG9sZEpTWEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmQoanN4RWxlbWVudCkge1xuICAgIHZhciByZWYgPSBqc3hFbGVtZW50LmdldFJlZigpO1xuXG4gICAgdGhpcy5yZWYuYXBwZW5kQ2hpbGQocmVmKTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKGpzeEVsZW1lbnQpIHtcbiAgICB2YXIgZWxlbWVudCA9IGpzeEVsZW1lbnQuZ2V0UmVmKCk7XG5cbiAgICB0aGlzLnJlZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLnJlZi5uZXh0U2libGluZyk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMucmVmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5yZWYpOyB9XG5cbiAgZW1wdHkoKSB7IHdoaWxlICh0aGlzLnJlZi5maXJzdENoaWxkKSB7IHRoaXMucmVmLnJlbW92ZUNoaWxkKHRoaXMucmVmLmZpcnN0Q2hpbGQpOyB9IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hET01FbGVtZW50O1xuIl19