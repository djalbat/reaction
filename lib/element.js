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

      this.render();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0M7MEJBRDlCLFNBQzhCOztBQUNoQyxRQUFNLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixVQUFsQixFQUE4QixFQUFDLFVBQVUsUUFBVixFQUEvQixDQUFSO1FBQ0EsY0FBYyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUYwQjs7QUFJaEMsU0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBQyxPQUFPLEtBQVAsRUFBbkIsRUFBa0MsRUFBQyxhQUFhLFdBQWIsRUFBbkMsQ0FBaEIsQ0FKZ0M7O0FBTWhDLFNBQUssT0FBTCxHQUFlLFNBQWY7QUFOZ0MsR0FBbEM7O2VBREk7OzBCQVVFLGVBQWU7QUFDbkIsV0FBSyxPQUFMLENBQWEsS0FBYixDQUFtQixhQUFuQixFQURtQjs7QUFHbkIsV0FBSyxpQkFBTCxHQUhtQjs7OzsyQkFNZCxZQUFZO0FBQ2pCLFdBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsVUFBcEIsRUFEaUI7Ozs7OEJBSVQ7QUFDUixXQUFLLG9CQUFMLEdBRFE7O0FBR1IsV0FBSyxPQUFMLENBQWEsT0FBYixHQUhROzs7O2tDQU1JO0FBQ1osVUFBSSxhQUFhLEtBQUssT0FBTCxDQURMOztBQUdaLFdBQUssTUFBTCxHQUhZOztBQUtaLFdBQUssTUFBTCxDQUFZLFVBQVosRUFMWTs7Ozs2QkFRTDtBQUNQLFdBQUssT0FBTCxDQUFhLE1BQWIsR0FETzs7OztnQ0FJRyxTQUFTO0FBQ25CLFdBQUssT0FBTCxDQUFhLFdBQWIsQ0FBeUIsT0FBekIsRUFEbUI7Ozs7d0NBSUQ7OzsyQ0FJRzs7O1NBOUNuQjs7O0FBbUROLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHt9LCB7cHJvcHM6IHByb3BzfSwge2ZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZX0pO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQubW91bnQocGFyZW50RWxlbWVudCk7XG4gICAgXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlKG9sZEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQudXBkYXRlKG9sZEVsZW1lbnQpO1xuICB9XG4gIFxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICBcbiAgICB0aGlzLmVsZW1lbnQudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdmFyIG9sZEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy51cGRhdGUob2xkRWxlbWVudClcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZEFmdGVyKGVsZW1lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuIl19