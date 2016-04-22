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

  // var Div = React.createClass({
  //   render() {
  //     return <div>{this.state}</div>;
  //   }
  // });
  //
  // var div = <Div></Div>;
  //
  // ReactDOM.render(div, rootDOMElement);
  //
  // div.setState('!!!');
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
    key: 'setState',
    value: function setState(state) {
      this.instance.state = state;

      this.forceUpdate();
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this.instance);
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
      var _ref = this.instance.props; ////

      return this.reactFunction(_ref);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL2luZGV4LmpzIiwiZG9jcy9saWJFUzIwMTUvcmVkdXhBcHAuanMiLCJkb2NzL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIiwiaW5kZXguanMiLCJsaWJFUzIwMTUvZGlzcGxheUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdC5qcyIsImxpYkVTMjAxNS9yZWFjdENsYXNzLmpzIiwibGliRVMyMDE1L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdERPTS5qcyIsImxpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiLCJsaWJFUzIwMTUvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJsaWJFUzIwMTUvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZnJlZXplL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvRXhwZWN0YXRpb24uanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L2xpYi9TcHlVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL1Rlc3RVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2Fzc2VydC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2V4dGVuZC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvZ2V0Q29sbGVjdGlvbnNGb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvZ2V0U3ltYm9sSXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9oYXMvbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaGFzL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtYXJyb3ctZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtYm9vbGVhbi1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtY2FsbGFibGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtZ2VuZXJhdG9yLWZ1bmN0aW9uL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2lzLW51bWJlci1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtc3RyaW5nL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2lzLXN5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL3doeS5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvb2JqZWN0LWluc3BlY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2FwcGx5TWlkZGxld2FyZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jb21iaW5lUmVkdWNlcnMuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2NvbXBvc2UuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvdXRpbHMvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vbGliL3ZhbmlsbGFBcHAnKSxcbiAgUmVkdXhBcHA6IHJlcXVpcmUoJy4vbGliL3JlZHV4QXBwJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4JyksXG4gICAgZXhwZWN0ICA9IHJlcXVpcmUoJ2V4cGVjdCcpLFxuICAgIGRlZXBGcmVlemUgPSByZXF1aXJlKCdkZWVwLWZyZWV6ZScpO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgUmVkdXhBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxuICAgICAgPC91bD5cbiAgICApO1xuXG4gICAgY29uc3QgTGluayA9ICh7XG4gICAgICBhY3RpdmUsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9KSA9PiB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICAgIGNvbnN0IEFkZFRvZG8gPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgaW5wdXQ7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRm9vdGVyID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgU2hvdzpcbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCcgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3Qgc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxGb290ZXIgc3RvcmU9e3N0b3JlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXg7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9kb0FwcCBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9IC8+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG5cbi8vIGNvbnN0IGFkZENvdW50ZXIgPSAobGlzdCkgPT4ge1xuLy8gICBsaXN0ID0gWy4uLmxpc3QsIDBdO1xuLy9cbi8vICAgcmV0dXJuIGxpc3Q7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHJlbW92ZUNvdW50ZXIgPSAobGlzdCwgaW5kZXgpID0+IHtcbi8vICAgbGlzdCA9IFtcbi8vICAgICAuLi5saXN0LnNsaWNlKDAsIGluZGV4KSxcbi8vICAgICAuLi5saXN0LnNsaWNlKGluZGV4ICsgMSlcbi8vICAgXTtcbi8vXG4vLyAgIHJldHVybiBsaXN0O1xuLy8gfTtcbi8vXG4vLyBjb25zdCBpbmNyZW1lbnRDb3VudGVyID0gKGxpc3QsIGluZGV4KSA9PiB7XG4vLyAgIGxpc3QgPSBbXG4vLyAgICAgLi4ubGlzdC5zbGljZSgwLCBpbmRleCksXG4vLyAgICAgbGlzdFtpbmRleF0gKyAxLFxuLy8gICAgIC4uLmxpc3Quc2xpY2UoaW5kZXggKyAxKVxuLy8gICBdO1xuLy9cbi8vICAgcmV0dXJuIGxpc3Q7XG4vLyB9O1xuLy9cbi8vIGNvbnN0IHRlc3RBZGRDb3VudGVyID0gKCkgPT4ge1xuLy8gICBjb25zdCBsaXN0QmVmb3JlID0gW107XG4vLyAgIGNvbnN0IGxpc3RBZnRlciA9IFswXTtcbi8vXG4vLyAgIGRlZXBGcmVlemUobGlzdEJlZm9yZSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgYWRkQ291bnRlcihsaXN0QmVmb3JlKVxuLy8gICApLnRvRXF1YWwobGlzdEFmdGVyKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgdGVzdFJlbW92ZUNvdW50ZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGxpc3RCZWZvcmUgPSBbMCwgMTAsIDIwXTtcbi8vICAgY29uc3QgbGlzdEFmdGVyID0gWzAsIDIwXTtcbi8vXG4vLyAgIGRlZXBGcmVlemUobGlzdEJlZm9yZSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgcmVtb3ZlQ291bnRlcihsaXN0QmVmb3JlLCAxKVxuLy8gICApLnRvRXF1YWwobGlzdEFmdGVyKTtcbi8vIH07XG4vL1xuLy8gY29uc3QgdGVzdEluY3JlbWVudENvdW50ZXIgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IGxpc3RCZWZvcmUgPSBbMCwgMTAsIDIwXTtcbi8vICAgY29uc3QgbGlzdEFmdGVyID0gWzAsIDExLCAyMF07XG4vL1xuLy8gICBkZWVwRnJlZXplKGxpc3RCZWZvcmUpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgIGluY3JlbWVudENvdW50ZXIobGlzdEJlZm9yZSwgMSlcbi8vICAgKS50b0VxdWFsKGxpc3RBZnRlcik7XG4vLyB9O1xuLy9cbi8vIHRlc3RBZGRDb3VudGVyKCk7XG4vLyB0ZXN0UmVtb3ZlQ291bnRlcigpO1xuLy8gdGVzdEluY3JlbWVudENvdW50ZXIoKTtcbi8vXG4vLyBjb25zb2xlLmxvZygnQWxsIHRlc3RzIHBhc3NlZC4nKVxuXG4vLyBzdGF0aWMgcnVuKCkge1xuLy8gICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuLy9cbi8vICAgY29uc3QgY291bnRlciA9IChzdGF0ZSA9IDAsIGFjdGlvbikgPT4ge1xuLy8gICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbi8vICAgICAgIGNhc2UgJ0lOQ1JFTUVOVCc6XG4vLyAgICAgICAgIHJldHVybiBzdGF0ZSArIDE7XG4vLyAgICAgICBjYXNlICdERUNSRU1FTlQnOlxuLy8gICAgICAgICByZXR1cm4gc3RhdGUgLSAxO1xuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIHN0YXRlO1xuLy8gICAgIH1cbi8vICAgfTtcbi8vXG4vLyAgIGNvbnN0IENvdW50ZXIgPSAoeyB2YWx1ZSwgb25JbmNyZW1lbnQsIG9uRGVjcmVtZW50IH0pID0+IChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGgxPnt2YWx1ZX08L2gxPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkluY3JlbWVudH0+KzwvYnV0dG9uPlxuLy8gICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkRlY3JlbWVudH0+LTwvYnV0dG9uPlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy9cbi8vICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gcmVkdXg7XG4vLyAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoY291bnRlcik7XG4vL1xuLy8gICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4vLyAgICAgUmVhY3RET00ucmVuZGVyKFxuLy8gICAgICAgPENvdW50ZXJcbi8vICAgICAgICAgdmFsdWU9e3N0b3JlLmdldFN0YXRlKCl9XG4vLyAgICAgICAgIG9uSW5jcmVtZW50PXsoKSA9PiB7XG4vLyAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuLy8gICAgICAgICAgICAgdHlwZTogJ0lOQ1JFTUVOVCdcbi8vICAgICAgICAgICB9KVxuLy8gICAgICAgICB9fVxuLy8gICAgICAgICBvbkRlY3JlbWVudD17KCkgPT4ge1xuLy8gICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbi8vICAgICAgICAgICAgIHR5cGU6ICdERUNSRU1FTlQnXG4vLyAgICAgICAgICAgfSlcbi8vICAgICAgICAgfX1cbi8vICAgICAgIC8+LFxuLy8gICAgICAgcm9vdERPTUVsZW1lbnRcbi8vICAgICApO1xuLy8gICB9O1xuLy9cbi8vICAgc3RvcmUuc3Vic2NyaWJlKHJlbmRlcik7XG4vL1xuLy8gICByZW5kZXIoKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMCwgeyB0eXBlOiAnSU5DUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ0lOQ1JFTUVOVCcgfSlcbi8vICAgKS50b0VxdWFsKDIpO1xuLy9cbi8vICAgZXhwZWN0KFxuLy8gICAgICAgY291bnRlcigyLCB7IHR5cGU6ICdERUNSRU1FTlQnIH0pXG4vLyAgICkudG9FcXVhbCgxKTtcbi8vXG4vLyAgIGV4cGVjdChcbi8vICAgICAgIGNvdW50ZXIoMSwgeyB0eXBlOiAnREVDUkVNRU5UJyB9KVxuLy8gICApLnRvRXF1YWwoMCk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKDEsIHsgdHlwZTogJ1NPTUVUSElOR19FTFNFJ30gKVxuLy8gICApLnRvRXF1YWwoMSk7XG4vL1xuLy8gICBleHBlY3QoXG4vLyAgICAgICBjb3VudGVyKHVuZGVmaW5lZCwge30pXG4vLyAgICkudG9FcXVhbCgwKTtcbi8vXG4vLyAgIGNvbnNvbGUubG9nKCdUZXN0cyBwYXNzZWQhJylcbi8vIH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFZhbmlsbGFBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB2YXIgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMubWVzc2FnZX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbW1lbnRzID0gdGhpcy5zdGF0ZS5tZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH07XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgICB9LCAxMDAwKTsgLy8vXG5cbiAgICAvLyB2YXIgRGl2ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIC8vICAgcmVuZGVyKCkge1xuICAgIC8vICAgICByZXR1cm4gPGRpdj57dGhpcy5zdGF0ZX08L2Rpdj47XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyB2YXIgZGl2ID0gPERpdj48L0Rpdj47XG4gICAgLy9cbiAgICAvLyBSZWFjdERPTS5yZW5kZXIoZGl2LCByb290RE9NRWxlbWVudCk7XG4gICAgLy9cbiAgICAvLyBkaXYuc2V0U3RhdGUoJyEhIScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFuaWxsYUFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpLFxuICBSZWFjdERPTTogcmVxdWlyZSgnLi9saWIvcmVhY3RET00nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWVPckRPTUVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSAodHlwZW9mIGRpc3BsYXlOYW1lT3JET01FbGVtZW50ID09PSAnc3RyaW5nJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCkgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZU9yRE9NRWxlbWVudDsgLy8vXG4gICAgXG4gICAgc3VwZXIoZG9tRWxlbWVudCk7XG4gICAgXG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICBzdXBlci5yZW1vdW50KHByZXZpb3VzU2libGluZyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KHRoaXMpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmFwcGx5UHJvcGVydGllcygpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIC8vL1xuICAgIFxuICAgIHN1cGVyLnJlbW92ZSgpO1xuICB9XG5cbiAgYXBwbHlQcm9wZXJ0aWVzKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICBwcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLFxuICAgICAgICAgIGF0dHJpYnV0ZU5hbWUsXG4gICAgICAgICAgYXR0cmlidXRlVmFsdWU7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHByb3BlcnR5TmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gcHJvcGVydHlWYWx1ZSwgLy8vXG4gICAgICAgICAgICByZWYgPSBkb21FbGVtZW50OyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHJlZilcbiAgICAgIH0gZWxzZSBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLCAgLy8vXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTsgIC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnRbaGFuZGxlck5hbWVdID0gaGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7IC8vL1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7IC8vL1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHlWYWx1ZSk7IC8vL1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHlWYWx1ZVtrZXldO1xuXG4gICAgICAgICAgZG9tRWxlbWVudFthdHRyaWJ1dGVOYW1lXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8vXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBhdHRyaWJ1dGVOYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgc3dpdGNoIChwcm9wZXJ0eU5hbWUpIHtcbiAgICBjYXNlICdjbGFzc05hbWUnOlxuICAgICAgcmV0dXJuICdjbGFzcyc7XG5cbiAgICBjYXNlICdodG1sRm9yJzpcbiAgICAgIHJldHVybiAnZm9yJztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eU5hbWU7ICAvLy9cbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGJlZ2luc1dpdGgoc3RyaW5nLCBiZWdpbm5pbmdTdHJpbmcpIHtcbiAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14nICsgYmVnaW5uaW5nU3RyaW5nKSxcbiAgICAgIG1hdGNoZXMgPSBzdHJpbmcubWF0Y2gocmVnRXhwKTtcblxuICByZXR1cm4gISFtYXRjaGVzOyAvLy9cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuICBcbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICBwcmV2aW91c1NpYmxpbmcuYXBwZW5kQWZ0ZXIodGhpcyk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBlbmQoY2hpbGQpIHtcbiAgICB2YXIgY2hpbGRET01FbGVtZW50ID0gY2hpbGQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHtcbiAgICB2YXIgcHJldmlvdXNTaWJsaW5nRE9NRWxlbWVudCA9IHByZXZpb3VzU2libGluZy5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUocHJldmlvdXNTaWJsaW5nRE9NRWxlbWVudCwgdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgd2hpbGUgKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cykge1xuICB2YXIgZmlyc3RSZW1haW5pbmdBcmd1bWVudCA9IGZpcnN0KHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgaWYgKGZpcnN0UmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cyA9IGZpcnN0UmVtYWluaW5nQXJndW1lbnQ7ICAvLy9cbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50OyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCwgIC8vL1xuICAgICAgICAgIGpzeFRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBjaGlsZCA9IGpzeFRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBKU1hEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICB9XG4gIFxuICBnZXREaXNwbGF5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5TmFtZTtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVuZGVyID0gcHJvcGVydGllc1sncmVuZGVyJ10gfHwgZGVmYXVsdFJlbmRlcixcbiAgICAgICAgZGlzcGxheU5hbWUgPSBwcm9wZXJ0aWVzWydkaXNwbGF5TmFtZSddIHx8IGRlZmF1bHREaXNwbGF5TmFtZSxcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gcHJvcGVydGllc1snZ2V0SW5pdGlhbFN0YXRlJ10gfHwgZGVmYXVsdEdldEluaXRpYWxTdGF0ZSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBwcm9wZXJ0aWVzWydjb21wb25lbnREaWRNb3VudCddIHx8IGRlZmF1bHRDb21wb25lbnREaWRNb3VudCxcbiAgICAgICAgcmVhY3RDbGFzcyA9IG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgY29tcG9uZW50RGlkTW91bnQpO1xuICAgIFxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcblxuZnVuY3Rpb24gZGVmYXVsdFJlbmRlcigpIHtcbiAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLnByb3BzLCAgLy8vXG4gICAgICBkaXNwbGF5TmFtZSA9IHRoaXMuZGlzcGxheU5hbWUsIC8vL1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuOyAvLy9cblxuICBkZWxldGUgcHJvcGVydGllcy5jaGlsZHJlbjsgLy8vXG5cbiAgdmFyIGpzeEVsZW1lbnQgPSBuZXcgSlNYRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICByZXR1cm4ganN4RWxlbWVudDtcbn1cblxuY29uc3QgZGVmYXVsdERpc3BsYXlOYW1lID0gdW5kZWZpbmVkOyAvLy9cblxuZnVuY3Rpb24gZGVmYXVsdEdldEluaXRpYWxTdGF0ZSgpIHtcbiAgdmFyIGluaXRpYWxTdGF0ZSA9IHt9O1xuXG4gIHJldHVybiBpbml0aWFsU3RhdGU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnREaWRNb3VudCgpIHtcbiAgXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcbiAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgc2V0U3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gc3RhdGU7XG5cbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDb21wb25lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENvbXBvbmVudEVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICBcbiAgICBcbiAgICBcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50ID0gcmVhY3RDb21wb25lbnQ7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgcGFyZW50RWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChwYXJlbnRET01FbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRFbGVtZW50LmVtcHR5KCk7XG5cbiAgICBlbGVtZW50Lm1vdW50KHBhcmVudEVsZW1lbnQpOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIGNvbnN0IHByb3BzID0gcHJvcGVydGllcyB8fCB7fSxcbiAgICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuZm9yY2VVcGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICB0aGlzLmluc3RhbmNlID0ge1xuICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlXG4gICAgfTtcbiAgfVxuICBcbiAgbW91bnQocGFyZW50KSB7XG4gICAgdmFyIGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gKGNoaWxkT3JDaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRPckNoaWxkcmVuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZE9yQ2hpbGRyZW5dO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChwYXJlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICB9XG5cbiAgcmVtb3VudChsYXN0UHJldmlvdXNDaGlsZCkge1xuICAgIHZhciBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgdmFyIHByZXZpb3VzU2libGluZyA9IGxhc3RQcmV2aW91c0NoaWxkOyAgLy8vXG5cbiAgICAgIGNoaWxkLnJlbW91bnQocHJldmlvdXNTaWJsaW5nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c0NoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiwgLy8vXG4gICAgICAgIGxhc3RQcmV2aW91c0NoaWxkID0gbGFzdChwcmV2aW91c0NoaWxkcmVuKTtcbiAgICBcbiAgICB0aGlzLnJlbW91bnQobGFzdFByZXZpb3VzQ2hpbGQpO1xuXG4gICAgcHJldmlvdXNDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHByZXZpb3VzQ2hpbGQpIHtcbiAgICAgIHByZXZpb3VzQ2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuICBcbiAgYXBwZW5kKHBhcmVudCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kKHBhcmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLmFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZyk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDFdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEZ1bmN0aW9uRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIFxuICAgIFxuICAgIFxuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHZhciBfcmVmID0gdGhpcy5pbnN0YW5jZS5wcm9wczsgLy8vL1xuXG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbihfcmVmKTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZXBGcmVlemUgKG8pIHtcbiAgT2JqZWN0LmZyZWV6ZShvKTtcblxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgaWYgKG8uaGFzT3duUHJvcGVydHkocHJvcClcbiAgICAmJiBvW3Byb3BdICE9PSBudWxsXG4gICAgJiYgKHR5cGVvZiBvW3Byb3BdID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgJiYgIU9iamVjdC5pc0Zyb3plbihvW3Byb3BdKSkge1xuICAgICAgZGVlcEZyZWV6ZShvW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIG87XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2lzRXF1YWwgPSByZXF1aXJlKCdpcy1lcXVhbCcpO1xuXG52YXIgX2lzRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFcXVhbCk7XG5cbnZhciBfaXNSZWdleCA9IHJlcXVpcmUoJ2lzLXJlZ2V4Jyk7XG5cbnZhciBfaXNSZWdleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1JlZ2V4KTtcblxudmFyIF9hc3NlcnQgPSByZXF1aXJlKCcuL2Fzc2VydCcpO1xuXG52YXIgX2Fzc2VydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnQpO1xuXG52YXIgX1NweVV0aWxzID0gcmVxdWlyZSgnLi9TcHlVdGlscycpO1xuXG52YXIgX1Rlc3RVdGlscyA9IHJlcXVpcmUoJy4vVGVzdFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxuICogQW4gRXhwZWN0YXRpb24gaXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBhc3NlcnRpb24gdGhhdCBhbGxvd3MgaXQgdG8gYmUgd3JpdHRlblxuICogaW4gYSBtb3JlIG5hdHVyYWwgc3R5bGUsIHdpdGhvdXQgdGhlIG5lZWQgdG8gcmVtZW1iZXIgdGhlIG9yZGVyIG9mIGFyZ3VtZW50cy5cbiAqIFRoaXMgaGVscHMgcHJldmVudCB5b3UgZnJvbSBtYWtpbmcgbWlzdGFrZXMgd2hlbiB3cml0aW5nIHRlc3RzLlxuICovXG5cbnZhciBFeHBlY3RhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXhwZWN0YXRpb24oYWN0dWFsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEV4cGVjdGF0aW9uKTtcblxuICAgIHRoaXMuYWN0dWFsID0gYWN0dWFsO1xuXG4gICAgaWYgKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKGFjdHVhbCkpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IG51bGw7XG4gICAgICB0aGlzLmFyZ3MgPSBbXTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXhwZWN0YXRpb24sIFt7XG4gICAga2V5OiAndG9FeGlzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvRXhpc3QobWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBleGlzdCcsIHRoaXMuYWN0dWFsKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RFeGlzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90RXhpc3QobWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCF0aGlzLmFjdHVhbCwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbm90IGV4aXN0JywgdGhpcy5hY3R1YWwpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsID09PSB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdEJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RCZSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsICE9PSB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbm90IGJlICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9FcXVhbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvRXF1YWwodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGVxdWFsICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gVGhlc2UgYXR0cmlidXRlcyBhcmUgY29uc3VtZWQgYnkgTW9jaGEgdG8gcHJvZHVjZSBhIGRpZmYgb3V0cHV0LlxuICAgICAgICBlLnNob3dEaWZmID0gdHJ1ZTtcbiAgICAgICAgZS5hY3R1YWwgPSB0aGlzLmFjdHVhbDtcbiAgICAgICAgZS5leHBlY3RlZCA9IHZhbHVlO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdEVxdWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RFcXVhbCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCEoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG5vdCBlcXVhbCAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvVGhyb3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1Rocm93KHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodGhpcy5hY3R1YWwpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9UaHJvdygpIG11c3QgYmUgYSBmdW5jdGlvbiwgJXMgd2FzIGdpdmVuJywgdGhpcy5hY3R1YWwpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuZnVuY3Rpb25UaHJvd3MpKHRoaXMuYWN0dWFsLCB0aGlzLmNvbnRleHQsIHRoaXMuYXJncywgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byB0aHJvdyAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSB8fCAnYW4gZXJyb3InKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RUaHJvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90VGhyb3codmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh0aGlzLmFjdHVhbCksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b05vdFRocm93KCkgbXVzdCBiZSBhIGZ1bmN0aW9uLCAlcyB3YXMgZ2l2ZW4nLCB0aGlzLmFjdHVhbCk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghKDAsIF9UZXN0VXRpbHMuZnVuY3Rpb25UaHJvd3MpKHRoaXMuYWN0dWFsLCB0aGlzLmNvbnRleHQsIHRoaXMuYXJncywgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBub3QgdGhyb3cgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUgfHwgJ2FuIGVycm9yJyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmVBJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZUEodmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9CZUEodmFsdWUpIG11c3QgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZycpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNBKSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBhICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RCZUEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdEJlQSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b05vdEJlQSh2YWx1ZSkgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghKDAsIF9UZXN0VXRpbHMuaXNBKSh0aGlzLmFjdHVhbCwgdmFsdWUpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBhICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9NYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTWF0Y2gocGF0dGVybiwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ3N0cmluZycsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b01hdGNoKCkgbXVzdCBiZSBhIHN0cmluZycpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9pc1JlZ2V4Mi5kZWZhdWx0KShwYXR0ZXJuKSwgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9NYXRjaCh2YWx1ZSkgbXVzdCBiZSBhIFJlZ0V4cCcpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkocGF0dGVybi50ZXN0KHRoaXMuYWN0dWFsKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbWF0Y2ggJXMnLCB0aGlzLmFjdHVhbCwgcGF0dGVybik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90TWF0Y2gnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdE1hdGNoKHBhdHRlcm4sIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdzdHJpbmcnLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9Ob3RNYXRjaCgpIG11c3QgYmUgYSBzdHJpbmcnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfaXNSZWdleDIuZGVmYXVsdCkocGF0dGVybiksICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvTm90TWF0Y2godmFsdWUpIG11c3QgYmUgYSBSZWdFeHAnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCFwYXR0ZXJuLnRlc3QodGhpcy5hY3R1YWwpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBub3QgbWF0Y2ggJXMnLCB0aGlzLmFjdHVhbCwgcGF0dGVybik7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmVMZXNzVGhhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmVMZXNzVGhhbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ251bWJlcicsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0JlTGVzc1RoYW4oKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b0JlTGVzc1RoYW4odmFsdWUpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsIDwgdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGxlc3MgdGhhbiAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmVMZXNzVGhhbk9yRXF1YWxUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmVMZXNzVGhhbk9yRXF1YWxUbyh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ251bWJlcicsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0JlTGVzc1RoYW5PckVxdWFsVG8oKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b0JlTGVzc1RoYW5PckVxdWFsVG8odmFsdWUpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsIDw9IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlR3JlYXRlclRoYW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlR3JlYXRlclRoYW4odmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdudW1iZXInLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9CZUdyZWF0ZXJUaGFuKCkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9CZUdyZWF0ZXJUaGFuKHZhbHVlKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCA+IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBncmVhdGVyIHRoYW4gJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0JlR3JlYXRlclRoYW5PckVxdWFsVG8nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlR3JlYXRlclRoYW5PckVxdWFsVG8odmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdudW1iZXInLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvKCkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9CZUdyZWF0ZXJUaGFuT3JFcXVhbFRvKHZhbHVlKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0aGlzLmFjdHVhbCA+PSB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9JbmNsdWRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9JbmNsdWRlKHZhbHVlLCBjb21wYXJlVmFsdWVzLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNBcnJheSkodGhpcy5hY3R1YWwpIHx8ICgwLCBfVGVzdFV0aWxzLmlzT2JqZWN0KSh0aGlzLmFjdHVhbCkgfHwgdHlwZW9mIHRoaXMuYWN0dWFsID09PSAnc3RyaW5nJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvSW5jbHVkZSgpIG11c3QgYmUgYW4gYXJyYXksIG9iamVjdCwgb3IgYSBzdHJpbmcnKTtcblxuICAgICAgaWYgKHR5cGVvZiBjb21wYXJlVmFsdWVzID09PSAnc3RyaW5nJykge1xuICAgICAgICBtZXNzYWdlID0gY29tcGFyZVZhbHVlcztcbiAgICAgICAgY29tcGFyZVZhbHVlcyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBpbmNsdWRlICVzJztcblxuICAgICAgaWYgKCgwLCBfVGVzdFV0aWxzLmlzQXJyYXkpKHRoaXMuYWN0dWFsKSkge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuYXJyYXlDb250YWlucykodGhpcy5hY3R1YWwsIHZhbHVlLCBjb21wYXJlVmFsdWVzKSwgbWVzc2FnZSwgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoKDAsIF9UZXN0VXRpbHMuaXNPYmplY3QpKHRoaXMuYWN0dWFsKSkge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMub2JqZWN0Q29udGFpbnMpKHRoaXMuYWN0dWFsLCB2YWx1ZSwgY29tcGFyZVZhbHVlcyksIG1lc3NhZ2UsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuc3RyaW5nQ29udGFpbnMpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvRXhjbHVkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvRXhjbHVkZSh2YWx1ZSwgY29tcGFyZVZhbHVlcywgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzQXJyYXkpKHRoaXMuYWN0dWFsKSB8fCB0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdzdHJpbmcnLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9FeGNsdWRlKCkgbXVzdCBiZSBhbiBhcnJheSBvciBhIHN0cmluZycpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbXBhcmVWYWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBjb21wYXJlVmFsdWVzO1xuICAgICAgICBjb21wYXJlVmFsdWVzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGV4Y2x1ZGUgJXMnO1xuXG4gICAgICBpZiAoKDAsIF9UZXN0VXRpbHMuaXNBcnJheSkodGhpcy5hY3R1YWwpKSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghKDAsIF9UZXN0VXRpbHMuYXJyYXlDb250YWlucykodGhpcy5hY3R1YWwsIHZhbHVlLCBjb21wYXJlVmFsdWVzKSwgbWVzc2FnZSwgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSghKDAsIF9UZXN0VXRpbHMuc3RyaW5nQ29udGFpbnMpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvSGF2ZUJlZW5DYWxsZWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0hhdmVCZWVuQ2FsbGVkKG1lc3NhZ2UpIHtcbiAgICAgIHZhciBzcHkgPSB0aGlzLmFjdHVhbDtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfU3B5VXRpbHMuaXNTcHkpKHNweSksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0hhdmVCZWVuQ2FsbGVkKCkgbXVzdCBiZSBhIHNweScpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoc3B5LmNhbGxzLmxlbmd0aCA+IDAsIG1lc3NhZ2UgfHwgJ3NweSB3YXMgbm90IGNhbGxlZCcpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0hhdmVCZWVuQ2FsbGVkV2l0aCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGF2ZUJlZW5DYWxsZWRXaXRoKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV4cGVjdGVkQXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBleHBlY3RlZEFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBzcHkgPSB0aGlzLmFjdHVhbDtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfU3B5VXRpbHMuaXNTcHkpKHNweSksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCgpIG11c3QgYmUgYSBzcHknKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHNweS5jYWxscy5zb21lKGZ1bmN0aW9uIChjYWxsKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2lzRXF1YWwyLmRlZmF1bHQpKGNhbGwuYXJndW1lbnRzLCBleHBlY3RlZEFyZ3MpO1xuICAgICAgfSksICdzcHkgd2FzIG5ldmVyIGNhbGxlZCB3aXRoICVzJywgZXhwZWN0ZWRBcmdzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RIYXZlQmVlbkNhbGxlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90SGF2ZUJlZW5DYWxsZWQobWVzc2FnZSkge1xuICAgICAgdmFyIHNweSA9IHRoaXMuYWN0dWFsO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9TcHlVdGlscy5pc1NweSkoc3B5KSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvTm90SGF2ZUJlZW5DYWxsZWQoKSBtdXN0IGJlIGEgc3B5Jyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KShzcHkuY2FsbHMubGVuZ3RoID09PSAwLCBtZXNzYWdlIHx8ICdzcHkgd2FzIG5vdCBzdXBwb3NlZCB0byBiZSBjYWxsZWQnKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd2l0aENvbnRleHQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoQ29udGV4dChjb250ZXh0KSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodGhpcy5hY3R1YWwpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkud2l0aENvbnRleHQoKSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd2l0aEFyZ3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aXRoQXJncygpIHtcbiAgICAgIHZhciBfYXJncztcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHRoaXMuYWN0dWFsKSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLndpdGhBcmdzKCkgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB0aGlzLmFyZ3MgPSAoX2FyZ3MgPSB0aGlzLmFyZ3MpLmNvbmNhdC5hcHBseShfYXJncywgYXJndW1lbnRzKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEV4cGVjdGF0aW9uO1xufSgpO1xuXG52YXIgYWxpYXNlcyA9IHtcbiAgdG9CZUFuOiAndG9CZUEnLFxuICB0b05vdEJlQW46ICd0b05vdEJlQScsXG4gIHRvQmVUcnV0aHk6ICd0b0V4aXN0JyxcbiAgdG9CZUZhbHN5OiAndG9Ob3RFeGlzdCcsXG4gIHRvQmVGZXdlclRoYW46ICd0b0JlTGVzc1RoYW4nLFxuICB0b0JlTW9yZVRoYW46ICd0b0JlR3JlYXRlclRoYW4nLFxuICB0b0NvbnRhaW46ICd0b0luY2x1ZGUnLFxuICB0b05vdENvbnRhaW46ICd0b0V4Y2x1ZGUnXG59O1xuXG5mb3IgKHZhciBhbGlhcyBpbiBhbGlhc2VzKSB7XG4gIGlmIChhbGlhc2VzLmhhc093blByb3BlcnR5KGFsaWFzKSkgRXhwZWN0YXRpb24ucHJvdG90eXBlW2FsaWFzXSA9IEV4cGVjdGF0aW9uLnByb3RvdHlwZVthbGlhc2VzW2FsaWFzXV07XG59ZXhwb3J0cy5kZWZhdWx0ID0gRXhwZWN0YXRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXN0b3JlU3BpZXMgPSBleHBvcnRzLmlzU3B5ID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5jcmVhdGVTcHkgPSBjcmVhdGVTcHk7XG5leHBvcnRzLnNweU9uID0gc3B5T247XG5cbnZhciBfYXNzZXJ0ID0gcmVxdWlyZSgnLi9hc3NlcnQnKTtcblxudmFyIF9hc3NlcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0KTtcblxudmFyIF9UZXN0VXRpbHMgPSByZXF1aXJlKCcuL1Rlc3RVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItcmVzdC1wYXJhbXMgKi9cblxuXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIGlzU3B5ID0gZXhwb3J0cy5pc1NweSA9IGZ1bmN0aW9uIGlzU3B5KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fX2lzU3B5ID09PSB0cnVlO1xufTtcblxudmFyIHNwaWVzID0gW107XG5cbnZhciByZXN0b3JlU3BpZXMgPSBleHBvcnRzLnJlc3RvcmVTcGllcyA9IGZ1bmN0aW9uIHJlc3RvcmVTcGllcygpIHtcbiAgZm9yICh2YXIgaSA9IHNwaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgc3BpZXNbaV0ucmVzdG9yZSgpO1xuICB9c3BpZXMgPSBbXTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNweShmbikge1xuICB2YXIgcmVzdG9yZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IG5vb3AgOiBhcmd1bWVudHNbMV07XG5cbiAgaWYgKGZuID09IG51bGwpIGZuID0gbm9vcDtcblxuICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikoZm4pLCAnY3JlYXRlU3B5IG5lZWRzIGEgZnVuY3Rpb24nKTtcblxuICB2YXIgdGFyZ2V0Rm4gPSB2b2lkIDAsXG4gICAgICB0aHJvd25WYWx1ZSA9IHZvaWQgMCxcbiAgICAgIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gIHZhciBzcHkgPSBmdW5jdGlvbiBzcHkoKSB7XG4gICAgc3B5LmNhbGxzLnB1c2goe1xuICAgICAgY29udGV4dDogdGhpcyxcbiAgICAgIGFyZ3VtZW50czogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxuICAgIH0pO1xuXG4gICAgaWYgKHRhcmdldEZuKSByZXR1cm4gdGFyZ2V0Rm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIGlmICh0aHJvd25WYWx1ZSkgdGhyb3cgdGhyb3duVmFsdWU7XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgc3B5LmNhbGxzID0gW107XG5cbiAgc3B5LmFuZENhbGwgPSBmdW5jdGlvbiAob3RoZXJGbikge1xuICAgIHRhcmdldEZuID0gb3RoZXJGbjtcbiAgICByZXR1cm4gc3B5O1xuICB9O1xuXG4gIHNweS5hbmRDYWxsVGhyb3VnaCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gc3B5LmFuZENhbGwoZm4pO1xuICB9O1xuXG4gIHNweS5hbmRUaHJvdyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB0aHJvd25WYWx1ZSA9IG9iamVjdDtcbiAgICByZXR1cm4gc3B5O1xuICB9O1xuXG4gIHNweS5hbmRSZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm5WYWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiBzcHk7XG4gIH07XG5cbiAgc3B5LmdldExhc3RDYWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzcHkuY2FsbHNbc3B5LmNhbGxzLmxlbmd0aCAtIDFdO1xuICB9O1xuXG4gIHNweS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICBzcHkuY2FsbHMgPSBbXTtcbiAgfTtcblxuICBzcHkucmVzdG9yZSA9IHNweS5kZXN0cm95ID0gcmVzdG9yZTtcblxuICBzcHkuX19pc1NweSA9IHRydWU7XG5cbiAgc3BpZXMucHVzaChzcHkpO1xuXG4gIHJldHVybiBzcHk7XG59XG5cbmZ1bmN0aW9uIHNweU9uKG9iamVjdCwgbWV0aG9kTmFtZSkge1xuICB2YXIgb3JpZ2luYWwgPSBvYmplY3RbbWV0aG9kTmFtZV07XG5cbiAgaWYgKCFpc1NweShvcmlnaW5hbCkpIHtcbiAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikob3JpZ2luYWwpLCAnQ2Fubm90IHNweU9uIHRoZSAlcyBwcm9wZXJ0eTsgaXQgaXMgbm90IGEgZnVuY3Rpb24nLCBtZXRob2ROYW1lKTtcblxuICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGNyZWF0ZVNweShvcmlnaW5hbCwgZnVuY3Rpb24gKCkge1xuICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gb3JpZ2luYWw7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0W21ldGhvZE5hbWVdO1xufSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3RyaW5nQ29udGFpbnMgPSBleHBvcnRzLm9iamVjdENvbnRhaW5zID0gZXhwb3J0cy5hcnJheUNvbnRhaW5zID0gZXhwb3J0cy5mdW5jdGlvblRocm93cyA9IGV4cG9ydHMuaXNBID0gZXhwb3J0cy5pc09iamVjdCA9IGV4cG9ydHMuaXNBcnJheSA9IGV4cG9ydHMuaXNGdW5jdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfaXNFcXVhbCA9IHJlcXVpcmUoJ2lzLWVxdWFsJyk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VxdWFsKTtcblxudmFyIF9pc1JlZ2V4ID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxudmFyIF9pc1JlZ2V4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVnZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGEgZnVuY3Rpb24uXG4gKi9cbnZhciBpc0Z1bmN0aW9uID0gZXhwb3J0cy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIGFycmF5LlxuICovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkob2JqZWN0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KG9iamVjdCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGFuIG9iamVjdC5cbiAqL1xudmFyIGlzT2JqZWN0ID0gZXhwb3J0cy5pc09iamVjdCA9IGZ1bmN0aW9uIGlzT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICYmICFpc0FycmF5KG9iamVjdCkgJiYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iamVjdCkpID09PSAnb2JqZWN0Jztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gaW5zdGFuY2VvZiB2YWx1ZVxuICogb3IgaXRzIHR5cGVvZiBpcyB0aGUgZ2l2ZW4gdmFsdWUuXG4gKi9cbnZhciBpc0EgPSBleHBvcnRzLmlzQSA9IGZ1bmN0aW9uIGlzQShvYmplY3QsIHZhbHVlKSB7XG4gIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHZhbHVlO1xuXG4gIGlmICh2YWx1ZSA9PT0gJ2FycmF5JykgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqZWN0KTtcblxuICByZXR1cm4gKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9iamVjdCkpID09PSB2YWx1ZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBmdW5jdGlvbiB0aHJvd3MgdGhlIGdpdmVuIHZhbHVlXG4gKiB3aGVuIGludm9rZWQuIFRoZSB2YWx1ZSBtYXkgYmU6XG4gKlxuICogLSB1bmRlZmluZWQsIHRvIG1lcmVseSBhc3NlcnQgdGhlcmUgd2FzIGEgdGhyb3dcbiAqIC0gYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgZm9yIGNvbXBhcmluZyB1c2luZyBpbnN0YW5jZW9mXG4gKiAtIGEgcmVndWxhciBleHByZXNzaW9uLCB0byBjb21wYXJlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2VcbiAqIC0gYSBzdHJpbmcsIHRvIGZpbmQgaW4gdGhlIGVycm9yIG1lc3NhZ2VcbiAqL1xudmFyIGZ1bmN0aW9uVGhyb3dzID0gZXhwb3J0cy5mdW5jdGlvblRocm93cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uVGhyb3dzKGZuLCBjb250ZXh0LCBhcmdzLCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSAmJiBlcnJvciBpbnN0YW5jZW9mIHZhbHVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHZhciBtZXNzYWdlID0gZXJyb3IubWVzc2FnZSB8fCBlcnJvcjtcblxuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICgoMCwgX2lzUmVnZXgyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS50ZXN0KGVycm9yLm1lc3NhZ2UpKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBhcnJheSBjb250YWlucyB0aGUgdmFsdWUsIGZhbHNlXG4gKiBvdGhlcndpc2UuIFRoZSBjb21wYXJlVmFsdWVzIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGZhbHNlIHRvXG4gKiBpbmRpY2F0ZSBhIG5vbi1tYXRjaC5cbiAqL1xudmFyIGFycmF5Q29udGFpbnMgPSBleHBvcnRzLmFycmF5Q29udGFpbnMgPSBmdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFycmF5LCB2YWx1ZSwgY29tcGFyZVZhbHVlcykge1xuICBpZiAoY29tcGFyZVZhbHVlcyA9PSBudWxsKSBjb21wYXJlVmFsdWVzID0gX2lzRXF1YWwyLmRlZmF1bHQ7XG5cbiAgcmV0dXJuIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICByZXR1cm4gY29tcGFyZVZhbHVlcyhpdGVtLCB2YWx1ZSkgIT09IGZhbHNlO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgY29udGFpbnMgdGhlIHZhbHVlLCBmYWxzZVxuICogb3RoZXJ3aXNlLiBUaGUgY29tcGFyZVZhbHVlcyBmdW5jdGlvbiBtdXN0IHJldHVybiBmYWxzZSB0b1xuICogaW5kaWNhdGUgYSBub24tbWF0Y2guXG4gKi9cbnZhciBvYmplY3RDb250YWlucyA9IGV4cG9ydHMub2JqZWN0Q29udGFpbnMgPSBmdW5jdGlvbiBvYmplY3RDb250YWlucyhvYmplY3QsIHZhbHVlLCBjb21wYXJlVmFsdWVzKSB7XG4gIGlmIChjb21wYXJlVmFsdWVzID09IG51bGwpIGNvbXBhcmVWYWx1ZXMgPSBfaXNFcXVhbDIuZGVmYXVsdDtcblxuICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmV2ZXJ5KGZ1bmN0aW9uIChrKSB7XG4gICAgaWYgKGlzT2JqZWN0KG9iamVjdFtrXSkpIHtcbiAgICAgIHJldHVybiBvYmplY3RDb250YWlucyhvYmplY3Rba10sIHZhbHVlW2tdLCBjb21wYXJlVmFsdWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZVZhbHVlcyhvYmplY3Rba10sIHZhbHVlW2tdKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gc3RyaW5nIGNvbnRhaW5zIHRoZSB2YWx1ZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG52YXIgc3RyaW5nQ29udGFpbnMgPSBleHBvcnRzLnN0cmluZ0NvbnRhaW5zID0gZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyaW5nLCB2YWx1ZSkge1xuICByZXR1cm4gc3RyaW5nLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX29iamVjdEluc3BlY3QgPSByZXF1aXJlKCdvYmplY3QtaW5zcGVjdCcpO1xuXG52YXIgX29iamVjdEluc3BlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0SW5zcGVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2VGb3JtYXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV4dHJhQXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBleHRyYUFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGNvbmRpdGlvbikgcmV0dXJuO1xuXG4gIHZhciBpbmRleCA9IDA7XG5cbiAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2VGb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX29iamVjdEluc3BlY3QyLmRlZmF1bHQpKGV4dHJhQXJnc1tpbmRleCsrXSk7XG4gIH0pKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gYXNzZXJ0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9FeHBlY3RhdGlvbiA9IHJlcXVpcmUoJy4vRXhwZWN0YXRpb24nKTtcblxudmFyIF9FeHBlY3RhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FeHBlY3RhdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBFeHRlbnNpb25zID0gW107XG5cbmZ1bmN0aW9uIGV4dGVuZChleHRlbnNpb24pIHtcbiAgaWYgKEV4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID09PSAtMSkge1xuICAgIEV4dGVuc2lvbnMucHVzaChleHRlbnNpb24pO1xuXG4gICAgZm9yICh2YXIgcCBpbiBleHRlbnNpb24pIHtcbiAgICAgIGlmIChleHRlbnNpb24uaGFzT3duUHJvcGVydHkocCkpIF9FeHBlY3RhdGlvbjIuZGVmYXVsdC5wcm90b3R5cGVbcF0gPSBleHRlbnNpb25bcF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGV4dGVuZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfRXhwZWN0YXRpb24gPSByZXF1aXJlKCcuL0V4cGVjdGF0aW9uJyk7XG5cbnZhciBfRXhwZWN0YXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRXhwZWN0YXRpb24pO1xuXG52YXIgX1NweVV0aWxzID0gcmVxdWlyZSgnLi9TcHlVdGlscycpO1xuXG52YXIgX2Fzc2VydCA9IHJlcXVpcmUoJy4vYXNzZXJ0Jyk7XG5cbnZhciBfYXNzZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydCk7XG5cbnZhciBfZXh0ZW5kID0gcmVxdWlyZSgnLi9leHRlbmQnKTtcblxudmFyIF9leHRlbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZXhwZWN0KGFjdHVhbCkge1xuICByZXR1cm4gbmV3IF9FeHBlY3RhdGlvbjIuZGVmYXVsdChhY3R1YWwpO1xufVxuXG5leHBlY3QuY3JlYXRlU3B5ID0gX1NweVV0aWxzLmNyZWF0ZVNweTtcbmV4cGVjdC5zcHlPbiA9IF9TcHlVdGlscy5zcHlPbjtcbmV4cGVjdC5pc1NweSA9IF9TcHlVdGlscy5pc1NweTtcbmV4cGVjdC5yZXN0b3JlU3BpZXMgPSBfU3B5VXRpbHMucmVzdG9yZVNwaWVzO1xuZXhwZWN0LmFzc2VydCA9IF9hc3NlcnQyLmRlZmF1bHQ7XG5leHBlY3QuZXh0ZW5kID0gX2V4dGVuZDIuZGVmYXVsdDtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBlY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIG1hcEZvckVhY2ggPSAoZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgTWFwICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dHJ5IHtcblx0XHRcdE1hcC5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHt9LCBmdW5jdGlvbiAoKSB7fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIE1hcC5wcm90b3R5cGUuZm9yRWFjaDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0oKSk7XG5cblx0dmFyIHNldEZvckVhY2ggPSAoZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgU2V0ICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBudWxsOyB9XG5cdFx0dHJ5IHtcblx0XHRcdFNldC5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHt9LCBmdW5jdGlvbiAoKSB7fSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIFNldC5wcm90b3R5cGUuZm9yRWFjaDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0oKSk7XG5cblx0cmV0dXJuIHsgTWFwOiBtYXBGb3JFYWNoLCBTZXQ6IHNldEZvckVhY2ggfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2lzLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldFN5bWJvbEl0ZXJhdG9yKCkge1xuXHR2YXIgc3ltYm9sSXRlcmF0b3IgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcikgPyBTeW1ib2wuaXRlcmF0b3IgOiBudWxsO1xuXG5cdGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTWFwLnByb3RvdHlwZSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuXHRcdFx0aWYgKG5hbWUgIT09ICdlbnRyaWVzJyAmJiBuYW1lICE9PSAnc2l6ZScgJiYgTWFwLnByb3RvdHlwZVtuYW1lXSA9PT0gTWFwLnByb3RvdHlwZS5lbnRyaWVzKSB7XG5cdFx0XHRcdHN5bWJvbEl0ZXJhdG9yID0gbmFtZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiBzeW1ib2xJdGVyYXRvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aHlOb3RFcXVhbCA9IHJlcXVpcmUoJy4vd2h5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcblx0cmV0dXJuIHdoeU5vdEVxdWFsKHZhbHVlLCBvdGhlcikgPT09ICcnO1xufTtcbiIsInZhciBFUlJPUl9NRVNTQUdFID0gJ0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kIGNhbGxlZCBvbiBpbmNvbXBhdGlibGUgJztcbnZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZnVuY1R5cGUgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQodGhhdCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHRvU3RyLmNhbGwodGFyZ2V0KSAhPT0gZnVuY1R5cGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihFUlJPUl9NRVNTQUdFICsgdGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICB2YXIgYm91bmQ7XG4gICAgdmFyIGJpbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBib3VuZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KHJlc3VsdCkgPT09IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhhdCxcbiAgICAgICAgICAgICAgICBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBib3VuZExlbmd0aCA9IE1hdGgubWF4KDAsIHRhcmdldC5sZW5ndGggLSBhcmdzLmxlbmd0aCk7XG4gICAgdmFyIGJvdW5kQXJncyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm91bmRMZW5ndGg7IGkrKykge1xuICAgICAgICBib3VuZEFyZ3MucHVzaCgnJCcgKyBpKTtcbiAgICB9XG5cbiAgICBib3VuZCA9IEZ1bmN0aW9uKCdiaW5kZXInLCAncmV0dXJuIGZ1bmN0aW9uICgnICsgYm91bmRBcmdzLmpvaW4oJywnKSArICcpeyByZXR1cm4gYmluZGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTsgfScpKGJpbmRlcik7XG5cbiAgICBpZiAodGFyZ2V0LnByb3RvdHlwZSkge1xuICAgICAgICB2YXIgRW1wdHkgPSBmdW5jdGlvbiBFbXB0eSgpIHt9O1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSB0YXJnZXQucHJvdG90eXBlO1xuICAgICAgICBib3VuZC5wcm90b3R5cGUgPSBuZXcgRW1wdHkoKTtcbiAgICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYm91bmQ7XG59O1xuIiwidmFyIGltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi9pbXBsZW1lbnRhdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kIHx8IGltcGxlbWVudGF0aW9uO1xuIiwidmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBpc05vbkFycm93Rm5SZWdleCA9IC9eXFxzKmZ1bmN0aW9uLztcbnZhciBpc0Fycm93Rm5XaXRoUGFyZW5zUmVnZXggPSAvXlxcKFteXFwpXSpcXCkgKj0+LztcbnZhciBpc0Fycm93Rm5XaXRob3V0UGFyZW5zUmVnZXggPSAvXltePV0qPT4vO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQXJyb3dGdW5jdGlvbihmbikge1xuXHRpZiAoIWlzQ2FsbGFibGUoZm4pKSB7IHJldHVybiBmYWxzZTsgfVxuXHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwoZm4pO1xuXHRyZXR1cm4gZm5TdHIubGVuZ3RoID4gMCAmJlxuXHRcdCFpc05vbkFycm93Rm5SZWdleC50ZXN0KGZuU3RyKSAmJlxuXHRcdChpc0Fycm93Rm5XaXRoUGFyZW5zUmVnZXgudGVzdChmblN0cikgfHwgaXNBcnJvd0ZuV2l0aG91dFBhcmVuc1JlZ2V4LnRlc3QoZm5TdHIpKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBib29sVG9TdHIgPSBCb29sZWFuLnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIHRyeUJvb2xlYW5PYmplY3QgPSBmdW5jdGlvbiB0cnlCb29sZWFuT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0Ym9vbFRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBib29sQ2xhc3MgPSAnW29iamVjdCBCb29sZWFuXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeUJvb2xlYW5PYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGJvb2xDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgY29uc3RydWN0b3JSZWdleCA9IC9eXFxzKmNsYXNzIC87XG52YXIgaXNFUzZDbGFzc0ZuID0gZnVuY3Rpb24gaXNFUzZDbGFzc0ZuKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0dmFyIGZuU3RyID0gZm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHR2YXIgc2luZ2xlU3RyaXBwZWQgPSBmblN0ci5yZXBsYWNlKC9cXC9cXC8uKlxcbi9nLCAnJyk7XG5cdFx0dmFyIG11bHRpU3RyaXBwZWQgPSBzaW5nbGVTdHJpcHBlZC5yZXBsYWNlKC9cXC9cXCpbLlxcc1xcU10qXFwqXFwvL2csICcnKTtcblx0XHR2YXIgc3BhY2VTdHJpcHBlZCA9IG11bHRpU3RyaXBwZWQucmVwbGFjZSgvXFxuL21nLCAnICcpLnJlcGxhY2UoLyB7Mn0vZywgJyAnKTtcblx0XHRyZXR1cm4gY29uc3RydWN0b3JSZWdleC50ZXN0KHNwYWNlU3RyaXBwZWQpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlOyAvLyBub3QgYSBmdW5jdGlvblxuXHR9XG59O1xuXG52YXIgdHJ5RnVuY3Rpb25PYmplY3QgPSBmdW5jdGlvbiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdGZuVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuQ2xhc3MgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xudmFyIGdlbkNsYXNzID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYWxsYWJsZSh2YWx1ZSkge1xuXHRpZiAoIXZhbHVlKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChoYXNUb1N0cmluZ1RhZykgeyByZXR1cm4gdHJ5RnVuY3Rpb25PYmplY3QodmFsdWUpOyB9XG5cdGlmIChpc0VTNkNsYXNzRm4odmFsdWUpKSB7IHJldHVybiBmYWxzZTsgfVxuXHR2YXIgc3RyQ2xhc3MgPSB0b1N0ci5jYWxsKHZhbHVlKTtcblx0cmV0dXJuIHN0ckNsYXNzID09PSBmbkNsYXNzIHx8IHN0ckNsYXNzID09PSBnZW5DbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXREYXkgPSBEYXRlLnByb3RvdHlwZS5nZXREYXk7XG52YXIgdHJ5RGF0ZU9iamVjdCA9IGZ1bmN0aW9uIHRyeURhdGVPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRnZXREYXkuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGF0ZUNsYXNzID0gJ1tvYmplY3QgRGF0ZV0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0RhdGVPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgdmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeURhdGVPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IGRhdGVDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5Ub1N0ciA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcbnZhciBpc0ZuUmVnZXggPSAvXlxccypmdW5jdGlvblxcKi87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbihmbikge1xuXHRpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHR2YXIgZm5TdHIgPSB0b1N0ci5jYWxsKGZuKTtcblx0cmV0dXJuIChmblN0ciA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJyB8fCBmblN0ciA9PT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJykgJiYgaXNGblJlZ2V4LnRlc3QoZm5Ub1N0ci5jYWxsKGZuKSk7XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1Ub1N0ciA9IE51bWJlci5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgdHJ5TnVtYmVyT2JqZWN0ID0gZnVuY3Rpb24gdHJ5TnVtYmVyT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0bnVtVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIG51bUNsYXNzID0gJ1tvYmplY3QgTnVtYmVyXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzTnVtYmVyT2JqZWN0KHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7IHJldHVybiB0cnVlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlOdW1iZXJPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IG51bUNsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHN0clZhbHVlID0gU3RyaW5nLnByb3RvdHlwZS52YWx1ZU9mO1xudmFyIHRyeVN0cmluZ09iamVjdCA9IGZ1bmN0aW9uIHRyeVN0cmluZ09iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdHN0clZhbHVlLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBzdHJDbGFzcyA9ICdbb2JqZWN0IFN0cmluZ10nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5U3RyaW5nT2JqZWN0KHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSBzdHJDbGFzcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaGFzU3ltYm9scyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbCgpID09PSAnc3ltYm9sJztcblxuaWYgKGhhc1N5bWJvbHMpIHtcblx0dmFyIHN5bVRvU3RyID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZztcblx0dmFyIHN5bVN0cmluZ1JlZ2V4ID0gL15TeW1ib2xcXCguKlxcKSQvO1xuXHR2YXIgaXNTeW1ib2xPYmplY3QgPSBmdW5jdGlvbiBpc1N5bWJvbE9iamVjdCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUudmFsdWVPZigpICE9PSAnc3ltYm9sJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHRyZXR1cm4gc3ltU3RyaW5nUmVnZXgudGVzdChzeW1Ub1N0ci5jYWxsKHZhbHVlKSk7XG5cdH07XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdGlmICh0b1N0ci5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0dHJ5IHtcblx0XHRcdHJldHVybiBpc1N5bWJvbE9iamVjdCh2YWx1ZSk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn0gZWxzZSB7XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcblx0XHQvLyB0aGlzIGVudmlyb25tZW50IGRvZXMgbm90IHN1cHBvcnQgU3ltYm9scy5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xudmFyIHRvU3RyID0gT2JqZWN0UHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGJvb2xlYW5WYWx1ZSA9IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgaGFzID0gcmVxdWlyZSgnaGFzJyk7XG52YXIgaXNBcnJvd0Z1bmN0aW9uID0gcmVxdWlyZSgnaXMtYXJyb3ctZnVuY3Rpb24nKTtcbnZhciBpc0Jvb2xlYW4gPSByZXF1aXJlKCdpcy1ib29sZWFuLW9iamVjdCcpO1xudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2lzLWRhdGUtb2JqZWN0Jyk7XG52YXIgaXNHZW5lcmF0b3IgPSByZXF1aXJlKCdpcy1nZW5lcmF0b3ItZnVuY3Rpb24nKTtcbnZhciBpc051bWJlciA9IHJlcXVpcmUoJ2lzLW51bWJlci1vYmplY3QnKTtcbnZhciBpc1JlZ2V4ID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJ2lzLXN0cmluZycpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJ2lzLWNhbGxhYmxlJyk7XG5cbnZhciBpc1Byb3RvID0gT2JqZWN0LnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mO1xuXG52YXIgZm9vID0gZnVuY3Rpb24gZm9vKCkge307XG52YXIgZnVuY3Rpb25zSGF2ZU5hbWVzID0gZm9vLm5hbWUgPT09ICdmb28nO1xuXG52YXIgc3ltYm9sVmFsdWUgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nID8gU3ltYm9sLnByb3RvdHlwZS52YWx1ZU9mIDogbnVsbDtcbnZhciBzeW1ib2xJdGVyYXRvciA9IHJlcXVpcmUoJy4vZ2V0U3ltYm9sSXRlcmF0b3InKSgpO1xuXG52YXIgY29sbGVjdGlvbnNGb3JFYWNoID0gcmVxdWlyZSgnLi9nZXRDb2xsZWN0aW9uc0ZvckVhY2gnKSgpO1xuXG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5pZiAoIWdldFByb3RvdHlwZU9mKSB7XG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cdGlmICh0eXBlb2YgJ3Rlc3QnLl9fcHJvdG9fXyA9PT0gJ29iamVjdCcpIHtcblx0XHRnZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdHJldHVybiBvYmouX19wcm90b19fO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0Z2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiAob2JqKSB7XG5cdFx0XHR2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3IsXG5cdFx0XHRcdG9sZENvbnN0cnVjdG9yO1xuXHRcdFx0aWYgKGhhcyhvYmosICdjb25zdHJ1Y3RvcicpKSB7XG5cdFx0XHRcdG9sZENvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG5cdFx0XHRcdGlmICghKGRlbGV0ZSBvYmouY29uc3RydWN0b3IpKSB7IC8vIHJlc2V0IGNvbnN0cnVjdG9yXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7IC8vIGNhbid0IGRlbGV0ZSBvYmouY29uc3RydWN0b3IsIHJldHVybiBudWxsXG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7IC8vIGdldCByZWFsIGNvbnN0cnVjdG9yXG5cdFx0XHRcdG9iai5jb25zdHJ1Y3RvciA9IG9sZENvbnN0cnVjdG9yOyAvLyByZXN0b3JlIGNvbnN0cnVjdG9yXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29uc3RydWN0b3IgPyBjb25zdHJ1Y3Rvci5wcm90b3R5cGUgOiBPYmplY3RQcm90b3R5cGU7IC8vIG5lZWRlZCBmb3IgSUVcblx0XHR9O1xuXHR9XG5cdC8qIGVzbGludC1lbmFibGUgbm8tcHJvdG8gKi9cbn1cblxudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gdG9TdHIuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgbm9ybWFsaXplRm5XaGl0ZXNwYWNlID0gZnVuY3Rpb24gbm9ybWFsaXplRm5XaGl0ZXNwYWNlKGZuU3RyKSB7XG5cdC8vIHRoaXMgaXMgbmVlZGVkIGluIElFIDksIGF0IGxlYXN0LCB3aGljaCBoYXMgaW5jb25zaXN0ZW5jaWVzIGhlcmUuXG5cdHJldHVybiBmblN0ci5yZXBsYWNlKC9eZnVuY3Rpb24gP1xcKC8sICdmdW5jdGlvbiAoJykucmVwbGFjZSgnKXsnLCAnKSB7Jyk7XG59O1xuXG52YXIgdHJ5TWFwU2V0RW50cmllcyA9IGZ1bmN0aW9uIHRyeU1hcFNldEVudHJpZXMoY29sbGVjdGlvbikge1xuXHR2YXIgZm91bmRFbnRyaWVzID0gW107XG5cdHRyeSB7XG5cdFx0Y29sbGVjdGlvbnNGb3JFYWNoLk1hcC5jYWxsKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRmb3VuZEVudHJpZXMucHVzaChba2V5LCB2YWx1ZV0pO1xuXHRcdH0pO1xuXHR9IGNhdGNoIChub3RNYXApIHtcblx0XHR0cnkge1xuXHRcdFx0Y29sbGVjdGlvbnNGb3JFYWNoLlNldC5jYWxsKGNvbGxlY3Rpb24sIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdFx0XHRmb3VuZEVudHJpZXMucHVzaChbdmFsdWVdKTtcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2ggKG5vdFNldCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZm91bmRFbnRyaWVzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB3aHlOb3RFcXVhbCh2YWx1ZSwgb3RoZXIpIHtcblx0aWYgKHZhbHVlID09PSBvdGhlcikgeyByZXR1cm4gJyc7IH1cblx0aWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCkge1xuXHRcdHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgPyAnJyA6IFN0cmluZyh2YWx1ZSkgKyAnICE9PSAnICsgU3RyaW5nKG90aGVyKTtcblx0fVxuXG5cdHZhciB2YWxUb1N0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHR2YXIgb3RoZXJUb1N0ciA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRpZiAodmFsVG9TdHIgIT09IG90aGVyVG9TdHIpIHtcblx0XHRyZXR1cm4gJ3RvU3RyaW5nVGFnIGlzIG5vdCB0aGUgc2FtZTogJyArIHZhbFRvU3RyICsgJyAhPT0gJyArIG90aGVyVG9TdHI7XG5cdH1cblxuXHR2YXIgdmFsSXNCb29sID0gaXNCb29sZWFuKHZhbHVlKTtcblx0dmFyIG90aGVySXNCb29sID0gaXNCb29sZWFuKG90aGVyKTtcblx0aWYgKHZhbElzQm9vbCB8fCBvdGhlcklzQm9vbCkge1xuXHRcdGlmICghdmFsSXNCb29sKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgbm90IGEgYm9vbGVhbjsgc2Vjb25kIGFyZ3VtZW50IGlzJzsgfVxuXHRcdGlmICghb3RoZXJJc0Jvb2wpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgbm90IGEgYm9vbGVhbjsgZmlyc3QgYXJndW1lbnQgaXMnOyB9XG5cdFx0dmFyIHZhbEJvb2xWYWwgPSBib29sZWFuVmFsdWUuY2FsbCh2YWx1ZSk7XG5cdFx0dmFyIG90aGVyQm9vbFZhbCA9IGJvb2xlYW5WYWx1ZS5jYWxsKG90aGVyKTtcblx0XHRpZiAodmFsQm9vbFZhbCA9PT0gb3RoZXJCb29sVmFsKSB7IHJldHVybiAnJzsgfVxuXHRcdHJldHVybiAncHJpbWl0aXZlIHZhbHVlIG9mIGJvb2xlYW4gYXJndW1lbnRzIGRvIG5vdCBtYXRjaDogJyArIHZhbEJvb2xWYWwgKyAnICE9PSAnICsgb3RoZXJCb29sVmFsO1xuXHR9XG5cblx0dmFyIHZhbElzTnVtYmVyID0gaXNOdW1iZXIodmFsdWUpO1xuXHR2YXIgb3RoZXJJc051bWJlciA9IGlzTnVtYmVyKHZhbHVlKTtcblx0aWYgKHZhbElzTnVtYmVyIHx8IG90aGVySXNOdW1iZXIpIHtcblx0XHRpZiAoIXZhbElzTnVtYmVyKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgbm90IGEgbnVtYmVyOyBzZWNvbmQgYXJndW1lbnQgaXMnOyB9XG5cdFx0aWYgKCFvdGhlcklzTnVtYmVyKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIG5vdCBhIG51bWJlcjsgZmlyc3QgYXJndW1lbnQgaXMnOyB9XG5cdFx0dmFyIHZhbE51bSA9IE51bWJlcih2YWx1ZSk7XG5cdFx0dmFyIG90aGVyTnVtID0gTnVtYmVyKG90aGVyKTtcblx0XHRpZiAodmFsTnVtID09PSBvdGhlck51bSkgeyByZXR1cm4gJyc7IH1cblx0XHR2YXIgdmFsSXNOYU4gPSBpc05hTih2YWx1ZSk7XG5cdFx0dmFyIG90aGVySXNOYU4gPSBpc05hTihvdGhlcik7XG5cdFx0aWYgKHZhbElzTmFOICYmICFvdGhlcklzTmFOKSB7XG5cdFx0XHRyZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIE5hTjsgc2Vjb25kIGlzIG5vdCc7XG5cdFx0fSBlbHNlIGlmICghdmFsSXNOYU4gJiYgb3RoZXJJc05hTikge1xuXHRcdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgTmFOOyBmaXJzdCBpcyBub3QnO1xuXHRcdH0gZWxzZSBpZiAodmFsSXNOYU4gJiYgb3RoZXJJc05hTikge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblx0XHRyZXR1cm4gJ251bWJlcnMgYXJlIGRpZmZlcmVudDogJyArIHZhbHVlICsgJyAhPT0gJyArIG90aGVyO1xuXHR9XG5cblx0dmFyIHZhbElzU3RyaW5nID0gaXNTdHJpbmcodmFsdWUpO1xuXHR2YXIgb3RoZXJJc1N0cmluZyA9IGlzU3RyaW5nKG90aGVyKTtcblx0aWYgKHZhbElzU3RyaW5nIHx8IG90aGVySXNTdHJpbmcpIHtcblx0XHRpZiAoIXZhbElzU3RyaW5nKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIHN0cmluZzsgZmlyc3QgaXMgbm90JzsgfVxuXHRcdGlmICghb3RoZXJJc1N0cmluZykgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIHN0cmluZzsgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHR2YXIgc3RyaW5nVmFsID0gU3RyaW5nKHZhbHVlKTtcblx0XHR2YXIgb3RoZXJWYWwgPSBTdHJpbmcob3RoZXIpO1xuXHRcdGlmIChzdHJpbmdWYWwgPT09IG90aGVyVmFsKSB7IHJldHVybiAnJzsgfVxuXHRcdHJldHVybiAnc3RyaW5nIHZhbHVlcyBhcmUgZGlmZmVyZW50OiBcIicgKyBzdHJpbmdWYWwgKyAnXCIgIT09IFwiJyArIG90aGVyVmFsICsgJ1wiJztcblx0fVxuXG5cdHZhciB2YWxJc0RhdGUgPSBpc0RhdGUodmFsdWUpO1xuXHR2YXIgb3RoZXJJc0RhdGUgPSBpc0RhdGUob3RoZXIpO1xuXHRpZiAodmFsSXNEYXRlIHx8IG90aGVySXNEYXRlKSB7XG5cdFx0aWYgKCF2YWxJc0RhdGUpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgRGF0ZSwgZmlyc3QgaXMgbm90JzsgfVxuXHRcdGlmICghb3RoZXJJc0RhdGUpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBEYXRlLCBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHZhciB2YWxUaW1lID0gK3ZhbHVlO1xuXHRcdHZhciBvdGhlclRpbWUgPSArb3RoZXI7XG5cdFx0aWYgKHZhbFRpbWUgPT09IG90aGVyVGltZSkgeyByZXR1cm4gJyc7IH1cblx0XHRyZXR1cm4gJ0RhdGVzIGhhdmUgZGlmZmVyZW50IHRpbWUgdmFsdWVzOiAnICsgdmFsVGltZSArICcgIT09ICcgKyBvdGhlclRpbWU7XG5cdH1cblxuXHR2YXIgdmFsSXNSZWdleCA9IGlzUmVnZXgodmFsdWUpO1xuXHR2YXIgb3RoZXJJc1JlZ2V4ID0gaXNSZWdleChvdGhlcik7XG5cdGlmICh2YWxJc1JlZ2V4IHx8IG90aGVySXNSZWdleCkge1xuXHRcdGlmICghdmFsSXNSZWdleCkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBSZWdFeHAsIGZpcnN0IGlzIG5vdCc7IH1cblx0XHRpZiAoIW90aGVySXNSZWdleCkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIFJlZ0V4cCwgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHR2YXIgcmVnZXhTdHJpbmdWYWwgPSBTdHJpbmcodmFsdWUpO1xuXHRcdHZhciByZWdleFN0cmluZ090aGVyID0gU3RyaW5nKG90aGVyKTtcblx0XHRpZiAocmVnZXhTdHJpbmdWYWwgPT09IHJlZ2V4U3RyaW5nT3RoZXIpIHsgcmV0dXJuICcnOyB9XG5cdFx0cmV0dXJuICdyZWd1bGFyIGV4cHJlc3Npb25zIGRpZmZlcjogJyArIHJlZ2V4U3RyaW5nVmFsICsgJyAhPT0gJyArIHJlZ2V4U3RyaW5nT3RoZXI7XG5cdH1cblxuXHR2YXIgdmFsSXNBcnJheSA9IGlzQXJyYXkodmFsdWUpO1xuXHR2YXIgb3RoZXJJc0FycmF5ID0gaXNBcnJheShvdGhlcik7XG5cdGlmICh2YWxJc0FycmF5IHx8IG90aGVySXNBcnJheSkge1xuXHRcdGlmICghdmFsSXNBcnJheSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBhbiBBcnJheSwgZmlyc3QgaXMgbm90JzsgfVxuXHRcdGlmICghb3RoZXJJc0FycmF5KSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgYW4gQXJyYXksIHNlY29uZCBpcyBub3QnOyB9XG5cdFx0aWYgKHZhbHVlLmxlbmd0aCAhPT0gb3RoZXIubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gJ2FycmF5cyBoYXZlIGRpZmZlcmVudCBsZW5ndGg6ICcgKyB2YWx1ZS5sZW5ndGggKyAnICE9PSAnICsgb3RoZXIubGVuZ3RoO1xuXHRcdH1cblx0XHRpZiAoU3RyaW5nKHZhbHVlKSAhPT0gU3RyaW5nKG90aGVyKSkgeyByZXR1cm4gJ3N0cmluZ2lmaWVkIEFycmF5cyBkaWZmZXInOyB9XG5cblx0XHR2YXIgaW5kZXggPSB2YWx1ZS5sZW5ndGggLSAxO1xuXHRcdHZhciBlcXVhbCA9ICcnO1xuXHRcdHZhciB2YWxIYXNJbmRleCwgb3RoZXJIYXNJbmRleDtcblx0XHR3aGlsZSAoZXF1YWwgPT09ICcnICYmIGluZGV4ID49IDApIHtcblx0XHRcdHZhbEhhc0luZGV4ID0gaGFzKHZhbHVlLCBpbmRleCk7XG5cdFx0XHRvdGhlckhhc0luZGV4ID0gaGFzKG90aGVyLCBpbmRleCk7XG5cdFx0XHRpZiAoIXZhbEhhc0luZGV4ICYmIG90aGVySGFzSW5kZXgpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaGFzIGluZGV4ICcgKyBpbmRleCArICc7IGZpcnN0IGRvZXMgbm90JzsgfVxuXHRcdFx0aWYgKHZhbEhhc0luZGV4ICYmICFvdGhlckhhc0luZGV4KSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaGFzIGluZGV4ICcgKyBpbmRleCArICc7IHNlY29uZCBkb2VzIG5vdCc7IH1cblx0XHRcdGVxdWFsID0gd2h5Tm90RXF1YWwodmFsdWVbaW5kZXhdLCBvdGhlcltpbmRleF0pO1xuXHRcdFx0aW5kZXggLT0gMTtcblx0XHR9XG5cdFx0cmV0dXJuIGVxdWFsO1xuXHR9XG5cblx0dmFyIHZhbHVlSXNTeW0gPSBpc1N5bWJvbCh2YWx1ZSk7XG5cdHZhciBvdGhlcklzU3ltID0gaXNTeW1ib2wob3RoZXIpO1xuXHRpZiAodmFsdWVJc1N5bSAhPT0gb3RoZXJJc1N5bSkge1xuXHRcdGlmICh2YWx1ZUlzU3ltKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgU3ltYm9sOyBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIFN5bWJvbDsgZmlyc3QgaXMgbm90Jztcblx0fVxuXHRpZiAodmFsdWVJc1N5bSAmJiBvdGhlcklzU3ltKSB7XG5cdFx0cmV0dXJuIHN5bWJvbFZhbHVlLmNhbGwodmFsdWUpID09PSBzeW1ib2xWYWx1ZS5jYWxsKG90aGVyKSA/ICcnIDogJ2ZpcnN0IFN5bWJvbCB2YWx1ZSAhPT0gc2Vjb25kIFN5bWJvbCB2YWx1ZSc7XG5cdH1cblxuXHR2YXIgdmFsdWVJc0dlbiA9IGlzR2VuZXJhdG9yKHZhbHVlKTtcblx0dmFyIG90aGVySXNHZW4gPSBpc0dlbmVyYXRvcihvdGhlcik7XG5cdGlmICh2YWx1ZUlzR2VuICE9PSBvdGhlcklzR2VuKSB7XG5cdFx0aWYgKHZhbHVlSXNHZW4pIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBhIEdlbmVyYXRvcjsgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBhIEdlbmVyYXRvcjsgZmlyc3QgaXMgbm90Jztcblx0fVxuXG5cdHZhciB2YWx1ZUlzQXJyb3cgPSBpc0Fycm93RnVuY3Rpb24odmFsdWUpO1xuXHR2YXIgb3RoZXJJc0Fycm93ID0gaXNBcnJvd0Z1bmN0aW9uKG90aGVyKTtcblx0aWYgKHZhbHVlSXNBcnJvdyAhPT0gb3RoZXJJc0Fycm93KSB7XG5cdFx0aWYgKHZhbHVlSXNBcnJvdykgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIGFuIEFycm93IGZ1bmN0aW9uOyBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIGFuIEFycm93IGZ1bmN0aW9uOyBmaXJzdCBpcyBub3QnO1xuXHR9XG5cblx0aWYgKGlzQ2FsbGFibGUodmFsdWUpIHx8IGlzQ2FsbGFibGUob3RoZXIpKSB7XG5cdFx0aWYgKGZ1bmN0aW9uc0hhdmVOYW1lcyAmJiB3aHlOb3RFcXVhbCh2YWx1ZS5uYW1lLCBvdGhlci5uYW1lKSAhPT0gJycpIHtcblx0XHRcdHJldHVybiAnRnVuY3Rpb24gbmFtZXMgZGlmZmVyOiBcIicgKyB2YWx1ZS5uYW1lICsgJ1wiICE9PSBcIicgKyBvdGhlci5uYW1lICsgJ1wiJztcblx0XHR9XG5cdFx0aWYgKHdoeU5vdEVxdWFsKHZhbHVlLmxlbmd0aCwgb3RoZXIubGVuZ3RoKSAhPT0gJycpIHtcblx0XHRcdHJldHVybiAnRnVuY3Rpb24gbGVuZ3RocyBkaWZmZXI6ICcgKyB2YWx1ZS5sZW5ndGggKyAnICE9PSAnICsgb3RoZXIubGVuZ3RoO1xuXHRcdH1cblxuXHRcdHZhciB2YWx1ZVN0ciA9IG5vcm1hbGl6ZUZuV2hpdGVzcGFjZShTdHJpbmcodmFsdWUpKTtcblx0XHR2YXIgb3RoZXJTdHIgPSBub3JtYWxpemVGbldoaXRlc3BhY2UoU3RyaW5nKG90aGVyKSk7XG5cdFx0aWYgKHdoeU5vdEVxdWFsKHZhbHVlU3RyLCBvdGhlclN0cikgPT09ICcnKSB7IHJldHVybiAnJzsgfVxuXG5cdFx0aWYgKCF2YWx1ZUlzR2VuICYmICF2YWx1ZUlzQXJyb3cpIHtcblx0XHRcdHJldHVybiB3aHlOb3RFcXVhbCh2YWx1ZVN0ci5yZXBsYWNlKC9cXClcXHMqXFx7LywgJyl7JyksIG90aGVyU3RyLnJlcGxhY2UoL1xcKVxccypcXHsvLCAnKXsnKSkgPT09ICcnID8gJycgOiAnRnVuY3Rpb24gc3RyaW5nIHJlcHJlc2VudGF0aW9ucyBkaWZmZXInO1xuXHRcdH1cblx0XHRyZXR1cm4gd2h5Tm90RXF1YWwodmFsdWVTdHIsIG90aGVyU3RyKSA9PT0gJycgPyAnJyA6ICdGdW5jdGlvbiBzdHJpbmcgcmVwcmVzZW50YXRpb25zIGRpZmZlcic7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3RoZXIgPT09ICdvYmplY3QnKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gdHlwZW9mIG90aGVyKSB7IHJldHVybiAnYXJndW1lbnRzIGhhdmUgYSBkaWZmZXJlbnQgdHlwZW9mOiAnICsgdHlwZW9mIHZhbHVlICsgJyAhPT0gJyArIHR5cGVvZiBvdGhlcjsgfVxuXHRcdGlmIChpc1Byb3RvLmNhbGwodmFsdWUsIG90aGVyKSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIHRoZSBbW1Byb3RvdHlwZV1dIG9mIHRoZSBzZWNvbmQnOyB9XG5cdFx0aWYgKGlzUHJvdG8uY2FsbChvdGhlciwgdmFsdWUpKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIHRoZSBbW1Byb3RvdHlwZV1dIG9mIHRoZSBmaXJzdCc7IH1cblx0XHRpZiAoZ2V0UHJvdG90eXBlT2YodmFsdWUpICE9PSBnZXRQcm90b3R5cGVPZihvdGhlcikpIHsgcmV0dXJuICdhcmd1bWVudHMgaGF2ZSBhIGRpZmZlcmVudCBbW1Byb3RvdHlwZV1dJzsgfVxuXG5cdFx0aWYgKHN5bWJvbEl0ZXJhdG9yKSB7XG5cdFx0XHR2YXIgdmFsdWVJdGVyYXRvckZuID0gdmFsdWVbc3ltYm9sSXRlcmF0b3JdO1xuXHRcdFx0dmFyIHZhbHVlSXNJdGVyYWJsZSA9IGlzQ2FsbGFibGUodmFsdWVJdGVyYXRvckZuKTtcblx0XHRcdHZhciBvdGhlckl0ZXJhdG9yRm4gPSBvdGhlcltzeW1ib2xJdGVyYXRvcl07XG5cdFx0XHR2YXIgb3RoZXJJc0l0ZXJhYmxlID0gaXNDYWxsYWJsZShvdGhlckl0ZXJhdG9yRm4pO1xuXHRcdFx0aWYgKHZhbHVlSXNJdGVyYWJsZSAhPT0gb3RoZXJJc0l0ZXJhYmxlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZUlzSXRlcmFibGUpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBpdGVyYWJsZTsgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHRcdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgaXRlcmFibGU7IGZpcnN0IGlzIG5vdCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodmFsdWVJc0l0ZXJhYmxlICYmIG90aGVySXNJdGVyYWJsZSkge1xuXHRcdFx0XHR2YXIgdmFsdWVJdGVyYXRvciA9IHZhbHVlSXRlcmF0b3JGbi5jYWxsKHZhbHVlKTtcblx0XHRcdFx0dmFyIG90aGVySXRlcmF0b3IgPSBvdGhlckl0ZXJhdG9yRm4uY2FsbChvdGhlcik7XG5cdFx0XHRcdHZhciB2YWx1ZU5leHQsIG90aGVyTmV4dCwgbmV4dFdoeTtcblx0XHRcdFx0ZG8ge1xuXHRcdFx0XHRcdHZhbHVlTmV4dCA9IHZhbHVlSXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHRcdG90aGVyTmV4dCA9IG90aGVySXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0XHRcdGlmICghdmFsdWVOZXh0LmRvbmUgJiYgIW90aGVyTmV4dC5kb25lKSB7XG5cdFx0XHRcdFx0XHRuZXh0V2h5ID0gd2h5Tm90RXF1YWwodmFsdWVOZXh0LCBvdGhlck5leHQpO1xuXHRcdFx0XHRcdFx0aWYgKG5leHRXaHkgIT09ICcnKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnaXRlcmF0aW9uIHJlc3VsdHMgYXJlIG5vdCBlcXVhbDogJyArIG5leHRXaHk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlICghdmFsdWVOZXh0LmRvbmUgJiYgIW90aGVyTmV4dC5kb25lKTtcblx0XHRcdFx0aWYgKHZhbHVlTmV4dC5kb25lICYmICFvdGhlck5leHQuZG9uZSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGZpbmlzaGVkIGl0ZXJhdGluZyBiZWZvcmUgc2Vjb25kJzsgfVxuXHRcdFx0XHRpZiAoIXZhbHVlTmV4dC5kb25lICYmIG90aGVyTmV4dC5kb25lKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGZpbmlzaGVkIGl0ZXJhdGluZyBiZWZvcmUgZmlyc3QnOyB9XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGNvbGxlY3Rpb25zRm9yRWFjaC5NYXAgfHwgY29sbGVjdGlvbnNGb3JFYWNoLlNldCkge1xuXHRcdFx0dmFyIHZhbHVlRW50cmllcyA9IHRyeU1hcFNldEVudHJpZXModmFsdWUpO1xuXHRcdFx0dmFyIG90aGVyRW50cmllcyA9IHRyeU1hcFNldEVudHJpZXMob3RoZXIpO1xuXHRcdFx0dmFyIHZhbHVlRW50cmllc0lzQXJyYXkgPSBpc0FycmF5KHZhbHVlRW50cmllcyk7XG5cdFx0XHR2YXIgb3RoZXJFbnRyaWVzSXNBcnJheSA9IGlzQXJyYXkob3RoZXJFbnRyaWVzKTtcblx0XHRcdGlmICh2YWx1ZUVudHJpZXNJc0FycmF5ICYmICFvdGhlckVudHJpZXNJc0FycmF5KSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaGFzIENvbGxlY3Rpb24gZW50cmllcywgc2Vjb25kIGRvZXMgbm90JzsgfVxuXHRcdFx0aWYgKCF2YWx1ZUVudHJpZXNJc0FycmF5ICYmIG90aGVyRW50cmllc0lzQXJyYXkpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaGFzIENvbGxlY3Rpb24gZW50cmllcywgZmlyc3QgZG9lcyBub3QnOyB9XG5cdFx0XHRpZiAodmFsdWVFbnRyaWVzSXNBcnJheSAmJiBvdGhlckVudHJpZXNJc0FycmF5KSB7XG5cdFx0XHRcdHZhciBlbnRyaWVzV2h5ID0gd2h5Tm90RXF1YWwodmFsdWVFbnRyaWVzLCBvdGhlckVudHJpZXMpO1xuXHRcdFx0XHRyZXR1cm4gZW50cmllc1doeSA9PT0gJycgPyAnJyA6ICdDb2xsZWN0aW9uIGVudHJpZXMgZGlmZmVyOiAnICsgZW50cmllc1doeTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR2YXIga2V5LCB2YWx1ZUtleUlzUmVjdXJzaXZlLCBvdGhlcktleUlzUmVjdXJzaXZlLCBrZXlXaHk7XG5cdFx0Zm9yIChrZXkgaW4gdmFsdWUpIHtcblx0XHRcdGlmIChoYXModmFsdWUsIGtleSkpIHtcblx0XHRcdFx0aWYgKCFoYXMob3RoZXIsIGtleSkpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBoYXMga2V5IFwiJyArIGtleSArICdcIjsgc2Vjb25kIGRvZXMgbm90JzsgfVxuXHRcdFx0XHR2YWx1ZUtleUlzUmVjdXJzaXZlID0gdmFsdWVba2V5XSAmJiB2YWx1ZVtrZXldW2tleV0gPT09IHZhbHVlO1xuXHRcdFx0XHRvdGhlcktleUlzUmVjdXJzaXZlID0gb3RoZXJba2V5XSAmJiBvdGhlcltrZXldW2tleV0gPT09IG90aGVyO1xuXHRcdFx0XHRpZiAodmFsdWVLZXlJc1JlY3Vyc2l2ZSAhPT0gb3RoZXJLZXlJc1JlY3Vyc2l2ZSkge1xuXHRcdFx0XHRcdGlmICh2YWx1ZUtleUlzUmVjdXJzaXZlKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaGFzIGEgY2lyY3VsYXIgcmVmZXJlbmNlIGF0IGtleSBcIicgKyBrZXkgKyAnXCI7IHNlY29uZCBkb2VzIG5vdCc7IH1cblx0XHRcdFx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBoYXMgYSBjaXJjdWxhciByZWZlcmVuY2UgYXQga2V5IFwiJyArIGtleSArICdcIjsgZmlyc3QgZG9lcyBub3QnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghdmFsdWVLZXlJc1JlY3Vyc2l2ZSAmJiAhb3RoZXJLZXlJc1JlY3Vyc2l2ZSkge1xuXHRcdFx0XHRcdGtleVdoeSA9IHdoeU5vdEVxdWFsKHZhbHVlW2tleV0sIG90aGVyW2tleV0pO1xuXHRcdFx0XHRcdGlmIChrZXlXaHkgIT09ICcnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3ZhbHVlIGF0IGtleSBcIicgKyBrZXkgKyAnXCIgZGlmZmVyczogJyArIGtleVdoeTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChrZXkgaW4gb3RoZXIpIHtcblx0XHRcdGlmIChoYXMob3RoZXIsIGtleSkgJiYgIWhhcyh2YWx1ZSwga2V5KSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBoYXMga2V5IFwiJyArIGtleSArICdcIjsgZmlyc3QgZG9lcyBub3QnOyB9XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWdleEV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG52YXIgdHJ5UmVnZXhFeGVjID0gZnVuY3Rpb24gdHJ5UmVnZXhFeGVjKHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0cmVnZXhFeGVjLmNhbGwodmFsdWUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciByZWdleENsYXNzID0gJ1tvYmplY3QgUmVnRXhwXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzUmVnZXgodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeVJlZ2V4RXhlYyh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gcmVnZXhDbGFzcztcbn07XG4iLCJ2YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBNYXAucHJvdG90eXBlO1xudmFyIG1hcFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNNYXAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE1hcC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIG1hcFNpemUgPSBoYXNNYXAgJiYgbWFwU2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIG1hcFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IG1hcFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgbWFwRm9yRWFjaCA9IGhhc01hcCAmJiBNYXAucHJvdG90eXBlLmZvckVhY2g7XG52YXIgaGFzU2V0ID0gdHlwZW9mIFNldCA9PT0gJ2Z1bmN0aW9uJyAmJiBTZXQucHJvdG90eXBlO1xudmFyIHNldFNpemVEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiBoYXNTZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKFNldC5wcm90b3R5cGUsICdzaXplJykgOiBudWxsO1xudmFyIHNldFNpemUgPSBoYXNTZXQgJiYgc2V0U2l6ZURlc2NyaXB0b3IgJiYgdHlwZW9mIHNldFNpemVEZXNjcmlwdG9yLmdldCA9PT0gJ2Z1bmN0aW9uJyA/IHNldFNpemVEZXNjcmlwdG9yLmdldCA6IG51bGw7XG52YXIgc2V0Rm9yRWFjaCA9IGhhc1NldCAmJiBTZXQucHJvdG90eXBlLmZvckVhY2g7XG52YXIgYm9vbGVhblZhbHVlT2YgPSBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluc3BlY3RfIChvYmosIG9wdHMsIGRlcHRoLCBzZWVuKSB7XG4gICAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gICAgXG4gICAgdmFyIG1heERlcHRoID0gb3B0cy5kZXB0aCA9PT0gdW5kZWZpbmVkID8gNSA6IG9wdHMuZGVwdGg7XG4gICAgaWYgKGRlcHRoID09PSB1bmRlZmluZWQpIGRlcHRoID0gMDtcbiAgICBpZiAoZGVwdGggPj0gbWF4RGVwdGggJiYgbWF4RGVwdGggPiAwICYmIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gJ1tPYmplY3RdJztcbiAgICB9XG4gICAgXG4gICAgaWYgKHNlZW4gPT09IHVuZGVmaW5lZCkgc2VlbiA9IFtdO1xuICAgIGVsc2UgaWYgKGluZGV4T2Yoc2Vlbiwgb2JqKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiAnW0NpcmN1bGFyXSc7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGluc3BlY3QgKHZhbHVlLCBmcm9tKSB7XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBzZWVuID0gc2Vlbi5zbGljZSgpO1xuICAgICAgICAgICAgc2Vlbi5wdXNoKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnNwZWN0Xyh2YWx1ZSwgb3B0cywgZGVwdGggKyAxLCBzZWVuKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBpbnNwZWN0U3RyaW5nKG9iaik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBuYW1lT2Yob2JqKTtcbiAgICAgICAgcmV0dXJuICdbRnVuY3Rpb24nICsgKG5hbWUgPyAnOiAnICsgbmFtZSA6ICcnKSArICddJztcbiAgICB9XG4gICAgZWxzZSBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3ltYm9sKG9iaikpIHtcbiAgICAgICAgdmFyIHN5bVN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgPyAnT2JqZWN0KCcgKyBzeW1TdHJpbmcgKyAnKScgOiBzeW1TdHJpbmc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzRWxlbWVudChvYmopKSB7XG4gICAgICAgIHZhciBzID0gJzwnICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIGF0dHJzID0gb2JqLmF0dHJpYnV0ZXMgfHwgW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHMgKz0gJyAnICsgYXR0cnNbaV0ubmFtZSArICc9XCInICsgcXVvdGUoYXR0cnNbaV0udmFsdWUpICsgJ1wiJztcbiAgICAgICAgfVxuICAgICAgICBzICs9ICc+JztcbiAgICAgICAgaWYgKG9iai5jaGlsZE5vZGVzICYmIG9iai5jaGlsZE5vZGVzLmxlbmd0aCkgcyArPSAnLi4uJztcbiAgICAgICAgcyArPSAnPC8nICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKSArICc+JztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAob2JqLmxlbmd0aCA9PT0gMCkgcmV0dXJuICdbXSc7XG4gICAgICAgIHZhciB4cyA9IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHNbaV0gPSBoYXMob2JqLCBpKSA/IGluc3BlY3Qob2JqW2ldLCBvYmopIDogJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdbICcgKyB4cy5qb2luKCcsICcpICsgJyBdJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFcnJvcihvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoIWhhcyhvYmosIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoL1teXFx3JF0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goaW5zcGVjdChrZXkpICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnRzLnB1c2goa2V5ICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSByZXR1cm4gJ1snICsgb2JqICsgJ10nO1xuICAgICAgICByZXR1cm4gJ3sgWycgKyBvYmogKyAnXSAnICsgcGFydHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouaW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gb2JqLmluc3BlY3QoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNNYXAob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgbWFwRm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5zcGVjdChrZXksIG9iaikgKyAnID0+ICcgKyBpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAnTWFwICgnICsgbWFwU2l6ZS5jYWxsKG9iaikgKyAnKSB7JyArIHBhcnRzLmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU2V0KG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIHNldEZvckVhY2guY2FsbChvYmosIGZ1bmN0aW9uICh2YWx1ZSApIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goaW5zcGVjdCh2YWx1ZSwgb2JqKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gJ1NldCAoJyArIHNldFNpemUuY2FsbChvYmopICsgJykgeycgKyBwYXJ0cy5qb2luKCcsICcpICsgJ30nO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gU3RyaW5nKG9iaik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTnVtYmVyKG9iaikpIHtcbiAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIE51bWJlcihvYmopICsgJyknO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgYm9vbGVhblZhbHVlT2YuY2FsbChvYmopICsgJyknO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBpbnNwZWN0KFN0cmluZyhvYmopKSArICcpJztcbiAgICB9XG4gICAgZWxzZSBpZiAoIWlzRGF0ZShvYmopICYmICFpc1JlZ0V4cChvYmopKSB7XG4gICAgICAgIHZhciB4cyA9IFtdLCBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChoYXMob2JqLCBrZXkpKSBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLnNvcnQoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICgvW15cXHckXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgeHMucHVzaChpbnNwZWN0KGtleSkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHhzLnB1c2goa2V5ICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh4cy5sZW5ndGggPT09IDApIHJldHVybiAne30nO1xuICAgICAgICByZXR1cm4gJ3sgJyArIHhzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiBTdHJpbmcob2JqKTtcbn07XG5cbmZ1bmN0aW9uIHF1b3RlIChzKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJyB9XG5mdW5jdGlvbiBpc0RhdGUgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nIH1cbmZ1bmN0aW9uIGlzUmVnRXhwIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nIH1cbmZ1bmN0aW9uIGlzRXJyb3IgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB9XG5mdW5jdGlvbiBpc1N5bWJvbCAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTeW1ib2xdJyB9XG5mdW5jdGlvbiBpc1N0cmluZyAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTdHJpbmddJyB9XG5mdW5jdGlvbiBpc051bWJlciAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBOdW1iZXJdJyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4gKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgQm9vbGVhbl0nIH1cblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgfHwgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5IGluIHRoaXM7IH07XG5mdW5jdGlvbiBoYXMgKG9iaiwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn1cblxuZnVuY3Rpb24gdG9TdHIgKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gbmFtZU9mIChmKSB7XG4gICAgaWYgKGYubmFtZSkgcmV0dXJuIGYubmFtZTtcbiAgICB2YXIgbSA9IGYudG9TdHJpbmcoKS5tYXRjaCgvXmZ1bmN0aW9uXFxzKihbXFx3JF0rKS8pO1xuICAgIGlmIChtKSByZXR1cm4gbVsxXTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZiAoeHMsIHgpIHtcbiAgICBpZiAoeHMuaW5kZXhPZikgcmV0dXJuIHhzLmluZGV4T2YoeCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBpc01hcCAoeCkge1xuICAgIGlmICghbWFwU2l6ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG1hcFNpemUuY2FsbCh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzU2V0ICh4KSB7XG4gICAgaWYgKCFzZXRTaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgc2V0U2l6ZS5jYWxsKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50ICh4KSB7XG4gICAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuICAgIGlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHggaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHR5cGVvZiB4Lm5vZGVOYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAmJiB0eXBlb2YgeC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbidcbiAgICA7XG59XG5cbmZ1bmN0aW9uIGluc3BlY3RTdHJpbmcgKHN0cikge1xuICAgIHZhciBzID0gc3RyLnJlcGxhY2UoLyhbJ1xcXFxdKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvW1xceDAwLVxceDFmXS9nLCBsb3dieXRlKTtcbiAgICByZXR1cm4gXCInXCIgKyBzICsgXCInXCI7XG4gICAgXG4gICAgZnVuY3Rpb24gbG93Ynl0ZSAoYykge1xuICAgICAgICB2YXIgbiA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgdmFyIHggPSB7IDg6ICdiJywgOTogJ3QnLCAxMDogJ24nLCAxMjogJ2YnLCAxMzogJ3InIH1bbl07XG4gICAgICAgIGlmICh4KSByZXR1cm4gJ1xcXFwnICsgeDtcbiAgICAgICAgcmV0dXJuICdcXFxceCcgKyAobiA8IDB4MTAgPyAnMCcgOiAnJykgKyBuLnRvU3RyaW5nKDE2KTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYXBwbHlNaWRkbGV3YXJlO1xuXG52YXIgX2NvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcblxudmFyIF9jb21wb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IF9jb21wb3NlMltcImRlZmF1bHRcIl0uYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBiaW5kQWN0aW9uQ3JlYXRvcnM7XG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNvbWJpbmVSZWR1Y2VycztcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25OYW1lID0gYWN0aW9uVHlwZSAmJiAnXCInICsgYWN0aW9uVHlwZS50b1N0cmluZygpICsgJ1wiJyB8fCAnYW4gYWN0aW9uJztcblxuICByZXR1cm4gJ0dpdmVuIGFjdGlvbiAnICsgYWN0aW9uTmFtZSArICcsIHJlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gJyArICdUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuJztcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgPyAnaW5pdGlhbFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2FuaXR5KHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcgKyAnSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0ICcgKyAnZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSAnICsgJ25vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgc2FuaXR5RXJyb3I7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNhbml0eShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNhbml0eUVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNhbml0eUVycm9yKSB7XG4gICAgICB0aHJvdyBzYW5pdHlFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICAoMCwgX3dhcm5pbmcyW1wiZGVmYXVsdFwiXSkod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGZpbmFsUmVkdWNlcktleXNbaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tcG9zZTtcbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBmdW5jc1tmdW5jcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcblxuICAgIHJldHVybiByZXN0LnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjb21wb3NlZCwgZikge1xuICAgICAgcmV0dXJuIGYoY29tcG9zZWQpO1xuICAgIH0sIGxhc3QuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVTdG9yZTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciBBY3Rpb25UeXBlcyA9IGV4cG9ydHMuQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbaW5pdGlhbFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gaW5pdGlhbFN0YXRlO1xuICAgIGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbXCJkZWZhdWx0XCJdKShhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBleHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IGV4cG9ydHMuY29tYmluZVJlZHVjZXJzID0gZXhwb3J0cy5jcmVhdGVTdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9jcmVhdGVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTdG9yZSk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzID0gcmVxdWlyZSgnLi9jb21iaW5lUmVkdWNlcnMnKTtcblxudmFyIF9jb21iaW5lUmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tYmluZVJlZHVjZXJzKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMgPSByZXF1aXJlKCcuL2JpbmRBY3Rpb25DcmVhdG9ycycpO1xuXG52YXIgX2JpbmRBY3Rpb25DcmVhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWN0aW9uQ3JlYXRvcnMpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZSA9IHJlcXVpcmUoJy4vYXBwbHlNaWRkbGV3YXJlJyk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGx5TWlkZGxld2FyZSk7XG5cbnZhciBfY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xuXG52YXIgX2NvbXBvc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICAoMCwgX3dhcm5pbmcyW1wiZGVmYXVsdFwiXSkoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gX2NyZWF0ZVN0b3JlMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IF9jb21iaW5lUmVkdWNlcnMyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzID0gX2JpbmRBY3Rpb25DcmVhdG9yczJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBfYXBwbHlNaWRkbGV3YXJlMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmNvbXBvc2UgPSBfY29tcG9zZTJbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd2FybmluZztcbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufSIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIb3N0T2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fFxuICAgICAgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcbiJdfQ==
