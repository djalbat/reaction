"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SVGElement;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _name = require("../../../utilities/name");
const _constants = require("../../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SVGElement extends _element.default {
    constructor(tagName, props){
        const domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        super(props, domElement);
    }
    isAttributeName(name) {
        return (0, _name.isSVGAttributeName)(name);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L3N2Zy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNWR0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKEhUVFBfV1dXX1czX09SR18yMDAwX1NWRywgdGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTVkdFbGVtZW50IiwiRWxlbWVudCIsInRhZ05hbWUiLCJwcm9wcyIsImRvbUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnROUyIsIkhUVFBfV1dXX1czX09SR18yMDAwX1NWRyIsImlzQXR0cmlidXRlTmFtZSIsIm5hbWUiLCJpc1NWR0F0dHJpYnV0ZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7Z0VBTEQ7c0JBRWU7MkJBQ007Ozs7OztBQUUxQixNQUFNQSxtQkFBbUJDLGdCQUFPO0lBQzdDLFlBQVlDLE9BQU8sRUFBRUMsS0FBSyxDQUFFO1FBQzFCLE1BQU1DLGFBQWFDLFNBQVNDLGVBQWUsQ0FBQ0MsbUNBQXdCLEVBQUVMO1FBRXRFLEtBQUssQ0FBQ0MsT0FBT0M7SUFDZjtJQUVBSSxnQkFBZ0JDLElBQUksRUFBRTtRQUNwQixPQUFPQyxJQUFBQSx3QkFBa0IsRUFBQ0Q7SUFDNUI7QUFDRiJ9