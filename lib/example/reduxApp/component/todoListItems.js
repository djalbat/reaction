"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TodoListItems;
    }
});
const _index = require("../../../index");
const _todoListItem = /*#__PURE__*/ _interop_require_default(require("./todoListItem"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { Component } = _index.React;
class TodoListItems extends Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate();
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context, state = store.getState(), { todos, visibilityFilter } = state, visibleTodos = getVisibleTodos(todos, visibilityFilter), items = visibleTodos.map((visibleTodo)=>{
            const { id, text, completed } = visibleTodo;
            return /*#__PURE__*/ _index.React.createElement(_todoListItem.default, {
                text: text,
                completed: completed,
                clickHandler: ()=>{
                    const type = _constants.TOGGLE_TODO, action = {
                        type,
                        id
                    };
                    store.dispatch(action);
                }
            });
        });
        return items;
    }
}
const getVisibleTodos = (todos, visibilityFilter)=>{
    let visibleTodos;
    switch(visibilityFilter){
        case _constants.SHOW_ALL:
            visibleTodos = todos;
            break;
        case _constants.SHOW_ACTIVE:
            visibleTodos = todos.filter((todo)=>{
                const { completed } = todo, active = !completed;
                return active;
            });
            break;
        case _constants.SHOW_COMPLETED:
            visibleTodos = todos.filter((todo)=>{
                const { completed } = todo;
                return completed;
            });
            break;
    }
    return visibleTodos;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC90b2RvTGlzdEl0ZW1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFRvZG9MaXN0SXRlbSBmcm9tIFwiLi90b2RvTGlzdEl0ZW1cIjtcblxuaW1wb3J0IHsgU0hPV19BTEwsIFNIT1dfQUNUSVZFLCBTSE9XX0NPTVBMRVRFRCwgVE9HR0xFX1RPRE8gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3RJdGVtcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgeyB0b2RvcywgdmlzaWJpbGl0eUZpbHRlciB9ID0gc3RhdGUsXG4gICAgICAgICAgdmlzaWJsZVRvZG9zID0gZ2V0VmlzaWJsZVRvZG9zKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSxcbiAgICAgICAgICBpdGVtcyA9IHZpc2libGVUb2Rvcy5tYXAoKHZpc2libGVUb2RvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0ZXh0LCBjb21wbGV0ZWQgfSA9IHZpc2libGVUb2RvO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgIDxUb2RvTGlzdEl0ZW0gdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e2NvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGlja0hhbmRsZXI9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IFRPR0dMRV9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cbn1cblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCB2aXNpYmlsaXR5RmlsdGVyKSA9PiB7XG4gIGxldCB2aXNpYmxlVG9kb3M7XG5cbiAgc3dpdGNoICh2aXNpYmlsaXR5RmlsdGVyKSB7XG4gICAgY2FzZSBTSE9XX0FMTDpcbiAgICAgIHZpc2libGVUb2RvcyA9IHRvZG9zO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19BQ1RJVkU6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG8sXG4gICAgICAgICAgICAgIGFjdGl2ZSA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0hPV19DT01QTEVURUQ6XG4gICAgICB2aXNpYmxlVG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiB2aXNpYmxlVG9kb3M7XG59O1xuIl0sIm5hbWVzIjpbIlRvZG9MaXN0SXRlbXMiLCJDb21wb25lbnQiLCJSZWFjdCIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwic3RhdGUiLCJnZXRTdGF0ZSIsInRvZG9zIiwidmlzaWJpbGl0eUZpbHRlciIsInZpc2libGVUb2RvcyIsImdldFZpc2libGVUb2RvcyIsIml0ZW1zIiwibWFwIiwidmlzaWJsZVRvZG8iLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJUb2RvTGlzdEl0ZW0iLCJjbGlja0hhbmRsZXIiLCJ0eXBlIiwiVE9HR0xFX1RPRE8iLCJhY3Rpb24iLCJkaXNwYXRjaCIsIlNIT1dfQUxMIiwiU0hPV19BQ1RJVkUiLCJmaWx0ZXIiLCJ0b2RvIiwiYWN0aXZlIiwiU0hPV19DT01QTEVURUQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7dUJBUkM7cUVBRUc7MkJBRTBDOzs7Ozs7QUFFbkUsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsWUFBSztBQUVaLE1BQU1GLHNCQUFzQkM7SUFDekNFLG9CQUFvQjtRQUNsQixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQ0MsT0FBTztRQUU5QixJQUFJLENBQUNDLFdBQVcsR0FBR0YsTUFBTUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQ0MsV0FBVztRQUNsQjtJQUNGO0lBRUFDLHVCQUF1QjtRQUNyQixJQUFJLENBQUNILFdBQVc7SUFDbEI7SUFFQUksU0FBUztRQUNQLE1BQU0sRUFBRU4sS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQ3hCTSxRQUFRUCxNQUFNUSxRQUFRLElBQ3RCLEVBQUVDLEtBQUssRUFBRUMsZ0JBQWdCLEVBQUUsR0FBR0gsT0FDOUJJLGVBQWVDLGdCQUFnQkgsT0FBT0MsbUJBQ3RDRyxRQUFRRixhQUFhRyxHQUFHLENBQUMsQ0FBQ0M7WUFDeEIsTUFBTSxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFLEdBQUdIO1lBRWhDLHFCQUVFLDJCQUFDSSxxQkFBWTtnQkFBQ0YsTUFBTUE7Z0JBQ05DLFdBQVdBO2dCQUNYRSxjQUFjO29CQUVaLE1BQU1DLE9BQU9DLHNCQUFXLEVBQ2xCQyxTQUFTO3dCQUNQRjt3QkFDQUw7b0JBQ0Y7b0JBRU5oQixNQUFNd0IsUUFBUSxDQUFDRDtnQkFFakI7O1FBSWxCO1FBRU4sT0FBT1Y7SUFDVDtBQUNGO0FBRUEsTUFBTUQsa0JBQWtCLENBQUNILE9BQU9DO0lBQzlCLElBQUlDO0lBRUosT0FBUUQ7UUFDTixLQUFLZSxtQkFBUTtZQUNYZCxlQUFlRjtZQUVmO1FBRUYsS0FBS2lCLHNCQUFXO1lBQ2RmLGVBQWVGLE1BQU1rQixNQUFNLENBQUMsQ0FBQ0M7Z0JBQzNCLE1BQU0sRUFBRVYsU0FBUyxFQUFFLEdBQUdVLE1BQ2hCQyxTQUFTLENBQUNYO2dCQUVoQixPQUFPVztZQUNUO1lBRUE7UUFFRixLQUFLQyx5QkFBYztZQUNqQm5CLGVBQWVGLE1BQU1rQixNQUFNLENBQUMsQ0FBQ0M7Z0JBQzNCLE1BQU0sRUFBRVYsU0FBUyxFQUFFLEdBQUdVO2dCQUV0QixPQUFPVjtZQUNUO1lBRUE7SUFDSjtJQUVBLE9BQU9QO0FBQ1QifQ==