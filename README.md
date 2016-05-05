# Reaction

An alternative implementation of React.

#### Why?

For clarity. The code base is tiny compared to [React](https://facebook.github.io/react/) but React's core functionality is nonetheless implemented faithfully. It lead to a greater appreciation of React.

There is now a series of videos to complement the Reaction repo:

**[Reverse Engineering React](https://vimeo.com/album/3930691)**

#### Errata

- The `toArray()` helper method is now called `guaranteeArray()`.
- The `index` variable in the `indexOf()` helper method is now initially set to `null`.

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way, although bear in mind only  subset of React's functionality is supported.

You can also clone the repository with [git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Reaction.git

...then install the necessary modules with [npm](https://www.npmjs.com/):

    npm install

You will need to do this if you want to look at the examples.

## Examples

Launch the `examples.html` file in the root folder. There is a Redux as well as a vanilla example application.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build
    npm run watch

## Supported functionality

- React classes
- React components
- React functions
- References
- Contexts
- Mounting and unmounting

Contexts are handled differently. React elements can only pass down a context to child elements, and those child elements can only receive a context, in its entirety. However, the current context is available as `this.context` when the `getChildContext()` method is invoked, or passed as the second argument of the `getChildContext()` method in the case of functions, so you can make programmatic decisions about what context to pass down to children.

## Functionality that is not supported

- Component state. Use Redux!
- Of the component lifecycle, all methods except `componentDidMount()` and `componentWillUnmount()` are *not* supported.

#### If you want stateful components

```js
var StatefulComponent extends Component {
    constructor (state) {
        super();

        this.state = state;
    }

    setState(state) {
        this.state = state;

        this.remount(); /// or this.forceUpdate() if you prefer
    }
}
```

Or something very close to this.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
