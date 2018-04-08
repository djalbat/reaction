# Reaction

An alternative implementation of [React](https://facebook.github.io/react/).

## Why?

For clarity. The code base is tiny compared to React but React's core functionality is nonetheless implemented faithfully, as far as it goes. It led to a greater appreciation of React. There is now also [Inference](https://github.com/djalbat/Inference) to go hand in hand with Reaction.

## Reverse Engineering React

There is a series of complementary videos:

**[Reverse Engineering React](https://vimeo.com/album/3930691)**

#### Errata

- The `examples.html` file has moved to `examples/index.html`. 
- The `toArray()` helper method is now called `guaranteeArray()`.
- The `index` variable in the `indexOf()` helper method is now initially set to `null`.
- The `remount()` method of the `ReactElement` should call the `getChildContext()` method.
- The `libES2015` directories in both the root and `examples` directories have been renamed `es6`.
- All children can now be arrays of elements, not just the first.
- Component state has been put back by popular demand.
- The examples have been moved to the `es6` folder.
- The helpers file has been replaced with an array utilities file.

These points are not strictly errata but will help to reconcile the current `master` branch with the older `videos` branch:

- In the examples, the static `run()` methods and spurious classes have been replaced with functions.
- The `reduxApp` example can now be [found elsewhere](https://github.com/djalbat/Inference/blob/master/es6/examples/reduxApp.js), split up into separate files and tidied up considerably.
- The dependency on [Redux](https://github.com/reactjs/redux) has been replaced with a [barebones, local implementation](https://github.com/djalbat/Reaction/blob/master/es6/examples/redux.js).
- All instances of `var` have been replaced with either `const` or `let`.
- The `FilterLink` has been made into a `ReactClass` in order to give a usage example.
- The `React.createElement()` method has been further streamlined.
- The element classes have been reorganised, please see the source.
- Support for Inference has been added, again please see the source.
- Contexts are now handled slightly differently. Please see the section below.

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Reaction.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples/index.html` file. There is a Redux as well as a vanilla example application.

## Usage

```js
var reaction = require('reaction'),
    { React, ReactDOM } = reaction;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way, although bear in mind only  subset of React's functionality is supported.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

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

These methods are to add better support for [Inference](https://github.com/djalbat/Inference). They can be called against any element bar text elements, except for the last two, which can only be called against text elements. The `getTagName()` method will return `null` for all but virtual DOM elements, namely those elements with an underlying DOM element.

- `spliceChildren(start, removeCount, addedChildren)`
- `addChild(child)`
- `removeChild(child)`
- `setAttribute(name, value)`
- `getAttribute(name)`
- `clearAttribute(name)`
- `addAttribute(name, value)`
- `removeAttribute(name)`
- `setClass(className)`
- `addClass(className)`
- `removeClass(className)`
- `toggleClass(className)`
- `hasClass(className)`
- `hasClasses(classNames)`
- `clearClasses()`
- `getTagName()`
- `getText()`
- `setText(text)`

## Functionality that is different

There are the following methods to handle state:

- `getState()`
- `setState()`
- `updateState()`

The `setState()` method will set the React element's state to the given state. The `updateState()` method will assign the given state to the element's state, which is more akin to React's `setState()` method. Both will force the component to be remounted.

## Mixins

Mixins are supported for components whether created by way of extending the `Component` class or by calling the `React.createClass()` method. When extending the `Component` class you should assign the mixins to the class itself:
```js
class ExampleComponent extends Component {
  ...
}

const mixins = [
  expand,
  collapse
];

Object.assign(ExampleComponent, {
  mixins: mixins
});
```

When calling the `React.createClass()` method you should add a `mixin` property to the plain old JavaScript object that you pass in:
```js
const mixins = [
  expand,
  collapse
];

const exampleComponent React.createClass({
  ...

  mixins: mixins
});
```
What defines a mixin is that it is bound to the corresponding *element* class and not the component class. This means that you may safely call it from within lifecycle methods, which if not bound to the element class are nonetheless always called against it.

Whilst you should not use mixins to get around the fact that it is not wise to extend component classes, there is nothing wrong with their judicious use. All of the methods listed in the additional functionality section above can be called directly from mixins, for example.

## Contexts

Contexts are handled slightly differently to React. The default context is an empty plain old JavaScript object `{}` and this is passed down from parent elements to their children *by reference*. If you implement a `getChildContext()` methods, however, it is recommended that you contexts *by value*. To do so, you can make use of the native `Object.assign()` function to effectively clone the context passed in, before amending it and passing it on. Suppose you wish to appraise child elements of their parent element, for example. The parent element's component class might look like the following:
```js
class ParentComponent extends Component {
  getChildContext(context) {
    const parentElement = this, ///
          childContext = Object.assign({}, context, {
            parentElement: parentElement
          });

    return childContext;
  }

  ...
}
```
And the child element's component class might look like the following:
```js
class ChildComponent extends Component {
  getChildContext(context) {
    const childContext = Object.assign({}, context);

    delete childContext.parentElement;

    return childContext;
  }

  ...
}
```
Passing contexts by value in this way will stop one set of components adversely affecting the contexts of others, so long as unique property names are used.

## Updates

The functionality of the `forceUpdate()` method has recently changed. Previously, if its `update` argument was defined it would call the `render()` method and pass on the update, otherwise it would call the `remount()` method and not pass on the update. Now, since the `remount()` method itself calls the `render()` method, it was thought best to have the option to also pass it an update so as to give an element the chance to remount itself as a direct consequence of an update. Therefore the `forceUpdate()` method now simply calls the `remount()` method and passes on the update.

To summarise:

* When an element is first mounted, its `render()` method is called without an update.

* When an element's state is changed, its `render()` method is again called without an update.

In either case the `render()` method should return the element's children. However, It is perfectly safe to return `null` or in fact to leave the return value undefined. In either case the return value will be coerced to an empty array.

If you want to change an element as the result of an update you now have two choices:

* If you *do not* want the element to remount itself, call its `render()` method directly with the update.

* If you *do* want the element to remount itself, call the `forceUpdate()` method, but you can now pass the update and this will be passed to the `render()` method during the process of remounting.

Quite how you write your `render()` methods to behave in the presence of an update or otherwise is down to you. Hopefully, however, your choices should now be clearer.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
