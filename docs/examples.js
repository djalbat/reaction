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

  //   const Div = React.createClass({
  //     render: function() {
  //       return <div>{this.context.message}</div>;
  //     }
  //   });
  //
  //   const {Component} = React;
  //
  //   class Provider extends Component {
  //     render() {
  //       return this.props.children;
  //     }
  //
  //     getChildContext() {
  //       return "Now then...";
  //     }
  //   }
  //
  //   ReactDOM.render(
  //     <Provider>
  //       <Div></Div>
  //     </Provider>,
  //     rootDOMElement
  //   );
};

module.exports = VanillaApp;
},{"../../index":4}],4:[function(require,module,exports){
'use strict';

module.exports = {
  React: require('./lib/react'),
  ReactDOM: require('./lib/reactDOM')
};

},{"./lib/react":7,"./lib/reactDOM":12}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayNameOrDOMElement, properties, children) {
    _classCallCheck(this, DisplayElement);

    var domElement = typeof displayNameOrDOMElement === 'string' ? document.createElement(displayNameOrDOMElement) : ///
    displayNameOrDOMElement; ///

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.properties = properties;

    _this.children = children;
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent);

      this.children.forEach(function (child) {
        child.mount(this);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remount', this).call(this, previousSibling);

      this.children.forEach(function (child) {
        child.mount(this);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remove',
    value: function remove() {
      ///

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remove', this).call(this);
    }
  }, {
    key: 'applyProperties',
    value: function applyProperties() {
      if (this.properties === null) {
        return;
      }

      var domElement = this.getDOMElement(),
          propertyNames = Object.keys(this.properties);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.properties[propertyName],
            attributeName,
            attributeValue;

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              ///
          ref = domElement; ///

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var handlerName = lowercase(propertyName),
              ///
          handler = propertyValue; ///

          domElement[handlerName] = handler;
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
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

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
},{"./element":6}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement) {
    _classCallCheck(this, Element);

    this.domElement = domElement;
  }

  _createClass(Element, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'mount',
    value: function mount(parent) {
      parent.append(this);
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling) {
      previousSibling.appendAfter(this);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'append',
    value: function append(child) {
      var childDOMElement = child.getDOMElement();

      this.domElement.appendChild(childDOMElement);
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      var previousSiblingDOMElement = previousSibling.getDOMElement();

      this.domElement.parentElement.insertBefore(previousSiblingDOMElement, this.domElement.nextSibling);
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
    }
  }, {
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }]);

  return Element;
}();

module.exports = Element;
},{}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
    ReactElement = require('./reactElement'),
    DisplayElement = require('./displayElement'),
    ReactClassElement = require('./reactClassElement'),
    ReactFunctionElement = require('./reactFunctionElement'),
    ReactComponentElement = require('./reactComponentElement');

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

        element = new ReactComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument; ///

        element = new ReactClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument; ///

        element = new ReactFunctionElement(reactFunction, properties, children);
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

    if (remainingArgument instanceof Element || remainingArgument instanceof ReactElement) {
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
},{"./displayElement":5,"./element":6,"./reactClass":8,"./reactClassElement":9,"./reactComponent":10,"./reactComponentElement":11,"./reactElement":13,"./reactFunctionElement":14,"./textElement":15}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactClass = function () {
  function ReactClass(render, displayName, getInitialState, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.componentDidMount = componentDidMount;
    this.componentWillUnmount = componentWillUnmount;
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
          componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillunmount,
          reactClass = new ReactClass(render, displayName, getInitialState, componentDidMount, componentWillUnmount);

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

  var jsxElement = new DisplayElement(displayName, properties, children);

  return jsxElement;
}

var defaultDisplayName = undefined; ///

function defaultGetInitialState() {
  return {};
}

function defaultComponentDidMount() {}

function defaultComponentWillunmount() {}
},{"./displayElement":5}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, properties, children) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClassElement).call(this, properties, children));

    _this.instance.displayName = reactClass.getDisplayName();
    _this.instance.state = reactClass.getInitialState(); ///

    _this.reactClass = reactClass;
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'setState',
    value: function setState(state) {
      this.instance.state = state;

      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.apply(this.instance);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;
},{"./reactElement":13}],10:[function(require,module,exports){
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
    key: 'getChildContext',
    value: function getChildContext() {}
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
},{}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, properties, children) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactComponentElement).call(this, properties, children));

    _this.reactComponent = reactComponent;
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      this.reactComponent.componentWillUnMount.apply(this.instance);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;
},{"./reactElement":13}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DisplayElement = require('./displayElement');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var properties = null,
          children = [],
          parentElement = new DisplayElement(parentDOMElement, properties, children);

      parentElement.empty();

      element.mount(parentElement); ///
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;
},{"./displayElement":5}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(properties, children) {
    _classCallCheck(this, ReactElement);

    var props = properties || {},
        forceUpdate = this.forceUpdate.bind(this);

    this.children = children;

    props.children = children;

    this.instance = {
      props: props,
      forceUpdate: forceUpdate
    };
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent) {
      var childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.mount(parent);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount(lastPreviousChild) {
      var childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        var previousSibling = lastPreviousChild; ///

        child.remount(previousSibling);
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var previousChildren = this.children,
          ///
      lastPreviousChild = last(previousChildren);

      this.remount(lastPreviousChild);

      previousChildren.forEach(function (previousChild) {
        previousChild.remove();
      });
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.children.forEach(function (child) {
        child.remove();
      });
    }
  }, {
    key: 'append',
    value: function append(parent) {
      this.children.forEach(function (child) {
        child.append(parent);
      });
    }
  }, {
    key: 'appendAfter',
    value: function appendAfter(previousSibling) {
      this.children.forEach(function (child) {
        child.appendAfter(previousSibling);
      });
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;

function last(array) {
  return array[array.length - 1];
}
},{}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, properties, children) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, properties, children));

    _this.reactFunction = reactFunction;
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.instance.props); ///
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;
},{"./reactElement":13}],15:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement));
  }

  return TextElement;
}(Element);

module.exports = TextElement;
},{"./element":6}],16:[function(require,module,exports){
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