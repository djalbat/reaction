'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render(context) {
      var properties = this.props,
          ///
      displayName = this.displayName,
          ///
      children = this.props.children; ///

      return new DisplayElement(displayName, properties, children);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {}
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTtBQUNKLFdBREksY0FDSixHQUFjOzBCQURWLGdCQUNVO0dBQWQ7O2VBREk7OzJCQUtHLFNBQVM7QUFDZCxVQUFJLGFBQWEsS0FBSyxLQUFMOztBQUNiLG9CQUFjLEtBQUssV0FBTDs7QUFDZCxpQkFBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYOztBQUhELGFBS1AsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQVAsQ0FMYzs7OztzQ0FRRSxTQUFTOzs7eUNBSU4sU0FBUzs7O3NDQUlaO0FBQ2hCLGFBQU8sU0FBUCxDQURnQjs7OztTQXJCZDs7O0FBMEJOLE9BQU8sT0FBUCxHQUFpQixjQUFqQiIsImZpbGUiOiJyZWFjdENvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICByZW5kZXIoY29udGV4dCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wcywgIC8vL1xuICAgICAgICBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIC8vL1xuICAgICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47IC8vL1xuXG4gICAgcmV0dXJuIG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG5cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnQ7XG4iXX0=