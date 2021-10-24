"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = first;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.remaining = remaining;
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function first(array) {
    return array[0];
}
function flatten(array1) {
    return array1.reduce(function(array, element) {
        array = array.concat(element); ///
        return array;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}
function remaining(element, array) {
    if (element === null) {
        return array;
    }
    var index = indexOf(element, array);
    return array.slice(index + 1);
}
function indexOf(element, array) {
    var index = null;
    array.some(function(currentElement, currentElementIndex) {
        if (currentElement === element) {
            index = currentElementIndex;
            return true;
        }
    });
    return index;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwicmVtYWluaW5nIiwiYXJyYXkiLCJyZWR1Y2UiLCJlbGVtZW50IiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwic29tZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEVsZW1lbnRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7OztRQUVJQSxLQUFLLEdBQUxBLEtBQUs7UUFFTEMsT0FBTyxHQUFQQSxPQUFPO1FBUVBDLFNBQVMsR0FBVEEsU0FBUztRQVFUQyxTQUFTLEdBQVRBLFNBQVM7Ozs7Ozs7O1NBbEJUSCxLQUFLLENBQUNJLEtBQUssRUFBRSxDQUFDO0lBQUMsTUFBTSxDQUFDQSxLQUFLLENBQUMsQ0FBQztBQUFHLENBQUM7U0FFakNILE9BQU8sQ0FBQ0csTUFBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxDQUFDQSxNQUFLLENBQUNDLE1BQU0sQ0FBQyxRQUFRQyxDQUFQRixLQUFLLEVBQUVFLE9BQU8sRUFBSyxDQUFDO1FBQ3ZDRixLQUFLLEdBQUdBLEtBQUssQ0FBQ0csTUFBTSxDQUFDRCxPQUFPLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1FBRW5DLE1BQU0sQ0FBQ0YsS0FBSztJQUNkLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDUCxDQUFDO1NBRWVGLFNBQVMsQ0FBQ00sY0FBYyxFQUFFLENBQUM7SUFDekNBLGNBQWMsR0FBR0EsY0FBYyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUVBLFdBQStCLENBQS9CQSxjQUFjLEVBQVlDLEtBQUssSUFDN0JELGNBQWMsR0FDWixDQUFDQTtRQUFBQSxjQUFjO0lBQUEsQ0FBQztBQUM5QixDQUFDO1NBRWVMLFNBQVMsQ0FBQ0csT0FBTyxFQUFFRixLQUFLLEVBQUUsQ0FBQztJQUN6QyxFQUFFLEVBQUVFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUNGLEtBQUs7SUFDZCxDQUFDO0lBRUQsR0FBSyxDQUFDTSxLQUFLLEdBQUdDLE9BQU8sQ0FBQ0wsT0FBTyxFQUFFRixLQUFLO0lBRXBDLE1BQU0sQ0FBQ0EsS0FBSyxDQUFDUSxLQUFLLENBQUNGLEtBQUssR0FBRyxDQUFDO0FBQzlCLENBQUM7U0FFUUMsT0FBTyxDQUFDTCxPQUFPLEVBQUVGLEtBQUssRUFBRSxDQUFDO0lBQ2hDLEdBQUcsQ0FBQ00sS0FBSyxHQUFHLElBQUk7SUFFaEJOLEtBQUssQ0FBQ1MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsY0FBYyxFQUFFQyxtQkFBbUIsRUFBSyxDQUFDO1FBQ25ELEVBQUUsRUFBRUQsY0FBYyxLQUFLUixPQUFPLEVBQUUsQ0FBQztZQUMvQkksS0FBSyxHQUFHSyxtQkFBbUI7WUFFM0IsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQ0wsS0FBSztBQUNkLENBQUMifQ==