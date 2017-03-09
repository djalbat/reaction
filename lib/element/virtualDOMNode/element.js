'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement(tagName, props) {
    _classCallCheck(this, VirtualDOMElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, (VirtualDOMElement.__proto__ || Object.getPrototypeOf(VirtualDOMElement)).call(this, props, domElement));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getTagName',
    value: function getTagName() {
      var domElement = this.getDOMElement(),
          tagName = domElement.tagName;

      return tagName;
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removedChildrenCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removedChildrenCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removedChildrenCount, addedChildren, context);
      }
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      if (name === 'className') {
        name = 'class';
      }

      if (name === 'htmlFor') {
        name = 'for';
      }

      if (false) {} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        var keys = Object.keys(value);

        keys.forEach(function (key) {
          this.domElement[name][key] = value[key];
        }.bind(this));
      } else if (typeof value === 'boolean') {
        if (value) {
          value = name; ///

          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (isHandlerName(name)) {
          var domElement = this.getDOMElement(),
              eventType = eventTypeFromName(name),
              handler = value; ///

          domElement.addEventListener(eventType, handler);
        } else if (name === 'ref') {
          var callback = value,
              ///
          _domElement = this.getDOMElement();

          callback(_domElement);
        } else {
          this.setAttribute(name, value);
        }
      }.bind(this));
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwiVmlydHVhbERPTUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsIm1vdW50IiwiYXBwbHlQcm9wcyIsInVubW91bnQiLCJnZXRET01FbGVtZW50Iiwic3RhcnQiLCJyZW1vdmVkQ2hpbGRyZW5Db3VudCIsImFkZGVkQ2hpbGRyZW4iLCJhZGRlZENoaWxkIiwiYXJncyIsImNvbmNhdCIsInJlbW92ZWRDaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic3BsaWNlIiwiYXBwbHkiLCJyZW1vdmVkQ2hpbGQiLCJJbmZpbml0eSIsInNwbGljZUNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibmFtZSIsInZhbHVlIiwia2V5cyIsIk9iamVjdCIsImtleSIsImJpbmQiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGVhckF0dHJpYnV0ZSIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInRvZ2dsZSIsImNvbnRhaW5zIiwibmFtZXMiLCJpc0hhbmRsZXJOYW1lIiwiZXZlbnRUeXBlIiwiZXZlbnRUeXBlRnJvbU5hbWUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGxiYWNrIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1hdGNoIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGlCQUFpQkMsUUFBUSxtQkFBUixDQUF2Qjs7SUFFTUMsaUI7OztBQUNKLDZCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUMxQixRQUFNQyxhQUFhQyxTQUFTQyxhQUFULENBQXVCSixPQUF2QixDQUFuQjs7QUFEMEIsaUlBR3BCQyxLQUhvQixFQUdiQyxVQUhhO0FBSTNCOzs7OzBCQUVLRyxNLEVBQVFDLFMsRUFBV0MsTyxFQUFTO0FBQ2hDLGtJQUFZRixNQUFaLEVBQW9CQyxTQUFwQjs7QUFFQSxVQUFNRSxjQUFjLElBQXBCO0FBQUEsVUFDTUMsaUJBQWlCLElBRHZCO0FBQUEsVUFFTUMsZUFBZUgsT0FGckI7O0FBSUEsV0FBS0ksUUFBTCxDQUFjQyxPQUFkLENBQXNCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDcENBLGNBQU1DLEtBQU4sQ0FBWU4sV0FBWixFQUF5QkMsY0FBekIsRUFBeUNDLFlBQXpDO0FBQ0QsT0FGRDs7QUFJQSxXQUFLSyxVQUFMO0FBQ0Q7Ozs0QkFFT1IsTyxFQUFTO0FBQ2YsVUFBTUcsZUFBZUgsT0FBckI7O0FBRUEsV0FBS0ksUUFBTCxDQUFjQyxPQUFkLENBQXNCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDcENBLGNBQU1HLE9BQU4sQ0FBY04sWUFBZDtBQUNELE9BRkQ7O0FBSUE7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTVIsYUFBYSxLQUFLZSxhQUFMLEVBQW5CO0FBQUEsVUFDTWpCLFVBQVVFLFdBQVdGLE9BRDNCOztBQUdBLGFBQU9BLE9BQVA7QUFDRDs7O21DQUVja0IsSyxFQUFPQyxvQixFQUFzQkMsYSxFQUFlYixPLEVBQVM7QUFDbEUsVUFBTUMsY0FBYyxJQUFwQjtBQUFBLFVBQ01DLGlCQUFpQixJQUR2QjtBQUFBLFVBRU1DLGVBQWVILE9BRnJCOztBQUlBYSxvQkFBY1IsT0FBZCxDQUFzQixVQUFTUyxVQUFULEVBQXFCO0FBQ3pDQSxtQkFBV1AsS0FBWCxDQUFpQk4sV0FBakIsRUFBOEJDLGNBQTlCLEVBQThDQyxZQUE5QztBQUNELE9BRkQ7O0FBSUEsVUFBTVksT0FBTyxDQUFDSixLQUFELEVBQVFDLG9CQUFSLEVBQThCSSxNQUE5QixDQUFxQ0gsYUFBckMsQ0FBYjtBQUFBLFVBQ01JLGtCQUFrQkMsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCLEtBQUtqQixRQUFsQyxFQUE0Q1csSUFBNUMsQ0FEeEI7O0FBR0FFLHNCQUFnQlosT0FBaEIsQ0FBd0IsVUFBU2lCLFlBQVQsRUFBdUI7QUFDN0NBLHFCQUFhYixPQUFiLENBQXFCTixZQUFyQjtBQUNELE9BRkQ7QUFHRDs7OzZCQUVRRyxLLEVBQU9OLE8sRUFBUztBQUN2QixVQUFNVyxRQUFRWSxRQUFkO0FBQUEsVUFDTVgsdUJBQXVCLENBRDdCO0FBQUEsVUFFTUMsZ0JBQWdCLENBQUNQLEtBQUQsQ0FGdEI7O0FBSUEsV0FBS2tCLGNBQUwsQ0FBb0JiLEtBQXBCLEVBQTJCQyxvQkFBM0IsRUFBaURDLGFBQWpELEVBQWdFYixPQUFoRTtBQUNEOzs7Z0NBRVdNLEssRUFBT04sTyxFQUFTO0FBQzFCLFVBQU15QixRQUFRLEtBQUtyQixRQUFMLENBQWNzQixPQUFkLENBQXNCcEIsS0FBdEIsQ0FBZDs7QUFFQSxVQUFJbUIsUUFBUSxDQUFDLENBQWIsRUFBZ0I7QUFDZCxZQUFNZCxRQUFRYyxLQUFkO0FBQUEsWUFDTWIsdUJBQXVCLENBRDdCO0FBQUEsWUFFTUMsZ0JBQWdCLEVBRnRCOztBQUlBLGFBQUtXLGNBQUwsQ0FBb0JiLEtBQXBCLEVBQTJCQyxvQkFBM0IsRUFBaURDLGFBQWpELEVBQWdFYixPQUFoRTtBQUNEO0FBQ0Y7OztpQ0FFWTJCLEksRUFBTUMsSyxFQUFPO0FBQ3hCLFVBQUlELFNBQVMsV0FBYixFQUEwQjtBQUN4QkEsZUFBTyxPQUFQO0FBQ0Q7O0FBRUQsVUFBSUEsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCQSxlQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLFFBQU9DLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDcEMsWUFBTUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRCxLQUFaLENBQWI7O0FBRUFDLGFBQUt4QixPQUFMLENBQWEsVUFBVTBCLEdBQVYsRUFBZTtBQUMxQixlQUFLcEMsVUFBTCxDQUFnQmdDLElBQWhCLEVBQXNCSSxHQUF0QixJQUE2QkgsTUFBTUcsR0FBTixDQUE3QjtBQUNELFNBRlksQ0FFWEMsSUFGVyxDQUVOLElBRk0sQ0FBYjtBQUdELE9BTk0sTUFNQSxJQUFJLE9BQU9KLEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDckMsWUFBSUEsS0FBSixFQUFXO0FBQ1RBLGtCQUFRRCxJQUFSLENBRFMsQ0FDSzs7QUFFZCxlQUFLaEMsVUFBTCxDQUFnQnNDLFlBQWhCLENBQTZCTixJQUE3QixFQUFtQ0MsS0FBbkM7QUFDRDtBQUNGLE9BTk0sTUFNQTtBQUNMLGFBQUtqQyxVQUFMLENBQWdCc0MsWUFBaEIsQ0FBNkJOLElBQTdCLEVBQW1DQyxLQUFuQztBQUNEO0FBQ0Y7OztpQ0FFWUQsSSxFQUFNO0FBQUUsYUFBTyxLQUFLaEMsVUFBTCxDQUFnQnVDLFlBQWhCLENBQTZCUCxJQUE3QixDQUFQO0FBQTRDOzs7bUNBRWxEQSxJLEVBQU07QUFBRSxXQUFLaEMsVUFBTCxDQUFnQndDLGVBQWhCLENBQWdDUixJQUFoQztBQUF3Qzs7O2lDQUVsREEsSSxFQUFNQyxLLEVBQU87QUFBRSxXQUFLSyxZQUFMLENBQWtCTixJQUFsQixFQUF3QkMsS0FBeEI7QUFBaUM7OztvQ0FFN0NELEksRUFBTTtBQUFFLFdBQUtTLGNBQUwsQ0FBb0JULElBQXBCO0FBQTRCOzs7NkJBRTNDVSxTLEVBQVc7QUFBRSxXQUFLMUMsVUFBTCxDQUFnQjBDLFNBQWhCLEdBQTRCQSxTQUE1QjtBQUF3Qzs7OzZCQUVyREEsUyxFQUFXO0FBQUUsV0FBSzFDLFVBQUwsQ0FBZ0IyQyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEJGLFNBQTlCO0FBQTJDOzs7Z0NBRXJEQSxTLEVBQVc7QUFBRSxXQUFLMUMsVUFBTCxDQUFnQjJDLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQ0gsU0FBakM7QUFBOEM7OztnQ0FFM0RBLFMsRUFBVztBQUFFLFdBQUsxQyxVQUFMLENBQWdCMkMsU0FBaEIsQ0FBMEJHLE1BQTFCLENBQWlDSixTQUFqQztBQUE4Qzs7OzZCQUU5REEsUyxFQUFXO0FBQUUsYUFBTyxLQUFLMUMsVUFBTCxDQUFnQjJDLFNBQWhCLENBQTBCSSxRQUExQixDQUFtQ0wsU0FBbkMsQ0FBUDtBQUF1RDs7O21DQUU5RDtBQUFFLFdBQUsxQyxVQUFMLENBQWdCMEMsU0FBaEIsR0FBNEIsRUFBNUI7QUFBaUM7OztpQ0FFckM7QUFDWCxVQUFNTSxRQUFRYixPQUFPRCxJQUFQLENBQVksS0FBS25DLEtBQWpCLENBQWQ7O0FBRUFpRCxZQUFNdEMsT0FBTixDQUFjLFVBQVNzQixJQUFULEVBQWU7QUFDM0IsWUFBTUMsUUFBUSxLQUFLbEMsS0FBTCxDQUFXaUMsSUFBWCxDQUFkOztBQUVBLFlBQUlpQixjQUFjakIsSUFBZCxDQUFKLEVBQXlCO0FBQ3ZCLGNBQU1oQyxhQUFhLEtBQUtlLGFBQUwsRUFBbkI7QUFBQSxjQUNNbUMsWUFBWUMsa0JBQWtCbkIsSUFBbEIsQ0FEbEI7QUFBQSxjQUVNb0IsVUFBVW5CLEtBRmhCLENBRHVCLENBR0M7O0FBRXhCakMscUJBQVdxRCxnQkFBWCxDQUE0QkgsU0FBNUIsRUFBd0NFLE9BQXhDO0FBQ0QsU0FORCxNQU1PLElBQUlwQixTQUFTLEtBQWIsRUFBb0I7QUFDekIsY0FBTXNCLFdBQVdyQixLQUFqQjtBQUFBLGNBQXdCO0FBQ2xCakMsd0JBQWEsS0FBS2UsYUFBTCxFQURuQjs7QUFHQXVDLG1CQUFTdEQsV0FBVDtBQUNELFNBTE0sTUFLQTtBQUNMLGVBQUtzQyxZQUFMLENBQWtCTixJQUFsQixFQUF3QkMsS0FBeEI7QUFDRDtBQUNGLE9BakJhLENBaUJaSSxJQWpCWSxDQWlCUCxJQWpCTyxDQUFkO0FBa0JEOzs7O0VBaEo2QjFDLGM7O0FBbUpoQzRELE9BQU9DLE9BQVAsR0FBaUIzRCxpQkFBakI7O0FBRUEsU0FBU29ELGFBQVQsQ0FBdUJqQixJQUF2QixFQUE2QjtBQUMzQixTQUFPQSxLQUFLeUIsS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNOLGlCQUFULENBQTJCbkIsSUFBM0IsRUFBaUM7QUFDL0IsU0FBT0EsS0FBSzBCLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLFdBQWYsRUFBUDtBQUNEIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUYWdOYW1lKCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB0YWdOYW1lID0gZG9tRWxlbWVudC50YWdOYW1lOyBcblxuICAgIHJldHVybiB0YWdOYW1lO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgYWRkZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGFkZGVkQ2hpbGQpIHtcbiAgICAgIGFkZGVkQ2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXJncyA9IFtzdGFydCwgcmVtb3ZlZENoaWxkcmVuQ291bnRdLmNvbmNhdChhZGRlZENoaWxkcmVuKSxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHRoaXMuY2hpbGRyZW4sIGFyZ3MpO1xuXG4gICAgcmVtb3ZlZENoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocmVtb3ZlZENoaWxkKSB7XG4gICAgICByZW1vdmVkQ2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGFydCA9IEluZmluaXR5LFxuICAgICAgICAgIHJlbW92ZWRDaGlsZHJlbkNvdW50ID0gMCxcbiAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW2NoaWxkXTtcblxuICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJlbW92ZUNoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gaW5kZXgsXG4gICAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDEsXG4gICAgICAgICAgICBhZGRlZENoaWxkcmVuID0gW107XG5cbiAgICAgIHRoaXMuc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0KTtcbiAgICB9XG4gIH1cbiAgXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIFxuICAgIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIG5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG4gIFxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9ICcnOyB9XG5cbiAgYXBwbHlQcm9wcygpIHtcbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgZXZlbnRUeXBlID0gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgICBjYWxsYmFjayhkb21FbGVtZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbiJdfQ==