# Reaction

An alternative implementation of [React](https://facebook.github.io/react/).

## Why?

For clarity. The code base is tiny compared to React but React's core functionality is nonetheless implemented faithfully, as far as it goes. It led to a greater appreciation of React. There is now also [Inference](https://github.com/djalbat/Inference) to go hand in hand with Reaction.

If you like Reaction you might like [Reaction with Style](https://github.com/djalbat/reaction-with-style).

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

In order to make use of JSX, you must import the `React` object at the top of the file in question:

```
import { React } from "reaction";

...
```
Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

The `ReactDOM` class is also available:

```
import { ReactDOM } from "reaction";

...
```
You will need to call the `ReactDOM.render(...)` method at least once from somewhere.

## Examples

Launch the `examples.html` file. There is a Redux as well as a vanilla example application.

## Supported functionality

- React components
- React functions
- React classes
- Component state
- References (via the `ref` property)
- Contexts

## Supported lifecycle methods

Of the component lifecycle methods, only these methods are supported:

- `render()`
- `setInitialState()`
- `getChildContext()`
- `componentDidMount()`
- `componentWillUnmount()`

## Additional functionality not supported by React

These methods can be called against any element bar text elements, except for the last two, which can only be called against text elements. The `getTagName()` method will return `null` for all but virtual DOM elements, namely those elements with an underlying DOM element.

- `setAttribute(name, value)`
- `getAttribute(name)`
- `clearAttribute(name)`
- `addAttribute(name, value)`
- `removeAttribute(name)`
- `hasAttribute(name)`
- `setClass(className)`
- `addClass(className)`
- `removeClass(className)`
- `toggleClass(className)`
- `hasClass(className)`
- `hasClasses(classNames)`
- `clearClasses()`
- `getTagName()`
- `setStyle(name, value)`
- `getStyle()`
- `getText()`
- `setText(text)`

## Functionality that is different

There are the following methods to handle state:

- `getState()`
- `setState()`
- `updateState()`

The `setState()` method will set the React element's state to the given state. The `updateState()` method will assign the given state to the element's state, which is more akin to React's `setState()` method. Both will force the component to be remounted.

## Mixins

Mixins are supported for components, whether created by way of extending the `Component` class or by calling the `React.createClass()` method. However, Reaction now supports component methods, in line with React, making mixins redundant in the case of extending the `Component` class. See the subsection immediately below for more details.

When extending the `Component` class you can assign the mixins to the class...
```
class ExampleComponent extends Component {
  ...
}

Object.assign(ExampleComponent, {
  mixins: [
    expand,
    collapse
  ]
});
```
...or, equivalently, use static class fields:
```
class ExampleComponent extends Component {
  static mixins = [
    expand,
    collapse
  ]
}
```
When calling the `React.createClass()` method you should add a `mixin` property to the plain old JavaScript object that you pass in:
```
const exampleComponent = React.createClass({
  ...

  mixins: [
    expand,
    collapse
  ]
});
```
You can safely call mixins from within lifecycle methods and there is nothing wrong with their judicious use.

## Component methods

Reaction now supports component methods, in line with React, making mixins redundant in the case of extending the `Component` class. For example, instead of...
```
class ExampleComponent extends Component {
  static mixins = [
    expand,
    collapse
  ]
}

function expand() {
  ...
}

function collapse() {
  ...
}
```
...the following will do:
```
class ExampleComponent extends Component {
  expand() {
    ...
  }
    
  collapse() {
    ...
  }
}
```
Note that mixins will continue to be supported for backwards compatibility. Note also that component methods can be invoked from mixins by way of the `this` keyword and vice versa.

## Contexts

Contexts are handled slightly differently to React. The default context is an empty plain old JavaScript object `{}` and this is passed down from parent elements to their children *by reference*. If you implement any `getChildContext()` methods, however, it is recommended that you pass down contexts *by value*. To do so, you can make use of `Object.assign()` to effectively clone the context passed in, before amending it and passing it on. Suppose you wish to appraise child elements of their parent element, for example. The parent element's component class might look like the following:
```
class ParentComponent extends Component {
  getChildContext(context) {
    const parentElement = this, ///
          childContext = Object.assign({}, context, {
            parentElement
          });

    return childContext;
  }

  ...
}
```
And the child element's component class might look like the following:
```
class ChildComponent extends Component {
  getChildContext(context) {
    const { parentElement } = context,
          childContext = Object.assign({}, context);

    delete childContext.parentElement;

    return childContext;
  }

  ...
}
```
Passing contexts by value in this way will stop one set of components adversely affecting the contexts of others, so long as unique property names are used.

## Updates

The functionality of the `forceUpdate()` method has recently changed. It now simply calls the `remount()` method and passes on the update it receives as an argument. This impacts updates in the following ways:

* When an element is first mounted, its `render()` method is called without an update.

* When an element's state is changed, its `render()` method is again called without an update.

In either case, because the element is being mounted or re-mounted, the `render()` method should return the element's children. It is perfectly safe to return `null` or `undefined` on occasion, however. In either case the return value will be coerced to an empty array.

Guidance on how to handle updates can be found in the 'Recommended patterns' section at the foot of the Inference readme file.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Acknowledgements

* The SVG tag and attribute names were taken from Titus Wormer's [svg-element-attributes](https://github.com/wooorm/svg-element-attributes) package.

## Contact

- james.smith@djalbat.com
