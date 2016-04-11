'use strict';

var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;

class App {
  constructor() {

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
            <h2>
              {this.props.author}
            </h2>
            {this.props.children}
          </div>
        );
      },
      componentDidMount: function() {
        console.log(this.props.author + '\'s comment mounted')
      }
    });

    var CommentList = React.createClass({
      render: function() {
        var comments = this.props.data.map(function(comment) {
          return (
            <Comment author={comment.author} key={comment.id}>
              {comment.text}
            </Comment>
          );
        });

        return (
          <div className="commentList">
            {comments}
          </div>
        );
      },
      componentDidMount: function() {
        console.log('The comment list component mounted')
      }
    });

    var CommentBox = React.createClass({
      getInitialState: function() {
        var data = [
              {id: 1, author: "Pete Hunt", text: "This is one comment."},
              {id: 2, author: "Joe Winner", text: "This is *another* comment..."},
              {id: 3, author: "Jordan Walker", text: "This is **yet another** comment!"}
            ],
            initialState = {
              data: data
            };

        return initialState;
      },
      render: function() {
        return (
          <div className="commentList">
            <CommentList data={this.state.data}/>
          </div>
        );
      },
      componentDidMount: function() {
        console.log('The comment box component mounted')
      }
    });

    var commentBox = <CommentBox />;

    ReactDOM.render(commentBox, document.getElementsByTagName('body')[0]);
    
    setTimeout(function() {
      var data = [
            {id:4, author: "Billy Wright", text: "This is the last comment for now..."}
          ],
          state = {
            data: data
          };
      
      commentBox.setState(state);
    }, 1000); ///
  }
}

module.exports = App;
