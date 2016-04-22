(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  VanillaApp: require('./lib/vanillaApp'),
  ReduxApp: require('./lib/reduxApp')
};

},{"./lib/reduxApp":2,"./lib/vanillaApp":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redux = require('redux'),
    expect = require('expect'),
    deepFreeze = require('deep-freeze');

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

      var combineReducers = Redux.combineReducers;


      var todoApp = combineReducers({
        todos: todos,
        visibilityFilter: visibilityFilter
      });

      var Component = React.Component;


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

      var Link = function Link(_ref3) {
        var active = _ref3.active;
        var _onClick = _ref3.onClick;
        var children = _ref3.children;

        if (active) {
          return React.createElement(
            'span',
            null,
            children
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
          children
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

            var store = this.props.store;


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
            var store = this.props.store;

            var props = this.props;
            var state = store.getState();

            return React.createElement(
              Link,
              { active: props.filter === state.visibilityFilter,
                onClick: function onClick() {
                  return store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                  });
                }
              },
              props.children
            );
          }
        }]);

        return FilterLink;
      }(Component);

      var nextTodoId = 0;
      var AddTodo = function AddTodo(_ref4) {
        var store = _ref4.store;

        var input = void 0;

        return React.createElement(
          'div',
          null,
          React.createElement('input', { ref: function ref(node) {
              input = node;
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
            var _this4 = this;

            var store = this.props.store;


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
            var store = this.props.store;

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

      var Footer = function Footer(_ref5) {
        var store = _ref5.store;
        return React.createElement(
          'p',
          null,
          'Show:',
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ALL', store: store },
            'All'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_ACTIVE', store: store },
            'Active'
          ),
          ' ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_COMPLETED', store: store },
            'Completed'
          )
        );
      };

      var TodoApp = function TodoApp(_ref6) {
        var store = _ref6.store;
        return React.createElement(
          'div',
          null,
          React.createElement(AddTodo, { store: store }),
          React.createElement(VisibleTodoList, { store: store }),
          React.createElement(Footer, { store: store })
        );
      };

      var createStore = Redux.createStore;


      ReactDOM.render(React.createElement(TodoApp, { store: createStore(todoApp) }), rootDOMElement);
    }
  }]);

  return ReduxApp;
}();

module.exports = ReduxApp;

// const addCounter = (list) => {
//   list = [...list, 0];
//
//   return list;
// };
//
// const removeCounter = (list, index) => {
//   list = [
//     ...list.slice(0, index),
//     ...list.slice(index + 1)
//   ];
//
//   return list;
// };
//
// const incrementCounter = (list, index) => {
//   list = [
//     ...list.slice(0, index),
//     list[index] + 1,
//     ...list.slice(index + 1)
//   ];
//
//   return list;
// };
//
// const testAddCounter = () => {
//   const listBefore = [];
//   const listAfter = [0];
//
//   deepFreeze(listBefore);
//
//   expect(
//     addCounter(listBefore)
//   ).toEqual(listAfter);
// };
//
// const testRemoveCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 20];
//
//   deepFreeze(listBefore);
//
//   expect(
//     removeCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };
//
// const testIncrementCounter = () => {
//   const listBefore = [0, 10, 20];
//   const listAfter = [0, 11, 20];
//
//   deepFreeze(listBefore);
//
//   expect(
//     incrementCounter(listBefore, 1)
//   ).toEqual(listAfter);
// };
//
// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();
//
// console.log('All tests passed.')

// static run() {
//   var rootDOMElement = document.getElementById('root');
//
//   const counter = (state = 0, action) => {
//     switch (action.type) {
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//       default:
//         return state;
//     }
//   };
//
//   const Counter = ({ value, onIncrement, onDecrement }) => (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//     </div>
//   );
//
//   const { createStore } = redux;
//   const store = createStore(counter);
//
//   const render = () => {
//     ReactDOM.render(
//       <Counter
//         value={store.getState()}
//         onIncrement={() => {
//           store.dispatch({
//             type: 'INCREMENT'
//           })
//         }}
//         onDecrement={() => {
//           store.dispatch({
//             type: 'DECREMENT'
//           })
//         }}
//       />,
//       rootDOMElement
//     );
//   };
//
//   store.subscribe(render);
//
//   render();
//
//   expect(
//       counter(0, { type: 'INCREMENT' })
//   ).toEqual(1);
//
//   expect(
//       counter(1, { type: 'INCREMENT' })
//   ).toEqual(2);
//
//   expect(
//       counter(2, { type: 'DECREMENT' })
//   ).toEqual(1);
//
//   expect(
//       counter(1, { type: 'DECREMENT' })
//   ).toEqual(0);
//
//   expect(
//       counter(1, { type: 'SOMETHING_ELSE'} )
//   ).toEqual(1);
//
//   expect(
//       counter(undefined, {})
//   ).toEqual(0);
//
//   console.log('Tests passed!')
// }

},{"../../index":4,"deep-freeze":17,"expect":23,"redux":46}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var reaction = require('../../index'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

var VanillaApp = function VanillaApp() {
  _classCallCheck(this, VanillaApp);

  var rootDOMElement = document.getElementById('root');

  var Comment = React.createClass({
    displayName: 'Comment',

    render: function render() {
      return React.createElement(
        'div',
        { className: 'comment' },
        React.createElement(
          'p',
          null,
          this.props.message
        )
      );
    },
    componentDidMount: function componentDidMount() {
      var message = this.props.message;

      console.log('comment mounted with message ' + message);
    }
  });

  var CommentsList = React.createClass({
    displayName: 'CommentsList',

    getInitialState: function getInitialState() {
      var messages = ["Hello, world!", "Hello world again..."],
          initialState = {
        messages: messages
      };

      return initialState;
    },
    render: function render() {
      var comments = this.state.messages.map(function (message) {
        return React.createElement(Comment, { message: message });
      });

      return React.createElement(
        'div',
        { className: 'commentsList' },
        comments
      );
    },
    componentDidMount: function componentDidMount() {
      console.log('comments list mounted');
    }
  });

  var commentsList = React.createElement(CommentsList, null);

  ReactDOM.render(commentsList, rootDOMElement);

  var messages = ["Hello world yet again!!!"],
      state = {
    messages: messages
  };

  setTimeout(function () {
    commentsList.setState(state);
  }, 1000); ///
};

module.exports = VanillaApp;

},{"../../index":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":11,"./lib/reactDOM":14}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseElement = function () {
  function BaseElement(domElement) {
    _classCallCheck(this, BaseElement);

    this.domElement = domElement;
  }

  _createClass(BaseElement, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'mount',
    value: function mount(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: 'update',
    value: function update(oldElement) {
      oldElement.appendAfter(this);

      oldElement.remove();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(element) {
      var domElement = element.getDOMElement();

      this.domElement.appendChild(domElement);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      var domElement = element.getDOMElement();

      this.domElement.parentNode.insertBefore(domElement, this.domElement.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentNode.removeChild(this.domElement);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }]);

  return BaseElement;
}();

module.exports = BaseElement;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var ClassElement = function (_Element) {
  _inherits(ClassElement, _Element);

  function ClassElement(reactClass, properties, children) {
    _classCallCheck(this, ClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClassElement).call(this, properties, children));

    _this.reactClass = reactClass;

    var displayName = reactClass.getDisplayName(),
        state = reactClass.getInitialState(); ///

    _this.instance = Object.assign(_this.instance, {
      displayName: displayName,
      state: state
    });

    _this.render();
    return _this;
  }

  _createClass(ClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance = Object.assign(this.instance, {
        state: state
      });

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      this.element = this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }]);

  return ClassElement;
}(Element);

module.exports = ClassElement;

},{"./element":9}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var ComponentElement = function (_Element) {
  _inherits(ComponentElement, _Element);

  function ComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, ComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;

    _this.render();
    return _this;
  }

  _createClass(ComponentElement, [{
    key: 'render',
    value: function render() {
      this.element = this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }]);

  return ComponentElement;
}(Element);

module.exports = ComponentElement;

},{"./element":9}],8:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseElement = require('./baseElement');

var DisplayElement = function (_BaseElement) {
  _inherits(DisplayElement, _BaseElement);

  function DisplayElement(domElementOrDisplayName, properties, children) {
    _classCallCheck(this, DisplayElement);

    var domElement;

    if (typeof domElementOrDisplayName === 'string') {
      var displayName = domElementOrDisplayName; ///

      domElement = document.createElement(displayName);
    } else {
      domElement = domElementOrDisplayName; ///
    }

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.addPropertiesToBaseElement(properties);

    children.forEach(function (child) {
      child.mount(this); ///
    }.bind(_this));
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'addPropertiesToBaseElement',
    value: function addPropertiesToBaseElement(properties) {
      if (properties === null) {
        return;
      }

      var domElement = this.getDOMElement(),
          propertyNames = Object.keys(properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          ref = domElement; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var onevent = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          domElement[onevent] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue; ///

          domElement.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName; ///

          var keys = Object.keys(propertyValue); ///
          keys.forEach(function (key) {
            var value = propertyValue[key];

            domElement[attributeName][key] = value;
          });
        } else {
          ///
        }
      });
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var properties = null,
          children = [];

      return new DisplayElement(domElement, properties, children);
    }
  }]);

  return DisplayElement;
}(BaseElement);

module.exports = DisplayElement;

function attributeNameFromPropertyName(propertyName) {
  switch (propertyName) {
    case 'className':
      return 'class';

    case 'htmlFor':
      return 'for';
  }

  return propertyName; ///
}

function lowercase(string) {
  return string.toLowerCase();
}

function beginsWith(string, beginningString) {
  var regExp = new RegExp('^' + beginningString),
      matches = string.match(regExp);

  return !!matches; ///
}

},{"./baseElement":5}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(properties, children) {
    _classCallCheck(this, Element);

    var props = Object.assign({}, properties, { children: children }),
        forceUpdate = this.forceUpdate.bind(this);

    this.instance = Object.assign({}, { props: props }, { forceUpdate: forceUpdate });

    this.element = undefined; ///
  }

  _createClass(Element, [{
    key: 'mount',
    value: function mount(parentElement) {
      this.element.mount(parentElement);

      this.componentDidMount();
    }
  }, {
    key: 'update',
    value: function update(oldElement) {
      this.element.update(oldElement);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.componentWillUnmount();

      this.element.unmount();
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var oldElement = this.element;

      this.render();

      this.update(oldElement);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.element.remove();
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(element) {
      this.element.appendAfter(element);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return Element;
}();

module.exports = Element;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var FunctionElement = function (_Element) {
  _inherits(FunctionElement, _Element);

  function FunctionElement(reactFunction, properties, children) {
    _classCallCheck(this, FunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FunctionElement).call(this, properties, children));

    _this.reactFunction = reactFunction;

    _this.render();
    return _this;
  }

  _createClass(FunctionElement, [{
    key: 'render',
    value: function render() {
      var _ref = this.instance.props; ////

      this.element = this.reactFunction(_ref);
    }
  }]);

  return FunctionElement;
}(Element);

module.exports = FunctionElement;

},{"./element":9}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = require('./reactClass'),
    ReactComponent = require('./reactComponent'),
    Element = require('./element'),
    BaseElement = require('./baseElement'),
    TextElement = require('./textElement'),
    ClassElement = require('./classElement'),
    DisplayElement = require('./displayElement'),
    FunctionElement = require('./functionElement'),
    ComponentElement = require('./componentElement');

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createClass',
    value: function createClass(properties) {
      var reactClass = ReactClass.fromProperties(properties);

      return reactClass;
    }
  }, {
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      if (firstArgument === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromRemainingArguments(remainingArguments),
          element;

      if (false) {} else if (firstArgument.prototype instanceof ReactComponent) {
        var reactComponentConstructor = firstArgument,
            ///
        reactComponent = new reactComponentConstructor();

        element = new ComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        element = new ClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        element = new FunctionElement(reactFunction, properties, children);
      } else {
        var displayName = firstArgument; ///

        element = new DisplayElement(displayName, properties, children);
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromRemainingArguments(remainingArguments) {
  var firstRemainingArgument = first(remainingArguments);

  if (firstRemainingArgument instanceof Array) {
    remainingArguments = firstRemainingArgument; ///
  }

  var children = remainingArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof Element || remainingArgument instanceof BaseElement) {
      child = remainingArgument; ///
    } else {
        var text = '' + remainingArgument,
            ///
        jsxTextElement = new TextElement(text);

        child = jsxTextElement; ///
      }

    return child;
  });

  return children;
}

function first(array) {
  return array[0];
}

},{"./baseElement":5,"./classElement":6,"./componentElement":7,"./displayElement":8,"./element":9,"./functionElement":10,"./reactClass":12,"./reactComponent":13,"./textElement":15}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDisplayElement = require('./displayElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
  }

  _createClass(ReactClass, [{
    key: 'getDisplayName',
    value: function getDisplayName() {
      return this.displayName;
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var render = properties['render'] || defaultRender,
          displayName = properties['displayName'] || defaultDisplayName,
          getInitialState = properties['getInitialState'] || defaultGetInitialState,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount);

      return reactClass;
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

function defaultRender() {
  var properties = this.props,
      ///
  displayName = this.displayName,
      ///
  children = this.props.children; ///

  delete properties.children; ///

  var jsxElement = new JSXDisplayElement(displayName, properties, children);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  var initialState = {};

  return initialState;
}

function defaultComponentDidMount() {}

},{"./displayElement":8}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }]);

  return ReactComponent;
}();

module.exports = ReactComponent;

},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSXDisplayElement = require('./displayElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(jsxElement, parentDOMElement) {
      var parentJSXElement = JSXDisplayElement.fromDOMElement(parentDOMElement);

      parentJSXElement.empty();

      jsxElement.mount(parentJSXElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./displayElement":8}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseElement = require('./baseElement');

var TextElement = function (_BaseElement) {
  _inherits(TextElement, _BaseElement);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement));
  }

  return TextElement;
}(BaseElement);

