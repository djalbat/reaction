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
            { filter: 'SHOW_ACTIVE' },
            'Active'
          ),
          ' - ',
          React.createElement(
            FilterLink,
            { filter: 'SHOW_COMPLETED' },
            'Completed'
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
          value: function getChildContext() {
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

      var createStore = Redux.createStore;


      ReactDOM.render(React.createElement(
        Provider,
        { store: createStore(todoApp) },
        React.createElement(TodoApp, null)
      ), rootDOMElement);
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

    render: function render() {
      var messages = ["Hello, world!", "Hello world again..."];

      var comments = messages.map(function (message) {
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

  // const InnerElement = React.createClass({
  //   render() {
  //
  //     return <div></div>
  //   }
  // });
  //
  // const OuterElement = React.createClass({
  //   render() {
  //
  //     return <InnerElement />
  //   }
  // });
  //
  // var outerElement = <OuterElement />;
  //
  // ReactDOM.render(outerElement, rootDOMElement);
  //
  // outerElement.forceUpdate();
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
    value: function mount(parent, sibling, context) {
      _get(Object.getPrototypeOf(DisplayElement.prototype), 'mount', this).call(this, parent, sibling);

      var childParent = this,
          childSibling = null,
          childContext = context;

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });

      this.applyProps();

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.children.forEach(function (child) {
        child.unmount(context);
      });

      _get(Object.getPrototypeOf(DisplayElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      if (this.props === null) {
        return;
      }

      var propertyNames = Object.keys(this.props);

      propertyNames.forEach(function (propertyName) {
        var propertyValue = this.props[propertyName];

        if (false) {} else if (propertyName === 'ref') {
          var callback = propertyValue,
              domElement = this.getDOMElement();

          callback(domElement);
        } else if (propertyNameIsHandlerName(propertyName)) {
          var eventName = eventNameFromPropertyName(propertyName),
              handler = propertyValue;

          this.setHandler(eventName, handler);
        } else {
          var attributeName = propertyName,
              attributeValue = propertyValue;

          this.setAttribute(attributeName, attributeValue);
        }
      }.bind(this));
    }
  }]);

  return DisplayElement;
}(Element);

module.exports = DisplayElement;

function eventNameFromPropertyName(propertyName) {
  return propertyName.toLowerCase();
}

function propertyNameIsHandlerName(propertyName) {
  return propertyName.match(/^on/);
}

},{"./element":6}],6:[function(require,module,exports){
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
    this.sibling = undefined;

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
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling) {
      this.parent = parent;
      this.sibling = sibling;

      _mount(this, parent, sibling);
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.remove();
    }
  }, {
    key: 'remove',
    value: function remove() {
      _remove(this);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(attributeName, attributeValue) {
      if (attributeName === 'className') {
        attributeName = 'class';
      }
      if (attributeName === 'htmlFor') {
        attributeName = 'for';
      }

      if (false) {} else if (typeof attributeValue === 'string') {
        this.domElement.setAttribute(attributeName, attributeValue);
      } else if ((typeof attributeValue === 'undefined' ? 'undefined' : _typeof(attributeValue)) === 'object') {
        var keys = Object.keys(attributeValue);

        keys.forEach(function (key) {
          var value = attributeValue[key];

          this.domElement[attributeName][key] = value;
        }.bind(this));
      } else {
        ///
      }
    }
  }, {
    key: 'setHandler',
    value: function setHandler(eventName, handler) {
      this.domElement[eventName] = handler;
    }
  }]);

  return Element;
}();

module.exports = Element;

function _remove(element) {
  element.domElement.parentElement.removeChild(element.domElement);
}

function _mount(element, parent, sibling) {
  var lastSibling = sibling;

  if (!appendAfterSiblings(element, lastSibling) && !prependToParent(element, parent)) {
    sibling = parent.getSibling();
    parent = parent.getParent();

    _mount(element, parent, sibling);
  }
}

function prependToParent(element, parent) {
  if (!parent) {
    return false;
  }

  var parentDOMElement = parent.getDOMElement();

  if (parentDOMElement !== null) {
    prependTo(element.domElement, parentDOMElement);

    return true;
  } else {
    return false;
  }
}

function appendAfterSiblings(element, lastSibling) {
  if (!lastSibling) {
    return false;
  }

  var sibling = lastSibling;

  while (sibling !== null) {
    var siblingDOMElement = sibling.getDOMElement();

    if (siblingDOMElement !== null) {
      appendAfter(element.domElement, siblingDOMElement);

      return true;
    } else {
      var siblingChildren = sibling.getChildren();

      lastSibling = last(siblingChildren);

      if (appendAfterSiblings(element, lastSibling)) {
        return true;
      }
    }

    sibling = sibling.getSibling();
  }

  return false;
}

function prependTo(domElement, existingDOMElement) {
  existingDOMElement.insertBefore(domElement, existingDOMElement.firstChild);
}

function appendAfter(domElement, existingDOMElement) {
  existingDOMElement.parentElement.insertBefore(domElement, existingDOMElement.nextSibling);
}

function last(array) {
  return array[array.length - 1];
}

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
    value: function createClass(object) {
      return ReactClass.fromObject(object);
    }
  }, {
    key: 'createElement',
    value: function createElement(reactObjectOrDisplayName, properties) {
      if (reactObjectOrDisplayName === undefined) {
        return undefined;
      }

      for (var _len = arguments.length, childArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childArguments[_key - 2] = arguments[_key];
      }

      var children = childrenFromChildArguments(childArguments),
          props = Object.assign({}, properties, { children: children });

      if (false) {} else if (reactObjectOrDisplayName.prototype instanceof ReactComponent) {
        var reactComponentConstructor = reactObjectOrDisplayName,
            reactComponent = new reactComponentConstructor();

        return new ReactComponentElement(reactComponent, props);
      } else if (reactObjectOrDisplayName instanceof ReactClass) {
        var reactClass = reactObjectOrDisplayName;

        return new ReactClassElement(reactClass, props);
      } else if (typeof reactObjectOrDisplayName === 'function') {
        var reactFunction = reactObjectOrDisplayName;

        return new ReactFunctionElement(reactFunction, props);
      } else {
        var displayName = reactObjectOrDisplayName;

        return new DisplayElement(displayName, props);
      }
    }
  }]);

  return React;
}();

React.Component = ReactComponent;

module.exports = React;

