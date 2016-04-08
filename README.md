# Reaction

An alternative implementation of React.

## Installation

There is no [npm](https://www.npmjs.com/) package yet. Please use [git](https://git-scm.com/):

    git clone https://github.com/djalbat/Reaction.git

Launch the `example.html` file in the `docs` folder. This references the `example.js` file which loads the browserified distribution file and invokes the example app, such as it is. This indirection is because the `app.js` file contains [JSX](https://facebook.github.io/jsx/) and so needs to be built along with the library files for now.

## Usage

To compile this, install the necessary npm modules...

    npm install

...make sure you have [grunt-cli](http://gruntjs.com/getting-started) installed globally...

    npm install -g grunt-cli

...then build or watch with [grunt](http://gruntjs.com/):

    grunt b
    grunt w

There is a working example in the `app.js` file in the `lib` directory, remember.

#### What's the idea?

To replace Facebook's implementation of React with another. You can create what are called JSX elements directly using the constructor of the `JSXElement` class or you can use the `React.createClass(...)` method and JSX in the usual way:

```js
var body = new JSXElement('body');  ///

var Nav = React.createClass({}),
    nav = <Nav className="mainNavigation">...</Nav>;

body.append(nav);
```

There is no need to use, and no support for, the `ReactDOM.render(...)` method. Just append JSX elements directly to each other.

#### What's supported at the moment?

Apart from JSX and the `React.createClass(...)` method, properties and initial state, plus mounting.

#### What's coming up?

- JSX elements can be thought of pretty much as DOM elements, hence the `append()` method. Other methods from [EasyUI](https://github.com/djalbat/EasyUI)'s `Element` class will follow.
- Hooking into [Redux](https://github.com/reactjs/react-redux) is a priority, watch this space.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
