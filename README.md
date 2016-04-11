# Reaction

An alternative implementation of React.

## Installation

There is no [npm](https://www.npmjs.com/) package yet. Please use [git](https://git-scm.com/) to install Reaction locally:

    git clone https://github.com/djalbat/Reaction.git

Assuming your own proejct sits alongside the Reaction directory, add the following to your package JSON dependencies:

    "reaction": "../Reaction"

Now you can install Reaction with the usual npm install:

    npm install

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

Install the necessary npm modules...

    npm install

...make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed globally...

    npm install -g grunt-cli

...then build or watch with [grunt](http://gruntjs.com/):

    grunt b
    grunt w

## Currently supported functionality

- JSX (the `React.createElement(...)` method is implemented)
- The `React.createClass(...)` method
- properties
- initial state, namely the `getInitialState` property of your react class properties
- mounting, namely the `componentDidMount` property of your react class properties

## Roadmap

- Getting state working
- The hooking into [Redux](https://github.com/reactjs/react-redux) is a priority, watch this space.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
