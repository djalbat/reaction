"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return HTMLElement;
    }
});
const _element = /*#__PURE__*/ _interop_require_default(require("../element"));
const _name = require("../../../utilities/name");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class HTMLElement extends _element.default {
    constructor(tagName, props){
        const domElement = document.createElement(tagName);
        super(props, domElement);
    }
    isAttributeName(name) {
        return (0, _name.isHTMLAttributeName)(name);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L2h0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFRNTEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGFnTmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIVE1MRWxlbWVudCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwicHJvcHMiLCJkb21FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaXNBdHRyaWJ1dGVOYW1lIiwibmFtZSIsImlzSFRNTEF0dHJpYnV0ZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7Z0VBSkQ7c0JBRWdCOzs7Ozs7QUFFckIsTUFBTUEsb0JBQW9CQyxnQkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLEtBQUssQ0FBRTtRQUMxQixNQUFNQyxhQUFhQyxTQUFTQyxhQUFhLENBQUNKO1FBRTFDLEtBQUssQ0FBQ0MsT0FBT0M7SUFDZjtJQUVBRyxnQkFBZ0JDLElBQUksRUFBRTtRQUNwQixPQUFPQyxJQUFBQSx5QkFBbUIsRUFBQ0Q7SUFDN0I7QUFDRiJ9