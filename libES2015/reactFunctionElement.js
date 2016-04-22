'use strict';

var ReactElement = require('./reactElement');

class ReactFunctionElement extends ReactElement {
  constructor(reactFunction, properties, children) {
    super(properties, children);

    if (!reactFunction.componentDidMount) { reactFunction.componentDidMount = defaultComponentDidMount; }
    if (!reactFunction.componentWillUnmount) { reactFunction.componentWillUnmount = defaultComponentWillUnmount; }
    if (!reactFunction.getChildContext) { reactFunction.getChildContext = defaultGetChildContext; }

    this.reactFunction = reactFunction;
  }
  
  render(context) {


    return this.reactFunction(this.instance.props, context);
  }

  componentDidMount(context) {


    this.reactFunction(this.instance.props, context);
  }
  
  componentWillUnmount(context) {
    

    this.reactFunction(this.instance.props, context);
  }

  getChildContext() {
    return this.reactFunction.getChildContext();
  }
}

module.exports = ReactFunctionElement;

function defaultComponentDidMount() {}
function defaultComponentWillUnmount() {}
function defaultGetChildContext() { return undefined; }

