"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactClassElement;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("../react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReactClassElement extends _react.default {
    constructor(reactClass, props){
        super(props);
        this.reactClass = reactClass;
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
    }
    render(update) {
        return this.reactClass.render.call(this, update, this);
    }
    getInitialState() {
        return this.reactClass.getInitialState.call(this);
    }
    getChildContext(context) {
        return this.reactClass.getChildContext.call(this, context);
    }
    childContextSet(childContext) {
        this.reactClass.childContextSet.call(this, childContext);
    }
    componentDidMount() {
        this.reactClass.componentDidMount.call(this);
    }
    componentWillUnmount() {
        this.reactClass.componentWillUnmount.call(this);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL3JlYWN0L2NsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuLi9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5jYWxsKHRoaXMsIGNvbnRleHQpO1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jaGlsZENvbnRleHRTZXQuY2FsbCh0aGlzLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmNhbGwodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0Q2xhc3NFbGVtZW50IiwiUmVhY3RFbGVtZW50IiwicmVhY3RDbGFzcyIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwicmVuZGVyIiwidXBkYXRlIiwiY2FsbCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJjaGlsZENvbnRleHRTZXQiLCJjaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzhEQUZJOzs7Ozs7QUFFVixNQUFNQSwwQkFBMEJDLGNBQVk7SUFDekQsWUFBWUMsVUFBVSxFQUFFQyxLQUFLLENBQUU7UUFDN0IsS0FBSyxDQUFDQTtRQUVOLElBQUksQ0FBQ0QsVUFBVSxHQUFHQTtRQUVsQixNQUFNRSxlQUFlLElBQUksQ0FBQ0MsZUFBZTtRQUV6QyxJQUFJLENBQUNDLGVBQWUsQ0FBQ0Y7SUFDdkI7SUFFQUcsT0FBT0MsTUFBTSxFQUFFO1FBQ2IsT0FBTyxJQUFJLENBQUNOLFVBQVUsQ0FBQ0ssTUFBTSxDQUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFRCxRQUFRLElBQUk7SUFDdkQ7SUFFQUgsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNHLGVBQWUsQ0FBQ0ksSUFBSSxDQUFDLElBQUk7SUFDbEQ7SUFFQUMsZ0JBQWdCQyxPQUFPLEVBQUU7UUFDdkIsT0FBTyxJQUFJLENBQUNULFVBQVUsQ0FBQ1EsZUFBZSxDQUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFRTtJQUNwRDtJQUVBQyxnQkFBZ0JDLFlBQVksRUFBRTtRQUM1QixJQUFJLENBQUNYLFVBQVUsQ0FBQ1UsZUFBZSxDQUFDSCxJQUFJLENBQUMsSUFBSSxFQUFFSTtJQUM3QztJQUVBQyxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDWixVQUFVLENBQUNZLGlCQUFpQixDQUFDTCxJQUFJLENBQUMsSUFBSTtJQUM3QztJQUVBTSx1QkFBdUI7UUFDckIsSUFBSSxDQUFDYixVQUFVLENBQUNhLG9CQUFvQixDQUFDTixJQUFJLENBQUMsSUFBSTtJQUNoRDtBQUNGIn0=