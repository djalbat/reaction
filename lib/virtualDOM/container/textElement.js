"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TextElement;
    }
});
const _container = /*#__PURE__*/ _interop_require_default(require("../container"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class TextElement extends _container.default {
    constructor(text){
        const domElement = document.createTextNode(text), children = [], props = {
            children
        };
        super(props, domElement);
    }
    mount(parent, reference, context) {
        super.mount(parent, reference);
    }
    unmount(context) {
        super.unmount();
    }
    getText() {
        const nodeValue = this.domElement.nodeValue, text = nodeValue; ///
        return text;
    }
    setText(text) {
        const nodeValue = text; ///
        this.domElement.nodeValue = nodeValue;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRhaW5lckVsZW1lbnQgZnJvbSBcIi4uL2NvbnRhaW5lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIENvbnRhaW5lckVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpLFxuICAgICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXh0RWxlbWVudCIsIkNvbnRhaW5lckVsZW1lbnQiLCJ0ZXh0IiwiZG9tRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjaGlsZHJlbiIsInByb3BzIiwibW91bnQiLCJwYXJlbnQiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwidW5tb3VudCIsImdldFRleHQiLCJub2RlVmFsdWUiLCJzZXRUZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O2tFQUZROzs7Ozs7QUFFZCxNQUFNQSxvQkFBb0JDLGtCQUFnQjtJQUN2RCxZQUFZQyxJQUFJLENBQUU7UUFDaEIsTUFBTUMsYUFBYUMsU0FBU0MsY0FBYyxDQUFDSCxPQUNyQ0ksV0FBVyxFQUFFLEVBQ2JDLFFBQVE7WUFDTkQ7UUFDRjtRQUVOLEtBQUssQ0FBQ0MsT0FBT0o7SUFDZjtJQUVBSyxNQUFNQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFO1FBQ2hDLEtBQUssQ0FBQ0gsTUFBTUMsUUFBUUM7SUFDdEI7SUFFQUUsUUFBUUQsT0FBTyxFQUFFO1FBQ2YsS0FBSyxDQUFDQztJQUNSO0lBRUFDLFVBQVU7UUFDUixNQUFNQyxZQUFZLElBQUksQ0FBQ1gsVUFBVSxDQUFDVyxTQUFTLEVBQ3JDWixPQUFPWSxXQUFXLEdBQUc7UUFFM0IsT0FBT1o7SUFDVDtJQUVBYSxRQUFRYixJQUFJLEVBQUU7UUFDWixNQUFNWSxZQUFZWixNQUFNLEdBQUc7UUFFM0IsSUFBSSxDQUFDQyxVQUFVLENBQUNXLFNBQVMsR0FBR0E7SUFDOUI7QUFDRiJ9