"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactFunctionElement;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("../react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReactFunctionElement extends _react.default {
    constructor(reactFunction, props){
        super(props);
        this.reactFunction = reactFunction;
    }
    render(update) {
        return this.reactFunction(this.props, this.context, update, this);
    }
    getInitialState() {
    ///
    }
    getChildContext(context) {
        return context;
    }
    childContextSet(childContext) {
    ///
    }
    componentDidMount() {
    ///
    }
    componentWillUnmount() {
    ///
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgfVxuIFxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQsIHVwZGF0ZSwgdGhpcyk7XG4gIH1cblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdEZ1bmN0aW9uRWxlbWVudCIsIlJlYWN0RWxlbWVudCIsInJlYWN0RnVuY3Rpb24iLCJwcm9wcyIsInJlbmRlciIsInVwZGF0ZSIsImNvbnRleHQiLCJnZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjaGlsZENvbnRleHRTZXQiLCJjaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZJOzs7Ozs7QUFFVixNQUFNQSw2QkFBNkJDLGNBQVk7SUFDNUQsWUFBWUMsYUFBYSxFQUFFQyxLQUFLLENBQUU7UUFDaEMsS0FBSyxDQUFDQTtRQUVOLElBQUksQ0FBQ0QsYUFBYSxHQUFHQTtJQUN2QjtJQUVBRSxPQUFPQyxNQUFNLEVBQUU7UUFDYixPQUFPLElBQUksQ0FBQ0gsYUFBYSxDQUFDLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0csT0FBTyxFQUFFRCxRQUFRLElBQUk7SUFDbEU7SUFFQUUsa0JBQWtCO0lBQ2hCLEdBQUc7SUFDTDtJQUVBQyxnQkFBZ0JGLE9BQU8sRUFBRTtRQUN2QixPQUFPQTtJQUNUO0lBRUFHLGdCQUFnQkMsWUFBWSxFQUFFO0lBQzVCLEdBQUc7SUFDTDtJQUVBQyxvQkFBb0I7SUFDbEIsR0FBRztJQUNMO0lBRUFDLHVCQUF1QjtJQUNyQixHQUFHO0lBQ0w7QUFDRiJ9