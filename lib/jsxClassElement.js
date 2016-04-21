'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSXElement = require('./jsxElement');

var JSXClassElement = function (_JSXElement) {
  _inherits(JSXClassElement, _JSXElement);

  function JSXClassElement(reactClass, properties, children) {
    _classCallCheck(this, JSXClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSXClassElement).call(this, properties, children));

    _this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    _this.instance = Object.assign(_this.instance, {
      displayName: displayName,
      state: state
    });

    _this.render();
    return _this;
  }

  _createClass(JSXClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance = Object.assign(this.instance, {
        state: state
      });

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      this.jsxElement = this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }]);

  return JSXClassElement;
}(JSXElement);

module.exports = JSXClassElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9qc3hDbGFzc0VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWI7O0lBRUU7OztBQUNKLFdBREksZUFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsUUFBcEMsRUFBOEM7MEJBRDFDLGlCQUMwQzs7dUVBRDFDLDRCQUVJLFlBQVksV0FEMEI7O0FBRzVDLFVBQUssVUFBTCxHQUFrQixVQUFsQixDQUg0Qzs7QUFLNUMsUUFBSSxjQUFjLFdBQVcsY0FBWCxFQUFkO1FBQ0EsUUFBUSxXQUFXLGVBQVgsRUFBUjs7QUFOd0MsU0FRNUMsQ0FBSyxRQUFMLEdBQWdCLE9BQU8sTUFBUCxDQUFjLE1BQUssUUFBTCxFQUFlO0FBQzNDLG1CQUFhLFdBQWI7QUFDQSxhQUFPLEtBQVA7S0FGYyxDQUFoQixDQVI0Qzs7QUFhNUMsVUFBSyxNQUFMLEdBYjRDOztHQUE5Qzs7ZUFESTs7NkJBaUJLLE9BQU87QUFDZCxXQUFLLFFBQUwsR0FBZ0IsT0FBTyxNQUFQLENBQWMsS0FBSyxRQUFMLEVBQWU7QUFDM0MsZUFBTyxLQUFQO09BRGMsQ0FBaEIsQ0FEYzs7QUFLZCxXQUFLLFdBQUwsR0FMYzs7Ozs2QkFRUDtBQUNQLFdBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsS0FBdkIsQ0FBNkIsS0FBSyxRQUFMLENBQS9DLENBRE87Ozs7d0NBSVc7QUFDbEIsV0FBSyxVQUFMLENBQWdCLGlCQUFoQixDQUFrQyxLQUFsQyxDQUF3QyxLQUFLLFFBQUwsQ0FBeEMsQ0FEa0I7Ozs7U0E3QmhCO0VBQXdCOztBQWtDOUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6ImpzeENsYXNzRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIEpTWEVsZW1lbnQgPSByZXF1aXJlKCcuL2pzeEVsZW1lbnQnKTtcblxuY2xhc3MgSlNYQ2xhc3NFbGVtZW50IGV4dGVuZHMgSlNYRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKSxcbiAgICAgICAgc3RhdGUgPSByZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZSgpOyAvLy9cblxuICAgIHRoaXMuaW5zdGFuY2UgPSBPYmplY3QuYXNzaWduKHRoaXMuaW5zdGFuY2UsIHtcbiAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgIHN0YXRlOiBzdGF0ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24odGhpcy5pbnN0YW5jZSwge1xuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5qc3hFbGVtZW50ID0gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWENsYXNzRWxlbWVudDtcbiJdfQ==