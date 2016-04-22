'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(properties, children) {
    _classCallCheck(this, Element);

    var props = properties || {},
        forceUpdate = this.forceUpdate.bind(this);

    props.children = children;

    this.instance = {
      props: props,
      forceUpdate: forceUpdate
    };

    this.element = undefined; ///
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parent) {
      this.element.mount(parent);

      this.componentDidMount();
    }
  }, {
    key: 'update',
    value: function update(previous) {
      this.element.update(previous);
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
      var previous = this.element; ///

      this.element = this.render();

      this.update(previous);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      this.element.appendAfter(previousSibling);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0M7MEJBRDlCLFNBQzhCOztBQUNoQyxRQUFNLFFBQVEsY0FBYyxFQUFkO1FBQ1IsY0FBYyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUYwQjs7QUFJaEMsVUFBTSxRQUFOLEdBQWlCLFFBQWpCLENBSmdDOztBQU1oQyxTQUFLLFFBQUwsR0FBZ0I7QUFDZCxhQUFPLEtBQVA7QUFDQSxtQkFBYSxXQUFiO0tBRkYsQ0FOZ0M7O0FBV2hDLFNBQUssT0FBTCxHQUFlLFNBQWY7QUFYZ0MsR0FBbEM7O2VBREk7OzBCQWVFLFFBQVE7QUFDWixXQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE1BQW5CLEVBRFk7O0FBR1osV0FBSyxpQkFBTCxHQUhZOzs7OzJCQU1QLFVBQVU7QUFDZixXQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFFBQXBCLEVBRGU7Ozs7OEJBSVA7QUFDUixXQUFLLG9CQUFMLEdBRFE7O0FBR1IsV0FBSyxPQUFMLENBQWEsT0FBYixHQUhROzs7O2tDQU1JO0FBQ1osVUFBSSxXQUFXLEtBQUssT0FBTDs7QUFESCxVQUdaLENBQUssT0FBTCxHQUFlLEtBQUssTUFBTCxFQUFmLENBSFk7O0FBS1osV0FBSyxNQUFMLENBQVksUUFBWixFQUxZOzs7OzZCQVFMO0FBQUUsV0FBSyxPQUFMLENBQWEsTUFBYixHQUFGOzs7O2dDQUVHLGlCQUFpQjtBQUFFLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsZUFBekIsRUFBRjs7Ozt3Q0FFVDs7OzJDQUlHOzs7U0EvQ25COzs7QUFvRE4sT0FBTyxPQUFQLEdBQWlCLE9BQWpCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIGNvbnN0IHByb3BzID0gcHJvcGVydGllcyB8fCB7fSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlXG4gICAgfTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQocGFyZW50KTtcbiAgICBcbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7XG4gIH1cblxuICB1cGRhdGUocHJldmlvdXMpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKHByZXZpb3VzKTtcbiAgfVxuICBcbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91cyA9IHRoaXMuZWxlbWVudDsgIC8vL1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMudXBkYXRlKHByZXZpb3VzKVxuICB9XG5cbiAgcmVtb3ZlKCkgeyB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7IH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHsgdGhpcy5lbGVtZW50LmFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZyk7IH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iXX0=