function childrenFromChildArguments(childArguments) {
  var firstChildArgument = first(childArguments);

  if (firstChildArgument instanceof Array) {
    childArguments = firstChildArgument; ///
  }

  return childArguments.map(function (childArgument) {
    if (childArgument instanceof Element || childArgument instanceof ReactElement) {
      return childArgument;
    } else {
      var text = '' + childArgument,
          props = { children: [] }; ///

      return new TextElement(text, props);
    }
  });
}

function first(array) {
  return array[0];
}

},{"./displayElement":5,"./element":6,"./reactClass":8,"./reactClassElement":9,"./reactComponent":10,"./reactComponentElement":11,"./reactElement":13,"./reactFunctionElement":14,"./textElement":15}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactClass = function () {
  function ReactClass(displayName, render, getChildContext, componentDidMount, componentWillUnmount) {
    _classCallCheck(this, ReactClass);

    this.displayName = displayName;

    if (render) {
      this.render = render;
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
      return undefined;
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
      var displayName = object['displayName'],
          render = object['render'],
          getChildContext = object['getChildContext'],
          componentDidMount = object['componentDidMount'],
          componentWillUnmount = object['componentWillUnmount'];

      return new ReactClass(displayName, render, getChildContext, componentDidMount, componentWillUnmount);
    }
  }]);

  return ReactClass;
}();

module.exports = ReactClass;

},{}],9:[function(require,module,exports){
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
    return _this;
  }

  _createClass(ReactClassElement, [{
    key: 'render',
    value: function render() {
      return this.reactClass.render.apply(this);
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
    value: function render() {
      return undefined;
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

},{}],11:[function(require,module,exports){
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
    return _this;
  }

  _createClass(ReactComponentElement, [{
    key: 'render',
    value: function render() {
      return this.reactComponent.render.apply(this);
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
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      this.reactComponent.componentWillUnMount.apply(this);
    }
  }]);

  return ReactComponentElement;
}(ReactElement);

module.exports = ReactComponentElement;

},{"./reactElement":13}],12:[function(require,module,exports){
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
      var parentProps = { children: [] },
          ///
      parent = new Element(parentDOMElement, parentProps),
          sibling = null,
          context = undefined;

      element.mount(parent, sibling, context);
    }
  }]);

  return ReactDOM;
}();

