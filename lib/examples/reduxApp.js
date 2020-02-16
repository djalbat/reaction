'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;


var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      {
        var id = action.id,
            text = action.text,
            completed = false;


        return {
          id: id,
          text: text,
          completed: completed
        };
      }

    case 'TOGGLE_TODO':
      {
        if (state.id !== action.id) {
          return state;
        }

        var _completed = !state.completed; ///

        return Object.assign({}, state, {
          completed: _completed
        });
      }

    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);

    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });

    default:
      return state;
  }
};

var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;

    default:
      return state;
  }
};

var todoApp = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });

    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
  }
};

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;

  return React.createElement(
    'li',
    { onClick: onClick,
      style: { textDecoration: completed ? 'line-through' : 'none' }
    },
    text
  );
};

var TodoList = function TodoList(_ref2) {
  var todos = _ref2.todos,
      onTodoClick = _ref2.onTodoClick;

  return React.createElement(
    'ul',
    null,
    todos.map(function (todo) {
      return React.createElement(Todo, { text: todo.text,
        completed: todo.completed,
        onClick: function onClick() {
          return onTodoClick(todo.id);
        }
      });
    })
  );
};

var Link = function Link(props) {
  var active = props.active,
      _onClick = props.onClick;


  if (active) {
    return React.createElement(
      'span',
      null,
      props.children
    );
  }

  return React.createElement(
    'a',
    { href: '#',
      onClick: function onClick(e) {
        e.preventDefault();
        _onClick();
      }
    },
    props.children
  );
};

var FilterLink = React.createClass({
  displayName: 'FilterLink',
  componentDidMount: function componentDidMount() {
    var _this = this;

    var store = this.context.store;


    this.unsubscribe = store.subscribe(function () {
      return _this.forceUpdate();
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    this.unsubscribe();
  },
  render: function render() {
    var _this2 = this;

    var store = this.context.store,
        state = store.getState();


    return React.createElement(
      Link,
      { active: this.props.filter === state.visibilityFilter,
        onClick: function onClick() {
          var type = 'SET_VISIBILITY_FILTER',
              filter = _this2.props.filter;


          store.dispatch({
            type: type,
            filter: filter
          });
        }
      },
      this.props.children
    );
  }
});

var nextTodoId = 0;
var AddTodo = function AddTodo(props, _ref3) {
  var store = _ref3.store;

  var input = void 0;

  return React.createElement(
    'div',
    null,
    React.createElement('input', { ref: function ref(domElement) {
        input = domElement;
      }
    }),
    React.createElement(
      'button',
      { onClick: function onClick() {
          var type = 'ADD_TODO',
              _input = input,
              value = _input.value,
              text = value,
              id = nextTodoId++;


          store.dispatch({
            type: type,
            text: text,
            id: id
          });

          input.value = '';
        }
      },
      'Add todo'
    )
  );
};

var VisibleTodoList = function (_Component) {
  _inherits(VisibleTodoList, _Component);

  function VisibleTodoList() {
    _classCallCheck(this, VisibleTodoList);

    return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
  }

  _createClass(VisibleTodoList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      var store = this.context.store;


      this.unsubscribe = store.subscribe(function () {
        return _this4.forceUpdate();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var store = this.context.store,
          state = store.getState();


      return React.createElement(TodoList, { todos: getVisibleTodos(state.todos, state.visibilityFilter),
        onTodoClick: function onTodoClick(id) {
          var type = 'TOGGLE_TODO';

          store.dispatch({
            type: type,
            id: id
          });
        }
      });
    }
  }]);

  return VisibleTodoList;
}(Component);

var Footer = function Footer() {
  return React.createElement(
    'p',
    null,
    'Show: ',
    React.createElement(
      FilterLink,
      { filter: 'SHOW_ALL' },
      'All'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: 'SHOW_COMPLETED' },
      'Completed'
    ),
    ' - ',
    React.createElement(
      FilterLink,
      { filter: 'SHOW_ACTIVE' },
      'Active'
    )
  );
};

var TodoApp = function TodoApp() {
  return React.createElement(
    'div',
    null,
    React.createElement(AddTodo, null),
    React.createElement(VisibleTodoList, null),
    React.createElement(Footer, null)
  );
};

var Provider = function (_Component2) {
  _inherits(Provider, _Component2);

  function Provider() {
    _classCallCheck(this, Provider);

    return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext(context) {
      var store = this.props.store;


      return {
        store: store
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return Provider;
}(Component);

var reduxApp = function reduxApp() {
  var store = createStore(todoApp),
      rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQ29tcG9uZW50IiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJ0b2RvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidG9kb3MiLCJ1bmRlZmluZWQiLCJtYXAiLCJ0IiwidmlzaWJpbGl0eUZpbHRlciIsImZpbHRlciIsInRvZG9BcHAiLCJnZXRWaXNpYmxlVG9kb3MiLCJUb2RvIiwib25DbGljayIsInRleHREZWNvcmF0aW9uIiwiVG9kb0xpc3QiLCJvblRvZG9DbGljayIsIkxpbmsiLCJwcm9wcyIsImFjdGl2ZSIsImNoaWxkcmVuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiRmlsdGVyTGluayIsImNyZWF0ZUNsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdG9yZSIsImNvbnRleHQiLCJ1bnN1YnNjcmliZSIsInN1YnNjcmliZSIsImZvcmNlVXBkYXRlIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJnZXRTdGF0ZSIsImRpc3BhdGNoIiwibmV4dFRvZG9JZCIsIkFkZFRvZG8iLCJpbnB1dCIsImRvbUVsZW1lbnQiLCJ2YWx1ZSIsIlZpc2libGVUb2RvTGlzdCIsIkZvb3RlciIsIlRvZG9BcHAiLCJQcm92aWRlciIsInJlZHV4QXBwIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxXQUFXRixRQUFRLGFBQVIsQ0FGakI7O0FBSU0sSUFBRUcsU0FBRixH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OztFQVhvQjVCLFM7O0FBY3ZCLElBQU1vRCxXQUFXLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixNQUFNbEIsUUFBUWpDLFlBQVlpQixPQUFaLENBQWQ7QUFBQSxNQUNNbUMsaUJBQWlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRHZCOztBQUdBeEQsV0FBU3lDLE1BQVQsQ0FFSTtBQUFDLFlBQUQ7QUFBQSxNQUFVLE9BQU9OLEtBQWpCO0FBQ0Usd0JBQUMsT0FBRDtBQURGLEdBRkosRUFPRW1CLGNBUEY7QUFTRCxDQWJEOztBQWVBRyxPQUFPQyxPQUFQLEdBQWlCTCxRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4JyksXG4gICAgICBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyk7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1RPRE8nIDoge1xuICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGNvbXBsZXRlZFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlICdUT0dHTEVfVE9ETycgOiB7XG4gICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZCA9ICFzdGF0ZS5jb21wbGV0ZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9UT0RPJyA6XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgIF07XG5cbiAgICBjYXNlICdUT0dHTEVfVE9ETycgOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5jb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyA6XG4gICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICB0b2RvcyxcbiAgdmlzaWJpbGl0eUZpbHRlclxufSk7XG5cbmNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgY2FzZSAnU0hPV19BTEwnIDpcbiAgICAgIHJldHVybiB0b2RvcztcblxuICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJyA6XG4gICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICApO1xuXG4gICAgY2FzZSAnU0hPV19BQ1RJVkUnIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICApO1xuICB9XG59O1xuXG5jb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpjb21wbGV0ZWQgP1xuICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgJ25vbmUnfX1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L2xpPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgcmV0dXJuIChcblxuICAgIDx1bD5cbiAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAvPil9XG4gICAgPC91bD5cblxuICApO1xufTtcblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgaWYgKGFjdGl2ZSkge1xuICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgfVxuXG4gIHJldHVybiAoXG5cbiAgICA8YSBocmVmPScjJ1xuICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgb25DbGljaygpO1xuICAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cblxuICApO1xufTtcblxuY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gJ0FERF9UT0RPJyxcbiAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUsIC8vL1xuICAgICAgICAgIGlkID0gbmV4dFRvZG9JZCsrO1xuXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICApXG4gICAgICB9XG4gICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9eyhpZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdUT0dHTEVfVE9ETyc7XG5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8cD5cbiAgICAgIHsnU2hvdzogJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICBBbGxcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICBDb21wbGV0ZWRcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIHsnIC0gJ31cbiAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICBBY3RpdmVcbiAgICAgIDwvRmlsdGVyTGluaz5cbiAgICA8L3A+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPEFkZFRvZG8gLz5cbiAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RvcmVcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHRvZG9BcHApLFxuICAgICAgICByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRvZG9BcHAgLz5cbiAgICAgIDwvUHJvdmlkZXI+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iXX0=