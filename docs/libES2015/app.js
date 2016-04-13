'use strict';

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class App {
  constructor() {

    var bodyDOMElement = document.getElementsByTagName('body')[0];

    // var Profile,
    //     Nav = React.createClass({}),
    //     nav = <Nav color="blue"><Profile>click</Profile></Nav>;
    //
    // body.append(nav);

    // var Form = React.createClass({});
    //     Form.Row = React.createClass({});
    //     Form.Label = React.createClass({});
    //     Form.Input = React.createClass({});
    // var form = (
    //
    //     <Form>
    //       {/* It's okay to put comments in here as long as you enclose them in curly braces. */}
    //       <Form.Row /* Comments in here
    //                    on the other hand
    //                    are fine without
    //                    curly braces. */>
    //         <Form.Label />
    //         <Form.Input />
    //       </Form.Row>
    //     </Form>
    // );
    //
    // body.append(form);

    // var Input = React.createClass({}),
    //     firstDisabledInput = <Input type="button" disabled />,
    //     secondDisabledInput = <Input type="button" disabled={true} />,
    //     firstEnabledInput = <Input type="button" />,
    //     secondEnabledInput = <Input type="button" disabled={false} />;
    //
    // body.append(firstDisabledInput);
    // body.append(secondDisabledInput);
    // body.append(firstEnabledInput);
    // body.append(secondEnabledInput);

    // var Person = React.createClass({}),
    //     person = <Person name={window.isLoggedIn ? window.name : ''} />;
    //
    // body.append(person);

    // var Nav = React.createClass({}),
    //     Login = React.createClass({}),
    //     Container = React.createClass({}),
    //     container = <Container>{!window.isLoggedIn ? <Nav /> : <Login />}</Container>;
    //
    // body.append(container);

    var Comment = React.createClass({
      render: function() {
        return (

          <div className="comment">
            <p>
              {this.props.message}
            </p>
          </div>
        );
      }
    });

    var CommentsList = React.createClass({
      getInitialState: function() {
        var messages = [
              "Hello, world!",
              "Hello world again..."
            ],
            initialState = {
              messages: messages
            };

        return initialState;
      },
      render: function() {
        var comments = this.state.messages.map(function(message) {
          return <Comment message={message} />;
        });

        return (

          <div className="commentsList">
            {comments}
          </div>
        );
      }
    });

    var commentsList = <CommentsList />;

    ReactDOM.render(commentsList, bodyDOMElement);

    var messages = [
          "Hello world yet again!!!"
        ],
        state = {
          messages: messages
        };

    setTimeout(function() {
      commentsList.setState(state);
    }, 1000); ///
  }
}

module.exports = App;

