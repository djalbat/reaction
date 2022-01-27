"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = ReactClass;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdENsYXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcblxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cblxuICAgIHRoaXMubWl4aW5zID0gbWl4aW5zO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZShvYmplY3QpIHtcbiAgICBjb25zdCB7IHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zIH0gPSBvYmplY3Q7XG5cbiAgICByZXR1cm4gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50LCBtaXhpbnMpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUmVhY3RDbGFzcyIsInJlbmRlciIsImdldEluaXRpYWxTdGF0ZSIsImdldENoaWxkQ29udGV4dCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJtaXhpbnMiLCJjb250ZXh0IiwiY3JlYXRlIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFU0EsVUFBVSxpQkFBaEIsUUFBUTthQUFGQSxVQUFVLENBQ2pCQyxNQUFNLEVBQUVDLGVBQWUsRUFBRUMsZUFBZSxFQUFFQyxpQkFBaUIsRUFBRUMsb0JBQW9CLEVBQUVDLE1BQU07O1FBQ25HLElBQUksQ0FBQ0wsTUFBTSxHQUFHQSxNQUFNO1FBRXBCLEVBQUUsRUFBRUMsZUFBZSxFQUFFLENBQUM7WUFBQyxJQUFJLENBQUNBLGVBQWUsR0FBR0EsZUFBZTtRQUFFLENBQUM7UUFDaEUsRUFBRSxFQUFFQyxlQUFlLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQ0EsZUFBZSxHQUFHQSxlQUFlO1FBQUUsQ0FBQztRQUNoRSxFQUFFLEVBQUVDLGlCQUFpQixFQUFFLENBQUM7WUFBQyxJQUFJLENBQUNBLGlCQUFpQixHQUFHQSxpQkFBaUI7UUFBRSxDQUFDO1FBQ3RFLEVBQUUsRUFBRUMsb0JBQW9CLEVBQUUsQ0FBQztZQUFDLElBQUksQ0FBQ0Esb0JBQW9CLEdBQUdBLG9CQUFvQjtRQUFFLENBQUM7UUFFL0UsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07Ozs7WUFHdEJKLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkEsUUFBUSxDQUFSQSxlQUFlLEdBQUcsQ0FBQztnQkFDakIsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7OztZQUVEQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxDQUFDSSxPQUFPLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDQSxPQUFPO1lBQ2hCLENBQUM7OztZQUVESCxHQUFpQixFQUFqQkEsQ0FBaUI7bUJBQWpCQSxRQUFRLENBQVJBLGlCQUFpQixHQUFHLENBQUMsQUFFckIsQ0FBQzs7O1lBRURDLEdBQW9CLEVBQXBCQSxDQUFvQjttQkFBcEJBLFFBQVEsQ0FBUkEsb0JBQW9CLEdBQUcsQ0FBQyxBQUV4QixDQUFDOzs7O1lBRU1HLEdBQU0sRUFBTkEsQ0FBTTttQkFBYixRQUFRLENBQURBLE1BQU0sQ0FBQ0MsTUFBTSxFQUFFLENBQUM7Z0JBQ3JCLEdBQUssQ0FBR1IsTUFBTSxHQUF3RlEsTUFBTSxDQUFwR1IsTUFBTSxFQUFFQyxlQUFlLEdBQXVFTyxNQUFNLENBQTVGUCxlQUFlLEVBQUVDLGVBQWUsR0FBc0RNLE1BQU0sQ0FBM0VOLGVBQWUsRUFBRUMsaUJBQWlCLEdBQW1DSyxNQUFNLENBQTFETCxpQkFBaUIsRUFBRUMsb0JBQW9CLEdBQWFJLE1BQU0sQ0FBdkNKLG9CQUFvQixFQUFFQyxNQUFNLEdBQUtHLE1BQU0sQ0FBakJILE1BQU07Z0JBRWpHLE1BQU0sQ0FBQyxHQUFHLENBQUNOLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBRUMsaUJBQWlCLEVBQUVDLG9CQUFvQixFQUFFQyxNQUFNO1lBQ2pILENBQUM7Ozs7O2tCQWhDa0JOLFVBQVUifQ==