module.exports = ReactDOM;

},{"./element":6}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReactElement = function () {
  function ReactElement(props) {
    _classCallCheck(this, ReactElement);

    this.props = props;

    this.parent = undefined;
    this.sibling = undefined;
    this.context = undefined;

    this.children = props.children; ///
  }

  _createClass(ReactElement, [{
    key: 'getDOMElement',
    value: function getDOMElement() {
      return null;
    }
  }, {
    key: 'getParent',
    value: function getParent() {
      return this.parent;
    }
  }, {
    key: 'getSibling',
    value: function getSibling() {
      return this.sibling;
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: 'mount',
    value: function mount(parent, sibling, context) {
      this.parent = parent;
      this.sibling = sibling;
      this.context = context;

      var childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render();

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
      });

      this.componentDidMount(context);

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      this.context = context;

      this.componentWillUnmount();

      var childContext = this.getChildContext() || context;

      this.children.forEach(function (child) {
        child.unmount(childContext);
      });
    }
  }, {
    key: 'remount',
    value: function remount() {
      var context = this.context,
          childParent = this,
          childSibling = null,
          childContext = this.getChildContext() || context,
          childOrChildren = this.render(context);

      this.children = childOrChildren instanceof Array ? childOrChildren : [childOrChildren];

      this.children.forEach(function (child) {
        childSibling = child.mount(childParent, childSibling, childContext);
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
    key: 'forceUpdate',
    value: function forceUpdate() {
      this.remove();

      this.remount();
    }
  }]);

  return ReactElement;
}();

module.exports = ReactElement;

},{}],14:[function(require,module,exports){
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
    return _this;
  }

  _createClass(ReactFunctionElement, [{
    key: 'render',
    value: function render() {
      return this.reactFunction(this.props, this.context);
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

},{"./reactElement":13}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var TextElement = function (_Element) {
  _inherits(TextElement, _Element);

  function TextElement(text, props) {
    _classCallCheck(this, TextElement);

    var domElement = document.createTextNode(text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, domElement, props));
  }

  _createClass(TextElement, [{
    key: 'mount',
    value: function mount(parent, sibling, context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'mount', this).call(this, parent, sibling);

      return this;
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      _get(Object.getPrototypeOf(TextElement.prototype), 'unmount', this).call(this);
    }
  }]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImV4YW1wbGVzL2xpYkVTMjAxNS9yZWR1eEFwcC5qcyIsImV4YW1wbGVzL2xpYkVTMjAxNS92YW5pbGxhQXBwLmpzIiwiaW5kZXguanMiLCJsaWJFUzIwMTUvZGlzcGxheUVsZW1lbnQuanMiLCJsaWJFUzIwMTUvZWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdC5qcyIsImxpYkVTMjAxNS9yZWFjdENsYXNzLmpzIiwibGliRVMyMDE1L3JlYWN0Q2xhc3NFbGVtZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50LmpzIiwibGliRVMyMDE1L3JlYWN0Q29tcG9uZW50RWxlbWVudC5qcyIsImxpYkVTMjAxNS9yZWFjdERPTS5qcyIsImxpYkVTMjAxNS9yZWFjdEVsZW1lbnQuanMiLCJsaWJFUzIwMTUvcmVhY3RGdW5jdGlvbkVsZW1lbnQuanMiLCJsaWJFUzIwMTUvdGV4dEVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9hcHBseU1pZGRsZXdhcmUuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvY29tYmluZVJlZHVjZXJzLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jb21wb3NlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L2xpYi9jcmVhdGVTdG9yZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbGliL3V0aWxzL3dhcm5pbmcuanMiLCJub2RlX21vZHVsZXMvcmVkdXgvbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwibm9kZV9tb2R1bGVzL3JlZHV4L25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSG9zdE9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWR1eC9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSOztBQUVKLElBQUksV0FBVyxRQUFRLGFBQVIsQ0FBWDtJQUNBLFdBQVcsU0FBUyxRQUFUO0lBQ1gsUUFBUSxTQUFTLEtBQVQ7O0lBRU47QUFDSixXQURJLFFBQ0osR0FBYzswQkFEVixVQUNVO0dBQWQ7O2VBREk7OzBCQUtTO0FBQ1gsVUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLE1BQXhCLENBQWpCLENBREs7O0FBR1gsVUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzlCLGdCQUFRLE9BQU8sSUFBUDtBQUNOLGVBQUssVUFBTDtBQUNFLG1CQUFPO0FBQ0wsa0JBQUksT0FBTyxFQUFQO0FBQ0osb0JBQU0sT0FBTyxJQUFQO0FBQ04seUJBQVcsS0FBWDthQUhGLENBREY7O0FBREYsZUFRTyxhQUFMO0FBQ0UsZ0JBQUksTUFBTSxFQUFOLEtBQWEsT0FBTyxFQUFQLEVBQVc7QUFDMUIscUJBQU8sS0FBUCxDQUQwQjthQUE1Qjs7QUFJQSxtQkFBTyxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQWxCLEVBQXlCO0FBQzlCLHlCQUFXLENBQUMsTUFBTSxTQUFOO2FBRFAsQ0FBUCxDQUxGOztBQVJGO0FBa0JJLG1CQUFPLEtBQVAsQ0FERjtBQWpCRixTQUQ4QjtPQUFuQixDQUhGOztBQTBCWCxVQUFNLFFBQVEsU0FBUixLQUFRLEdBQXdCO1lBQXZC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3ZOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZhbmlsbGFBcHA6IHJlcXVpcmUoJy4vbGliL3ZhbmlsbGFBcHAnKSxcbiAgUmVkdXhBcHA6IHJlcXVpcmUoJy4vbGliL3JlZHV4QXBwJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWR1eCA9IHJlcXVpcmUoJ3JlZHV4Jyk7XG5cbnZhciByZWFjdGlvbiA9IHJlcXVpcmUoJy4uLy4uL2luZGV4JyksXG4gICAgUmVhY3RET00gPSByZWFjdGlvbi5SZWFjdERPTSxcbiAgICBSZWFjdCA9IHJlYWN0aW9uLlJlYWN0O1xuXG5jbGFzcyBSZWR1eEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIGNvbnN0IHRvZG8gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICBpZiAoc3RhdGUuaWQgIT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgICAgY29tcGxldGVkOiAhc3RhdGUuY29tcGxldGVkXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHRvZG9zID0gKHN0YXRlID0gW10sIGFjdGlvbikgPT4ge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdBRERfVE9ETyc6XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgdG9kbyh1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgICBdO1xuXG4gICAgICAgIGNhc2UgJ1RPR0dMRV9UT0RPJzpcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKHQgPT4gdG9kbyh0LCBhY3Rpb24pKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdmlzaWJpbGl0eUZpbHRlciA9ICggc3RhdGUgPSAnU0hPV19BTEwnLCBhY3Rpb24pID0+IHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1ZJU0lCSUxJVFlfRklMVEVSJzpcbiAgICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlcjtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IFJlZHV4O1xuXG4gICAgY29uc3QgdG9kb0FwcCA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICB0b2RvczogdG9kb3MsXG4gICAgICB2aXNpYmlsaXR5RmlsdGVyOiB2aXNpYmlsaXR5RmlsdGVyXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbiAgICBjb25zdCBnZXRWaXNpYmxlVG9kb3MgPSAoXG4gICAgICB0b2RvcyxcbiAgICAgIGZpbHRlclxuICAgICkgPT4ge1xuICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcbiAgICAgICAgY2FzZSAnU0hPV19BTEwnOlxuICAgICAgICAgIHJldHVybiB0b2RvcztcblxuICAgICAgICBjYXNlICdTSE9XX0NPTVBMRVRFRCc6XG4gICAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcihcbiAgICAgICAgICAgICAgdCA9PiB0LmNvbXBsZXRlZFxuICAgICAgICAgICk7XG5cbiAgICAgICAgY2FzZSAnU0hPV19BQ1RJVkUnOlxuICAgICAgICAgIHJldHVybiB0b2Rvcy5maWx0ZXIoXG4gICAgICAgICAgICAgIHQgPT4gIXQuY29tcGxldGVkXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgVG9kbyA9ICh7XG4gICAgICBvbkNsaWNrLFxuICAgICAgY29tcGxldGVkLFxuICAgICAgdGV4dFxuICAgIH0pID0+IChcblxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID9cbiAgICAgICAgICAgICAgICAgICAgICAnbGluZS10aHJvdWdoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnbm9uZSd9fVxuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvbGk+XG4gICAgKTtcblxuICAgIGNvbnN0IFRvZG9MaXN0ID0gKHtcbiAgICAgIHRvZG9zLFxuICAgICAgb25Ub2RvQ2xpY2tcbiAgICB9KSA9PiAgKFxuXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7dG9kb3MubWFwKHRvZG8gPT4gPFRvZG8gdGV4dD17dG9kby50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ9e3RvZG8uY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2RvQ2xpY2sodG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLz4pfVxuICAgICAgICA8L3VsPlxuICAgICk7XG5cbiAgICBjb25zdCBMaW5rID0gKFxuICAgICAgcHJvcHNcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IHsgYWN0aXZlLCBvbkNsaWNrIH0gPSBwcm9wcztcblxuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gPHNwYW4+e3Byb3BzLmNoaWxkcmVufTwvc3Bhbj47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGEgaHJlZj0nIydcbiAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgIG9uQ2xpY2soKTtcbiAgICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2E+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBGaWx0ZXJMaW5rIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZSgoKSA9PiBcbiAgICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TGluayBhY3RpdmU9e1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5maWx0ZXIgPT09IHN0YXRlLnZpc2liaWxpdHlGaWx0ZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1NFVF9WSVNJQklMSVRZX0ZJTFRFUicsXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdGhpcy5wcm9wcy5maWx0ZXJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV4dFRvZG9JZCA9IDA7XG4gICAgY29uc3QgQWRkVG9kbyA9IChcbiAgICAgIHByb3BzLFxuICAgICAge1xuICAgICAgICBzdG9yZVxuICAgICAgfVxuICAgICkgPT4ge1xuICAgICAgbGV0IGlucHV0O1xuXG4gICAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHJlZj17ZG9tRWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dCA9IGRvbUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBRERfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWQ6IG5leHRUb2RvSWQrK1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIHRvZG9cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH07XG5cbiAgICBjbGFzcyBWaXNpYmxlVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcblxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdG9yZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxUb2RvTGlzdCB0b2Rvcz17XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0VmlzaWJsZVRvZG9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9kb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS52aXNpYmlsaXR5RmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9kb0NsaWNrPXtpZCA9PlxuICAgICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdUT0dHTEVfVE9ETycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgeydTaG93OiAnfVxuICAgICAgICA8RmlsdGVyTGluayBmaWx0ZXI9J1NIT1dfQUxMJz5cbiAgICAgICAgICBBbGxcbiAgICAgICAgPC9GaWx0ZXJMaW5rPlxuICAgICAgICB7JyAtICd9XG4gICAgICAgIDxGaWx0ZXJMaW5rIGZpbHRlcj0nU0hPV19BQ1RJVkUnPlxuICAgICAgICAgIEFjdGl2ZVxuICAgICAgICA8L0ZpbHRlckxpbms+XG4gICAgICAgIHsnIC0gJ31cbiAgICAgICAgPEZpbHRlckxpbmsgZmlsdGVyPSdTSE9XX0NPTVBMRVRFRCc+XG4gICAgICAgICAgQ29tcGxldGVkXG4gICAgICAgIDwvRmlsdGVyTGluaz5cbiAgICAgIDwvcD5cbiAgICApO1xuXG4gICAgY29uc3QgVG9kb0FwcCA9ICgpID0+IChcblxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZFRvZG8gLz5cbiAgICAgICAgPFZpc2libGVUb2RvTGlzdCAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY2xhc3MgUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0b3JlOiB0aGlzLnByb3BzLnN0b3JlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgY3JlYXRlU3RvcmUgfSA9IFJlZHV4O1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtjcmVhdGVTdG9yZSh0b2RvQXBwKX0+XG4gICAgICAgIDxUb2RvQXBwIC8+XG4gICAgICA8L1Byb3ZpZGVyPixcbiAgICAgIHJvb3RET01FbGVtZW50XG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlZHV4QXBwO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3Rpb24gPSByZXF1aXJlKCcuLi8uLi9pbmRleCcpLFxuICAgIFJlYWN0RE9NID0gcmVhY3Rpb24uUmVhY3RET00sXG4gICAgUmVhY3QgPSByZWFjdGlvbi5SZWFjdDtcblxuY2xhc3MgVmFuaWxsYUFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblxuICAgIHZhciBDb21tZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1lc3NhZ2V9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHRoaXMucHJvcHMubWVzc2FnZTtcblxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudCBtb3VudGVkIHdpdGggbWVzc2FnZSAnICsgbWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBDb21tZW50c0xpc3QgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgXCJIZWxsbywgd29ybGQhXCIsXG4gICAgICAgICAgXCJIZWxsbyB3b3JsZCBhZ2Fpbi4uLlwiXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFyIGNvbW1lbnRzID0gbWVzc2FnZXMubWFwKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICByZXR1cm4gPENvbW1lbnQgbWVzc2FnZT17bWVzc2FnZX0gLz47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRzTGlzdFwiPlxuICAgICAgICAgICAge2NvbW1lbnRzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRzIGxpc3QgbW91bnRlZCcpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgY29tbWVudHNMaXN0ID0gPENvbW1lbnRzTGlzdCAvPjtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihjb21tZW50c0xpc3QsIHJvb3RET01FbGVtZW50KTtcblxuICAgIC8vIGNvbnN0IElubmVyRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcigpIHtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gPGRpdj48L2Rpdj5cbiAgICAvLyAgIH1cbiAgICAvLyB9KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IE91dGVyRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAvLyAgIHJlbmRlcigpIHtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gPElubmVyRWxlbWVudCAvPlxuICAgIC8vICAgfVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gdmFyIG91dGVyRWxlbWVudCA9IDxPdXRlckVsZW1lbnQgLz47XG4gICAgLy9cbiAgICAvLyBSZWFjdERPTS5yZW5kZXIob3V0ZXJFbGVtZW50LCByb290RE9NRWxlbWVudCk7XG4gICAgLy9cbiAgICAvLyBvdXRlckVsZW1lbnQuZm9yY2VVcGRhdGUoKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbmlsbGFBcHA7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZWFjdDogcmVxdWlyZSgnLi9saWIvcmVhY3QnKSxcbiAgUmVhY3RET006IHJlcXVpcmUoJy4vbGliL3JlYWN0RE9NJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpc3BsYXlFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lLCBwcm9wcykge1xuICAgIHZhciBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXNwbGF5TmFtZSk7XG5cbiAgICBzdXBlcihkb21FbGVtZW50LCBwcm9wcyk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHNpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHNpYmxpbmcpO1xuICAgIFxuICAgIHZhciBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgIGNoaWxkU2libGluZyA9IG51bGwsXG4gICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbnRleHQ7XG4gICAgXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICBjaGlsZFNpYmxpbmcgPSBjaGlsZC5tb3VudChjaGlsZFBhcmVudCwgY2hpbGRTaWJsaW5nLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5hcHBseVByb3BzKCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGlmICh0aGlzLnByb3BzID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIHByb3BlcnR5TmFtZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICB2YXIgcHJvcGVydHlWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lID09PSAncmVmJykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBwcm9wZXJ0eVZhbHVlLFxuICAgICAgICAgICAgZG9tRWxlbWVudCA9IHRoaXMuZ2V0RE9NRWxlbWVudCgpO1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2soZG9tRWxlbWVudClcbiAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlOYW1lSXNIYW5kbGVyTmFtZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSksXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgICB0aGlzLnNldEhhbmRsZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNwbGF5RWxlbWVudDtcblxuZnVuY3Rpb24gZXZlbnROYW1lRnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIHByb3BlcnR5TmFtZS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eU5hbWVJc0hhbmRsZXJOYW1lKHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gcHJvcGVydHlOYW1lLm1hdGNoKC9eb24vKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGRvbUVsZW1lbnQsIHByb3BzKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICB0aGlzLnBhcmVudCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNpYmxpbmcgPSB1bmRlZmluZWQ7XG4gICAgXG4gICAgdGhpcy5jaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuOyAgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG5cbiAgZ2V0U2libGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zaWJsaW5nO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHNpYmxpbmcpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnNpYmxpbmcgPSBzaWJsaW5nO1xuXG4gICAgbW91bnQodGhpcywgcGFyZW50LCBzaWJsaW5nKTtcbiAgfVxuICBcbiAgdW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHJlbW92ZSh0aGlzKTtcbiAgfVxuXG4gIHNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSkge1xuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnY2xhc3NOYW1lJykgeyBhdHRyaWJ1dGVOYW1lID0gJ2NsYXNzJzsgfVxuICAgIGlmIChhdHRyaWJ1dGVOYW1lID09PSAnaHRtbEZvcicpIHsgYXR0cmlidXRlTmFtZSA9ICdmb3InOyB9XG5cbiAgICBpZiAoZmFsc2UgKSB7XG4gICAgICBcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBhdHRyaWJ1dGVWYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGF0dHJpYnV0ZVZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGVWYWx1ZSk7XG5cbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZVZhbHVlW2tleV07XG5cbiAgICAgICAgdGhpcy5kb21FbGVtZW50W2F0dHJpYnV0ZU5hbWVdW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vL1xuICAgIH1cbiAgfVxuICBcbiAgc2V0SGFuZGxlcihldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnRbZXZlbnROYW1lXSA9IGhhbmRsZXI7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmRvbUVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBtb3VudChlbGVtZW50LCBwYXJlbnQsIHNpYmxpbmcpIHtcbiAgdmFyIGxhc3RTaWJsaW5nID0gc2libGluZztcblxuICBpZiAoIWFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpICYmICFwcmVwZW5kVG9QYXJlbnQoZWxlbWVudCwgcGFyZW50KSkge1xuICAgIHNpYmxpbmcgPSBwYXJlbnQuZ2V0U2libGluZygpO1xuICAgIHBhcmVudCA9IHBhcmVudC5nZXRQYXJlbnQoKTtcblxuICAgIG1vdW50KGVsZW1lbnQsIHBhcmVudCwgc2libGluZyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvUGFyZW50KGVsZW1lbnQsIHBhcmVudCkge1xuICBpZiAoIXBhcmVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHByZXBlbmRUbyhlbGVtZW50LmRvbUVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpIHtcbiAgaWYgKCFsYXN0U2libGluZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBzaWJsaW5nID0gbGFzdFNpYmxpbmc7XG5cbiAgd2hpbGUgKHNpYmxpbmcgIT09IG51bGwpIHtcbiAgICB2YXIgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nLmdldERPTUVsZW1lbnQoKTtcblxuICAgIGlmIChzaWJsaW5nRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXBwZW5kQWZ0ZXIoZWxlbWVudC5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2libGluZ0NoaWxkcmVuID0gc2libGluZy5nZXRDaGlsZHJlbigpO1xuXG4gICAgICBsYXN0U2libGluZyA9IGxhc3Qoc2libGluZ0NoaWxkcmVuKTtcblxuICAgICAgaWYgKGFwcGVuZEFmdGVyU2libGluZ3MoZWxlbWVudCwgbGFzdFNpYmxpbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nLmdldFNpYmxpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcHJlcGVuZFRvKGRvbUVsZW1lbnQsIGV4aXN0aW5nRE9NRWxlbWVudCkge1xuICBleGlzdGluZ0RPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGV4aXN0aW5nRE9NRWxlbWVudC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kQWZ0ZXIoZG9tRWxlbWVudCwgZXhpc3RpbmdET01FbGVtZW50KSB7XG4gIGV4aXN0aW5nRE9NRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBleGlzdGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpO1xufVxuXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RDb21wb25lbnQgPSByZXF1aXJlKCcuL3JlYWN0Q29tcG9uZW50JyksXG4gICAgUmVhY3RDbGFzcyA9IHJlcXVpcmUoJy4vcmVhY3RDbGFzcycpLFxuICAgIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKSxcbiAgICBUZXh0RWxlbWVudCA9IHJlcXVpcmUoJy4vdGV4dEVsZW1lbnQnKSxcbiAgICBSZWFjdEVsZW1lbnQgPSByZXF1aXJlKCcuL3JlYWN0RWxlbWVudCcpLFxuICAgIERpc3BsYXlFbGVtZW50ID0gcmVxdWlyZSgnLi9kaXNwbGF5RWxlbWVudCcpLFxuICAgIFJlYWN0Q2xhc3NFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdENsYXNzRWxlbWVudCcpLFxuICAgIFJlYWN0RnVuY3Rpb25FbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEZ1bmN0aW9uRWxlbWVudCcpLFxuICAgIFJlYWN0Q29tcG9uZW50RWxlbWVudCA9IHJlcXVpcmUoJy4vcmVhY3RDb21wb25lbnRFbGVtZW50Jyk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUNsYXNzKG9iamVjdCkge1xuICAgIHJldHVybiBSZWFjdENsYXNzLmZyb21PYmplY3Qob2JqZWN0KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSwgcHJvcGVydGllcywgLi4uY2hpbGRBcmd1bWVudHMpIHtcbiAgICBpZiAocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGNoaWxkcmVuID0gY2hpbGRyZW5Gcm9tQ2hpbGRBcmd1bWVudHMoY2hpbGRBcmd1bWVudHMpLFxuICAgICAgICAgIHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge2NoaWxkcmVuOiBjaGlsZHJlbn0pO1xuXG4gICAgaWYgKGZhbHNlKSB7XG5cbiAgICB9IGVsc2UgaWYgKHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBSZWFjdENvbXBvbmVudCkge1xuICAgICAgdmFyIHJlYWN0Q29tcG9uZW50Q29uc3RydWN0b3IgPSByZWFjdE9iamVjdE9yRGlzcGxheU5hbWUsXG4gICAgICAgICAgcmVhY3RDb21wb25lbnQgPSBuZXcgcmVhY3RDb21wb25lbnRDb25zdHJ1Y3RvcigpO1xuXG4gICAgICByZXR1cm4gbmV3IFJlYWN0Q29tcG9uZW50RWxlbWVudChyZWFjdENvbXBvbmVudCwgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAocmVhY3RPYmplY3RPckRpc3BsYXlOYW1lIGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgdmFyIHJlYWN0Q2xhc3MgPSByZWFjdE9iamVjdE9yRGlzcGxheU5hbWU7XG5cbiAgICAgIHJldHVybiBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlYWN0T2JqZWN0T3JEaXNwbGF5TmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHJlYWN0RnVuY3Rpb24gPSByZWFjdE9iamVjdE9yRGlzcGxheU5hbWU7XG5cbiAgICAgIHJldHVybiBuZXcgUmVhY3RGdW5jdGlvbkVsZW1lbnQocmVhY3RGdW5jdGlvbiwgcHJvcHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSByZWFjdE9iamVjdE9yRGlzcGxheU5hbWU7XG5cbiAgICAgIHJldHVybiBuZXcgRGlzcGxheUVsZW1lbnQoZGlzcGxheU5hbWUsIHByb3BzKTtcbiAgICB9XG4gIH1cbn1cblxuUmVhY3QuQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRnJvbUNoaWxkQXJndW1lbnRzKGNoaWxkQXJndW1lbnRzKSB7XG4gIHZhciBmaXJzdENoaWxkQXJndW1lbnQgPSBmaXJzdChjaGlsZEFyZ3VtZW50cyk7XG5cbiAgaWYgKGZpcnN0Q2hpbGRBcmd1bWVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgY2hpbGRBcmd1bWVudHMgPSBmaXJzdENoaWxkQXJndW1lbnQ7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBjaGlsZEFyZ3VtZW50cy5tYXAoZnVuY3Rpb24oY2hpbGRBcmd1bWVudCkge1xuICAgIGlmIChjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICB8fCBjaGlsZEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RFbGVtZW50KSB7XG4gICAgICByZXR1cm4gY2hpbGRBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRleHQgPSAnJyArIGNoaWxkQXJndW1lbnQsXG4gICAgICAgICAgcHJvcHMgPSB7Y2hpbGRyZW46IFtdfTsgIC8vL1xuICAgICAgXG4gICAgICByZXR1cm4gbmV3IFRleHRFbGVtZW50KHRleHQsIHByb3BzKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGRpc3BsYXlOYW1lLCByZW5kZXIsIGdldENoaWxkQ29udGV4dCwgY29tcG9uZW50RGlkTW91bnQsIGNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgdGhpcy5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIFxuICAgIGlmIChyZW5kZXIpIHsgdGhpcy5yZW5kZXIgPSByZW5kZXI7IH1cbiAgICBpZiAoZ2V0Q2hpbGRDb250ZXh0KSB7IHRoaXMuZ2V0Q2hpbGRDb250ZXh0ID0gZ2V0Q2hpbGRDb250ZXh0OyB9XG4gICAgaWYgKGNvbXBvbmVudERpZE1vdW50KSB7IHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSBjb21wb25lbnREaWRNb3VudDsgfVxuICAgIGlmIChjb21wb25lbnRXaWxsVW5tb3VudCkgeyB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gY29tcG9uZW50V2lsbFVubW91bnQ7IH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxuXG4gIHN0YXRpYyBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IG9iamVjdFsnZGlzcGxheU5hbWUnXSxcbiAgICAgICAgcmVuZGVyID0gb2JqZWN0WydyZW5kZXInXSxcbiAgICAgICAgZ2V0Q2hpbGRDb250ZXh0ID0gb2JqZWN0WydnZXRDaGlsZENvbnRleHQnXSxcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQgPSBvYmplY3RbJ2NvbXBvbmVudERpZE1vdW50J10sXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50ID0gb2JqZWN0Wydjb21wb25lbnRXaWxsVW5tb3VudCddO1xuICAgIFxuICAgIHJldHVybiBuZXcgUmVhY3RDbGFzcyhkaXNwbGF5TmFtZSwgcmVuZGVyLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDbGFzc0VsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdENsYXNzLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RDbGFzcyA9IHJlYWN0Q2xhc3M7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuYXBwbHkodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cbiBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNvbXBvbmVudFdpbGxVbm1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RDbGFzc0VsZW1lbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFJlYWN0Q29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcbiAgfVxuICBcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RDb21wb25lbnRFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDb21wb25lbnQsIHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5yZWFjdENvbXBvbmVudCA9IHJlYWN0Q29tcG9uZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q29tcG9uZW50LnJlbmRlci5hcHBseSh0aGlzKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdENvbXBvbmVudC5nZXRDaGlsZENvbnRleHQuYXBwbHkodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q29tcG9uZW50LmNvbXBvbmVudERpZE1vdW50LmFwcGx5KHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuTW91bnQoKSB7XG4gICAgdGhpcy5yZWFjdENvbXBvbmVudC5jb21wb25lbnRXaWxsVW5Nb3VudC5hcHBseSh0aGlzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0Q29tcG9uZW50RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RET00ge1xuICBzdGF0aWMgcmVuZGVyKGVsZW1lbnQsIHBhcmVudERPTUVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IHtjaGlsZHJlbjogW119LCAvLy9cbiAgICAgICAgICBwYXJlbnQgPSBuZXcgRWxlbWVudChwYXJlbnRET01FbGVtZW50LCBwYXJlbnRQcm9wcyksXG4gICAgICAgICAgc2libGluZyA9IG51bGwsXG4gICAgICAgICAgY29udGV4dCA9IHVuZGVmaW5lZDtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCBzaWJsaW5nLCBjb250ZXh0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2libGluZyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmNvbnRleHQgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47IC8vL1xuICB9XG4gIFxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIFxuICBnZXRQYXJlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50O1xuICB9XG4gIFxuICBnZXRTaWJsaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnNpYmxpbmc7XG4gIH1cbiAgXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBzaWJsaW5nLCBjb250ZXh0KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5zaWJsaW5nID0gc2libGluZztcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdmFyIGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgY2hpbGRTaWJsaW5nID0gbnVsbCxcbiAgICAgICAgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoKSB8fCBjb250ZXh0LFxuICAgICAgICBjaGlsZE9yQ2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGRTaWJsaW5nID0gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkU2libGluZywgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoY29udGV4dCk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgdmFyIGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KCkgfHwgY29udGV4dDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQudW5tb3VudChjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3VudCgpIHtcbiAgICB2YXIgY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICBjaGlsZFNpYmxpbmcgPSBudWxsLFxuICAgICAgICBjaGlsZENvbnRleHQgPSB0aGlzLmdldENoaWxkQ29udGV4dCgpIHx8IGNvbnRleHQsXG4gICAgICAgIGNoaWxkT3JDaGlsZHJlbiA9IHRoaXMucmVuZGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IChjaGlsZE9yQ2hpbGRyZW4gaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkT3JDaGlsZHJlbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hpbGRPckNoaWxkcmVuXTtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGRTaWJsaW5nID0gY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkU2libGluZywgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yY2VVcGRhdGUoKSB7XG4gICAgdGhpcy5yZW1vdmUoKTtcblxuICAgIHRoaXMucmVtb3VudCgpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RFbGVtZW50ID0gcmVxdWlyZSgnLi9yZWFjdEVsZW1lbnQnKTtcblxuY2xhc3MgUmVhY3RGdW5jdGlvbkVsZW1lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihyZWFjdEZ1bmN0aW9uLCBwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMucmVhY3RGdW5jdGlvbiA9IHJlYWN0RnVuY3Rpb247XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5nZXRDaGlsZENvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWN0RnVuY3Rpb24uZ2V0Q2hpbGRDb250ZXh0KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucmVhY3RGdW5jdGlvbi5jb21wb25lbnREaWRNb3VudCkge1xuICAgICAgdGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudERpZE1vdW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XG4gIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZWFjdEZ1bmN0aW9uLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgICB0aGlzLnJlYWN0RnVuY3Rpb24uY29tcG9uZW50V2lsbFVubW91bnQodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdEZ1bmN0aW9uRWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgVGV4dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCwgcHJvcHMpIHtcbiAgICB2YXIgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuXG4gICAgc3VwZXIoZG9tRWxlbWVudCwgcHJvcHMpO1xuICB9XG4gIFxuICBtb3VudChwYXJlbnQsIHNpYmxpbmcsIGNvbnRleHQpIHtcbiAgICBzdXBlci5tb3VudChwYXJlbnQsIHNpYmxpbmcpO1xuICAgIFxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RWxlbWVudDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGFwcGx5TWlkZGxld2FyZTtcblxudmFyIF9jb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG5cbnZhciBfY29tcG9zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wb3NlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5mdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcikge1xuICAgICAgdmFyIHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gICAgICB2YXIgX2Rpc3BhdGNoID0gc3RvcmUuZGlzcGF0Y2g7XG4gICAgICB2YXIgY2hhaW4gPSBbXTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBfY29tcG9zZTJbXCJkZWZhdWx0XCJdLmFwcGx5KHVuZGVmaW5lZCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdG9yZSwge1xuICAgICAgICBkaXNwYXRjaDogX2Rpc3BhdGNoXG4gICAgICB9KTtcbiAgICB9O1xuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gYmluZEFjdGlvbkNyZWF0b3JzO1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuXG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvbiBjcmVhdG9ycywgaW50byBhbiBvYmplY3Qgd2l0aCB0aGVcbiAqIHNhbWUga2V5cywgYnV0IHdpdGggZXZlcnkgZnVuY3Rpb24gd3JhcHBlZCBpbnRvIGEgYGRpc3BhdGNoYCBjYWxsIHNvIHRoZXlcbiAqIG1heSBiZSBpbnZva2VkIGRpcmVjdGx5LiBUaGlzIGlzIGp1c3QgYSBjb252ZW5pZW5jZSBtZXRob2QsIGFzIHlvdSBjYW4gY2FsbFxuICogYHN0b3JlLmRpc3BhdGNoKE15QWN0aW9uQ3JlYXRvcnMuZG9Tb21ldGhpbmcoKSlgIHlvdXJzZWxmIGp1c3QgZmluZS5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UsIHlvdSBjYW4gYWxzbyBwYXNzIGEgc2luZ2xlIGZ1bmN0aW9uIGFzIHRoZSBmaXJzdCBhcmd1bWVudCxcbiAqIGFuZCBnZXQgYSBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3JzKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCkge1xuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3JzLCBkaXNwYXRjaCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3JzICE9PSAnb2JqZWN0JyB8fCBhY3Rpb25DcmVhdG9ycyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkICcgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgJy4gJyArICdEaWQgeW91IHdyaXRlIFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cIiBpbnN0ZWFkIG9mIFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVwiPycpO1xuICB9XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhY3Rpb25DcmVhdG9ycyk7XG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHZhciBhY3Rpb25DcmVhdG9yID0gYWN0aW9uQ3JlYXRvcnNba2V5XTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBjb21iaW5lUmVkdWNlcnM7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnLi91dGlscy93YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uTmFtZSA9IGFjdGlvblR5cGUgJiYgJ1wiJyArIGFjdGlvblR5cGUudG9TdHJpbmcoKSArICdcIicgfHwgJ2FuIGFjdGlvbic7XG5cbiAgcmV0dXJuICdHaXZlbiBhY3Rpb24gJyArIGFjdGlvbk5hbWUgKyAnLCByZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQuICcgKyAnVG8gaWdub3JlIGFuIGFjdGlvbiwgeW91IG11c3QgZXhwbGljaXRseSByZXR1cm4gdGhlIHByZXZpb3VzIHN0YXRlLic7XG59XG5cbmZ1bmN0aW9uIGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2UoaW5wdXRTdGF0ZSwgcmVkdWNlcnMsIGFjdGlvbikge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IF9jcmVhdGVTdG9yZS5BY3Rpb25UeXBlcy5JTklUID8gJ2luaXRpYWxTdGF0ZSBhcmd1bWVudCBwYXNzZWQgdG8gY3JlYXRlU3RvcmUnIDogJ3ByZXZpb3VzIHN0YXRlIHJlY2VpdmVkIGJ5IHRoZSByZWR1Y2VyJztcblxuICBpZiAocmVkdWNlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdTdG9yZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgcmVkdWNlci4gTWFrZSBzdXJlIHRoZSBhcmd1bWVudCBwYXNzZWQgJyArICd0byBjb21iaW5lUmVkdWNlcnMgaXMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgcmVkdWNlcnMuJztcbiAgfVxuXG4gIGlmICghKDAsIF9pc1BsYWluT2JqZWN0MltcImRlZmF1bHRcIl0pKGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuICdUaGUgJyArIGFyZ3VtZW50TmFtZSArICcgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIicgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArICdcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnICsgKCdrZXlzOiBcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIicpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSk7XG4gIH0pO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICdVbmV4cGVjdGVkICcgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArICcgJyArICgnXCInICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyAnXCIgZm91bmQgaW4gJyArIGFyZ3VtZW50TmFtZSArICcuICcpICsgJ0V4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogJyArICgnXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNhbml0eShyZWR1Y2Vycykge1xuICBPYmplY3Qua2V5cyhyZWR1Y2VycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHJlZHVjZXIgPSByZWR1Y2Vyc1trZXldO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiBfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uLiAnICsgJ0lmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCAnICsgJ2V4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgJyArICdub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gJ0BAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05fJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHsgdHlwZTogdHlwZSB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIHdoZW4gcHJvYmVkIHdpdGggYSByYW5kb20gdHlwZS4gJyArICgnRG9uXFwndCB0cnkgdG8gaGFuZGxlICcgKyBfY3JlYXRlU3RvcmUuQWN0aW9uVHlwZXMuSU5JVCArICcgb3Igb3RoZXIgYWN0aW9ucyBpbiBcInJlZHV4LypcIiAnKSArICduYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSAnICsgJ2N1cnJlbnQgc3RhdGUgZm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHVubGVzcyBpdCBpcyB1bmRlZmluZWQsICcgKyAnaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlICcgKyAnYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgdmFyIHNhbml0eUVycm9yO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTYW5pdHkoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzYW5pdHlFcnJvciA9IGU7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gY29tYmluYXRpb24oKSB7XG4gICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzYW5pdHlFcnJvcikge1xuICAgICAgdGhyb3cgc2FuaXR5RXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbik7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgKDAsIF93YXJuaW5nMltcImRlZmF1bHRcIl0pKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBmaW5hbFJlZHVjZXJLZXlzW2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW2tleV07XG4gICAgICB2YXIgcHJldmlvdXNTdGF0ZUZvcktleSA9IHN0YXRlW2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuICAgICAgaWYgKHR5cGVvZiBuZXh0U3RhdGVGb3JLZXkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHZhciBlcnJvck1lc3NhZ2UgPSBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuICAgIHJldHVybiBoYXNDaGFuZ2VkID8gbmV4dFN0YXRlIDogc3RhdGU7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGNvbXBvc2U7XG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICAgIH1cblxuICAgIHZhciBsYXN0ID0gZnVuY3NbZnVuY3MubGVuZ3RoIC0gMV07XG4gICAgdmFyIHJlc3QgPSBmdW5jcy5zbGljZSgwLCAtMSk7XG5cbiAgICByZXR1cm4gcmVzdC5yZWR1Y2VSaWdodChmdW5jdGlvbiAoY29tcG9zZWQsIGYpIHtcbiAgICAgIHJldHVybiBmKGNvbXBvc2VkKTtcbiAgICB9LCBsYXN0LmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gIH07XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb25UeXBlcyA9IHVuZGVmaW5lZDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlU3RvcmU7XG5cbnZhciBfaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgQWN0aW9uVHlwZXMgPSBleHBvcnRzLkFjdGlvblR5cGVzID0ge1xuICBJTklUOiAnQEByZWR1eC9JTklUJ1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW2luaXRpYWxTdGF0ZV0gVGhlIGluaXRpYWwgc3RhdGUuIFlvdSBtYXkgb3B0aW9uYWxseSBzcGVjaWZ5IGl0XG4gKiB0byBoeWRyYXRlIHRoZSBzdGF0ZSBmcm9tIHRoZSBzZXJ2ZXIgaW4gdW5pdmVyc2FsIGFwcHMsIG9yIHRvIHJlc3RvcmUgYVxuICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAqIElmIHlvdSB1c2UgYGNvbWJpbmVSZWR1Y2Vyc2AgdG8gcHJvZHVjZSB0aGUgcm9vdCByZWR1Y2VyIGZ1bmN0aW9uLCB0aGlzIG11c3QgYmVcbiAqIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBjb21iaW5lUmVkdWNlcnNgIGtleXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZW5oYW5jZXIgVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKSB7XG4gIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IGluaXRpYWxTdGF0ZTtcbiAgICBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCEoMCwgX2lzUGxhaW5PYmplY3QyW1wiZGVmYXVsdFwiXSkoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuICBkaXNwYXRjaCh7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZSA9IGV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gZXhwb3J0cy5iaW5kQWN0aW9uQ3JlYXRvcnMgPSBleHBvcnRzLmNvbWJpbmVSZWR1Y2VycyA9IGV4cG9ydHMuY3JlYXRlU3RvcmUgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlU3RvcmUgPSByZXF1aXJlKCcuL2NyZWF0ZVN0b3JlJyk7XG5cbnZhciBfY3JlYXRlU3RvcmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlU3RvcmUpO1xuXG52YXIgX2NvbWJpbmVSZWR1Y2VycyA9IHJlcXVpcmUoJy4vY29tYmluZVJlZHVjZXJzJyk7XG5cbnZhciBfY29tYmluZVJlZHVjZXJzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbWJpbmVSZWR1Y2Vycyk7XG5cbnZhciBfYmluZEFjdGlvbkNyZWF0b3JzID0gcmVxdWlyZSgnLi9iaW5kQWN0aW9uQ3JlYXRvcnMnKTtcblxudmFyIF9iaW5kQWN0aW9uQ3JlYXRvcnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFjdGlvbkNyZWF0b3JzKTtcblxudmFyIF9hcHBseU1pZGRsZXdhcmUgPSByZXF1aXJlKCcuL2FwcGx5TWlkZGxld2FyZScpO1xuXG52YXIgX2FwcGx5TWlkZGxld2FyZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBseU1pZGRsZXdhcmUpO1xuXG52YXIgX2NvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcblxudmFyIF9jb21wb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBvc2UpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCcuL3V0aWxzL3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLypcbiogVGhpcyBpcyBhIGR1bW15IGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHRoZSBmdW5jdGlvbiBuYW1lIGhhcyBiZWVuIGFsdGVyZWQgYnkgbWluaWZpY2F0aW9uLlxuKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4qL1xuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGlzQ3J1c2hlZC5uYW1lID09PSAnc3RyaW5nJyAmJiBpc0NydXNoZWQubmFtZSAhPT0gJ2lzQ3J1c2hlZCcpIHtcbiAgKDAsIF93YXJuaW5nMltcImRlZmF1bHRcIl0pKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0cy5jcmVhdGVTdG9yZSA9IF9jcmVhdGVTdG9yZTJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5jb21iaW5lUmVkdWNlcnMgPSBfY29tYmluZVJlZHVjZXJzMltcImRlZmF1bHRcIl07XG5leHBvcnRzLmJpbmRBY3Rpb25DcmVhdG9ycyA9IF9iaW5kQWN0aW9uQ3JlYXRvcnMyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHMuYXBwbHlNaWRkbGV3YXJlID0gX2FwcGx5TWlkZGxld2FyZTJbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5jb21wb3NlID0gX2NvbXBvc2UyW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHdhcm5pbmc7XG4vKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cbn0iLCIvKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0UHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vKipcbiAqIEdldHMgdGhlIGBbW1Byb3RvdHlwZV1dYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtudWxsfE9iamVjdH0gUmV0dXJucyB0aGUgYFtbUHJvdG90eXBlXV1gLlxuICovXG5mdW5jdGlvbiBnZXRQcm90b3R5cGUodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZUdldFByb3RvdHlwZShPYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gIC8vIE1hbnkgaG9zdCBvYmplY3RzIGFyZSBgT2JqZWN0YCBvYmplY3RzIHRoYXQgY2FuIGNvZXJjZSB0byBzdHJpbmdzXG4gIC8vIGRlc3BpdGUgaGF2aW5nIGltcHJvcGVybHkgZGVmaW5lZCBgdG9TdHJpbmdgIG1ldGhvZHMuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgaWYgKHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nICE9ICdmdW5jdGlvbicpIHtcbiAgICB0cnkge1xuICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSG9zdE9iamVjdDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc0hvc3RPYmplY3QgPSByZXF1aXJlKCcuL19pc0hvc3RPYmplY3QnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHxcbiAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iXX0=
