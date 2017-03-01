(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
  vanillaApp: require('../lib/examples/vanillaApp'),
  reduxApp: require('../lib/examples/reduxApp')
};

},{"../lib/examples/reduxApp":5,"../lib/examples/vanillaApp":6}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var DisplayElement = function (_Element) {
  _inherits(DisplayElement, _Element);

  function DisplayElement(displayName, props) {
    _classCallCheck(this, DisplayElement);

    var domElement = document.createElement(displayName);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayElement).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var propNames = Object.keys(this.props);

      propNames.forEach(function (propName) {
        var propValue = this.props[propName];

        if (false) {} else if (propName === 'ref') {
          var callback = propValue,
              domElement = this.getDOMElement();

          callback(domElement);
        } else if (propNameIsHandlerName(propName)) {
          var eventName = eventNameFromPropertyName(propName),
              handler = propValue;

          this.setHandler(eventName, handler);
        } else {
          var attributeName = propName,
              attributeValue = propValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var removedChildren = this.children.splice(start, removeCount, addedChildren);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removeCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removeCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removeCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removeCount, addedChildren, context);
      }
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function propNameIsHandlerName(propName) {
  return propName.match(/^on/);
}

function eventNameFromPropertyName(propName) {
  return propName.toLowerCase();
}

},{"./element":3}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
  function Element(domElement, props) {
    _classCallCheck(this, Element);

    this.domElement = domElement;

    this.props = props;

    this.parent = undefined;

    this.children = props.children; ///
  }

  _createClass(Element, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, reference) {
      this.parent = parent;

      if (this.domElement !== null) {
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
      }
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      if (this.domElement !== null) {
        this.domElement.parentElement.removeChild(this.domElement);
      }
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      if (name === 'className') {
        name = 'class';
      }
      if (name === 'htmlFor') {
        name = 'for';
      }

      if (false) {} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        var keys = Object.keys(value);

        keys.forEach(function (key) {
          this.domElement[name][key] = value[key];
        }.bind(this));
      } else if (typeof value === 'boolean') {
        if (value) {
          value = name; ///

          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'setHandler',
    value: function setHandler(eventName, handler) {
      this.domElement[eventName] = handler;
    }
  }], [{
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      var children = [],
          props = {
        children: children
      },
          element = new Element(domElement, props);

      return element;
    }
  }]);

  return Element;
}();

module.exports = Element;

function parentDOMElement(parent) {
  var parentDOMElement = parent.getDOMElement();

  while (parentDOMElement === null) {
    parent = parent.getParent();

    parentDOMElement = parent.getDOMElement();
  }

  return parentDOMElement;
}

function referenceDOMElement(reference) {
  var referenceDOMElement = reference !== null ? reference.getDOMElement() : null;

  return referenceDOMElement;
}

},{}],4:[function(require,module,exports){
'use strict';

var createStore = function createStore(reducer) {
  var state = void 0,
      listeners = [];

  var getState = function getState() {
    return state;
  };

  var dispatch = function dispatch(action) {
    state = reducer(state, action);

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);

    return function () {
      unsubscribe(listener);
    };
  };

  var unsubscribe = function unsubscribe(l) {
    listeners = listeners.filter(function (listener) {
      return listener !== l;
    });
  };

  dispatch({});

  return { getState: getState, dispatch: dispatch, subscribe: subscribe, unsubscribe: unsubscribe };
};

var combineReducers = function combineReducers(reducers) {
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    var keys = Object.keys(reducers),
        nextState = keys.reduce(function (nextState, key) {
      var reducer = reducers[key];

      nextState[key] = reducer(state[key], action);

      return nextState;
    }, {});

    return nextState;
  };
};

var Redux = { createStore: createStore, combineReducers: combineReducers };

