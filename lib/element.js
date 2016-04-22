'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(properties, children) {
    _classCallCheck(this, Element);

    var props = Object.assign({}, properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.element = undefined; ///
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parentElement) {
      this.element.mount(parentElement);

      this.componentDidMount();
    }
  }, {
    key: 'update',
    value: function update(oldElement) {
      this.element.update(oldElement);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.componentWillUnmount();

      this.element.unmount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldElement = this.element;

      this.element = this.render();

      this.update(oldElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      this.element.appendAfter(element);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return Element;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0M7MEJBRDlCLFNBQzhCOztBQUNoQyxRQUFNLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixVQUFsQixFQUE4QixFQUFDLFVBQVUsUUFBVixFQUEvQixDQUFSO1FBQ0EsY0FBYyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUYwQjs7QUFJaEMsU0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBQyxPQUFPLEtBQVAsRUFBbkIsRUFBa0MsRUFBQyxhQUFhLFdBQWIsRUFBbkMsQ0FBaEIsQ0FKZ0M7O0FBTWhDLFNBQUssT0FBTCxHQUFlLFNBQWY7QUFOZ0MsR0FBbEM7O2VBREk7OzBCQVVFLGVBQWU7QUFDbkIsV0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixhQUFuQixFQURtQjs7QUFHbkIsV0FBSyxpQkFBTCxHQUhtQjs7OzsyQkFNZCxZQUFZO0FBQ2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsVUFBcEIsRUFEaUI7Ozs7OEJBSVQ7QUFDUixXQUFLLG9CQUFMLEdBRFE7O0FBR1IsV0FBSyxPQUFMLENBQWEsT0FBYixHQUhROzs7O2tDQU1JO0FBQ1osVUFBSSxhQUFhLEtBQUssT0FBTCxDQURMOztBQUdaLFdBQUssT0FBTCxHQUFlLEtBQUssTUFBTCxFQUFmLENBSFk7O0FBS1osV0FBSyxNQUFMLENBQVksVUFBWixFQUxZOzs7OzZCQVFMO0FBQ1AsV0FBSyxPQUFMLENBQWEsTUFBYixHQURPOzs7O2dDQUlHLFNBQVM7QUFDbkIsV0FBSyxPQUFMLENBQWEsV0FBYixDQUF5QixPQUF6QixFQURtQjs7Ozt3Q0FJRDs7OzJDQUlHOzs7U0E5Q25COzs7QUFtRE4sT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge2NoaWxkcmVuOiBjaGlsZHJlbn0pLFxuICAgICAgICAgIGZvcmNlVXBkYXRlID0gdGhpcy5mb3JjZVVwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24oe30sIHtwcm9wczogcHJvcHN9LCB7Zm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlfSk7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSB1bmRlZmluZWQ7ICAvLy9cbiAgfVxuICBcbiAgbW91bnQocGFyZW50RWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5tb3VudChwYXJlbnRFbGVtZW50KTtcbiAgICBcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1cGRhdGUob2xkRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC51cGRhdGUob2xkRWxlbWVudCk7XG4gIH1cbiAgXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuICAgIFxuICAgIHRoaXMuZWxlbWVudC51bm1vdW50KCk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgb2xkRWxlbWVudCA9IHRoaXMuZWxlbWVudDtcblxuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLnVwZGF0ZShvbGRFbGVtZW50KVxuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQWZ0ZXIoZWxlbWVudCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iXX0=