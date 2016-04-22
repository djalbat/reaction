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

var Redux = require('redux');

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

},{"../../index":4,"redux":22}],3:[function(require,module,exports){
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
    key: 'remove',
    value: function remove() {
      this.domElement.parentElement.removeChild(this.domElement);
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
    key: 'empty',
    value: function empty() {
      while (this.domElement.firstChild) {
        this.domElement.removeChild(this.domElement.firstChild);
      }
    }
  }, {
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
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
    key: 'render',
    value: function render(context) {
      this.instance.context = context;

      return this.reactClass.render.apply(this.instance);
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
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext();
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
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext();
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

    if (!reactFunction.componentDidMount) {
      reactFunction.componentDidMount = defaultComponentDidMount;
    }
    if (!reactFunction.componentWillUnmount) {
      reactFunction.componentWillUnmount = defaultComponentWillUnmount;
    }
    if (!reactFunction.getChildContext) {
      reactFunction.getChildContext = defaultGetChildContext;
    }

    _this.reactFunction = reactFunction;
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(context) {

      return this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount(context) {

      this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount(context) {

      this.reactFunction(this.instance.props, context);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactFunction.getChildContext();
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

function defaultComponentDidMount() {}
function defaultComponentWillUnmount() {}
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
},{"./compose":20}],18:[function(require,module,exports){
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
},{}],19:[function(require,module,exports){
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

},{"./createStore":21,"./utils/warning":23,"_process":16,"lodash/isPlainObject":27}],20:[function(require,module,exports){
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
},{}],21:[function(require,module,exports){
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
},{"lodash/isPlainObject":27}],22:[function(require,module,exports){
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

},{"./applyMiddleware":17,"./bindActionCreators":18,"./combineReducers":19,"./compose":20,"./createStore":21,"./utils/warning":23,"_process":16}],23:[function(require,module,exports){
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
},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
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

},{}],27:[function(require,module,exports){
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

},{"./_getPrototype":24,"./_isHostObject":25,"./isObjectLike":26}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL2luZGV4LmpzIiwiZG9jcy9saWJFUzIwMTUvcmVkdXhBcHAuanMiLCJkb2NzL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIiwiaW5kZXguanMiLCJsaWJFUzIwMTUvZGlzcGxheUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdC5qcyIsImxpYkVTMjAxNS9yZWFjdENsYXNzLmpzIiwibGliRVMyMDE1L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdERPTS5qcyIsImxpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiLCJsaWJFUzIwMTUvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJsaWJFUzIwMTUvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9hcHBseU1pZGRsZXdhcmUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvY29tYmluZVJlZHVjZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jb21wb3NlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL3V0aWxzL3dhcm5pbmcuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSOztBQUVKLElBQUksV0FBVyxRQUFRLGFBQVIsQ0FBWDtJQUNBLFdBQVcsU0FBUyxRQUFUO0lBQ1gsUUFBUSxTQUFTLEtBQVQ7O0lBRU47QUFDSixXQURJLFFBQ0osR0FBYzswQkFEVixVQUNVO0dBQWQ7O2VBREk7OzBCQUtTO0FBQ1gsVUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBREs7O0FBR1gsVUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssVUFBTDtBQUNFLG1CQUFPO0FBQ0wsa0JBQUksT0FBTyxFQUFQO0FBQ0osb0JBQU0sT0FBTyxJQUFQO0FBQ04seUJBQVcsS0FBWDthQUhGLENBREY7O0FBREYsZUFRTyxhQUFMO0FBQ0UsZ0JBQUksTUFBTSxFQUFOLEtBQWEsT0FBTyxFQUFQLEVBQVc7QUFDMUIscUJBQU8sS0FBUCxDQUQwQjthQUE1Qjs7QUFJQSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLHlCQUFXLENBQUMsTUFBTSxTQUFOO2FBRFAsQ0FBUCxDQUxGOztBQVJGO0FBa0JJLG1CQUFPLEtBQVAsQ0FERjtBQWpCRixTQUQ4QjtPQUFuQixDQUhGOztBQTBCWCxVQUFNLFFBQVEsU0FBUixLQUFRLEdBQXdCO1lBQXZCLDhEQUFRLGtCQUFlO1lBQVgsc0JBQVc7O0FBQ3BDLGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssVUFBTDtBQUNFLGdEQUNLLFNBQ0gsS0FBSyxTQUFMLEVBQWdCLE1BQWhCLEdBRkYsQ0FERjs7QUFERixlQU9PLGFBQUw7QUFDRSxtQkFBTyxNQUFNLEdBQU4sQ0FBVTtxQkFBSyxLQUFLLENBQUwsRUFBUSxNQUFSO2FBQUwsQ0FBakIsQ0FERjs7QUFQRjtBQVdJLG1CQUFPLEtBQVAsQ0FERjtBQVZGLFNBRG9DO09BQXhCLENBMUJIOztBQTBDWCxVQUFNLG1CQUFtQixTQUFuQixnQkFBbUIsR0FBaUM7WUFBL0IsOERBQVEsMEJBQXVCO1lBQVgsc0JBQVc7O0FBQ3hELGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssdUJBQUw7QUFDRSxtQkFBTyxPQUFPLE1BQVAsQ0FEVDs7QUFERjtBQUtJLG1CQUFPLEtBQVAsQ0FERjtBQUpGLFNBRHdEO09BQWpDLENBMUNkOztVQW9ESCxrQkFBb0IsTUFBcEIsZ0JBcERHOzs7QUFzRFgsVUFBTSxVQUFVLGdCQUFnQjtBQUM5QixlQUFPLEtBQVA7QUFDQSwwQkFBa0IsZ0JBQWxCO09BRmMsQ0FBVixDQXRESzs7VUEyREgsWUFBYyxNQUFkLFVBM0RHOzs7QUE2RFgsVUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsQ0FDcEIsS0FEb0IsRUFFcEIsTUFGb0IsRUFHbkI7QUFDSCxnQkFBUSxNQUFSO0FBQ0UsZUFBSyxVQUFMO0FBQ0UsbUJBQU8sS0FBUCxDQURGOztBQURGLGVBSU8sZ0JBQUw7QUFDRSxtQkFBTyxNQUFNLE1BQU4sQ0FDSDtxQkFBSyxFQUFFLFNBQUY7YUFBTCxDQURKLENBREY7O0FBSkYsZUFTTyxhQUFMO0FBQ0UsbUJBQU8sTUFBTSxNQUFOLENBQ0g7cUJBQUssQ0FBQyxFQUFFLFNBQUY7YUFBTixDQURKLENBREY7QUFURixTQURHO09BSG1CLENBN0RiOztBQWlGWCxVQUFNLE9BQU8sU0FBUCxJQUFPO1lBQ1g7WUFDQTtZQUNBO2VBR0E7O1lBQUksU0FBUyxPQUFUO0FBQ0EsbUJBQU8sRUFBQyxnQkFDRSxZQUNFLGNBREYsR0FFSSxNQUZKLEVBRFY7V0FESjtVQU1HLElBTkg7O09BTlcsQ0FqRkY7O0FBaUdYLFVBQU0sV0FBVyxTQUFYLFFBQVc7WUFDZjtZQUNBO2VBR0E7OztVQUNHLE1BQU0sR0FBTixDQUFVO21CQUFRLG9CQUFDLElBQUQsSUFBTSxNQUFNLEtBQUssSUFBTDtBQUNOLHlCQUFXLEtBQUssU0FBTDtBQUNYLHVCQUFTO3VCQUNQLFlBQVksS0FBSyxFQUFMO2VBREw7YUFGZjtXQUFSLENBRGI7O09BTGUsQ0FqR047O0FBZ0hYLFVBQU0sT0FBTyxTQUFQLElBQU8sUUFJUDtZQUhKLHNCQUdJO1lBRkoseUJBRUk7WUFESiwwQkFDSTs7QUFDSixZQUFJLE1BQUosRUFBWTtBQUNWLGlCQUFPOzs7WUFBTyxRQUFQO1dBQVAsQ0FEVTtTQUFaOztBQUlBLGVBQ0k7O1lBQUcsTUFBSyxHQUFMO0FBQ0EscUJBQVMsb0JBQUs7QUFDWixnQkFBRSxjQUFGLEdBRFk7QUFFWix5QkFGWTthQUFMO1dBRFo7VUFNRyxRQU5IO1NBREosQ0FMSTtPQUpPLENBaEhGOztVQXFJTDs7Ozs7Ozs7Ozs7OENBQ2dCOzs7Z0JBQ1YsUUFBVSxLQUFLLEtBQUwsQ0FBVixNQURVOzs7QUFHbEIsaUJBQUssV0FBTCxHQUFtQixNQUFNLFNBQU4sQ0FBZ0I7cUJBQ2pDLE9BQUssV0FBTDthQURpQyxDQUFuQyxDQUhrQjs7OztpREFRRztBQUNyQixpQkFBSyxXQUFMLEdBRHFCOzs7O21DQUlkO2dCQUNDLFFBQVUsS0FBSyxLQUFMLENBQVYsTUFERDs7QUFFUCxnQkFBTSxRQUFRLEtBQUssS0FBTCxDQUZQO0FBR1AsZ0JBQU0sUUFBUSxNQUFNLFFBQU4sRUFBUixDQUhDOztBQUtQLG1CQUNFO0FBQUMsa0JBQUQ7Z0JBQU0sUUFDRSxNQUFNLE1BQU4sS0FBaUIsTUFBTSxnQkFBTjtBQUVuQix5QkFBUzt5QkFDUCxNQUFNLFFBQU4sQ0FBZTtBQUNiLDBCQUFNLHVCQUFOO0FBQ0EsNEJBQVEsTUFBTSxNQUFOO21CQUZWO2lCQURPO2VBSGY7Y0FVRyxNQUFNLFFBQU47YUFYTCxDQUxPOzs7O2VBYkw7UUFBbUIsV0FySWQ7O0FBd0tYLFVBQUksYUFBYSxDQUFiLENBeEtPO0FBeUtYLFVBQU0sVUFBVSxTQUFWLE9BQVUsUUFFVjtZQURKLG9CQUNJOztBQUNKLFlBQUksY0FBSixDQURJOztBQUdKLGVBRUU7OztVQUNFLCtCQUFPLEtBQUssbUJBQVE7QUFDWixzQkFBUSxJQUFSLENBRFk7YUFBUjtXQUFaLENBREY7VUFLRTs7Y0FBUSxTQUFTLG1CQUFNO0FBQ2Isc0JBQU0sUUFBTixDQUFlO0FBQ2Isd0JBQU0sVUFBTjtBQUNBLHdCQUFNLE1BQU0sS0FBTjtBQUNOLHNCQUFJLFlBQUo7aUJBSEYsRUFEYTtBQU1iLHNCQUFNLEtBQU4sR0FBYyxFQUFkLENBTmE7ZUFBTjthQUFqQjs7V0FMRjtTQUZGLENBSEk7T0FGVSxDQXpLTDs7VUFvTUw7Ozs7Ozs7Ozs7OzhDQUNnQjs7O2dCQUNWLFFBQVUsS0FBSyxLQUFMLENBQVYsTUFEVTs7O0FBR2xCLGlCQUFLLFdBQUwsR0FBbUIsTUFBTSxTQUFOLENBQWdCO3FCQUNqQyxPQUFLLFdBQUw7YUFEaUMsQ0FBbkMsQ0FIa0I7Ozs7aURBUUc7QUFDckIsaUJBQUssV0FBTCxHQURxQjs7OzttQ0FJZDtnQkFDQyxRQUFVLEtBQUssS0FBTCxDQUFWLE1BREQ7O0FBRVAsZ0JBQU0sUUFBUSxNQUFNLFFBQU4sRUFBUixDQUZDOztBQUlQLG1CQUVFLG9CQUFDLFFBQUQsSUFBVSxPQUNFLGdCQUNFLE1BQU0sS0FBTixFQUNBLE1BQU0sZ0JBQU4sQ0FISjtBQU1BLDJCQUFhO3VCQUNYLE1BQU0sUUFBTixDQUFlO0FBQ2Isd0JBQU0sYUFBTjtBQUNBLHNCQUFJLEVBQUo7aUJBRkY7ZUFEVzthQU52QixDQUZGLENBSk87Ozs7ZUFiTDtRQUF3QixXQXBNbkI7O0FBd09YLFVBQU0sU0FBUyxTQUFULE1BQVM7WUFDYjtlQUdBOzs7O1VBRUcsR0FGSDtVQUdFO0FBQUMsc0JBQUQ7Y0FBWSxRQUFPLFVBQVAsRUFBa0IsT0FBTyxLQUFQLEVBQTlCOztXQUhGO1VBTUcsR0FOSDtVQU9FO0FBQUMsc0JBQUQ7Y0FBWSxRQUFPLGFBQVAsRUFBcUIsT0FBTyxLQUFQLEVBQWpDOztXQVBGO1VBVUcsR0FWSDtVQVdFO0FBQUMsc0JBQUQ7Y0FBWSxRQUFPLGdCQUFQLEVBQXdCLE9BQU8sS0FBUCxFQUFwQzs7V0FYRjs7T0FKYSxDQXhPSjs7QUE2UFgsVUFBTSxVQUFVLFNBQVYsT0FBVTtZQUNkO2VBR0E7OztVQUNFLG9CQUFDLE9BQUQsSUFBUyxPQUFPLEtBQVAsRUFBVCxDQURGO1VBRUUsb0JBQUMsZUFBRCxJQUFpQixPQUFPLEtBQVAsRUFBakIsQ0FGRjtVQUdFLG9CQUFDLE1BQUQsSUFBUSxPQUFPLEtBQVAsRUFBUixDQUhGOztPQUpjLENBN1BMOztVQXdRSCxjQUFnQixNQUFoQixZQXhRRzs7O0FBMFFYLGVBQVMsTUFBVCxDQUNFLG9CQUFDLE9BQUQsSUFBUyxPQUFPLFlBQVksT0FBWixDQUFQLEVBQVQsQ0FERixFQUVFLGNBRkYsRUExUVc7Ozs7U0FMVDs7O0FBc1JOLE9BQU8sT0FBUCxHQUFpQixRQUFqQjs7O0FDOVJBOzs7O0FBRUEsSUFBSSxXQUFXLFFBQVEsYUFBUixDQUFYO0lBQ0EsV0FBVyxTQUFTLFFBQVQ7SUFDWCxRQUFRLFNBQVMsS0FBVDs7SUFFTixhQUNKLFNBREksVUFDSixHQUFjO3dCQURWLFlBQ1U7O0FBQ1osTUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBRE07O0FBR1osTUFBSSxVQUFVLE1BQU0sV0FBTixDQUFrQjs7O0FBQzlCLFlBQVEsa0JBQVc7QUFDakIsYUFFRTs7VUFBSyxXQUFVLFNBQVYsRUFBTDtRQUNFOzs7VUFDRyxLQUFLLEtBQUwsQ0FBVyxPQUFYO1NBRkw7T0FGRixDQURpQjtLQUFYO0FBVVIsdUJBQW1CLDZCQUFXO0FBQzVCLFVBQUksVUFBVSxLQUFLLEtBQUwsQ0FBVyxPQUFYLENBRGM7O0FBRzVCLGNBQVEsR0FBUixDQUFZLGtDQUFrQyxPQUFsQyxDQUFaLENBSDRCO0tBQVg7R0FYUCxDQUFWLENBSFE7O0FBcUJaLE1BQUksZUFBZSxNQUFNLFdBQU4sQ0FBa0I7OztBQUNuQyxxQkFBaUIsMkJBQVc7QUFDMUIsVUFBSSxXQUFXLENBQ1QsZUFEUyxFQUVULHNCQUZTLENBQVg7VUFJQSxlQUFlO0FBQ2Isa0JBQVUsUUFBVjtPQURGLENBTHNCOztBQVMxQixhQUFPLFlBQVAsQ0FUMEI7S0FBWDtBQVdqQixZQUFRLGtCQUFXO0FBQ2pCLFVBQUksV0FBVyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCLENBQXdCLFVBQVMsT0FBVCxFQUFrQjtBQUN2RCxlQUFPLG9CQUFDLE9BQUQsSUFBUyxTQUFTLE9BQVQsRUFBVCxDQUFQLENBRHVEO09BQWxCLENBQW5DLENBRGE7O0FBS2pCLGFBRUU7O1VBQUssV0FBVSxjQUFWLEVBQUw7UUFDRyxRQURIO09BRkYsQ0FMaUI7S0FBWDtBQVlSLHVCQUFtQiw2QkFBVztBQUM1QixjQUFRLEdBQVIsQ0FBWSx1QkFBWixFQUQ0QjtLQUFYO0dBeEJGLENBQWYsQ0FyQlE7O0FBa0RaLE1BQUksZUFBZSxvQkFBQyxZQUFELE9BQWYsQ0FsRFE7O0FBb0RaLFdBQVMsTUFBVCxDQUFnQixZQUFoQixFQUE4QixjQUE5QixFQXBEWTs7QUFzRFosTUFBSSxXQUFXLENBQ1QsMEJBRFMsQ0FBWDtNQUdBLFFBQVE7QUFDTixjQUFVLFFBQVY7R0FERixDQXpEUTs7QUE2RFosYUFBVyxZQUFXO0FBQ3BCLGlCQUFhLFFBQWIsQ0FBc0IsS0FBdEIsRUFEb0I7R0FBWCxFQUVSLElBRkg7QUE3RFksQ0FBZDs7QUFtRUYsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVFOzs7QUFDSixXQURJLGNBQ0osQ0FBWSx1QkFBWixFQUFxQyxVQUFyQyxFQUFpRCxRQUFqRCxFQUEyRDswQkFEdkQsZ0JBQ3VEOztBQUN6RCxRQUFJLGFBQWEsT0FBUSx1QkFBUCxLQUFtQyxRQUFuQyxHQUNDLFNBQVMsYUFBVCxDQUF1Qix1QkFBdkIsQ0FERixHQUVJLHVCQUZKLENBRHdDOzt1RUFEdkQsMkJBTUksYUFMbUQ7O0FBT3pELFVBQUssVUFBTCxHQUFrQixVQUFsQixDQVB5RDs7QUFTekQsVUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBVHlEOztHQUEzRDs7ZUFESTs7MEJBYUUsUUFBUSxTQUFTO0FBQ3JCLGlDQWRFLHFEQWNVLE9BQVosQ0FEcUI7O0FBR3JCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixDQUFZLElBQVosRUFBa0IsT0FBbEIsRUFEb0M7T0FBaEIsQ0FFcEIsSUFGb0IsQ0FFZixJQUZlLENBQXRCLEVBSHFCOztBQU9yQixXQUFLLGVBQUwsR0FQcUI7Ozs7NEJBVWYsaUJBQWlCLFNBQVM7QUFDaEMsaUNBeEJFLHVEQXdCWSxnQkFBZCxDQURnQzs7QUFHaEMsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxLQUFOLENBQVksSUFBWixFQUFrQixPQUFsQixFQURvQztPQUFoQixDQUVwQixJQUZvQixDQUVmLElBRmUsQ0FBdEIsRUFIZ0M7O0FBT2hDLFdBQUssZUFBTCxHQVBnQzs7Ozs2QkFVekI7OztBQUdQLGlDQXBDRSxxREFvQ0YsQ0FITzs7OztzQ0FNUztBQUNoQixVQUFJLEtBQUssVUFBTCxLQUFvQixJQUFwQixFQUEwQjtBQUM1QixlQUQ0QjtPQUE5Qjs7QUFJQSxVQUFJLGFBQWEsS0FBSyxhQUFMLEVBQWI7VUFDQSxnQkFBZ0IsT0FBTyxJQUFQLENBQVksS0FBSyxVQUFMLENBQTVCLENBTlk7O0FBUWhCLG9CQUFjLE9BQWQsQ0FBc0IsVUFBVSxZQUFWLEVBQXdCO0FBQzVDLFlBQUksZ0JBQWdCLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUFoQjtZQUNBLGFBREo7WUFFSSxjQUZKLENBRDRDOztBQUs1QyxZQUFJLEtBQUosRUFBVyxFQUFYLE1BRU8sSUFBSSxpQkFBaUIsS0FBakIsRUFBd0I7QUFDakMsY0FBSSxXQUFXLGFBQVg7Y0FDQSxNQUFNLFVBQU4sQ0FGNkI7O0FBSWpDLG1CQUFTLEdBQVQsRUFKaUM7U0FBNUIsTUFLQSxJQUFJLFdBQVcsWUFBWCxFQUF5QixJQUF6QixDQUFKLEVBQW9DO0FBQ3pDLGNBQUksY0FBYyxVQUFVLFlBQVYsQ0FBZDtjQUNBLFVBQVUsYUFBVixDQUZxQzs7QUFJekMscUJBQVcsV0FBWCxJQUEwQixPQUExQixDQUp5QztTQUFwQyxNQUtBLElBQUksT0FBTyxhQUFQLEtBQXlCLFFBQXpCLEVBQW1DO0FBQzVDLDBCQUFnQiw4QkFBOEIsWUFBOUIsQ0FBaEIsQ0FENEM7QUFFNUMsMkJBQWlCLGFBQWpCLENBRjRDOztBQUk1QyxxQkFBVyxZQUFYLENBQXdCLGFBQXhCLEVBQXVDLGNBQXZDLEVBSjRDO1NBQXZDLE1BS0EsSUFBSSxRQUFPLHFFQUFQLEtBQXlCLFFBQXpCLEVBQW1DO0FBQzVDLDBCQUFnQixZQUFoQixDQUQ0Qzs7QUFHNUMsY0FBSSxPQUFPLE9BQU8sSUFBUCxDQUFZLGFBQVosQ0FBUCxDQUh3QztBQUk1QyxlQUFLLE9BQUwsQ0FBYSxVQUFTLEdBQVQsRUFBYztBQUN6QixnQkFBSSxRQUFRLGNBQWMsR0FBZCxDQUFSLENBRHFCOztBQUd6Qix1QkFBVyxhQUFYLEVBQTBCLEdBQTFCLElBQWlDLEtBQWpDLENBSHlCO1dBQWQsQ0FBYixDQUo0QztTQUF2QyxNQVNBOztTQVRBO09BdEJhLENBa0NwQixJQWxDb0IsQ0FrQ2YsSUFsQ2UsQ0FBdEIsRUFSZ0I7Ozs7U0F2Q2Q7RUFBdUI7O0FBcUY3QixPQUFPLE9BQVAsR0FBaUIsY0FBakI7O0FBRUEsU0FBUyw2QkFBVCxDQUF1QyxZQUF2QyxFQUFxRDtBQUNuRCxVQUFRLFlBQVI7QUFDRSxTQUFLLFdBQUw7QUFDRSxhQUFPLE9BQVAsQ0FERjs7QUFERixTQUlPLFNBQUw7QUFDRSxhQUFPLEtBQVAsQ0FERjtBQUpGLEdBRG1EOztBQVNuRCxTQUFPLFlBQVAsQ0FUbUQ7Q0FBckQ7O0FBWUEsU0FBUyxTQUFULENBQW1CLE1BQW5CLEVBQTJCO0FBQ3pCLFNBQU8sT0FBTyxXQUFQLEVBQVAsQ0FEeUI7Q0FBM0I7O0FBSUEsU0FBUyxVQUFULENBQW9CLE1BQXBCLEVBQTRCLGVBQTVCLEVBQTZDO0FBQzNDLE1BQUksU0FBUyxJQUFJLE1BQUosQ0FBVyxNQUFNLGVBQU4sQ0FBcEI7TUFDQSxVQUFVLE9BQU8sS0FBUCxDQUFhLE1BQWIsQ0FBVixDQUZ1Qzs7QUFJM0MsU0FBTyxDQUFDLENBQUMsT0FBRDtBQUptQyxDQUE3Qzs7O0FDM0dBOzs7Ozs7SUFFTTtBQUNKLFdBREksT0FDSixDQUFZLFVBQVosRUFBd0I7MEJBRHBCLFNBQ29COztBQUN0QixTQUFLLFVBQUwsR0FBa0IsVUFBbEIsQ0FEc0I7R0FBeEI7O2VBREk7OzBCQUtFLFFBQVE7QUFDWixhQUFPLE1BQVAsQ0FBYyxJQUFkLEVBRFk7Ozs7NEJBSU4saUJBQWlCO0FBQ3ZCLHNCQUFnQixXQUFoQixDQUE0QixJQUE1QixFQUR1Qjs7Ozs4QkFJZjtBQUNSLFdBQUssTUFBTCxHQURROzs7OzZCQUlEO0FBQ1AsV0FBSyxVQUFMLENBQWdCLGFBQWhCLENBQThCLFdBQTlCLENBQTBDLEtBQUssVUFBTCxDQUExQyxDQURPOzs7OzJCQUlGLE9BQU87QUFDWixVQUFJLGtCQUFrQixNQUFNLGFBQU4sRUFBbEIsQ0FEUTs7QUFHWixXQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsZUFBNUIsRUFIWTs7OztnQ0FNRixpQkFBaUI7QUFDM0IsVUFBSSw0QkFBNEIsZ0JBQWdCLGFBQWhCLEVBQTVCLENBRHVCOztBQUczQixXQUFLLFVBQUwsQ0FBZ0IsYUFBaEIsQ0FBOEIsWUFBOUIsQ0FBMkMseUJBQTNDLEVBQXNFLEtBQUssVUFBTCxDQUFnQixXQUFoQixDQUF0RSxDQUgyQjs7Ozs0QkFNckI7QUFDTixhQUFPLEtBQUssVUFBTCxDQUFnQixVQUFoQixFQUE0QjtBQUNqQyxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsS0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTVCLENBRGlDO09BQW5DOzs7O29DQUtjO0FBQ2QsYUFBTyxLQUFLLFVBQUwsQ0FETzs7OztTQXZDWjs7O0FBNENOLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7O0FDOUNBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCO0lBQ0EsYUFBYSxRQUFRLGNBQVIsQ0FBYjtJQUNBLFVBQVUsUUFBUSxXQUFSLENBQVY7SUFDQSxjQUFjLFFBQVEsZUFBUixDQUFkO0lBQ0EsZUFBZSxRQUFRLGdCQUFSLENBQWY7SUFDQSxpQkFBaUIsUUFBUSxrQkFBUixDQUFqQjtJQUNBLG9CQUFvQixRQUFRLHFCQUFSLENBQXBCO0lBQ0EsdUJBQXVCLFFBQVEsd0JBQVIsQ0FBdkI7SUFDQSx3QkFBd0IsUUFBUSx5QkFBUixDQUF4Qjs7SUFFRTs7Ozs7OztnQ0FDZSxZQUFZO0FBQzdCLFVBQUksYUFBYSxXQUFXLGNBQVgsQ0FBMEIsVUFBMUIsQ0FBYixDQUR5Qjs7QUFHN0IsYUFBTyxVQUFQLENBSDZCOzs7O2tDQU1WLGVBQWUsWUFBbUM7QUFDckUsVUFBSSxrQkFBa0IsU0FBbEIsRUFBNkI7QUFDL0IsZUFBTyxTQUFQLENBRCtCO09BQWpDOzt3Q0FEaUQ7O09BQW9COztBQUtyRSxVQUFJLFdBQVcsK0JBQStCLGtCQUEvQixDQUFYO1VBQ0EsT0FESixDQUxxRTs7QUFRckUsVUFBSSxLQUFKLEVBQVcsRUFBWCxNQUVPLElBQUksY0FBYyxTQUFkLFlBQW1DLGNBQW5DLEVBQW1EO0FBQzVELFlBQUksNEJBQTRCLGFBQTVCO1lBQ0EsaUJBQWlCLElBQUkseUJBQUosRUFBakIsQ0FGd0Q7O0FBSTVELGtCQUFVLElBQUkscUJBQUosQ0FBMEIsY0FBMUIsRUFBMEMsVUFBMUMsRUFBc0QsUUFBdEQsQ0FBVixDQUo0RDtPQUF2RCxNQUtBLElBQUkseUJBQXlCLFVBQXpCLEVBQXFDO0FBQzlDLFlBQUksYUFBYSxhQUFiLENBRDBDOztBQUc5QyxrQkFBVSxJQUFJLGlCQUFKLENBQXNCLFVBQXRCLEVBQWtDLFVBQWxDLEVBQThDLFFBQTlDLENBQVYsQ0FIOEM7T0FBekMsTUFJQSxJQUFJLE9BQU8sYUFBUCxLQUF5QixVQUF6QixFQUFxQztBQUM5QyxZQUFJLGdCQUFnQixhQUFoQixDQUQwQzs7QUFHOUMsa0JBQVUsSUFBSSxvQkFBSixDQUF5QixhQUF6QixFQUF3QyxVQUF4QyxFQUFvRCxRQUFwRCxDQUFWLENBSDhDO09BQXpDLE1BSUE7QUFDTCxZQUFJLGNBQWMsYUFBZCxDQURDOztBQUdMLGtCQUFVLElBQUksY0FBSixDQUFtQixXQUFuQixFQUFnQyxVQUFoQyxFQUE0QyxRQUE1QyxDQUFWLENBSEs7T0FKQTs7QUFVUCxhQUFPLE9BQVAsQ0E3QnFFOzs7O1NBUG5FOzs7QUF3Q04sTUFBTSxTQUFOLEdBQWtCLGNBQWxCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7QUFFQSxTQUFTLDhCQUFULENBQXdDLGtCQUF4QyxFQUE0RDtBQUMxRCxNQUFJLHlCQUF5QixNQUFNLGtCQUFOLENBQXpCLENBRHNEOztBQUcxRCxNQUFJLGtDQUFrQyxLQUFsQyxFQUF5QztBQUMzQyx5QkFBcUIsc0JBQXJCLENBRDJDO0dBQTdDOztBQUlBLE1BQUksV0FBVyxtQkFBbUIsR0FBbkIsQ0FBdUIsVUFBUyxpQkFBVCxFQUE0QjtBQUNoRSxRQUFJLEtBQUosQ0FEZ0U7O0FBR2hFLFFBQUksNkJBQTZCLE9BQTdCLElBQ0EsNkJBQTZCLFlBQTdCLEVBQTJDO0FBQzdDLGNBQVEsaUJBQVIsQ0FENkM7S0FEL0MsTUFHTztBQUNMLFVBQUksT0FBTyxLQUFLLGlCQUFMO1VBQ1AsY0FBYyxJQUFJLFdBQUosQ0FBZ0IsSUFBaEIsQ0FBZCxDQUZDOztBQUlMLGNBQVEsV0FBUixDQUpLO0tBSFA7O0FBVUEsV0FBTyxLQUFQLENBYmdFO0dBQTVCLENBQWxDLENBUHNEOztBQXVCMUQsU0FBTyxRQUFQLENBdkIwRDtDQUE1RDs7QUEwQkEsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUFFLFNBQU8sTUFBTSxDQUFOLENBQVAsQ0FBRjtDQUF0Qjs7O0FDbEZBOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixRQUFRLGtCQUFSLENBQWpCOztJQUVFO0FBQ0osV0FESSxVQUNKLENBQVksTUFBWixFQUFvQixXQUFwQixFQUFpQyxlQUFqQyxFQUFrRCxlQUFsRCxFQUFtRSxpQkFBbkUsRUFBc0Ysb0JBQXRGLEVBQTRHOzBCQUR4RyxZQUN3Rzs7QUFDMUcsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUQwRztBQUUxRyxTQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FGMEc7QUFHMUcsU0FBSyxlQUFMLEdBQXVCLGVBQXZCLENBSDBHO0FBSTFHLFNBQUssZUFBTCxHQUF1QixlQUF2QixDQUowRztBQUsxRyxTQUFLLGlCQUFMLEdBQXlCLGlCQUF6QixDQUwwRztBQU0xRyxTQUFLLG9CQUFMLEdBQTRCLG9CQUE1QixDQU4wRztHQUE1Rzs7ZUFESTs7cUNBVWE7QUFDZixhQUFPLEtBQUssV0FBTCxDQURROzs7O21DQUlLLFlBQVk7QUFDaEMsVUFBSSxTQUFTLFdBQVcsUUFBWCxLQUF3QixhQUF4QjtVQUNULGNBQWMsV0FBVyxhQUFYLEtBQTZCLGtCQUE3QjtVQUNkLGtCQUFrQixXQUFXLGlCQUFYLEtBQWlDLHNCQUFqQztVQUNsQixrQkFBa0IsV0FBVyxpQkFBWCxLQUFpQyxzQkFBakM7VUFDbEIsb0JBQW9CLFdBQVcsbUJBQVgsS0FBbUMsd0JBQW5DO1VBQ3BCLHVCQUF1QixXQUFXLHNCQUFYLEtBQXNDLDJCQUF0QztVQUN2QixhQUFhLElBQUksVUFBSixDQUFlLE1BQWYsRUFBdUIsV0FBdkIsRUFBb0MsZUFBcEMsRUFBcUQsZUFBckQsRUFBc0UsaUJBQXRFLEVBQXlGLG9CQUF6RixDQUFiLENBUDRCOztBQVNoQyxhQUFPLFVBQVAsQ0FUZ0M7Ozs7U0FkOUI7OztBQTJCTixPQUFPLE9BQVAsR0FBaUIsVUFBakI7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3ZCLE1BQUksYUFBYSxLQUFLLEtBQUw7O0FBQ2IsZ0JBQWMsS0FBSyxXQUFMOztBQUNkLGFBQVcsS0FBSyxLQUFMLENBQVcsUUFBWDs7QUFIUSxTQUtoQixXQUFXLFFBQVg7O0FBTGdCLE1BT25CLGFBQWEsSUFBSSxjQUFKLENBQW1CLFdBQW5CLEVBQWdDLFVBQWhDLEVBQTRDLFFBQTVDLENBQWIsQ0FQbUI7O0FBU3ZCLFNBQU8sVUFBUCxDQVR1QjtDQUF6Qjs7QUFZQSxJQUFNLHFCQUFxQixTQUFyQjs7QUFFTixTQUFTLHNCQUFULEdBQWtDO0FBQUUsU0FBTyxFQUFQLENBQUY7Q0FBbEM7O0FBRUEsU0FBUyxzQkFBVCxHQUFrQztBQUFFLFNBQU8sU0FBUCxDQUFGO0NBQWxDOztBQUVBLFNBQVMsd0JBQVQsQ0FBa0MsT0FBbEMsRUFBMkMsRUFBM0M7O0FBRUEsU0FBUywyQkFBVCxDQUFxQyxPQUFyQyxFQUE4QyxFQUE5Qzs7O0FDckRBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxpQkFDSixDQUFZLFVBQVosRUFBd0IsVUFBeEIsRUFBb0MsUUFBcEMsRUFBOEM7MEJBRDFDLG1CQUMwQzs7dUVBRDFDLDhCQUVJLFlBQVksV0FEMEI7O0FBRzVDLFVBQUssUUFBTCxDQUFjLFdBQWQsR0FBNEIsV0FBVyxjQUFYLEVBQTVCLENBSDRDOztBQUs1QyxVQUFLLFFBQUwsQ0FBYyxLQUFkLEdBQXNCLFdBQVcsZUFBWCxFQUF0Qjs7QUFMNEMsU0FPNUMsQ0FBSyxVQUFMLEdBQWtCLFVBQWxCLENBUDRDOztHQUE5Qzs7ZUFESTs7MkJBV0csU0FBUztBQUNkLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FEYzs7QUFHZCxhQUFPLEtBQUssVUFBTCxDQUFnQixNQUFoQixDQUF1QixLQUF2QixDQUE2QixLQUFLLFFBQUwsQ0FBcEMsQ0FIYzs7OztzQ0FNRSxTQUFTO0FBQ3pCLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FEeUI7O0FBR3pCLFdBQUssVUFBTCxDQUFnQixpQkFBaEIsQ0FBa0MsS0FBbEMsQ0FBd0MsS0FBSyxRQUFMLENBQXhDLENBSHlCOzs7O3lDQU1OLFNBQVM7QUFDNUIsV0FBSyxRQUFMLENBQWMsT0FBZCxHQUF3QixPQUF4QixDQUQ0Qjs7QUFHNUIsV0FBSyxVQUFMLENBQWdCLG9CQUFoQixDQUFxQyxLQUFyQyxDQUEyQyxLQUFLLFFBQUwsQ0FBM0MsQ0FINEI7Ozs7c0NBTVo7QUFDaEIsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsZUFBaEIsRUFBUCxDQURnQjs7Ozs2QkFJVCxPQUFPO0FBQ2QsV0FBSyxRQUFMLENBQWMsS0FBZCxHQUFzQixLQUF0QixDQURjOztBQUdkLFdBQUssV0FBTCxHQUhjOzs7O1NBakNaO0VBQTBCOztBQXdDaEMsT0FBTyxPQUFQLEdBQWlCLGlCQUFqQjs7O0FDNUNBOzs7Ozs7SUFFTTtBQUNKLFdBREksY0FDSixHQUFjOzBCQURWLGdCQUNVO0dBQWQ7O2VBREk7OzZCQUtLOzs7c0NBSVM7OztzQ0FJQSxTQUFTOzs7eUNBSU4sU0FBUzs7O1NBakIxQjs7O0FBc0JOLE9BQU8sT0FBUCxHQUFpQixjQUFqQjs7O0FDeEJBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxxQkFDSixDQUFZLGNBQVosRUFBNEIsVUFBNUIsRUFBd0MsUUFBeEMsRUFBa0Q7MEJBRDlDLHVCQUM4Qzs7dUVBRDlDLGtDQUVJLFlBQVksV0FEOEI7O0FBT2hELFVBQUssY0FBTCxHQUFzQixjQUF0QixDQVBnRDs7R0FBbEQ7O2VBREk7OzJCQVdHLFNBQVM7QUFDZCxXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRGM7O0FBR2QsYUFBTyxLQUFLLGNBQUwsQ0FBb0IsTUFBcEIsQ0FBMkIsS0FBM0IsQ0FBaUMsS0FBSyxRQUFMLENBQXhDLENBSGM7Ozs7c0NBTUUsU0FBUztBQUN6QixXQUFLLFFBQUwsQ0FBYyxPQUFkLEdBQXdCLE9BQXhCLENBRHlCOztBQUd6QixXQUFLLGNBQUwsQ0FBb0IsaUJBQXBCLENBQXNDLEtBQXRDLENBQTRDLEtBQUssUUFBTCxDQUE1QyxDQUh5Qjs7Ozt5Q0FNTixTQUFTO0FBQzVCLFdBQUssUUFBTCxDQUFjLE9BQWQsR0FBd0IsT0FBeEIsQ0FENEI7O0FBRzVCLFdBQUssY0FBTCxDQUFvQixvQkFBcEIsQ0FBeUMsS0FBekMsQ0FBK0MsS0FBSyxRQUFMLENBQS9DLENBSDRCOzs7O3NDQU1aO0FBQ2hCLGFBQU8sS0FBSyxjQUFMLENBQW9CLGVBQXBCLEVBQVAsQ0FEZ0I7Ozs7U0E3QmQ7RUFBOEI7O0FBa0NwQyxPQUFPLE9BQVAsR0FBaUIscUJBQWpCOzs7QUN0Q0E7Ozs7OztBQUVBLElBQUksaUJBQWlCLFFBQVEsa0JBQVIsQ0FBakI7O0lBRUU7Ozs7Ozs7MkJBQ1UsU0FBUyxrQkFBa0I7QUFDdkMsVUFBSSxhQUFhLElBQWI7VUFDQSxXQUFXLEVBQVg7VUFDQSxnQkFBZ0IsSUFBSSxjQUFKLENBQW1CLGdCQUFuQixFQUFxQyxVQUFyQyxFQUFpRCxRQUFqRCxDQUFoQixDQUhtQzs7QUFLdkMsb0JBQWMsS0FBZCxHQUx1Qzs7QUFPdkMsY0FBUSxLQUFSLENBQWMsYUFBZDtBQVB1Qzs7O1NBRHJDOzs7QUFZTixPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ2hCQTs7Ozs7O0lBRU07QUFDSixXQURJLFlBQ0osQ0FBWSxVQUFaLEVBQXdCLFFBQXhCLEVBQWtDOzBCQUQ5QixjQUM4Qjs7QUFDaEMsUUFBTSxRQUFRLGNBQWMsRUFBZDtRQUNSLGNBQWMsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQWQsQ0FGMEI7O0FBSWhDLFNBQUssUUFBTCxHQUFnQixRQUFoQixDQUpnQzs7QUFNaEMsVUFBTSxRQUFOLEdBQWlCLFFBQWpCLENBTmdDOztBQVFoQyxTQUFLLFFBQUwsR0FBZ0I7QUFDZCxhQUFPLEtBQVA7QUFDQSxtQkFBYSxXQUFiO0tBRkYsQ0FSZ0M7R0FBbEM7O2VBREk7OzBCQWVFLFFBQVEsU0FBUztBQUNyQixVQUFNLGtCQUFrQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQWxCO1VBQ0EsZUFBZSxLQUFLLGVBQUwsTUFBMEIsT0FBMUIsQ0FGQTs7QUFJckIsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FKSzs7QUFRckIsV0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQixVQUFTLEtBQVQsRUFBZ0I7QUFDcEMsY0FBTSxLQUFOLENBQVksTUFBWixFQUFvQixZQUFwQixFQURvQztPQUFoQixDQUF0QixDQVJxQjs7QUFZckIsV0FBSyxpQkFBTCxDQUF1QixPQUF2QixFQVpxQjs7Ozs0QkFlZixpQkFBaUIsU0FBUztBQUNoQyxVQUFNLGtCQUFrQixLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQWxCO1VBQ0EsZUFBZSxLQUFLLGVBQUwsTUFBMEIsT0FBMUIsQ0FGVzs7QUFJaEMsV0FBSyxRQUFMLEdBQWdCLGVBQUMsWUFBMkIsS0FBM0IsR0FDQyxlQURGLEdBRUksQ0FBQyxlQUFELENBRkosQ0FKZ0I7O0FBUWhDLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sT0FBTixDQUFjLGVBQWQsRUFBK0IsWUFBL0IsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FSZ0M7Ozs7NEJBYTFCLFNBQVM7QUFDZixXQUFLLG9CQUFMLENBQTBCLE9BQTFCLEVBRGU7O0FBR2YsVUFBTSxlQUFlLEtBQUssZUFBTCxNQUEwQixPQUExQixDQUhOOztBQUtmLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sT0FBTixDQUFjLE9BQWQsRUFBdUIsWUFBdkIsRUFEb0M7T0FBaEIsQ0FBdEIsQ0FMZTs7Ozs2QkFVUjtBQUNQLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sTUFBTixHQURvQztPQUFoQixDQUF0QixDQURPOzs7OzJCQU1GLFFBQVE7QUFDYixXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLE1BQU4sQ0FBYSxNQUFiLEVBRG9DO09BQWhCLENBQXRCLENBRGE7Ozs7Z0NBTUgsaUJBQWlCO0FBQzNCLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sV0FBTixDQUFrQixlQUFsQixFQURvQztPQUFoQixDQUF0QixDQUQyQjs7OztrQ0FNZjtBQUNaLFVBQUksbUJBQW1CLEtBQUssUUFBTDtVQUNuQixvQkFBb0IsS0FBSyxnQkFBTCxDQUFwQixDQUZROztBQUlaLFdBQUssT0FBTCxDQUFhLGlCQUFiLEVBSlk7O0FBTVosdUJBQWlCLE9BQWpCLENBQXlCLFVBQVMsYUFBVCxFQUF3QjtBQUMvQyxzQkFBYyxNQUFkLEdBRCtDO09BQXhCLENBQXpCLENBTlk7Ozs7U0F2RVY7OztBQW1GTixPQUFPLE9BQVAsR0FBaUIsWUFBakI7O0FBRUEsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUFFLFNBQU8sTUFBTSxNQUFNLE1BQU4sR0FBZSxDQUFmLENBQWIsQ0FBRjtDQUFyQjs7O0FDdkZBOzs7Ozs7Ozs7O0FBRUEsSUFBSSxlQUFlLFFBQVEsZ0JBQVIsQ0FBZjs7SUFFRTs7O0FBQ0osV0FESSxvQkFDSixDQUFZLGFBQVosRUFBMkIsVUFBM0IsRUFBdUMsUUFBdkMsRUFBaUQ7MEJBRDdDLHNCQUM2Qzs7dUVBRDdDLGlDQUVJLFlBQVksV0FENkI7O0FBRy9DLFFBQUksQ0FBQyxjQUFjLGlCQUFkLEVBQWlDO0FBQUUsb0JBQWMsaUJBQWQsR0FBa0Msd0JBQWxDLENBQUY7S0FBdEM7QUFDQSxRQUFJLENBQUMsY0FBYyxvQkFBZCxFQUFvQztBQUFFLG9CQUFjLG9CQUFkLEdBQXFDLDJCQUFyQyxDQUFGO0tBQXpDO0FBQ0EsUUFBSSxDQUFDLGNBQWMsZUFBZCxFQUErQjtBQUFFLG9CQUFjLGVBQWQsR0FBZ0Msc0JBQWhDLENBQUY7S0FBcEM7O0FBRUEsVUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBUCtDOztHQUFqRDs7ZUFESTs7MkJBV0csU0FBUzs7QUFHZCxhQUFPLEtBQUssYUFBTCxDQUFtQixLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLE9BQXhDLENBQVAsQ0FIYzs7OztzQ0FNRSxTQUFTOztBQUd6QixXQUFLLGFBQUwsQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixPQUF4QyxFQUh5Qjs7Ozt5Q0FNTixTQUFTOztBQUc1QixXQUFLLGFBQUwsQ0FBbUIsS0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixPQUF4QyxFQUg0Qjs7OztzQ0FNWjtBQUNoQixhQUFPLEtBQUssYUFBTCxDQUFtQixlQUFuQixFQUFQLENBRGdCOzs7O1NBN0JkO0VBQTZCOztBQWtDbkMsT0FBTyxPQUFQLEdBQWlCLG9CQUFqQjs7QUFFQSxTQUFTLHdCQUFULEdBQW9DLEVBQXBDO0FBQ0EsU0FBUywyQkFBVCxHQUF1QyxFQUF2QztBQUNBLFNBQVMsc0JBQVQsR0FBa0M7QUFBRSxTQUFPLFNBQVAsQ0FBRjtDQUFsQzs7O0FDMUNBOzs7Ozs7OztBQUVBLElBQUksVUFBVSxRQUFRLFdBQVIsQ0FBVjs7SUFFRTs7O0FBQ0osV0FESSxXQUNKLENBQVksSUFBWixFQUFrQjswQkFEZCxhQUNjOztBQUNoQixRQUFJLGFBQWEsU0FBUyxjQUFULENBQXdCLElBQXhCLENBQWIsQ0FEWTs7a0VBRGQsd0JBSUksYUFIVTtHQUFsQjs7U0FESTtFQUFvQjs7QUFRMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vbGliL3ZhbmlsbGFBcHAnKSxcbiAgUmVkdXhBcHA6IHJlcXVpcmUoJy4vbGliL3JlZHV4QXBwJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBSZWR1eEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG4gICAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICB0b2RvczogdG9kb3MsXG4gICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAoXG4gICAgICAgIHRvZG9zLFxuICAgICAgICBmaWx0ZXJcbiAgICApID0+IHtcbiAgICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3M7XG5cbiAgICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gdC5jb21wbGV0ZWRcbiAgICAgICAgICApO1xuXG4gICAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IFRvZG8gPSAoe1xuICAgICAgb25DbGljayxcbiAgICAgIGNvbXBsZXRlZCxcbiAgICAgIHRleHRcbiAgICB9KSA9PiAoXG5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ25vbmUnfX1cbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2xpPlxuICAgICk7XG5cbiAgICBjb25zdCBUb2RvTGlzdCA9ICh7XG4gICAgICB0b2RvcyxcbiAgICAgIG9uVG9kb0NsaWNrXG4gICAgfSkgPT4gKFxuXG4gICAgICA8dWw+XG4gICAgICAgIHt0b2Rvcy5tYXAodG9kbyA9PiA8VG9kbyB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcblxuICAgIGNvbnN0IExpbmsgPSAoe1xuICAgICAgYWN0aXZlLFxuICAgICAgb25DbGljayxcbiAgICAgIGNoaWxkcmVuXG4gICAgfSkgPT4ge1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgICBwcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcHJvcHMuZmlsdGVyXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZXh0VG9kb0lkID0gMDtcbiAgICBjb25zdCBBZGRUb2RvID0gKHtcbiAgICAgIHN0b3JlXG4gICAgfSkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHJlZj17bm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2RvcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9e2lkID0+XG4gICAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IEZvb3RlciA9ICh7XG4gICAgICBzdG9yZVxuICAgIH0pID0+IChcblxuICAgICAgPHA+XG4gICAgICAgIFNob3c6XG4gICAgICAgIHsnICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FDVElWRScgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJyBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgIENvbXBsZXRlZFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9BcHAgPSAoe1xuICAgICAgc3RvcmVcbiAgICB9KSA9PiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIHN0b3JlPXtzdG9yZX0vPlxuICAgICAgICA8VmlzaWJsZVRvZG9MaXN0IHN0b3JlPXtzdG9yZX0vPlxuICAgICAgICA8Rm9vdGVyIHN0b3JlPXtzdG9yZX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFRvZG9BcHAgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfSAvPixcbiAgICAgIHJvb3RET01FbGVtZW50XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgVmFuaWxsYUFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG4gICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29tbWVudHMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLm1hcChmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgdmFyIGNvbW1lbnRzTGlzdCA9IDxDb21tZW50c0xpc3QgLz47XG4gICAgXG4gICAgUmVhY3RET00ucmVuZGVyKGNvbW1lbnRzTGlzdCwgcm9vdERPTUVsZW1lbnQpO1xuICAgIFxuICAgIHZhciBtZXNzYWdlcyA9IFtcbiAgICAgICAgICBcIkhlbGxvIHdvcmxkIHlldCBhZ2FpbiEhIVwiXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICB9O1xuICAgIFxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBjb21tZW50c0xpc3Quc2V0U3RhdGUoc3RhdGUpO1xuICAgIH0sIDEwMDApOyAvLy9cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbmlsbGFBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKSxcbiAgUmVhY3RET006IHJlcXVpcmUoJy4vbGliL3JlYWN0RE9NJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lT3JET01FbGVtZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHZhciBkb21FbGVtZW50ID0gKHR5cGVvZiBkaXNwbGF5TmFtZU9yRE9NRWxlbWVudCA9PT0gJ3N0cmluZycpID8gXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZGlzcGxheU5hbWVPckRPTUVsZW1lbnQpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZU9yRE9NRWxlbWVudDtcbiAgICBcbiAgICBzdXBlcihkb21FbGVtZW50KTtcbiAgICBcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQodGhpcywgY29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICByZW1vdW50KHByZXZpb3VzU2libGluZywgY29udGV4dCkge1xuICAgIHN1cGVyLnJlbW91bnQocHJldmlvdXNTaWJsaW5nKTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQodGhpcywgY29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuYXBwbHlQcm9wZXJ0aWVzKCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgLy8vXG4gICAgXG4gICAgc3VwZXIucmVtb3ZlKCk7XG4gIH1cblxuICBhcHBseVByb3BlcnRpZXMoKSB7XG4gICAgaWYgKHRoaXMucHJvcGVydGllcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnRpZXMpO1xuXG4gICAgcHJvcGVydHlOYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHZhciBwcm9wZXJ0eVZhbHVlID0gdGhpcy5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0sXG4gICAgICAgICAgYXR0cmlidXRlTmFtZSxcbiAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLFxuICAgICAgICAgICAgcmVmID0gZG9tRWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHJlZilcbiAgICAgIH0gZWxzZSBpZiAoYmVnaW5zV2l0aChwcm9wZXJ0eU5hbWUsICdvbicpKSB7XG4gICAgICAgIHZhciBoYW5kbGVyTmFtZSA9IGxvd2VyY2FzZShwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgICAgZG9tRWxlbWVudFtoYW5kbGVyTmFtZV0gPSBoYW5kbGVyO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcHJvcGVydHlWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZU5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICBkb21FbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wZXJ0eVZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lO1xuXG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcGVydHlWYWx1ZSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0eVZhbHVlW2tleV07XG5cbiAgICAgICAgICBkb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLy9cbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGF0dHJpYnV0ZU5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICByZXR1cm4gJ2NsYXNzJztcblxuICAgIGNhc2UgJ2h0bWxGb3InOlxuICAgICAgcmV0dXJuICdmb3InO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGJlZ2luc1dpdGgoc3RyaW5nLCBiZWdpbm5pbmdTdHJpbmcpIHtcbiAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14nICsgYmVnaW5uaW5nU3RyaW5nKSxcbiAgICAgIG1hdGNoZXMgPSBzdHJpbmcubWF0Y2gocmVnRXhwKTtcblxuICByZXR1cm4gISFtYXRjaGVzOyAvLy9cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuICB9XG5cbiAgbW91bnQocGFyZW50KSB7XG4gICAgcGFyZW50LmFwcGVuZCh0aGlzKTtcbiAgfVxuICBcbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcpIHtcbiAgICBwcmV2aW91c1NpYmxpbmcuYXBwZW5kQWZ0ZXIodGhpcyk7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChjaGlsZCkge1xuICAgIHZhciBjaGlsZERPTUVsZW1lbnQgPSBjaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZykge1xuICAgIHZhciBwcmV2aW91c1NpYmxpbmdET01FbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShwcmV2aW91c1NpYmxpbmdET01FbGVtZW50LCB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICB9XG5cbiAgZW1wdHkoKSB7XG4gICAgd2hpbGUgKHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpLFxuICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50JyksXG4gICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgUmVhY3RGdW5jdGlvbkVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RnVuY3Rpb25FbGVtZW50JyksXG4gICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3MocHJvcGVydGllcykge1xuICAgIHZhciByZWFjdENsYXNzID0gUmVhY3RDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiByZWFjdENsYXNzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgaWYgKGZpcnN0QXJndW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgZWxlbWVudDtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICB2YXIgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvciA9IGZpcnN0QXJndW1lbnQsXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgIHZhciByZWFjdENsYXNzID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICBlbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgZWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cblJlYWN0LkNvbXBvbmVudCA9IFJlYWN0Q29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZHJlbkZyb21SZW1haW5pbmdBcmd1bWVudHMocmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIHZhciBmaXJzdFJlbWFpbmluZ0FyZ3VtZW50ID0gZmlyc3QocmVtYWluaW5nQXJndW1lbnRzKTtcblxuICBpZiAoZmlyc3RSZW1haW5pbmdBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzID0gZmlyc3RSZW1haW5pbmdBcmd1bWVudDtcbiAgfVxuXG4gIHZhciBjaGlsZHJlbiA9IHJlbWFpbmluZ0FyZ3VtZW50cy5tYXAoZnVuY3Rpb24ocmVtYWluaW5nQXJndW1lbnQpIHtcbiAgICB2YXIgY2hpbGQ7XG5cbiAgICBpZiAocmVtYWluaW5nQXJndW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgIHx8IHJlbWFpbmluZ0FyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RFbGVtZW50KSB7XG4gICAgICBjaGlsZCA9IHJlbWFpbmluZ0FyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGV4dCA9ICcnICsgcmVtYWluaW5nQXJndW1lbnQsXG4gICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGNoaWxkID0gdGV4dEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGRpc3BsYXlOYW1lLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlO1xuICAgIHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0O1xuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDtcbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7XG4gIH1cbiAgXG4gIGdldERpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmRpc3BsYXlOYW1lO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHZhciByZW5kZXIgPSBwcm9wZXJ0aWVzWydyZW5kZXInXSB8fCBkZWZhdWx0UmVuZGVyLFxuICAgICAgICBkaXNwbGF5TmFtZSA9IHByb3BlcnRpZXNbJ2Rpc3BsYXlOYW1lJ10gfHwgZGVmYXVsdERpc3BsYXlOYW1lLFxuICAgICAgICBnZXRJbml0aWFsU3RhdGUgPSBwcm9wZXJ0aWVzWydnZXRJbml0aWFsU3RhdGUnXSB8fCBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlLFxuICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBwcm9wZXJ0aWVzWydnZXRDaGlsZENvbnRleHQnXSB8fCBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0LFxuICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudERpZE1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudERpZE1vdW50LFxuICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IHByb3BlcnRpZXNbJ2NvbXBvbmVudFdpbGxVbm1vdW50J10gfHwgZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50LFxuICAgICAgICByZWFjdENsYXNzID0gbmV3IFJlYWN0Q2xhc3MocmVuZGVyLCBkaXNwbGF5TmFtZSwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gICAgXG4gICAgcmV0dXJuIHJlYWN0Q2xhc3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuXG5mdW5jdGlvbiBkZWZhdWx0UmVuZGVyKCkge1xuICB2YXIgcHJvcGVydGllcyA9IHRoaXMucHJvcHMsICAvLy9cbiAgICAgIGRpc3BsYXlOYW1lID0gdGhpcy5kaXNwbGF5TmFtZSwgLy8vXG4gICAgICBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47IC8vL1xuXG4gIGRlbGV0ZSBwcm9wZXJ0aWVzLmNoaWxkcmVuOyAvLy9cblxuICB2YXIganN4RWxlbWVudCA9IG5ldyBEaXNwbGF5RWxlbWVudChkaXNwbGF5TmFtZSwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gIHJldHVybiBqc3hFbGVtZW50O1xufVxuXG5jb25zdCBkZWZhdWx0RGlzcGxheU5hbWUgPSB1bmRlZmluZWQ7IC8vL1xuXG5mdW5jdGlvbiBkZWZhdWx0R2V0SW5pdGlhbFN0YXRlKCkgeyByZXR1cm4ge307IH1cblxuZnVuY3Rpb24gZGVmYXVsdEdldENoaWxkQ29udGV4dCgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29tcG9uZW50RGlkTW91bnQoY29udGV4dCkge31cblxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50KGNvbnRleHQpIHt9XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BlcnRpZXMsIGNoaWxkcmVuKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgdGhpcy5pbnN0YW5jZS5kaXNwbGF5TmFtZSA9IHJlYWN0Q2xhc3MuZ2V0RGlzcGxheU5hbWUoKTtcbiAgICBcbiAgICB0aGlzLmluc3RhbmNlLnN0YXRlID0gcmVhY3RDbGFzcy5nZXRJbml0aWFsU3RhdGUoKTsgLy8vXG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuICB9XG5cbiAgcmVuZGVyKGNvbnRleHQpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIFxuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG4gXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMuaW5zdGFuY2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuaW5zdGFuY2UuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50V2lsbFVubW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQoKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5pbnN0YW5jZS5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgXG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpIHtcbiAgICBcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50RWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q29tcG9uZW50LCBwcm9wZXJ0aWVzLCBjaGlsZHJlbikge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkcmVuKTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQgPSByZWFjdENvbXBvbmVudDtcbiAgfVxuXG4gIHJlbmRlcihjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcbiAgICBcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5yZW5kZXIuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5Nb3VudChjb250ZXh0KSB7XG4gICAgdGhpcy5pbnN0YW5jZS5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVuTW91bnQuYXBwbHkodGhpcy5pbnN0YW5jZSk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudEVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBEaXNwbGF5RWxlbWVudCA9IHJlcXVpcmUoJy4vZGlzcGxheUVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgIGNoaWxkcmVuID0gW10sXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCwgcHJvcGVydGllcywgY2hpbGRyZW4pO1xuXG4gICAgcGFyZW50RWxlbWVudC5lbXB0eSgpO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnRFbGVtZW50KTsgLy8vXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBjb25zdCBwcm9wcyA9IHByb3BlcnRpZXMgfHwge30sXG4gICAgICAgICAgZm9yY2VVcGRhdGUgPSB0aGlzLmZvcmNlVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG5cbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgIGZvcmNlVXBkYXRlOiBmb3JjZVVwZGF0ZVxuICAgIH07XG4gIH1cbiAgXG4gIG1vdW50KHBhcmVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSAoY2hpbGRPckNoaWxkcmVuIGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoaWxkT3JDaGlsZHJlbl07IFxuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChwYXJlbnQsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3VudChwcmV2aW91c1NpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcihjb250ZXh0KSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gKGNoaWxkT3JDaGlsZHJlbiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRPckNoaWxkcmVuIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGlsZE9yQ2hpbGRyZW5dO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5yZW1vdW50KHByZXZpb3VzU2libGluZywgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kKHBhcmVudCkge1xuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuYXBwZW5kKHBhcmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRBZnRlcihwcmV2aW91c1NpYmxpbmcpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLmFwcGVuZEFmdGVyKHByZXZpb3VzU2libGluZyk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JjZVVwZGF0ZSgpIHtcbiAgICB2YXIgcHJldmlvdXNDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4sXG4gICAgICAgIGxhc3RQcmV2aW91c0NoaWxkID0gbGFzdChwcmV2aW91c0NoaWxkcmVuKTtcblxuICAgIHRoaXMucmVtb3VudChsYXN0UHJldmlvdXNDaGlsZCk7XG5cbiAgICBwcmV2aW91c0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ocHJldmlvdXNDaGlsZCkge1xuICAgICAgcHJldmlvdXNDaGlsZC5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcGVydGllcywgY2hpbGRyZW4pIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZHJlbik7XG5cbiAgICBpZiAoIXJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQpIHsgcmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCA9IGRlZmF1bHRDb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmICghcmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkgeyByZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZGVmYXVsdENvbXBvbmVudFdpbGxVbm1vdW50OyB9XG4gICAgaWYgKCFyZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkgeyByZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCA9IGRlZmF1bHRHZXRDaGlsZENvbnRleHQ7IH1cblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gIH1cbiAgXG4gIHJlbmRlcihjb250ZXh0KSB7XG5cblxuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5pbnN0YW5jZS5wcm9wcywgY29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudChjb250ZXh0KSB7XG5cblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbih0aGlzLmluc3RhbmNlLnByb3BzLCBjb250ZXh0KTtcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoY29udGV4dCkge1xuICAgIFxuXG4gICAgdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMuaW5zdGFuY2UucHJvcHMsIGNvbnRleHQpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcblxuZnVuY3Rpb24gZGVmYXVsdENvbXBvbmVudERpZE1vdW50KCkge31cbmZ1bmN0aW9uIGRlZmF1bHRDb21wb25lbnRXaWxsVW5tb3VudCgpIHt9XG5mdW5jdGlvbiBkZWZhdWx0R2V0Q2hpbGRDb250ZXh0KCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRFbGVtZW50O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYXBwbHlNaWRkbGV3YXJlO1xuXG52YXIgX2NvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcblxudmFyIF9jb21wb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBzdG9yZS5kaXNwYXRjaDtcbiAgICAgIHZhciBjaGFpbiA9IFtdO1xuXG4gICAgICB2YXIgbWlkZGxld2FyZUFQSSA9IHtcbiAgICAgICAgZ2V0U3RhdGU6IHN0b3JlLmdldFN0YXRlLFxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9kaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY2hhaW4gPSBtaWRkbGV3YXJlcy5tYXAoZnVuY3Rpb24gKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIG1pZGRsZXdhcmUobWlkZGxld2FyZUFQSSk7XG4gICAgICB9KTtcbiAgICAgIF9kaXNwYXRjaCA9IF9jb21wb3NlMltcImRlZmF1bHRcIl0uYXBwbHkodW5kZWZpbmVkLCBjaGFpbikoc3RvcmUuZGlzcGF0Y2gpO1xuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBiaW5kQWN0aW9uQ3JlYXRvcnM7XG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGZ1bmN0aW9uIGluIHJldHVybi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufE9iamVjdH0gYWN0aW9uQ3JlYXRvcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uXG4gKiBjcmVhdG9yIGZ1bmN0aW9ucy4gT25lIGhhbmR5IHdheSB0byBvYnRhaW4gaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXNgXG4gKiBzeW50YXguIFlvdSBtYXkgYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc3BhdGNoIFRoZSBgZGlzcGF0Y2hgIGZ1bmN0aW9uIGF2YWlsYWJsZSBvbiB5b3VyIFJlZHV4XG4gKiBzdG9yZS5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb258T2JqZWN0fSBUaGUgb2JqZWN0IG1pbWlja2luZyB0aGUgb3JpZ2luYWwgb2JqZWN0LCBidXQgd2l0aFxuICogZXZlcnkgYWN0aW9uIGNyZWF0b3Igd3JhcHBlZCBpbnRvIHRoZSBgZGlzcGF0Y2hgIGNhbGwuIElmIHlvdSBwYXNzZWQgYVxuICogZnVuY3Rpb24gYXMgYGFjdGlvbkNyZWF0b3JzYCwgdGhlIHJldHVybiB2YWx1ZSB3aWxsIGFsc28gYmUgYSBzaW5nbGVcbiAqIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgJyArIChhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBhY3Rpb25DcmVhdG9ycykgKyAnLiAnICsgJ0RpZCB5b3Ugd3JpdGUgXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiIGluc3RlYWQgb2YgXCJpbXBvcnQgKiBhcyBBY3Rpb25DcmVhdG9ycyBmcm9tXCI/Jyk7XG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGFjdGlvbkNyZWF0b3JzKTtcbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYm91bmRBY3Rpb25DcmVhdG9yc1trZXldID0gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNvbWJpbmVSZWR1Y2VycztcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25OYW1lID0gYWN0aW9uVHlwZSAmJiAnXCInICsgYWN0aW9uVHlwZS50b1N0cmluZygpICsgJ1wiJyB8fCAnYW4gYWN0aW9uJztcblxuICByZXR1cm4gJ0dpdmVuIGFjdGlvbiAnICsgYWN0aW9uTmFtZSArICcsIHJlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gJyArICdUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuJztcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGFyZ3VtZW50TmFtZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gX2NyZWF0ZVN0b3JlLkFjdGlvblR5cGVzLklOSVQgPyAnaW5pdGlhbFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gJ1RoZSAnICsgYXJndW1lbnROYW1lICsgJyBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFwiJyArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgJ1wiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nICcgKyAoJ2tleXM6IFwiJyArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgJ1wiJyk7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KTtcbiAgfSk7XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gJ1VuZXhwZWN0ZWQgJyArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgJyAnICsgKCdcIicgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArICdcIiBmb3VuZCBpbiAnICsgYXJndW1lbnROYW1lICsgJy4gJykgKyAnRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiAnICsgKCdcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2FuaXR5KHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uICcgKyAnSWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGUgcmVkdWNlciBpcyB1bmRlZmluZWQsIHlvdSBtdXN0ICcgKyAnZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSAnICsgJ25vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUICsgJyBvciBvdGhlciBhY3Rpb25zIGluIFwicmVkdXgvKlwiICcpICsgJ25hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlICcgKyAnY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgJyArICdpbiB3aGljaCBjYXNlIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZSwgcmVnYXJkbGVzcyBvZiB0aGUgJyArICdhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQuJyk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBkaWZmZXJlbnQgcmVkdWNlciBmdW5jdGlvbnMsIGludG8gYSBzaW5nbGVcbiAqIHJlZHVjZXIgZnVuY3Rpb24uIEl0IHdpbGwgY2FsbCBldmVyeSBjaGlsZCByZWR1Y2VyLCBhbmQgZ2F0aGVyIHRoZWlyIHJlc3VsdHNcbiAqIGludG8gYSBzaW5nbGUgc3RhdGUgb2JqZWN0LCB3aG9zZSBrZXlzIGNvcnJlc3BvbmQgdG8gdGhlIGtleXMgb2YgdGhlIHBhc3NlZFxuICogcmVkdWNlciBmdW5jdGlvbnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgY29ycmVzcG9uZCB0byBkaWZmZXJlbnRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zIHRoYXQgbmVlZCB0byBiZSBjb21iaW5lZCBpbnRvIG9uZS4gT25lIGhhbmR5IHdheSB0byBvYnRhaW5cbiAqIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzIHJlZHVjZXJzYCBzeW50YXguIFRoZSByZWR1Y2VycyBtYXkgbmV2ZXIgcmV0dXJuXG4gKiB1bmRlZmluZWQgZm9yIGFueSBhY3Rpb24uIEluc3RlYWQsIHRoZXkgc2hvdWxkIHJldHVybiB0aGVpciBpbml0aWFsIHN0YXRlXG4gKiBpZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZW0gd2FzIHVuZGVmaW5lZCwgYW5kIHRoZSBjdXJyZW50IHN0YXRlIGZvciBhbnlcbiAqIHVucmVjb2duaXplZCBhY3Rpb24uXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHJlZHVjZXIgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGV2ZXJ5IHJlZHVjZXIgaW5zaWRlIHRoZVxuICogcGFzc2VkIG9iamVjdCwgYW5kIGJ1aWxkcyBhIHN0YXRlIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlLlxuICovXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZHVjZXJLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IHJlZHVjZXJLZXlzW2ldO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTtcblxuICB2YXIgc2FuaXR5RXJyb3I7XG4gIHRyeSB7XG4gICAgYXNzZXJ0UmVkdWNlclNhbml0eShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNhbml0eUVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbigpIHtcbiAgICB2YXIgc3RhdGUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzWzFdO1xuXG4gICAgaWYgKHNhbml0eUVycm9yKSB7XG4gICAgICB0aHJvdyBzYW5pdHlFcnJvcjtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIHdhcm5pbmdNZXNzYWdlID0gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShzdGF0ZSwgZmluYWxSZWR1Y2VycywgYWN0aW9uKTtcbiAgICAgIGlmICh3YXJuaW5nTWVzc2FnZSkge1xuICAgICAgICAoMCwgX3dhcm5pbmcyW1wiZGVmYXVsdFwiXSkod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGZpbmFsUmVkdWNlcktleXNbaV07XG4gICAgICB2YXIgcmVkdWNlciA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVba2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY29tcG9zZTtcbi8qKlxuICogQ29tcG9zZXMgc2luZ2xlLWFyZ3VtZW50IGZ1bmN0aW9ucyBmcm9tIHJpZ2h0IHRvIGxlZnQuIFRoZSByaWdodG1vc3RcbiAqIGZ1bmN0aW9uIGNhbiB0YWtlIG11bHRpcGxlIGFyZ3VtZW50cyBhcyBpdCBwcm92aWRlcyB0aGUgc2lnbmF0dXJlIGZvclxuICogdGhlIHJlc3VsdGluZyBjb21wb3NpdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3MgVGhlIGZ1bmN0aW9ucyB0byBjb21wb3NlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIG9idGFpbmVkIGJ5IGNvbXBvc2luZyB0aGUgYXJndW1lbnQgZnVuY3Rpb25zXG4gKiBmcm9tIHJpZ2h0IHRvIGxlZnQuIEZvciBleGFtcGxlLCBjb21wb3NlKGYsIGcsIGgpIGlzIGlkZW50aWNhbCB0byBkb2luZ1xuICogKC4uLmFyZ3MpID0+IGYoZyhoKC4uLmFyZ3MpKSkuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07XG4gICAgfVxuXG4gICAgdmFyIGxhc3QgPSBmdW5jc1tmdW5jcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgcmVzdCA9IGZ1bmNzLnNsaWNlKDAsIC0xKTtcblxuICAgIHJldHVybiByZXN0LnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChjb21wb3NlZCwgZikge1xuICAgICAgcmV0dXJuIGYoY29tcG9zZWQpO1xuICAgIH0sIGxhc3QuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFjdGlvblR5cGVzID0gdW5kZWZpbmVkO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjcmVhdGVTdG9yZTtcblxudmFyIF9pc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUGxhaW5PYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyoqXG4gKiBUaGVzZSBhcmUgcHJpdmF0ZSBhY3Rpb24gdHlwZXMgcmVzZXJ2ZWQgYnkgUmVkdXguXG4gKiBGb3IgYW55IHVua25vd24gYWN0aW9ucywgeW91IG11c3QgcmV0dXJuIHRoZSBjdXJyZW50IHN0YXRlLlxuICogSWYgdGhlIGN1cnJlbnQgc3RhdGUgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuXG4gKiBEbyBub3QgcmVmZXJlbmNlIHRoZXNlIGFjdGlvbiB0eXBlcyBkaXJlY3RseSBpbiB5b3VyIGNvZGUuXG4gKi9cbnZhciBBY3Rpb25UeXBlcyA9IGV4cG9ydHMuQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6ICdAQHJlZHV4L0lOSVQnXG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbaW5pdGlhbFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlbmhhbmNlciBUaGUgc3RvcmUgZW5oYW5jZXIuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBlbmhhbmNlIHRoZSBzdG9yZSB3aXRoIHRoaXJkLXBhcnR5IGNhcGFiaWxpdGllcyBzdWNoIGFzIG1pZGRsZXdhcmUsXG4gKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gKiBpcyBgYXBwbHlNaWRkbGV3YXJlKClgLlxuICpcbiAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gKiBhbmQgc3Vic2NyaWJlIHRvIGNoYW5nZXMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgaWYgKHR5cGVvZiBpbml0aWFsU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gaW5pdGlhbFN0YXRlO1xuICAgIGluaXRpYWxTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVhZHMgdGhlIHN0YXRlIHRyZWUgbWFuYWdlZCBieSB0aGUgc3RvcmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9IFRoZSBjdXJyZW50IHN0YXRlIHRyZWUgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGxpc3RlbmVyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG5cbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG5cbiAgICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICAgIHZhciBpbmRleCA9IG5leHRMaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICBuZXh0TGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoISgwLCBfaXNQbGFpbk9iamVjdDJbXCJkZWZhdWx0XCJdKShhY3Rpb24pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbXVzdCBiZSBwbGFpbiBvYmplY3RzLiAnICsgJ1VzZSBjdXN0b20gbWlkZGxld2FyZSBmb3IgYXN5bmMgYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbi50eXBlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG1heSBub3QgaGF2ZSBhbiB1bmRlZmluZWQgXCJ0eXBlXCIgcHJvcGVydHkuICcgKyAnSGF2ZSB5b3UgbWlzc3BlbGxlZCBhIGNvbnN0YW50PycpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZHVjZXJzIG1heSBub3QgZGlzcGF0Y2ggYWN0aW9ucy4nKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IHRydWU7XG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50UmVkdWNlcihjdXJyZW50U3RhdGUsIGFjdGlvbik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycyA9IG5leHRMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZHVjZXIobmV4dFJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIG5leHRSZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBuZXh0UmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGN1cnJlbnRSZWR1Y2VyID0gbmV4dFJlZHVjZXI7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBY3Rpb25UeXBlcy5JTklUIH0pO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4ge1xuICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgcmVwbGFjZVJlZHVjZXI6IHJlcGxhY2VSZWR1Y2VyXG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21wb3NlID0gZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBleHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IGV4cG9ydHMuY29tYmluZVJlZHVjZXJzID0gZXhwb3J0cy5jcmVhdGVTdG9yZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVTdG9yZSA9IHJlcXVpcmUoJy4vY3JlYXRlU3RvcmUnKTtcblxudmFyIF9jcmVhdGVTdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVTdG9yZSk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzID0gcmVxdWlyZSgnLi9jb21iaW5lUmVkdWNlcnMnKTtcblxudmFyIF9jb21iaW5lUmVkdWNlcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tYmluZVJlZHVjZXJzKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMgPSByZXF1aXJlKCcuL2JpbmRBY3Rpb25DcmVhdG9ycycpO1xuXG52YXIgX2JpbmRBY3Rpb25DcmVhdG9yczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iaW5kQWN0aW9uQ3JlYXRvcnMpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZSA9IHJlcXVpcmUoJy4vYXBwbHlNaWRkbGV3YXJlJyk7XG5cbnZhciBfYXBwbHlNaWRkbGV3YXJlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGx5TWlkZGxld2FyZSk7XG5cbnZhciBfY29tcG9zZSA9IHJlcXVpcmUoJy4vY29tcG9zZScpO1xuXG52YXIgX2NvbXBvc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9zZSk7XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICAoMCwgX3dhcm5pbmcyW1wiZGVmYXVsdFwiXSkoJ1lvdSBhcmUgY3VycmVudGx5IHVzaW5nIG1pbmlmaWVkIGNvZGUgb3V0c2lkZSBvZiBOT0RFX0VOViA9PT0gXFwncHJvZHVjdGlvblxcJy4gJyArICdUaGlzIG1lYW5zIHRoYXQgeW91IGFyZSBydW5uaW5nIGEgc2xvd2VyIGRldmVsb3BtZW50IGJ1aWxkIG9mIFJlZHV4LiAnICsgJ1lvdSBjYW4gdXNlIGxvb3NlLWVudmlmeSAoaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvbG9vc2UtZW52aWZ5KSBmb3IgYnJvd3NlcmlmeSAnICsgJ29yIERlZmluZVBsdWdpbiBmb3Igd2VicGFjayAoaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMDAzMDAzMSkgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnRzLmNyZWF0ZVN0b3JlID0gX2NyZWF0ZVN0b3JlMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IF9jb21iaW5lUmVkdWNlcnMyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuYmluZEFjdGlvbkNyZWF0b3JzID0gX2JpbmRBY3Rpb25DcmVhdG9yczJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5hcHBseU1pZGRsZXdhcmUgPSBfYXBwbHlNaWRkbGV3YXJlMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmNvbXBvc2UgPSBfY29tcG9zZTJbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd2FybmluZztcbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufSIsIi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8qKlxuICogR2V0cyB0aGUgYFtbUHJvdG90eXBlXV1gIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBgW1tQcm90b3R5cGVdXWAuXG4gKi9cbmZ1bmN0aW9uIGdldFByb3RvdHlwZSh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlR2V0UHJvdG90eXBlKE9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNIb3N0T2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzSG9zdE9iamVjdCA9IHJlcXVpcmUoJy4vX2lzSG9zdE9iamVjdCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fFxuICAgICAgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT0gb2JqZWN0VGFnIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmXG4gICAgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiYgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcbiJdfQ==
