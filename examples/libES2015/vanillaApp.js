'use strict';

const reaction = require('../../index'),
      ReactDOM = reaction.ReactDOM,
      React = reaction.React;

const Component = React.Component;

class VanillaApp {
  static run() {

    class A extends Component {
      render() {
        return (

          <a onClick={() => {
                       this.forceUpdate();
                     }}
          >
            a
          </a>
        );
      }
    }

    const B = () => (

      <b>
        b
      </b>
    );

    const rootDOMElement = document.getElementById('root');

    ReactDOM.render(
      <p>
        <A />
        <B />
      </p>,
      rootDOMElement
    );
  }
}

module.exports = VanillaApp;
