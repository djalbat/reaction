"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get first () {
        return first;
    },
    get flatten () {
        return flatten;
    },
    get guarantee () {
        return guarantee;
    },
    get remaining () {
        return remaining;
    }
});
function first(array) {
    return array[0];
}
function flatten(array) {
    return array.reduce((array, element)=>{
        array = array.concat(element); ///
        return array;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return arrayOrElement instanceof Array ? arrayOrElement : [
        arrayOrElement
    ];
}
function remaining(element, array) {
    if (element === null) {
        return array;
    }
    const index = indexOf(element, array);
    return array.slice(index + 1);
}
function indexOf(element, array) {
    let index = null;
    array.some((currentElement, currentElementIndex)=>{
        if (currentElement === element) {
            index = currentElementIndex;
            return true;
        }
    });
    return index;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwicmVtYWluaW5nIiwiYXJyYXkiLCJyZWR1Y2UiLCJlbGVtZW50IiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwic29tZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEVsZW1lbnRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBRWdCQTtlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7O0FBbEJULFNBQVNILE1BQU1JLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFFO0FBRXpDLFNBQVNILFFBQVFHLEtBQUs7SUFDM0IsT0FBT0EsTUFBTUMsTUFBTSxDQUFDLENBQUNELE9BQU9FO1FBQzFCRixRQUFRQSxNQUFNRyxNQUFNLENBQUNELFVBQVcsR0FBRztRQUVuQyxPQUFPRjtJQUNULEdBQUcsRUFBRTtBQUNQO0FBRU8sU0FBU0YsVUFBVU0sY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPLEFBQUNBLDBCQUEwQkMsUUFDeEJELGlCQUNFO1FBQUNBO0tBQWU7QUFDOUI7QUFFTyxTQUFTTCxVQUFVRyxPQUFPLEVBQUVGLEtBQUs7SUFDdEMsSUFBSUUsWUFBWSxNQUFNO1FBQ3BCLE9BQU9GO0lBQ1Q7SUFFQSxNQUFNTSxRQUFRQyxRQUFRTCxTQUFTRjtJQUUvQixPQUFPQSxNQUFNUSxLQUFLLENBQUNGLFFBQVE7QUFDN0I7QUFFQSxTQUFTQyxRQUFRTCxPQUFPLEVBQUVGLEtBQUs7SUFDN0IsSUFBSU0sUUFBUTtJQUVaTixNQUFNUyxJQUFJLENBQUMsQ0FBQ0MsZ0JBQWdCQztRQUMxQixJQUFJRCxtQkFBbUJSLFNBQVM7WUFDOUJJLFFBQVFLO1lBRVIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUIn0=