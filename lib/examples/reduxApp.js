'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Redux = require('./redux');
var React = require('../react');
var ReactDOM = require('../reactDOM');
var Component = React.Component;
var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;


var reduxApp = function reduxApp() {
  var todo = function todo(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          id: action.id,
          text: action.text,
          completed: false
        };

      case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state;
        }

        return Object.assign({}, state, {
          completed: !state.completed
        });

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

  var FilterLink = function (_Component) {
    _inherits(FilterLink, _Component);

    function FilterLink() {
      _classCallCheck(this, FilterLink);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(FilterLink).apply(this, arguments));
    }

    _createClass(FilterLink, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this2.forceUpdate();
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
        var _this3 = this;

        var store = this.context.store;

        var state = store.getState();

        return React.createElement(
          Link,
          { active: this.props.filter === state.visibilityFilter,
            onClick: function onClick() {
              return store.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: _this3.props.filter
              });
            }
          },
          this.props.children
        );
      }
    }]);

    return FilterLink;
  }(Component);

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
            store.dispatch({
              type: 'ADD_TODO',
              text: input.value,
              id: nextTodoId++
            });
            input.value = '';
          }
        },
        'Add todo'
      )
    );
  };

  var VisibleTodoList = function (_Component2) {
    _inherits(VisibleTodoList, _Component2);

    function VisibleTodoList() {
      _classCallCheck(this, VisibleTodoList);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(VisibleTodoList).apply(this, arguments));
    }

    _createClass(VisibleTodoList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this5 = this;

        var store = this.context.store;


        this.unsubscribe = store.subscribe(function () {
          return _this5.forceUpdate();
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
            return store.dispatch({
              type: 'TOGGLE_TODO',
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

  var Provider = function (_Component3) {
    _inherits(Provider, _Component3);

    function Provider() {
      _classCallCheck(this, Provider);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).apply(this, arguments));
    }

    _createClass(Provider, [{
      key: 'getChildContext',
      value: function getChildContext(context) {
        return {
          store: this.props.store
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9yZWR1eEFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sWUFBUSxRQUFRLFNBQVIsQ0FBUjtBQUNBLFlBQVEsUUFBUSxVQUFSLENBQVI7QUFDQSxlQUFXLFFBQVEsYUFBUixDQUFYO0FBQ0EsSUFBRSxZQUFjLE1BQWQsU0FBRjtJQUNFLGNBQWlDLE1BQWpDO0lBQWEsa0JBQW9CLE1BQXBCOzs7QUFFckIsSUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFNO0FBQ3JCLE1BQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUM5QixZQUFRLE9BQU8sSUFBUDtBQUNOLFdBQUssVUFBTDtBQUNFLGVBQU87QUFDTCxjQUFJLE9BQU8sRUFBUDtBQUNKLGdCQUFNLE9BQU8sSUFBUDtBQUNOLHFCQUFXLEtBQVg7U0FIRixDQURGOztBQURGLFdBUU8sYUFBTDtBQUNFLFlBQUksTUFBTSxFQUFOLEtBQWEsT0FBTyxFQUFQLEVBQVc7QUFDMUIsaUJBQU8sS0FBUCxDQUQwQjtTQUE1Qjs7QUFJQSxlQUFPLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsRUFBeUI7QUFDOUIscUJBQVcsQ0FBQyxNQUFNLFNBQU47U0FEUCxDQUFQLENBTEY7O0FBUkY7QUFrQkksZUFBTyxLQUFQLENBREY7QUFqQkYsS0FEOEI7R0FBbkIsQ0FEUTs7QUF3QnJCLE1BQU0sUUFBUSxTQUFSLEtBQVEsR0FBd0I7UUFBdkIsOERBQVEsa0JBQWU7UUFBWCxzQkFBVzs7QUFDcEMsWUFBUSxPQUFPLElBQVA7QUFDTixXQUFLLFVBQUw7QUFDRSw0Q0FDSyxTQUNILEtBQUssU0FBTCxFQUFnQixNQUFoQixHQUZGLENBREY7O0FBREYsV0FPTyxhQUFMO0FBQ0UsZUFBTyxNQUFNLEdBQU4sQ0FBVTtpQkFBSyxLQUFLLENBQUwsRUFBUSxNQUFSO1NBQUwsQ0FBakIsQ0FERjs7QUFQRjtBQVdJLGVB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QjtHQUFOLENBL05NOztBQW9QckIsTUFBTSxVQUFVLFNBQVYsT0FBVSxHQUFNO0FBQ3BCLFdBRUU7OztNQUNFLG9CQUFDLE9BQUQsT0FERjtNQUVFLG9CQUFDLGVBQUQsT0FGRjtNQUdFLG9CQUFDLE1BQUQsT0FIRjtLQUZGLENBRG9CO0dBQU4sQ0FwUEs7O01BZ1FmOzs7Ozs7Ozs7OztzQ0FDWSxTQUFTO0FBQ3ZCLGVBQU87QUFDTCxpQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYO1NBRFQsQ0FEdUI7Ozs7K0JBTWhCO0FBQ1AsZUFBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBREE7Ozs7V0FQTDtJQUFpQixXQWhRRjs7QUE0UXJCLE1BQU0saUJBQWlCLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFqQixDQTVRZTs7QUE4UXJCLFdBQVMsTUFBVCxDQUNFO0FBQUMsWUFBRDtNQUFVLE9BQU8sWUFBWSxPQUFaLENBQVAsRUFBVjtJQUNFLG9CQUFDLE9BQUQsT0FERjtHQURGLEVBSUUsY0FKRixFQTlRcUI7Q0FBTjs7QUFzUmpCLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJyZWR1eEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVkdXggPSByZXF1aXJlKCcuL3JlZHV4JyksXG4gICAgICBSZWFjdCA9IHJlcXVpcmUoJy4uL3JlYWN0JyksXG4gICAgICBSZWFjdERPTSA9IHJlcXVpcmUoJy4uL3JlYWN0RE9NJyksXG4gICAgICB7IENvbXBvbmVudCB9ID0gUmVhY3QsXG4gICAgICB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG5jb25zdCByZWR1eEFwcCA9ICgpID0+IHtcbiAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICBdO1xuXG4gICAgICBjYXNlICdUT0dHTEVfVE9ETyc6XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHZpc2liaWxpdHlGaWx0ZXIgPSAoIHN0YXRlID0gJ1NIT1dfQUxMJywgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5maWx0ZXI7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgdG9kb3M6IHRvZG9zLFxuICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgfSk7XG5cbiAgY29uc3QgZ2V0VmlzaWJsZVRvZG9zID0gKHRvZG9zLCBmaWx0ZXIpID0+IHtcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQ09NUExFVEVEJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiAhdC5jb21wbGV0ZWRcbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgVG9kbyA9ICh7b25DbGljaywgY29tcGxldGVkLCB0ZXh0fSkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246XG4gICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICdsaW5lLXRocm91Z2gnIDpcbiAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvTGlzdCA9ICh7dG9kb3MsIG9uVG9kb0NsaWNrfSkgPT4gIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLz4pfVxuICAgICAgPC91bD5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIHJldHVybiA8c3Bhbj57cHJvcHMuY2hpbGRyZW59PC9zcGFuPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuXG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZmlsdGVyID09PSBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5wcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXh0VG9kb0lkID0gMDtcbiAgY29uc3QgQWRkVG9kbyA9IChwcm9wcywge3N0b3JlfSkgPT4ge1xuICAgIGxldCBpbnB1dDtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dCByZWY9e2RvbUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gZG9tRWxlbWVudDtcbiAgICAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQUREX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAvPlxuXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgeydTaG93OiAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnPlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FDVElWRSc+XG4gICAgICAgICAgQWN0aXZlXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkVG9kbyAvPlxuICAgICAgICA8VmlzaWJsZVRvZG9MaXN0IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgKTtcbiAgfTtcblxuICBjbGFzcyBQcm92aWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICA8VG9kb0FwcCAvPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIHJvb3RET01FbGVtZW50XG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHV4QXBwO1xuIl19