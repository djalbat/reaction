"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Provider;
    }
});
const _index = require("../../../index");
const { Component } = _index.React;
class Provider extends Component {
    getChildContext(context) {
        const { store } = this.props, childContext = {
            store
        };
        return childContext;
    }
    childContextSet(childContext) {
    ///
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9wcm92aWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0ge1xuICAgICAgICAgICAgc3RvcmVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGNoaWxkQ29udGV4dDtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJDb21wb25lbnQiLCJSZWFjdCIsImdldENoaWxkQ29udGV4dCIsImNvbnRleHQiLCJzdG9yZSIsInByb3BzIiwiY2hpbGRDb250ZXh0IiwiY2hpbGRDb250ZXh0U2V0IiwicmVuZGVyIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUJBSkM7QUFFdEIsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsWUFBSztBQUVaLE1BQU1GLGlCQUFpQkM7SUFDcENFLGdCQUFnQkMsT0FBTyxFQUFFO1FBQ3ZCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxLQUFLLEVBQ3RCQyxlQUFlO1lBQ2JGO1FBQ0Y7UUFFTixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQkQsWUFBWSxFQUFFO0lBQzVCLEdBQUc7SUFDTDtJQUVBRSxTQUFTO1FBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUNKLEtBQUs7UUFFL0IsT0FBT0k7SUFDVDtBQUNGIn0=