module.exports = TextElement;

},{"./baseElement":5}],16:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],17:[function(require,module,exports){
module.exports = function deepFreeze (o) {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o.hasOwnProperty(prop)
    && o[prop] !== null
    && (typeof o[prop] === "object" || typeof o[prop] === "function")
    && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  
  return o;
};

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isEqual = require('is-equal');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isRegex = require('is-regex');

var _isRegex2 = _interopRequireDefault(_isRegex);

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

var _SpyUtils = require('./SpyUtils');

var _TestUtils = require('./TestUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An Expectation is a wrapper around an assertion that allows it to be written
 * in a more natural style, without the need to remember the order of arguments.
 * This helps prevent you from making mistakes when writing tests.
 */

var Expectation = function () {
  function Expectation(actual) {
    _classCallCheck(this, Expectation);

    this.actual = actual;

    if ((0, _TestUtils.isFunction)(actual)) {
      this.context = null;
      this.args = [];
    }
  }

  _createClass(Expectation, [{
    key: 'toExist',
    value: function toExist(message) {
      (0, _assert2.default)(this.actual, message || 'Expected %s to exist', this.actual);

      return this;
    }
  }, {
    key: 'toNotExist',
    value: function toNotExist(message) {
      (0, _assert2.default)(!this.actual, message || 'Expected %s to not exist', this.actual);

      return this;
    }
  }, {
    key: 'toBe',
    value: function toBe(value, message) {
      (0, _assert2.default)(this.actual === value, message || 'Expected %s to be %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toNotBe',
    value: function toNotBe(value, message) {
      (0, _assert2.default)(this.actual !== value, message || 'Expected %s to not be %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toEqual',
    value: function toEqual(value, message) {
      try {
        (0, _assert2.default)((0, _isEqual2.default)(this.actual, value), message || 'Expected %s to equal %s', this.actual, value);
      } catch (e) {
        // These attributes are consumed by Mocha to produce a diff output.
        e.showDiff = true;
        e.actual = this.actual;
        e.expected = value;
        throw e;
      }

      return this;
    }
  }, {
    key: 'toNotEqual',
    value: function toNotEqual(value, message) {
      (0, _assert2.default)(!(0, _isEqual2.default)(this.actual, value), message || 'Expected %s to not equal %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toThrow',
    value: function toThrow(value, message) {
      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).toThrow() must be a function, %s was given', this.actual);

      (0, _assert2.default)((0, _TestUtils.functionThrows)(this.actual, this.context, this.args, value), message || 'Expected %s to throw %s', this.actual, value || 'an error');

      return this;
    }
  }, {
    key: 'toNotThrow',
    value: function toNotThrow(value, message) {
      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).toNotThrow() must be a function, %s was given', this.actual);

      (0, _assert2.default)(!(0, _TestUtils.functionThrows)(this.actual, this.context, this.args, value), message || 'Expected %s to not throw %s', this.actual, value || 'an error');

      return this;
    }
  }, {
    key: 'toBeA',
    value: function toBeA(value, message) {
      (0, _assert2.default)((0, _TestUtils.isFunction)(value) || typeof value === 'string', 'The "value" argument in toBeA(value) must be a function or a string');

      (0, _assert2.default)((0, _TestUtils.isA)(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toNotBeA',
    value: function toNotBeA(value, message) {
      (0, _assert2.default)((0, _TestUtils.isFunction)(value) || typeof value === 'string', 'The "value" argument in toNotBeA(value) must be a function or a string');

      (0, _assert2.default)(!(0, _TestUtils.isA)(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toMatch',
    value: function toMatch(pattern, message) {
      (0, _assert2.default)(typeof this.actual === 'string', 'The "actual" argument in expect(actual).toMatch() must be a string');

      (0, _assert2.default)((0, _isRegex2.default)(pattern), 'The "value" argument in toMatch(value) must be a RegExp');

      (0, _assert2.default)(pattern.test(this.actual), message || 'Expected %s to match %s', this.actual, pattern);

      return this;
    }
  }, {
    key: 'toNotMatch',
    value: function toNotMatch(pattern, message) {
      (0, _assert2.default)(typeof this.actual === 'string', 'The "actual" argument in expect(actual).toNotMatch() must be a string');

      (0, _assert2.default)((0, _isRegex2.default)(pattern), 'The "value" argument in toNotMatch(value) must be a RegExp');

      (0, _assert2.default)(!pattern.test(this.actual), message || 'Expected %s to not match %s', this.actual, pattern);

      return this;
    }
  }, {
    key: 'toBeLessThan',
    value: function toBeLessThan(value, message) {
      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThan() must be a number');

      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeLessThan(value) must be a number');

      (0, _assert2.default)(this.actual < value, message || 'Expected %s to be less than %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toBeLessThanOrEqualTo',
    value: function toBeLessThanOrEqualTo(value, message) {
      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThanOrEqualTo() must be a number');

      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeLessThanOrEqualTo(value) must be a number');

      (0, _assert2.default)(this.actual <= value, message || 'Expected %s to be less than or equal to %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toBeGreaterThan',
    value: function toBeGreaterThan(value, message) {
      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThan() must be a number');

      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeGreaterThan(value) must be a number');

      (0, _assert2.default)(this.actual > value, message || 'Expected %s to be greater than %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toBeGreaterThanOrEqualTo',
    value: function toBeGreaterThanOrEqualTo(value, message) {
      (0, _assert2.default)(typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThanOrEqualTo() must be a number');

      (0, _assert2.default)(typeof value === 'number', 'The "value" argument in toBeGreaterThanOrEqualTo(value) must be a number');

      (0, _assert2.default)(this.actual >= value, message || 'Expected %s to be greater than or equal to %s', this.actual, value);

      return this;
    }
  }, {
    key: 'toInclude',
    value: function toInclude(value, compareValues, message) {
      (0, _assert2.default)((0, _TestUtils.isArray)(this.actual) || (0, _TestUtils.isObject)(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toInclude() must be an array, object, or a string');

      if (typeof compareValues === 'string') {
        message = compareValues;
        compareValues = null;
      }

      message = message || 'Expected %s to include %s';

      if ((0, _TestUtils.isArray)(this.actual)) {
        (0, _assert2.default)((0, _TestUtils.arrayContains)(this.actual, value, compareValues), message, this.actual, value);
      } else if ((0, _TestUtils.isObject)(this.actual)) {
        (0, _assert2.default)((0, _TestUtils.objectContains)(this.actual, value, compareValues), message, this.actual, value);
      } else {
        (0, _assert2.default)((0, _TestUtils.stringContains)(this.actual, value), message, this.actual, value);
      }

      return this;
    }
  }, {
    key: 'toExclude',
    value: function toExclude(value, compareValues, message) {
      (0, _assert2.default)((0, _TestUtils.isArray)(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toExclude() must be an array or a string');

      if (typeof compareValues === 'string') {
        message = compareValues;
        compareValues = null;
      }

      message = message || 'Expected %s to exclude %s';

      if ((0, _TestUtils.isArray)(this.actual)) {
        (0, _assert2.default)(!(0, _TestUtils.arrayContains)(this.actual, value, compareValues), message, this.actual, value);
      } else {
        (0, _assert2.default)(!(0, _TestUtils.stringContains)(this.actual, value), message, this.actual, value);
      }

      return this;
    }
  }, {
    key: 'toHaveBeenCalled',
    value: function toHaveBeenCalled(message) {
      var spy = this.actual;

      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toHaveBeenCalled() must be a spy');

      (0, _assert2.default)(spy.calls.length > 0, message || 'spy was not called');

      return this;
    }
  }, {
    key: 'toHaveBeenCalledWith',
    value: function toHaveBeenCalledWith() {
      for (var _len = arguments.length, expectedArgs = Array(_len), _key = 0; _key < _len; _key++) {
        expectedArgs[_key] = arguments[_key];
      }

      var spy = this.actual;

      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toHaveBeenCalledWith() must be a spy');

      (0, _assert2.default)(spy.calls.some(function (call) {
        return (0, _isEqual2.default)(call.arguments, expectedArgs);
      }), 'spy was never called with %s', expectedArgs);

      return this;
    }
  }, {
    key: 'toNotHaveBeenCalled',
    value: function toNotHaveBeenCalled(message) {
      var spy = this.actual;

      (0, _assert2.default)((0, _SpyUtils.isSpy)(spy), 'The "actual" argument in expect(actual).toNotHaveBeenCalled() must be a spy');

      (0, _assert2.default)(spy.calls.length === 0, message || 'spy was not supposed to be called');

      return this;
    }
  }, {
    key: 'withContext',
    value: function withContext(context) {
      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).withContext() must be a function');

      this.context = context;

      return this;
    }
  }, {
    key: 'withArgs',
    value: function withArgs() {
      var _args;

      (0, _assert2.default)((0, _TestUtils.isFunction)(this.actual), 'The "actual" argument in expect(actual).withArgs() must be a function');

      if (arguments.length) this.args = (_args = this.args).concat.apply(_args, arguments);

      return this;
    }
  }]);

  return Expectation;
}();

var aliases = {
  toBeAn: 'toBeA',
  toNotBeAn: 'toNotBeA',
  toBeTruthy: 'toExist',
  toBeFalsy: 'toNotExist',
  toBeFewerThan: 'toBeLessThan',
  toBeMoreThan: 'toBeGreaterThan',
  toContain: 'toInclude',
  toNotContain: 'toExclude'
};

for (var alias in aliases) {
  if (aliases.hasOwnProperty(alias)) Expectation.prototype[alias] = Expectation.prototype[aliases[alias]];
}exports.default = Expectation;
},{"./SpyUtils":19,"./TestUtils":20,"./assert":21,"is-equal":26,"is-regex":39}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restoreSpies = exports.isSpy = undefined;
exports.createSpy = createSpy;
exports.spyOn = spyOn;

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

var _TestUtils = require('./TestUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-rest-params */


var noop = function noop() {};

var isSpy = exports.isSpy = function isSpy(object) {
  return object && object.__isSpy === true;
};

var spies = [];

var restoreSpies = exports.restoreSpies = function restoreSpies() {
  for (var i = spies.length - 1; i >= 0; i--) {
    spies[i].restore();
  }spies = [];
};

function createSpy(fn) {
  var restore = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

  if (fn == null) fn = noop;

  (0, _assert2.default)((0, _TestUtils.isFunction)(fn), 'createSpy needs a function');

  var targetFn = void 0,
      thrownValue = void 0,
      returnValue = void 0;

  var spy = function spy() {
    spy.calls.push({
      context: this,
      arguments: Array.prototype.slice.call(arguments, 0)
    });

    if (targetFn) return targetFn.apply(this, arguments);

    if (thrownValue) throw thrownValue;

    return returnValue;
  };

  spy.calls = [];

  spy.andCall = function (otherFn) {
    targetFn = otherFn;
    return spy;
  };

  spy.andCallThrough = function () {
    return spy.andCall(fn);
  };

  spy.andThrow = function (object) {
    thrownValue = object;
    return spy;
  };

  spy.andReturn = function (value) {
    returnValue = value;
    return spy;
  };

  spy.getLastCall = function () {
    return spy.calls[spy.calls.length - 1];
  };

  spy.reset = function () {
    spy.calls = [];
  };

  spy.restore = spy.destroy = restore;

  spy.__isSpy = true;

  spies.push(spy);

  return spy;
}

function spyOn(object, methodName) {
  var original = object[methodName];

  if (!isSpy(original)) {
    (0, _assert2.default)((0, _TestUtils.isFunction)(original), 'Cannot spyOn the %s property; it is not a function', methodName);

    object[methodName] = createSpy(original, function () {
      object[methodName] = original;
    });
  }

  return object[methodName];
}
},{"./TestUtils":20,"./assert":21}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringContains = exports.objectContains = exports.arrayContains = exports.functionThrows = exports.isA = exports.isObject = exports.isArray = exports.isFunction = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _isEqual = require('is-equal');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isRegex = require('is-regex');

var _isRegex2 = _interopRequireDefault(_isRegex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the given object is a function.
 */
var isFunction = exports.isFunction = function isFunction(object) {
  return typeof object === 'function';
};

/**
 * Returns true if the given object is an array.
 */
var isArray = exports.isArray = function isArray(object) {
  return Array.isArray(object);
};

/**
 * Returns true if the given object is an object.
 */
var isObject = exports.isObject = function isObject(object) {
  return object && !isArray(object) && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object';
};

/**
 * Returns true if the given object is an instanceof value
 * or its typeof is the given value.
 */
var isA = exports.isA = function isA(object, value) {
  if (isFunction(value)) return object instanceof value;

  if (value === 'array') return Array.isArray(object);

  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === value;
};

/**
 * Returns true if the given function throws the given value
 * when invoked. The value may be:
 *
 * - undefined, to merely assert there was a throw
 * - a constructor function, for comparing using instanceof
 * - a regular expression, to compare with the error message
 * - a string, to find in the error message
 */
var functionThrows = exports.functionThrows = function functionThrows(fn, context, args, value) {
  try {
    fn.apply(context, args);
  } catch (error) {
    if (value == null) return true;

    if (isFunction(value) && error instanceof value) return true;

    var message = error.message || error;

    if (typeof message === 'string') {
      if ((0, _isRegex2.default)(value) && value.test(error.message)) return true;

      if (typeof value === 'string' && message.indexOf(value) !== -1) return true;
    }
  }

  return false;
};

/**
 * Returns true if the given array contains the value, false
 * otherwise. The compareValues function must return false to
 * indicate a non-match.
 */
var arrayContains = exports.arrayContains = function arrayContains(array, value, compareValues) {
  if (compareValues == null) compareValues = _isEqual2.default;

  return array.some(function (item) {
    return compareValues(item, value) !== false;
  });
};

/**
 * Returns true if the given object contains the value, false
 * otherwise. The compareValues function must return false to
 * indicate a non-match.
 */
var objectContains = exports.objectContains = function objectContains(object, value, compareValues) {
  if (compareValues == null) compareValues = _isEqual2.default;

  return Object.keys(value).every(function (k) {
    if (isObject(object[k])) {
      return objectContains(object[k], value[k], compareValues);
    }

    return compareValues(object[k], value[k]);
  });
};

/**
 * Returns true if the given string contains the value, false otherwise.
 */
var stringContains = exports.stringContains = function stringContains(string, value) {
  return string.indexOf(value) !== -1;
};
},{"is-equal":26,"is-regex":39}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectInspect = require('object-inspect');

var _objectInspect2 = _interopRequireDefault(_objectInspect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function assert(condition, messageFormat) {
  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    extraArgs[_key - 2] = arguments[_key];
  }

  if (condition) return;

  var index = 0;

  throw new Error(messageFormat.replace(/%s/g, function () {
    return (0, _objectInspect2.default)(extraArgs[index++]);
  }));
}

exports.default = assert;
},{"object-inspect":40}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Expectation = require('./Expectation');

var _Expectation2 = _interopRequireDefault(_Expectation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Extensions = [];

function extend(extension) {
  if (Extensions.indexOf(extension) === -1) {
    Extensions.push(extension);

    for (var p in extension) {
      if (extension.hasOwnProperty(p)) _Expectation2.default.prototype[p] = extension[p];
    }
  }
}

exports.default = extend;
},{"./Expectation":18}],23:[function(require,module,exports){
'use strict';

var _Expectation = require('./Expectation');

var _Expectation2 = _interopRequireDefault(_Expectation);

var _SpyUtils = require('./SpyUtils');

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

var _extend = require('./extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function expect(actual) {
  return new _Expectation2.default(actual);
}

expect.createSpy = _SpyUtils.createSpy;
expect.spyOn = _SpyUtils.spyOn;
expect.isSpy = _SpyUtils.isSpy;
expect.restoreSpies = _SpyUtils.restoreSpies;
expect.assert = _assert2.default;
expect.extend = _extend2.default;

module.exports = expect;
},{"./Expectation":18,"./SpyUtils":19,"./assert":21,"./extend":22}],24:[function(require,module,exports){
'use strict';

module.exports = function () {
	var mapForEach = (function () {
		if (typeof Map !== 'function') { return null; }
		try {
			Map.prototype.forEach.call({}, function () {});
		} catch (e) {
			return Map.prototype.forEach;
		}
		return null;
	}());

	var setForEach = (function () {
		if (typeof Set !== 'function') { return null; }
		try {
			Set.prototype.forEach.call({}, function () {});
		} catch (e) {
			return Set.prototype.forEach;
		}
		return null;
	}());

	return { Map: mapForEach, Set: setForEach };
};

},{}],25:[function(require,module,exports){
'use strict';

var isSymbol = require('is-symbol');

module.exports = function getSymbolIterator() {
	var symbolIterator = typeof Symbol === 'function' && isSymbol(Symbol.iterator) ? Symbol.iterator : null;

	if (typeof Object.getOwnPropertyNames === 'function' && typeof Map === 'function' && typeof Map.prototype.entries === 'function') {
		Object.getOwnPropertyNames(Map.prototype).forEach(function (name) {
			if (name !== 'entries' && name !== 'size' && Map.prototype[name] === Map.prototype.entries) {
				symbolIterator = name;
			}
		});
	}

	return symbolIterator;
};

},{"is-symbol":37}],26:[function(require,module,exports){
'use strict';

var whyNotEqual = require('./why');

module.exports = function isEqual(value, other) {
	return whyNotEqual(value, other) === '';
};

},{"./why":38}],27:[function(require,module,exports){
var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],28:[function(require,module,exports){
var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":27}],29:[function(require,module,exports){
var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":28}],30:[function(require,module,exports){
'use strict';

var isCallable = require('is-callable');
var fnToStr = Function.prototype.toString;
var isNonArrowFnRegex = /^\s*function/;
var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
var isArrowFnWithoutParensRegex = /^[^=]*=>/;

module.exports = function isArrowFunction(fn) {
	if (!isCallable(fn)) { return false; }
	var fnStr = fnToStr.call(fn);
	return fnStr.length > 0 &&
		!isNonArrowFnRegex.test(fnStr) &&
		(isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
};

},{"is-callable":32}],31:[function(require,module,exports){
'use strict';

var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function tryBooleanObject(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};

},{}],32:[function(require,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class /;
var isES6ClassFn = function isES6ClassFn(value) {
	try {
		var fnStr = fnToStr.call(value);
		var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
		var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
		var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
		return constructorRegex.test(spaceStripped);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionObject(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};

},{}],33:[function(require,module,exports){
'use strict';

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{}],34:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*function\*/;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') { return false; }
	var fnStr = toStr.call(fn);
	return (fnStr === '[object Function]' || fnStr === '[object GeneratorFunction]') && isFnRegex.test(fnToStr.call(fn));
};


},{}],35:[function(require,module,exports){
'use strict';

var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};

},{}],36:[function(require,module,exports){
'use strict';

var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{}],37:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') { return false; }
		return symStringRegex.test(symToStr.call(value));
	};
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') { return true; }
		if (toStr.call(value) !== '[object Symbol]') { return false; }
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false;
	};
}

},{}],38:[function(require,module,exports){
'use strict';

var ObjectPrototype = Object.prototype;
var toStr = ObjectPrototype.toString;
var booleanValue = Boolean.prototype.valueOf;
var has = require('has');
var isArrowFunction = require('is-arrow-function');
var isBoolean = require('is-boolean-object');
var isDate = require('is-date-object');
var isGenerator = require('is-generator-function');
var isNumber = require('is-number-object');
var isRegex = require('is-regex');
var isString = require('is-string');
var isSymbol = require('is-symbol');
var isCallable = require('is-callable');

var isProto = Object.prototype.isPrototypeOf;

var foo = function foo() {};
var functionsHaveNames = foo.name === 'foo';

var symbolValue = typeof Symbol === 'function' ? Symbol.prototype.valueOf : null;
var symbolIterator = require('./getSymbolIterator')();

var collectionsForEach = require('./getCollectionsForEach')();

var getPrototypeOf = Object.getPrototypeOf;
if (!getPrototypeOf) {
	/* eslint-disable no-proto */
	if (typeof 'test'.__proto__ === 'object') {
		getPrototypeOf = function (obj) {
			return obj.__proto__;
		};
	} else {
		getPrototypeOf = function (obj) {
			var constructor = obj.constructor,
				oldConstructor;
			if (has(obj, 'constructor')) {
				oldConstructor = constructor;
				if (!(delete obj.constructor)) { // reset constructor
					return null; // can't delete obj.constructor, return null
				}
				constructor = obj.constructor; // get real constructor
				obj.constructor = oldConstructor; // restore constructor
			}
			return constructor ? constructor.prototype : ObjectPrototype; // needed for IE
		};
	}
	/* eslint-enable no-proto */
}

var isArray = Array.isArray || function (value) {
	return toStr.call(value) === '[object Array]';
};

var normalizeFnWhitespace = function normalizeFnWhitespace(fnStr) {
	// this is needed in IE 9, at least, which has inconsistencies here.
	return fnStr.replace(/^function ?\(/, 'function (').replace('){', ') {');
};

var tryMapSetEntries = function tryMapSetEntries(collection) {
	var foundEntries = [];
	try {
		collectionsForEach.Map.call(collection, function (key, value) {
			foundEntries.push([key, value]);
		});
	} catch (notMap) {
		try {
			collectionsForEach.Set.call(collection, function (value) {
				foundEntries.push([value]);
			});
		} catch (notSet) {
			return false;
		}
	}
	return foundEntries;
};

module.exports = function whyNotEqual(value, other) {
	if (value === other) { return ''; }
	if (value == null || other == null) {
		return value === other ? '' : String(value) + ' !== ' + String(other);
	}

	var valToStr = toStr.call(value);
	var otherToStr = toStr.call(value);
	if (valToStr !== otherToStr) {
		return 'toStringTag is not the same: ' + valToStr + ' !== ' + otherToStr;
	}

	var valIsBool = isBoolean(value);
	var otherIsBool = isBoolean(other);
	if (valIsBool || otherIsBool) {
		if (!valIsBool) { return 'first argument is not a boolean; second argument is'; }
		if (!otherIsBool) { return 'second argument is not a boolean; first argument is'; }
		var valBoolVal = booleanValue.call(value);
		var otherBoolVal = booleanValue.call(other);
		if (valBoolVal === otherBoolVal) { return ''; }
		return 'primitive value of boolean arguments do not match: ' + valBoolVal + ' !== ' + otherBoolVal;
	}

	var valIsNumber = isNumber(value);
	var otherIsNumber = isNumber(value);
	if (valIsNumber || otherIsNumber) {
		if (!valIsNumber) { return 'first argument is not a number; second argument is'; }
		if (!otherIsNumber) { return 'second argument is not a number; first argument is'; }
		var valNum = Number(value);
		var otherNum = Number(other);
		if (valNum === otherNum) { return ''; }
		var valIsNaN = isNaN(value);
		var otherIsNaN = isNaN(other);
		if (valIsNaN && !otherIsNaN) {
			return 'first argument is NaN; second is not';
		} else if (!valIsNaN && otherIsNaN) {
			return 'second argument is NaN; first is not';
		} else if (valIsNaN && otherIsNaN) {
			return '';
		}
		return 'numbers are different: ' + value + ' !== ' + other;
	}

	var valIsString = isString(value);
	var otherIsString = isString(other);
	if (valIsString || otherIsString) {
		if (!valIsString) { return 'second argument is string; first is not'; }
		if (!otherIsString) { return 'first argument is string; second is not'; }
		var stringVal = String(value);
		var otherVal = String(other);
		if (stringVal === otherVal) { return ''; }
		return 'string values are different: "' + stringVal + '" !== "' + otherVal + '"';
	}

	var valIsDate = isDate(value);
	var otherIsDate = isDate(other);
	if (valIsDate || otherIsDate) {
		if (!valIsDate) { return 'second argument is Date, first is not'; }
		if (!otherIsDate) { return 'first argument is Date, second is not'; }
		var valTime = +value;
		var otherTime = +other;
		if (valTime === otherTime) { return ''; }
		return 'Dates have different time values: ' + valTime + ' !== ' + otherTime;
	}

	var valIsRegex = isRegex(value);
	var otherIsRegex = isRegex(other);
	if (valIsRegex || otherIsRegex) {
		if (!valIsRegex) { return 'second argument is RegExp, first is not'; }
		if (!otherIsRegex) { return 'first argument is RegExp, second is not'; }
		var regexStringVal = String(value);
		var regexStringOther = String(other);
		if (regexStringVal === regexStringOther) { return ''; }
		return 'regular expressions differ: ' + regexStringVal + ' !== ' + regexStringOther;
	}

	var valIsArray = isArray(value);
	var otherIsArray = isArray(other);
	if (valIsArray || otherIsArray) {
		if (!valIsArray) { return 'second argument is an Array, first is not'; }
		if (!otherIsArray) { return 'first argument is an Array, second is not'; }
		if (value.length !== other.length) {
			return 'arrays have different length: ' + value.length + ' !== ' + other.length;
		}
		if (String(value) !== String(other)) { return 'stringified Arrays differ'; }

		var index = value.length - 1;
		var equal = '';
		var valHasIndex, otherHasIndex;
		while (equal === '' && index >= 0) {
			valHasIndex = has(value, index);
			otherHasIndex = has(other, index);
			if (!valHasIndex && otherHasIndex) { return 'second argument has index ' + index + '; first does not'; }
			if (valHasIndex && !otherHasIndex) { return 'first argument has index ' + index + '; second does not'; }
			equal = whyNotEqual(value[index], other[index]);
			index -= 1;
		}
		return equal;
	}

	var valueIsSym = isSymbol(value);
	var otherIsSym = isSymbol(other);
	if (valueIsSym !== otherIsSym) {
		if (valueIsSym) { return 'first argument is Symbol; second is not'; }
		return 'second argument is Symbol; first is not';
	}
	if (valueIsSym && otherIsSym) {
		return symbolValue.call(value) === symbolValue.call(other) ? '' : 'first Symbol value !== second Symbol value';
	}

	var valueIsGen = isGenerator(value);
	var otherIsGen = isGenerator(other);
	if (valueIsGen !== otherIsGen) {
		if (valueIsGen) { return 'first argument is a Generator; second is not'; }
		return 'second argument is a Generator; first is not';
	}

	var valueIsArrow = isArrowFunction(value);
	var otherIsArrow = isArrowFunction(other);
	if (valueIsArrow !== otherIsArrow) {
		if (valueIsArrow) { return 'first argument is an Arrow function; second is not'; }
		return 'second argument is an Arrow function; first is not';
	}

	if (isCallable(value) || isCallable(other)) {
		if (functionsHaveNames && whyNotEqual(value.name, other.name) !== '') {
			return 'Function names differ: "' + value.name + '" !== "' + other.name + '"';
		}
		if (whyNotEqual(value.length, other.length) !== '') {
			return 'Function lengths differ: ' + value.length + ' !== ' + other.length;
		}

		var valueStr = normalizeFnWhitespace(String(value));
		var otherStr = normalizeFnWhitespace(String(other));
		if (whyNotEqual(valueStr, otherStr) === '') { return ''; }

		if (!valueIsGen && !valueIsArrow) {
			return whyNotEqual(valueStr.replace(/\)\s*\{/, '){'), otherStr.replace(/\)\s*\{/, '){')) === '' ? '' : 'Function string representations differ';
		}
		return whyNotEqual(valueStr, otherStr) === '' ? '' : 'Function string representations differ';
	}

	if (typeof value === 'object' || typeof other === 'object') {
		if (typeof value !== typeof other) { return 'arguments have a different typeof: ' + typeof value + ' !== ' + typeof other; }
		if (isProto.call(value, other)) { return 'first argument is the [[Prototype]] of the second'; }
		if (isProto.call(other, value)) { return 'second argument is the [[Prototype]] of the first'; }
		if (getPrototypeOf(value) !== getPrototypeOf(other)) { return 'arguments have a different [[Prototype]]'; }

		if (symbolIterator) {
			var valueIteratorFn = value[symbolIterator];
			var valueIsIterable = isCallable(valueIteratorFn);
			var otherIteratorFn = other[symbolIterator];
			var otherIsIterable = isCallable(otherIteratorFn);
			if (valueIsIterable !== otherIsIterable) {
				if (valueIsIterable) { return 'first argument is iterable; second is not'; }
				return 'second argument is iterable; first is not';
			}
			if (valueIsIterable && otherIsIterable) {
				var valueIterator = valueIteratorFn.call(value);
				var otherIterator = otherIteratorFn.call(other);
				var valueNext, otherNext, nextWhy;
				do {
					valueNext = valueIterator.next();
					otherNext = otherIterator.next();
					if (!valueNext.done && !otherNext.done) {
						nextWhy = whyNotEqual(valueNext, otherNext);
						if (nextWhy !== '') {
							return 'iteration results are not equal: ' + nextWhy;
						}
					}
				} while (!valueNext.done && !otherNext.done);
				if (valueNext.done && !otherNext.done) { return 'first argument finished iterating before second'; }
				if (!valueNext.done && otherNext.done) { return 'second argument finished iterating before first'; }
				return '';
			}
		} else if (collectionsForEach.Map || collectionsForEach.Set) {
			var valueEntries = tryMapSetEntries(value);
			var otherEntries = tryMapSetEntries(other);
			var valueEntriesIsArray = isArray(valueEntries);
			var otherEntriesIsArray = isArray(otherEntries);
			if (valueEntriesIsArray && !otherEntriesIsArray) { return 'first argument has Collection entries, second does not'; }
			if (!valueEntriesIsArray && otherEntriesIsArray) { return 'second argument has Collection entries, first does not'; }
			if (valueEntriesIsArray && otherEntriesIsArray) {
				var entriesWhy = whyNotEqual(valueEntries, otherEntries);
				return entriesWhy === '' ? '' : 'Collection entries differ: ' + entriesWhy;
			}
		}

		var key, valueKeyIsRecursive, otherKeyIsRecursive, keyWhy;
		for (key in value) {
			if (has(value, key)) {
				if (!has(other, key)) { return 'first argument has key "' + key + '"; second does not'; }
				valueKeyIsRecursive = value[key] && value[key][key] === value;
				otherKeyIsRecursive = other[key] && other[key][key] === other;
				if (valueKeyIsRecursive !== otherKeyIsRecursive) {
					if (valueKeyIsRecursive) { return 'first argument has a circular reference at key "' + key + '"; second does not'; }
					return 'second argument has a circular reference at key "' + key + '"; first does not';
				}
				if (!valueKeyIsRecursive && !otherKeyIsRecursive) {
					keyWhy = whyNotEqual(value[key], other[key]);
					if (keyWhy !== '') {
						return 'value at key "' + key + '" differs: ' + keyWhy;
					}
				}
			}
		}
		for (key in other) {
			if (has(other, key) && !has(value, key)) { return 'second argument has key "' + key + '"; first does not'; }
		}
		return '';
	}

	return false;
};

},{"./getCollectionsForEach":24,"./getSymbolIterator":25,"has":29,"is-arrow-function":30,"is-boolean-object":31,"is-callable":32,"is-date-object":33,"is-generator-function":34,"is-number-object":35,"is-regex":39,"is-string":36,"is-symbol":37}],39:[function(require,module,exports){
'use strict';

var regexExec = RegExp.prototype.exec;
var tryRegexExec = function tryRegexExec(value) {
	try {
		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isRegex(value) {
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
};

},{}],40:[function(require,module,exports){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var booleanValueOf = Boolean.prototype.valueOf;

module.exports = function inspect_ (obj, opts, depth, seen) {
    if (!opts) opts = {};
    
    var maxDepth = opts.depth === undefined ? 5 : opts.depth;
    if (depth === undefined) depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && obj && typeof obj === 'object') {
        return '[Object]';
    }
    
    if (seen === undefined) seen = [];
    else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }
    
    function inspect (value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    
    if (typeof obj === 'string') {
        return inspectString(obj);
    }
    else if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    else if (obj === null) {
        return 'null';
    }
    else if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? 'Object(' + symString + ')' : symString;
    }
    else if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '="' + quote(attrs[i].value) + '"';
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    else if (isArray(obj)) {
        if (obj.length === 0) return '[]';
        var xs = Array(obj.length);
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    else if (isError(obj)) {
        var parts = [];
        for (var key in obj) {
            if (!has(obj, key)) continue;
            
            if (/[^\w$]/.test(key)) {
                parts.push(inspect(key) + ': ' + inspect(obj[key]));
            }
            else {
                parts.push(key + ': ' + inspect(obj[key]));
            }
        }
        if (parts.length === 0) return '[' + obj + ']';
        return '{ [' + obj + '] ' + parts.join(', ') + ' }';
    }
    else if (typeof obj === 'object' && typeof obj.inspect === 'function') {
        return obj.inspect();
    }
    else if (isMap(obj)) {
        var parts = [];
        mapForEach.call(obj, function (value, key) {
            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return 'Map (' + mapSize.call(obj) + ') {' + parts.join(', ') + '}';
    }
    else if (isSet(obj)) {
        var parts = [];
        setForEach.call(obj, function (value ) {
            parts.push(inspect(value, obj));
        });
        return 'Set (' + setSize.call(obj) + ') {' + parts.join(', ') + '}';
    }
    else if (typeof obj !== 'object') {
        return String(obj);
    }
    else if (isNumber(obj)) {
        return 'Object(' + Number(obj) + ')';
    }
    else if (isBoolean(obj)) {
        return 'Object(' + booleanValueOf.call(obj) + ')';
    }
    else if (isString(obj)) {
        return 'Object(' + inspect(String(obj)) + ')';
    }
    else if (!isDate(obj) && !isRegExp(obj)) {
        var xs = [], keys = [];
        for (var key in obj) {
            if (has(obj, key)) keys.push(key);
        }
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (/[^\w$]/.test(key)) {
                xs.push(inspect(key) + ': ' + inspect(obj[key], obj));
            }
            else xs.push(key + ': ' + inspect(obj[key], obj));
        }
        if (xs.length === 0) return '{}';
        return '{ ' + xs.join(', ') + ' }';
    }
    else return String(obj);
};

function quote (s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray (obj) { return toStr(obj) === '[object Array]' }
function isDate (obj) { return toStr(obj) === '[object Date]' }
function isRegExp (obj) { return toStr(obj) === '[object RegExp]' }
function isError (obj) { return toStr(obj) === '[object Error]' }
function isSymbol (obj) { return toStr(obj) === '[object Symbol]' }
function isString (obj) { return toStr(obj) === '[object String]' }
function isNumber (obj) { return toStr(obj) === '[object Number]' }
function isBoolean (obj) { return toStr(obj) === '[object Boolean]' }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has (obj, key) {
    return hasOwn.call(obj, key);
}

function toStr (obj) {
    return Object.prototype.toString.call(obj);
}

function nameOf (f) {
    if (f.name) return f.name;
    var m = f.toString().match(/^function\s*([\w$]+)/);
    if (m) return m[1];
}

function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
}

function isMap (x) {
    if (!mapSize) {
        return false;
    }
    try {
        mapSize.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet (x) {
    if (!setSize) {
        return false;
    }
    try {
        setSize.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isElement (x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string'
        && typeof x.getAttribute === 'function'
    ;
}

function inspectString (str) {
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return "'" + s + "'";
    
    function lowbyte (c) {
        var n = c.charCodeAt(0);
        var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
        if (x) return '\\' + x;
        return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
    }
}

},{}],41:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = applyMiddleware;

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":44}],42:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports["default"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
},{}],43:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports["default"] = combineReducers;

var _createStore = require('./createStore');

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key);
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
      if (warningMessage) {
        (0, _warning2["default"])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
}).call(this,require('_process'))

},{"./createStore":45,"./utils/warning":47,"_process":16,"lodash/isPlainObject":51}],44:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function () {
    if (funcs.length === 0) {
      return arguments.length <= 0 ? undefined : arguments[0];
    }

    var last = funcs[funcs.length - 1];
    var rest = funcs.slice(0, -1);

    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}
},{}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports["default"] = createStore;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [initialState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, initialState, enhancer) {
  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
    enhancer = initialState;
    initialState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, initialState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = initialState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  };
}
},{"lodash/isPlainObject":51}],46:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = require('./bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2["default"];
exports.combineReducers = _combineReducers2["default"];
exports.bindActionCreators = _bindActionCreators2["default"];
exports.applyMiddleware = _applyMiddleware2["default"];
exports.compose = _compose2["default"];
}).call(this,require('_process'))

},{"./applyMiddleware":41,"./bindActionCreators":42,"./combineReducers":43,"./compose":44,"./createStore":45,"./utils/warning":47,"_process":16}],47:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
},{}],48:[function(require,module,exports){
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetPrototype = Object.getPrototypeOf;

/**
 * Gets the `[[Prototype]]` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {null|Object} Returns the `[[Prototype]]`.
 */
function getPrototype(value) {
  return nativeGetPrototype(Object(value));
}

module.exports = getPrototype;

},{}],49:[function(require,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

module.exports = isHostObject;

},{}],50:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],51:[function(require,module,exports){
var getPrototype = require('./_getPrototype'),
    isHostObject = require('./_isHostObject'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object,
 *  else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;

},{"./_getPrototype":48,"./_isHostObject":49,"./isObjectLike":50}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL2luZGV4LmpzIiwiZG9jcy9saWJFUzIwMTUvcmVkdXhBcHAuanMiLCJkb2NzL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIiwiaW5kZXguanMiLCJsaWJFUzIwMTUvYmFzZUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvY2xhc3NFbGVtZW50LmpzIiwibGliRVMyMDE1L2NvbXBvbmVudEVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZGlzcGxheUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZWxlbWVudC5qcyIsImxpYkVTMjAxNS9mdW5jdGlvbkVsZW1lbnQuanMiLCJsaWJFUzIwMTUvcmVhY3QuanMiLCJsaWJFUzIwMTUvcmVhY3RDbGFzcy5qcyIsImxpYkVTMjAxNS9yZWFjdENvbXBvbmVudC5qcyIsImxpYkVTMjAxNS9yZWFjdERPTS5qcyIsImxpYkVTMjAxNS90ZXh0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvZGVlcC1mcmVlemUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L2xpYi9FeHBlY3RhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL1NweVV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvVGVzdFV0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvYXNzZXJ0LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvZXh0ZW5kLmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9nZXRDb2xsZWN0aW9uc0ZvckVhY2guanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9nZXRTeW1ib2xJdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2hhcy9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9oYXMvbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaGFzL3NyYy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1hcnJvdy1mdW5jdGlvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1ib29sZWFuLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1jYWxsYWJsZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1kYXRlLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1nZW5lcmF0b3ItZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtbnVtYmVyLW9iamVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9pcy1zdHJpbmcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtc3ltYm9sL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvd2h5LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtcmVnZXgvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9vYmplY3QtaW5zcGVjdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvYXBwbHlNaWRkbGV3YXJlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9iaW5kQWN0aW9uQ3JlYXRvcnMuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvY29tcG9zZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvY3JlYXRlU3RvcmUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi91dGlscy93YXJuaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFByb3RvdHlwZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0hvc3RPYmplY3QuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7Ozs7Ozs7Ozs7OztBQUVBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBUjtJ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QUFqQjs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vbGliL3ZhbmlsbGFBcHAnKSxcbiAgUmVkdXhBcHA6IHJlcXVpcmUoJy4vbGliL3JlZHV4QXBwJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4JyksXG4gICAgZXhwZWN0ICA9IHJlcXVpcmUoJ2V4cGVjdCcpLFxuICAgIGRlZXBGcmVlemUgPSByZXF1aXJlKCdkZWVwLWZyZWV6ZScpO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxuICAgICAgPC91bD5cbiAgICApO1xuXG4gICAgY29uc3QgTGluayA9ICh7XG4gICAgICBhY3RpdmUsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9KSA9PiB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICAgIGNvbnN0IEFkZFRvZG8gPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgaW5wdXQ7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRm9vdGVyID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgU2hvdzpcbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCcgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3Qgc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxGb290ZXIgc3RvcmU9e3N0b3JlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXg7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9kb0FwcCBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9IC8+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG5cbi8vIGNvbnN0IGFkZENvdW50ZXIgPSAobGlzdCkgPT4ge1xuLy8gICBsaXN0ID0gWy4uLmxpc3QsIDBdO1xuLy9cbi8vICAgcmV0dXJuIGxpc3Q7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHJlbW92ZUNvdW50ZXIgPSAobGlzdCwgaW5kZXgpID0+IHtcbi8vICAgbGlzdCA9IFtcbi8vICAgICAuLi5saXN0LnNsaWNlKDAsIGluZGV4KSxcbi8vICAgICAuLi5saXN0LnNsaWNlKGluZGV4ICsgMSlcbi8vICAgXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKGxpc3QsIGluZGV4KSA9PiB7XG4vLyAgIGxpc3QgPSBbXG4vLyAgICAgLi4ubGlzdC5zbGljZSgwLCBpbmRleCksXG4vLyAgICAgbGlzdFtpbmRleF0gKyAxLFxuLy8gICAgIC4uLmxpc3Quc2xpY2UoaW5kZXggKyAxKVxuLy8gICBdO1xuLy9cbi8vICAgcmV0dXJuIGxpc3Q7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RBZGRDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gW107XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswXTtcbi8vXG4vLyAgIGRlZXBGcmVlemUobGlzdEJlZm9yZSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgYWRkQ291bnRlcihsaXN0QmVmb3JlKVxuLy8gICApLnRvRXF1YWwobGlzdEFmdGVyKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgdGVzdFJlbW92ZUNvdW50ZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGxpc3RCZWZvcmUgPSBbMCwgMTAsIDIwXTtcbi8vICAgY29uc3QgbGlzdEFmdGVyID0gWzAsIDIwXTtcbi8vXG4vLyAgIGRlZXBGcmVlemUobGlzdEJlZm9yZSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgcmVtb3ZlQ291bnRlcihsaXN0QmVmb3JlLCAxKVxuLy8gICApLnRvRXF1YWwobGlzdEFmdGVyKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgdGVzdEluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGxpc3RCZWZvcmUgPSBbMCwgMTAsIDIwXTtcbi8vICAgY29uc3QgbGlzdEFmdGVyID0gWzAsIDExLCAyMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIGluY3JlbWVudENvdW50ZXIobGlzdEJlZm9yZSwgMSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIHRlc3RBZGRDb3VudGVyKCk7XG4vLyB0ZXN0UmVtb3ZlQ291bnRlcigpO1xuLy8gdGVzdEluY3JlbWVudENvdW50ZXIoKTtcbi8vXG4vLyBjb25zb2xlLmxvZygnQWxsIHRlc3RzIHBhc3NlZC4nKVxuXG4vLyBzdGF0aWMgcnVuKCkge1xuLy8gICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuLy9cbi8vICAgY29uc3QgY291bnRlciA9IChzdGF0ZSA9IDAsIGFjdGlvbikgPT4ge1xuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4vLyAgICAgICBjYXNlICdERUNSRU1FTlQnOlxuLy8gICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vXG4vLyAgIGNvbnN0IENvdW50ZXIgPSAoeyB2YWx1ZSwgb25JbmNyZW1lbnQsIG9uRGVjcmVtZW50IH0pID0+IChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxPnt2YWx1ZX08L2gxPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkluY3JlbWVudH0+KzwvYnV0dG9uPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlY3JlbWVudH0+LTwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy9cbi8vICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gcmVkdXg7XG4vLyAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlcik7XG4vL1xuLy8gICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4vLyAgICAgUmVhY3RET00ucmVuZGVyKFxuLy8gICAgICAgPENvdW50ZXJcbi8vICAgICAgICAgdmFsdWU9e3N0b3JlLmdldFN0YXRlKCl9XG4vLyAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XG4vLyAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuLy8gICAgICAgICAgICAgdHlwZTogJ0lOQ1JFTUVOVCdcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgICB9fVxuLy8gICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4ge1xuLy8gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdERUNSRU1FTlQnXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgfX1cbi8vICAgICAgIC8+LFxuLy8gICAgICAgcm9vdERPTUVsZW1lbnRcbi8vICAgICApO1xuLy8gICB9O1xuLy9cbi8vICAgc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XG4vL1xuLy8gICByZW5kZXIoKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMCwgeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ0lOQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDIpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigyLCB7IHR5cGU6ICdERUNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgxKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMCk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ1NPTUVUSElOR19FTFNFJ30gKVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKHVuZGVmaW5lZCwge30pXG4vLyAgICkudG9FcXVhbCgwKTtcbi8vXG4vLyAgIGNvbnNvbGUubG9nKCdUZXN0cyBwYXNzZWQhJylcbi8vIH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFZhbmlsbGFBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH07XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgICB9LCAxMDAwKTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWYW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgUmVhY3Q6IHJlcXVpcmUoJy4vbGliL3JlYWN0JyksXG4gIFJlYWN0RE9NOiByZXF1aXJlKCcuL2xpYi9yZWFjdERPTScpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50RWxlbWVudCkge1xuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKG9sZEVsZW1lbnQpIHtcbiAgICBvbGRFbGVtZW50LmFwcGVuZEFmdGVyKHRoaXMpO1xuXG4gICAgb2xkRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChkb21FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKGVsZW1lbnQpIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHRoaXMuZG9tRWxlbWVudC5uZXh0U2libGluZyk7XG4gIH1cblxuICByZW1vdmUoKSB7IHRoaXMuZG9tRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7IH1cblxuICBlbXB0eSgpIHsgd2hpbGUgKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCk7IH0gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJhc2VFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBDbGFzc0VsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpLFxuICAgICAgICBzdGF0ZSA9IHJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlKCk7IC8vL1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24odGhpcy5pbnN0YW5jZSwge1xuICAgICAgZGlzcGxheU5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgc3RhdGU6IHN0YXRlXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih0aGlzLmluc3RhbmNlLCB7XG4gICAgICBzdGF0ZTogc3RhdGVcbiAgICB9KTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNlRWxlbWVudCA9IHJlcXVpcmUoJy4vYmFzZUVsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnRPckRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHZhciBkb21FbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBkb21FbGVtZW50T3JEaXNwbGF5TmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IGRvbUVsZW1lbnRPckRpc3BsYXlOYW1lOyAgLy8vXG5cbiAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRpc3BsYXlOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRPckRpc3BsYXlOYW1lOyAvLy9cbiAgICB9XG4gICAgXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmFkZFByb3BlcnRpZXNUb0Jhc2VFbGVtZW50KHByb3BlcnRpZXMpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQodGhpcyk7ICAvLy9cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG4gIFxuICBhZGRQcm9wZXJ0aWVzVG9CYXNlRWxlbWVudChwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLCAvLy9cbiAgICAgICAgICAgIHJlZiA9IGRvbUVsZW1lbnQ7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2socmVmKVxuICAgICAgfSBlbHNlIGlmIChiZWdpbnNXaXRoKHByb3BlcnR5TmFtZSwgJ29uJykpIHtcbiAgICAgICAgdmFyIG9uZXZlbnQgPSBsb3dlcmNhc2UocHJvcGVydHlOYW1lKSwgIC8vL1xuICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7ICAvLy9cblxuICAgICAgICBkb21FbGVtZW50W29uZXZlbnRdID0gaGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7IC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7IC8vL1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHlWYWx1ZSk7IC8vL1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHlWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgZG9tRWxlbWVudFthdHRyaWJ1dGVOYW1lXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8vXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXTtcbiAgICBcbiAgICByZXR1cm4gbmV3IERpc3BsYXlFbGVtZW50KGRvbUVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgcmV0dXJuICdjbGFzcyc7XG5cbiAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgIHJldHVybiAnZm9yJztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7ICAvLy9cbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGJlZ2luc1dpdGgoc3RyaW5nLCBiZWdpbm5pbmdTdHJpbmcpIHtcbiAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14nICsgYmVnaW5uaW5nU3RyaW5nKSxcbiAgICAgIG1hdGNoZXMgPSBzdHJpbmcubWF0Y2gocmVnRXhwKTtcblxuICByZXR1cm4gISFtYXRjaGVzOyAvLy9cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7Y2hpbGRyZW46IGNoaWxkcmVufSksXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmluc3RhbmNlID0gT2JqZWN0LmFzc2lnbih7fSwge3Byb3BzOiBwcm9wc30sIHtmb3JjZVVwZGF0ZTogZm9yY2VVcGRhdGV9KTtcblxuICAgIHRoaXMuZWxlbWVudCA9IHVuZGVmaW5lZDsgIC8vL1xuICB9XG4gIFxuICBtb3VudChwYXJlbnRFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Lm1vdW50KHBhcmVudEVsZW1lbnQpO1xuICAgIFxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVwZGF0ZShvbGRFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LnVwZGF0ZShvbGRFbGVtZW50KTtcbiAgfVxuICBcbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG4gICAgXG4gICAgdGhpcy5lbGVtZW50LnVubW91bnQoKTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBvbGRFbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICAgIHRoaXMudXBkYXRlKG9sZEVsZW1lbnQpXG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwZW5kQWZ0ZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRBZnRlcihlbGVtZW50KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgICBcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgdmFyIF9yZWYgPSB0aGlzLmluc3RhbmNlLnByb3BzOyAvLy8vXG5cbiAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLnJlYWN0RnVuY3Rpb24oX3JlZik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbkVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIEJhc2VFbGVtZW50ID0gcmVxdWlyZSgnLi9iYXNlRWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vY2xhc3NFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgRnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9mdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9jb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVhY3RDbGFzcyA9IFJlYWN0Q2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmIChmaXJzdEFyZ3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgIGVsZW1lbnQ7XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgdmFyIHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBlbGVtZW50ID0gbmV3IENvbXBvbmVudEVsZW1lbnQocmVhY3RDb21wb25lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdENsYXNzKSB7XG4gICAgICB2YXIgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gbmV3IENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgRnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgdmFyIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gIH1cblxuICB2YXIgY2hpbGRyZW4gPSByZW1haW5pbmdBcmd1bWVudHMubWFwKGZ1bmN0aW9uKHJlbWFpbmluZ0FyZ3VtZW50KSB7XG4gICAgdmFyIGNoaWxkO1xuXG4gICAgaWYgKHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICB8fCByZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEJhc2VFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGpzeFRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IGpzeFRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXREaXNwbGF5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVuZGVyID0gcHJvcGVydGllc1sncmVuZGVyJ10gfHwgZGVmYXVsdFJlbmRlcixcbiAgICAgICAgZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzWydkaXNwbGF5TmFtZSddIHx8IGRlZmF1bHREaXNwbGF5TmFtZSxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcHJvcGVydGllc1snZ2V0SW5pdGlhbFN0YXRlJ10gfHwgZGVmYXVsdEdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBwcm9wZXJ0aWVzWydjb21wb25lbnREaWRNb3VudCddIHx8IGRlZmF1bHRDb21wb25lbnREaWRNb3VudCxcbiAgICAgICAgcmVhY3RDbGFzcyA9IG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpO1xuICAgIFxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcblxuZnVuY3Rpb24gZGVmYXVsdFJlbmRlcigpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLCAgLy8vXG4gICAgICBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIC8vL1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICBkZWxldGUgcHJvcGVydGllcy5jaGlsZHJlbjsgLy8vXG5cbiAgdmFyIGpzeEVsZW1lbnQgPSBuZXcgSlNYRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICByZXR1cm4ganN4RWxlbWVudDtcbn1cblxuY29uc3QgZGVmYXVsdERpc3BsYXlOYW1lID0gdW5kZWZpbmVkOyAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIGluaXRpYWxTdGF0ZSA9IHt9O1xuXG4gIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSlNYRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihqc3hFbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgdmFyIHBhcmVudEpTWEVsZW1lbnQgPSBKU1hEaXNwbGF5RWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KTtcblxuICAgIHBhcmVudEpTWEVsZW1lbnQuZW1wdHkoKTtcblxuICAgIGpzeEVsZW1lbnQubW91bnQocGFyZW50SlNYRWxlbWVudCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBCYXNlRWxlbWVudCA9IHJlcXVpcmUoJy4vYmFzZUVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBCYXNlRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWVwRnJlZXplIChvKSB7XG4gIE9iamVjdC5mcmVlemUobyk7XG5cbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIGlmIChvLmhhc093blByb3BlcnR5KHByb3ApXG4gICAgJiYgb1twcm9wXSAhPT0gbnVsbFxuICAgICYmICh0eXBlb2Ygb1twcm9wXSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICYmICFPYmplY3QuaXNGcm96ZW4ob1twcm9wXSkpIHtcbiAgICAgIGRlZXBGcmVlemUob1twcm9wXSk7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBvO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9pc0VxdWFsID0gcmVxdWlyZSgnaXMtZXF1YWwnKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXF1YWwpO1xuXG52YXIgX2lzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG52YXIgX2lzUmVnZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZWdleCk7XG5cbnZhciBfYXNzZXJ0ID0gcmVxdWlyZSgnLi9hc3NlcnQnKTtcblxudmFyIF9hc3NlcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0KTtcblxudmFyIF9TcHlVdGlscyA9IHJlcXVpcmUoJy4vU3B5VXRpbHMnKTtcblxudmFyIF9UZXN0VXRpbHMgPSByZXF1aXJlKCcuL1Rlc3RVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqIEFuIEV4cGVjdGF0aW9uIGlzIGEgd3JhcHBlciBhcm91bmQgYW4gYXNzZXJ0aW9uIHRoYXQgYWxsb3dzIGl0IHRvIGJlIHdyaXR0ZW5cbiAqIGluIGEgbW9yZSBuYXR1cmFsIHN0eWxlLCB3aXRob3V0IHRoZSBuZWVkIHRvIHJlbWVtYmVyIHRoZSBvcmRlciBvZiBhcmd1bWVudHMuXG4gKiBUaGlzIGhlbHBzIHByZXZlbnQgeW91IGZyb20gbWFraW5nIG1pc3Rha2VzIHdoZW4gd3JpdGluZyB0ZXN0cy5cbiAqL1xuXG52YXIgRXhwZWN0YXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV4cGVjdGF0aW9uKGFjdHVhbCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBlY3RhdGlvbik7XG5cbiAgICB0aGlzLmFjdHVhbCA9IGFjdHVhbDtcblxuICAgIGlmICgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKShhY3R1YWwpKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICAgICAgdGhpcy5hcmdzID0gW107XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEV4cGVjdGF0aW9uLCBbe1xuICAgIGtleTogJ3RvRXhpc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0V4aXN0KG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gZXhpc3QnLCB0aGlzLmFjdHVhbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90RXhpc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdEV4aXN0KG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghdGhpcy5hY3R1YWwsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG5vdCBleGlzdCcsIHRoaXMuYWN0dWFsKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCA9PT0gdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RCZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90QmUodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCAhPT0gdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG5vdCBiZSAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvRXF1YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0VxdWFsKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9pc0VxdWFsMi5kZWZhdWx0KSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBlcXVhbCAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIGNvbnN1bWVkIGJ5IE1vY2hhIHRvIHByb2R1Y2UgYSBkaWZmIG91dHB1dC5cbiAgICAgICAgZS5zaG93RGlmZiA9IHRydWU7XG4gICAgICAgIGUuYWN0dWFsID0gdGhpcy5hY3R1YWw7XG4gICAgICAgIGUuZXhwZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RFcXVhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90RXF1YWwodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghKDAsIF9pc0VxdWFsMi5kZWZhdWx0KSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBub3QgZXF1YWwgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1Rocm93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9UaHJvdyh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHRoaXMuYWN0dWFsKSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvVGhyb3coKSBtdXN0IGJlIGEgZnVuY3Rpb24sICVzIHdhcyBnaXZlbicsIHRoaXMuYWN0dWFsKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmZ1bmN0aW9uVGhyb3dzKSh0aGlzLmFjdHVhbCwgdGhpcy5jb250ZXh0LCB0aGlzLmFyZ3MsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gdGhyb3cgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUgfHwgJ2FuIGVycm9yJyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90VGhyb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdFRocm93KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodGhpcy5hY3R1YWwpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9Ob3RUaHJvdygpIG11c3QgYmUgYSBmdW5jdGlvbiwgJXMgd2FzIGdpdmVuJywgdGhpcy5hY3R1YWwpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoISgwLCBfVGVzdFV0aWxzLmZ1bmN0aW9uVGhyb3dzKSh0aGlzLmFjdHVhbCwgdGhpcy5jb250ZXh0LCB0aGlzLmFyZ3MsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbm90IHRocm93ICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlIHx8ICdhbiBlcnJvcicpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlQScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmVBKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvQmVBKHZhbHVlKSBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmcnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzQSkodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgYSAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90QmVBJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RCZUEodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9Ob3RCZUEodmFsdWUpIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZycpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoISgwLCBfVGVzdFV0aWxzLmlzQSkodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgYSAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTWF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b01hdGNoKHBhdHRlcm4sIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdzdHJpbmcnLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9NYXRjaCgpIG11c3QgYmUgYSBzdHJpbmcnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfaXNSZWdleDIuZGVmYXVsdCkocGF0dGVybiksICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvTWF0Y2godmFsdWUpIG11c3QgYmUgYSBSZWdFeHAnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHBhdHRlcm4udGVzdCh0aGlzLmFjdHVhbCksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG1hdGNoICVzJywgdGhpcy5hY3R1YWwsIHBhdHRlcm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdE1hdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RNYXRjaChwYXR0ZXJuLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnc3RyaW5nJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvTm90TWF0Y2goKSBtdXN0IGJlIGEgc3RyaW5nJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX2lzUmVnZXgyLmRlZmF1bHQpKHBhdHRlcm4pLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b05vdE1hdGNoKHZhbHVlKSBtdXN0IGJlIGEgUmVnRXhwJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghcGF0dGVybi50ZXN0KHRoaXMuYWN0dWFsKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbm90IG1hdGNoICVzJywgdGhpcy5hY3R1YWwsIHBhdHRlcm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlTGVzc1RoYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlTGVzc1RoYW4odmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdudW1iZXInLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9CZUxlc3NUaGFuKCkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9CZUxlc3NUaGFuKHZhbHVlKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCA8IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBsZXNzIHRoYW4gJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlTGVzc1RoYW5PckVxdWFsVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlTGVzc1RoYW5PckVxdWFsVG8odmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdudW1iZXInLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9CZUxlc3NUaGFuT3JFcXVhbFRvKCkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9CZUxlc3NUaGFuT3JFcXVhbFRvKHZhbHVlKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCA8PSB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZUdyZWF0ZXJUaGFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZUdyZWF0ZXJUaGFuKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnbnVtYmVyJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvQmVHcmVhdGVyVGhhbigpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvQmVHcmVhdGVyVGhhbih2YWx1ZSkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgPiB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgZ3JlYXRlciB0aGFuICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnbnVtYmVyJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbygpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbyh2YWx1ZSkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgPj0gdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvSW5jbHVkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSW5jbHVkZSh2YWx1ZSwgY29tcGFyZVZhbHVlcywgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzQXJyYXkpKHRoaXMuYWN0dWFsKSB8fCAoMCwgX1Rlc3RVdGlscy5pc09iamVjdCkodGhpcy5hY3R1YWwpIHx8IHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ3N0cmluZycsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0luY2x1ZGUoKSBtdXN0IGJlIGFuIGFycmF5LCBvYmplY3QsIG9yIGEgc3RyaW5nJyk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcGFyZVZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWVzc2FnZSA9IGNvbXBhcmVWYWx1ZXM7XG4gICAgICAgIGNvbXBhcmVWYWx1ZXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gaW5jbHVkZSAlcyc7XG5cbiAgICAgIGlmICgoMCwgX1Rlc3RVdGlscy5pc0FycmF5KSh0aGlzLmFjdHVhbCkpIHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmFycmF5Q29udGFpbnMpKHRoaXMuYWN0dWFsLCB2YWx1ZSwgY29tcGFyZVZhbHVlcyksIG1lc3NhZ2UsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCgwLCBfVGVzdFV0aWxzLmlzT2JqZWN0KSh0aGlzLmFjdHVhbCkpIHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLm9iamVjdENvbnRhaW5zKSh0aGlzLmFjdHVhbCwgdmFsdWUsIGNvbXBhcmVWYWx1ZXMpLCBtZXNzYWdlLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLnN0cmluZ0NvbnRhaW5zKSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0V4Y2x1ZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0V4Y2x1ZGUodmFsdWUsIGNvbXBhcmVWYWx1ZXMsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0FycmF5KSh0aGlzLmFjdHVhbCkgfHwgdHlwZW9mIHRoaXMuYWN0dWFsID09PSAnc3RyaW5nJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvRXhjbHVkZSgpIG11c3QgYmUgYW4gYXJyYXkgb3IgYSBzdHJpbmcnKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb21wYXJlVmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXNzYWdlID0gY29tcGFyZVZhbHVlcztcbiAgICAgICAgY29tcGFyZVZhbHVlcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBleGNsdWRlICVzJztcblxuICAgICAgaWYgKCgwLCBfVGVzdFV0aWxzLmlzQXJyYXkpKHRoaXMuYWN0dWFsKSkge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoISgwLCBfVGVzdFV0aWxzLmFycmF5Q29udGFpbnMpKHRoaXMuYWN0dWFsLCB2YWx1ZSwgY29tcGFyZVZhbHVlcyksIG1lc3NhZ2UsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoISgwLCBfVGVzdFV0aWxzLnN0cmluZ0NvbnRhaW5zKSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0hhdmVCZWVuQ2FsbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9IYXZlQmVlbkNhbGxlZChtZXNzYWdlKSB7XG4gICAgICB2YXIgc3B5ID0gdGhpcy5hY3R1YWw7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1NweVV0aWxzLmlzU3B5KShzcHkpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9IYXZlQmVlbkNhbGxlZCgpIG11c3QgYmUgYSBzcHknKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHNweS5jYWxscy5sZW5ndGggPiAwLCBtZXNzYWdlIHx8ICdzcHkgd2FzIG5vdCBjYWxsZWQnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9IYXZlQmVlbkNhbGxlZFdpdGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0hhdmVCZWVuQ2FsbGVkV2l0aCgpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBleHBlY3RlZEFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgZXhwZWN0ZWRBcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3B5ID0gdGhpcy5hY3R1YWw7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1NweVV0aWxzLmlzU3B5KShzcHkpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9IYXZlQmVlbkNhbGxlZFdpdGgoKSBtdXN0IGJlIGEgc3B5Jyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KShzcHkuY2FsbHMuc29tZShmdW5jdGlvbiAoY2FsbCkge1xuICAgICAgICByZXR1cm4gKDAsIF9pc0VxdWFsMi5kZWZhdWx0KShjYWxsLmFyZ3VtZW50cywgZXhwZWN0ZWRBcmdzKTtcbiAgICAgIH0pLCAnc3B5IHdhcyBuZXZlciBjYWxsZWQgd2l0aCAlcycsIGV4cGVjdGVkQXJncyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90SGF2ZUJlZW5DYWxsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdEhhdmVCZWVuQ2FsbGVkKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBzcHkgPSB0aGlzLmFjdHVhbDtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfU3B5VXRpbHMuaXNTcHkpKHNweSksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b05vdEhhdmVCZWVuQ2FsbGVkKCkgbXVzdCBiZSBhIHNweScpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoc3B5LmNhbGxzLmxlbmd0aCA9PT0gMCwgbWVzc2FnZSB8fCAnc3B5IHdhcyBub3Qgc3VwcG9zZWQgdG8gYmUgY2FsbGVkJyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpdGhDb250ZXh0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aENvbnRleHQoY29udGV4dCkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHRoaXMuYWN0dWFsKSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLndpdGhDb250ZXh0KCkgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dpdGhBcmdzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2l0aEFyZ3MoKSB7XG4gICAgICB2YXIgX2FyZ3M7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh0aGlzLmFjdHVhbCksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS53aXRoQXJncygpIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkgdGhpcy5hcmdzID0gKF9hcmdzID0gdGhpcy5hcmdzKS5jb25jYXQuYXBwbHkoX2FyZ3MsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFeHBlY3RhdGlvbjtcbn0oKTtcblxudmFyIGFsaWFzZXMgPSB7XG4gIHRvQmVBbjogJ3RvQmVBJyxcbiAgdG9Ob3RCZUFuOiAndG9Ob3RCZUEnLFxuICB0b0JlVHJ1dGh5OiAndG9FeGlzdCcsXG4gIHRvQmVGYWxzeTogJ3RvTm90RXhpc3QnLFxuICB0b0JlRmV3ZXJUaGFuOiAndG9CZUxlc3NUaGFuJyxcbiAgdG9CZU1vcmVUaGFuOiAndG9CZUdyZWF0ZXJUaGFuJyxcbiAgdG9Db250YWluOiAndG9JbmNsdWRlJyxcbiAgdG9Ob3RDb250YWluOiAndG9FeGNsdWRlJ1xufTtcblxuZm9yICh2YXIgYWxpYXMgaW4gYWxpYXNlcykge1xuICBpZiAoYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShhbGlhcykpIEV4cGVjdGF0aW9uLnByb3RvdHlwZVthbGlhc10gPSBFeHBlY3RhdGlvbi5wcm90b3R5cGVbYWxpYXNlc1thbGlhc11dO1xufWV4cG9ydHMuZGVmYXVsdCA9IEV4cGVjdGF0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVzdG9yZVNwaWVzID0gZXhwb3J0cy5pc1NweSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuY3JlYXRlU3B5ID0gY3JlYXRlU3B5O1xuZXhwb3J0cy5zcHlPbiA9IHNweU9uO1xuXG52YXIgX2Fzc2VydCA9IHJlcXVpcmUoJy4vYXNzZXJ0Jyk7XG5cbnZhciBfYXNzZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydCk7XG5cbnZhciBfVGVzdFV0aWxzID0gcmVxdWlyZSgnLi9UZXN0VXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zICovXG5cblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBpc1NweSA9IGV4cG9ydHMuaXNTcHkgPSBmdW5jdGlvbiBpc1NweShvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBvYmplY3QuX19pc1NweSA9PT0gdHJ1ZTtcbn07XG5cbnZhciBzcGllcyA9IFtdO1xuXG52YXIgcmVzdG9yZVNwaWVzID0gZXhwb3J0cy5yZXN0b3JlU3BpZXMgPSBmdW5jdGlvbiByZXN0b3JlU3BpZXMoKSB7XG4gIGZvciAodmFyIGkgPSBzcGllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHNwaWVzW2ldLnJlc3RvcmUoKTtcbiAgfXNwaWVzID0gW107XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTcHkoZm4pIHtcbiAgdmFyIHJlc3RvcmUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBub29wIDogYXJndW1lbnRzWzFdO1xuXG4gIGlmIChmbiA9PSBudWxsKSBmbiA9IG5vb3A7XG5cbiAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKGZuKSwgJ2NyZWF0ZVNweSBuZWVkcyBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIHRhcmdldEZuID0gdm9pZCAwLFxuICAgICAgdGhyb3duVmFsdWUgPSB2b2lkIDAsXG4gICAgICByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICB2YXIgc3B5ID0gZnVuY3Rpb24gc3B5KCkge1xuICAgIHNweS5jYWxscy5wdXNoKHtcbiAgICAgIGNvbnRleHQ6IHRoaXMsXG4gICAgICBhcmd1bWVudHM6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICB9KTtcblxuICAgIGlmICh0YXJnZXRGbikgcmV0dXJuIHRhcmdldEZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodGhyb3duVmFsdWUpIHRocm93IHRocm93blZhbHVlO1xuXG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICB9O1xuXG4gIHNweS5jYWxscyA9IFtdO1xuXG4gIHNweS5hbmRDYWxsID0gZnVuY3Rpb24gKG90aGVyRm4pIHtcbiAgICB0YXJnZXRGbiA9IG90aGVyRm47XG4gICAgcmV0dXJuIHNweTtcbiAgfTtcblxuICBzcHkuYW5kQ2FsbFRocm91Z2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNweS5hbmRDYWxsKGZuKTtcbiAgfTtcblxuICBzcHkuYW5kVGhyb3cgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgdGhyb3duVmFsdWUgPSBvYmplY3Q7XG4gICAgcmV0dXJuIHNweTtcbiAgfTtcblxuICBzcHkuYW5kUmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuVmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gc3B5O1xuICB9O1xuXG4gIHNweS5nZXRMYXN0Q2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3B5LmNhbGxzW3NweS5jYWxscy5sZW5ndGggLSAxXTtcbiAgfTtcblxuICBzcHkucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc3B5LmNhbGxzID0gW107XG4gIH07XG5cbiAgc3B5LnJlc3RvcmUgPSBzcHkuZGVzdHJveSA9IHJlc3RvcmU7XG5cbiAgc3B5Ll9faXNTcHkgPSB0cnVlO1xuXG4gIHNwaWVzLnB1c2goc3B5KTtcblxuICByZXR1cm4gc3B5O1xufVxuXG5mdW5jdGlvbiBzcHlPbihvYmplY3QsIG1ldGhvZE5hbWUpIHtcbiAgdmFyIG9yaWdpbmFsID0gb2JqZWN0W21ldGhvZE5hbWVdO1xuXG4gIGlmICghaXNTcHkob3JpZ2luYWwpKSB7XG4gICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKG9yaWdpbmFsKSwgJ0Nhbm5vdCBzcHlPbiB0aGUgJXMgcHJvcGVydHk7IGl0IGlzIG5vdCBhIGZ1bmN0aW9uJywgbWV0aG9kTmFtZSk7XG5cbiAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjcmVhdGVTcHkob3JpZ2luYWwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iamVjdFttZXRob2ROYW1lXSA9IG9yaWdpbmFsO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdFttZXRob2ROYW1lXTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnN0cmluZ0NvbnRhaW5zID0gZXhwb3J0cy5vYmplY3RDb250YWlucyA9IGV4cG9ydHMuYXJyYXlDb250YWlucyA9IGV4cG9ydHMuZnVuY3Rpb25UaHJvd3MgPSBleHBvcnRzLmlzQSA9IGV4cG9ydHMuaXNPYmplY3QgPSBleHBvcnRzLmlzQXJyYXkgPSBleHBvcnRzLmlzRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2lzRXF1YWwgPSByZXF1aXJlKCdpcy1lcXVhbCcpO1xuXG52YXIgX2lzRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFcXVhbCk7XG5cbnZhciBfaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbnZhciBfaXNSZWdleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1JlZ2V4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICovXG52YXIgaXNGdW5jdGlvbiA9IGV4cG9ydHMuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBhcnJheS5cbiAqL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KG9iamVjdCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmplY3QpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3QuXG4gKi9cbnZhciBpc09iamVjdCA9IGV4cG9ydHMuaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiAhaXNBcnJheShvYmplY3QpICYmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSA9PT0gJ29iamVjdCc7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlb2YgdmFsdWVcbiAqIG9yIGl0cyB0eXBlb2YgaXMgdGhlIGdpdmVuIHZhbHVlLlxuICovXG52YXIgaXNBID0gZXhwb3J0cy5pc0EgPSBmdW5jdGlvbiBpc0Eob2JqZWN0LCB2YWx1ZSkge1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB2YWx1ZTtcblxuICBpZiAodmFsdWUgPT09ICdhcnJheScpIHJldHVybiBBcnJheS5pc0FycmF5KG9iamVjdCk7XG5cbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihvYmplY3QpKSA9PT0gdmFsdWU7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZnVuY3Rpb24gdGhyb3dzIHRoZSBnaXZlbiB2YWx1ZVxuICogd2hlbiBpbnZva2VkLiBUaGUgdmFsdWUgbWF5IGJlOlxuICpcbiAqIC0gdW5kZWZpbmVkLCB0byBtZXJlbHkgYXNzZXJ0IHRoZXJlIHdhcyBhIHRocm93XG4gKiAtIGEgY29uc3RydWN0b3IgZnVuY3Rpb24sIGZvciBjb21wYXJpbmcgdXNpbmcgaW5zdGFuY2VvZlxuICogLSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiwgdG8gY29tcGFyZSB3aXRoIHRoZSBlcnJvciBtZXNzYWdlXG4gKiAtIGEgc3RyaW5nLCB0byBmaW5kIGluIHRoZSBlcnJvciBtZXNzYWdlXG4gKi9cbnZhciBmdW5jdGlvblRocm93cyA9IGV4cG9ydHMuZnVuY3Rpb25UaHJvd3MgPSBmdW5jdGlvbiBmdW5jdGlvblRocm93cyhmbiwgY29udGV4dCwgYXJncywgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBmbi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkgJiYgZXJyb3IgaW5zdGFuY2VvZiB2YWx1ZSkgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UgfHwgZXJyb3I7XG5cbiAgICBpZiAodHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoKDAsIF9pc1JlZ2V4Mi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUudGVzdChlcnJvci5tZXNzYWdlKSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIG1lc3NhZ2UuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gYXJyYXkgY29udGFpbnMgdGhlIHZhbHVlLCBmYWxzZVxuICogb3RoZXJ3aXNlLiBUaGUgY29tcGFyZVZhbHVlcyBmdW5jdGlvbiBtdXN0IHJldHVybiBmYWxzZSB0b1xuICogaW5kaWNhdGUgYSBub24tbWF0Y2guXG4gKi9cbnZhciBhcnJheUNvbnRhaW5zID0gZXhwb3J0cy5hcnJheUNvbnRhaW5zID0gZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnJheSwgdmFsdWUsIGNvbXBhcmVWYWx1ZXMpIHtcbiAgaWYgKGNvbXBhcmVWYWx1ZXMgPT0gbnVsbCkgY29tcGFyZVZhbHVlcyA9IF9pc0VxdWFsMi5kZWZhdWx0O1xuXG4gIHJldHVybiBhcnJheS5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVWYWx1ZXMoaXRlbSwgdmFsdWUpICE9PSBmYWxzZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGNvbnRhaW5zIHRoZSB2YWx1ZSwgZmFsc2VcbiAqIG90aGVyd2lzZS4gVGhlIGNvbXBhcmVWYWx1ZXMgZnVuY3Rpb24gbXVzdCByZXR1cm4gZmFsc2UgdG9cbiAqIGluZGljYXRlIGEgbm9uLW1hdGNoLlxuICovXG52YXIgb2JqZWN0Q29udGFpbnMgPSBleHBvcnRzLm9iamVjdENvbnRhaW5zID0gZnVuY3Rpb24gb2JqZWN0Q29udGFpbnMob2JqZWN0LCB2YWx1ZSwgY29tcGFyZVZhbHVlcykge1xuICBpZiAoY29tcGFyZVZhbHVlcyA9PSBudWxsKSBjb21wYXJlVmFsdWVzID0gX2lzRXF1YWwyLmRlZmF1bHQ7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5ldmVyeShmdW5jdGlvbiAoaykge1xuICAgIGlmIChpc09iamVjdChvYmplY3Rba10pKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q29udGFpbnMob2JqZWN0W2tdLCB2YWx1ZVtrXSwgY29tcGFyZVZhbHVlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVWYWx1ZXMob2JqZWN0W2tdLCB2YWx1ZVtrXSk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHN0cmluZyBjb250YWlucyB0aGUgdmFsdWUsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xudmFyIHN0cmluZ0NvbnRhaW5zID0gZXhwb3J0cy5zdHJpbmdDb250YWlucyA9IGZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0cmluZywgdmFsdWUpIHtcbiAgcmV0dXJuIHN0cmluZy5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG59OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9vYmplY3RJbnNwZWN0ID0gcmVxdWlyZSgnb2JqZWN0LWluc3BlY3QnKTtcblxudmFyIF9vYmplY3RJbnNwZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEluc3BlY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtZXNzYWdlRm9ybWF0KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBleHRyYUFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZXh0cmFBcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChjb25kaXRpb24pIHJldHVybjtcblxuICB2YXIgaW5kZXggPSAwO1xuXG4gIHRocm93IG5ldyBFcnJvcihtZXNzYWdlRm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9vYmplY3RJbnNwZWN0Mi5kZWZhdWx0KShleHRyYUFyZ3NbaW5kZXgrK10pO1xuICB9KSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGFzc2VydDsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfRXhwZWN0YXRpb24gPSByZXF1aXJlKCcuL0V4cGVjdGF0aW9uJyk7XG5cbnZhciBfRXhwZWN0YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXhwZWN0YXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRXh0ZW5zaW9ucyA9IFtdO1xuXG5mdW5jdGlvbiBleHRlbmQoZXh0ZW5zaW9uKSB7XG4gIGlmIChFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA9PT0gLTEpIHtcbiAgICBFeHRlbnNpb25zLnB1c2goZXh0ZW5zaW9uKTtcblxuICAgIGZvciAodmFyIHAgaW4gZXh0ZW5zaW9uKSB7XG4gICAgICBpZiAoZXh0ZW5zaW9uLmhhc093blByb3BlcnR5KHApKSBfRXhwZWN0YXRpb24yLmRlZmF1bHQucHJvdG90eXBlW3BdID0gZXh0ZW5zaW9uW3BdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBleHRlbmQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX0V4cGVjdGF0aW9uID0gcmVxdWlyZSgnLi9FeHBlY3RhdGlvbicpO1xuXG52YXIgX0V4cGVjdGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V4cGVjdGF0aW9uKTtcblxudmFyIF9TcHlVdGlscyA9IHJlcXVpcmUoJy4vU3B5VXRpbHMnKTtcblxudmFyIF9hc3NlcnQgPSByZXF1aXJlKCcuL2Fzc2VydCcpO1xuXG52YXIgX2Fzc2VydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnQpO1xuXG52YXIgX2V4dGVuZCA9IHJlcXVpcmUoJy4vZXh0ZW5kJyk7XG5cbnZhciBfZXh0ZW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGV4cGVjdChhY3R1YWwpIHtcbiAgcmV0dXJuIG5ldyBfRXhwZWN0YXRpb24yLmRlZmF1bHQoYWN0dWFsKTtcbn1cblxuZXhwZWN0LmNyZWF0ZVNweSA9IF9TcHlVdGlscy5jcmVhdGVTcHk7XG5leHBlY3Quc3B5T24gPSBfU3B5VXRpbHMuc3B5T247XG5leHBlY3QuaXNTcHkgPSBfU3B5VXRpbHMuaXNTcHk7XG5leHBlY3QucmVzdG9yZVNwaWVzID0gX1NweVV0aWxzLnJlc3RvcmVTcGllcztcbmV4cGVjdC5hc3NlcnQgPSBfYXNzZXJ0Mi5kZWZhdWx0O1xuZXhwZWN0LmV4dGVuZCA9IF9leHRlbmQyLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwZWN0OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cdHZhciBtYXBGb3JFYWNoID0gKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIE1hcCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHRyeSB7XG5cdFx0XHRNYXAucHJvdG90eXBlLmZvckVhY2guY2FsbCh7fSwgZnVuY3Rpb24gKCkge30pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBNYXAucHJvdG90eXBlLmZvckVhY2g7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9KCkpO1xuXG5cdHZhciBzZXRGb3JFYWNoID0gKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIFNldCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gbnVsbDsgfVxuXHRcdHRyeSB7XG5cdFx0XHRTZXQucHJvdG90eXBlLmZvckVhY2guY2FsbCh7fSwgZnVuY3Rpb24gKCkge30pO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBTZXQucHJvdG90eXBlLmZvckVhY2g7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9KCkpO1xuXG5cdHJldHVybiB7IE1hcDogbWFwRm9yRWFjaCwgU2V0OiBzZXRGb3JFYWNoIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpIHtcblx0dmFyIHN5bWJvbEl0ZXJhdG9yID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBpc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpID8gU3ltYm9sLml0ZXJhdG9yIDogbnVsbDtcblxuXHRpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE1hcC5wcm90b3R5cGUuZW50cmllcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE1hcC5wcm90b3R5cGUpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0XHRcdGlmIChuYW1lICE9PSAnZW50cmllcycgJiYgbmFtZSAhPT0gJ3NpemUnICYmIE1hcC5wcm90b3R5cGVbbmFtZV0gPT09IE1hcC5wcm90b3R5cGUuZW50cmllcykge1xuXHRcdFx0XHRzeW1ib2xJdGVyYXRvciA9IG5hbWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gc3ltYm9sSXRlcmF0b3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2h5Tm90RXF1YWwgPSByZXF1aXJlKCcuL3doeScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG5cdHJldHVybiB3aHlOb3RFcXVhbCh2YWx1ZSwgb3RoZXIpID09PSAnJztcbn07XG4iLCJ2YXIgRVJST1JfTUVTU0FHRSA9ICdGdW5jdGlvbi5wcm90b3R5cGUuYmluZCBjYWxsZWQgb24gaW5jb21wYXRpYmxlICc7XG52YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmNUeXBlID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKHRoYXQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJyB8fCB0b1N0ci5jYWxsKHRhcmdldCkgIT09IGZ1bmNUeXBlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRVJST1JfTUVTU0FHRSArIHRhcmdldCk7XG4gICAgfVxuICAgIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgdmFyIGJvdW5kO1xuICAgIHZhciBiaW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgYm91bmQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKE9iamVjdChyZXN1bHQpID09PSByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoYXQsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYm91bmRMZW5ndGggPSBNYXRoLm1heCgwLCB0YXJnZXQubGVuZ3RoIC0gYXJncy5sZW5ndGgpO1xuICAgIHZhciBib3VuZEFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvdW5kTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYm91bmRBcmdzLnB1c2goJyQnICsgaSk7XG4gICAgfVxuXG4gICAgYm91bmQgPSBGdW5jdGlvbignYmluZGVyJywgJ3JldHVybiBmdW5jdGlvbiAoJyArIGJvdW5kQXJncy5qb2luKCcsJykgKyAnKXsgcmV0dXJuIGJpbmRlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7IH0nKShiaW5kZXIpO1xuXG4gICAgaWYgKHRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7fTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gdGFyZ2V0LnByb3RvdHlwZTtcbiAgICAgICAgYm91bmQucHJvdG90eXBlID0gbmV3IEVtcHR5KCk7XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJvdW5kO1xufTtcbiIsInZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsInZhciBiaW5kID0gcmVxdWlyZSgnZnVuY3Rpb24tYmluZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJpbmQuY2FsbChGdW5jdGlvbi5jYWxsLCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaXNOb25BcnJvd0ZuUmVnZXggPSAvXlxccypmdW5jdGlvbi87XG52YXIgaXNBcnJvd0ZuV2l0aFBhcmVuc1JlZ2V4ID0gL15cXChbXlxcKV0qXFwpICo9Pi87XG52YXIgaXNBcnJvd0ZuV2l0aG91dFBhcmVuc1JlZ2V4ID0gL15bXj1dKj0+LztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fycm93RnVuY3Rpb24oZm4pIHtcblx0aWYgKCFpc0NhbGxhYmxlKGZuKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKGZuKTtcblx0cmV0dXJuIGZuU3RyLmxlbmd0aCA+IDAgJiZcblx0XHQhaXNOb25BcnJvd0ZuUmVnZXgudGVzdChmblN0cikgJiZcblx0XHQoaXNBcnJvd0ZuV2l0aFBhcmVuc1JlZ2V4LnRlc3QoZm5TdHIpIHx8IGlzQXJyb3dGbldpdGhvdXRQYXJlbnNSZWdleC50ZXN0KGZuU3RyKSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYm9vbFRvU3RyID0gQm9vbGVhbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciB0cnlCb29sZWFuT2JqZWN0ID0gZnVuY3Rpb24gdHJ5Qm9vbGVhbk9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGJvb2xUb1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgYm9vbENsYXNzID0gJ1tvYmplY3QgQm9vbGVhbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7IHJldHVybiB0cnVlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlCb29sZWFuT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBib29sQ2xhc3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGNvbnN0cnVjdG9yUmVnZXggPSAvXlxccypjbGFzcyAvO1xudmFyIGlzRVM2Q2xhc3NGbiA9IGZ1bmN0aW9uIGlzRVM2Q2xhc3NGbih2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0dmFyIHNpbmdsZVN0cmlwcGVkID0gZm5TdHIucmVwbGFjZSgvXFwvXFwvLipcXG4vZywgJycpO1xuXHRcdHZhciBtdWx0aVN0cmlwcGVkID0gc2luZ2xlU3RyaXBwZWQucmVwbGFjZSgvXFwvXFwqWy5cXHNcXFNdKlxcKlxcLy9nLCAnJyk7XG5cdFx0dmFyIHNwYWNlU3RyaXBwZWQgPSBtdWx0aVN0cmlwcGVkLnJlcGxhY2UoL1xcbi9tZywgJyAnKS5yZXBsYWNlKC8gezJ9L2csICcgJyk7XG5cdFx0cmV0dXJuIGNvbnN0cnVjdG9yUmVnZXgudGVzdChzcGFjZVN0cmlwcGVkKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTsgLy8gbm90IGEgZnVuY3Rpb25cblx0fVxufTtcblxudmFyIHRyeUZ1bmN0aW9uT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmbkNsYXNzID0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbnZhciBnZW5DbGFzcyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FsbGFibGUodmFsdWUpIHtcblx0aWYgKCF2YWx1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAoaGFzVG9TdHJpbmdUYWcpIHsgcmV0dXJuIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKTsgfVxuXHRpZiAoaXNFUzZDbGFzc0ZuKHZhbHVlKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIHN0ckNsYXNzID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHJldHVybiBzdHJDbGFzcyA9PT0gZm5DbGFzcyB8fCBzdHJDbGFzcyA9PT0gZ2VuQ2xhc3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZ2V0RGF5ID0gRGF0ZS5wcm90b3R5cGUuZ2V0RGF5O1xudmFyIHRyeURhdGVPYmplY3QgPSBmdW5jdGlvbiB0cnlEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Z2V0RGF5LmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGRhdGVDbGFzcyA9ICdbb2JqZWN0IERhdGVdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNEYXRlT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlEYXRlT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBkYXRlQ2xhc3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaXNGblJlZ2V4ID0gL15cXHMqZnVuY3Rpb25cXCovO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24oZm4pIHtcblx0aWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0dmFyIGZuU3RyID0gdG9TdHIuY2FsbChmbik7XG5cdHJldHVybiAoZm5TdHIgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScgfHwgZm5TdHIgPT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpICYmIGlzRm5SZWdleC50ZXN0KGZuVG9TdHIuY2FsbChmbikpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbnVtVG9TdHIgPSBOdW1iZXIucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHRyeU51bWJlck9iamVjdCA9IGZ1bmN0aW9uIHRyeU51bWJlck9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdG51bVRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBudW1DbGFzcyA9ICdbb2JqZWN0IE51bWJlcl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc051bWJlck9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5TnVtYmVyT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBudW1DbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJWYWx1ZSA9IFN0cmluZy5wcm90b3R5cGUudmFsdWVPZjtcbnZhciB0cnlTdHJpbmdPYmplY3QgPSBmdW5jdGlvbiB0cnlTdHJpbmdPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRzdHJWYWx1ZS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgc3RyQ2xhc3MgPSAnW29iamVjdCBTdHJpbmddJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeVN0cmluZ09iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gc3RyQ2xhc3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGhhc1N5bWJvbHMgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2woKSA9PT0gJ3N5bWJvbCc7XG5cbmlmIChoYXNTeW1ib2xzKSB7XG5cdHZhciBzeW1Ub1N0ciA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmc7XG5cdHZhciBzeW1TdHJpbmdSZWdleCA9IC9eU3ltYm9sXFwoLipcXCkkLztcblx0dmFyIGlzU3ltYm9sT2JqZWN0ID0gZnVuY3Rpb24gaXNTeW1ib2xPYmplY3QodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlLnZhbHVlT2YoKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0cmV0dXJuIHN5bVN0cmluZ1JlZ2V4LnRlc3Qoc3ltVG9TdHIuY2FsbCh2YWx1ZSkpO1xuXHR9O1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRpZiAodG9TdHIuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gaXNTeW1ib2xPYmplY3QodmFsdWUpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG5cdFx0Ly8gdGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IFN5bWJvbHMuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgT2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbnZhciB0b1N0ciA9IE9iamVjdFByb3RvdHlwZS50b1N0cmluZztcbnZhciBib29sZWFuVmFsdWUgPSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIGhhcyA9IHJlcXVpcmUoJ2hhcycpO1xudmFyIGlzQXJyb3dGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWFycm93LWZ1bmN0aW9uJyk7XG52YXIgaXNCb29sZWFuID0gcmVxdWlyZSgnaXMtYm9vbGVhbi1vYmplY3QnKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKCdpcy1kYXRlLW9iamVjdCcpO1xudmFyIGlzR2VuZXJhdG9yID0gcmVxdWlyZSgnaXMtZ2VuZXJhdG9yLWZ1bmN0aW9uJyk7XG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKCdpcy1udW1iZXItb2JqZWN0Jyk7XG52YXIgaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdpcy1zdHJpbmcnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCdpcy1jYWxsYWJsZScpO1xuXG52YXIgaXNQcm90byA9IE9iamVjdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZjtcblxudmFyIGZvbyA9IGZ1bmN0aW9uIGZvbygpIHt9O1xudmFyIGZ1bmN0aW9uc0hhdmVOYW1lcyA9IGZvby5uYW1lID09PSAnZm9vJztcblxudmFyIHN5bWJvbFZhbHVlID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyA/IFN5bWJvbC5wcm90b3R5cGUudmFsdWVPZiA6IG51bGw7XG52YXIgc3ltYm9sSXRlcmF0b3IgPSByZXF1aXJlKCcuL2dldFN5bWJvbEl0ZXJhdG9yJykoKTtcblxudmFyIGNvbGxlY3Rpb25zRm9yRWFjaCA9IHJlcXVpcmUoJy4vZ2V0Q29sbGVjdGlvbnNGb3JFYWNoJykoKTtcblxudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuaWYgKCFnZXRQcm90b3R5cGVPZikge1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXHRpZiAodHlwZW9mICd0ZXN0Jy5fX3Byb3RvX18gPT09ICdvYmplY3QnKSB7XG5cdFx0Z2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHRyZXR1cm4gb2JqLl9fcHJvdG9fXztcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0dmFyIGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yLFxuXHRcdFx0XHRvbGRDb25zdHJ1Y3Rvcjtcblx0XHRcdGlmIChoYXMob2JqLCAnY29uc3RydWN0b3InKSkge1xuXHRcdFx0XHRvbGRDb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9yO1xuXHRcdFx0XHRpZiAoIShkZWxldGUgb2JqLmNvbnN0cnVjdG9yKSkgeyAvLyByZXNldCBjb25zdHJ1Y3RvclxuXHRcdFx0XHRcdHJldHVybiBudWxsOyAvLyBjYW4ndCBkZWxldGUgb2JqLmNvbnN0cnVjdG9yLCByZXR1cm4gbnVsbFxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0cnVjdG9yID0gb2JqLmNvbnN0cnVjdG9yOyAvLyBnZXQgcmVhbCBjb25zdHJ1Y3RvclxuXHRcdFx0XHRvYmouY29uc3RydWN0b3IgPSBvbGRDb25zdHJ1Y3RvcjsgLy8gcmVzdG9yZSBjb25zdHJ1Y3RvclxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbnN0cnVjdG9yID8gY29uc3RydWN0b3IucHJvdG90eXBlIDogT2JqZWN0UHJvdG90eXBlOyAvLyBuZWVkZWQgZm9yIElFXG5cdFx0fTtcblx0fVxuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXByb3RvICovXG59XG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcblx0cmV0dXJuIHRvU3RyLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIG5vcm1hbGl6ZUZuV2hpdGVzcGFjZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUZuV2hpdGVzcGFjZShmblN0cikge1xuXHQvLyB0aGlzIGlzIG5lZWRlZCBpbiBJRSA5LCBhdCBsZWFzdCwgd2hpY2ggaGFzIGluY29uc2lzdGVuY2llcyBoZXJlLlxuXHRyZXR1cm4gZm5TdHIucmVwbGFjZSgvXmZ1bmN0aW9uID9cXCgvLCAnZnVuY3Rpb24gKCcpLnJlcGxhY2UoJyl7JywgJykgeycpO1xufTtcblxudmFyIHRyeU1hcFNldEVudHJpZXMgPSBmdW5jdGlvbiB0cnlNYXBTZXRFbnRyaWVzKGNvbGxlY3Rpb24pIHtcblx0dmFyIGZvdW5kRW50cmllcyA9IFtdO1xuXHR0cnkge1xuXHRcdGNvbGxlY3Rpb25zRm9yRWFjaC5NYXAuY2FsbChjb2xsZWN0aW9uLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0Zm91bmRFbnRyaWVzLnB1c2goW2tleSwgdmFsdWVdKTtcblx0XHR9KTtcblx0fSBjYXRjaCAobm90TWFwKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbGxlY3Rpb25zRm9yRWFjaC5TZXQuY2FsbChjb2xsZWN0aW9uLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0Zm91bmRFbnRyaWVzLnB1c2goW3ZhbHVlXSk7XG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChub3RTZXQpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZvdW5kRW50cmllcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gd2h5Tm90RXF1YWwodmFsdWUsIG90aGVyKSB7XG5cdGlmICh2YWx1ZSA9PT0gb3RoZXIpIHsgcmV0dXJuICcnOyB9XG5cdGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwpIHtcblx0XHRyZXR1cm4gdmFsdWUgPT09IG90aGVyID8gJycgOiBTdHJpbmcodmFsdWUpICsgJyAhPT0gJyArIFN0cmluZyhvdGhlcik7XG5cdH1cblxuXHR2YXIgdmFsVG9TdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0dmFyIG90aGVyVG9TdHIgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0aWYgKHZhbFRvU3RyICE9PSBvdGhlclRvU3RyKSB7XG5cdFx0cmV0dXJuICd0b1N0cmluZ1RhZyBpcyBub3QgdGhlIHNhbWU6ICcgKyB2YWxUb1N0ciArICcgIT09ICcgKyBvdGhlclRvU3RyO1xuXHR9XG5cblx0dmFyIHZhbElzQm9vbCA9IGlzQm9vbGVhbih2YWx1ZSk7XG5cdHZhciBvdGhlcklzQm9vbCA9IGlzQm9vbGVhbihvdGhlcik7XG5cdGlmICh2YWxJc0Jvb2wgfHwgb3RoZXJJc0Jvb2wpIHtcblx0XHRpZiAoIXZhbElzQm9vbCkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhIGJvb2xlYW47IHNlY29uZCBhcmd1bWVudCBpcyc7IH1cblx0XHRpZiAoIW90aGVySXNCb29sKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIG5vdCBhIGJvb2xlYW47IGZpcnN0IGFyZ3VtZW50IGlzJzsgfVxuXHRcdHZhciB2YWxCb29sVmFsID0gYm9vbGVhblZhbHVlLmNhbGwodmFsdWUpO1xuXHRcdHZhciBvdGhlckJvb2xWYWwgPSBib29sZWFuVmFsdWUuY2FsbChvdGhlcik7XG5cdFx0aWYgKHZhbEJvb2xWYWwgPT09IG90aGVyQm9vbFZhbCkgeyByZXR1cm4gJyc7IH1cblx0XHRyZXR1cm4gJ3ByaW1pdGl2ZSB2YWx1ZSBvZiBib29sZWFuIGFyZ3VtZW50cyBkbyBub3QgbWF0Y2g6ICcgKyB2YWxCb29sVmFsICsgJyAhPT0gJyArIG90aGVyQm9vbFZhbDtcblx0fVxuXG5cdHZhciB2YWxJc051bWJlciA9IGlzTnVtYmVyKHZhbHVlKTtcblx0dmFyIG90aGVySXNOdW1iZXIgPSBpc051bWJlcih2YWx1ZSk7XG5cdGlmICh2YWxJc051bWJlciB8fCBvdGhlcklzTnVtYmVyKSB7XG5cdFx0aWYgKCF2YWxJc051bWJlcikgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhIG51bWJlcjsgc2Vjb25kIGFyZ3VtZW50IGlzJzsgfVxuXHRcdGlmICghb3RoZXJJc051bWJlcikgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBub3QgYSBudW1iZXI7IGZpcnN0IGFyZ3VtZW50IGlzJzsgfVxuXHRcdHZhciB2YWxOdW0gPSBOdW1iZXIodmFsdWUpO1xuXHRcdHZhciBvdGhlck51bSA9IE51bWJlcihvdGhlcik7XG5cdFx0aWYgKHZhbE51bSA9PT0gb3RoZXJOdW0pIHsgcmV0dXJuICcnOyB9XG5cdFx0dmFyIHZhbElzTmFOID0gaXNOYU4odmFsdWUpO1xuXHRcdHZhciBvdGhlcklzTmFOID0gaXNOYU4ob3RoZXIpO1xuXHRcdGlmICh2YWxJc05hTiAmJiAhb3RoZXJJc05hTikge1xuXHRcdFx0cmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBOYU47IHNlY29uZCBpcyBub3QnO1xuXHRcdH0gZWxzZSBpZiAoIXZhbElzTmFOICYmIG90aGVySXNOYU4pIHtcblx0XHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIE5hTjsgZmlyc3QgaXMgbm90Jztcblx0XHR9IGVsc2UgaWYgKHZhbElzTmFOICYmIG90aGVySXNOYU4pIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdFx0cmV0dXJuICdudW1iZXJzIGFyZSBkaWZmZXJlbnQ6ICcgKyB2YWx1ZSArICcgIT09ICcgKyBvdGhlcjtcblx0fVxuXG5cdHZhciB2YWxJc1N0cmluZyA9IGlzU3RyaW5nKHZhbHVlKTtcblx0dmFyIG90aGVySXNTdHJpbmcgPSBpc1N0cmluZyhvdGhlcik7XG5cdGlmICh2YWxJc1N0cmluZyB8fCBvdGhlcklzU3RyaW5nKSB7XG5cdFx0aWYgKCF2YWxJc1N0cmluZykgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBzdHJpbmc7IGZpcnN0IGlzIG5vdCc7IH1cblx0XHRpZiAoIW90aGVySXNTdHJpbmcpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBzdHJpbmc7IHNlY29uZCBpcyBub3QnOyB9XG5cdFx0dmFyIHN0cmluZ1ZhbCA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0dmFyIG90aGVyVmFsID0gU3RyaW5nKG90aGVyKTtcblx0XHRpZiAoc3RyaW5nVmFsID09PSBvdGhlclZhbCkgeyByZXR1cm4gJyc7IH1cblx0XHRyZXR1cm4gJ3N0cmluZyB2YWx1ZXMgYXJlIGRpZmZlcmVudDogXCInICsgc3RyaW5nVmFsICsgJ1wiICE9PSBcIicgKyBvdGhlclZhbCArICdcIic7XG5cdH1cblxuXHR2YXIgdmFsSXNEYXRlID0gaXNEYXRlKHZhbHVlKTtcblx0dmFyIG90aGVySXNEYXRlID0gaXNEYXRlKG90aGVyKTtcblx0aWYgKHZhbElzRGF0ZSB8fCBvdGhlcklzRGF0ZSkge1xuXHRcdGlmICghdmFsSXNEYXRlKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIERhdGUsIGZpcnN0IGlzIG5vdCc7IH1cblx0XHRpZiAoIW90aGVySXNEYXRlKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgRGF0ZSwgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHR2YXIgdmFsVGltZSA9ICt2YWx1ZTtcblx0XHR2YXIgb3RoZXJUaW1lID0gK290aGVyO1xuXHRcdGlmICh2YWxUaW1lID09PSBvdGhlclRpbWUpIHsgcmV0dXJuICcnOyB9XG5cdFx0cmV0dXJuICdEYXRlcyBoYXZlIGRpZmZlcmVudCB0aW1lIHZhbHVlczogJyArIHZhbFRpbWUgKyAnICE9PSAnICsgb3RoZXJUaW1lO1xuXHR9XG5cblx0dmFyIHZhbElzUmVnZXggPSBpc1JlZ2V4KHZhbHVlKTtcblx0dmFyIG90aGVySXNSZWdleCA9IGlzUmVnZXgob3RoZXIpO1xuXHRpZiAodmFsSXNSZWdleCB8fCBvdGhlcklzUmVnZXgpIHtcblx0XHRpZiAoIXZhbElzUmVnZXgpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgUmVnRXhwLCBmaXJzdCBpcyBub3QnOyB9XG5cdFx0aWYgKCFvdGhlcklzUmVnZXgpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBSZWdFeHAsIHNlY29uZCBpcyBub3QnOyB9XG5cdFx0dmFyIHJlZ2V4U3RyaW5nVmFsID0gU3RyaW5nKHZhbHVlKTtcblx0XHR2YXIgcmVnZXhTdHJpbmdPdGhlciA9IFN0cmluZyhvdGhlcik7XG5cdFx0aWYgKHJlZ2V4U3RyaW5nVmFsID09PSByZWdleFN0cmluZ090aGVyKSB7IHJldHVybiAnJzsgfVxuXHRcdHJldHVybiAncmVndWxhciBleHByZXNzaW9ucyBkaWZmZXI6ICcgKyByZWdleFN0cmluZ1ZhbCArICcgIT09ICcgKyByZWdleFN0cmluZ090aGVyO1xuXHR9XG5cblx0dmFyIHZhbElzQXJyYXkgPSBpc0FycmF5KHZhbHVlKTtcblx0dmFyIG90aGVySXNBcnJheSA9IGlzQXJyYXkob3RoZXIpO1xuXHRpZiAodmFsSXNBcnJheSB8fCBvdGhlcklzQXJyYXkpIHtcblx0XHRpZiAoIXZhbElzQXJyYXkpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgYW4gQXJyYXksIGZpcnN0IGlzIG5vdCc7IH1cblx0XHRpZiAoIW90aGVySXNBcnJheSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIGFuIEFycmF5LCBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdGlmICh2YWx1ZS5sZW5ndGggIT09IG90aGVyLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuICdhcnJheXMgaGF2ZSBkaWZmZXJlbnQgbGVuZ3RoOiAnICsgdmFsdWUubGVuZ3RoICsgJyAhPT0gJyArIG90aGVyLmxlbmd0aDtcblx0XHR9XG5cdFx0aWYgKFN0cmluZyh2YWx1ZSkgIT09IFN0cmluZyhvdGhlcikpIHsgcmV0dXJuICdzdHJpbmdpZmllZCBBcnJheXMgZGlmZmVyJzsgfVxuXG5cdFx0dmFyIGluZGV4ID0gdmFsdWUubGVuZ3RoIC0gMTtcblx0XHR2YXIgZXF1YWwgPSAnJztcblx0XHR2YXIgdmFsSGFzSW5kZXgsIG90aGVySGFzSW5kZXg7XG5cdFx0d2hpbGUgKGVxdWFsID09PSAnJyAmJiBpbmRleCA+PSAwKSB7XG5cdFx0XHR2YWxIYXNJbmRleCA9IGhhcyh2YWx1ZSwgaW5kZXgpO1xuXHRcdFx0b3RoZXJIYXNJbmRleCA9IGhhcyhvdGhlciwgaW5kZXgpO1xuXHRcdFx0aWYgKCF2YWxIYXNJbmRleCAmJiBvdGhlckhhc0luZGV4KSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGhhcyBpbmRleCAnICsgaW5kZXggKyAnOyBmaXJzdCBkb2VzIG5vdCc7IH1cblx0XHRcdGlmICh2YWxIYXNJbmRleCAmJiAhb3RoZXJIYXNJbmRleCkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGhhcyBpbmRleCAnICsgaW5kZXggKyAnOyBzZWNvbmQgZG9lcyBub3QnOyB9XG5cdFx0XHRlcXVhbCA9IHdoeU5vdEVxdWFsKHZhbHVlW2luZGV4XSwgb3RoZXJbaW5kZXhdKTtcblx0XHRcdGluZGV4IC09IDE7XG5cdFx0fVxuXHRcdHJldHVybiBlcXVhbDtcblx0fVxuXG5cdHZhciB2YWx1ZUlzU3ltID0gaXNTeW1ib2wodmFsdWUpO1xuXHR2YXIgb3RoZXJJc1N5bSA9IGlzU3ltYm9sKG90aGVyKTtcblx0aWYgKHZhbHVlSXNTeW0gIT09IG90aGVySXNTeW0pIHtcblx0XHRpZiAodmFsdWVJc1N5bSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIFN5bWJvbDsgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBTeW1ib2w7IGZpcnN0IGlzIG5vdCc7XG5cdH1cblx0aWYgKHZhbHVlSXNTeW0gJiYgb3RoZXJJc1N5bSkge1xuXHRcdHJldHVybiBzeW1ib2xWYWx1ZS5jYWxsKHZhbHVlKSA9PT0gc3ltYm9sVmFsdWUuY2FsbChvdGhlcikgPyAnJyA6ICdmaXJzdCBTeW1ib2wgdmFsdWUgIT09IHNlY29uZCBTeW1ib2wgdmFsdWUnO1xuXHR9XG5cblx0dmFyIHZhbHVlSXNHZW4gPSBpc0dlbmVyYXRvcih2YWx1ZSk7XG5cdHZhciBvdGhlcklzR2VuID0gaXNHZW5lcmF0b3Iob3RoZXIpO1xuXHRpZiAodmFsdWVJc0dlbiAhPT0gb3RoZXJJc0dlbikge1xuXHRcdGlmICh2YWx1ZUlzR2VuKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgYSBHZW5lcmF0b3I7IHNlY29uZCBpcyBub3QnOyB9XG5cdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgYSBHZW5lcmF0b3I7IGZpcnN0IGlzIG5vdCc7XG5cdH1cblxuXHR2YXIgdmFsdWVJc0Fycm93ID0gaXNBcnJvd0Z1bmN0aW9uKHZhbHVlKTtcblx0dmFyIG90aGVySXNBcnJvdyA9IGlzQXJyb3dGdW5jdGlvbihvdGhlcik7XG5cdGlmICh2YWx1ZUlzQXJyb3cgIT09IG90aGVySXNBcnJvdykge1xuXHRcdGlmICh2YWx1ZUlzQXJyb3cpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBhbiBBcnJvdyBmdW5jdGlvbjsgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBhbiBBcnJvdyBmdW5jdGlvbjsgZmlyc3QgaXMgbm90Jztcblx0fVxuXG5cdGlmIChpc0NhbGxhYmxlKHZhbHVlKSB8fCBpc0NhbGxhYmxlKG90aGVyKSkge1xuXHRcdGlmIChmdW5jdGlvbnNIYXZlTmFtZXMgJiYgd2h5Tm90RXF1YWwodmFsdWUubmFtZSwgb3RoZXIubmFtZSkgIT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJ0Z1bmN0aW9uIG5hbWVzIGRpZmZlcjogXCInICsgdmFsdWUubmFtZSArICdcIiAhPT0gXCInICsgb3RoZXIubmFtZSArICdcIic7XG5cdFx0fVxuXHRcdGlmICh3aHlOb3RFcXVhbCh2YWx1ZS5sZW5ndGgsIG90aGVyLmxlbmd0aCkgIT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJ0Z1bmN0aW9uIGxlbmd0aHMgZGlmZmVyOiAnICsgdmFsdWUubGVuZ3RoICsgJyAhPT0gJyArIG90aGVyLmxlbmd0aDtcblx0XHR9XG5cblx0XHR2YXIgdmFsdWVTdHIgPSBub3JtYWxpemVGbldoaXRlc3BhY2UoU3RyaW5nKHZhbHVlKSk7XG5cdFx0dmFyIG90aGVyU3RyID0gbm9ybWFsaXplRm5XaGl0ZXNwYWNlKFN0cmluZyhvdGhlcikpO1xuXHRcdGlmICh3aHlOb3RFcXVhbCh2YWx1ZVN0ciwgb3RoZXJTdHIpID09PSAnJykgeyByZXR1cm4gJyc7IH1cblxuXHRcdGlmICghdmFsdWVJc0dlbiAmJiAhdmFsdWVJc0Fycm93KSB7XG5cdFx0XHRyZXR1cm4gd2h5Tm90RXF1YWwodmFsdWVTdHIucmVwbGFjZSgvXFwpXFxzKlxcey8sICcpeycpLCBvdGhlclN0ci5yZXBsYWNlKC9cXClcXHMqXFx7LywgJyl7JykpID09PSAnJyA/ICcnIDogJ0Z1bmN0aW9uIHN0cmluZyByZXByZXNlbnRhdGlvbnMgZGlmZmVyJztcblx0XHR9XG5cdFx0cmV0dXJuIHdoeU5vdEVxdWFsKHZhbHVlU3RyLCBvdGhlclN0cikgPT09ICcnID8gJycgOiAnRnVuY3Rpb24gc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBkaWZmZXInO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG90aGVyID09PSAnb2JqZWN0Jykge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgIT09IHR5cGVvZiBvdGhlcikgeyByZXR1cm4gJ2FyZ3VtZW50cyBoYXZlIGEgZGlmZmVyZW50IHR5cGVvZjogJyArIHR5cGVvZiB2YWx1ZSArICcgIT09ICcgKyB0eXBlb2Ygb3RoZXI7IH1cblx0XHRpZiAoaXNQcm90by5jYWxsKHZhbHVlLCBvdGhlcikpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyB0aGUgW1tQcm90b3R5cGVdXSBvZiB0aGUgc2Vjb25kJzsgfVxuXHRcdGlmIChpc1Byb3RvLmNhbGwob3RoZXIsIHZhbHVlKSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyB0aGUgW1tQcm90b3R5cGVdXSBvZiB0aGUgZmlyc3QnOyB9XG5cdFx0aWYgKGdldFByb3RvdHlwZU9mKHZhbHVlKSAhPT0gZ2V0UHJvdG90eXBlT2Yob3RoZXIpKSB7IHJldHVybiAnYXJndW1lbnRzIGhhdmUgYSBkaWZmZXJlbnQgW1tQcm90b3R5cGVdXSc7IH1cblxuXHRcdGlmIChzeW1ib2xJdGVyYXRvcikge1xuXHRcdFx0dmFyIHZhbHVlSXRlcmF0b3JGbiA9IHZhbHVlW3N5bWJvbEl0ZXJhdG9yXTtcblx0XHRcdHZhciB2YWx1ZUlzSXRlcmFibGUgPSBpc0NhbGxhYmxlKHZhbHVlSXRlcmF0b3JGbik7XG5cdFx0XHR2YXIgb3RoZXJJdGVyYXRvckZuID0gb3RoZXJbc3ltYm9sSXRlcmF0b3JdO1xuXHRcdFx0dmFyIG90aGVySXNJdGVyYWJsZSA9IGlzQ2FsbGFibGUob3RoZXJJdGVyYXRvckZuKTtcblx0XHRcdGlmICh2YWx1ZUlzSXRlcmFibGUgIT09IG90aGVySXNJdGVyYWJsZSkge1xuXHRcdFx0XHRpZiAodmFsdWVJc0l0ZXJhYmxlKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgaXRlcmFibGU7IHNlY29uZCBpcyBub3QnOyB9XG5cdFx0XHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIGl0ZXJhYmxlOyBmaXJzdCBpcyBub3QnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHZhbHVlSXNJdGVyYWJsZSAmJiBvdGhlcklzSXRlcmFibGUpIHtcblx0XHRcdFx0dmFyIHZhbHVlSXRlcmF0b3IgPSB2YWx1ZUl0ZXJhdG9yRm4uY2FsbCh2YWx1ZSk7XG5cdFx0XHRcdHZhciBvdGhlckl0ZXJhdG9yID0gb3RoZXJJdGVyYXRvckZuLmNhbGwob3RoZXIpO1xuXHRcdFx0XHR2YXIgdmFsdWVOZXh0LCBvdGhlck5leHQsIG5leHRXaHk7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR2YWx1ZU5leHQgPSB2YWx1ZUl0ZXJhdG9yLm5leHQoKTtcblx0XHRcdFx0XHRvdGhlck5leHQgPSBvdGhlckl0ZXJhdG9yLm5leHQoKTtcblx0XHRcdFx0XHRpZiAoIXZhbHVlTmV4dC5kb25lICYmICFvdGhlck5leHQuZG9uZSkge1xuXHRcdFx0XHRcdFx0bmV4dFdoeSA9IHdoeU5vdEVxdWFsKHZhbHVlTmV4dCwgb3RoZXJOZXh0KTtcblx0XHRcdFx0XHRcdGlmIChuZXh0V2h5ICE9PSAnJykge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ2l0ZXJhdGlvbiByZXN1bHRzIGFyZSBub3QgZXF1YWw6ICcgKyBuZXh0V2h5O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSB3aGlsZSAoIXZhbHVlTmV4dC5kb25lICYmICFvdGhlck5leHQuZG9uZSk7XG5cdFx0XHRcdGlmICh2YWx1ZU5leHQuZG9uZSAmJiAhb3RoZXJOZXh0LmRvbmUpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBmaW5pc2hlZCBpdGVyYXRpbmcgYmVmb3JlIHNlY29uZCc7IH1cblx0XHRcdFx0aWYgKCF2YWx1ZU5leHQuZG9uZSAmJiBvdGhlck5leHQuZG9uZSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBmaW5pc2hlZCBpdGVyYXRpbmcgYmVmb3JlIGZpcnN0JzsgfVxuXHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChjb2xsZWN0aW9uc0ZvckVhY2guTWFwIHx8IGNvbGxlY3Rpb25zRm9yRWFjaC5TZXQpIHtcblx0XHRcdHZhciB2YWx1ZUVudHJpZXMgPSB0cnlNYXBTZXRFbnRyaWVzKHZhbHVlKTtcblx0XHRcdHZhciBvdGhlckVudHJpZXMgPSB0cnlNYXBTZXRFbnRyaWVzKG90aGVyKTtcblx0XHRcdHZhciB2YWx1ZUVudHJpZXNJc0FycmF5ID0gaXNBcnJheSh2YWx1ZUVudHJpZXMpO1xuXHRcdFx0dmFyIG90aGVyRW50cmllc0lzQXJyYXkgPSBpc0FycmF5KG90aGVyRW50cmllcyk7XG5cdFx0XHRpZiAodmFsdWVFbnRyaWVzSXNBcnJheSAmJiAhb3RoZXJFbnRyaWVzSXNBcnJheSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGhhcyBDb2xsZWN0aW9uIGVudHJpZXMsIHNlY29uZCBkb2VzIG5vdCc7IH1cblx0XHRcdGlmICghdmFsdWVFbnRyaWVzSXNBcnJheSAmJiBvdGhlckVudHJpZXNJc0FycmF5KSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGhhcyBDb2xsZWN0aW9uIGVudHJpZXMsIGZpcnN0IGRvZXMgbm90JzsgfVxuXHRcdFx0aWYgKHZhbHVlRW50cmllc0lzQXJyYXkgJiYgb3RoZXJFbnRyaWVzSXNBcnJheSkge1xuXHRcdFx0XHR2YXIgZW50cmllc1doeSA9IHdoeU5vdEVxdWFsKHZhbHVlRW50cmllcywgb3RoZXJFbnRyaWVzKTtcblx0XHRcdFx0cmV0dXJuIGVudHJpZXNXaHkgPT09ICcnID8gJycgOiAnQ29sbGVjdGlvbiBlbnRyaWVzIGRpZmZlcjogJyArIGVudHJpZXNXaHk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGtleSwgdmFsdWVLZXlJc1JlY3Vyc2l2ZSwgb3RoZXJLZXlJc1JlY3Vyc2l2ZSwga2V5V2h5O1xuXHRcdGZvciAoa2V5IGluIHZhbHVlKSB7XG5cdFx0XHRpZiAoaGFzKHZhbHVlLCBrZXkpKSB7XG5cdFx0XHRcdGlmICghaGFzKG90aGVyLCBrZXkpKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaGFzIGtleSBcIicgKyBrZXkgKyAnXCI7IHNlY29uZCBkb2VzIG5vdCc7IH1cblx0XHRcdFx0dmFsdWVLZXlJc1JlY3Vyc2l2ZSA9IHZhbHVlW2tleV0gJiYgdmFsdWVba2V5XVtrZXldID09PSB2YWx1ZTtcblx0XHRcdFx0b3RoZXJLZXlJc1JlY3Vyc2l2ZSA9IG90aGVyW2tleV0gJiYgb3RoZXJba2V5XVtrZXldID09PSBvdGhlcjtcblx0XHRcdFx0aWYgKHZhbHVlS2V5SXNSZWN1cnNpdmUgIT09IG90aGVyS2V5SXNSZWN1cnNpdmUpIHtcblx0XHRcdFx0XHRpZiAodmFsdWVLZXlJc1JlY3Vyc2l2ZSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGhhcyBhIGNpcmN1bGFyIHJlZmVyZW5jZSBhdCBrZXkgXCInICsga2V5ICsgJ1wiOyBzZWNvbmQgZG9lcyBub3QnOyB9XG5cdFx0XHRcdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaGFzIGEgY2lyY3VsYXIgcmVmZXJlbmNlIGF0IGtleSBcIicgKyBrZXkgKyAnXCI7IGZpcnN0IGRvZXMgbm90Jztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIXZhbHVlS2V5SXNSZWN1cnNpdmUgJiYgIW90aGVyS2V5SXNSZWN1cnNpdmUpIHtcblx0XHRcdFx0XHRrZXlXaHkgPSB3aHlOb3RFcXVhbCh2YWx1ZVtrZXldLCBvdGhlcltrZXldKTtcblx0XHRcdFx0XHRpZiAoa2V5V2h5ICE9PSAnJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd2YWx1ZSBhdCBrZXkgXCInICsga2V5ICsgJ1wiIGRpZmZlcnM6ICcgKyBrZXlXaHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGZvciAoa2V5IGluIG90aGVyKSB7XG5cdFx0XHRpZiAoaGFzKG90aGVyLCBrZXkpICYmICFoYXModmFsdWUsIGtleSkpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaGFzIGtleSBcIicgKyBrZXkgKyAnXCI7IGZpcnN0IGRvZXMgbm90JzsgfVxuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVnZXhFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xudmFyIHRyeVJlZ2V4RXhlYyA9IGZ1bmN0aW9uIHRyeVJlZ2V4RXhlYyh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHJlZ2V4RXhlYy5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgcmVnZXhDbGFzcyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1JlZ2V4KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlSZWdleEV4ZWModmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHJlZ2V4Q2xhc3M7XG59O1xuIiwidmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgTWFwLnByb3RvdHlwZTtcbnZhciBtYXBTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzTWFwID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihNYXAucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBtYXBTaXplID0gaGFzTWFwICYmIG1hcFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBtYXBTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBtYXBTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIG1hcEZvckVhY2ggPSBoYXNNYXAgJiYgTWFwLnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgU2V0LnByb3RvdHlwZTtcbnZhciBzZXRTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzU2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTZXQucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBzZXRTaXplID0gaGFzU2V0ICYmIHNldFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBzZXRTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBzZXRTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIHNldEZvckVhY2ggPSBoYXNTZXQgJiYgU2V0LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGJvb2xlYW5WYWx1ZU9mID0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnNwZWN0XyAob2JqLCBvcHRzLCBkZXB0aCwgc2Vlbikge1xuICAgIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAgIFxuICAgIHZhciBtYXhEZXB0aCA9IG9wdHMuZGVwdGggPT09IHVuZGVmaW5lZCA/IDUgOiBvcHRzLmRlcHRoO1xuICAgIGlmIChkZXB0aCA9PT0gdW5kZWZpbmVkKSBkZXB0aCA9IDA7XG4gICAgaWYgKGRlcHRoID49IG1heERlcHRoICYmIG1heERlcHRoID4gMCAmJiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuICdbT2JqZWN0XSc7XG4gICAgfVxuICAgIFxuICAgIGlmIChzZWVuID09PSB1bmRlZmluZWQpIHNlZW4gPSBbXTtcbiAgICBlbHNlIGlmIChpbmRleE9mKHNlZW4sIG9iaikgPj0gMCkge1xuICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBpbnNwZWN0ICh2YWx1ZSwgZnJvbSkge1xuICAgICAgICBpZiAoZnJvbSkge1xuICAgICAgICAgICAgc2VlbiA9IHNlZW4uc2xpY2UoKTtcbiAgICAgICAgICAgIHNlZW4ucHVzaChmcm9tKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zcGVjdF8odmFsdWUsIG9wdHMsIGRlcHRoICsgMSwgc2Vlbik7XG4gICAgfVxuICAgIFxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gaW5zcGVjdFN0cmluZyhvYmopO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZU9mKG9iaik7XG4gICAgICAgIHJldHVybiAnW0Z1bmN0aW9uJyArIChuYW1lID8gJzogJyArIG5hbWUgOiAnJykgKyAnXSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gJ251bGwnO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N5bWJvbChvYmopKSB7XG4gICAgICAgIHZhciBzeW1TdHJpbmcgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnID8gJ09iamVjdCgnICsgc3ltU3RyaW5nICsgJyknIDogc3ltU3RyaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0VsZW1lbnQob2JqKSkge1xuICAgICAgICB2YXIgcyA9ICc8JyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBhdHRycyA9IG9iai5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzICs9ICcgJyArIGF0dHJzW2ldLm5hbWUgKyAnPVwiJyArIHF1b3RlKGF0dHJzW2ldLnZhbHVlKSArICdcIic7XG4gICAgICAgIH1cbiAgICAgICAgcyArPSAnPic7XG4gICAgICAgIGlmIChvYmouY2hpbGROb2RlcyAmJiBvYmouY2hpbGROb2Rlcy5sZW5ndGgpIHMgKz0gJy4uLic7XG4gICAgICAgIHMgKz0gJzwvJyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCkgKyAnPic7XG4gICAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKG9iai5sZW5ndGggPT09IDApIHJldHVybiAnW10nO1xuICAgICAgICB2YXIgeHMgPSBBcnJheShvYmoubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHhzW2ldID0gaGFzKG9iaiwgaSkgPyBpbnNwZWN0KG9ialtpXSwgb2JqKSA6ICcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnWyAnICsgeHMuam9pbignLCAnKSArICcgXSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRXJyb3Iob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKCFoYXMob2JqLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKC9bXlxcdyRdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGluc3BlY3Qoa2V5KSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKGtleSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbJyArIG9iaiArICddJztcbiAgICAgICAgcmV0dXJuICd7IFsnICsgb2JqICsgJ10gJyArIHBhcnRzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG9iai5pbnNwZWN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTWFwKG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIG1hcEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGluc3BlY3Qoa2V5LCBvYmopICsgJyA9PiAnICsgaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gJ01hcCAoJyArIG1hcFNpemUuY2FsbChvYmopICsgJykgeycgKyBwYXJ0cy5qb2luKCcsICcpICsgJ30nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1NldChvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBzZXRGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUgKSB7XG4gICAgICAgICAgICBwYXJ0cy5wdXNoKGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICdTZXQgKCcgKyBzZXRTaXplLmNhbGwob2JqKSArICcpIHsnICsgcGFydHMuam9pbignLCAnKSArICd9JztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc051bWJlcihvYmopKSB7XG4gICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBOdW1iZXIob2JqKSArICcpJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIGJvb2xlYW5WYWx1ZU9mLmNhbGwob2JqKSArICcpJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmcob2JqKSkge1xuICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgaW5zcGVjdChTdHJpbmcob2JqKSkgKyAnKSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc0RhdGUob2JqKSAmJiAhaXNSZWdFeHAob2JqKSkge1xuICAgICAgICB2YXIgeHMgPSBbXSwga2V5cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaGFzKG9iaiwga2V5KSkga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5zb3J0KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoL1teXFx3JF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIHhzLnB1c2goaW5zcGVjdChrZXkpICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB4cy5wdXNoKGtleSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoeHMubGVuZ3RoID09PSAwKSByZXR1cm4gJ3t9JztcbiAgICAgICAgcmV0dXJuICd7ICcgKyB4cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gU3RyaW5nKG9iaik7XG59O1xuXG5mdW5jdGlvbiBxdW90ZSAocykge1xuICAgIHJldHVybiBTdHJpbmcocykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5IChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEFycmF5XScgfVxuZnVuY3Rpb24gaXNEYXRlIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IERhdGVdJyB9XG5mdW5jdGlvbiBpc1JlZ0V4cCAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBSZWdFeHBdJyB9XG5mdW5jdGlvbiBpc0Vycm9yIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEVycm9yXScgfVxuZnVuY3Rpb24gaXNTeW1ib2wgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3ltYm9sXScgfVxuZnVuY3Rpb24gaXNTdHJpbmcgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScgfVxuZnVuY3Rpb24gaXNOdW1iZXIgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgfVxuZnVuY3Rpb24gaXNCb29sZWFuIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IEJvb2xlYW5dJyB9XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5IHx8IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSBpbiB0aGlzOyB9O1xuZnVuY3Rpb24gaGFzIChvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIGtleSk7XG59XG5cbmZ1bmN0aW9uIHRvU3RyIChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIG5hbWVPZiAoZikge1xuICAgIGlmIChmLm5hbWUpIHJldHVybiBmLm5hbWU7XG4gICAgdmFyIG0gPSBmLnRvU3RyaW5nKCkubWF0Y2goL15mdW5jdGlvblxccyooW1xcdyRdKykvKTtcbiAgICBpZiAobSkgcmV0dXJuIG1bMV07XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YgKHhzLCB4KSB7XG4gICAgaWYgKHhzLmluZGV4T2YpIHJldHVybiB4cy5pbmRleE9mKHgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh4c1tpXSA9PT0geCkgcmV0dXJuIGk7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gaXNNYXAgKHgpIHtcbiAgICBpZiAoIW1hcFNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBtYXBTaXplLmNhbGwoeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1NldCAoeCkge1xuICAgIGlmICghc2V0U2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHNldFNpemUuY2FsbCh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudCAoeCkge1xuICAgIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB4IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgJiYgdHlwZW9mIHguZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nXG4gICAgO1xufVxuXG5mdW5jdGlvbiBpbnNwZWN0U3RyaW5nIChzdHIpIHtcbiAgICB2YXIgcyA9IHN0ci5yZXBsYWNlKC8oWydcXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1tcXHgwMC1cXHgxZl0vZywgbG93Ynl0ZSk7XG4gICAgcmV0dXJuIFwiJ1wiICsgcyArIFwiJ1wiO1xuICAgIFxuICAgIGZ1bmN0aW9uIGxvd2J5dGUgKGMpIHtcbiAgICAgICAgdmFyIG4gPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHZhciB4ID0geyA4OiAnYicsIDk6ICd0JywgMTA6ICduJywgMTI6ICdmJywgMTM6ICdyJyB9W25dO1xuICAgICAgICBpZiAoeCkgcmV0dXJuICdcXFxcJyArIHg7XG4gICAgICAgIHJldHVybiAnXFxcXHgnICsgKG4gPCAweDEwID8gJzAnIDogJycpICsgbi50b1N0cmluZygxNik7XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGFwcGx5TWlkZGxld2FyZTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBfY29tcG9zZTJbXCJkZWZhdWx0XCJdLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYmluZEFjdGlvbkNyZWF0b3JzO1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgJy4gJyArICdEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb21iaW5lUmVkdWNlcnM7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbikge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUID8gJ2luaXRpYWxTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghKDAsIF9pc1BsYWluT2JqZWN0MltcImRlZmF1bHRcIl0pKGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuICdUaGUgJyArIGFyZ3VtZW50TmFtZSArICcgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIicgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArICdcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnICsgKCdrZXlzOiBcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIicpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSk7XG4gIH0pO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICdVbmV4cGVjdGVkICcgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArICcgJyArICgnXCInICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyAnXCIgZm91bmQgaW4gJyArIGFyZ3VtZW50TmFtZSArICcuICcpICsgJ0V4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogJyArICgnXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNhbml0eShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiBfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgdmFyIHNhbml0eUVycm9yO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTYW5pdHkoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzYW5pdHlFcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzYW5pdHlFcnJvcikge1xuICAgICAgdGhyb3cgc2FuaXR5RXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbik7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMltcImRlZmF1bHRcIl0pKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBmaW5hbFJlZHVjZXJLZXlzW2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNvbXBvc2U7XG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gZnVuY3NbZnVuY3MubGVuZ3RoIC0gMV07XG4gICAgdmFyIHJlc3QgPSBmdW5jcy5zbGljZSgwLCAtMSk7XG5cbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW2luaXRpYWxTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXIgVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IGluaXRpYWxTdGF0ZTtcbiAgICBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBleHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IGV4cG9ydHMuY3JlYXRlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfY3JlYXRlU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU3RvcmUpO1xuXG52YXIgX2NvbWJpbmVSZWR1Y2VycyA9IHJlcXVpcmUoJy4vY29tYmluZVJlZHVjZXJzJyk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbWJpbmVSZWR1Y2Vycyk7XG5cbnZhciBfYmluZEFjdGlvbkNyZWF0b3JzID0gcmVxdWlyZSgnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFjdGlvbkNyZWF0b3JzKTtcblxudmFyIF9hcHBseU1pZGRsZXdhcmUgPSByZXF1aXJlKCcuL2FwcGx5TWlkZGxld2FyZScpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBseU1pZGRsZXdhcmUpO1xuXG52YXIgX2NvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcblxudmFyIF9jb21wb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgKDAsIF93YXJuaW5nMltcImRlZmF1bHRcIl0pKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IF9jcmVhdGVTdG9yZTJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBfY29tYmluZVJlZHVjZXJzMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IF9iaW5kQWN0aW9uQ3JlYXRvcnMyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gX2FwcGx5TWlkZGxld2FyZTJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5jb21wb3NlID0gX2NvbXBvc2UyW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHdhcm5pbmc7XG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn0iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIEdldHMgdGhlIGBbW1Byb3RvdHlwZV1dYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgYFtbUHJvdG90eXBlXV1gLlxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZShPYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSG9zdE9iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHxcbiAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iXX0=
