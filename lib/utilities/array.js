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
    return Array.isArray(arrayOrElement) ? arrayOrElement : [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXlPckVsZW1lbnQpID9cbiAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbWFpbmluZyhlbGVtZW50LCBhcnJheSkge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoZWxlbWVudCwgYXJyYXkpIHtcbiAgbGV0IGluZGV4ID0gbnVsbDtcblxuICBhcnJheS5zb21lKChjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkgPT4ge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImZsYXR0ZW4iLCJndWFyYW50ZWUiLCJyZW1haW5pbmciLCJhcnJheSIsInJlZHVjZSIsImVsZW1lbnQiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwic29tZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEVsZW1lbnRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBRWdCQTtlQUFBQTs7UUFFQUM7ZUFBQUE7O1FBUUFDO2VBQUFBOztRQVFBQztlQUFBQTs7O0FBbEJULFNBQVNILE1BQU1JLEtBQUs7SUFBSSxPQUFPQSxLQUFLLENBQUMsRUFBRTtBQUFFO0FBRXpDLFNBQVNILFFBQVFHLEtBQUs7SUFDM0IsT0FBT0EsTUFBTUMsTUFBTSxDQUFDLENBQUNELE9BQU9FO1FBQzFCRixRQUFRQSxNQUFNRyxNQUFNLENBQUNELFVBQVcsR0FBRztRQUVuQyxPQUFPRjtJQUNULEdBQUcsRUFBRTtBQUNQO0FBRU8sU0FBU0YsVUFBVU0sY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPQyxNQUFNQyxPQUFPLENBQUNGLGtCQUNaQSxpQkFDQztRQUFDQTtLQUFlO0FBQzVCO0FBRU8sU0FBU0wsVUFBVUcsT0FBTyxFQUFFRixLQUFLO0lBQ3RDLElBQUlFLFlBQVksTUFBTTtRQUNwQixPQUFPRjtJQUNUO0lBRUEsTUFBTU8sUUFBUUMsUUFBUU4sU0FBU0Y7SUFFL0IsT0FBT0EsTUFBTVMsS0FBSyxDQUFDRixRQUFRO0FBQzdCO0FBRUEsU0FBU0MsUUFBUU4sT0FBTyxFQUFFRixLQUFLO0lBQzdCLElBQUlPLFFBQVE7SUFFWlAsTUFBTVUsSUFBSSxDQUFDLENBQUNDLGdCQUFnQkM7UUFDMUIsSUFBSUQsbUJBQW1CVCxTQUFTO1lBQzlCSyxRQUFRSztZQUVSLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBT0w7QUFDVCJ9