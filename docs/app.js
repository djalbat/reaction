'use strict';

var easyUI = require('easyui'),
    Body = easyUI.Body;

var React = require('../lib/react');  ///

class App {
  constructor() {
    var body = new Body();

    var Profile,
        Nav = React.createClass({}),
        nav = <Nav color="blue"><Profile>click</Profile></Nav>;

    body.append(nav);

    var Form = React.createClass({});
        Form.Row = React.createClass({});
        Form.Label = React.createClass({});
        Form.Input = React.createClass({});
    var form = (

        <Form>
          <Form.Row>
            <Form.Label />
            <Form.Input />
          </Form.Row>
        </Form>
    );

    body.append(form);

    var Input = React.createClass({}),
        firstDisabledInput = <Input type="button" disabled />,
        secondDisabledInput = <Input type="button" disabled={true} />,
        firstEnabledInput = <Input type="button" />,
        secondEnabledInput = <Input type="button" disabled={false} />;

    body.append(firstDisabledInput);
    body.append(secondDisabledInput);
    body.append(firstEnabledInput);
    body.append(secondEnabledInput);

    var Person = React.createClass({}),
        person = <Person name={window.isLoggedIn ? window.name : ''} />;

    body.append(person);
  }
}

module.exports = App;
