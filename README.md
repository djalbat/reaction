# Reaction

An alternative implementation of [React](https://facebook.github.io/react/).

## Why?

For clarity. The code base is tiny compared to React but React's core functionality is nonetheless implemented faithfully, as far as it goes. It led to a greater appreciation of React.

## Reverse Engineering React

There is now a series of complementary videos:

**[Reverse Engineering React](https://vimeo.com/album/3930691)**

#### Errata

- The `toArray()` helper method is now called `guaranteeArray()`.
- The `index` variable in the `indexOf()` helper method is now initially set to `null`.
- The `remount()` method of the `ReactElement` should call the `getChildContext()` method.
- The `libES2015` directories in both the root and `examples` directories have been renamed `es6`.
- Component state has been put back by popular demand.
- The examples have been moved to the `es6` folder.

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

## Functionality that is not supported

- Of the component lifecycle, all methods except `componentDidMount()` and `componentWillUnmount()` are *not* supported.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
