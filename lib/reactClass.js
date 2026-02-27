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
class ReactClass {
    constructor(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins){
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
    getInitialState() {
        return {};
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
    static create(object) {
        const { render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins } = object;
        return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3RDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtaXhpbnMiLCJjb250ZXh0IiwiY2hpbGRDb250ZXh0U2V0IiwiY2hpbGRDb250ZXh0IiwiY3JlYXRlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXFCQTs7O0FBQU4sTUFBTUE7SUFDbkIsWUFBWUMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCLEVBQUVDLG9CQUFvQixFQUFFQyxNQUFNLENBQUU7UUFDckcsSUFBSSxDQUFDTCxNQUFNLEdBQUdBO1FBRWQsSUFBSUMsaUJBQWlCO1lBQUUsSUFBSSxDQUFDQSxlQUFlLEdBQUdBO1FBQWlCO1FBQy9ELElBQUlDLGlCQUFpQjtZQUFFLElBQUksQ0FBQ0EsZUFBZSxHQUFHQTtRQUFpQjtRQUMvRCxJQUFJQyxtQkFBbUI7WUFBRSxJQUFJLENBQUNBLGlCQUFpQixHQUFHQTtRQUFtQjtRQUNyRSxJQUFJQyxzQkFBc0I7WUFBRSxJQUFJLENBQUNBLG9CQUFvQixHQUFHQTtRQUFzQjtRQUU5RSxJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUosa0JBQWtCO1FBQ2hCLE9BQU8sQ0FBQztJQUNWO0lBRUFDLGdCQUFnQkksT0FBTyxFQUFFO1FBQ3ZCLE9BQU9BO0lBQ1Q7SUFFQUMsZ0JBQWdCQyxZQUFZLEVBQUU7SUFDNUIsR0FBRztJQUNMO0lBRUFMLG9CQUFvQjtJQUNsQixHQUFHO0lBQ0w7SUFFQUMsdUJBQXVCO0lBQ3JCLEdBQUc7SUFDTDtJQUVBLE9BQU9LLE9BQU9DLE1BQU0sRUFBRTtRQUNwQixNQUFNLEVBQUVWLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLGlCQUFpQixFQUFFQyxvQkFBb0IsRUFBRUMsTUFBTSxFQUFFLEdBQUdLO1FBRXRHLE9BQU8sSUFBSVgsV0FBV0MsUUFBUUMsaUJBQWlCQyxpQkFBaUJDLG1CQUFtQkMsc0JBQXNCQztJQUMzRztBQUNGIn0=