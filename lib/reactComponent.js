"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactComponent;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(require("./virtualDOM/react"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ReactComponent extends _react.default {
    constructor(props){
        super(props);
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENvbXBvbmVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlYWN0RWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q29tcG9uZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCBpbml0aWFsU3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0Q29tcG9uZW50IiwiUmVhY3RFbGVtZW50IiwicHJvcHMiLCJpbml0aWFsU3RhdGUiLCJnZXRJbml0aWFsU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJnZXRDaGlsZENvbnRleHQiLCJjb250ZXh0IiwiY2hpbGRDb250ZXh0U2V0IiwiY2hpbGRDb250ZXh0IiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnRXaWxsVW5tb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFxQkE7Ozs4REFGSTs7Ozs7O0FBRVYsTUFBTUEsdUJBQXVCQyxjQUFZO0lBQ3RELFlBQVlDLEtBQUssQ0FBRTtRQUNqQixLQUFLLENBQUNBO1FBRU4sTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWU7UUFFekMsSUFBSSxDQUFDQyxlQUFlLENBQUNGO0lBQ3ZCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLENBQUM7SUFDVjtJQUVBRSxnQkFBZ0JDLE9BQU8sRUFBRTtRQUN2QixPQUFPQTtJQUNUO0lBRUFDLGdCQUFnQkMsWUFBWSxFQUFFO0lBQzVCLEdBQUc7SUFDTDtJQUVBQyxvQkFBb0I7SUFDbEIsR0FBRztJQUNMO0lBRUFDLHVCQUF1QjtJQUNyQixHQUFHO0lBQ0w7QUFDRiJ9