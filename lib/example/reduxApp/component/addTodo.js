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
const _index = require("../../../index");
const _constants = require("../constants");
let id = 0, inputDOMElement;
const AddTodo = (props, context)=>{
    const { store } = context;
    return /*#__PURE__*/ _index.React.createElement("div", null, /*#__PURE__*/ _index.React.createElement("input", {
        ref: (domElement)=>{
            inputDOMElement = domElement;
        }
    }), /*#__PURE__*/ _index.React.createElement("button", {
        onClick: ()=>{
            const type = _constants.ADD_TODO, text = inputDOMElement.value, action = {
                type,
                text,
                id
            };
            id++;
            store.dispatch(action);
            inputDOMElement.value = _constants.EMPTY_STRING;
        }
    }, "Add todo"));
};
const _default = AddTodo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3JlZHV4QXBwL2NvbXBvbmVudC9hZGRUb2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IHsgQUREX1RPRE8sIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxubGV0IGlkID0gMCxcbiAgICBpbnB1dERPTUVsZW1lbnQ7XG5cbmNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdG9yZSB9ID0gY29udGV4dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9eyhkb21FbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgIGlucHV0RE9NRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG5cbiAgICAgICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IEFERF9UT0RPLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSBpbnB1dERPTUVsZW1lbnQudmFsdWUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlkKys7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgaW5wdXRET01FbGVtZW50LnZhbHVlID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkVG9kbztcbiJdLCJuYW1lcyI6WyJpZCIsImlucHV0RE9NRWxlbWVudCIsIkFkZFRvZG8iLCJwcm9wcyIsImNvbnRleHQiLCJzdG9yZSIsImRpdiIsImlucHV0IiwicmVmIiwiZG9tRWxlbWVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0eXBlIiwiQUREX1RPRE8iLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb24iLCJkaXNwYXRjaCIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOENBOzs7ZUFBQTs7O3VCQTVDc0I7MkJBRWlCO0FBRXZDLElBQUlBLEtBQUssR0FDTEM7QUFFSixNQUFNQyxVQUFVLENBQUNDLE9BQU9DO0lBQ3RCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdEO0lBRWxCLHFCQUVFLDJCQUFDRSwyQkFDQywyQkFBQ0M7UUFBTUMsS0FBSyxDQUFDQztZQUVKUixrQkFBa0JRO1FBRXBCO3NCQUVQLDJCQUFDQztRQUFPQyxTQUFTO1lBRVAsTUFBTUMsT0FBT0MsbUJBQVEsRUFDZkMsT0FBT2IsZ0JBQWdCYyxLQUFLLEVBQzVCQyxTQUFTO2dCQUNQSjtnQkFDQUU7Z0JBQ0FkO1lBQ0Y7WUFFTkE7WUFFQUssTUFBTVksUUFBUSxDQUFDRDtZQUVmZixnQkFBZ0JjLEtBQUssR0FBR0csdUJBQVk7UUFFdEM7T0FDUDtBQU1QO01BRUEsV0FBZWhCIn0=