"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactClass;
    }
});
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
var ReactClass = /*#__PURE__*/ function() {
    function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        _classCallCheck(this, ReactClass);
        this.render = render;
        if (getInitialState) {
            this.getInitialState = getInitialState;
        }
        if (getChildContext) {
            this.getChildContext = getChildContext;
        }
        if (componentDidMount) {
            this.componentDidMount = componentDidMount;
        }
        if (componentWillUnmount) {
            this.componentWillUnmount = componentWillUnmount;
        }
        this.mixins = mixins;
    }
    _createClass(ReactClass, [
        {
            key: "getInitialState",
            value: function getInitialState() {
                return {};
            }
        },
        {
            key: "getChildContext",
            value: function getChildContext(context) {
                return context;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {}
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {}
        }
    ], [
        {
            key: "create",
            value: function create(object) {
                var render = object.render, getInitialState = object.getInitialState, getChildContext = object.getChildContext, componentDidMount = object.componentDidMount, componentWillUnmount = object.componentWillUnmount, mixins = object.mixins;
                return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
            }
        }
    ]);
    return ReactClass;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENsYXNzLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJlYWN0Q2xhc3MiLCJyZW5kZXIiLCJnZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwibWl4aW5zIiwiY29udGV4dCIsImNyZWF0ZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSwyQkFBTjthQUFNQSxXQUNQQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsb0JBQW9CLEVBQUVDLE1BQU07OEJBRGxGTjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFFZCxJQUFJQyxpQkFBaUI7WUFBRSxJQUFJLENBQUNBLGVBQWUsR0FBR0E7UUFBaUIsQ0FBQztRQUNoRSxJQUFJQyxpQkFBaUI7WUFBRSxJQUFJLENBQUNBLGVBQWUsR0FBR0E7UUFBaUIsQ0FBQztRQUNoRSxJQUFJQyxtQkFBbUI7WUFBRSxJQUFJLENBQUNBLGlCQUFpQixHQUFHQTtRQUFtQixDQUFDO1FBQ3RFLElBQUlDLHNCQUFzQjtZQUFFLElBQUksQ0FBQ0Esb0JBQW9CLEdBQUdBO1FBQXNCLENBQUM7UUFFL0UsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztpQkFUR047O1lBWW5CRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCO2dCQUNoQixPQUFPLENBQUM7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0JJLE9BQU8sRUFBRTtnQkFDdkIsT0FBT0E7WUFDVDs7O1lBRUFILEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0IsQ0FFcEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCLENBRXZCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLE9BQU9DLE1BQU0sRUFBRTtnQkFDcEIsSUFBUVIsU0FBOEZRLE9BQTlGUixRQUFRQyxrQkFBc0ZPLE9BQXRGUCxpQkFBaUJDLGtCQUFxRU0sT0FBckVOLGlCQUFpQkMsb0JBQW9ESyxPQUFwREwsbUJBQW1CQyx1QkFBaUNJLE9BQWpDSixzQkFBc0JDLFNBQVdHLE9BQVhIO2dCQUUzRixPQUFPLElBL0JVTixXQStCS0MsUUFBUUMsaUJBQWlCQyxpQkFBaUJDLG1CQUFtQkMsc0JBQXNCQztZQUMzRzs7O1dBaENtQk4ifQ==