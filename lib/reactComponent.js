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
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTtBQUNKLFdBREksY0FDSixHQUFjOzBCQURWLGdCQUNVO0dBQWQ7O2VBREk7OzJCQUtHLFNBQVM7QUFDZCxVQUFJLGFBQWEsS0FBSyxLQUFMOztBQUNiLG9CQUFjLEtBQUssV0FBTDs7QUFDZCxpQkFBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYOztBQUhELGFBS1AsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQVAsQ0FMYzs7OztzQ0FRRTtBQUNoQixhQUFPLFNBQVAsQ0FEZ0I7Ozs7c0NBSUEsU0FBUzs7O3lDQUlOLFNBQVM7OztTQXJCMUI7OztBQTBCTixPQUFPLE9BQVAsR0FBaUIsY0FBakIiLCJmaWxlIjoicmVhY3RDb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMsICAvLy9cbiAgICAgICAgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCAvLy9cbiAgICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICAgIHJldHVybiBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIl19