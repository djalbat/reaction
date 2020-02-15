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
  componentDidMount: function componentDidMount(domElement) {
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
    value: function componentDidMount(domElement) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQ29tcG9uZW50IiwiY3JlYXRlU3RvcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJ0b2RvIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwiT2JqZWN0IiwiYXNzaWduIiwidG9kb3MiLCJ1bmRlZmluZWQiLCJtYXAiLCJ0IiwidmlzaWJpbGl0eUZpbHRlciIsImZpbHRlciIsInRvZG9BcHAiLCJnZXRWaXNpYmxlVG9kb3MiLCJUb2RvIiwib25DbGljayIsInRleHREZWNvcmF0aW9uIiwiVG9kb0xpc3QiLCJvblRvZG9DbGljayIsIkxpbmsiLCJwcm9wcyIsImFjdGl2ZSIsImNoaWxkcmVuIiwiZSIsInByZXZlbnREZWZhdWx0IiwiRmlsdGVyTGluayIsImNyZWF0ZUNsYXNzIiwiY29tcG9uZW50RGlkTW91bnQiLCJkb21FbGVtZW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsIm5leHRUb2RvSWQiLCJBZGRUb2RvIiwiaW5wdXQiLCJ2YWx1ZSIsIlZpc2libGVUb2RvTGlzdCIsIkZvb3RlciIsIlRvZG9BcHAiLCJQcm92aWRlciIsInJlZHV4QXBwIiwicm9vdERPTUVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVFDLFFBQVEsU0FBUixDQUFkO0FBQUEsSUFDTUMsUUFBUUQsUUFBUSxVQUFSLENBRGQ7QUFBQSxJQUVNRSxXQUFXRixRQUFRLGFBQVIsQ0FGakI7O0FBSU0sSUFBRUcsU0FBRixH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S0FBS1QsS0FBTCxDQUFXRSxRQUFsQjtBQUNEOzs7O0VBWG9CNUIsUzs7QUFjdkIsSUFBTW9ELFdBQVcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLE1BQU1qQixRQUFRbEMsWUFBWWlCLE9BQVosQ0FBZDtBQUFBLE1BQ01tQyxpQkFBaUJDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FEdkI7O0FBR0F4RCxXQUFTMEMsTUFBVCxDQUVJO0FBQUMsWUFBRDtBQUFBLE1BQVUsT0FBT04sS0FBakI7QUFDRSx3QkFBQyxPQUFEO0FBREYsR0FGSixFQU9Fa0IsY0FQRjtBQVNELENBYkQ7O0FBZUFHLE9BQU9DLE9BQVAsR0FBaUJMLFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKSxcbiAgICAgIFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfVE9ETycgOiB7XG4gICAgICBjb25zdCB7IGlkLCB0ZXh0IH0gPSBhY3Rpb24sXG4gICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgY29tcGxldGVkXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgJ1RPR0dMRV9UT0RPJyA6IHtcbiAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tcGxldGVkID0gIXN0YXRlLmNvbXBsZXRlZDsgLy8vXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjb21wbGV0ZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX1RPRE8nIDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgXTtcblxuICAgIGNhc2UgJ1RPR0dMRV9UT0RPJyA6XG4gICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInIDpcbiAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG9zLFxuICB2aXNpYmlsaXR5RmlsdGVyXG59KTtcblxuY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICBjYXNlICdTSE9XX0FMTCcgOlxuICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgY2FzZSAnU0hPV19DT01QTEVURUQnIDpcbiAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICk7XG5cbiAgICBjYXNlICdTSE9XX0FDVElWRScgOlxuICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAnbm9uZSd9fVxuICAgID5cbiAgICAgIHt0ZXh0fVxuICAgIDwvbGk+XG5cbiAgKTtcbn07XG5cbmNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICByZXR1cm4gKFxuXG4gICAgPHVsPlxuICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIC8+KX1cbiAgICA8L3VsPlxuXG4gICk7XG59O1xuXG5jb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICBpZiAoYWN0aXZlKSB7XG4gICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcblxuICAgIDxhIGhyZWY9JyMnXG4gICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9hPlxuXG4gICk7XG59O1xuXG5jb25zdCBGaWx0ZXJMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb21wb25lbnREaWRNb3VudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgKTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgIHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICB7IGZpbHRlciB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cblxuICAgICk7XG4gIH1cbn0pO1xuXG5sZXQgbmV4dFRvZG9JZCA9IDA7XG5jb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gIGxldCBpbnB1dDtcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gJ0FERF9UT0RPJyxcbiAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICB0ZXh0ID0gdmFsdWUsIC8vL1xuICAgICAgICAgIGlkID0gbmV4dFRvZG9JZCsrO1xuXG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgaWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCB0b2RvXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAnVE9HR0xFX1RPRE8nO1xuXG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHA+XG4gICAgICB7J1Nob3c6ICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgQWxsXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgQ29tcGxldGVkXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgICB7JyAtICd9XG4gICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgQWN0aXZlXG4gICAgICA8L0ZpbHRlckxpbms+XG4gICAgPC9wPlxuXG4gICk7XG59O1xuXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxBZGRUb2RvIC8+XG4gICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0b3JlXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh0b2RvQXBwKSxcbiAgICAgICAgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcblxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuXG4gICAgLFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19