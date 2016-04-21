'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXElement = function () {
  function JSXElement(properties, children) {
    _classCallCheck(this, JSXElement);

    var props = Object.assign({}, properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.jsxElement = undefined; ///
  }

  _createClass(JSXElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      this.jsxElement.mount(parentJSXElement);

      this.componentDidMount();
    }
  }, {
    key: 'update',
    value: function update(oldJSXElement) {
      this.jsxElement.update(oldJSXElement);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.componentWillUnmount();

      this.jsxElement.unmount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldJSXElement = this.jsxElement;

      this.render();

      this.update(oldJSXElement);
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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return JSXElement;
}();

module.exports = JSXElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hFbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTTtBQUNKLFdBREksVUFDSixDQUFZLFVBQVosRUFBd0IsUUFBeEIsRUFBa0M7MEJBRDlCLFlBQzhCOztBQUNoQyxRQUFNLFFBQVEsT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixVQUFsQixFQUE4QixFQUFDLFVBQVUsUUFBVixFQUEvQixDQUFSO1FBQ0EsY0FBYyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZCxDQUYwQjs7QUFJaEMsU0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBQyxPQUFPLEtBQVAsRUFBbkIsRUFBa0MsRUFBQyxhQUFhLFdBQWIsRUFBbkMsQ0FBaEIsQ0FKZ0M7O0FBTWhDLFNBQUssVUFBTCxHQUFrQixTQUFsQjtBQU5nQyxHQUFsQzs7ZUFESTs7MEJBVUUsa0JBQWtCO0FBQ3RCLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixnQkFBdEIsRUFEc0I7O0FBR3RCLFdBQUssaUJBQUwsR0FIc0I7Ozs7MkJBTWpCLGVBQWU7QUFDcEIsV0FBSyxVQUFMLENBQWdCLE1BQWhCLENBQXVCLGFBQXZCLEVBRG9COzs7OzhCQUlaO0FBQ1IsV0FBSyxvQkFBTCxHQURROztBQUdSLFdBQUssVUFBTCxDQUFnQixPQUFoQixHQUhROzs7O2tDQU1JO0FBQ1osVUFBSSxnQkFBZ0IsS0FBSyxVQUFMLENBRFI7O0FBR1osV0FBSyxNQUFMLEdBSFk7O0FBS1osV0FBSyxNQUFMLENBQVksYUFBWixFQUxZOzs7OzZCQVFMO0FBQ1AsV0FBSyxVQUFMLENBQWdCLE1BQWhCLEdBRE87Ozs7Z0NBSUcsWUFBWTtBQUN0QixXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsVUFBNUIsRUFEc0I7Ozs7d0NBSUo7OzsyQ0FJRzs7O1NBOUNuQjs7O0FBbUROLE9BQU8sT0FBUCxHQUFpQixVQUFqQiIsImZpbGUiOiJqc3hFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtjaGlsZHJlbjogY2hpbGRyZW59KSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHt9LCB7cHJvcHM6IHByb3BzfSwge2ZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZX0pO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQubW91bnQocGFyZW50SlNYRWxlbWVudCk7XG4gICAgXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgdXBkYXRlKG9sZEpTWEVsZW1lbnQpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQudXBkYXRlKG9sZEpTWEVsZW1lbnQpO1xuICB9XG4gIFxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICBcbiAgICB0aGlzLmpzeEVsZW1lbnQudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdmFyIG9sZEpTWEVsZW1lbnQgPSB0aGlzLmpzeEVsZW1lbnQ7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy51cGRhdGUob2xkSlNYRWxlbWVudClcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmpzeEVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihqc3hFbGVtZW50KSB7XG4gICAgdGhpcy5qc3hFbGVtZW50LmFwcGVuZEFmdGVyKGpzeEVsZW1lbnQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBKU1hFbGVtZW50O1xuIl19