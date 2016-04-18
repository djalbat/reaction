# Reaction

An alternative implementation of React.

#### But why?

The idea is to improve on [React](https://facebook.github.io/react/)'s component lifecycle in order to facilitate better handshaking with [Redux](http://redux.js.org/) and [Falcor](http://netflix.github.io/falcor/), though it's early days yet. [Deku](https://github.com/dekujs/deku) are doing much the same thing.

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

## Examples

Launch the `examples.html` file in the `docs` folder.

## Compiling from source

Clone the repository with [git](https://git-scm.com/):

    git clone https://github.com/djalbat/Reaction.git

Install the necessary npm modules...

    npm install

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts). Have a look at the package JSON file. The pertinent commands are:

    npm run build
    npm run watch

## Currently supported functionality

- `React.createElement`
- `React.createClass`
- `ReactDOM.render`
- `setState` on JSX elements

These properties can be passed to the `React.createClass` method:

- render
- getInitialState
- componentDidMount

## Roadmap

- Add support for componentDidMount to functional components if necessary.
- Hooking into [Redux](https://github.com/reactjs/react-redux) is a priority. This is now underway.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
