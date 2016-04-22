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

    var domElement = typeof displayNameOrDOMElement === 'string' ? document.createElement(displayNameOrDOMElement) : displayNameOrDOMElement;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement));

    _this.properties = properties;

    _this.children = children;
    return _this;
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent);

      this.children.forEach(function (child) {
        child.mount(this, context);
      }.bind(this));

      this.applyProperties();
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'remount', this).call(this, previousSibling);

      this.children.forEach(function (child) {
        child.mount(this, context);
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
              ref = domElement;

          callback(ref);
        } else if (beginsWith(propertyName, 'on')) {
          var handlerName = lowercase(propertyName),
              handler = propertyValue;

          domElement[handlerName] = handler;
        } else if (typeof propertyValue === 'string') {
          attributeName = attributeNameFromPropertyName(propertyName);
          attributeValue = propertyValue;

          domElement.setAttribute(attributeName, attributeValue);
        } else if ((typeof propertyValue === 'undefined' ? 'undefined' : _typeof(propertyValue)) === 'object') {
          attributeName = propertyName;

          var keys = Object.keys(propertyValue);
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

  return propertyName;
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
            reactComponent = new reactComponentConstructor();

        element = new ReactComponentElement(reactComponent, properties, children);
      } else if (firstArgument instanceof ReactClass) {
        var reactClass = firstArgument;

        element = new ReactClassElement(reactClass, properties, children);
      } else if (typeof firstArgument === 'function') {
        var reactFunction = firstArgument;

        element = new ReactFunctionElement(reactFunction, properties, children);
      } else {
        var displayName = firstArgument;

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
    remainingArguments = firstRemainingArgument;
  }

  var children = remainingArguments.map(function (remainingArgument) {
    var child;

    if (remainingArgument instanceof Element || remainingArgument instanceof ReactElement) {
      child = remainingArgument;
    } else {
      var text = '' + remainingArgument,
          textElement = new TextElement(text);

      child = textElement;
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
  function ReactClass(render, displayName, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.render = render;
    this.displayName = displayName;
    this.getInitialState = getInitialState;
    this.getChildContext = getChildContext;
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
          getChildContext = properties['getChildContext'] || defaultGetChildContext,
          componentDidMount = properties['componentDidMount'] || defaultComponentDidMount,
          componentWillUnmount = properties['componentWillUnmount'] || defaultComponentWillUnmount,
          reactClass = new ReactClass(render, displayName, getInitialState, getChildContext, componentDidMount, componentWillUnmount);

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

function defaultGetChildContext() {
  return undefined;
}

function defaultComponentDidMount(context) {}

function defaultComponentWillUnmount(context) {}

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
    value: function render(context) {
      this.instance.context = context;

      return this.reactClass.render.apply(this.instance);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      this.instance.context = context;

      this.reactClass.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      this.instance.context = context;

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
    value: function componentDidMount(context) {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {}
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
    value: function render(context) {
      this.instance.context = context;

      return this.reactComponent.render.apply(this.instance);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      this.instance.context = context;

      this.reactComponent.componentDidMount.apply(this.instance);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount(context) {
      this.instance.context = context;

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
    value: function mount(parent, context) {
      var childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.mount(parent, childContext);
      });

      this.componentDidMount(context);
    }
  }, {
    key: 'remount',
    value: function remount(previousSibling, context) {
      var childOrChildren = this.render(context),
          childContext = this.getChildContext() || context;

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        child.remount(previousSibling, childContext);
      });
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.componentWillUnmount(context);

      var childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.unmount(context, childContext);
      });
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      var previousChildren = this.children,
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

    if (!reactFunction.getChildContext) {
      reactFunction.getChildContext = defaultGetChildContext;
    }
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(context) {
      return this.reactFunction(this.instance.props, context); ///
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactFunction.getChildContext();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {
      ///
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {
      ///
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

function defaultGetChildContext() {
  return undefined;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL2luZGV4LmpzIiwiZG9jcy9saWJFUzIwMTUvcmVkdXhBcHAuanMiLCJkb2NzL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIiwiaW5kZXguanMiLCJsaWJFUzIwMTUvZGlzcGxheUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdC5qcyIsImxpYkVTMjAxNS9yZWFjdENsYXNzLmpzIiwibGliRVMyMDE1L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdERPTS5qcyIsImxpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiLCJsaWJFUzIwMTUvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJsaWJFUzIwMTUvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZnJlZXplL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9saWIvRXhwZWN0YXRpb24uanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L2xpYi9TcHlVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL1Rlc3RVdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2Fzc2VydC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2V4dGVuZC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvZ2V0Q29sbGVjdGlvbnNGb3JFYWNoLmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvZ2V0U3ltYm9sSXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL25vZGVfbW9kdWxlcy9oYXMvbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW1wbGVtZW50YXRpb24uanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaGFzL25vZGVfbW9kdWxlcy9mdW5jdGlvbi1iaW5kL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtYXJyb3ctZnVuY3Rpb24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtYm9vbGVhbi1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtY2FsbGFibGUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtZGF0ZS1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtZ2VuZXJhdG9yLWZ1bmN0aW9uL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2lzLW51bWJlci1vYmplY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZXhwZWN0L25vZGVfbW9kdWxlcy9pcy1lcXVhbC9ub2RlX21vZHVsZXMvaXMtc3RyaW5nL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvaXMtZXF1YWwvbm9kZV9tb2R1bGVzL2lzLXN5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLWVxdWFsL3doeS5qcyIsIm5vZGVfbW9kdWxlcy9leHBlY3Qvbm9kZV9tb2R1bGVzL2lzLXJlZ2V4L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2V4cGVjdC9ub2RlX21vZHVsZXMvb2JqZWN0LWluc3BlY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2FwcGx5TWlkZGxld2FyZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvYmluZEFjdGlvbkNyZWF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jb21iaW5lUmVkdWNlcnMuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2NvbXBvc2UuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2NyZWF0ZVN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvdXRpbHMvd2FybmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNIb3N0T2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFFBQVEs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBWYW5pbGxhQXBwOiByZXF1aXJlKCcuL2xpYi92YW5pbGxhQXBwJyksXG4gIFJlZHV4QXBwOiByZXF1aXJlKCcuL2xpYi9yZWR1eEFwcCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVkdXggPSByZXF1aXJlKCdyZWR1eCcpLFxuICAgIGV4cGVjdCAgPSByZXF1aXJlKCdleHBlY3QnKSxcbiAgICBkZWVwRnJlZXplID0gcmVxdWlyZSgnZGVlcC1mcmVlemUnKTtcblxudmFyIHJlYWN0aW9uID0gcmVxdWlyZSgnLi4vLi4vaW5kZXgnKSxcbiAgICBSZWFjdERPTSA9IHJlYWN0aW9uLlJlYWN0RE9NLFxuICAgIFJlYWN0ID0gcmVhY3Rpb24uUmVhY3Q7XG5cbmNsYXNzIFJlZHV4QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG4gICAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgY29uc3QgdG9kbyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIGlmIChzdGF0ZS5pZCAhPT0gYWN0aW9uLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgICB9KTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICB0b2RvKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICAgIF07XG5cbiAgICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAodCA9PiB0b2RvKHQsIGFjdGlvbikpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB7IGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbiAgICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIHRvZG9zOiB0b2RvcyxcbiAgICAgIHZpc2liaWxpdHlGaWx0ZXI6IHZpc2liaWxpdHlGaWx0ZXJcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuICAgIGNvbnN0IGdldFZpc2libGVUb2RvcyA9IChcbiAgICAgICAgdG9kb3MsXG4gICAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxuICAgICAgPC91bD5cbiAgICApO1xuXG4gICAgY29uc3QgTGluayA9ICh7XG4gICAgICBhY3RpdmUsXG4gICAgICBvbkNsaWNrLFxuICAgICAgY2hpbGRyZW5cbiAgICB9KSA9PiB7XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiA8c3Bhbj57Y2hpbGRyZW59PC9zcGFuPjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8YSBocmVmPScjJ1xuICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgb25DbGljaygpO1xuICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYT5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICAgIHByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICAgIGNvbnN0IEFkZFRvZG8gPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiB7XG4gICAgICBsZXQgaW5wdXQ7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtub2RlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0ID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8VG9kb0xpc3QgdG9kb3M9e1xuICAgICAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVE9HR0xFX1RPRE8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRm9vdGVyID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgU2hvdzpcbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCcgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19DT01QTEVURUQnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3Qgc3RvcmU9e3N0b3JlfS8+XG4gICAgICAgIDxGb290ZXIgc3RvcmU9e3N0b3JlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgeyBjcmVhdGVTdG9yZSB9ID0gUmVkdXg7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICA8VG9kb0FwcCBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9IC8+LFxuICAgICAgcm9vdERPTUVsZW1lbnRcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBWYW5pbGxhQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gICAgdmFyIENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIENvbW1lbnRzTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgYWdhaW4uLi5cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgfSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb21tZW50cyA9IHRoaXMuc3RhdGUubWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAgICB7Y29tbWVudHN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudHMgbGlzdCBtb3VudGVkJylcbiAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICB2YXIgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcbiAgICBcbiAgICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG4gICAgXG4gICAgdmFyIG1lc3NhZ2VzID0gW1xuICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgIH07XG4gICAgXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSwgMTAwMCk7IC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmFuaWxsYUFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFJlYWN0OiByZXF1aXJlKCcuL2xpYi9yZWFjdCcpLFxuICBSZWFjdERPTTogcmVxdWlyZSgnLi9saWIvcmVhY3RET00nKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgRGlzcGxheUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZGlzcGxheU5hbWVPckRPTUVsZW1lbnQsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSAodHlwZW9mIGRpc3BsYXlOYW1lT3JET01FbGVtZW50ID09PSAnc3RyaW5nJykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lT3JET01FbGVtZW50O1xuICAgIFxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuICAgIFxuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzLCBjb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hcHBseVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHJlbW91bnQocHJldmlvdXNTaWJsaW5nLCBjb250ZXh0KSB7XG4gICAgc3VwZXIucmVtb3VudChwcmV2aW91c1NpYmxpbmcpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudCh0aGlzLCBjb250ZXh0KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5hcHBseVByb3BlcnRpZXMoKTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICAvLy9cbiAgICBcbiAgICBzdXBlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcGVydGllcygpIHtcbiAgICBpZiAodGhpcy5wcm9wZXJ0aWVzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgcHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcyk7XG5cbiAgICBwcm9wZXJ0eU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgdmFyIHByb3BlcnR5VmFsdWUgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eU5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHByb3BlcnR5VmFsdWUsXG4gICAgICAgICAgICByZWYgPSBkb21FbGVtZW50O1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2socmVmKVxuICAgICAgfSBlbHNlIGlmIChiZWdpbnNXaXRoKHByb3BlcnR5TmFtZSwgJ29uJykpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJOYW1lID0gbG93ZXJjYXNlKHByb3BlcnR5TmFtZSksXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICBkb21FbGVtZW50W2hhbmRsZXJOYW1lXSA9IGhhbmRsZXI7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICAgIGRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BlcnR5VmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHByb3BlcnR5VmFsdWVba2V5XTtcblxuICAgICAgICAgIGRvbUVsZW1lbnRbYXR0cmlidXRlTmFtZV1ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vL1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gYXR0cmlidXRlTmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gIHN3aXRjaCAocHJvcGVydHlOYW1lKSB7XG4gICAgY2FzZSAnY2xhc3NOYW1lJzpcbiAgICAgIHJldHVybiAnY2xhc3MnO1xuXG4gICAgY2FzZSAnaHRtbEZvcic6XG4gICAgICByZXR1cm4gJ2Zvcic7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlOYW1lO1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gYmVnaW5zV2l0aChzdHJpbmcsIGJlZ2lubmluZ1N0cmluZykge1xuICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBiZWdpbm5pbmdTdHJpbmcpLFxuICAgICAgbWF0Y2hlcyA9IHN0cmluZy5tYXRjaChyZWdFeHApO1xuXG4gIHJldHVybiAhIW1hdGNoZXM7IC8vL1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQpIHtcbiAgICBwYXJlbnQuYXBwZW5kKHRoaXMpO1xuICB9XG4gIFxuICByZW1vdW50KHByZXZpb3VzU2libGluZykge1xuICAgIHByZXZpb3VzU2libGluZy5hcHBlbmRBZnRlcih0aGlzKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIGFwcGVuZChjaGlsZCkge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnQgPSBjaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHZhciBwcmV2aW91c1NpYmxpbmdET01FbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwcmV2aW91c1NpYmxpbmdET01FbGVtZW50LCB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gIH1cblxuICBlbXB0eSgpIHtcbiAgICB3aGlsZSAodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0Q29tcG9uZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudCcpLFxuICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgVGV4dEVsZW1lbnQgPSByZXF1aXJlKCcuL3RleHRFbGVtZW50JyksXG4gICAgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKSxcbiAgICBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKSxcbiAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICBSZWFjdENvbXBvbmVudEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVDbGFzcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlYWN0Q2xhc3MgPSBSZWFjdENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoZmlyc3RBcmd1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICBlbGVtZW50O1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgIHZhciByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gZmlyc3RBcmd1bWVudCxcbiAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7XG5cbiAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgdmFyIGZpcnN0UmVtYWluaW5nQXJndW1lbnQgPSBmaXJzdChyZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gIGlmIChmaXJzdFJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICByZW1haW5pbmdBcmd1bWVudHMgPSBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50O1xuICB9XG5cbiAgdmFyIGNoaWxkcmVuID0gcmVtYWluaW5nQXJndW1lbnRzLm1hcChmdW5jdGlvbihyZW1haW5pbmdBcmd1bWVudCkge1xuICAgIHZhciBjaGlsZDtcblxuICAgIGlmIChyZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgfHwgcmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBSZWFjdEVsZW1lbnQpIHtcbiAgICAgIGNoaWxkID0gcmVtYWluaW5nQXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0ZXh0ID0gJycgKyByZW1haW5pbmdBcmd1bWVudCxcbiAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZGlzcGxheU5hbWUsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcbiAgICB0aGlzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gICAgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7XG4gICAgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7XG4gICAgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50O1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDtcbiAgfVxuICBcbiAgZ2V0RGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWU7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgdmFyIHJlbmRlciA9IHByb3BlcnRpZXNbJ3JlbmRlciddIHx8IGRlZmF1bHRSZW5kZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lID0gcHJvcGVydGllc1snZGlzcGxheU5hbWUnXSB8fCBkZWZhdWx0RGlzcGxheU5hbWUsXG4gICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHByb3BlcnRpZXNbJ2dldEluaXRpYWxTdGF0ZSddIHx8IGRlZmF1bHRHZXRJbml0aWFsU3RhdGUsXG4gICAgICAgIGdldENoaWxkQ29udGV4dCA9IHByb3BlcnRpZXNbJ2dldENoaWxkQ29udGV4dCddIHx8IGRlZmF1bHRHZXRDaGlsZENvbnRleHQsXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gcHJvcGVydGllc1snY29tcG9uZW50RGlkTW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQsXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gcHJvcGVydGllc1snY29tcG9uZW50V2lsbFVubW91bnQnXSB8fCBkZWZhdWx0Q29tcG9uZW50V2lsbFVubW91bnQsXG4gICAgICAgIHJlYWN0Q2xhc3MgPSBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KTtcbiAgICBcbiAgICByZXR1cm4gcmVhY3RDbGFzcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q2xhc3M7XG5cbmZ1bmN0aW9uIGRlZmF1bHRSZW5kZXIoKSB7XG4gIHZhciBwcm9wZXJ0aWVzID0gdGhpcy5wcm9wcywgIC8vL1xuICAgICAgZGlzcGxheU5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lLCAvLy9cbiAgICAgIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjsgLy8vXG5cbiAgZGVsZXRlIHByb3BlcnRpZXMuY2hpbGRyZW47IC8vL1xuXG4gIHZhciBqc3hFbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGpzeEVsZW1lbnQ7XG59XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5TmFtZSA9IHVuZGVmaW5lZDsgLy8vXG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRJbml0aWFsU3RhdGUoKSB7IHJldHVybiB7fTsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0KCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnREaWRNb3VudChjb250ZXh0KSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge31cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICB0aGlzLmluc3RhbmNlLmRpc3BsYXlOYW1lID0gcmVhY3RDbGFzcy5nZXREaXNwbGF5TmFtZSgpO1xuICAgIFxuICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSByZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZSgpOyAvLy9cblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuaW5zdGFuY2Uuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5hcHBseSh0aGlzLmluc3RhbmNlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICBcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcbiAgfVxuXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5Nb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVuTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RWxlbWVudC5lbXB0eSgpO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnRFbGVtZW50KTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07IFxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChwYXJlbnQsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcihjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gKGNoaWxkT3JDaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRPckNoaWxkcmVuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZE9yQ2hpbGRyZW5dO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdW50KHByZXZpb3VzU2libGluZywgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcmNlVXBkYXRlKCkge1xuICAgIHZhciBwcmV2aW91c0NoaWxkcmVuID0gdGhpcy5jaGlsZHJlbixcbiAgICAgICAgbGFzdFByZXZpb3VzQ2hpbGQgPSBsYXN0KHByZXZpb3VzQ2hpbGRyZW4pO1xuXG4gICAgdGhpcy5yZW1vdW50KGxhc3RQcmV2aW91c0NoaWxkKTtcblxuICAgIHByZXZpb3VzQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihwcmV2aW91c0NoaWxkKSB7XG4gICAgICBwcmV2aW91c0NoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmQocGFyZW50KSB7XG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5hcHBlbmQocGFyZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kQWZ0ZXIocHJldmlvdXNTaWJsaW5nKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uID0gcmVhY3RGdW5jdGlvbjtcblxuICAgIGlmICghcmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0ID0gZGVmYXVsdEdldENoaWxkQ29udGV4dDtcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLmluc3RhbmNlLnByb3BzLCBjb250ZXh0KTsgLy8vXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuICAgIC8vL1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRHZXRDaGlsZENvbnRleHQoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdmFyIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVlcEZyZWV6ZSAobykge1xuICBPYmplY3QuZnJlZXplKG8pO1xuXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG8pLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICBpZiAoby5oYXNPd25Qcm9wZXJ0eShwcm9wKVxuICAgICYmIG9bcHJvcF0gIT09IG51bGxcbiAgICAmJiAodHlwZW9mIG9bcHJvcF0gPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9bcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAmJiAhT2JqZWN0LmlzRnJvemVuKG9bcHJvcF0pKSB7XG4gICAgICBkZWVwRnJlZXplKG9bcHJvcF0pO1xuICAgIH1cbiAgfSk7XG4gIFxuICByZXR1cm4gbztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfaXNFcXVhbCA9IHJlcXVpcmUoJ2lzLWVxdWFsJyk7XG5cbnZhciBfaXNFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0VxdWFsKTtcblxudmFyIF9pc1JlZ2V4ID0gcmVxdWlyZSgnaXMtcmVnZXgnKTtcblxudmFyIF9pc1JlZ2V4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUmVnZXgpO1xuXG52YXIgX2Fzc2VydCA9IHJlcXVpcmUoJy4vYXNzZXJ0Jyk7XG5cbnZhciBfYXNzZXJ0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2VydCk7XG5cbnZhciBfU3B5VXRpbHMgPSByZXF1aXJlKCcuL1NweVV0aWxzJyk7XG5cbnZhciBfVGVzdFV0aWxzID0gcmVxdWlyZSgnLi9UZXN0VXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBBbiBFeHBlY3RhdGlvbiBpcyBhIHdyYXBwZXIgYXJvdW5kIGFuIGFzc2VydGlvbiB0aGF0IGFsbG93cyBpdCB0byBiZSB3cml0dGVuXG4gKiBpbiBhIG1vcmUgbmF0dXJhbCBzdHlsZSwgd2l0aG91dCB0aGUgbmVlZCB0byByZW1lbWJlciB0aGUgb3JkZXIgb2YgYXJndW1lbnRzLlxuICogVGhpcyBoZWxwcyBwcmV2ZW50IHlvdSBmcm9tIG1ha2luZyBtaXN0YWtlcyB3aGVuIHdyaXRpbmcgdGVzdHMuXG4gKi9cblxudmFyIEV4cGVjdGF0aW9uID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFeHBlY3RhdGlvbihhY3R1YWwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXhwZWN0YXRpb24pO1xuXG4gICAgdGhpcy5hY3R1YWwgPSBhY3R1YWw7XG5cbiAgICBpZiAoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikoYWN0dWFsKSkge1xuICAgICAgdGhpcy5jb250ZXh0ID0gbnVsbDtcbiAgICAgIHRoaXMuYXJncyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeHBlY3RhdGlvbiwgW3tcbiAgICBrZXk6ICd0b0V4aXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9FeGlzdChtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGV4aXN0JywgdGhpcy5hY3R1YWwpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdEV4aXN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RFeGlzdChtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoIXRoaXMuYWN0dWFsLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBub3QgZXhpc3QnLCB0aGlzLmFjdHVhbCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgPT09IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90QmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdEJlKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgIT09IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBub3QgYmUgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0VxdWFsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9FcXVhbCh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfaXNFcXVhbDIuZGVmYXVsdCkodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gZXF1YWwgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBUaGVzZSBhdHRyaWJ1dGVzIGFyZSBjb25zdW1lZCBieSBNb2NoYSB0byBwcm9kdWNlIGEgZGlmZiBvdXRwdXQuXG4gICAgICAgIGUuc2hvd0RpZmYgPSB0cnVlO1xuICAgICAgICBlLmFjdHVhbCA9IHRoaXMuYWN0dWFsO1xuICAgICAgICBlLmV4cGVjdGVkID0gdmFsdWU7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvTm90RXF1YWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b05vdEVxdWFsKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoISgwLCBfaXNFcXVhbDIuZGVmYXVsdCkodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gbm90IGVxdWFsICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9UaHJvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvVGhyb3codmFsdWUsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh0aGlzLmFjdHVhbCksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b1Rocm93KCkgbXVzdCBiZSBhIGZ1bmN0aW9uLCAlcyB3YXMgZ2l2ZW4nLCB0aGlzLmFjdHVhbCk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5mdW5jdGlvblRocm93cykodGhpcy5hY3R1YWwsIHRoaXMuY29udGV4dCwgdGhpcy5hcmdzLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIHRocm93ICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlIHx8ICdhbiBlcnJvcicpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdFRocm93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RUaHJvdyh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHRoaXMuYWN0dWFsKSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvTm90VGhyb3coKSBtdXN0IGJlIGEgZnVuY3Rpb24sICVzIHdhcyBnaXZlbicsIHRoaXMuYWN0dWFsKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCEoMCwgX1Rlc3RVdGlscy5mdW5jdGlvblRocm93cykodGhpcy5hY3R1YWwsIHRoaXMuY29udGV4dCwgdGhpcy5hcmdzLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG5vdCB0aHJvdyAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSB8fCAnYW4gZXJyb3InKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZUEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0JlQSh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCgwLCBfVGVzdFV0aWxzLmlzRnVuY3Rpb24pKHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b0JlQSh2YWx1ZSkgbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0EpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGEgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdEJlQScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90QmVBKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvTm90QmVBKHZhbHVlKSBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmcnKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCEoMCwgX1Rlc3RVdGlscy5pc0EpKHRoaXMuYWN0dWFsLCB2YWx1ZSksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGEgJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b01hdGNoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9NYXRjaChwYXR0ZXJuLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnc3RyaW5nJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvTWF0Y2goKSBtdXN0IGJlIGEgc3RyaW5nJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX2lzUmVnZXgyLmRlZmF1bHQpKHBhdHRlcm4pLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b01hdGNoKHZhbHVlKSBtdXN0IGJlIGEgUmVnRXhwJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KShwYXR0ZXJuLnRlc3QodGhpcy5hY3R1YWwpLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBtYXRjaCAlcycsIHRoaXMuYWN0dWFsLCBwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9Ob3RNYXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvTm90TWF0Y2gocGF0dGVybiwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ3N0cmluZycsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b05vdE1hdGNoKCkgbXVzdCBiZSBhIHN0cmluZycpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9pc1JlZ2V4Mi5kZWZhdWx0KShwYXR0ZXJuKSwgJ1RoZSBcInZhbHVlXCIgYXJndW1lbnQgaW4gdG9Ob3RNYXRjaCh2YWx1ZSkgbXVzdCBiZSBhIFJlZ0V4cCcpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoIXBhdHRlcm4udGVzdCh0aGlzLmFjdHVhbCksIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIG5vdCBtYXRjaCAlcycsIHRoaXMuYWN0dWFsLCBwYXR0ZXJuKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZUxlc3NUaGFuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZUxlc3NUaGFuKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnbnVtYmVyJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvQmVMZXNzVGhhbigpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvQmVMZXNzVGhhbih2YWx1ZSkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgPCB2YWx1ZSwgbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gYmUgbGVzcyB0aGFuICVzJywgdGhpcy5hY3R1YWwsIHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9CZUxlc3NUaGFuT3JFcXVhbFRvJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9CZUxlc3NUaGFuT3JFcXVhbFRvKHZhbHVlLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodHlwZW9mIHRoaXMuYWN0dWFsID09PSAnbnVtYmVyJywgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvQmVMZXNzVGhhbk9yRXF1YWxUbygpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicsICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IGluIHRvQmVMZXNzVGhhbk9yRXF1YWxUbyh2YWx1ZSkgbXVzdCBiZSBhIG51bWJlcicpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkodGhpcy5hY3R1YWwgPD0gdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmVHcmVhdGVyVGhhbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmVHcmVhdGVyVGhhbih2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ251bWJlcicsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0JlR3JlYXRlclRoYW4oKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b0JlR3JlYXRlclRoYW4odmFsdWUpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsID4gdmFsdWUsIG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGJlIGdyZWF0ZXIgdGhhbiAlcycsIHRoaXMuYWN0dWFsLCB2YWx1ZSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQmVHcmVhdGVyVGhhbk9yRXF1YWxUbyh2YWx1ZSwgbWVzc2FnZSkge1xuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ251bWJlcicsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0JlR3JlYXRlclRoYW5PckVxdWFsVG8oKSBtdXN0IGJlIGEgbnVtYmVyJyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInLCAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBpbiB0b0JlR3JlYXRlclRoYW5PckVxdWFsVG8odmFsdWUpIG11c3QgYmUgYSBudW1iZXInKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHRoaXMuYWN0dWFsID49IHZhbHVlLCBtZXNzYWdlIHx8ICdFeHBlY3RlZCAlcyB0byBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJXMnLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0luY2x1ZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0luY2x1ZGUodmFsdWUsIGNvbXBhcmVWYWx1ZXMsIG1lc3NhZ2UpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0FycmF5KSh0aGlzLmFjdHVhbCkgfHwgKDAsIF9UZXN0VXRpbHMuaXNPYmplY3QpKHRoaXMuYWN0dWFsKSB8fCB0eXBlb2YgdGhpcy5hY3R1YWwgPT09ICdzdHJpbmcnLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9JbmNsdWRlKCkgbXVzdCBiZSBhbiBhcnJheSwgb2JqZWN0LCBvciBhIHN0cmluZycpO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbXBhcmVWYWx1ZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBjb21wYXJlVmFsdWVzO1xuICAgICAgICBjb21wYXJlVmFsdWVzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UgfHwgJ0V4cGVjdGVkICVzIHRvIGluY2x1ZGUgJXMnO1xuXG4gICAgICBpZiAoKDAsIF9UZXN0VXRpbHMuaXNBcnJheSkodGhpcy5hY3R1YWwpKSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5hcnJheUNvbnRhaW5zKSh0aGlzLmFjdHVhbCwgdmFsdWUsIGNvbXBhcmVWYWx1ZXMpLCBtZXNzYWdlLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICgoMCwgX1Rlc3RVdGlscy5pc09iamVjdCkodGhpcy5hY3R1YWwpKSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5vYmplY3RDb250YWlucykodGhpcy5hY3R1YWwsIHZhbHVlLCBjb21wYXJlVmFsdWVzKSwgbWVzc2FnZSwgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5zdHJpbmdDb250YWlucykodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSwgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9FeGNsdWRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9FeGNsdWRlKHZhbHVlLCBjb21wYXJlVmFsdWVzLCBtZXNzYWdlKSB7XG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNBcnJheSkodGhpcy5hY3R1YWwpIHx8IHR5cGVvZiB0aGlzLmFjdHVhbCA9PT0gJ3N0cmluZycsICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS50b0V4Y2x1ZGUoKSBtdXN0IGJlIGFuIGFycmF5IG9yIGEgc3RyaW5nJyk7XG5cbiAgICAgIGlmICh0eXBlb2YgY29tcGFyZVZhbHVlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbWVzc2FnZSA9IGNvbXBhcmVWYWx1ZXM7XG4gICAgICAgIGNvbXBhcmVWYWx1ZXMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBtZXNzYWdlID0gbWVzc2FnZSB8fCAnRXhwZWN0ZWQgJXMgdG8gZXhjbHVkZSAlcyc7XG5cbiAgICAgIGlmICgoMCwgX1Rlc3RVdGlscy5pc0FycmF5KSh0aGlzLmFjdHVhbCkpIHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCEoMCwgX1Rlc3RVdGlscy5hcnJheUNvbnRhaW5zKSh0aGlzLmFjdHVhbCwgdmFsdWUsIGNvbXBhcmVWYWx1ZXMpLCBtZXNzYWdlLCB0aGlzLmFjdHVhbCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKCEoMCwgX1Rlc3RVdGlscy5zdHJpbmdDb250YWlucykodGhpcy5hY3R1YWwsIHZhbHVlKSwgbWVzc2FnZSwgdGhpcy5hY3R1YWwsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9IYXZlQmVlbkNhbGxlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGF2ZUJlZW5DYWxsZWQobWVzc2FnZSkge1xuICAgICAgdmFyIHNweSA9IHRoaXMuYWN0dWFsO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9TcHlVdGlscy5pc1NweSkoc3B5KSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvSGF2ZUJlZW5DYWxsZWQoKSBtdXN0IGJlIGEgc3B5Jyk7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KShzcHkuY2FsbHMubGVuZ3RoID4gMCwgbWVzc2FnZSB8fCAnc3B5IHdhcyBub3QgY2FsbGVkJyk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvSGF2ZUJlZW5DYWxsZWRXaXRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9IYXZlQmVlbkNhbGxlZFdpdGgoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZXhwZWN0ZWRBcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGV4cGVjdGVkQXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNweSA9IHRoaXMuYWN0dWFsO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9TcHlVdGlscy5pc1NweSkoc3B5KSwgJ1RoZSBcImFjdHVhbFwiIGFyZ3VtZW50IGluIGV4cGVjdChhY3R1YWwpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKCkgbXVzdCBiZSBhIHNweScpO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoc3B5LmNhbGxzLnNvbWUoZnVuY3Rpb24gKGNhbGwpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfaXNFcXVhbDIuZGVmYXVsdCkoY2FsbC5hcmd1bWVudHMsIGV4cGVjdGVkQXJncyk7XG4gICAgICB9KSwgJ3NweSB3YXMgbmV2ZXIgY2FsbGVkIHdpdGggJXMnLCBleHBlY3RlZEFyZ3MpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b05vdEhhdmVCZWVuQ2FsbGVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9Ob3RIYXZlQmVlbkNhbGxlZChtZXNzYWdlKSB7XG4gICAgICB2YXIgc3B5ID0gdGhpcy5hY3R1YWw7XG5cbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1NweVV0aWxzLmlzU3B5KShzcHkpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkudG9Ob3RIYXZlQmVlbkNhbGxlZCgpIG11c3QgYmUgYSBzcHknKTtcblxuICAgICAgKDAsIF9hc3NlcnQyLmRlZmF1bHQpKHNweS5jYWxscy5sZW5ndGggPT09IDAsIG1lc3NhZ2UgfHwgJ3NweSB3YXMgbm90IHN1cHBvc2VkIHRvIGJlIGNhbGxlZCcpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3aXRoQ29udGV4dCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhDb250ZXh0KGNvbnRleHQpIHtcbiAgICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKSh0aGlzLmFjdHVhbCksICdUaGUgXCJhY3R1YWxcIiBhcmd1bWVudCBpbiBleHBlY3QoYWN0dWFsKS53aXRoQ29udGV4dCgpIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3aXRoQXJncycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdpdGhBcmdzKCkge1xuICAgICAgdmFyIF9hcmdzO1xuXG4gICAgICAoMCwgX2Fzc2VydDIuZGVmYXVsdCkoKDAsIF9UZXN0VXRpbHMuaXNGdW5jdGlvbikodGhpcy5hY3R1YWwpLCAnVGhlIFwiYWN0dWFsXCIgYXJndW1lbnQgaW4gZXhwZWN0KGFjdHVhbCkud2l0aEFyZ3MoKSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHRoaXMuYXJncyA9IChfYXJncyA9IHRoaXMuYXJncykuY29uY2F0LmFwcGx5KF9hcmdzLCBhcmd1bWVudHMpO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXhwZWN0YXRpb247XG59KCk7XG5cbnZhciBhbGlhc2VzID0ge1xuICB0b0JlQW46ICd0b0JlQScsXG4gIHRvTm90QmVBbjogJ3RvTm90QmVBJyxcbiAgdG9CZVRydXRoeTogJ3RvRXhpc3QnLFxuICB0b0JlRmFsc3k6ICd0b05vdEV4aXN0JyxcbiAgdG9CZUZld2VyVGhhbjogJ3RvQmVMZXNzVGhhbicsXG4gIHRvQmVNb3JlVGhhbjogJ3RvQmVHcmVhdGVyVGhhbicsXG4gIHRvQ29udGFpbjogJ3RvSW5jbHVkZScsXG4gIHRvTm90Q29udGFpbjogJ3RvRXhjbHVkZSdcbn07XG5cbmZvciAodmFyIGFsaWFzIGluIGFsaWFzZXMpIHtcbiAgaWYgKGFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpKSBFeHBlY3RhdGlvbi5wcm90b3R5cGVbYWxpYXNdID0gRXhwZWN0YXRpb24ucHJvdG90eXBlW2FsaWFzZXNbYWxpYXNdXTtcbn1leHBvcnRzLmRlZmF1bHQgPSBFeHBlY3RhdGlvbjsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlc3RvcmVTcGllcyA9IGV4cG9ydHMuaXNTcHkgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmNyZWF0ZVNweSA9IGNyZWF0ZVNweTtcbmV4cG9ydHMuc3B5T24gPSBzcHlPbjtcblxudmFyIF9hc3NlcnQgPSByZXF1aXJlKCcuL2Fzc2VydCcpO1xuXG52YXIgX2Fzc2VydDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NlcnQpO1xuXG52YXIgX1Rlc3RVdGlscyA9IHJlcXVpcmUoJy4vVGVzdFV0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1yZXN0LXBhcmFtcyAqL1xuXG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgaXNTcHkgPSBleHBvcnRzLmlzU3B5ID0gZnVuY3Rpb24gaXNTcHkob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgJiYgb2JqZWN0Ll9faXNTcHkgPT09IHRydWU7XG59O1xuXG52YXIgc3BpZXMgPSBbXTtcblxudmFyIHJlc3RvcmVTcGllcyA9IGV4cG9ydHMucmVzdG9yZVNwaWVzID0gZnVuY3Rpb24gcmVzdG9yZVNwaWVzKCkge1xuICBmb3IgKHZhciBpID0gc3BpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBzcGllc1tpXS5yZXN0b3JlKCk7XG4gIH1zcGllcyA9IFtdO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlU3B5KGZuKSB7XG4gIHZhciByZXN0b3JlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gbm9vcCA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAoZm4gPT0gbnVsbCkgZm4gPSBub29wO1xuXG4gICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKShmbiksICdjcmVhdGVTcHkgbmVlZHMgYSBmdW5jdGlvbicpO1xuXG4gIHZhciB0YXJnZXRGbiA9IHZvaWQgMCxcbiAgICAgIHRocm93blZhbHVlID0gdm9pZCAwLFxuICAgICAgcmV0dXJuVmFsdWUgPSB2b2lkIDA7XG5cbiAgdmFyIHNweSA9IGZ1bmN0aW9uIHNweSgpIHtcbiAgICBzcHkuY2FsbHMucHVzaCh7XG4gICAgICBjb250ZXh0OiB0aGlzLFxuICAgICAgYXJndW1lbnRzOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgfSk7XG5cbiAgICBpZiAodGFyZ2V0Rm4pIHJldHVybiB0YXJnZXRGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRocm93blZhbHVlKSB0aHJvdyB0aHJvd25WYWx1ZTtcblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICBzcHkuY2FsbHMgPSBbXTtcblxuICBzcHkuYW5kQ2FsbCA9IGZ1bmN0aW9uIChvdGhlckZuKSB7XG4gICAgdGFyZ2V0Rm4gPSBvdGhlckZuO1xuICAgIHJldHVybiBzcHk7XG4gIH07XG5cbiAgc3B5LmFuZENhbGxUaHJvdWdoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzcHkuYW5kQ2FsbChmbik7XG4gIH07XG5cbiAgc3B5LmFuZFRocm93ID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHRocm93blZhbHVlID0gb2JqZWN0O1xuICAgIHJldHVybiBzcHk7XG4gIH07XG5cbiAgc3B5LmFuZFJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVyblZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHNweTtcbiAgfTtcblxuICBzcHkuZ2V0TGFzdENhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNweS5jYWxsc1tzcHkuY2FsbHMubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgc3B5LnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHNweS5jYWxscyA9IFtdO1xuICB9O1xuXG4gIHNweS5yZXN0b3JlID0gc3B5LmRlc3Ryb3kgPSByZXN0b3JlO1xuXG4gIHNweS5fX2lzU3B5ID0gdHJ1ZTtcblxuICBzcGllcy5wdXNoKHNweSk7XG5cbiAgcmV0dXJuIHNweTtcbn1cblxuZnVuY3Rpb24gc3B5T24ob2JqZWN0LCBtZXRob2ROYW1lKSB7XG4gIHZhciBvcmlnaW5hbCA9IG9iamVjdFttZXRob2ROYW1lXTtcblxuICBpZiAoIWlzU3B5KG9yaWdpbmFsKSkge1xuICAgICgwLCBfYXNzZXJ0Mi5kZWZhdWx0KSgoMCwgX1Rlc3RVdGlscy5pc0Z1bmN0aW9uKShvcmlnaW5hbCksICdDYW5ub3Qgc3B5T24gdGhlICVzIHByb3BlcnR5OyBpdCBpcyBub3QgYSBmdW5jdGlvbicsIG1ldGhvZE5hbWUpO1xuXG4gICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY3JlYXRlU3B5KG9yaWdpbmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBvcmlnaW5hbDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3RbbWV0aG9kTmFtZV07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5zdHJpbmdDb250YWlucyA9IGV4cG9ydHMub2JqZWN0Q29udGFpbnMgPSBleHBvcnRzLmFycmF5Q29udGFpbnMgPSBleHBvcnRzLmZ1bmN0aW9uVGhyb3dzID0gZXhwb3J0cy5pc0EgPSBleHBvcnRzLmlzT2JqZWN0ID0gZXhwb3J0cy5pc0FycmF5ID0gZXhwb3J0cy5pc0Z1bmN0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9pc0VxdWFsID0gcmVxdWlyZSgnaXMtZXF1YWwnKTtcblxudmFyIF9pc0VxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRXF1YWwpO1xuXG52YXIgX2lzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xuXG52YXIgX2lzUmVnZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNSZWdleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYSBmdW5jdGlvbi5cbiAqL1xudmFyIGlzRnVuY3Rpb24gPSBleHBvcnRzLmlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gYXJyYXkuXG4gKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShvYmplY3QpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqZWN0KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0LlxuICovXG52YXIgaXNPYmplY3QgPSBleHBvcnRzLmlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3QgJiYgIWlzQXJyYXkob2JqZWN0KSAmJiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09ICdvYmplY3QnO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBpbnN0YW5jZW9mIHZhbHVlXG4gKiBvciBpdHMgdHlwZW9mIGlzIHRoZSBnaXZlbiB2YWx1ZS5cbiAqL1xudmFyIGlzQSA9IGV4cG9ydHMuaXNBID0gZnVuY3Rpb24gaXNBKG9iamVjdCwgdmFsdWUpIHtcbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdmFsdWU7XG5cbiAgaWYgKHZhbHVlID09PSAnYXJyYXknKSByZXR1cm4gQXJyYXkuaXNBcnJheShvYmplY3QpO1xuXG4gIHJldHVybiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob2JqZWN0KSkgPT09IHZhbHVlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGZ1bmN0aW9uIHRocm93cyB0aGUgZ2l2ZW4gdmFsdWVcbiAqIHdoZW4gaW52b2tlZC4gVGhlIHZhbHVlIG1heSBiZTpcbiAqXG4gKiAtIHVuZGVmaW5lZCwgdG8gbWVyZWx5IGFzc2VydCB0aGVyZSB3YXMgYSB0aHJvd1xuICogLSBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBmb3IgY29tcGFyaW5nIHVzaW5nIGluc3RhbmNlb2ZcbiAqIC0gYSByZWd1bGFyIGV4cHJlc3Npb24sIHRvIGNvbXBhcmUgd2l0aCB0aGUgZXJyb3IgbWVzc2FnZVxuICogLSBhIHN0cmluZywgdG8gZmluZCBpbiB0aGUgZXJyb3IgbWVzc2FnZVxuICovXG52YXIgZnVuY3Rpb25UaHJvd3MgPSBleHBvcnRzLmZ1bmN0aW9uVGhyb3dzID0gZnVuY3Rpb24gZnVuY3Rpb25UaHJvd3MoZm4sIGNvbnRleHQsIGFyZ3MsIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpICYmIGVycm9yIGluc3RhbmNlb2YgdmFsdWUpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8IGVycm9yO1xuXG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCgwLCBfaXNSZWdleDIuZGVmYXVsdCkodmFsdWUpICYmIHZhbHVlLnRlc3QoZXJyb3IubWVzc2FnZSkpIHJldHVybiB0cnVlO1xuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBtZXNzYWdlLmluZGV4T2YodmFsdWUpICE9PSAtMSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGFycmF5IGNvbnRhaW5zIHRoZSB2YWx1ZSwgZmFsc2VcbiAqIG90aGVyd2lzZS4gVGhlIGNvbXBhcmVWYWx1ZXMgZnVuY3Rpb24gbXVzdCByZXR1cm4gZmFsc2UgdG9cbiAqIGluZGljYXRlIGEgbm9uLW1hdGNoLlxuICovXG52YXIgYXJyYXlDb250YWlucyA9IGV4cG9ydHMuYXJyYXlDb250YWlucyA9IGZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyYXksIHZhbHVlLCBjb21wYXJlVmFsdWVzKSB7XG4gIGlmIChjb21wYXJlVmFsdWVzID09IG51bGwpIGNvbXBhcmVWYWx1ZXMgPSBfaXNFcXVhbDIuZGVmYXVsdDtcblxuICByZXR1cm4gYXJyYXkuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBjb21wYXJlVmFsdWVzKGl0ZW0sIHZhbHVlKSAhPT0gZmFsc2U7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBjb250YWlucyB0aGUgdmFsdWUsIGZhbHNlXG4gKiBvdGhlcndpc2UuIFRoZSBjb21wYXJlVmFsdWVzIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGZhbHNlIHRvXG4gKiBpbmRpY2F0ZSBhIG5vbi1tYXRjaC5cbiAqL1xudmFyIG9iamVjdENvbnRhaW5zID0gZXhwb3J0cy5vYmplY3RDb250YWlucyA9IGZ1bmN0aW9uIG9iamVjdENvbnRhaW5zKG9iamVjdCwgdmFsdWUsIGNvbXBhcmVWYWx1ZXMpIHtcbiAgaWYgKGNvbXBhcmVWYWx1ZXMgPT0gbnVsbCkgY29tcGFyZVZhbHVlcyA9IF9pc0VxdWFsMi5kZWZhdWx0O1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkuZXZlcnkoZnVuY3Rpb24gKGspIHtcbiAgICBpZiAoaXNPYmplY3Qob2JqZWN0W2tdKSkge1xuICAgICAgcmV0dXJuIG9iamVjdENvbnRhaW5zKG9iamVjdFtrXSwgdmFsdWVba10sIGNvbXBhcmVWYWx1ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlVmFsdWVzKG9iamVjdFtrXSwgdmFsdWVba10pO1xuICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBzdHJpbmcgY29udGFpbnMgdGhlIHZhbHVlLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cbnZhciBzdHJpbmdDb250YWlucyA9IGV4cG9ydHMuc3RyaW5nQ29udGFpbnMgPSBmdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHJpbmcsIHZhbHVlKSB7XG4gIHJldHVybiBzdHJpbmcuaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfb2JqZWN0SW5zcGVjdCA9IHJlcXVpcmUoJ29iamVjdC1pbnNwZWN0Jyk7XG5cbnZhciBfb2JqZWN0SW5zcGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RJbnNwZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbWVzc2FnZUZvcm1hdCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZXh0cmFBcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGV4dHJhQXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoY29uZGl0aW9uKSByZXR1cm47XG5cbiAgdmFyIGluZGV4ID0gMDtcblxuICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZUZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfb2JqZWN0SW5zcGVjdDIuZGVmYXVsdCkoZXh0cmFBcmdzW2luZGV4KytdKTtcbiAgfSkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBhc3NlcnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX0V4cGVjdGF0aW9uID0gcmVxdWlyZSgnLi9FeHBlY3RhdGlvbicpO1xuXG52YXIgX0V4cGVjdGF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0V4cGVjdGF0aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEV4dGVuc2lvbnMgPSBbXTtcblxuZnVuY3Rpb24gZXh0ZW5kKGV4dGVuc2lvbikge1xuICBpZiAoRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPT09IC0xKSB7XG4gICAgRXh0ZW5zaW9ucy5wdXNoKGV4dGVuc2lvbik7XG5cbiAgICBmb3IgKHZhciBwIGluIGV4dGVuc2lvbikge1xuICAgICAgaWYgKGV4dGVuc2lvbi5oYXNPd25Qcm9wZXJ0eShwKSkgX0V4cGVjdGF0aW9uMi5kZWZhdWx0LnByb3RvdHlwZVtwXSA9IGV4dGVuc2lvbltwXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZXh0ZW5kOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9FeHBlY3RhdGlvbiA9IHJlcXVpcmUoJy4vRXhwZWN0YXRpb24nKTtcblxudmFyIF9FeHBlY3RhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9FeHBlY3RhdGlvbik7XG5cbnZhciBfU3B5VXRpbHMgPSByZXF1aXJlKCcuL1NweVV0aWxzJyk7XG5cbnZhciBfYXNzZXJ0ID0gcmVxdWlyZSgnLi9hc3NlcnQnKTtcblxudmFyIF9hc3NlcnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzZXJ0KTtcblxudmFyIF9leHRlbmQgPSByZXF1aXJlKCcuL2V4dGVuZCcpO1xuXG52YXIgX2V4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBleHBlY3QoYWN0dWFsKSB7XG4gIHJldHVybiBuZXcgX0V4cGVjdGF0aW9uMi5kZWZhdWx0KGFjdHVhbCk7XG59XG5cbmV4cGVjdC5jcmVhdGVTcHkgPSBfU3B5VXRpbHMuY3JlYXRlU3B5O1xuZXhwZWN0LnNweU9uID0gX1NweVV0aWxzLnNweU9uO1xuZXhwZWN0LmlzU3B5ID0gX1NweVV0aWxzLmlzU3B5O1xuZXhwZWN0LnJlc3RvcmVTcGllcyA9IF9TcHlVdGlscy5yZXN0b3JlU3BpZXM7XG5leHBlY3QuYXNzZXJ0ID0gX2Fzc2VydDIuZGVmYXVsdDtcbmV4cGVjdC5leHRlbmQgPSBfZXh0ZW5kMi5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cGVjdDsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbWFwRm9yRWFjaCA9IChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBNYXAgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR0cnkge1xuXHRcdFx0TWFwLnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoe30sIGZ1bmN0aW9uICgpIHt9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gTWFwLnByb3RvdHlwZS5mb3JFYWNoO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSgpKTtcblxuXHR2YXIgc2V0Rm9yRWFjaCA9IChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBTZXQgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIG51bGw7IH1cblx0XHR0cnkge1xuXHRcdFx0U2V0LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoe30sIGZ1bmN0aW9uICgpIHt9KTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gU2V0LnByb3RvdHlwZS5mb3JFYWNoO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSgpKTtcblxuXHRyZXR1cm4geyBNYXA6IG1hcEZvckVhY2gsIFNldDogc2V0Rm9yRWFjaCB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnaXMtc3ltYm9sJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U3ltYm9sSXRlcmF0b3IoKSB7XG5cdHZhciBzeW1ib2xJdGVyYXRvciA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKSA/IFN5bWJvbC5pdGVyYXRvciA6IG51bGw7XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBNYXAucHJvdG90eXBlLmVudHJpZXMgPT09ICdmdW5jdGlvbicpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhNYXAucHJvdG90eXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0XHRpZiAobmFtZSAhPT0gJ2VudHJpZXMnICYmIG5hbWUgIT09ICdzaXplJyAmJiBNYXAucHJvdG90eXBlW25hbWVdID09PSBNYXAucHJvdG90eXBlLmVudHJpZXMpIHtcblx0XHRcdFx0c3ltYm9sSXRlcmF0b3IgPSBuYW1lO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIHN5bWJvbEl0ZXJhdG9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoeU5vdEVxdWFsID0gcmVxdWlyZSgnLi93aHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0VxdWFsKHZhbHVlLCBvdGhlcikge1xuXHRyZXR1cm4gd2h5Tm90RXF1YWwodmFsdWUsIG90aGVyKSA9PT0gJyc7XG59O1xuIiwidmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCJ2YXIgaW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuL2ltcGxlbWVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgfHwgaW1wbGVtZW50YXRpb247XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGlzTm9uQXJyb3dGblJlZ2V4ID0gL15cXHMqZnVuY3Rpb24vO1xudmFyIGlzQXJyb3dGbldpdGhQYXJlbnNSZWdleCA9IC9eXFwoW15cXCldKlxcKSAqPT4vO1xudmFyIGlzQXJyb3dGbldpdGhvdXRQYXJlbnNSZWdleCA9IC9eW149XSo9Pi87XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBcnJvd0Z1bmN0aW9uKGZuKSB7XG5cdGlmICghaXNDYWxsYWJsZShmbikpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBmblN0ciA9IGZuVG9TdHIuY2FsbChmbik7XG5cdHJldHVybiBmblN0ci5sZW5ndGggPiAwICYmXG5cdFx0IWlzTm9uQXJyb3dGblJlZ2V4LnRlc3QoZm5TdHIpICYmXG5cdFx0KGlzQXJyb3dGbldpdGhQYXJlbnNSZWdleC50ZXN0KGZuU3RyKSB8fCBpc0Fycm93Rm5XaXRob3V0UGFyZW5zUmVnZXgudGVzdChmblN0cikpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJvb2xUb1N0ciA9IEJvb2xlYW4ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgdHJ5Qm9vbGVhbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUJvb2xlYW5PYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRib29sVG9TdHIuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGJvb2xDbGFzcyA9ICdbb2JqZWN0IEJvb2xlYW5dJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykgeyByZXR1cm4gdHJ1ZTsgfVxuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5Qm9vbGVhbk9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gYm9vbENsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBjb25zdHJ1Y3RvclJlZ2V4ID0gL15cXHMqY2xhc3MgLztcbnZhciBpc0VTNkNsYXNzRm4gPSBmdW5jdGlvbiBpc0VTNkNsYXNzRm4odmFsdWUpIHtcblx0dHJ5IHtcblx0XHR2YXIgZm5TdHIgPSBmblRvU3RyLmNhbGwodmFsdWUpO1xuXHRcdHZhciBzaW5nbGVTdHJpcHBlZCA9IGZuU3RyLnJlcGxhY2UoL1xcL1xcLy4qXFxuL2csICcnKTtcblx0XHR2YXIgbXVsdGlTdHJpcHBlZCA9IHNpbmdsZVN0cmlwcGVkLnJlcGxhY2UoL1xcL1xcKlsuXFxzXFxTXSpcXCpcXC8vZywgJycpO1xuXHRcdHZhciBzcGFjZVN0cmlwcGVkID0gbXVsdGlTdHJpcHBlZC5yZXBsYWNlKC9cXG4vbWcsICcgJykucmVwbGFjZSgvIHsyfS9nLCAnICcpO1xuXHRcdHJldHVybiBjb25zdHJ1Y3RvclJlZ2V4LnRlc3Qoc3BhY2VTdHJpcHBlZCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7IC8vIG5vdCBhIGZ1bmN0aW9uXG5cdH1cbn07XG5cbnZhciB0cnlGdW5jdGlvbk9iamVjdCA9IGZ1bmN0aW9uIHRyeUZ1bmN0aW9uT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFx0Zm5Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZm5DbGFzcyA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG52YXIgZ2VuQ2xhc3MgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xudmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sLnRvU3RyaW5nVGFnID09PSAnc3ltYm9sJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbGxhYmxlKHZhbHVlKSB7XG5cdGlmICghdmFsdWUpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKGhhc1RvU3RyaW5nVGFnKSB7IHJldHVybiB0cnlGdW5jdGlvbk9iamVjdCh2YWx1ZSk7IH1cblx0aWYgKGlzRVM2Q2xhc3NGbih2YWx1ZSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBzdHJDbGFzcyA9IHRvU3RyLmNhbGwodmFsdWUpO1xuXHRyZXR1cm4gc3RyQ2xhc3MgPT09IGZuQ2xhc3MgfHwgc3RyQ2xhc3MgPT09IGdlbkNsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdldERheSA9IERhdGUucHJvdG90eXBlLmdldERheTtcbnZhciB0cnlEYXRlT2JqZWN0ID0gZnVuY3Rpb24gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkge1xuXHR0cnkge1xuXHRcdGdldERheS5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBkYXRlQ2xhc3MgPSAnW29iamVjdCBEYXRlXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRGF0ZU9iamVjdCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JyB8fCB2YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5RGF0ZU9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gZGF0ZUNsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmblRvU3RyID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGlzRm5SZWdleCA9IC9eXFxzKmZ1bmN0aW9uXFwqLztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHZhciBmblN0ciA9IHRvU3RyLmNhbGwoZm4pO1xuXHRyZXR1cm4gKGZuU3RyID09PSAnW29iamVjdCBGdW5jdGlvbl0nIHx8IGZuU3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nKSAmJiBpc0ZuUmVnZXgudGVzdChmblRvU3RyLmNhbGwoZm4pKTtcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG51bVRvU3RyID0gTnVtYmVyLnByb3RvdHlwZS50b1N0cmluZztcbnZhciB0cnlOdW1iZXJPYmplY3QgPSBmdW5jdGlvbiB0cnlOdW1iZXJPYmplY3QodmFsdWUpIHtcblx0dHJ5IHtcblx0XHRudW1Ub1N0ci5jYWxsKHZhbHVlKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbnVtQ2xhc3MgPSAnW29iamVjdCBOdW1iZXJdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNOdW1iZXJPYmplY3QodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHsgcmV0dXJuIHRydWU7IH1cblx0aWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiBoYXNUb1N0cmluZ1RhZyA/IHRyeU51bWJlck9iamVjdCh2YWx1ZSkgOiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gbnVtQ2xhc3M7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyVmFsdWUgPSBTdHJpbmcucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgdHJ5U3RyaW5nT2JqZWN0ID0gZnVuY3Rpb24gdHJ5U3RyaW5nT2JqZWN0KHZhbHVlKSB7XG5cdHRyeSB7XG5cdFx0c3RyVmFsdWUuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHN0ckNsYXNzID0gJ1tvYmplY3QgU3RyaW5nXSc7XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7IHJldHVybiB0cnVlOyB9XG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gaGFzVG9TdHJpbmdUYWcgPyB0cnlTdHJpbmdPYmplY3QodmFsdWUpIDogdG9TdHIuY2FsbCh2YWx1ZSkgPT09IHN0ckNsYXNzO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBoYXNTeW1ib2xzID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sKCkgPT09ICdzeW1ib2wnO1xuXG5pZiAoaGFzU3ltYm9scykge1xuXHR2YXIgc3ltVG9TdHIgPSBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nO1xuXHR2YXIgc3ltU3RyaW5nUmVnZXggPSAvXlN5bWJvbFxcKC4qXFwpJC87XG5cdHZhciBpc1N5bWJvbE9iamVjdCA9IGZ1bmN0aW9uIGlzU3ltYm9sT2JqZWN0KHZhbHVlKSB7XG5cdFx0aWYgKHR5cGVvZiB2YWx1ZS52YWx1ZU9mKCkgIT09ICdzeW1ib2wnKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcdHJldHVybiBzeW1TdHJpbmdSZWdleC50ZXN0KHN5bVRvU3RyLmNhbGwodmFsdWUpKTtcblx0fTtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0aWYgKHRvU3RyLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBTeW1ib2xdJykgeyByZXR1cm4gZmFsc2U7IH1cblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIGlzU3ltYm9sT2JqZWN0KHZhbHVlKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuXHRcdC8vIHRoaXMgZW52aXJvbm1lbnQgZG9lcyBub3Qgc3VwcG9ydCBTeW1ib2xzLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG52YXIgdG9TdHIgPSBPYmplY3RQcm90b3R5cGUudG9TdHJpbmc7XG52YXIgYm9vbGVhblZhbHVlID0gQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZjtcbnZhciBoYXMgPSByZXF1aXJlKCdoYXMnKTtcbnZhciBpc0Fycm93RnVuY3Rpb24gPSByZXF1aXJlKCdpcy1hcnJvdy1mdW5jdGlvbicpO1xudmFyIGlzQm9vbGVhbiA9IHJlcXVpcmUoJ2lzLWJvb2xlYW4tb2JqZWN0Jyk7XG52YXIgaXNEYXRlID0gcmVxdWlyZSgnaXMtZGF0ZS1vYmplY3QnKTtcbnZhciBpc0dlbmVyYXRvciA9IHJlcXVpcmUoJ2lzLWdlbmVyYXRvci1mdW5jdGlvbicpO1xudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnaXMtbnVtYmVyLW9iamVjdCcpO1xudmFyIGlzUmVnZXggPSByZXF1aXJlKCdpcy1yZWdleCcpO1xudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnaXMtc3RyaW5nJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdpcy1zeW1ib2wnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnaXMtY2FsbGFibGUnKTtcblxudmFyIGlzUHJvdG8gPSBPYmplY3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2Y7XG5cbnZhciBmb28gPSBmdW5jdGlvbiBmb28oKSB7fTtcbnZhciBmdW5jdGlvbnNIYXZlTmFtZXMgPSBmb28ubmFtZSA9PT0gJ2Zvbyc7XG5cbnZhciBzeW1ib2xWYWx1ZSA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgPyBTeW1ib2wucHJvdG90eXBlLnZhbHVlT2YgOiBudWxsO1xudmFyIHN5bWJvbEl0ZXJhdG9yID0gcmVxdWlyZSgnLi9nZXRTeW1ib2xJdGVyYXRvcicpKCk7XG5cbnZhciBjb2xsZWN0aW9uc0ZvckVhY2ggPSByZXF1aXJlKCcuL2dldENvbGxlY3Rpb25zRm9yRWFjaCcpKCk7XG5cbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbmlmICghZ2V0UHJvdG90eXBlT2YpIHtcblx0LyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblx0aWYgKHR5cGVvZiAndGVzdCcuX19wcm90b19fID09PSAnb2JqZWN0Jykge1xuXHRcdGdldFByb3RvdHlwZU9mID0gZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0cmV0dXJuIG9iai5fX3Byb3RvX187XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRnZXRQcm90b3R5cGVPZiA9IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdHZhciBjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3Rvcixcblx0XHRcdFx0b2xkQ29uc3RydWN0b3I7XG5cdFx0XHRpZiAoaGFzKG9iaiwgJ2NvbnN0cnVjdG9yJykpIHtcblx0XHRcdFx0b2xkQ29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcblx0XHRcdFx0aWYgKCEoZGVsZXRlIG9iai5jb25zdHJ1Y3RvcikpIHsgLy8gcmVzZXQgY29uc3RydWN0b3Jcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDsgLy8gY2FuJ3QgZGVsZXRlIG9iai5jb25zdHJ1Y3RvciwgcmV0dXJuIG51bGxcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdHJ1Y3RvciA9IG9iai5jb25zdHJ1Y3RvcjsgLy8gZ2V0IHJlYWwgY29uc3RydWN0b3Jcblx0XHRcdFx0b2JqLmNvbnN0cnVjdG9yID0gb2xkQ29uc3RydWN0b3I7IC8vIHJlc3RvcmUgY29uc3RydWN0b3Jcblx0XHRcdH1cblx0XHRcdHJldHVybiBjb25zdHJ1Y3RvciA/IGNvbnN0cnVjdG9yLnByb3RvdHlwZSA6IE9iamVjdFByb3RvdHlwZTsgLy8gbmVlZGVkIGZvciBJRVxuXHRcdH07XG5cdH1cblx0LyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdHJldHVybiB0b1N0ci5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBub3JtYWxpemVGbldoaXRlc3BhY2UgPSBmdW5jdGlvbiBub3JtYWxpemVGbldoaXRlc3BhY2UoZm5TdHIpIHtcblx0Ly8gdGhpcyBpcyBuZWVkZWQgaW4gSUUgOSwgYXQgbGVhc3QsIHdoaWNoIGhhcyBpbmNvbnNpc3RlbmNpZXMgaGVyZS5cblx0cmV0dXJuIGZuU3RyLnJlcGxhY2UoL15mdW5jdGlvbiA/XFwoLywgJ2Z1bmN0aW9uICgnKS5yZXBsYWNlKCcpeycsICcpIHsnKTtcbn07XG5cbnZhciB0cnlNYXBTZXRFbnRyaWVzID0gZnVuY3Rpb24gdHJ5TWFwU2V0RW50cmllcyhjb2xsZWN0aW9uKSB7XG5cdHZhciBmb3VuZEVudHJpZXMgPSBbXTtcblx0dHJ5IHtcblx0XHRjb2xsZWN0aW9uc0ZvckVhY2guTWFwLmNhbGwoY29sbGVjdGlvbiwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGZvdW5kRW50cmllcy5wdXNoKFtrZXksIHZhbHVlXSk7XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKG5vdE1hcCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb2xsZWN0aW9uc0ZvckVhY2guU2V0LmNhbGwoY29sbGVjdGlvbiwgZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdGZvdW5kRW50cmllcy5wdXNoKFt2YWx1ZV0pO1xuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAobm90U2V0KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBmb3VuZEVudHJpZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHdoeU5vdEVxdWFsKHZhbHVlLCBvdGhlcikge1xuXHRpZiAodmFsdWUgPT09IG90aGVyKSB7IHJldHVybiAnJzsgfVxuXHRpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsKSB7XG5cdFx0cmV0dXJuIHZhbHVlID09PSBvdGhlciA/ICcnIDogU3RyaW5nKHZhbHVlKSArICcgIT09ICcgKyBTdHJpbmcob3RoZXIpO1xuXHR9XG5cblx0dmFyIHZhbFRvU3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdHZhciBvdGhlclRvU3RyID0gdG9TdHIuY2FsbCh2YWx1ZSk7XG5cdGlmICh2YWxUb1N0ciAhPT0gb3RoZXJUb1N0cikge1xuXHRcdHJldHVybiAndG9TdHJpbmdUYWcgaXMgbm90IHRoZSBzYW1lOiAnICsgdmFsVG9TdHIgKyAnICE9PSAnICsgb3RoZXJUb1N0cjtcblx0fVxuXG5cdHZhciB2YWxJc0Jvb2wgPSBpc0Jvb2xlYW4odmFsdWUpO1xuXHR2YXIgb3RoZXJJc0Jvb2wgPSBpc0Jvb2xlYW4ob3RoZXIpO1xuXHRpZiAodmFsSXNCb29sIHx8IG90aGVySXNCb29sKSB7XG5cdFx0aWYgKCF2YWxJc0Jvb2wpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBub3QgYSBib29sZWFuOyBzZWNvbmQgYXJndW1lbnQgaXMnOyB9XG5cdFx0aWYgKCFvdGhlcklzQm9vbCkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBub3QgYSBib29sZWFuOyBmaXJzdCBhcmd1bWVudCBpcyc7IH1cblx0XHR2YXIgdmFsQm9vbFZhbCA9IGJvb2xlYW5WYWx1ZS5jYWxsKHZhbHVlKTtcblx0XHR2YXIgb3RoZXJCb29sVmFsID0gYm9vbGVhblZhbHVlLmNhbGwob3RoZXIpO1xuXHRcdGlmICh2YWxCb29sVmFsID09PSBvdGhlckJvb2xWYWwpIHsgcmV0dXJuICcnOyB9XG5cdFx0cmV0dXJuICdwcmltaXRpdmUgdmFsdWUgb2YgYm9vbGVhbiBhcmd1bWVudHMgZG8gbm90IG1hdGNoOiAnICsgdmFsQm9vbFZhbCArICcgIT09ICcgKyBvdGhlckJvb2xWYWw7XG5cdH1cblxuXHR2YXIgdmFsSXNOdW1iZXIgPSBpc051bWJlcih2YWx1ZSk7XG5cdHZhciBvdGhlcklzTnVtYmVyID0gaXNOdW1iZXIodmFsdWUpO1xuXHRpZiAodmFsSXNOdW1iZXIgfHwgb3RoZXJJc051bWJlcikge1xuXHRcdGlmICghdmFsSXNOdW1iZXIpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBub3QgYSBudW1iZXI7IHNlY29uZCBhcmd1bWVudCBpcyc7IH1cblx0XHRpZiAoIW90aGVySXNOdW1iZXIpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgbm90IGEgbnVtYmVyOyBmaXJzdCBhcmd1bWVudCBpcyc7IH1cblx0XHR2YXIgdmFsTnVtID0gTnVtYmVyKHZhbHVlKTtcblx0XHR2YXIgb3RoZXJOdW0gPSBOdW1iZXIob3RoZXIpO1xuXHRcdGlmICh2YWxOdW0gPT09IG90aGVyTnVtKSB7IHJldHVybiAnJzsgfVxuXHRcdHZhciB2YWxJc05hTiA9IGlzTmFOKHZhbHVlKTtcblx0XHR2YXIgb3RoZXJJc05hTiA9IGlzTmFOKG90aGVyKTtcblx0XHRpZiAodmFsSXNOYU4gJiYgIW90aGVySXNOYU4pIHtcblx0XHRcdHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgTmFOOyBzZWNvbmQgaXMgbm90Jztcblx0XHR9IGVsc2UgaWYgKCF2YWxJc05hTiAmJiBvdGhlcklzTmFOKSB7XG5cdFx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBOYU47IGZpcnN0IGlzIG5vdCc7XG5cdFx0fSBlbHNlIGlmICh2YWxJc05hTiAmJiBvdGhlcklzTmFOKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdHJldHVybiAnbnVtYmVycyBhcmUgZGlmZmVyZW50OiAnICsgdmFsdWUgKyAnICE9PSAnICsgb3RoZXI7XG5cdH1cblxuXHR2YXIgdmFsSXNTdHJpbmcgPSBpc1N0cmluZyh2YWx1ZSk7XG5cdHZhciBvdGhlcklzU3RyaW5nID0gaXNTdHJpbmcob3RoZXIpO1xuXHRpZiAodmFsSXNTdHJpbmcgfHwgb3RoZXJJc1N0cmluZykge1xuXHRcdGlmICghdmFsSXNTdHJpbmcpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgc3RyaW5nOyBmaXJzdCBpcyBub3QnOyB9XG5cdFx0aWYgKCFvdGhlcklzU3RyaW5nKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgc3RyaW5nOyBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHZhciBzdHJpbmdWYWwgPSBTdHJpbmcodmFsdWUpO1xuXHRcdHZhciBvdGhlclZhbCA9IFN0cmluZyhvdGhlcik7XG5cdFx0aWYgKHN0cmluZ1ZhbCA9PT0gb3RoZXJWYWwpIHsgcmV0dXJuICcnOyB9XG5cdFx0cmV0dXJuICdzdHJpbmcgdmFsdWVzIGFyZSBkaWZmZXJlbnQ6IFwiJyArIHN0cmluZ1ZhbCArICdcIiAhPT0gXCInICsgb3RoZXJWYWwgKyAnXCInO1xuXHR9XG5cblx0dmFyIHZhbElzRGF0ZSA9IGlzRGF0ZSh2YWx1ZSk7XG5cdHZhciBvdGhlcklzRGF0ZSA9IGlzRGF0ZShvdGhlcik7XG5cdGlmICh2YWxJc0RhdGUgfHwgb3RoZXJJc0RhdGUpIHtcblx0XHRpZiAoIXZhbElzRGF0ZSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBEYXRlLCBmaXJzdCBpcyBub3QnOyB9XG5cdFx0aWYgKCFvdGhlcklzRGF0ZSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIERhdGUsIHNlY29uZCBpcyBub3QnOyB9XG5cdFx0dmFyIHZhbFRpbWUgPSArdmFsdWU7XG5cdFx0dmFyIG90aGVyVGltZSA9ICtvdGhlcjtcblx0XHRpZiAodmFsVGltZSA9PT0gb3RoZXJUaW1lKSB7IHJldHVybiAnJzsgfVxuXHRcdHJldHVybiAnRGF0ZXMgaGF2ZSBkaWZmZXJlbnQgdGltZSB2YWx1ZXM6ICcgKyB2YWxUaW1lICsgJyAhPT0gJyArIG90aGVyVGltZTtcblx0fVxuXG5cdHZhciB2YWxJc1JlZ2V4ID0gaXNSZWdleCh2YWx1ZSk7XG5cdHZhciBvdGhlcklzUmVnZXggPSBpc1JlZ2V4KG90aGVyKTtcblx0aWYgKHZhbElzUmVnZXggfHwgb3RoZXJJc1JlZ2V4KSB7XG5cdFx0aWYgKCF2YWxJc1JlZ2V4KSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIFJlZ0V4cCwgZmlyc3QgaXMgbm90JzsgfVxuXHRcdGlmICghb3RoZXJJc1JlZ2V4KSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgUmVnRXhwLCBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHZhciByZWdleFN0cmluZ1ZhbCA9IFN0cmluZyh2YWx1ZSk7XG5cdFx0dmFyIHJlZ2V4U3RyaW5nT3RoZXIgPSBTdHJpbmcob3RoZXIpO1xuXHRcdGlmIChyZWdleFN0cmluZ1ZhbCA9PT0gcmVnZXhTdHJpbmdPdGhlcikgeyByZXR1cm4gJyc7IH1cblx0XHRyZXR1cm4gJ3JlZ3VsYXIgZXhwcmVzc2lvbnMgZGlmZmVyOiAnICsgcmVnZXhTdHJpbmdWYWwgKyAnICE9PSAnICsgcmVnZXhTdHJpbmdPdGhlcjtcblx0fVxuXG5cdHZhciB2YWxJc0FycmF5ID0gaXNBcnJheSh2YWx1ZSk7XG5cdHZhciBvdGhlcklzQXJyYXkgPSBpc0FycmF5KG90aGVyKTtcblx0aWYgKHZhbElzQXJyYXkgfHwgb3RoZXJJc0FycmF5KSB7XG5cdFx0aWYgKCF2YWxJc0FycmF5KSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIGFuIEFycmF5LCBmaXJzdCBpcyBub3QnOyB9XG5cdFx0aWYgKCFvdGhlcklzQXJyYXkpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBhbiBBcnJheSwgc2Vjb25kIGlzIG5vdCc7IH1cblx0XHRpZiAodmFsdWUubGVuZ3RoICE9PSBvdGhlci5sZW5ndGgpIHtcblx0XHRcdHJldHVybiAnYXJyYXlzIGhhdmUgZGlmZmVyZW50IGxlbmd0aDogJyArIHZhbHVlLmxlbmd0aCArICcgIT09ICcgKyBvdGhlci5sZW5ndGg7XG5cdFx0fVxuXHRcdGlmIChTdHJpbmcodmFsdWUpICE9PSBTdHJpbmcob3RoZXIpKSB7IHJldHVybiAnc3RyaW5naWZpZWQgQXJyYXlzIGRpZmZlcic7IH1cblxuXHRcdHZhciBpbmRleCA9IHZhbHVlLmxlbmd0aCAtIDE7XG5cdFx0dmFyIGVxdWFsID0gJyc7XG5cdFx0dmFyIHZhbEhhc0luZGV4LCBvdGhlckhhc0luZGV4O1xuXHRcdHdoaWxlIChlcXVhbCA9PT0gJycgJiYgaW5kZXggPj0gMCkge1xuXHRcdFx0dmFsSGFzSW5kZXggPSBoYXModmFsdWUsIGluZGV4KTtcblx0XHRcdG90aGVySGFzSW5kZXggPSBoYXMob3RoZXIsIGluZGV4KTtcblx0XHRcdGlmICghdmFsSGFzSW5kZXggJiYgb3RoZXJIYXNJbmRleCkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBoYXMgaW5kZXggJyArIGluZGV4ICsgJzsgZmlyc3QgZG9lcyBub3QnOyB9XG5cdFx0XHRpZiAodmFsSGFzSW5kZXggJiYgIW90aGVySGFzSW5kZXgpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBoYXMgaW5kZXggJyArIGluZGV4ICsgJzsgc2Vjb25kIGRvZXMgbm90JzsgfVxuXHRcdFx0ZXF1YWwgPSB3aHlOb3RFcXVhbCh2YWx1ZVtpbmRleF0sIG90aGVyW2luZGV4XSk7XG5cdFx0XHRpbmRleCAtPSAxO1xuXHRcdH1cblx0XHRyZXR1cm4gZXF1YWw7XG5cdH1cblxuXHR2YXIgdmFsdWVJc1N5bSA9IGlzU3ltYm9sKHZhbHVlKTtcblx0dmFyIG90aGVySXNTeW0gPSBpc1N5bWJvbChvdGhlcik7XG5cdGlmICh2YWx1ZUlzU3ltICE9PSBvdGhlcklzU3ltKSB7XG5cdFx0aWYgKHZhbHVlSXNTeW0pIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBpcyBTeW1ib2w7IHNlY29uZCBpcyBub3QnOyB9XG5cdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgU3ltYm9sOyBmaXJzdCBpcyBub3QnO1xuXHR9XG5cdGlmICh2YWx1ZUlzU3ltICYmIG90aGVySXNTeW0pIHtcblx0XHRyZXR1cm4gc3ltYm9sVmFsdWUuY2FsbCh2YWx1ZSkgPT09IHN5bWJvbFZhbHVlLmNhbGwob3RoZXIpID8gJycgOiAnZmlyc3QgU3ltYm9sIHZhbHVlICE9PSBzZWNvbmQgU3ltYm9sIHZhbHVlJztcblx0fVxuXG5cdHZhciB2YWx1ZUlzR2VuID0gaXNHZW5lcmF0b3IodmFsdWUpO1xuXHR2YXIgb3RoZXJJc0dlbiA9IGlzR2VuZXJhdG9yKG90aGVyKTtcblx0aWYgKHZhbHVlSXNHZW4gIT09IG90aGVySXNHZW4pIHtcblx0XHRpZiAodmFsdWVJc0dlbikgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIGEgR2VuZXJhdG9yOyBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGlzIGEgR2VuZXJhdG9yOyBmaXJzdCBpcyBub3QnO1xuXHR9XG5cblx0dmFyIHZhbHVlSXNBcnJvdyA9IGlzQXJyb3dGdW5jdGlvbih2YWx1ZSk7XG5cdHZhciBvdGhlcklzQXJyb3cgPSBpc0Fycm93RnVuY3Rpb24ob3RoZXIpO1xuXHRpZiAodmFsdWVJc0Fycm93ICE9PSBvdGhlcklzQXJyb3cpIHtcblx0XHRpZiAodmFsdWVJc0Fycm93KSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgYW4gQXJyb3cgZnVuY3Rpb247IHNlY29uZCBpcyBub3QnOyB9XG5cdFx0cmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgYW4gQXJyb3cgZnVuY3Rpb247IGZpcnN0IGlzIG5vdCc7XG5cdH1cblxuXHRpZiAoaXNDYWxsYWJsZSh2YWx1ZSkgfHwgaXNDYWxsYWJsZShvdGhlcikpIHtcblx0XHRpZiAoZnVuY3Rpb25zSGF2ZU5hbWVzICYmIHdoeU5vdEVxdWFsKHZhbHVlLm5hbWUsIG90aGVyLm5hbWUpICE9PSAnJykge1xuXHRcdFx0cmV0dXJuICdGdW5jdGlvbiBuYW1lcyBkaWZmZXI6IFwiJyArIHZhbHVlLm5hbWUgKyAnXCIgIT09IFwiJyArIG90aGVyLm5hbWUgKyAnXCInO1xuXHRcdH1cblx0XHRpZiAod2h5Tm90RXF1YWwodmFsdWUubGVuZ3RoLCBvdGhlci5sZW5ndGgpICE9PSAnJykge1xuXHRcdFx0cmV0dXJuICdGdW5jdGlvbiBsZW5ndGhzIGRpZmZlcjogJyArIHZhbHVlLmxlbmd0aCArICcgIT09ICcgKyBvdGhlci5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0dmFyIHZhbHVlU3RyID0gbm9ybWFsaXplRm5XaGl0ZXNwYWNlKFN0cmluZyh2YWx1ZSkpO1xuXHRcdHZhciBvdGhlclN0ciA9IG5vcm1hbGl6ZUZuV2hpdGVzcGFjZShTdHJpbmcob3RoZXIpKTtcblx0XHRpZiAod2h5Tm90RXF1YWwodmFsdWVTdHIsIG90aGVyU3RyKSA9PT0gJycpIHsgcmV0dXJuICcnOyB9XG5cblx0XHRpZiAoIXZhbHVlSXNHZW4gJiYgIXZhbHVlSXNBcnJvdykge1xuXHRcdFx0cmV0dXJuIHdoeU5vdEVxdWFsKHZhbHVlU3RyLnJlcGxhY2UoL1xcKVxccypcXHsvLCAnKXsnKSwgb3RoZXJTdHIucmVwbGFjZSgvXFwpXFxzKlxcey8sICcpeycpKSA9PT0gJycgPyAnJyA6ICdGdW5jdGlvbiBzdHJpbmcgcmVwcmVzZW50YXRpb25zIGRpZmZlcic7XG5cdFx0fVxuXHRcdHJldHVybiB3aHlOb3RFcXVhbCh2YWx1ZVN0ciwgb3RoZXJTdHIpID09PSAnJyA/ICcnIDogJ0Z1bmN0aW9uIHN0cmluZyByZXByZXNlbnRhdGlvbnMgZGlmZmVyJztcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBvdGhlciA9PT0gJ29iamVjdCcpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlICE9PSB0eXBlb2Ygb3RoZXIpIHsgcmV0dXJuICdhcmd1bWVudHMgaGF2ZSBhIGRpZmZlcmVudCB0eXBlb2Y6ICcgKyB0eXBlb2YgdmFsdWUgKyAnICE9PSAnICsgdHlwZW9mIG90aGVyOyB9XG5cdFx0aWYgKGlzUHJvdG8uY2FsbCh2YWx1ZSwgb3RoZXIpKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgaXMgdGhlIFtbUHJvdG90eXBlXV0gb2YgdGhlIHNlY29uZCc7IH1cblx0XHRpZiAoaXNQcm90by5jYWxsKG90aGVyLCB2YWx1ZSkpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgaXMgdGhlIFtbUHJvdG90eXBlXV0gb2YgdGhlIGZpcnN0JzsgfVxuXHRcdGlmIChnZXRQcm90b3R5cGVPZih2YWx1ZSkgIT09IGdldFByb3RvdHlwZU9mKG90aGVyKSkgeyByZXR1cm4gJ2FyZ3VtZW50cyBoYXZlIGEgZGlmZmVyZW50IFtbUHJvdG90eXBlXV0nOyB9XG5cblx0XHRpZiAoc3ltYm9sSXRlcmF0b3IpIHtcblx0XHRcdHZhciB2YWx1ZUl0ZXJhdG9yRm4gPSB2YWx1ZVtzeW1ib2xJdGVyYXRvcl07XG5cdFx0XHR2YXIgdmFsdWVJc0l0ZXJhYmxlID0gaXNDYWxsYWJsZSh2YWx1ZUl0ZXJhdG9yRm4pO1xuXHRcdFx0dmFyIG90aGVySXRlcmF0b3JGbiA9IG90aGVyW3N5bWJvbEl0ZXJhdG9yXTtcblx0XHRcdHZhciBvdGhlcklzSXRlcmFibGUgPSBpc0NhbGxhYmxlKG90aGVySXRlcmF0b3JGbik7XG5cdFx0XHRpZiAodmFsdWVJc0l0ZXJhYmxlICE9PSBvdGhlcklzSXRlcmFibGUpIHtcblx0XHRcdFx0aWYgKHZhbHVlSXNJdGVyYWJsZSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGlzIGl0ZXJhYmxlOyBzZWNvbmQgaXMgbm90JzsgfVxuXHRcdFx0XHRyZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBpcyBpdGVyYWJsZTsgZmlyc3QgaXMgbm90Jztcblx0XHRcdH1cblx0XHRcdGlmICh2YWx1ZUlzSXRlcmFibGUgJiYgb3RoZXJJc0l0ZXJhYmxlKSB7XG5cdFx0XHRcdHZhciB2YWx1ZUl0ZXJhdG9yID0gdmFsdWVJdGVyYXRvckZuLmNhbGwodmFsdWUpO1xuXHRcdFx0XHR2YXIgb3RoZXJJdGVyYXRvciA9IG90aGVySXRlcmF0b3JGbi5jYWxsKG90aGVyKTtcblx0XHRcdFx0dmFyIHZhbHVlTmV4dCwgb3RoZXJOZXh0LCBuZXh0V2h5O1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0dmFsdWVOZXh0ID0gdmFsdWVJdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdFx0b3RoZXJOZXh0ID0gb3RoZXJJdGVyYXRvci5uZXh0KCk7XG5cdFx0XHRcdFx0aWYgKCF2YWx1ZU5leHQuZG9uZSAmJiAhb3RoZXJOZXh0LmRvbmUpIHtcblx0XHRcdFx0XHRcdG5leHRXaHkgPSB3aHlOb3RFcXVhbCh2YWx1ZU5leHQsIG90aGVyTmV4dCk7XG5cdFx0XHRcdFx0XHRpZiAobmV4dFdoeSAhPT0gJycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdpdGVyYXRpb24gcmVzdWx0cyBhcmUgbm90IGVxdWFsOiAnICsgbmV4dFdoeTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCF2YWx1ZU5leHQuZG9uZSAmJiAhb3RoZXJOZXh0LmRvbmUpO1xuXHRcdFx0XHRpZiAodmFsdWVOZXh0LmRvbmUgJiYgIW90aGVyTmV4dC5kb25lKSB7IHJldHVybiAnZmlyc3QgYXJndW1lbnQgZmluaXNoZWQgaXRlcmF0aW5nIGJlZm9yZSBzZWNvbmQnOyB9XG5cdFx0XHRcdGlmICghdmFsdWVOZXh0LmRvbmUgJiYgb3RoZXJOZXh0LmRvbmUpIHsgcmV0dXJuICdzZWNvbmQgYXJndW1lbnQgZmluaXNoZWQgaXRlcmF0aW5nIGJlZm9yZSBmaXJzdCc7IH1cblx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY29sbGVjdGlvbnNGb3JFYWNoLk1hcCB8fCBjb2xsZWN0aW9uc0ZvckVhY2guU2V0KSB7XG5cdFx0XHR2YXIgdmFsdWVFbnRyaWVzID0gdHJ5TWFwU2V0RW50cmllcyh2YWx1ZSk7XG5cdFx0XHR2YXIgb3RoZXJFbnRyaWVzID0gdHJ5TWFwU2V0RW50cmllcyhvdGhlcik7XG5cdFx0XHR2YXIgdmFsdWVFbnRyaWVzSXNBcnJheSA9IGlzQXJyYXkodmFsdWVFbnRyaWVzKTtcblx0XHRcdHZhciBvdGhlckVudHJpZXNJc0FycmF5ID0gaXNBcnJheShvdGhlckVudHJpZXMpO1xuXHRcdFx0aWYgKHZhbHVlRW50cmllc0lzQXJyYXkgJiYgIW90aGVyRW50cmllc0lzQXJyYXkpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBoYXMgQ29sbGVjdGlvbiBlbnRyaWVzLCBzZWNvbmQgZG9lcyBub3QnOyB9XG5cdFx0XHRpZiAoIXZhbHVlRW50cmllc0lzQXJyYXkgJiYgb3RoZXJFbnRyaWVzSXNBcnJheSkgeyByZXR1cm4gJ3NlY29uZCBhcmd1bWVudCBoYXMgQ29sbGVjdGlvbiBlbnRyaWVzLCBmaXJzdCBkb2VzIG5vdCc7IH1cblx0XHRcdGlmICh2YWx1ZUVudHJpZXNJc0FycmF5ICYmIG90aGVyRW50cmllc0lzQXJyYXkpIHtcblx0XHRcdFx0dmFyIGVudHJpZXNXaHkgPSB3aHlOb3RFcXVhbCh2YWx1ZUVudHJpZXMsIG90aGVyRW50cmllcyk7XG5cdFx0XHRcdHJldHVybiBlbnRyaWVzV2h5ID09PSAnJyA/ICcnIDogJ0NvbGxlY3Rpb24gZW50cmllcyBkaWZmZXI6ICcgKyBlbnRyaWVzV2h5O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBrZXksIHZhbHVlS2V5SXNSZWN1cnNpdmUsIG90aGVyS2V5SXNSZWN1cnNpdmUsIGtleVdoeTtcblx0XHRmb3IgKGtleSBpbiB2YWx1ZSkge1xuXHRcdFx0aWYgKGhhcyh2YWx1ZSwga2V5KSkge1xuXHRcdFx0XHRpZiAoIWhhcyhvdGhlciwga2V5KSkgeyByZXR1cm4gJ2ZpcnN0IGFyZ3VtZW50IGhhcyBrZXkgXCInICsga2V5ICsgJ1wiOyBzZWNvbmQgZG9lcyBub3QnOyB9XG5cdFx0XHRcdHZhbHVlS2V5SXNSZWN1cnNpdmUgPSB2YWx1ZVtrZXldICYmIHZhbHVlW2tleV1ba2V5XSA9PT0gdmFsdWU7XG5cdFx0XHRcdG90aGVyS2V5SXNSZWN1cnNpdmUgPSBvdGhlcltrZXldICYmIG90aGVyW2tleV1ba2V5XSA9PT0gb3RoZXI7XG5cdFx0XHRcdGlmICh2YWx1ZUtleUlzUmVjdXJzaXZlICE9PSBvdGhlcktleUlzUmVjdXJzaXZlKSB7XG5cdFx0XHRcdFx0aWYgKHZhbHVlS2V5SXNSZWN1cnNpdmUpIHsgcmV0dXJuICdmaXJzdCBhcmd1bWVudCBoYXMgYSBjaXJjdWxhciByZWZlcmVuY2UgYXQga2V5IFwiJyArIGtleSArICdcIjsgc2Vjb25kIGRvZXMgbm90JzsgfVxuXHRcdFx0XHRcdHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGhhcyBhIGNpcmN1bGFyIHJlZmVyZW5jZSBhdCBrZXkgXCInICsga2V5ICsgJ1wiOyBmaXJzdCBkb2VzIG5vdCc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCF2YWx1ZUtleUlzUmVjdXJzaXZlICYmICFvdGhlcktleUlzUmVjdXJzaXZlKSB7XG5cdFx0XHRcdFx0a2V5V2h5ID0gd2h5Tm90RXF1YWwodmFsdWVba2V5XSwgb3RoZXJba2V5XSk7XG5cdFx0XHRcdFx0aWYgKGtleVdoeSAhPT0gJycpIHtcblx0XHRcdFx0XHRcdHJldHVybiAndmFsdWUgYXQga2V5IFwiJyArIGtleSArICdcIiBkaWZmZXJzOiAnICsga2V5V2h5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRmb3IgKGtleSBpbiBvdGhlcikge1xuXHRcdFx0aWYgKGhhcyhvdGhlciwga2V5KSAmJiAhaGFzKHZhbHVlLCBrZXkpKSB7IHJldHVybiAnc2Vjb25kIGFyZ3VtZW50IGhhcyBrZXkgXCInICsga2V5ICsgJ1wiOyBmaXJzdCBkb2VzIG5vdCc7IH1cblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlZ2V4RXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcbnZhciB0cnlSZWdleEV4ZWMgPSBmdW5jdGlvbiB0cnlSZWdleEV4ZWModmFsdWUpIHtcblx0dHJ5IHtcblx0XHRyZWdleEV4ZWMuY2FsbCh2YWx1ZSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHJlZ2V4Q2xhc3MgPSAnW29iamVjdCBSZWdFeHBdJztcbnZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC50b1N0cmluZ1RhZyA9PT0gJ3N5bWJvbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNSZWdleCh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIGhhc1RvU3RyaW5nVGFnID8gdHJ5UmVnZXhFeGVjKHZhbHVlKSA6IHRvU3RyLmNhbGwodmFsdWUpID09PSByZWdleENsYXNzO1xufTtcbiIsInZhciBoYXNNYXAgPSB0eXBlb2YgTWFwID09PSAnZnVuY3Rpb24nICYmIE1hcC5wcm90b3R5cGU7XG52YXIgbWFwU2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc01hcCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTWFwLnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgbWFwU2l6ZSA9IGhhc01hcCAmJiBtYXBTaXplRGVzY3JpcHRvciAmJiB0eXBlb2YgbWFwU2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gbWFwU2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBtYXBGb3JFYWNoID0gaGFzTWFwICYmIE1hcC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nICYmIFNldC5wcm90b3R5cGU7XG52YXIgc2V0U2l6ZURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmIGhhc1NldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoU2V0LnByb3RvdHlwZSwgJ3NpemUnKSA6IG51bGw7XG52YXIgc2V0U2l6ZSA9IGhhc1NldCAmJiBzZXRTaXplRGVzY3JpcHRvciAmJiB0eXBlb2Ygc2V0U2l6ZURlc2NyaXB0b3IuZ2V0ID09PSAnZnVuY3Rpb24nID8gc2V0U2l6ZURlc2NyaXB0b3IuZ2V0IDogbnVsbDtcbnZhciBzZXRGb3JFYWNoID0gaGFzU2V0ICYmIFNldC5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBib29sZWFuVmFsdWVPZiA9IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5zcGVjdF8gKG9iaiwgb3B0cywgZGVwdGgsIHNlZW4pIHtcbiAgICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgICBcbiAgICB2YXIgbWF4RGVwdGggPSBvcHRzLmRlcHRoID09PSB1bmRlZmluZWQgPyA1IDogb3B0cy5kZXB0aDtcbiAgICBpZiAoZGVwdGggPT09IHVuZGVmaW5lZCkgZGVwdGggPSAwO1xuICAgIGlmIChkZXB0aCA+PSBtYXhEZXB0aCAmJiBtYXhEZXB0aCA+IDAgJiYgb2JqICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiAnW09iamVjdF0nO1xuICAgIH1cbiAgICBcbiAgICBpZiAoc2VlbiA9PT0gdW5kZWZpbmVkKSBzZWVuID0gW107XG4gICAgZWxzZSBpZiAoaW5kZXhPZihzZWVuLCBvYmopID49IDApIHtcbiAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaW5zcGVjdCAodmFsdWUsIGZyb20pIHtcbiAgICAgICAgaWYgKGZyb20pIHtcbiAgICAgICAgICAgIHNlZW4gPSBzZWVuLnNsaWNlKCk7XG4gICAgICAgICAgICBzZWVuLnB1c2goZnJvbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBvcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgIH1cbiAgICBcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcob2JqKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgbmFtZSA9IG5hbWVPZihvYmopO1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbicgKyAobmFtZSA/ICc6ICcgKyBuYW1lIDogJycpICsgJ10nO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTeW1ib2wob2JqKSkge1xuICAgICAgICB2YXIgc3ltU3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyA/ICdPYmplY3QoJyArIHN5bVN0cmluZyArICcpJyA6IHN5bVN0cmluZztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNFbGVtZW50KG9iaikpIHtcbiAgICAgICAgdmFyIHMgPSAnPCcgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgYXR0cnMgPSBvYmouYXR0cmlidXRlcyB8fCBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcyArPSAnICcgKyBhdHRyc1tpXS5uYW1lICsgJz1cIicgKyBxdW90ZShhdHRyc1tpXS52YWx1ZSkgKyAnXCInO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gJz4nO1xuICAgICAgICBpZiAob2JqLmNoaWxkTm9kZXMgJiYgb2JqLmNoaWxkTm9kZXMubGVuZ3RoKSBzICs9ICcuLi4nO1xuICAgICAgICBzICs9ICc8LycgKyBTdHJpbmcob2JqLm5vZGVOYW1lKS50b0xvd2VyQ2FzZSgpICsgJz4nO1xuICAgICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGlmIChvYmoubGVuZ3RoID09PSAwKSByZXR1cm4gJ1tdJztcbiAgICAgICAgdmFyIHhzID0gQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB4c1tpXSA9IGhhcyhvYmosIGkpID8gaW5zcGVjdChvYmpbaV0sIG9iaikgOiAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1sgJyArIHhzLmpvaW4oJywgJykgKyAnIF0nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Vycm9yKG9iaikpIHtcbiAgICAgICAgdmFyIHBhcnRzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmICghaGFzKG9iaiwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgvW15cXHckXS8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChpbnNwZWN0KGtleSkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFydHMucHVzaChrZXkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDApIHJldHVybiAnWycgKyBvYmogKyAnXSc7XG4gICAgICAgIHJldHVybiAneyBbJyArIG9iaiArICddICcgKyBwYXJ0cy5qb2luKCcsICcpICsgJyB9JztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5pbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBvYmouaW5zcGVjdCgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc01hcChvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IFtdO1xuICAgICAgICBtYXBGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcGFydHMucHVzaChpbnNwZWN0KGtleSwgb2JqKSArICcgPT4gJyArIGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICdNYXAgKCcgKyBtYXBTaXplLmNhbGwob2JqKSArICcpIHsnICsgcGFydHMuam9pbignLCAnKSArICd9JztcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTZXQob2JqKSkge1xuICAgICAgICB2YXIgcGFydHMgPSBbXTtcbiAgICAgICAgc2V0Rm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlICkge1xuICAgICAgICAgICAgcGFydHMucHVzaChpbnNwZWN0KHZhbHVlLCBvYmopKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAnU2V0ICgnICsgc2V0U2l6ZS5jYWxsKG9iaikgKyAnKSB7JyArIHBhcnRzLmpvaW4oJywgJykgKyAnfSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOdW1iZXIob2JqKSkge1xuICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgTnVtYmVyKG9iaikgKyAnKSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIHJldHVybiAnT2JqZWN0KCcgKyBib29sZWFuVmFsdWVPZi5jYWxsKG9iaikgKyAnKSc7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIGluc3BlY3QoU3RyaW5nKG9iaikpICsgJyknO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNEYXRlKG9iaikgJiYgIWlzUmVnRXhwKG9iaikpIHtcbiAgICAgICAgdmFyIHhzID0gW10sIGtleXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGhhcyhvYmosIGtleSkpIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKC9bXlxcdyRdLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICB4cy5wdXNoKGluc3BlY3Qoa2V5KSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgeHMucHVzaChrZXkgKyAnOiAnICsgaW5zcGVjdChvYmpba2V5XSwgb2JqKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHhzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICd7fSc7XG4gICAgICAgIHJldHVybiAneyAnICsgeHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIFN0cmluZyhvYmopO1xufTtcblxuZnVuY3Rpb24gcXVvdGUgKHMpIHtcbiAgICByZXR1cm4gU3RyaW5nKHMpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBBcnJheV0nIH1cbmZ1bmN0aW9uIGlzRGF0ZSAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBEYXRlXScgfVxuZnVuY3Rpb24gaXNSZWdFeHAgKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScgfVxuZnVuY3Rpb24gaXNFcnJvciAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBFcnJvcl0nIH1cbmZ1bmN0aW9uIGlzU3ltYm9sIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFN5bWJvbF0nIH1cbmZ1bmN0aW9uIGlzU3RyaW5nIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nIH1cbmZ1bmN0aW9uIGlzTnVtYmVyIChvYmopIHsgcmV0dXJuIHRvU3RyKG9iaikgPT09ICdbb2JqZWN0IE51bWJlcl0nIH1cbmZ1bmN0aW9uIGlzQm9vbGVhbiAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBCb29sZWFuXScgfVxuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgaW4gdGhpczsgfTtcbmZ1bmN0aW9uIGhhcyAob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufVxuXG5mdW5jdGlvbiB0b1N0ciAob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufVxuXG5mdW5jdGlvbiBuYW1lT2YgKGYpIHtcbiAgICBpZiAoZi5uYW1lKSByZXR1cm4gZi5uYW1lO1xuICAgIHZhciBtID0gZi50b1N0cmluZygpLm1hdGNoKC9eZnVuY3Rpb25cXHMqKFtcXHckXSspLyk7XG4gICAgaWYgKG0pIHJldHVybiBtWzFdO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mICh4cywgeCkge1xuICAgIGlmICh4cy5pbmRleE9mKSByZXR1cm4geHMuaW5kZXhPZih4KTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoeHNbaV0gPT09IHgpIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGlzTWFwICh4KSB7XG4gICAgaWYgKCFtYXBTaXplKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgbWFwU2l6ZS5jYWxsKHgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTZXQgKHgpIHtcbiAgICBpZiAoIXNldFNpemUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBzZXRTaXplLmNhbGwoeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQgKHgpIHtcbiAgICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgeCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIHgubm9kZU5hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHR5cGVvZiB4LmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgIDtcbn1cblxuZnVuY3Rpb24gaW5zcGVjdFN0cmluZyAoc3RyKSB7XG4gICAgdmFyIHMgPSBzdHIucmVwbGFjZSgvKFsnXFxcXF0pL2csICdcXFxcJDEnKS5yZXBsYWNlKC9bXFx4MDAtXFx4MWZdL2csIGxvd2J5dGUpO1xuICAgIHJldHVybiBcIidcIiArIHMgKyBcIidcIjtcbiAgICBcbiAgICBmdW5jdGlvbiBsb3dieXRlIChjKSB7XG4gICAgICAgIHZhciBuID0gYy5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgeCA9IHsgODogJ2InLCA5OiAndCcsIDEwOiAnbicsIDEyOiAnZicsIDEzOiAncicgfVtuXTtcbiAgICAgICAgaWYgKHgpIHJldHVybiAnXFxcXCcgKyB4O1xuICAgICAgICByZXR1cm4gJ1xcXFx4JyArIChuIDwgMHgxMCA/ICcwJyA6ICcnKSArIG4udG9TdHJpbmcoMTYpO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBhcHBseU1pZGRsZXdhcmU7XG5cbnZhciBfY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xuXG52YXIgX2NvbXBvc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKipcbiAqIENyZWF0ZXMgYSBzdG9yZSBlbmhhbmNlciB0aGF0IGFwcGxpZXMgbWlkZGxld2FyZSB0byB0aGUgZGlzcGF0Y2ggbWV0aG9kXG4gKiBvZiB0aGUgUmVkdXggc3RvcmUuIFRoaXMgaXMgaGFuZHkgZm9yIGEgdmFyaWV0eSBvZiB0YXNrcywgc3VjaCBhcyBleHByZXNzaW5nXG4gKiBhc3luY2hyb25vdXMgYWN0aW9ucyBpbiBhIGNvbmNpc2UgbWFubmVyLCBvciBsb2dnaW5nIGV2ZXJ5IGFjdGlvbiBwYXlsb2FkLlxuICpcbiAqIFNlZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UgYXMgYW4gZXhhbXBsZSBvZiB0aGUgUmVkdXggbWlkZGxld2FyZS5cbiAqXG4gKiBCZWNhdXNlIG1pZGRsZXdhcmUgaXMgcG90ZW50aWFsbHkgYXN5bmNocm9ub3VzLCB0aGlzIHNob3VsZCBiZSB0aGUgZmlyc3RcbiAqIHN0b3JlIGVuaGFuY2VyIGluIHRoZSBjb21wb3NpdGlvbiBjaGFpbi5cbiAqXG4gKiBOb3RlIHRoYXQgZWFjaCBtaWRkbGV3YXJlIHdpbGwgYmUgZ2l2ZW4gdGhlIGBkaXNwYXRjaGAgYW5kIGBnZXRTdGF0ZWAgZnVuY3Rpb25zXG4gKiBhcyBuYW1lZCBhcmd1bWVudHMuXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gbWlkZGxld2FyZXMgVGhlIG1pZGRsZXdhcmUgY2hhaW4gdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBzdG9yZSBlbmhhbmNlciBhcHBseWluZyB0aGUgbWlkZGxld2FyZS5cbiAqL1xuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtaWRkbGV3YXJlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoY3JlYXRlU3RvcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gX2NvbXBvc2UyW1wiZGVmYXVsdFwiXS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGJpbmRBY3Rpb25DcmVhdG9ycztcbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tYmluZVJlZHVjZXJzO1xuXG52YXIgX2NyZWF0ZVN0b3JlID0gcmVxdWlyZSgnLi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbk5hbWUgPSBhY3Rpb25UeXBlICYmICdcIicgKyBhY3Rpb25UeXBlLnRvU3RyaW5nKCkgKyAnXCInIHx8ICdhbiBhY3Rpb24nO1xuXG4gIHJldHVybiAnR2l2ZW4gYWN0aW9uICcgKyBhY3Rpb25OYW1lICsgJywgcmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkLiAnICsgJ1RvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4nO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24pIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVCA/ICdpbml0aWFsU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbXCJkZWZhdWx0XCJdKShpbnB1dFN0YXRlKSkge1xuICAgIHJldHVybiAnVGhlICcgKyBhcmd1bWVudE5hbWUgKyAnIGhhcyB1bmV4cGVjdGVkIHR5cGUgb2YgXCInICsge30udG9TdHJpbmcuY2FsbChpbnB1dFN0YXRlKS5tYXRjaCgvXFxzKFthLXp8QS1aXSspLylbMV0gKyAnXCIuIEV4cGVjdGVkIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgJyArICgna2V5czogXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCInKTtcbiAgfVxuXG4gIHZhciB1bmV4cGVjdGVkS2V5cyA9IE9iamVjdC5rZXlzKGlucHV0U3RhdGUpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICFyZWR1Y2Vycy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xuICB9KTtcblxuICBpZiAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAnVW5leHBlY3RlZCAnICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyAnICcgKyAoJ1wiJyArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiIGZvdW5kIGluICcgKyBhcmd1bWVudE5hbWUgKyAnLiAnKSArICdFeHBlY3RlZCB0byBmaW5kIG9uZSBvZiB0aGUga25vd24gcmVkdWNlciBrZXlzIGluc3RlYWQ6ICcgKyAoJ1wiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLicpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFJlZHVjZXJTYW5pdHkocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZSA9ICdAQHJlZHV4L1BST0JFX1VOS05PV05fQUNUSU9OXycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykuc3BsaXQoJycpLmpvaW4oJy4nKTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IHR5cGUgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuICcgKyAoJ0RvblxcJ3QgdHJ5IHRvIGhhbmRsZSAnICsgX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgKyAnIG9yIG90aGVyIGFjdGlvbnMgaW4gXCJyZWR1eC8qXCIgJykgKyAnbmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgJyArICdjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCAnICsgJ2luIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSAnICsgJ2FjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZC4nKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG4gICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmaW5hbFJlZHVjZXJzW2tleV0gPSByZWR1Y2Vyc1trZXldO1xuICAgIH1cbiAgfVxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHZhciBzYW5pdHlFcnJvcjtcbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2FuaXR5KGZpbmFsUmVkdWNlcnMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgc2FuaXR5RXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHNbMV07XG5cbiAgICBpZiAoc2FuaXR5RXJyb3IpIHtcbiAgICAgIHRocm93IHNhbml0eUVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24pO1xuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgICgwLCBfd2FybmluZzJbXCJkZWZhdWx0XCJdKSh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1trZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgdmFyIG5leHRTdGF0ZUZvcktleSA9IHJlZHVjZXIocHJldmlvdXNTdGF0ZUZvcktleSwgYWN0aW9uKTtcbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIG5leHRTdGF0ZVtrZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb21wb3NlO1xuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTtcbiAgICB9XG5cbiAgICB2YXIgbGFzdCA9IGZ1bmNzW2Z1bmNzLmxlbmd0aCAtIDFdO1xuICAgIHZhciByZXN0ID0gZnVuY3Muc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIHJlc3QucmVkdWNlUmlnaHQoZnVuY3Rpb24gKGNvbXBvc2VkLCBmKSB7XG4gICAgICByZXR1cm4gZihjb21wb3NlZCk7XG4gICAgfSwgbGFzdC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uVHlwZXMgPSB1bmRlZmluZWQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNyZWF0ZVN0b3JlO1xuXG52YXIgX2lzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpO1xuXG52YXIgX2lzUGxhaW5PYmplY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIEFjdGlvblR5cGVzID0gZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gKiBUaGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBkYXRhIGluIHRoZSBzdG9yZSBpcyB0byBjYWxsIGBkaXNwYXRjaCgpYCBvbiBpdC5cbiAqXG4gKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gKiBwYXJ0cyBvZiB0aGUgc3RhdGUgdHJlZSByZXNwb25kIHRvIGFjdGlvbnMsIHlvdSBtYXkgY29tYmluZSBzZXZlcmFsIHJlZHVjZXJzXG4gKiBpbnRvIGEgc2luZ2xlIHJlZHVjZXIgZnVuY3Rpb24gYnkgdXNpbmcgYGNvbWJpbmVSZWR1Y2Vyc2AuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVkdWNlciBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgbmV4dCBzdGF0ZSB0cmVlLCBnaXZlblxuICogdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGFjdGlvbiB0byBoYW5kbGUuXG4gKlxuICogQHBhcmFtIHthbnl9IFtpbml0aWFsU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVuaGFuY2VyIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcikge1xuICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBpbml0aWFsU3RhdGU7XG4gICAgaW5pdGlhbFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBpbml0aWFsU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCkge1xuICAgIGlmIChuZXh0TGlzdGVuZXJzID09PSBjdXJyZW50TGlzdGVuZXJzKSB7XG4gICAgICBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycy5zbGljZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG4gIGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgaWYgKCFpc1N1YnNjcmliZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG4gIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgIGlmICghKDAsIF9pc1BsYWluT2JqZWN0MltcImRlZmF1bHRcIl0pKGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdGVuZXJzW2ldKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgcmVkdWNlciBjdXJyZW50bHkgdXNlZCBieSB0aGUgc3RvcmUgdG8gY2FsY3VsYXRlIHRoZSBzdGF0ZS5cbiAgICpcbiAgICogWW91IG1pZ2h0IG5lZWQgdGhpcyBpZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGNvZGUgc3BsaXR0aW5nIGFuZCB5b3Ugd2FudCB0b1xuICAgKiBsb2FkIHNvbWUgb2YgdGhlIHJlZHVjZXJzIGR5bmFtaWNhbGx5LiBZb3UgbWlnaHQgYWxzbyBuZWVkIHRoaXMgaWYgeW91XG4gICAqIGltcGxlbWVudCBhIGhvdCByZWxvYWRpbmcgbWVjaGFuaXNtIGZvciBSZWR1eC5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbmV4dFJlZHVjZXIgVGhlIHJlZHVjZXIgZm9yIHRoZSBzdG9yZSB0byB1c2UgaW5zdGVhZC5cbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG4gIH1cblxuICAvLyBXaGVuIGEgc3RvcmUgaXMgY3JlYXRlZCwgYW4gXCJJTklUXCIgYWN0aW9uIGlzIGRpc3BhdGNoZWQgc28gdGhhdCBldmVyeVxuICAvLyByZWR1Y2VyIHJldHVybnMgdGhlaXIgaW5pdGlhbCBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgLy8gdGhlIGluaXRpYWwgc3RhdGUgdHJlZS5cbiAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gIHJldHVybiB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNvbXBvc2UgPSBleHBvcnRzLmFwcGx5TWlkZGxld2FyZSA9IGV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzID0gZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBleHBvcnRzLmNyZWF0ZVN0b3JlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZVN0b3JlID0gcmVxdWlyZSgnLi9jcmVhdGVTdG9yZScpO1xuXG52YXIgX2NyZWF0ZVN0b3JlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZVN0b3JlKTtcblxudmFyIF9jb21iaW5lUmVkdWNlcnMgPSByZXF1aXJlKCcuL2NvbWJpbmVSZWR1Y2VycycpO1xuXG52YXIgX2NvbWJpbmVSZWR1Y2VyczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21iaW5lUmVkdWNlcnMpO1xuXG52YXIgX2JpbmRBY3Rpb25DcmVhdG9ycyA9IHJlcXVpcmUoJy4vYmluZEFjdGlvbkNyZWF0b3JzJyk7XG5cbnZhciBfYmluZEFjdGlvbkNyZWF0b3JzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBY3Rpb25DcmVhdG9ycyk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlID0gcmVxdWlyZSgnLi9hcHBseU1pZGRsZXdhcmUnKTtcblxudmFyIF9hcHBseU1pZGRsZXdhcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwbHlNaWRkbGV3YXJlKTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qXG4qIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiogSWYgdGhlIGZ1bmN0aW9uIGhhcyBiZWVuIG1pbmlmaWVkIGFuZCBOT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLCB3YXJuIHRoZSB1c2VyLlxuKi9cbmZ1bmN0aW9uIGlzQ3J1c2hlZCgpIHt9XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBpc0NydXNoZWQubmFtZSA9PT0gJ3N0cmluZycgJiYgaXNDcnVzaGVkLm5hbWUgIT09ICdpc0NydXNoZWQnKSB7XG4gICgwLCBfd2FybmluZzJbXCJkZWZhdWx0XCJdKSgnWW91IGFyZSBjdXJyZW50bHkgdXNpbmcgbWluaWZpZWQgY29kZSBvdXRzaWRlIG9mIE5PREVfRU5WID09PSBcXCdwcm9kdWN0aW9uXFwnLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3IgRGVmaW5lUGx1Z2luIGZvciB3ZWJwYWNrIChodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMwMDMwMDMxKSAnICsgJ3RvIGVuc3VyZSB5b3UgaGF2ZSB0aGUgY29ycmVjdCBjb2RlIGZvciB5b3VyIHByb2R1Y3Rpb24gYnVpbGQuJyk7XG59XG5cbmV4cG9ydHMuY3JlYXRlU3RvcmUgPSBfY3JlYXRlU3RvcmUyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuY29tYmluZVJlZHVjZXJzID0gX2NvbWJpbmVSZWR1Y2VyczJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBfYmluZEFjdGlvbkNyZWF0b3JzMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmFwcGx5TWlkZGxld2FyZSA9IF9hcHBseU1pZGRsZXdhcmUyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuY29tcG9zZSA9IF9jb21wb3NlMltcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB3YXJuaW5nO1xuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICB0cnkge1xuICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG59IiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLyoqXG4gKiBHZXRzIHRoZSBgW1tQcm90b3R5cGVdXWAgb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7bnVsbHxPYmplY3R9IFJldHVybnMgdGhlIGBbW1Byb3RvdHlwZV1dYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UHJvdG90eXBlKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVHZXRQcm90b3R5cGUoT2JqZWN0KHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0IGluIElFIDwgOS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGhvc3Qgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSG9zdE9iamVjdCh2YWx1ZSkge1xuICAvLyBNYW55IGhvc3Qgb2JqZWN0cyBhcmUgYE9iamVjdGAgb2JqZWN0cyB0aGF0IGNhbiBjb2VyY2UgdG8gc3RyaW5nc1xuICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gIGlmICh2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9ICEhKHZhbHVlICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0hvc3RPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNIb3N0T2JqZWN0ID0gcmVxdWlyZSgnLi9faXNIb3N0T2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8XG4gICAgICBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSAhPSBvYmplY3RUYWcgfHwgaXNIb3N0T2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiZcbiAgICBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJiBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIl19
