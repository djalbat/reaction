'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var redux = require('redux'),
    expect = require('expect');

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var ReduxApp = function () {
  function ReduxApp() {
    _classCallCheck(this, ReduxApp);
  }

  _createClass(ReduxApp, null, [{
    key: 'run',
    value: function run() {
      var rootDOMElement = document.getElementById('root');

      var counter = function counter() {
        var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
        var action = arguments[1];

        switch (action.type) {
          case 'INCREMENT':
            return state + 1;
          case 'DECREMENT':
            return state - 1;
          default:
            return state;
        }
      };

      var Counter = function Counter(_ref) {
        var value = _ref.value;
        var onIncrement = _ref.onIncrement;
        var onDecrement = _ref.onDecrement;
        return React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            value
          ),
          React.createElement(
            'button',
            { onClick: onIncrement },
            '+'
          ),
          React.createElement(
            'button',
            { onClick: onDecrement },
            '-'
          )
        );
      };

      var createStore = redux.createStore;

      var store = createStore(counter);

      var render = function render() {
        ReactDOM.render(React.createElement(Counter, {
          value: store.getState(),
          onIncrement: function onIncrement() {
            store.dispatch({
              type: 'INCREMENT'
            });
          },
          onDecrement: function onDecrement() {
            store.dispatch({
              type: 'DECREMENT'
            });
          }
        }), rootDOMElement);
      };

      store.subscribe(render);

      render();
    }
  }]);

  return ReduxApp;
}();

// expect(
//     counter(0, { type: 'INCREMENT' })
// ).toEqual(1);
//
// expect(
//     counter(1, { type: 'INCREMENT' })
// ).toEqual(2);
//
// expect(
//     counter(2, { type: 'DECREMENT' })
// ).toEqual(1);
//
// expect(
//     counter(1, { type: 'DECREMENT' })
// ).toEqual(0);
//
// expect(
//     counter(1, { type: 'SOMETHING_ELSE'} )
// ).toEqual(1);
//
// expect(
//     counter(undefined, {})
// ).toEqual(0);
//
// console.log('Tests passed!')  }