module.exports = Redux;

},{}],5:[function(require,module,exports){
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

},{"../react":8,"../reactDOM":13,"./redux":4}],6:[function(require,module,exports){
'use strict';

var React = require('../react'),
    ReactDOM = require('../reactDOM');

var vanillaApp = function vanillaApp() {
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
    },

    componentWillUnmount: function componentWillUnmount() {
      var message = this.props.message;

      console.log('comment unmounted with message ' + message);
    }
  });

  var CommentsList = React.createClass({
    displayName: 'CommentsList',
    getInitialState: function getInitialState() {
      var messages = ["Hello, world!", "Hello world again..."],
          state = {
        messages: messages
      };

      return state;
    },


    render: function render() {
      var messages = this.state.messages,
          comments = messages.map(function (message) {
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

  setTimeout(function () {
    var messages = ["Hello world yet again!!!"],
        state = {
      messages: messages
    };

    commentsList.setState(state);
  }, 1000); ///
};

module.exports = vanillaApp;

},{"../react":8,"../reactDOM":13}],7:[function(require,module,exports){
'use strict';

var helpers = {
  guaranteeArray: function guaranteeArray(arrayOrElement) {
    return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
  },

  remaining: function remaining(element, array) {
    if (element === null) {
      return array;
    }

    var index = indexOf(element, array);

    return array.slice(index + 1);
  }
};

module.exports = helpers;

function indexOf(element, array) {
  var index = null;

  array.some(function (currentElement, currentElementIndex) {
    if (currentElement === element) {
      index = currentElementIndex;

      return true;
    } else {
      return false;
    }
  });

  return index;
}

},{}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = require('./reactComponent'),
    ReactClass = require('./reactClass'),
    Element = require('./element'),
    TextElement = require('./textElement'),
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
    value: function createClass(object) {
      return ReactClass.fromObject(object);
    }
  }, {
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      var element = undefined;

      if (firstArgument !== undefined) {
        for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childArguments[_key - 2] = arguments[_key];
        }

        var children = childrenFromChildArguments(childArguments),
            props = Object.assign({}, properties, {
          children: children
        });

        if (firstArgument.prototype instanceof ReactComponent) {
          var reactComponentConstructor = firstArgument,
              ///
          reactComponent = new reactComponentConstructor();

          element = new ReactComponentElement(reactComponent, props);
        } else if (firstArgument instanceof ReactClass) {
          var reactClass = firstArgument; ///

          element = new ReactClassElement(reactClass, props);
        } else if (typeof firstArgument === 'function') {
          var reactFunction = firstArgument; ///

          element = new ReactFunctionElement(reactFunction, props);
        } else {
          var displayName = firstArgument; ///

          element = new DisplayElement(displayName, props);
        }
      }

      return element;
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  childArguments = childArguments.reduce(function (childArguments, childArgument) {
    childArguments = childArguments.concat(childArgument);

    return childArguments;
  }, []);

  var children = childArguments.map(function (childArgument) {
    var child = childArgument instanceof Element ? childArgument : ///
    new TextElement(childArgument); ///

    return child;
  });

  return children;
}

},{"./displayElement":2,"./element":3,"./reactClass":9,"./reactClassElement":10,"./reactComponent":11,"./reactComponentElement":12,"./reactFunctionElement":15,"./textElement":16}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    if (render) {
      this.render = render;
    }
    if (getInitialState) {
      this.getInitialState = getInitialState;
    }
    if (getChildContext) {
      this.getChildContext = getChildContext;
    }
    if (componentDidMount) {
      this.componentDidMount = componentDidMount;
    }
    if (componentWillUnmount) {
      this.componentWillUnmount = componentWillUnmount;
    }
  }

  _createClass(ReactClass, [{
    key: 'render',
    value: function render() {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }], [{
    key: 'fromObject',
    value: function fromObject(object) {
      var render = object['render'],
          getInitialState = object['getInitialState'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];

      return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactClassElement = function (_ReactElement) {
  _inherits(ReactClassElement, _ReactElement);

  function ReactClassElement(reactClass, props) {
    _classCallCheck(this, ReactClassElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactClassElement).call(this, props));

    _this.reactClass = reactClass;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.apply(this);
    }
  }]);

  return ReactClassElement;
}(ReactElement);

module.exports = ReactClassElement;

},{"./reactElement":14}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactComponent = function () {
  function ReactComponent() {
    _classCallCheck(this, ReactComponent);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render() {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return undefined;
    }
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

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactComponentElement = function (_ReactElement) {
  _inherits(ReactComponentElement, _ReactElement);

  function ReactComponentElement(reactComponent, props) {
    _classCallCheck(this, ReactComponentElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactComponentElement).call(this, props));

    _this.reactComponent = reactComponent;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.apply(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.apply(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.apply(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.apply(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;

},{"./reactElement":14}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = require('./element');

var ReactDOM = function () {
  function ReactDOM() {
    _classCallCheck(this, ReactDOM);
  }

  _createClass(ReactDOM, null, [{
    key: 'render',
    value: function render(element, parentDOMElement) {
      var parent = Element.fromDOMElement(parentDOMElement),
          reference = null,
          context = undefined;

      element.mount(parent, reference, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element":3}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var helpers = require('./helpers'),
    Element = require('./element');

var ReactElement = function (_Element) {
  _inherits(ReactElement, _Element);

  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    var domElement = null;

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactElement).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

      this.context = context;

      this.children = helpers.guaranteeArray(this.render());

      var childParent = this,
          childReference = reference,
          childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.componentDidMount();
    }
  }, {
    key: 'remount',
    value: function remount() {
      var childParent = this,
          childReference = this.getChildReference(),
          childContext = this.getChildContext(this.context) || this.context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      this.children = helpers.guaranteeArray(this.render());

      this.children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      }.bind(this));
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext(context) || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remount();
    }
  }, {
    key: 'setState',
    value: function setState(state) {
      this.state = state;

      this.remount();
    }
  }, {
    key: 'spliceChildren',
    value: function spliceChildren(start, removeCount, addedChildren) {
      var context = arguments.length <= 3 || arguments[3] === undefined ? this.context : arguments[3];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length <= 1 || arguments[1] === undefined ? this.context : arguments[1];

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.removeChild(child, childContext);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      var firstChild = first(this.children);

      return firstChild.setAttribute(name, value);
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      var firstChild = first(this.children);

      return firstChild.getAttribute(name);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      var firstChild = first(this.children);

      firstChild.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      var firstChild = first(this.children);

      firstChild.setClass(className);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      var firstChild = first(this.children);

      firstChild.addClass(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      var firstChild = first(this.children);

      firstChild.removeClass(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      var firstChild = first(this.children);

      firstChild.toggleClass(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      var firstChild = first(this.children);

      firstChild.clearClasses();
    }
  }, {
    key: 'getChildReference',
    value: function getChildReference() {
      var parent = this.getParent(),
          child = this;

      return reference(parent, child);
    }
  }]);

  return ReactElement;
}(Element);

module.exports = ReactElement;

function reference(parent, child) {
  var reference = findReference(parent, child),
      parentDOMElement = parent.getDOMElement();

  while (reference === null && parentDOMElement === null) {
    child = parent;
    parent = parent.getParent();

    reference = findReference(parent, child);
    parentDOMElement = parent.getDOMElement();
  }

  return reference;
}

function findReference(parent, child) {
  var children = parent.getChildren(),
      remainingChildren = helpers.remaining(child, children);

  return remainingChildren.reduce(function (reference, remainingChild) {
    if (reference === null) {
      var remainingChildDOMElement = remainingChild.getDOMElement();

      if (remainingChildDOMElement !== null) {
        reference = remainingChild;
      } else {
        child = null;
        parent = remainingChild;

        reference = findReference(parent, child);
      }
    }

    return reference;
  }, null);
}

function first(array) {
  return array[0];
}

},{"./element":3,"./helpers":7}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactElement = require('./reactElement');

var ReactFunctionElement = function (_ReactElement) {
  _inherits(ReactFunctionElement, _ReactElement);

  function ReactFunctionElement(reactFunction, props) {
    _classCallCheck(this, ReactFunctionElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactFunctionElement).call(this, props));

    _this.reactFunction = reactFunction;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      if (this.reactFunction.getInitialState) {
        return this.reactFunction.getInitialState(this.props, this.context);
      }

      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      if (this.reactFunction.getChildContext) {
        return this.reactFunction.getChildContext(this.props, this.context);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.reactFunction.componentDidMount) {
        this.reactFunction.componentDidMount(this.props, this.context);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.reactFunction.componentWillUnmount) {
        this.reactFunction.componentWillUnmount(this.props, this.context);
      }
    }
  }]);

  return ReactFunctionElement;
}(ReactElement);

module.exports = ReactFunctionElement;

},{"./reactElement":14}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text),
        children = [],
        props = {
      children: children
    };

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'getText',
    value: function getText() {
      var domElement = this.getDOMElement(),
          text = domElement.nodeValue; ///

      return text;
    }
  }, {
    key: 'setText',
    value: function setText(text) {
      var domElement = this.getDOMElement();

      domElement.nodeValue = text;
    }
  }]);

  return TextElement;
}(Element);

