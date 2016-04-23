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
      return new DisplayElement(this.displayName, this.props, this.children);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWFjdENvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjs7SUFFRTtBQUNKLFdBREksY0FDSixHQUFjOzBCQURWLGdCQUNVO0dBQWQ7O2VBREk7OzJCQUtHLFNBQVM7QUFDZCxhQUFPLElBQUksY0FBSixDQUFtQixLQUFLLFdBQUwsRUFBa0IsS0FBSyxLQUFMLEVBQVksS0FBSyxRQUFMLENBQXhELENBRGM7Ozs7c0NBSUU7QUFDaEIsYUFBTyxTQUFQLENBRGdCOzs7O3NDQUlBLFNBQVM7Ozt5Q0FJTixTQUFTOzs7U0FqQjFCOzs7QUFzQk4sT0FBTyxPQUFQLEdBQWlCLGNBQWpCIiwiZmlsZSI6InJlYWN0Q29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBEaXNwbGF5RWxlbWVudCh0aGlzLmRpc3BsYXlOYW1lLCB0aGlzLnByb3BzLCB0aGlzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudChjb250ZXh0KSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIl19