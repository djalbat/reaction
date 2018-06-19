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
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
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
    var state = arguments.length <= 0 || arguments[0] === undefined ? 'SHOW_ALL' : arguments[0];
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(VisibleTodoList).apply(this, arguments));
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

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxRQUFRLFFBQVEsU0FBUixDQUFSO0lBQ0EsUUFBUSxRQUFRLFVBQVIsQ0FBUjtJQUNBLFdBQVcsUUFBUSxhQUFSLENBQVg7O0lBRUUsWUFBcUIsTUFBckI7QUFBRixJQUFhLFFBQVUsTUFBVixLQUFiO0lBQ0UsY0FBaUMsTUFBakM7SUFBYSxrQkFBb0IsTUFBcEI7OztBQUVyQixJQUFNLFdBQVcsU0FBWCxRQUFXLEdBQU07QUFDckIsTUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLFlBQVEsT0FBTyxJQUFQO0FBQ04sV0FBSyxVQUFMO0FBQWlCO2NBQ1AsS0FBYSxPQUFiLEdBRE87QUFDVCxjQUFNLE9BQVMsT0FBVCxJQUFOLENBRFM7QUFFVCwwQkFBWSxLQUFaLENBRlM7O0FBSWYsaUJBQU87QUFDTCxrQkFESztBQUVMLHNCQUZLO0FBR0wsZ0NBSEs7V0FBUCxDQUplO1NBQWpCOztBQURGLFdBWU8sYUFBTDtBQUFvQjtBQUNsQixjQUFJLE1BQU0sRUFBTixLQUFhLE9BQU8sRUFBUCxFQUFXO0FBQzFCLG1CQUFPLEtBQVAsQ0FEMEI7V0FBNUI7O0FBSUEsY0FBTSxhQUFZLENBQUMsTUFBTSxTQUFOOztBQUxELGlCQU9YLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIsaUNBRDhCO1dBQXpCLENBQVAsQ0FQa0I7U0FBcEI7O0FBWkY7QUF5QkksZUFBTyxLQUFQLENBREY7QUF4QkYsS0FEOEI7R0FBbkIsQ0FEUTs7QUErQnJCLE1BQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7UUFBdkIsOERBQVEsa0JBQWU7UUFBWCxzQkFBVzs7QUFDcEMsWUFBUSxPQUFPLElBQVA7QUFDTixXQUFLLFVBQUw7QUFDRSw0Q0FDSyxTQUNILEtBQUssU0FBTCxF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Q0FEYTs7QUFHbkIsa0JBQU0sUUFBTixDQUFlO0FBQ2Isd0JBRGE7QUFFYixvQkFGYTthQUFmLEVBSG1CO1dBQVI7U0FOdkIsQ0FGRixDQUpPOzs7O1dBYkw7SUFBd0IsV0F6TVQ7O0FBZ1ByQixNQUFNLFNBQVMsU0FBVCxNQUFTLEdBQU07QUFDbkIsV0FFRTs7O01BQ0csUUFESDtNQUVFO0FBQUMsa0JBQUQ7VUFBWSxRQUFPLFVBQVAsRUFBWjs7T0FGRjtNQUtHLEtBTEg7TUFNRTtBQUFDLGtCQUFEO1VBQVksUUFBTyxnQkFBUCxFQUFaOztPQU5GO01BU0csS0FUSDtNQVVFO0FBQUMsa0JBQUQ7VUFBWSxRQUFPLGFBQVAsRUFBWjs7T0FWRjtLQUZGLENBRG1CO0dBQU4sQ0FoUE07O0FBcVFyQixNQUFNLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDcEIsV0FFRTs7O01BQ0Usb0JBQUMsT0FBRCxPQURGO01BRUUsb0JBQUMsZUFBRCxPQUZGO01BR0Usb0JBQUMsTUFBRCxPQUhGO0tBRkYsQ0FEb0I7R0FBTixDQXJRSzs7TUFpUmY7Ozs7Ozs7Ozs7O3NDQUNZLFNBQVM7WUFDZixRQUFVLEtBQUssS0FBTCxDQUFWLE1BRGU7OztBQUd2QixlQUFPO0FBQ0wsc0JBREs7U0FBUCxDQUh1Qjs7OzsrQkFRaEI7QUFDUCxlQUFPLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FEQTs7OztXQVRMO0lBQWlCLFdBalJGOztBQStSckIsTUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBL1JlOztBQWlTckIsV0FBUyxNQUFULENBQ0U7QUFBQyxZQUFEO01BQVUsT0FBTyxZQUFZLE9BQVosQ0FBUCxFQUFWO0lBQ0Usb0JBQUMsT0FBRCxPQURGO0dBREYsRUFJRSxjQUpGLEVBalNxQjtDQUFOOztBQXlTakIsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InJlZHV4QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKSxcbiAgICAgIFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgeyBDb21wb25lbnQsIENsYXNzIH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6IHtcbiAgICAgICAgY29uc3QgeyBpZCwgdGV4dCB9ID0gYWN0aW9uLFxuICAgICAgICAgICAgICBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgY29tcGxldGVkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzoge1xuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZCA9ICFzdGF0ZS5jb21wbGV0ZWQ7IC8vL1xuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbXBsZXRlZFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2RvcyxcbiAgICB2aXNpYmlsaXR5RmlsdGVyXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOmNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRmlsdGVyTGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgICAgICAgIHsgZmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBuZXh0VG9kb0lkID0gMDtcbiAgY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICAgIGxldCBpbnB1dDtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHZhbHVlIH0gPSBpbnB1dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG5leHRUb2RvSWQrKztcblxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXsoaWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9ICdUT0dHTEVfVE9ETyc7XG5cbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgeydTaG93OiAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FDVElWRSc+XG4gICAgICAgICAgQWN0aXZlXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19