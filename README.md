# Reaction

An alternative implementation of React.

#### Why?

The idea is to improve on [React](https://facebook.github.io/react/)'s component lifecycle in order to facilitate better handshaking with [Redux](http://redux.js.org/) and [Falcor](http://netflix.github.io/falcor/). [Deku](https://github.com/dekujs/deku) are doing much the same thing.

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

Launch the `examples.html` file in the `docs` folder. There is now a Redux as well as a vanilla example application.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build
    npm run watch

## Currently supported functionality

- `React.createElement`,
- `React.createClass`,
- `ReactDOM.render`,
- `setState`,
- `ref` attributes on JSX elements,
- React components,
- React's new function syntax for components. See the Redux example application.

These properties can be passed to the `React.createClass` method:

- render
- getInitialState
- componentDidMount

## Roadmap

- Remove the dependency on EasyUI and manipulate the DOM directly instead,
- fix the flattening of the child element tree and text with the vanilla application,
- add support for contexts,
- add an implementation of Redux, possibliy,
- then look at Falcor.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
