'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    inferenceMixins = require('../../mixins/virtualDOMNode/inference');

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
          childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(VirtualDOMElement.prototype.__proto__ || Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (false) {} else if (isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (isAttributeName(name)) {
          this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(this.domElement);
        }
      }.bind(this));
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, inferenceMixins);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOlsiVmlydHVhbERPTU5vZGUiLCJyZXF1aXJlIiwiaW5mZXJlbmNlTWl4aW5zIiwiVmlydHVhbERPTUVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwicGFyZW50IiwicmVmZXJlbmNlIiwiY29udGV4dCIsImNoaWxkUGFyZW50IiwiY2hpbGRSZWZlcmVuY2UiLCJjaGlsZENvbnRleHQiLCJjaGlsZHJlbiIsImdldENoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwibW91bnQiLCJhcHBseVByb3BzIiwidW5tb3VudCIsIm5hbWVzIiwiT2JqZWN0Iiwia2V5cyIsIm5hbWUiLCJ2YWx1ZSIsImlzSGFuZGxlck5hbWUiLCJzZXRIYW5kbGVyIiwiaXNBdHRyaWJ1dGVOYW1lIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJiaW5kIiwiZXZlbnRUeXBlIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFzc2lnbiIsInByb3RvdHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJtYXRjaCIsImF0dHJpYnV0ZU5hbWVzIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUJDLFFBQVEsbUJBQVIsQ0FBdkI7QUFBQSxJQUNNQyxrQkFBa0JELFFBQVEsdUNBQVIsQ0FEeEI7O0lBR01FLGlCOzs7QUFDSiw2QkFBWUMsT0FBWixFQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFDMUIsUUFBTUMsYUFBYUMsU0FBU0MsYUFBVCxDQUF1QkosT0FBdkIsQ0FBbkI7O0FBRDBCLGlJQUdwQkMsS0FIb0IsRUFHYkMsVUFIYTtBQUkzQjs7OzswQkFFS0csTSxFQUFRQyxTLEVBQVdDLE8sRUFBUztBQUNoQyxrSUFB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UUFoQlMsRUFnQkMsT0FoQkQsRUFnQlUsTUFoQlYsRUFpQnJCLFFBakJxQixFQWtCckIsT0FsQnFCLEVBbUJyQixPQW5CcUIsRUFvQnJCLE9BcEJxQixFQXFCckIsTUFyQnFCLENBQXZCIiwiZmlsZSI6ImVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFZpcnR1YWxET01Ob2RlID0gcmVxdWlyZSgnLi4vdmlydHVhbERPTU5vZGUnKSxcbiAgICAgIGluZmVyZW5jZU1peGlucyA9IHJlcXVpcmUoJy4uLy4uL21peGlucy92aXJ0dWFsRE9NTm9kZS9pbmZlcmVuY2UnKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIGluZmVyZW5jZU1peGlucyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbERPTUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iXX0=