# Reaction

An alternative implementation of React.

## Installation

There is no [npm](https://www.npmjs.com/) package yet. Please use [git](https://git-scm.com/) to install Reaction locally:

    git clone https://github.com/djalbat/Reaction.git

Assuming your own proejct sits alongside the Reaction directory, add the following to your package JSON dependencies:

    "reaction": "../Reaction"

Now you can install Reaction with the usual npm install:

   npm install reaction

## Usage

```js
var reaction = require('reaction'),
    React = reaction.React,
    ReactDOM = reaction.ReactDOM;
```

## Example

The `example.html` file in the `docs` folder contains a script that instantiates and invokes an example application. The `app.js` file can be found in the `docs/libES2015 folder`

## Compiling from source

Install the necessary npm modules...

    npm install

...make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed globally...

    npm install -g grunt-cli

...then build or watch with [grunt](http://gruntjs.com/):

    grunt b
    grunt w

## What's the idea?

To replace Facebook's implementation of React with another.

## What's supported at the moment?

[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) is supported with the `React.createElement(...)` method. Just compile your JSX in the usual way.

- JSX
- The `React.createClass(...)` method
- properties
- initial state, namely the `getInitialState` property of your react class properties
- mounting, namely the `componentDidMount` property of your react class properties

## What's coming up?

- JSX elements can be thought of pretty much as DOM elements, hence the `append()` method. Other methods from [EasyUI](https://github.com/djalbat/EasyUI)'s `Element` class will follow.
- Hooking into [Redux](https://github.com/reactjs/react-redux) is a priority, watch this space.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
