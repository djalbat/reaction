'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement) {
    _classCallCheck(this, Element);

    this.domElement = domElement;
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parent, context) {
      parent.append(this);
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      previousSibling.appendAfter(this);

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.remove();
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }, {
    key: 'append',
    value: function append(child) {
      var childDOMElement = child.getDOMElement();

      this.domElement.appendChild(childDOMElement);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      var previousSiblingDOMElement = previousSibling.getDOMElement();

      this.domElement.parentElement.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(attributeName, attributeValue) {
      if (false) {} else if (typeof attributeValue === 'string') {
        switch (attributeName) {
          case 'className':
            attributeName = 'class';
            break;

          case 'htmlFor':
            attributeName = 'for';
            break;
        }

        this.domElement.setAttribute(attributeName, attributeValue);
      } else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);
        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else {
        ///
      }
    }
  }]);

  return Element;
}();

module.exports = Element;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9lbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQVksVUFBWixFQUF3QjswQkFEcEIsU0FDb0I7O0FBQ3RCLFNBQUssVUFBTCxHQUFrQixVQUFsQixDQURzQjtHQUF4Qjs7ZUFESTs7MEJBS0UsUUFBUSxTQUFTO0FBQ3JCLGFBQU8sTUFBUCxDQUFjLElBQWQsRUFEcUI7Ozs7NEJBSWYsaUJBQWlCLFNBQVM7QUFDaEMsc0JBQWdCLFdBQWhCLENBQTRCLElBQTVCLEVBRGdDOztBQUdoQyxhQUFPLElBQVAsQ0FIZ0M7Ozs7NEJBTTFCLFNBQVM7QUFDZixXQUFLLE1BQUwsR0FEZTs7Ozs2QkFJUjtBQUNQLFdBQUssVUFBTCxDQUFnQixhQUFoQixDQUE4QixXQUE5QixDQUEwQyxLQUFLLFVBQUwsQ0FBMUMsQ0FETzs7OzsyQkFJRixPQUFPO0FBQ1osVUFBSSxrQkFBa0IsTUFBTSxhQUFOLEVBQWxCLENBRFE7O0FBR1osV0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLGVBQTVCLEVBSFk7Ozs7Z0NBTUYsaUJBQWlCO0FBQzNCLFVBQUksNEJBQTRCLGdCQUFnQixhQUFoQixFQUE1QixDQUR1Qjs7QUFHM0IsV0FBSyxVQUFMLENBQWdCLGFBQWhCLENBQThCLFlBQTlCLENBQTJDLHlCQUEzQyxFQUFzRSxLQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBdEUsQ0FIMkI7Ozs7NEJBTXJCO0FBQ04sYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsRUFBNEI7QUFDakMsYUFBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLEtBQUssVUFBTCxDQUFnQixVQUFoQixDQUE1QixDQURpQztPQUFuQzs7OztvQ0FLYztBQUNkLGFBQU8sS0FBSyxVQUFMLENBRE87Ozs7aUNBSUgsZUFBZSxnQkFBZ0I7QUFDMUMsVUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksT0FBTyxjQUFQLEtBQTBCLFFBQTFCLEVBQW9DO0FBQzdDLGdCQUFRLGFBQVI7QUFDRSxlQUFLLFdBQUw7QUFDRSw0QkFBZ0IsT0FBaEIsQ0FERjtBQUVFLGtCQUZGOztBQURGLGVBS08sU0FBTDtBQUNFLDRCQUFnQixLQUFoQixDQURGO0FBRUUsa0JBRkY7QUFMRixTQUQ2Qzs7QUFXN0MsYUFBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLGFBQTdCLEVBQTRDLGNBQTVDLEVBWDZDO09BQXhDLE1BWUEsSUFBSSxRQUFPLHVFQUFQLEtBQTBCLFFBQTFCLEVBQW9DO0FBQzdDLFlBQUksT0FBTyxPQUFPLElBQVAsQ0FBWSxjQUFaLENBQVAsQ0FEeUM7QUFFN0MsYUFBSyxPQUFMLENBQWEsVUFBVSxHQUFWLEVBQWU7QUFDMUIsY0FBSSxRQUFRLGVBQWUsR0FBZixDQUFSLENBRHNCOztBQUcxQixlQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsRUFBK0IsR0FBL0IsSUFBc0MsS0FBdEMsQ0FIMEI7U0FBZixDQUlYLElBSlcsQ0FJTixJQUpNLENBQWIsRUFGNkM7T0FBeEMsTUFPQTs7T0FQQTs7OztTQTVETDs7O0FBeUVOLE9BQU8sT0FBUCxHQUFpQixPQUFqQiIsImZpbGUiOiJlbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNvbnRleHQpIHtcbiAgICBwYXJlbnQuYXBwZW5kKHRoaXMpO1xuICB9XG4gIFxuICByZW1vdW50KHByZXZpb3VzU2libGluZywgY29udGV4dCkge1xuICAgIHByZXZpb3VzU2libGluZy5hcHBlbmRBZnRlcih0aGlzKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGNoaWxkKSB7XG4gICAgdmFyIGNoaWxkRE9NRWxlbWVudCA9IGNoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKSB7XG4gICAgdmFyIHByZXZpb3VzU2libGluZ0RPTUVsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmcuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHByZXZpb3VzU2libGluZ0RPTUVsZW1lbnQsIHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZyk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICB3aGlsZSAodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnY2xhc3MnO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUgPSAnZm9yJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgYXR0cmlidXRlVmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iXX0=