"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _virtualDOMNode = _interopRequireDefault(require("../virtualDOMNode"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var VirtualDOMTextElement = function(VirtualDOMNode) {
    _inherits(VirtualDOMTextElement, _virtualDOMNode.default);
    function VirtualDOMTextElement(text) {
        _classCallCheck(this, VirtualDOMTextElement);
        var domElement = document.createTextNode(text), children = [], props = {
            children: children
        };
        return _possibleConstructorReturn(this, _getPrototypeOf(VirtualDOMTextElement).call(this, props, domElement));
    }
    _createClass(VirtualDOMTextElement, [
        {
            key: "mount",
            value: function mount(parent, reference, context) {
                _get(_getPrototypeOf(VirtualDOMTextElement.prototype), "mount", this).call(this, parent, reference);
            }
        },
        {
            key: "unmount",
            value: function unmount(context) {
                _get(_getPrototypeOf(VirtualDOMTextElement.prototype), "unmount", this).call(this);
            }
        },
        {
            key: "getText",
            value: function getText() {
                var nodeValue = this.domElement.nodeValue, text = nodeValue; ///
                return text;
            }
        },
        {
            key: "setText",
            value: function setText(text) {
                var nodeValue = text; ///
                this.domElement.nodeValue = nodeValue;
            }
        }
    ]);
    return VirtualDOMTextElement;
}(_virtualDOMNode.default);
exports.default = VirtualDOMTextElement;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL3RleHRFbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmlydHVhbERPTU5vZGUgZnJvbSBcIi4uL3ZpcnR1YWxET01Ob2RlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxET01UZXh0RWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01Ob2RlIHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICB9O1xuXG4gICAgc3VwZXIocHJvcHMsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSk7XG4gIH1cbiAgXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxlQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLHFCQUFBLFlBQUEsY0FBQTtjQUFBLHFCQUFBLEVBRkEsZUFBQTthQUVBLHFCQUFBLENBQ0EsSUFBQTs4QkFEQSxxQkFBQTtZQUVBLFVBQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsR0FDQSxRQUFBLE9BQ0EsS0FBQTtBQUNBLG9CQUFBLEVBQUEsUUFBQTs7Z0VBTEEscUJBQUEsYUFRQSxLQUFBLEVBQUEsVUFBQTs7aUJBUkEscUJBQUE7O0FBV0EsZUFBQSxHQUFBLEtBQUE7NEJBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxTQUFBLEVBQUEsT0FBQTtxQ0FYQSxxQkFBQSxjQVlBLEtBQUEsb0JBQUEsTUFBQSxFQUFBLFNBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsT0FBQTtxQ0FmQSxxQkFBQSxjQWdCQSxPQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQTtvQkFDQSxTQUFBLFFBQUEsVUFBQSxDQUFBLFNBQUEsRUFDQSxJQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3VCQUVBLElBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsT0FBQTs0QkFBQSxPQUFBLENBQUEsSUFBQTtvQkFDQSxTQUFBLEdBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO3FCQUVBLFVBQUEsQ0FBQSxTQUFBLEdBQUEsU0FBQTs7OztXQTdCQSxxQkFBQTtFQUZBLGVBQUE7a0JBRUEscUJBQUEifQ==