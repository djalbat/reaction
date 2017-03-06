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

    return _possibleConstructorReturn(this, (DisplayElement.__proto__ || Object.getPrototypeOf(DisplayElement)).call(this, domElement, props));
  }

  _createClass(DisplayElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(DisplayElement.prototype.__proto__ || Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
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
    value: function spliceChildren(start, removedChildrenCount, addedChildren, context) {
      var childParent = this,
          childReference = null,
          childContext = context;

      addedChildren.forEach(function (addedChild) {
        addedChild.mount(childParent, childReference, childContext);
      });

      var args = [start, removedChildrenCount].concat(addedChildren),
          removedChildren = Array.prototype.splice.apply(this.children, args);

      removedChildren.forEach(function (removedChild) {
        removedChild.unmount(childContext);
      });
    }
  }, {
    key: 'addChild',
    value: function addChild(child, context) {
      var start = Infinity,
          removedChildrenCount = 0,
          addedChildren = [child];

      this.spliceChildren(start, removedChildrenCount, addedChildren, context);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child, context) {
      var index = this.children.indexOf(child);

      if (index > -1) {
        var start = index,
            removedChildrenCount = 1,
            addedChildren = [];

        this.spliceChildren(start, removedChildrenCount, addedChildren, context);
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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

var Redux = require('./redux'),
    React = require('../react'),
    ReactDOM = require('../reactDOM'),
    Component = React.Component,
    createStore = Redux.createStore,
    combineReducers = Redux.combineReducers;


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

  var FilterLink = function (_Component) {
    _inherits(FilterLink, _Component);

    function FilterLink() {
      _classCallCheck(this, FilterLink);

      return _possibleConstructorReturn(this, (FilterLink.__proto__ || Object.getPrototypeOf(FilterLink)).apply(this, arguments));
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

      return _possibleConstructorReturn(this, (VisibleTodoList.__proto__ || Object.getPrototypeOf(VisibleTodoList)).apply(this, arguments));
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

      return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
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

    var _this = _possibleConstructorReturn(this, (ReactClassElement.__proto__ || Object.getPrototypeOf(ReactClassElement)).call(this, props));

    _this.reactClass = reactClass;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactClass.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactClass.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactClass.getChildContext.call(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactClass.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactClass.componentWillUnmount.call(this);
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
    value: function render(update) {
      ///
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return {};
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext(context) {
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

    var _this = _possibleConstructorReturn(this, (ReactComponentElement.__proto__ || Object.getPrototypeOf(ReactComponentElement)).call(this, props));

    _this.reactComponent = reactComponent;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactComponent.render.call(this, update);
    }
  }, {
    key: 'getInitialState',
    value: function getInitialState() {
      return this.reactComponent.getInitialState.call(this);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return this.reactComponent.getChildContext.call(this);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.reactComponent.componentDidMount.call(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.reactComponent.componentWillUnmount.call(this);
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

    var _this = _possibleConstructorReturn(this, (ReactElement.__proto__ || Object.getPrototypeOf(ReactElement)).call(this, domElement, props));

    _this.state = undefined;

    _this.context = undefined;
    return _this;
  }

  _createClass(ReactElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'mount', this).call(this, parent, reference);

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

      _get(ReactElement.prototype.__proto__ || Object.getPrototypeOf(ReactElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(update) {
      if (update !== undefined) {
        this.render(update);
      } else {
        this.remount();
      }
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
      var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.spliceChildren(start, removeCount, addedChildren, childContext);
    }
  }, {
    key: 'addChild',
    value: function addChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

      var firstChild = first(this.children),
          childContext = this.getChildContext(context) || context;

      firstChild.addChild(child, childContext);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

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

    var _this = _possibleConstructorReturn(this, (ReactFunctionElement.__proto__ || Object.getPrototypeOf(ReactFunctionElement)).call(this, props));

    _this.reactFunction = reactFunction;

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render(update) {
      return this.reactFunction(this.props, this.context, update);
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

    return _possibleConstructorReturn(this, (TextElement.__proto__ || Object.getPrototypeOf(TextElement)).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, reference);
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(TextElement.prototype.__proto__ || Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImVzNi9kaXNwbGF5RWxlbWVudC5qcyIsImVzNi9lbGVtZW50LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4LmpzIiwiZXM2L2V4YW1wbGVzL3JlZHV4QXBwLmpzIiwiZXM2L2V4YW1wbGVzL3ZhbmlsbGFBcHAuanMiLCJlczYvaGVscGVycy5qcyIsImVzNi9yZWFjdC5qcyIsImVzNi9yZWFjdENsYXNzLmpzIiwiZXM2L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50LmpzIiwiZXM2L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImVzNi9yZWFjdERPTS5qcyIsImVzNi9yZWFjdEVsZW1lbnQuanMiLCJlczYvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJlczYvdGV4dEVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjs7SUFFTSxjOzs7QUFDSiwwQkFBWSxXQUFaLEVBQXlCLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzlCLFFBQU0sYUFBYSxTQUFTLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBbkI7O0FBRDhCLDJIQUd4QixVQUh3QixFQUdaLEtBSFk7QUFJL0I7Ozs7MEJBRUssTSxFQUFRLFMsRUFBVyxPLEVBQVM7QUFDaEMsNEhBQVksTUFBWixFQUFvQixTQUFwQjs7QUFFQSxVQUFNLGNBQWMsSUFBcEI7QUFBQSxVQUNNLGlCQUFpQixJQUR2QjtBQUFBLFVBRU0sZUFBZSxPQUZyQjs7QUFJQSxXQUFLLFFBQUwsQ0FBYyxPQUFkLENBQXNCLFVBQVMsS0FBVCxFQUFnQjtBQUNwQyxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLGNBQXpCLEVBQXlDLFlBQXpDO0FBQ0Qs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S0FBSyxLQUE3QyxFQUFvRCxLQUFLLE9BQXpEO0FBQ0Q7QUFDRjs7OztFQXJDZ0MsWTs7QUF3Q25DLE9BQU8sT0FBUCxHQUFpQixvQkFBakI7OztBQzVDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxVQUFVLFFBQVEsV0FBUixDQUFoQjs7SUFFTSxXOzs7QUFDSix1QkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2hCLFFBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsSUFBeEIsQ0FBbkI7QUFBQSxRQUNNLFdBQVcsRUFEakI7QUFBQSxRQUVNLFFBQVE7QUFDTixnQkFBVTtBQURKLEtBRmQ7O0FBRGdCLHFIQU9WLFVBUFUsRUFPRSxLQVBGO0FBUWpCOzs7OzBCQUVLLE0sRUFBUSxTLEVBQVcsTyxFQUFTO0FBQ2hDLHNIQUFZLE1BQVosRUFBb0IsU0FBcEI7QUFDRDs7OzRCQUVPLE8sRUFBUztBQUNmO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU0sYUFBYSxLQUFLLGFBQUwsRUFBbkI7QUFBQSxVQUNNLE9BQU8sV0FBVyxTQUR4QixDQURRLENBRTJCOztBQUVuQyxhQUFPLElBQVA7QUFDRDs7OzRCQUVPLEksRUFBTTtBQUNaLFVBQU0sYUFBYSxLQUFLLGFBQUwsRUFBbkI7O0FBRUEsaUJBQVcsU0FBWCxHQUF1QixJQUF2QjtBQUNEOzs7O0VBOUJ1QixPOztBQWlDMUIsT0FBTyxPQUFQLEdBQWlCLFdBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHZhbmlsbGFBcHA6IHJlcXVpcmUoJy4uL2xpYi9leGFtcGxlcy92YW5pbGxhQXBwJyksXG4gIHJlZHV4QXBwOiByZXF1aXJlKCcuLi9saWIvZXhhbXBsZXMvcmVkdXhBcHAnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBEaXNwbGF5RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihkaXNwbGF5TmFtZSwgcHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpO1xuXG4gICAgcHJvcE5hbWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcE5hbWUpIHtcbiAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcE5hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBwcm9wVmFsdWUsXG4gICAgICAgICAgICAgIGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgICBjYWxsYmFjayhkb21FbGVtZW50KVxuICAgICAgfSBlbHNlIGlmIChwcm9wTmFtZUlzSGFuZGxlck5hbWUocHJvcE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IGV2ZW50TmFtZUZyb21Qcm9wZXJ0eU5hbWUocHJvcE5hbWUpLFxuICAgICAgICAgICAgICBoYW5kbGVyID0gcHJvcFZhbHVlO1xuXG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHByb3BOYW1lLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcblxuICAgIGFkZGVkQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhZGRlZENoaWxkKSB7XG4gICAgICBhZGRlZENoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFyZ3MgPSBbc3RhcnQsIHJlbW92ZWRDaGlsZHJlbkNvdW50XS5jb25jYXQoYWRkZWRDaGlsZHJlbiksXG4gICAgICAgICAgcmVtb3ZlZENoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0aGlzLmNoaWxkcmVuLCBhcmdzKTtcblxuICAgIHJlbW92ZWRDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKHJlbW92ZWRDaGlsZCkge1xuICAgICAgcmVtb3ZlZENoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBJbmZpbml0eSxcbiAgICAgICAgICByZW1vdmVkQ2hpbGRyZW5Db3VudCA9IDAsXG4gICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtjaGlsZF07XG5cbiAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gIH1cblxuICByZW1vdmVDaGlsZChjaGlsZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LFxuICAgICAgICAgICAgcmVtb3ZlZENoaWxkcmVuQ291bnQgPSAxLFxuICAgICAgICAgICAgYWRkZWRDaGlsZHJlbiA9IFtdO1xuXG4gICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVkQ2hpbGRyZW5Db3VudCwgYWRkZWRDaGlsZHJlbiwgY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlzcGxheUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIHByb3BOYW1lSXNIYW5kbGVyTmFtZShwcm9wTmFtZSkge1xuICByZXR1cm4gcHJvcE5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BOYW1lKSB7XG4gIHJldHVybiBwcm9wTmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZG9tRWxlbWVudCwgcHJvcHMpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgdGhpcy5wYXJlbnQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFBhcmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICBpZiAodGhpcy5kb21FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcbiAgICB9XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIGlmICh0aGlzLmRvbUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBuYW1lID0gJ2NsYXNzJztcbiAgICB9XG4gICAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgICAgbmFtZSA9ICdmb3InO1xuICAgIH1cblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gIH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgY2xlYXJDbGFzc2VzKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJztcbiAgfVxuXG4gIHNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgdGhpcy5kb21FbGVtZW50W2V2ZW50TmFtZV0gPSBoYW5kbGVyO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfSxcbiAgICAgICAgICBlbGVtZW50ID0gbmV3IEVsZW1lbnQoZG9tRWxlbWVudCwgcHJvcHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBwYXJlbnRET01FbGVtZW50KHBhcmVudCkge1xuICBsZXQgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG5cbiAgd2hpbGUgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcbiAgfVxuXG4gIHJldHVybiBwYXJlbnRET01FbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZWZlcmVuY2VET01FbGVtZW50KHJlZmVyZW5jZSkge1xuICBjb25zdCByZWZlcmVuY2VET01FbGVtZW50ID0gcmVmZXJlbmNlICE9PSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3JlYXRlU3RvcmUgPSAocmVkdWNlcikgPT4ge1xuICBsZXQgc3RhdGUsXG4gICAgICBsaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSAoYWN0aW9uKSA9PiB7XG4gICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuXG4gICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfTtcblxuICBjb25zdCBzdWJzY3JpYmUgPSAobGlzdGVuZXIpID0+IHtcbiAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gKCgpID0+IHtcbiAgICAgIHVuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IChsKSA9PiB7XG4gICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigobGlzdGVuZXIpID0+IHtcbiAgICAgIHJldHVybiAobGlzdGVuZXIgIT09IGwpO1xuICAgIH0pO1xuICB9O1xuXG4gIGRpc3BhdGNoKHt9KTtcblxuICByZXR1cm4geyBnZXRTdGF0ZSwgZGlzcGF0Y2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbn07XG5cbmNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9IChyZWR1Y2VycykgPT4ge1xuICByZXR1cm4gKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2VycyksXG4gICAgICAgICAgbmV4dFN0YXRlID0ga2V5cy5yZWR1Y2UoKG5leHRTdGF0ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcblxuICAgICAgICAgICAgbmV4dFN0YXRlW2tleV0gPSByZWR1Y2VyKHN0YXRlW2tleV0sIGFjdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXh0U3RhdGU7XG4gICAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfTtcbn07XG5cbmNvbnN0IFJlZHV4ID0geyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH07XG5cbm1vZHVsZS5leHBvcnRzID0gUmVkdXg7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlZHV4ID0gcmVxdWlyZSgnLi9yZWR1eCcpLFxuICAgICAgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpLFxuICAgICAgeyBDb21wb25lbnQgfSA9IFJlYWN0LFxuICAgICAgeyBjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzIH0gPSBSZWR1eDtcblxuY29uc3QgcmVkdXhBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ0FERF9UT0RPJzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGNvbXBsZXRlZDogIXN0YXRlLmNvbXBsZXRlZFxuICAgICAgICB9KTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0b2RvcyA9IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXTtcblxuICAgICAgY2FzZSAnVE9HR0xFX1RPRE8nOlxuICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aXNpYmlsaXR5RmlsdGVyID0gKCBzdGF0ZSA9ICdTSE9XX0FMTCcsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUic6XG4gICAgICAgIHJldHVybiBhY3Rpb24uZmlsdGVyO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZG9BcHAgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRvZG9zOiB0b2RvcyxcbiAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gIH0pO1xuXG4gIGNvbnN0IGdldFZpc2libGVUb2RvcyA9ICh0b2RvcywgZmlsdGVyKSA9PiB7XG4gICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgIGNhc2UgJ1NIT1dfQUxMJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zO1xuXG4gICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICB0ID0+IHQuY29tcGxldGVkXG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1NIT1dfQUNUSVZFJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFRvZG8gPSAoe29uQ2xpY2ssIGNvbXBsZXRlZCwgdGV4dH0pID0+IHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8bGkgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOlxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCA/XG4gICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICdub25lJ319XG4gICAgICA+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9saT5cblxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgVG9kb0xpc3QgPSAoe3RvZG9zLCBvblRvZG9DbGlja30pID0+ICB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkPXt0b2RvLmNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8+KX1cbiAgICAgIDwvdWw+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IExpbmsgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgb25DbGljayB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgRmlsdGVyTGluayBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPExpbmsgYWN0aXZlPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbHRlciA9PT0gc3RhdGUudmlzaWJpbGl0eUZpbHRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRoaXMucHJvcHMuZmlsdGVyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gIGNvbnN0IEFkZFRvZG8gPSAocHJvcHMsIHtzdG9yZX0pID0+IHtcbiAgICBsZXQgaW5wdXQ7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgcmVmPXtkb21FbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0FERF9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuZXh0VG9kb0lkKytcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgVmlzaWJsZVRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgIHJldHVybiAoXG5cbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXtcbiAgICAgICAgICAgICAgICAgIGdldFZpc2libGVUb2RvcyhcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBvblRvZG9DbGljaz17aWQgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1RPR0dMRV9UT0RPJyxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHA+XG4gICAgICAgIHsnU2hvdzogJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0FMTCc+XG4gICAgICAgICAgQWxsXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgICAgeycgLSAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQ09NUExFVEVEJz5cbiAgICAgICAgICBDb21wbGV0ZWRcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvZG9BcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH07XG5cbiAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdG9yZTogdGhpcy5wcm9wcy5zdG9yZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG4gIH1cblxuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17Y3JlYXRlU3RvcmUodG9kb0FwcCl9PlxuICAgICAgPFRvZG9BcHAgLz5cbiAgICA8L1Byb3ZpZGVyPixcbiAgICByb290RE9NRWxlbWVudFxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWR1eEFwcDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3QgPSByZXF1aXJlKCcuLi9yZWFjdCcpLFxuICAgICAgUmVhY3RET00gPSByZXF1aXJlKCcuLi9yZWFjdERPTScpO1xuXG5jb25zdCB2YW5pbGxhQXBwID0gKCkgPT4ge1xuICBjb25zdCByb290RE9NRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbiAgY29uc3QgQ29tbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnQgbW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50IHVubW91bnRlZCB3aXRoIG1lc3NhZ2UgJyArIG1lc3NhZ2UpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgIFwiSGVsbG8sIHdvcmxkIVwiLFxuICAgICAgICAgICAgICBcIkhlbGxvIHdvcmxkIGFnYWluLi4uXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VzXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMuc3RhdGUubWVzc2FnZXMsXG4gICAgICAgICAgY29tbWVudHMgPSBtZXNzYWdlcy5tYXAoZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIDxDb21tZW50IG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuICAgICAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudHNMaXN0XCI+XG4gICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjb21tZW50c0xpc3QgPSA8Q29tbWVudHNMaXN0IC8+O1xuXG4gIFJlYWN0RE9NLnJlbmRlcihjb21tZW50c0xpc3QsIHJvb3RET01FbGVtZW50KTtcblxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgXCJIZWxsbyB3b3JsZCB5ZXQgYWdhaW4hISFcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZXNcbiAgICAgICAgICB9O1xuXG4gICAgY29tbWVudHNMaXN0LnNldFN0YXRlKHN0YXRlKTtcbiAgfSwgMTAwMCk7IC8vL1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YW5pbGxhQXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBoZWxwZXJzID0ge1xuICBndWFyYW50ZWVBcnJheTogZnVuY3Rpb24oYXJyYXlPckVsZW1lbnQpIHsgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG4gIH0sXG5cbiAgcmVtYWluaW5nOiBmdW5jdGlvbihlbGVtZW50LCBhcnJheSkge1xuICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGluZGV4ID0gaW5kZXhPZihlbGVtZW50LCBhcnJheSk7XG5cbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBoZWxwZXJzO1xuXG5mdW5jdGlvbiBpbmRleE9mKGVsZW1lbnQsIGFycmF5KSB7XG4gIGxldCBpbmRleCA9IG51bGw7XG5cbiAgYXJyYXkuc29tZShmdW5jdGlvbihjdXJyZW50RWxlbWVudCwgY3VycmVudEVsZW1lbnRJbmRleCkge1xuICAgIGlmIChjdXJyZW50RWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgaW5kZXggPSBjdXJyZW50RWxlbWVudEluZGV4O1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdENvbXBvbmVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnQnKSxcbiAgICAgIFJlYWN0Q2xhc3MgPSByZXF1aXJlKCcuL3JlYWN0Q2xhc3MnKSxcbiAgICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICAgIFRleHRFbGVtZW50ID0gcmVxdWlyZSgnLi90ZXh0RWxlbWVudCcpLFxuICAgICAgRGlzcGxheUVsZW1lbnQgPSByZXF1aXJlKCcuL2Rpc3BsYXlFbGVtZW50JyksXG4gICAgICBSZWFjdENsYXNzRWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzc0VsZW1lbnQnKSxcbiAgICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgICAgUmVhY3RDb21wb25lbnRFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENvbXBvbmVudEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlQ2xhc3Mob2JqZWN0KSB7XG4gICAgcmV0dXJuIFJlYWN0Q2xhc3MuZnJvbU9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkQXJndW1lbnRzKSB7XG4gICAgIGxldCBlbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICBjb25zdCBjaGlsZHJlbiA9IGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSxcbiAgICAgICAgICAgICBwcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMsIHtcbiAgICAgICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgUmVhY3RDb21wb25lbnQpIHtcbiAgICAgICAgIGNvbnN0IHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICByZWFjdENvbXBvbmVudCA9IG5ldyByZWFjdENvbXBvbmVudENvbnN0cnVjdG9yKCk7XG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgUmVhY3RDb21wb25lbnRFbGVtZW50KHJlYWN0Q29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0Q2xhc3NFbGVtZW50KHJlYWN0Q2xhc3MsIHByb3BzKTtcbiAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjb25zdCByZWFjdEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgICBlbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgY29uc3QgZGlzcGxheU5hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgIGVsZW1lbnQgPSBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BzKTtcbiAgICAgICB9XG4gICAgIH1cblxuICAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5SZWFjdC5Db21wb25lbnQgPSBSZWFjdENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpIHtcbiAgY2hpbGRBcmd1bWVudHMgPSBjaGlsZEFyZ3VtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRBcmd1bWVudHMsIGNoaWxkQXJndW1lbnQpIHtcbiAgICBjaGlsZEFyZ3VtZW50cyA9IGNoaWxkQXJndW1lbnRzLmNvbmNhdChjaGlsZEFyZ3VtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEFyZ3VtZW50cztcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRBcmd1bWVudHMubWFwKGZ1bmN0aW9uKGNoaWxkQXJndW1lbnQpIHtcbiAgICBjb25zdCBjaGlsZCA9IChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudCkgP1xuICAgICAgICAgICAgICAgICAgICAgY2hpbGRBcmd1bWVudCA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dEVsZW1lbnQoY2hpbGRBcmd1bWVudCk7IC8vL1xuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q2xhc3Mge1xuICBjb25zdHJ1Y3RvcihyZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQpIHtcbiAgICBpZiAocmVuZGVyKSB7IHRoaXMucmVuZGVyID0gcmVuZGVyOyB9XG4gICAgaWYgKGdldEluaXRpYWxTdGF0ZSkgeyB0aGlzLmdldEluaXRpYWxTdGF0ZSA9IGdldEluaXRpYWxTdGF0ZTsgfVxuICAgIGlmIChnZXRDaGlsZENvbnRleHQpIHsgdGhpcy5nZXRDaGlsZENvbnRleHQgPSBnZXRDaGlsZENvbnRleHQ7IH1cbiAgICBpZiAoY29tcG9uZW50RGlkTW91bnQpIHsgdGhpcy5jb21wb25lbnREaWRNb3VudCA9IGNvbXBvbmVudERpZE1vdW50OyB9XG4gICAgaWYgKGNvbXBvbmVudFdpbGxVbm1vdW50KSB7IHRoaXMuY29tcG9uZW50V2lsbFVubW91bnQgPSBjb21wb25lbnRXaWxsVW5tb3VudDsgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vL1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGNvbnN0IHJlbmRlciA9IG9iamVjdFsncmVuZGVyJ10sXG4gICAgICAgICAgZ2V0SW5pdGlhbFN0YXRlID0gb2JqZWN0WydnZXRJbml0aWFsU3RhdGUnXSxcbiAgICAgICAgICBnZXRDaGlsZENvbnRleHQgPSBvYmplY3RbJ2dldENoaWxkQ29udGV4dCddLFxuICAgICAgICAgIGNvbXBvbmVudERpZE1vdW50ID0gb2JqZWN0Wydjb21wb25lbnREaWRNb3VudCddLFxuICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gb2JqZWN0Wydjb21wb25lbnRXaWxsVW5tb3VudCddO1xuICAgXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdENsYXNzRWxlbWVudCBleHRlbmRzIFJlYWN0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHJlYWN0Q2xhc3MsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENsYXNzID0gcmVhY3RDbGFzcztcblxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLmdldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENsYXNzLmdldEluaXRpYWxTdGF0ZS5jYWxsKHRoaXMpO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcyk7XG4gIH1cbiAgXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnREaWRNb3VudC5jYWxsKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmNhbGwodGhpcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIC8vL1xuICB9XG4gIFxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIFxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIFxuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENvbXBvbmVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDb21wb25lbnQucmVuZGVyLmNhbGwodGhpcywgdXBkYXRlKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRJbml0aWFsU3RhdGUuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDb21wb25lbnQuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdERPTSB7XG4gIHN0YXRpYyByZW5kZXIoZWxlbWVudCwgcGFyZW50RE9NRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IEVsZW1lbnQuZnJvbURPTUVsZW1lbnQocGFyZW50RE9NRWxlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgZWxlbWVudC5tb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpLFxuICAgICAgRWxlbWVudCA9IHJlcXVpcmUoJy4vZWxlbWVudCcpO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gbnVsbDtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gaGVscGVycy5ndWFyYW50ZWVBcnJheSh0aGlzLnJlbmRlcigpKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZSxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXBvbmVudERpZE1vdW50KCk7IFxuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgY2hpbGRSZWZlcmVuY2UgPSB0aGlzLmdldENoaWxkUmVmZXJlbmNlKCksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQodGhpcy5jb250ZXh0KSB8fCB0aGlzLmNvbnRleHQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBoZWxwZXJzLmd1YXJhbnRlZUFycmF5KHRoaXMucmVuZGVyKCkpO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRSZWZlcmVuY2UsIGNoaWxkQ29udGV4dCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHVubW91bnQoY29udGV4dCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG5cbiAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50KCk7XG5cbiAgICBjb25zdCBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dChjb250ZXh0KSB8fCBjb250ZXh0O1xuXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG4gICAgXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUodXBkYXRlKSB7XG4gICAgaWYgKHVwZGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlbmRlcih1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW91bnQoKTtcbiAgICB9XG4gIH1cblxuICBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG5cbiAgc3BsaWNlQ2hpbGRyZW4oc3RhcnQsIHJlbW92ZUNvdW50LCBhZGRlZENoaWxkcmVuLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLnNwbGljZUNoaWxkcmVuKHN0YXJ0LCByZW1vdmVDb3VudCwgYWRkZWRDaGlsZHJlbiwgY2hpbGRDb250ZXh0KTtcbiAgfVxuXG4gIGFkZENoaWxkKGNoaWxkLCBjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pLFxuICAgICAgICAgIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHx8IGNvbnRleHQ7XG5cbiAgICBmaXJzdENoaWxkLmFkZENoaWxkKGNoaWxkLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGQoY2hpbGQsIGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbiksXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgY29udGV4dDtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2hpbGQsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7XG4gICAgY29uc3QgZmlyc3RDaGlsZCA9IGZpcnN0KHRoaXMuY2hpbGRyZW4pO1xuXG4gICAgZmlyc3RDaGlsZC5jbGVhckF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuc2V0Q2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGZpcnN0Q2hpbGQgPSBmaXJzdCh0aGlzLmNoaWxkcmVuKTtcblxuICAgIGZpcnN0Q2hpbGQudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbik7XG5cbiAgICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuXG5mdW5jdGlvbiByZWZlcmVuY2UocGFyZW50LCBjaGlsZCkge1xuICBsZXQgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSxcbiAgICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlICgocmVmZXJlbmNlID09PSBudWxsKSAmJiAocGFyZW50RE9NRWxlbWVudCA9PT0gbnVsbCkpIHtcbiAgICBjaGlsZCA9IHBhcmVudDtcbiAgICBwYXJlbnQgPSBwYXJlbnQuZ2V0UGFyZW50KCk7XG5cbiAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gaGVscGVycy5yZW1haW5pbmcoY2hpbGQsIGNoaWxkcmVuKTtcblxuICByZXR1cm4gcmVtYWluaW5nQ2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uKHJlZmVyZW5jZSwgcmVtYWluaW5nQ2hpbGQpIHtcbiAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgPSByZW1haW5pbmdDaGlsZC5nZXRET01FbGVtZW50KCk7XG5cbiAgICAgIGlmIChyZW1haW5pbmdDaGlsZERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVmZXJlbmNlID0gcmVtYWluaW5nQ2hpbGQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICAgIHBhcmVudCA9IHJlbWFpbmluZ0NoaWxkO1xuXG4gICAgICAgIHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFJlYWN0RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cbiBcbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24odGhpcy5wcm9wcywgdGhpcy5jb250ZXh0LCB1cGRhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0SW5pdGlhbFN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uLmdldEluaXRpYWxTdGF0ZSh0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmdldENoaWxkQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50RGlkTW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbiBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnRXaWxsVW5tb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RGdW5jdGlvbkVsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KSxcbiAgICAgICAgICBjaGlsZHJlbiA9IFtdLFxuICAgICAgICAgIHByb3BzID0ge1xuICAgICAgICAgICAgY2hpbGRyZW46IGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKGRvbUVsZW1lbnQsIHByb3BzKTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKSxcbiAgICAgICAgICB0ZXh0ID0gZG9tRWxlbWVudC5ub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgICBkb21FbGVtZW50Lm5vZGVWYWx1ZSA9IHRleHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiJdfQ==