module.exports = TextElement;

},{"./element":3}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImVzNi9kaXNwbGF5RWxlbWVudC5qcyIsImVzNi9lbGVtZW50LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwLmpzIiwiZXM2L2V4YW1wbGVzL3ZhbmlsbGFBcHAuanMiLCJlczYvaGVscGVycy5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZWFjdENsYXNzLmpzIiwiZXM2L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImVzNi9yZWFjdERPTS5qcyIsImVzNi9yZWFjdEVsZW1lbnQuanMiLCJlczYvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJlczYvdGV4dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFWOztJQUVBOzs7QUFDSixXQURJLGNBQ0osQ0FBWSxXQUFaLEVBQXlCLEtBQXpCLEVBQWdDOzBCQUQ1QixnQkFDNEI7O0FBQzlCLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBYixDQUR3Qjs7a0VBRDVCLDJCQUlJLFlBQVksUUFIWTtHQUFoQzs7ZUFESTs7MEJBT0UsUUFBUSxXQUFXLFNBQVM7QUFDaEMsaUNBUkUscURBUVUsUUFBUSxVQUFwQixDQURnQzs7QUFHaEMsVUFBTSxjQUFjLElBQWQ7VUFDQSxpQkFBaUIsSUFBakI7VUFDQSxlQUFlLE9BQWYsQ0FMMEI7O0FBT2hDLFdBQUssUUFBTCxDQUFjLE9BQWQsQ0FBc0IsVUFBUyxLQUFULEVBQWdCO0FBQ3BDLGNBQU0sS0FBTixD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UUFBUSxXQUFSLENBQVY7O0lBRUE7OztBQUNKLFdBREksV0FDSixDQUFZLElBQVosRUFBa0I7MEJBRGQsYUFDYzs7QUFDaEIsUUFBTSxhQUFhLFNBQVMsY0FBVCxDQUF3QixJQUF4QixDQUFiO1FBQ0EsV0FBVyxFQUFYO1FBQ0EsUUFBUTtBQUNOLGdCQUFVLFFBQVY7S0FERixDQUhVOztrRUFEZCx3QkFRSSxZQUFZLFFBUEY7R0FBbEI7O2VBREk7OzBCQVdFLFFBQVEsV0FBVyxTQUFTO0FBQ2hDLGlDQVpFLGtEQVlVLFFBQVEsVUFBcEIsQ0FEZ0M7Ozs7NEJBSTFCLFNBQVM7QUFDZixpQ0FoQkUsbURBZ0JGLENBRGU7Ozs7OEJBSVA7QUFDUixVQUFNLGFBQWEsS0FBSyxhQUFMLEVBQWI7VUFDQSxPQUFPLFdBQVcsU0FBWDs7QUFGTCxhQUlELElBQVAsQ0FKUTs7Ozs0QkFPRixNQUFNO0FBQ1osVUFBTSxhQUFhLEtBQUssYUFBTCxFQUFiLENBRE07O0FBR1osaUJBQVcsU0FBWCxHQUF1QixJQUF2QixDQUhZOzs7O1NBMUJWO0VBQW9COztBQWlDMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbmlsbGFBcHA6IHJlcXVpcmUoJy4uL2xpYi9leGFtcGxlcy92YW5pbGxhQXBwJyksXG4gIHJlZHV4QXBwOiByZXF1aXJlKCcuLi9saWIvZXhhbXBsZXMvcmVkdXhBcHAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBwcm9wVmFsdWUsXG4gICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgICBjYWxsYmFjayhkb21FbGVtZW50KVxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpLFxuICAgICAgICAgICAgICBoYW5kbGVyID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHByb3BOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgICBhZGRlZENoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZWRDaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uc3BsaWNlKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbik7XG5cbiAgICByZW1vdmVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihyZW1vdmVkQ2hpbGQpIHtcbiAgICAgIHJlbW92ZWRDaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gSW5maW5pdHksXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwLFxuICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbY2hpbGRdO1xuXG4gICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50ID0gMSxcbiAgICAgICAgICAgIGFkZGVkQ2hpbGRyZW4gPSBbXTtcblxuICAgICAgdGhpcy5zcGxpY2VDaGlsZHJlbihzdGFydCwgcmVtb3ZlQ291bnQsIGFkZGVkQ2hpbGRyZW4sIGNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc3BsYXlFbGVtZW50O1xuXG5mdW5jdGlvbiBwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpIHtcbiAgcmV0dXJuIHByb3BOYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUudG9Mb3dlckNhc2UoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSkge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuXG4gICAgaWYgKHRoaXMuZG9tRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcGFyZW50RE9NRWxlbWVudChwYXJlbnQpLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQocmVmZXJlbmNlKSk7XG4gICAgfVxuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgbmFtZSA9ICdjbGFzcyc7XG4gICAgfVxuICAgIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICAgIG5hbWUgPSAnZm9yJztcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gIH1cblxuICBzZXRIYW5kbGVyKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICAgIHRoaXMuZG9tRWxlbWVudFtldmVudE5hbWVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgZWxlbWVudCA9IG5ldyBFbGVtZW50KGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHJlZmVyZW5jZSAhPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5nZXRET01FbGVtZW50KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZURPTUVsZW1lbnQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNyZWF0ZVN0b3JlID0gKHJlZHVjZXIpID0+IHtcbiAgbGV0IHN0YXRlLFxuICAgICAgbGlzdGVuZXJzID0gW107XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gKGFjdGlvbikgPT4ge1xuICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcblxuICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gIH07XG5cbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgoKSA9PiB7XG4gICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSAobCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGxpc3RlbmVyKSA9PiB7XG4gICAgICByZXR1cm4gKGxpc3RlbmVyICE9PSBsKTtcbiAgICB9KTtcbiAgfTtcblxuICBkaXNwYXRjaCh7fSk7XG5cbiAgcmV0dXJuIHsgZ2V0U3RhdGUsIGRpc3BhdGNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG59O1xuXG5jb25zdCBjb21iaW5lUmVkdWNlcnMgPSAocmVkdWNlcnMpID0+IHtcbiAgcmV0dXJuIChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpLFxuICAgICAgICAgIG5leHRTdGF0ZSA9IGtleXMucmVkdWNlKChuZXh0U3RhdGUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG5cbiAgICAgICAgICAgIG5leHRTdGF0ZVtrZXldID0gcmVkdWNlcihzdGF0ZVtrZXldLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBuZXh0U3RhdGU7XG4gIH07XG59O1xuXG5jb25zdCBSZWR1eCA9IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWR1eCA9IHJlcXVpcmUoJy4vcmVkdXgnKSxcbiAgICAgIFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKSxcbiAgICAgIHsgQ29tcG9uZW50IH0gPSBSZWFjdCxcbiAgICAgIHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9ID0gUmVkdXg7XG5cbmNvbnN0IHJlZHV4QXBwID0gKCkgPT4ge1xuICBjb25zdCB0b2RvID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgaWYgKHN0YXRlLmlkICE9PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjb21wbGV0ZWQ6ICFzdGF0ZS5jb21wbGV0ZWRcbiAgICAgICAgfSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9kb3MgPSAoc3RhdGUgPSBbXSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnQUREX1RPRE8nOlxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIHRvZG8odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICAgIF07XG5cbiAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0ID0+IHRvZG8odCwgYWN0aW9uKSk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdTRVRfVklTSUJJTElUWV9GSUxURVInOlxuICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvQXBwID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB0b2RvczogdG9kb3MsXG4gICAgdmlzaWJpbGl0eUZpbHRlcjogdmlzaWJpbGl0eUZpbHRlclxuICB9KTtcblxuICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAodG9kb3MsIGZpbHRlcikgPT4ge1xuICAgIHN3aXRjaCAoZmlsdGVyKSB7XG4gICAgICBjYXNlICdTSE9XX0FMTCc6XG4gICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgY2FzZSAnU0hPV19DT01QTEVURUQnOlxuICAgICAgICByZXR1cm4gdG9kb3MuZmlsdGVyKFxuICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICApO1xuXG4gICAgICBjYXNlICdTSE9XX0FDVElWRSc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+ICF0LmNvbXBsZXRlZFxuICAgICAgICApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBUb2RvID0gKHtvbkNsaWNrLCBjb21wbGV0ZWQsIHRleHR9KSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQgP1xuICAgICAgICAgICAgICAgICAgJ2xpbmUtdGhyb3VnaCcgOlxuICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvZG9MaXN0ID0gKHt0b2Rvcywgb25Ub2RvQ2xpY2t9KSA9PiAge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDx1bD5cbiAgICAgICAge3RvZG9zLm1hcCh0b2RvID0+IDxUb2RvIHRleHQ9e3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZG9DbGljayh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvPil9XG4gICAgICA8L3VsPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMaW5rID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3RpdmUsIG9uQ2xpY2sgfSA9IHByb3BzO1xuXG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgcmV0dXJuIDxzcGFuPntwcm9wcy5jaGlsZHJlbn08L3NwYW4+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxhIGhyZWY9JyMnXG4gICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICBvbkNsaWNrKCk7XG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2E+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIEZpbHRlckxpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxMaW5rIGFjdGl2ZT17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVklTSUJJTElUWV9GSUxURVInLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0aGlzLnByb3BzLmZpbHRlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5leHRUb2RvSWQgPSAwO1xuICBjb25zdCBBZGRUb2RvID0gKHByb3BzLCB7c3RvcmV9KSA9PiB7XG4gICAgbGV0IGlucHV0O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgaW5wdXQgPSBkb21FbGVtZW50O1xuICAgICAgICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBpZDogbmV4dFRvZG9JZCsrXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCB0b2RvXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFZpc2libGVUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICBnZXRWaXNpYmxlVG9kb3MoXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRvZG9zLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2s9e2lkID0+XG4gICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8+XG5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxwPlxuICAgICAgICB7J1Nob3c6ICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BTEwnPlxuICAgICAgICAgIEFsbFxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUNUSVZFJz5cbiAgICAgICAgICBBY3RpdmVcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBUb2RvQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRUb2RvIC8+XG4gICAgICAgIDxWaXNpYmxlVG9kb0xpc3QgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9O1xuXG4gIGNsYXNzIFByb3ZpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcmU6IHRoaXMucHJvcHMuc3RvcmVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e2NyZWF0ZVN0b3JlKHRvZG9BcHApfT5cbiAgICAgIDxUb2RvQXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcmVkdXhBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0ID0gcmVxdWlyZSgnLi4vcmVhY3QnKSxcbiAgICAgIFJlYWN0RE9NID0gcmVxdWlyZSgnLi4vcmVhY3RET00nKTtcblxuY29uc3QgdmFuaWxsYUFwcCA9ICgpID0+IHtcbiAgY29uc3Qgcm9vdERPTUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuXG4gIGNvbnN0IENvbW1lbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5tZXNzYWdlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IG1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICBjb25zb2xlLmxvZygnY29tbWVudCB1bm1vdW50ZWQgd2l0aCBtZXNzYWdlICcgKyBtZXNzYWdlKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgQ29tbWVudHNMaXN0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICBcIkhlbGxvLCB3b3JsZCFcIixcbiAgICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlc1xuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLnN0YXRlLm1lc3NhZ2VzLFxuICAgICAgICAgIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiA8Q29tbWVudCBtZXNzYWdlPXttZXNzYWdlfSAvPjtcbiAgICAgICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgIHtjb21tZW50c31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICk7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50cyBsaXN0IG1vdW50ZWQnKVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICBSZWFjdERPTS5yZW5kZXIoY29tbWVudHNMaXN0LCByb290RE9NRWxlbWVudCk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IFtcbiAgICAgICAgICAgIFwiSGVsbG8gd29ybGQgeWV0IGFnYWluISEhXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRlID0ge1xuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgfTtcblxuICAgIGNvbW1lbnRzTGlzdC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH0sIDEwMDApOyAvLy9cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdmFuaWxsYUFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHtcbiAgZ3VhcmFudGVlQXJyYXk6IGZ1bmN0aW9uKGFycmF5T3JFbGVtZW50KSB7IHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xuICB9LFxuXG4gIHJlbWFpbmluZzogZnVuY3Rpb24oZWxlbWVudCwgYXJyYXkpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBpbmRleCA9IGluZGV4T2YoZWxlbWVudCwgYXJyYXkpO1xuXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKGluZGV4ICsgMSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaGVscGVycztcblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoZnVuY3Rpb24oY3VycmVudEVsZW1lbnQsIGN1cnJlbnRFbGVtZW50SW5kZXgpIHtcbiAgICBpZiAoY3VycmVudEVsZW1lbnQgPT09IGVsZW1lbnQpIHtcbiAgICAgIGluZGV4ID0gY3VycmVudEVsZW1lbnRJbmRleDtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgICBSZWFjdENsYXNzID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzJyksXG4gICAgICBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50JyksXG4gICAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgICAgUmVhY3RDbGFzc0VsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3NFbGVtZW50JyksXG4gICAgICBSZWFjdEZ1bmN0aW9uRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RGdW5jdGlvbkVsZW1lbnQnKSxcbiAgICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEFyZ3VtZW50cykge1xuICAgICBsZXQgZWxlbWVudCA9IHVuZGVmaW5lZDtcblxuICAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgY29uc3QgY2hpbGRyZW4gPSBjaGlsZHJlbkZyb21DaGlsZEFyZ3VtZW50cyhjaGlsZEFyZ3VtZW50cyksXG4gICAgICAgICAgICAgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzLCB7XG4gICAgICAgICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgICAgICAgICB9KTtcblxuICAgICAgIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIFJlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICBjb25zdCByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudCBpbnN0YW5jZW9mIFJlYWN0Q2xhc3MpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdENsYXNzRWxlbWVudChyZWFjdENsYXNzLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgZWxlbWVudCA9IG5ldyBSZWFjdEZ1bmN0aW9uRWxlbWVudChyZWFjdEZ1bmN0aW9uLCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IERpc3BsYXlFbGVtZW50KGRpc3BsYXlOYW1lLCBwcm9wcyk7XG4gICAgICAgfVxuICAgICB9XG5cbiAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIGNoaWxkQXJndW1lbnRzID0gY2hpbGRBcmd1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnRzLCBjaGlsZEFyZ3VtZW50KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5jb25jYXQoY2hpbGRBcmd1bWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRBcmd1bWVudHM7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkQXJndW1lbnRzLm1hcChmdW5jdGlvbihjaGlsZEFyZ3VtZW50KSB7XG4gICAgY29uc3QgY2hpbGQgPSAoY2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpID9cbiAgICAgICAgICAgICAgICAgICAgIGNoaWxkQXJndW1lbnQgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRleHRFbGVtZW50KGNoaWxkQXJndW1lbnQpOyAvLy9cblxuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdENsYXNzIHtcbiAgY29uc3RydWN0b3IocmVuZGVyLCBnZXRJbml0aWFsU3RhdGUsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgaWYgKHJlbmRlcikgeyB0aGlzLnJlbmRlciA9IHJlbmRlcjsgfVxuICAgIGlmIChnZXRJbml0aWFsU3RhdGUpIHsgdGhpcy5nZXRJbml0aWFsU3RhdGUgPSBnZXRJbml0aWFsU3RhdGU7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG5cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cblxuICBzdGF0aWMgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICBjb25zdCByZW5kZXIgPSBvYmplY3RbJ3JlbmRlciddLFxuICAgICAgICAgIGdldEluaXRpYWxTdGF0ZSA9IG9iamVjdFsnZ2V0SW5pdGlhbFN0YXRlJ10sXG4gICAgICAgICAgZ2V0Q2hpbGRDb250ZXh0ID0gb2JqZWN0WydnZXRDaGlsZENvbnRleHQnXSxcbiAgICAgICAgICBjb21wb25lbnREaWRNb3VudCA9IG9iamVjdFsnY29tcG9uZW50RGlkTW91bnQnXSxcbiAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCA9IG9iamVjdFsnY29tcG9uZW50V2lsbFVubW91bnQnXTtcbiAgIFxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG5cbiAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLnJlbmRlci5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldENoaWxkQ29udGV4dC5hcHBseSh0aGlzKTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLy9cbiAgfVxuICBcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LmdldEluaXRpYWxTdGF0ZS5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5tb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IFxuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KSB8fCB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gICAgXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy5yZW1vdW50KCk7XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLmFkZENoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cbiBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICAgIHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RnVuY3Rpb25FbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgIH07XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcbiAgfVxuICBcbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCksXG4gICAgICAgICAgdGV4dCA9IGRvbUVsZW1lbnQubm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZG9tRWxlbWVudC5ub2RlVmFsdWUgPSB0ZXh0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dEVsZW1lbnQ7XG4iXX0=
