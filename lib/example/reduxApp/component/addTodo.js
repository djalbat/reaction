"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = require("../../../index");
var _constants = require("../constants");
var id = 0, inputDOMElement;
var AddTodo = function(props, context) {
    var store = context.store;
    return /*#__PURE__*/ _index.React.createElement("div", null, /*#__PURE__*/ _index.React.createElement("input", {
        ref: function(domElement) {
            inputDOMElement = domElement;
        }
    }), /*#__PURE__*/ _index.React.createElement("button", {
        onClick: function() {
            var type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type: type,
                text: text,
                id: id
            };
            id++;
            store.dispatch(action);
            inputDOMElement.value = _constants.EMPTY_STRING;
        }
    }, "Add todo"));
};
var _default = AddTodo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgQUREX1RPRE8sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiJdLCJuYW1lcyI6WyJpZCIsImlucHV0RE9NRWxlbWVudCIsIkFkZFRvZG8iLCJwcm9wcyIsImNvbnRleHQiLCJzdG9yZSIsImRpdiIsImlucHV0IiwicmVmIiwiZG9tRWxlbWVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiQUREX1RPRE8iLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIkVNUFRZX1NUUklORyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7O3FCQTVDc0I7eUJBRWlCO0FBRXZDLElBQUlBLEtBQUssR0FDTEM7QUFFSixJQUFNQyxVQUFVLFNBQUNDLE9BQU9DO0lBQ3RCLElBQU0sQUFBRUMsUUFBVUQsUUFBVkM7SUFFUixxQkFFRSwyQkFBQ0MsMkJBQ0MsMkJBQUNDO1FBQU1DLEtBQUssU0FBQ0M7WUFFSlIsa0JBQWtCUTtRQUVwQjtzQkFFUCwyQkFBQ0M7UUFBT0MsU0FBUztZQUVQLElBQU1DLE9BQU9DLG1CQUFRLEVBQ2ZDLE9BQU9iLGdCQUFnQmMsS0FBSyxFQUM1QkMsU0FBUztnQkFDUEosTUFBQUE7Z0JBQ0FFLE1BQUFBO2dCQUNBZCxJQUFBQTtZQUNGO1lBRU5BO1lBRUFLLE1BQU1ZLFFBQVEsQ0FBQ0Q7WUFFZmYsZ0JBQWdCYyxLQUFLLEdBQUdHLHVCQUFZO1FBRXRDO09BQ1A7QUFNUDtJQUVBLFdBQWVoQiJ9