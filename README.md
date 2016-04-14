# Reaction

An alternative implementation of React.

#### But why?!

The idea is to improve on [React](https://facebook.github.io/react/)'s component lifecycle with a view to better handshaking with solutions like [Redux](http://redux.js.org/) and [Falcor](http://netflix.github.io/falcor/), though it's early days yet. [Deku](https://github.com/dekujs/deku) are doing much the same.

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

## Example

The `example.html` file in the `docs` folder contains a script that instantiates and invokes an example application. The relevant `app.js` file can be found in the `docs/libES2015` folder.

## Compiling from source

Clone the repository with [git](https://git-scm.com/):

    git clone https://github.com/djalbat/Reaction.git

Install the necessary npm modules...

    npm install

...make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed globally...

    npm install -g grunt-cli

...then build or watch with [grunt](http://gruntjs.com/):

    grunt b
    grunt w

## Currently supported functionality

- `React.createElement`
- `React.createClass`
- `ReactDOM.render`
- `setState` on JSX elements

These properties can be passed to the `React.createClass` method:

- getInitialState
- render

## Roadmap

- Hooking into [Redux](https://github.com/reactjs/react-redux) is a priority, watch this space.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
