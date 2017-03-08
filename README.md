# Reaction

An alternative implementation of [React](https://facebook.github.io/react/).

## Why?

For clarity. The code base is tiny compared to React but React's core functionality is nonetheless implemented faithfully, as far as it goes. It led to a greater appreciation of React. There is also [Inference](https://github.com/djalbat/Inference) to go hand in hand with Reaction.

## Reverse Engineering React

There is a series of complementary videos:

**[Reverse Engineering React](https://vimeo.com/album/3930691)**

#### Errata

- The `toArray()` helper method is now called `guaranteeArray()`.
- The `index` variable in the `indexOf()` helper method is now initially set to `null`.
- The `remount()` method of the `ReactElement` should call the `getChildContext()` method.
- The `libES2015` directories in both the root and `examples` directories have been renamed `es6`.
- All children can now be arrays of elements, not just the first.
- Component state has been put back by popular demand.
- The examples have been moved to the `es6` folder.

These points are not strictly errata but will help to reconcile the current version with the one in ithe `videos` branch:

- In the examples, the static `run()` methods and spurious classes have been replaced with functions.
- The `reduxApp` example can now be [found elsewhere](https://github.com/djalbat/Inference/blob/master/es6/examples/reduxApp.js), split up into separate files and tidied up considerably.
- The dependency on [Redux](https://github.com/reactjs/redux) has been replaced with a [barebones, local implementation](https://github.com/djalbat/Reaction/blob/master/es6/examples/redux.js).
- All instances of `var` have been replaced with either `const` or `let`.
- The `FilterLink` has been made into a `ReactClass` in order to give a usage example.
- The `React.createElement()` method has been further streamlined.
- The element classes have been reorganised, please see the source.

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Reaction.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples.html` file in the project's root directory. There is a Redux as well as a vanilla example application.

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way, although bear in mind only  subset of React's functionality is supported.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Supported functionality

- React classes
- React components
- React functions
- References
- Contexts
- Mounting and unmounting

Contexts are handled slightly differently. React elements can only pass down a context to child elements, and those child elements can only receive a context, in its entirety. However, the current context is available as `this.context` when the `getChildContext()` method is invoked, or passed as the second argument of the `getChildContext()` method in the case of functions, so you can make programmatic decisions about what context to pass down to children.

Functional components are entirely stateless in the sense that any `getInitialState()` method defined on the function in question is ignored. Similarly any `getChildContext()` method is ignored. However, such functions are passed two arguments, namely `props` *and* `context`, the latter being the child context of the parent element, if any.

## Functionality that is not supported

- Of the component lifecycle, all methods except `componentDidMount()` and `componentWillUnmount()` are *not* supported.

## Additional functionality not supported by React

This methods are meant to be used hand in hand with [Inference](https://github.com/djalbat/Inference). They can be called against any element bar text elements, except for the last two, which can only be called against text elements. The `getTagName()` method will return `undefined` for all but virtual DOM elements.

- `spliceChildren(start, removeCount, addedChildren)`
- `addChild(child)`
- `removeChild(child)`
- `setAttribute(name, value)`
- `getAttribute(name)`
- `clearAttribute(name)`
- `setClass(className)`
- `addClass(className)`
- `removeClass(className)`
- `toggleClass(className)`
- `hasClass(className)`
- `clearClasses()`
= `getTagName()`
- `getText()`
- `setText(text)`

Note that the `forceUpdate()` method now takes an `update` argument for better integration with Inference. If the `update` argument is undefined, the element is remounted as usual. Otherwise, the element's render method is called and is passed the `update` argument.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
