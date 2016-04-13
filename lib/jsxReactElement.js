'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXReactElement = function () {
  function JSXReactElement(reactClass, properties, childJSXElements) {
    _classCallCheck(this, JSXReactElement);

    this.reactClass = reactClass;
    this.properties = properties;
    this.childJSXElements = childJSXElements;

    this.jsxElement = null;
  }

  _createClass(JSXReactElement, [{
    key: 'mount',
    value: function mount(parentJSXElement) {
      var reactClass = this.reactClass,
          getInitialState = reactClass.getGetInitialState(),
          initialState = getInitialState();

      this.state = initialState;

      this.update();

      this.jsxElement.mount(parentJSXElement);
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remove();

      this.update();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.jsxElement.remove();
    }
  }, {
    key: 'update',
    value: function update() {
      var props = this.properties || {},
          ///
      state = this.state;

      props.children = this.childJSXElements; ///;

      var reactClass = this.reactClass,
          render = reactClass.getRender(),
          instance = {
        props: props,
        state: state
      };

      this.jsxElement = render.apply(instance);
    }
  }]);

  return JSXReactElement;
}();

module.exports = JSXReactElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hSZWFjdEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNO0FBQ0osV0FESSxlQUNKLENBQVksVUFBWixFQUF3QixVQUF4QixFQUFvQyxnQkFBcEMsRUFBc0Q7MEJBRGxELGlCQUNrRDs7QUFDcEQsU0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBRG9EO0FBRXBELFNBQUssVUFBTCxHQUFrQixVQUFsQixDQUZvRDtBQUdwRCxTQUFLLGdCQUFMLEdBQXdCLGdCQUF4QixDQUhvRDs7QUFLcEQsU0FBSyxVQUFMLEdBQWtCLElBQWxCLENBTG9EO0dBQXREOztlQURJOzswQkFTRSxrQkFBa0I7QUFDdEIsVUFBSSxhQUFhLEtBQUssVUFBTDtVQUNiLGtCQUFrQixXQUFXLGtCQUFYLEVBQWxCO1VBQ0EsZUFBZSxpQkFBZixDQUhrQjs7QUFLdEIsV0FBSyxLQUFMLEdBQWEsWUFBYixDQUxzQjs7QUFPdEIsV0FBSyxNQUFMLEdBUHNCOztBQVN0QixXQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsZ0JBQXRCLEVBVHNCOzs7OzZCQVlmLE9BQU87QUFDZCxXQUFLLEtBQUwsR0FBYSxLQUFiLENBRGM7O0FBR2QsV0FBSyxNQUFMLEdBSGM7O0FBS2QsV0FBSyxNQUFMLEdBTGM7Ozs7NkJBUVA7QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsR0FBRjs7Ozs2QkFFQTtBQUNQLFVBQUksUUFBUSxLQUFLLFVBQUwsSUFBbUIsRUFBbkI7O0FBQ1IsY0FBUSxLQUFLLEtBQUwsQ0FGTDs7QUFJUCxZQUFNLFFBQU4sR0FBaUIsS0FBSyxnQkFBTDs7QUFKVixVQU1ILGFBQWEsS0FBSyxVQUFMO1VBQ2IsU0FBUyxXQUFXLFNBQVgsRUFBVDtVQUNBLFdBQVc7QUFDVCxlQUFPLEtBQVA7QUFDQSxlQUFPLEtBQVA7T0FGRixDQVJHOztBQWFQLFdBQUssVUFBTCxHQUFrQixPQUFPLEtBQVAsQ0FBYSxRQUFiLENBQWxCLENBYk87Ozs7U0EvQkw7OztBQWdETixPQUFPLE9BQVAsR0FBaUIsZUFBakIiLCJmaWxlIjoianN4UmVhY3RFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBKU1hSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZEpTWEVsZW1lbnRzKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuY2hpbGRKU1hFbGVtZW50cyA9IGNoaWxkSlNYRWxlbWVudHM7XG5cbiAgICB0aGlzLmpzeEVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgbW91bnQocGFyZW50SlNYRWxlbWVudCkge1xuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSByZWFjdENsYXNzLmdldEdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgICBpbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5qc3hFbGVtZW50Lm1vdW50KHBhcmVudEpTWEVsZW1lbnQpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHsgdGhpcy5qc3hFbGVtZW50LnJlbW92ZSgpOyB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcGVydGllcyB8fCB7fSwgIC8vL1xuICAgICAgICBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgXG4gICAgcHJvcHMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkSlNYRWxlbWVudHM7IC8vLztcblxuICAgIHZhciByZWFjdENsYXNzID0gdGhpcy5yZWFjdENsYXNzLFxuICAgICAgICByZW5kZXIgPSByZWFjdENsYXNzLmdldFJlbmRlcigpLFxuICAgICAgICBpbnN0YW5jZSA9IHtcbiAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH07IFxuXG4gICAgdGhpcy5qc3hFbGVtZW50ID0gcmVuZGVyLmFwcGx5KGluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWFJlYWN0RWxlbWVudDtcbiJdfQ==
