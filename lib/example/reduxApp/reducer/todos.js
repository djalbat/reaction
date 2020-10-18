"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = todos;

var _constants = require("../constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;
  var todos = state;

  switch (type) {
    case _constants.ADD_TODO:
      todos = addTodoToTodos(todos, action);
      break;

    case _constants.TOGGLE_TODO:
      todos = toggleTodos(todos, action);
      break;
  }

  state = todos;
  return state;
}

function addTodoToTodos(todos, action) {
  var id = action.id,
      text = action.text,
      completed = false,
      todo = {
    id: id,
    text: text,
    completed: completed
  };
  todos = [].concat(_toConsumableArray(todos), [todo]);
  return todos;
}

function toggleTodos(todos, action) {
  var id = action.id;
  todos = todos.map(function (todo) {
    if (todo.id === id) {
      var completed = todo.completed;
      completed = !completed;
      todo.completed = completed;
    }

    return todo;
  });
  return todos;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9zLmpzIl0sIm5hbWVzIjpbInRvZG9zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiQUREX1RPRE8iLCJhZGRUb2RvVG9Ub2RvcyIsIlRPR0dMRV9UT0RPIiwidG9nZ2xlVG9kb3MiLCJpZCIsInRleHQiLCJjb21wbGV0ZWQiLCJ0b2RvIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7O0FBRWUsU0FBU0EsS0FBVCxHQUF3QztBQUFBLE1BQXpCQyxLQUF5Qix1RUFBakIsRUFBaUI7QUFBQSxNQUFiQyxNQUFhLHVFQUFKLEVBQUk7QUFBQSxNQUM3Q0MsSUFENkMsR0FDcENELE1BRG9DLENBQzdDQyxJQUQ2QztBQUdyRCxNQUFJSCxLQUFLLEdBQUdDLEtBQVo7O0FBRUEsVUFBUUUsSUFBUjtBQUNFLFNBQUtDLG1CQUFMO0FBQ0VKLE1BQUFBLEtBQUssR0FBR0ssY0FBYyxDQUFDTCxLQUFELEVBQVFFLE1BQVIsQ0FBdEI7QUFDQTs7QUFFRixTQUFLSSxzQkFBTDtBQUNFTixNQUFBQSxLQUFLLEdBQUdPLFdBQVcsQ0FBQ1AsS0FBRCxFQUFRRSxNQUFSLENBQW5CO0FBQ0E7QUFQSjs7QUFVQUQsRUFBQUEsS0FBSyxHQUFHRCxLQUFSO0FBRUEsU0FBT0MsS0FBUDtBQUNEOztBQUVELFNBQVNJLGNBQVQsQ0FBd0JMLEtBQXhCLEVBQStCRSxNQUEvQixFQUF1QztBQUFBLE1BQzdCTSxFQUQ2QixHQUNoQk4sTUFEZ0IsQ0FDN0JNLEVBRDZCO0FBQUEsTUFDekJDLElBRHlCLEdBQ2hCUCxNQURnQixDQUN6Qk8sSUFEeUI7QUFBQSxNQUUvQkMsU0FGK0IsR0FFbkIsS0FGbUI7QUFBQSxNQUcvQkMsSUFIK0IsR0FHeEI7QUFDTEgsSUFBQUEsRUFBRSxFQUFGQSxFQURLO0FBRUxDLElBQUFBLElBQUksRUFBSkEsSUFGSztBQUdMQyxJQUFBQSxTQUFTLEVBQVRBO0FBSEssR0FId0I7QUFTckNWLEVBQUFBLEtBQUssZ0NBQ0FBLEtBREEsSUFFSFcsSUFGRyxFQUFMO0FBS0EsU0FBT1gsS0FBUDtBQUNEOztBQUVELFNBQVNPLFdBQVQsQ0FBcUJQLEtBQXJCLEVBQTRCRSxNQUE1QixFQUFvQztBQUFBLE1BQzFCTSxFQUQwQixHQUNuQk4sTUFEbUIsQ0FDMUJNLEVBRDBCO0FBR2xDUixFQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUNELElBQUQsRUFBVTtBQUMxQixRQUFJQSxJQUFJLENBQUNILEVBQUwsS0FBWUEsRUFBaEIsRUFBb0I7QUFBQSxVQUNaRSxTQURZLEdBQ0VDLElBREYsQ0FDWkQsU0FEWTtBQUdsQkEsTUFBQUEsU0FBUyxHQUFHLENBQUNBLFNBQWI7QUFFQUMsTUFBQUEsSUFBSSxDQUFDRCxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOztBQUVELFdBQU9DLElBQVA7QUFDRCxHQVZPLENBQVI7QUFZQSxTQUFPWCxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQUREX1RPRE8sIFRPR0dMRV9UT0RPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2RvcyhzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkge1xuICBjb25zdCB7IHR5cGUgfSA9IGFjdGlvbjtcblxuICBsZXQgdG9kb3MgPSBzdGF0ZTtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEFERF9UT0RPIDpcbiAgICAgIHRvZG9zID0gYWRkVG9kb1RvVG9kb3ModG9kb3MsIGFjdGlvbik7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVE9HR0xFX1RPRE8gOlxuICAgICAgdG9kb3MgPSB0b2dnbGVUb2Rvcyh0b2RvcywgYWN0aW9uKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgc3RhdGUgPSB0b2RvcztcblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIGFkZFRvZG9Ub1RvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZSxcbiAgICAgICAgdG9kbyA9IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICB0ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9O1xuXG4gIHRvZG9zID0gW1xuICAgIC4uLnRvZG9zLFxuICAgIHRvZG9cbiAgXTtcblxuICByZXR1cm4gdG9kb3M7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRvZG9zKHRvZG9zLCBhY3Rpb24pIHtcbiAgY29uc3QgeyBpZCB9ID0gYWN0aW9uO1xuXG4gIHRvZG9zID0gdG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICBsZXQgeyBjb21wbGV0ZWQgfSA9IHRvZG87XG5cbiAgICAgIGNvbXBsZXRlZCA9ICFjb21wbGV0ZWQ7XG5cbiAgICAgIHRvZG8uY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIHJldHVybiB0b2RvO1xuICB9KTtcblxuICByZXR1cm4gdG9kb3M7XG59XG4iXX0=