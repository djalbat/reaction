"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FilterLink;
    }
});
const _index = require("../../../index");
const _constants = require("../constants");
const { Component } = _index.React;
class FilterLink extends Component {
    updateHandler = ()=>{
        this.forceUpdate();
    };
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(this.updateHandler);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context, state = store.getState(), { visibilityFilter } = state, { children, filter } = this.props, active = filter === visibilityFilter;
        if (active) {
            return /*#__PURE__*/ _index.React.createElement("span", null, children);
        }
        return /*#__PURE__*/ _index.React.createElement("a", {
            href: "#",
            className: "filter",
            onClick: (event)=>{
                event.preventDefault();
                const type = _constants.SET_VISIBILITY_FILTER, visibilityFilter = filter, action = {
                    type,
                    visibilityFilter
                };
                store.dispatch(action);
            }
        }, children);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9maWx0ZXJMaW5rLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgU0VUX1ZJU0lCSUxJVFlfRklMVEVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICB1cGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUodGhpcy51cGRhdGVIYW5kbGVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgeyBjaGlsZHJlbiwgZmlsdGVyIH0gPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGFjdGl2ZSA9IChmaWx0ZXIgPT09IHZpc2liaWxpdHlGaWx0ZXIpO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPlxuXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlclwiXG4gICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcblxuICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgIGNvbnN0IHR5cGUgPSBTRVRfVklTSUJJTElUWV9GSUxURVIsXG4gICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXIgPSBmaWx0ZXIsXG4gICAgICAgICAgICAgICAgIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2E+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbHRlckxpbmsiLCJDb21wb25lbnQiLCJSZWFjdCIsInVwZGF0ZUhhbmRsZXIiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ2aXNpYmlsaXR5RmlsdGVyIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJwcm9wcyIsImFjdGl2ZSIsInNwYW4iLCJhIiwiaHJlZiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHlwZSIsIlNFVF9WSVNJQklMSVRZX0ZJTFRFUiIsImFjdGlvbiIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXFCQTs7O3VCQU5DOzJCQUVnQjtBQUV0QyxNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyxZQUFLO0FBRVosTUFBTUYsbUJBQW1CQztJQUN0Q0UsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDQyxXQUFXO0lBQ2xCLEVBQUM7SUFFREMsb0JBQW9CO1FBQ2xCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxPQUFPO1FBRTlCLElBQUksQ0FBQ0MsV0FBVyxHQUFHRixNQUFNRyxTQUFTLENBQUMsSUFBSSxDQUFDTixhQUFhO0lBQ3ZEO0lBRUFPLHVCQUF1QjtRQUNyQixJQUFJLENBQUNGLFdBQVc7SUFDbEI7SUFFQUcsU0FBUztRQUNQLE1BQU0sRUFBRUwsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQ3hCSyxRQUFRTixNQUFNTyxRQUFRLElBQ3RCLEVBQUVDLGdCQUFnQixFQUFFLEdBQUdGLE9BQ3ZCLEVBQUVHLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLLEVBQ2pDQyxTQUFVRixXQUFXRjtRQUUzQixJQUFJSSxRQUFRO1lBQ1YscUJBRUUsMkJBQUNDLGNBQU1KO1FBR1g7UUFFQSxxQkFFRSwyQkFBQ0s7WUFBRUMsTUFBSztZQUNMQyxXQUFVO1lBQ1ZDLFNBQVMsQ0FBQ0M7Z0JBRVJBLE1BQU1DLGNBQWM7Z0JBRXBCLE1BQU1DLE9BQU9DLGdDQUFxQixFQUM1QmIsbUJBQW1CRSxRQUNuQlksU0FBUztvQkFDUEY7b0JBQ0FaO2dCQUNGO2dCQUVOUixNQUFNdUIsUUFBUSxDQUFDRDtZQUVqQjtXQUVBYjtJQUdQO0FBQ0YifQ==