module.exports = ReduxApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0lBQ0EsU0FBVSxRQUFRLFFBQVIsQ0FBVjs7QUFFSixJQUFJLFdBQVcsUUFBUSxhQUFSLENBQVg7SUFDQSxXQUFXLFNBQVMsUUFBVDtJQUNYLFFBQVEsU0FBUyxLQUFUOztJQUVOO0FBQ0osV0FESSxRQUNKLEdBQWM7MEJBRFYsVUFDVTtHQUFkOztlQURJOzswQkFLUztBQUNYLFVBQUksaUJBQWlCLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQixDQURPOztBQUdYLFVBQU0sVUFBVSxTQUFWLE9BQVUsR0FBdUI7WUFBdEIsOERBQVEsaUJBQWM7WUFBWCxzQkFBVzs7QUFDckMsZ0JBQVEsT0FBTyxJQUFQO0FBQ04sZUFBSyxXQUFMO0FBQ0UsbUJBQU8sUUFBUSxDQUFSLENBRFQ7QUFERixlQUdPLFdBQUw7QUFDRSxtQkFBTyxRQUFRLENBQVIsQ0FEVDtBQUhGO0FBTUksbUJBQU8sS0FBUCxDQURGO0FBTEYsU0FEcUM7T0FBdkIsQ0FITDs7QUFjWCxVQUFNLFVBQVUsU0FBVixPQUFVO1lBQUc7WUFBTztZQUFhO2VBQ3JDOzs7VUFDRTs7O1lBQUssS0FBTDtXQURGO1VBRUU7O2NBQVEsU0FBUyxXQUFULEVBQVI7O1dBRkY7VUFHRTs7Y0FBUSxTQUFTLFdBQVQsRUFBUjs7V0FIRjs7T0FEYyxDQWRMOztVQXNCSCxjQUFnQixNQUFoQixZQXRCRzs7QUF1QlgsVUFBTSxRQUFRLFlBQVksT0FBWixDQUFSLENBdkJLOztBQXlCWCxVQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsaUJBQVMsTUFBVCxDQUNFLG9CQUFDLE9BQUQ7QUFDRSxpQkFBTyxNQUFNLFFBQU4sRUFBUDtBQUNBLHVCQUFhLHVCQUFNO0FBQ2pCLGtCQUFNLFFBQU4sQ0FBZTtBQUNiLG9CQUFNLFdBQU47YUFERixFQURpQjtXQUFOO0FBS2IsdUJBQWEsdUJBQU07QUFDakIsa0JBQU0sUUFBTixDQUFlO0FBQ2Isb0JBQU0sV0FBTjthQURGLEVBRGlCO1dBQU47U0FQZixDQURGLEVBY0UsY0FkRixFQURtQjtPQUFOLENBekJKOztBQTRDWCxZQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsRUE1Q1c7O0FBOENYLGVBOUNXOzs7O1NBTFQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUZOLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZHV4ID0gcmVxdWlyZSgncmVkdXgnKSxcbiAgICBleHBlY3QgID0gcmVxdWlyZSgnZXhwZWN0Jyk7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBSZWR1eEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuICAgIHZhciByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgICBjb25zdCBjb3VudGVyID0gKHN0YXRlID0gMCwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlICsgMTtcbiAgICAgICAgY2FzZSAnREVDUkVNRU5UJzpcbiAgICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgQ291bnRlciA9ICh7IHZhbHVlLCBvbkluY3JlbWVudCwgb25EZWNyZW1lbnQgfSkgPT4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPnt2YWx1ZX08L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uSW5jcmVtZW50fT4rPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWNyZW1lbnR9Pi08L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCB7IGNyZWF0ZVN0b3JlIH0gPSByZWR1eDtcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGNvdW50ZXIpO1xuXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8Q291bnRlclxuICAgICAgICAgIHZhbHVlPXtzdG9yZS5nZXRTdGF0ZSgpfVxuICAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgIHR5cGU6ICdJTkNSRU1FTlQnXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25EZWNyZW1lbnQ9eygpID0+IHtcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ0RFQ1JFTUVOVCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz4sXG4gICAgICAgIHJvb3RET01FbGVtZW50XG4gICAgICApO1xuICAgIH07XG5cbiAgICBzdG9yZS5zdWJzY3JpYmUocmVuZGVyKTtcblxuICAgIHJlbmRlcigpO1xuICB9XG59XG5cbi8vIGV4cGVjdChcbi8vICAgICBjb3VudGVyKDAsIHsgdHlwZTogJ0lOQ1JFTUVOVCcgfSlcbi8vICkudG9FcXVhbCgxKTtcbi8vXG4vLyBleHBlY3QoXG4vLyAgICAgY291bnRlcigxLCB7IHR5cGU6ICdJTkNSRU1FTlQnIH0pXG4vLyApLnRvRXF1YWwoMik7XG4vL1xuLy8gZXhwZWN0KFxuLy8gICAgIGNvdW50ZXIoMiwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuLy8gKS50b0VxdWFsKDEpO1xuLy9cbi8vIGV4cGVjdChcbi8vICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ0RFQ1JFTUVOVCcgfSlcbi8vICkudG9FcXVhbCgwKTtcbi8vXG4vLyBleHBlY3QoXG4vLyAgICAgY291bnRlcigxLCB7IHR5cGU6ICdTT01FVEhJTkdfRUxTRSd9IClcbi8vICkudG9FcXVhbCgxKTtcbi8vXG4vLyBleHBlY3QoXG4vLyAgICAgY291bnRlcih1bmRlZmluZWQsIHt9KVxuLy8gKS50b0VxdWFsKDApO1xuLy9cbi8vIGNvbnNvbGUubG9nKCdUZXN0cyBwYXNzZWQhJykgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWR1eEFwcDtcbiJdfQ==