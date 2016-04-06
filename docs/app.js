'use strict';

var easyUI = require('easyui'),
    Body = easyUI.Body;

var React = require('../lib/react');  ///

class App {
  constructor() {
    var body = new Body();
    
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

    // var CommentList = React.createClass({
    //   render: function() {
    //     return (
    //         <div className="commentList">
    //           Hello, world! I am a CommentList.
    //         </div>
    //     );
    //   }
    // });
    //
    // var CommentForm = React.createClass({
    //   render: function() {
    //     return (
    //         <div className="commentForm">
    //           Hello, world! I am a CommentForm.
    //         </div>
    //     );
    //   }
    // });
    //
    // var CommentBox = React.createClass({
    //   render: function() {
    //     return (
    //         <div className="commentBox">
    //           <h1>Comments</h1>
    //           <CommentList />
    //           <CommentForm />
    //         </div>
    //     );
    //   }
    // });
    //
    // var commentBox = <CommentBox />;
    //
    // body.append(commentBox);

    // var Comment = React.createClass({
    //   render: function() {
    //     return (
    //         <div className="comment">
    //           {this.props.author}
    //         </div>
    //     );
    //   }
    // });
    //
    // var comment = <Comment author="James Smith"/>;
    //
    // body.append(comment);

    var Comment = React.createClass({
      render: function() {
        return (
            <div className="comment">
              <h2 className="commentAuthor">
                {this.props.author}
              </h2>
            </div>
        );
      }
    });

    var comment = <Comment author="James Smith" />;

    body.append(comment);
  }
}

module.exports = App;
