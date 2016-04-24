# Reaction

An alternative implementation of React.

#### Why?

The idea is to improve on [React](https://facebook.github.io/react/)'s component lifecycle in order to facilitate better handshaking with [Redux](http://redux.js.org/) and [Falcor](http://netflix.github.io/falcor/).

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

You can also clone the repository with [git](https://git-scm.com/):

    git clone https://github.com/djalbat/Reaction.git

Install the necessary [npm](https://www.npmjs.com/) modules:

    npm install

You will need to do this if you want to have a look at the examples.

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

## Examples

Launch the `examples.html` file in the root folder. There is a Redux as well as a vanilla example application.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build
    npm run watch

## Currently supported functionality

- React classes
- React components
- React components defined as functions
- References
- Contexts
- Mounting and unmounting

Contexts are handled differently, and more simply. React elements cam only pass down a context to child elements, and those child elements can only receive a context, in its entirety. There is no need to define any property types.

## Things that are deliberately not supported

- Component state. Use Redux!
- Of the component lifecycle, all methods except mounting and unmounting.

## Roadmap

- Add an implementation of Redux, possibly,
- and then look at Falcor.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
