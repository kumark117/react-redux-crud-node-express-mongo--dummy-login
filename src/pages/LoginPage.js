import React from 'react';
import LoginForm from '../components/LoginForm.js';

import { Redirect } from 'react-router';


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      },
      processedForm: false
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    this.setState({processedForm : true });
    console.log('email:', this.state.user.email);
    console.log('password:', this.state.user.password);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
	<div>{
		this.state.processedForm ? <Redirect to="/contacts/list" /> :
      <div>
	<h2>Login Screen</h2>
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
	</div>
	}</div>
    );
  }

}

export default LoginPage;
