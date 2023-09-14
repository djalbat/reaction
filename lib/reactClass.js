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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var ReactClass = /*#__PURE__*/ function() {
    function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        _class_call_check(this, ReactClass);
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
    _create_class(ReactClass, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3RDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtaXhpbnMiLCJjb250ZXh0IiwiY3JlYXRlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDJCQUFOO2FBQU1BLFdBQ1BDLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLGlCQUFpQixFQUFFQyxvQkFBb0IsRUFBRUMsTUFBTTtnQ0FEbEZOO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUVkLElBQUlDLGlCQUFpQjtZQUFFLElBQUksQ0FBQ0EsZUFBZSxHQUFHQTtRQUFpQjtRQUMvRCxJQUFJQyxpQkFBaUI7WUFBRSxJQUFJLENBQUNBLGVBQWUsR0FBR0E7UUFBaUI7UUFDL0QsSUFBSUMsbUJBQW1CO1lBQUUsSUFBSSxDQUFDQSxpQkFBaUIsR0FBR0E7UUFBbUI7UUFDckUsSUFBSUMsc0JBQXNCO1lBQUUsSUFBSSxDQUFDQSxvQkFBb0IsR0FBR0E7UUFBc0I7UUFFOUUsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFUR047O1lBWW5CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxDQUFDO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCSSxPQUFPO2dCQUNyQixPQUFPQTtZQUNUOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUVBOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUVBOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLE9BQU9DLE1BQU07Z0JBQ2xCLElBQVFSLFNBQThGUSxPQUE5RlIsUUFBUUMsa0JBQXNGTyxPQUF0RlAsaUJBQWlCQyxrQkFBcUVNLE9BQXJFTixpQkFBaUJDLG9CQUFvREssT0FBcERMLG1CQUFtQkMsdUJBQWlDSSxPQUFqQ0osc0JBQXNCQyxTQUFXRyxPQUFYSDtnQkFFM0YsT0FBTyxJQS9CVU4sV0ErQktDLFFBQVFDLGlCQUFpQkMsaUJBQWlCQyxtQkFBbUJDLHNCQUFzQkM7WUFDM0c7OztXQWhDbUJOIn0=