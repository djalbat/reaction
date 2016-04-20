'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXComponentElement = function () {
  function JSXComponentElement(reactComponent, properties, childJSXElements) {
    _classCallCheck(this, JSXComponentElement);

    this.reactComponent = reactComponent;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = undefined; ///

    var children = this.childJSXElements,
        ///
    props = Object.assign({}, this.properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.render();
  }

  _createClass(JSXComponentElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'remount',
    value: function remount(oldJSXElement) {
      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldJSXElement = this.jsxElement;

      this.render();

      this.jsxElement.remount(oldJSXElement);
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(jsxElement) {
      this.jsxElement.appendAfter(jsxElement);
    }
  }]);

  return JSXComponentElement;
}();

module.exports = JSXComponentElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDb21wb25lbnRFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksbUJBQ0osQ0FBWSxjQUFaLEVBQTRCLFVBQTVCLEVBQXdDLGdCQUF4QyxFQUEwRDswQkFEdEQscUJBQ3NEOztBQUN4RCxTQUFLLGNBQUwsR0FBc0IsY0FBdEIsQ0FEd0Q7QUFFeEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRndEO0FBR3hELFNBQUssZ0JBQUwsR0FBd0IsZ0JBQXhCLENBSHdEOztBQUt4RCxTQUFLLFVBQUwsR0FBa0IsU0FBbEI7O0FBTHdELFFBT2xELFdBQVcsS0FBSyxnQkFBTDs7QUFDWCxZQUFRLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSyxVQUFMLEVBQWlCLEVBQUMsVUFBVSxRQUFWLEVBQXBDLENBQVI7UUFDQSxjQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkLENBVGtEOztBQVd4RCxTQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixFQUFDLE9BQU8sS0FBUCxFQUFuQixFQUFrQyxFQUFDLGFBQWEsV0FBYixFQUFuQyxDQUFoQixDQVh3RDs7QUFheEQsU0FBSyxNQUFMLEdBYndEO0dBQTFEOztlQURJOzswQkFpQkUsa0JBQWtCO0FBQ3RCLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEIsRUFEc0I7O0FBR3RCLFdBQUssY0FBTCxDQUFvQixpQkFBcEIsQ0FBc0MsS0FBdEMsQ0FBNEMsS0FBSyxRQUFMLENBQTVDLENBSHNCOzs7OzRCQU1oQixlQUFlO0FBQ3JCLFdBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixhQUF4QixFQURxQjs7OztrQ0FJVDtBQUNaLFVBQUksZ0JBQWdCLEtBQUssVUFBTCxDQURSOztBQUdaLFdBQUssTUFBTCxHQUhZOztBQUtaLFdBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixhQUF4QixFQUxZOzs7OzZCQVFMO0FBQ1AsV0FBSyxVQUFMLEdBQWtCLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUEyQixLQUEzQixDQUFpQyxLQUFLLFFBQUwsQ0FBbkQsQ0FETzs7Ozs2QkFJQTtBQUNQLFdBQUssVUFBTCxDQUFnQixNQUFoQixHQURPOzs7O2dDQUlHLFlBQVk7QUFDdEIsV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLFVBQTVCLEVBRHNCOzs7O1NBM0NwQjs7O0FBZ0ROLE9BQU8sT0FBUCxHQUFpQixtQkFBakIiLCJmaWxlIjoianN4Q29tcG9uZW50RWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgSlNYQ29tcG9uZW50RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgdGhpcy5jaGlsZEpTWEVsZW1lbnRzID0gY2hpbGRKU1hFbGVtZW50cztcblxuICAgIHRoaXMuanN4RWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHMsIC8vL1xuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wZXJ0aWVzLCB7Y2hpbGRyZW46IGNoaWxkcmVufSksXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih7fSwge3Byb3BzOiBwcm9wc30sIHtmb3JjZVVwZGF0ZTogZm9yY2VVcGRhdGV9KTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQocGFyZW50SlNYRWxlbWVudCk7XG5cbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgcmVtb3VudChvbGRKU1hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW91bnQob2xkSlNYRWxlbWVudCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgb2xkSlNYRWxlbWVudCA9IHRoaXMuanN4RWxlbWVudDtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50LnJlbW91bnQob2xkSlNYRWxlbWVudClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQgPSB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihqc3hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LmFwcGVuZEFmdGVyKGpzeEVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYQ29tcG9uZW50RWxlbWVudDtcbiJdfQ==