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
function flatten(array) {
    return array.reduce(function(array, element) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheSIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJlbGVtZW50IiwiY29uY2F0IiwiZ3VhcmFudGVlIiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSIsInJlbWFpbmluZyIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwic29tZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEVsZW1lbnRJbmRleCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7OztRQUVJLEtBQUssR0FBTCxLQUFLO1FBRUwsT0FBTyxHQUFQLE9BQU87UUFRUCxTQUFTLEdBQVQsU0FBUztRQVFULFNBQVMsR0FBVCxTQUFTOzs7Ozs7OztTQWxCVCxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFBRyxDQUFDO1NBRWpDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQVAsS0FBSyxFQUFFLE9BQU8sRUFBSyxDQUFDO1FBQ3ZDLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7UUFFbkMsTUFBTSxDQUFDLEtBQUs7SUFDZCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztTQUVlLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxjQUFjLEdBQUcsY0FBYyxJQUFJLENBQUMsQ0FBQztJQUVyQyxNQUFNLENBQUUsV0FBK0IsQ0FBL0IsY0FBYyxFQUFZLEtBQUssSUFDN0IsY0FBYyxHQUNaLENBQUM7UUFBQSxjQUFjO0lBQUEsQ0FBQztBQUM5QixDQUFDO1NBRWUsU0FBUyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN6QyxFQUFFLEVBQUUsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxLQUFLO0lBQ2QsQ0FBQztJQUVELEdBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLO0lBRXBDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO0FBQzlCLENBQUM7U0FFUSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSTtJQUVoQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBUCxjQUFjLEVBQUUsbUJBQW1CLEVBQUssQ0FBQztRQUNuRCxFQUFFLEVBQUUsY0FBYyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUssR0FBRyxtQkFBbUI7WUFFM0IsTUFBTSxDQUFDLElBQUk7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIl19