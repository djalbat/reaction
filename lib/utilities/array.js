"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    first: function() {
        return first;
    },
    flatten: function() {
        return flatten;
    },
    guarantee: function() {
        return guarantee;
    },
    remaining: function() {
        return remaining;
    }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuICAgIFxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1haW5pbmcoZWxlbWVudCwgYXJyYXkpIHtcbiAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gIHJldHVybiBhcnJheS5zbGljZShpbmRleCArIDEpO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZSgoY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpID0+IHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gaW5kZXg7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwicmVtYWluaW5nIiwiYXJyYXkiLCJyZWR1Y2UiLCJlbGVtZW50IiwiY29uY2F0IiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSIsImluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwic29tZSIsImN1cnJlbnRFbGVtZW50IiwiY3VycmVudEVsZW1lbnRJbmRleCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQUVHQSxLQUFLO2VBQUxBLEtBQUs7O0lBRUxDLE9BQU87ZUFBUEEsT0FBTzs7SUFRUEMsU0FBUztlQUFUQSxTQUFTOztJQVFUQyxTQUFTO2VBQVRBLFNBQVM7Ozs7Ozs7Ozs7QUFsQmxCLFNBQVNILEtBQUssQ0FBQ0ksS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQUU7QUFFMUMsU0FBU0gsT0FBTyxDQUFDRyxLQUFLLEVBQUU7SUFDN0IsT0FBT0EsS0FBSyxDQUFDQyxNQUFNLENBQUMsU0FBQ0QsS0FBSyxFQUFFRSxPQUFPLEVBQUs7UUFDdENGLEtBQUssR0FBR0EsS0FBSyxDQUFDRyxNQUFNLENBQUNELE9BQU8sQ0FBQyxDQUFDLENBQUUsR0FBRztRQUVuQyxPQUFPRixLQUFLLENBQUM7S0FDZCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ1I7QUFFTSxTQUFTRixTQUFTLENBQUNNLGNBQWMsRUFBRTtJQUN4Q0EsY0FBYyxHQUFHQSxjQUFjLElBQUksRUFBRSxDQUFDO0lBRXRDLE9BQU8sQUFBQ0EsQUFBYyxXQUFZQyxDQUExQkQsY0FBYyxFQUFZQyxLQUFLLENBQUEsR0FDN0JELGNBQWMsR0FDWjtRQUFDQSxjQUFjO0tBQUMsQ0FBQztDQUM5QjtBQUVNLFNBQVNMLFNBQVMsQ0FBQ0csT0FBTyxFQUFFRixLQUFLLEVBQUU7SUFDeEMsSUFBSUUsT0FBTyxLQUFLLElBQUksRUFBRTtRQUNwQixPQUFPRixLQUFLLENBQUM7S0FDZDtJQUVELElBQU1NLEtBQUssR0FBR0MsT0FBTyxDQUFDTCxPQUFPLEVBQUVGLEtBQUssQ0FBQyxBQUFDO0lBRXRDLE9BQU9BLEtBQUssQ0FBQ1EsS0FBSyxDQUFDRixLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Q0FDL0I7QUFFRCxTQUFTQyxPQUFPLENBQUNMLE9BQU8sRUFBRUYsS0FBSyxFQUFFO0lBQy9CLElBQUlNLEtBQUssR0FBRyxJQUFJLEFBQUM7SUFFakJOLEtBQUssQ0FBQ1MsSUFBSSxDQUFDLFNBQUNDLGNBQWMsRUFBRUMsbUJBQW1CLEVBQUs7UUFDbEQsSUFBSUQsY0FBYyxLQUFLUixPQUFPLEVBQUU7WUFDOUJJLEtBQUssR0FBR0ssbUJBQW1CLENBQUM7WUFFNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU9MLEtBQUssQ0FBQztDQUNkIn0=