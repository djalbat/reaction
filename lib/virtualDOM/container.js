"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainerElement;
    }
});
const _virtualDOMElement = /*#__PURE__*/ _interop_require_default(require("../virtualDOMElement"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainerElement extends _virtualDOMElement.default {
    constructor(props, domElement){
        super(props);
        this.domElement = domElement;
    }
    getDOMElement() {
        return this.domElement;
    }
    mount(parent, reference) {
        const children = this.getChildren();
        super.mount(parent, children);
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
        return this.domElement;
    }
    unmount() {
        this.domElement.parentElement.removeChild(this.domElement);
        super.unmount();
    }
    static fromDOMElement(domElement) {
        const children = [], props = {
            children
        }, virtualDOMNode = new ContainerElement(props, domElement);
        return virtualDOMNode;
    }
}
function parentDOMElement(parent) {
    let parentDOMElement = parent.getDOMElement();
    while(parentDOMElement === null){
        parent = parent.getParent();
        parentDOMElement = parent.getDOMElement();
    }
    return parentDOMElement;
}
function referenceDOMElement(reference) {
    const referenceDOMElement = reference !== null ? reference.getDOMElement() : null;
    return referenceDOMElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXJFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgZG9tRWxlbWVudCkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQocGFyZW50KS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2aXJ0dWFsRE9NTm9kZSA9IG5ldyBDb250YWluZXJFbGVtZW50KHByb3BzLCBkb21FbGVtZW50KTtcblxuICAgIHJldHVybiB2aXJ0dWFsRE9NTm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2UuZ2V0RE9NRWxlbWVudCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gIHJldHVybiByZWZlcmVuY2VET01FbGVtZW50O1xufVxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lckVsZW1lbnQiLCJWaXJ0dWFsRE9NRWxlbWVudCIsInByb3BzIiwiZG9tRWxlbWVudCIsImdldERPTUVsZW1lbnQiLCJtb3VudCIsInBhcmVudCIsInJlZmVyZW5jZSIsImNoaWxkcmVuIiwiZ2V0Q2hpbGRyZW4iLCJwYXJlbnRET01FbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwicmVmZXJlbmNlRE9NRWxlbWVudCIsInVubW91bnQiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJmcm9tRE9NRWxlbWVudCIsInZpcnR1YWxET01Ob2RlIiwiZ2V0UGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7OzBFQUZTOzs7Ozs7QUFFZixNQUFNQSx5QkFBeUJDLDBCQUFpQjtJQUM3RCxZQUFZQyxLQUFLLEVBQUVDLFVBQVUsQ0FBRTtRQUM3QixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRCxVQUFVO0lBQ3hCO0lBRUFFLE1BQU1DLE1BQU0sRUFBRUMsU0FBUyxFQUFFO1FBQ3ZCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRWpDLEtBQUssQ0FBQ0osTUFBTUMsUUFBUUU7UUFFcEJFLGlCQUFpQkosUUFBUUssWUFBWSxDQUFDLElBQUksQ0FBQ1IsVUFBVSxFQUFFUyxvQkFBb0JMO1FBRTNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFVLFVBQVU7UUFDUixJQUFJLENBQUNWLFVBQVUsQ0FBQ1csYUFBYSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDWixVQUFVO1FBRXpELEtBQUssQ0FBQ1U7SUFDUjtJQUVBLE9BQU9HLGVBQWViLFVBQVUsRUFBRTtRQUNoQyxNQUFNSyxXQUFXLEVBQUUsRUFDYk4sUUFBUTtZQUNOTTtRQUNGLEdBQ0FTLGlCQUFpQixJQUFJakIsaUJBQWlCRSxPQUFPQztRQUVuRCxPQUFPYztJQUNUO0FBQ0Y7QUFFQSxTQUFTUCxpQkFBaUJKLE1BQU07SUFDOUIsSUFBSUksbUJBQW1CSixPQUFPRixhQUFhO0lBRTNDLE1BQU9NLHFCQUFxQixLQUFNO1FBQ2hDSixTQUFTQSxPQUFPWSxTQUFTO1FBRXpCUixtQkFBbUJKLE9BQU9GLGFBQWE7SUFDekM7SUFFQSxPQUFPTTtBQUNUO0FBRUEsU0FBU0Usb0JBQW9CTCxTQUFTO0lBQ3BDLE1BQU1LLHNCQUFzQixBQUFDTCxjQUFjLE9BQ2JBLFVBQVVILGFBQWEsS0FDckI7SUFFaEMsT0FBT1E7QUFDVCJ9