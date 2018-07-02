'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM');

var Component = React.Component;
var Class = React.Class;
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;


var reduxApp = function reduxApp() {
  var todo = function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        {
          var id = action.id;
          var text = action.text;
          var completed = false;

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
    var onClick = _ref.onClick;
    var completed = _ref.completed;
    var text = _ref.text;

    return React.createElement(
      'li',
      { onClick: onClick,
        style: { textDecoration: completed ? 'line-through' : 'none' }
      },
      text
    );
  };

  var TodoList = function TodoList(_ref2) {
    var todos = _ref2.todos;
    var onTodoClick = _ref2.onTodoClick;

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
    var active = props.active;
    var _onClick = props.onClick;


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

      var store = this.context.store;

      var state = store.getState();

      return React.createElement(
        Link,
        { active: this.props.filter === state.visibilityFilter,
          onClick: function onClick() {
            var type = 'SET_VISIBILITY_FILTER';
            var filter = _this2.props.filter;


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
            var type = 'ADD_TODO';
            var _input = input;
            var value = _input.value;
            var text = value; ///
            var id = nextTodoId++;

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
        var store = this.context.store;

        var state = store.getState();

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

  var rootDOMElement = document.getElementById('root');

  ReactDOM.render(React.createElement(
    Provider,
    { store: createStore(todoApp) },
    React.createElement(TodoApp, null)
  ), rootDOMElement);
};

module.exports = reduxApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6WyJSZWR1eCIsInJlcXVpcmUiLCJSZWFjdCIsIlJlYWN0RE9NIiwiQ29tcG9uZW50IiwiQ2xhc3MiLCJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHV4QXBwIiwidG9kbyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlkIiwidGV4dCIsImNvbXBsZXRlZCIsIk9iamVjdCIsImFzc2lnbiIsInRvZG9zIiwidW5kZWZpbmVkIiwibWFwIiwidCIsInZpc2liaWxpdHlGaWx0ZXIiLCJmaWx0ZXIiLCJ0b2RvQXBwIiwiZ2V0VmlzaWJsZVRvZG9zIiwiVG9kbyIsIm9uQ2xpY2siLCJ0ZXh0RGVjb3JhdGlvbiIsIlRvZG9MaXN0Iiwib25Ub2RvQ2xpY2siLCJMaW5rIiwicHJvcHMiLCJhY3RpdmUiLCJjaGlsZHJlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIkZpbHRlckxpbmsiLCJjcmVhdGVDbGFzcyIsImNvbXBvbmVudERpZE1vdW50Iiwic3RvcmUiLCJjb250ZXh0IiwidW5zdWJzY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JjZVVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiZ2V0U3RhdGUiLCJkaXNwYXRjaCIsIm5leHRUb2RvSWQiLCJBZGRUb2RvIiwiaW5wdXQiLCJkb21FbGVtZW50IiwidmFsdWUiLCJWaXNpYmxlVG9kb0xpc3QiLCJGb290ZXIiLCJUb2RvQXBwIiwiUHJvdmlkZXIiLCJyb290RE9NRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUUMsUUFBUSxTQUFSLENBQWQ7QUFBQSxJQUNNQyxRQUFRRCxRQUFRLFVBQVIsQ0FEZDtBQUFBLElBRU1FLFdBQVdGLFFBQVEsYUFBUixDQUZqQjs7SUFJUUcsUyxH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O0FBQUE7QUFBQTtBQUFBLHNDQWtSSGhCLE9BbFJHLEVBa1JNO0FBQUEsWUFDZkQsS0FEZSxHQUNMLEtBQUtSLEtBREEsQ0FDZlEsS0FEZTs7O0FBR3ZCLGVBQU87QUFDTEE7QUFESyxTQUFQO0FBR0Q7QUF4UmtCO0FBQUE7QUFBQSwrQkEwUlY7QUFDUCxlQUFPLEtBQUtSLEtBQUwsQ0FBV0UsUUFBbEI7QUFDRDtBQTVSa0I7O0FBQUE7QUFBQSxJQWlSRTlCLFNBalJGOztBQStSckIsTUFBTXNELGlCQUFpQkMsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUF2Qjs7QUFFQXpELFdBQVMyQyxNQUFULENBQ0U7QUFBQyxZQUFEO0FBQUEsTUFBVSxPQUFPeEMsWUFBWWtCLE9BQVosQ0FBakI7QUFDRSx3QkFBQyxPQUFEO0FBREYsR0FERixFQUlFa0MsY0FKRjtBQU1ELENBdlNEOztBQXlTQUcsT0FBT0MsT0FBUCxHQUFpQnRELFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKSxcbiAgICAgIFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgeyBDb21wb25lbnQsIENsYXNzIH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6IHtcbiAgICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzoge1xuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9ICFzdGF0ZS5jb21wbGV0ZWQ7IC8vL1xuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2RvcyxcbiAgICB2aXNpYmlsaXR5RmlsdGVyXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgICAgICAgIHsgZmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBuZXh0VG9kb0lkID0gMDtcbiAgY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICAgIGxldCBpbnB1dDtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG5leHRUb2RvSWQrKztcblxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdUT0dHTEVfVE9ETyc7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgeydTaG93OiAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FDVElWRSc+XG4gICAgICAgICAgQWN0aXZlXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19