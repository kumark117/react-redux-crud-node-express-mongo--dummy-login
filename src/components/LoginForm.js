import React, { PropTypes } from 'react';
import { Card, Button  } from 'semantic-ui-react'
//import { Card } from 'material-ui/Card';
//import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
    <form action="/" onSubmit={onSubmit}>

      {errors && errors.summary && <p>{errors.summary}</p>}

      <Card>
	<label>Email:</label>
        <input
          name="email"
	  id="email"
          onChange={onChange}
          value={user && user.email}
        />
      </Card>
      <Card>
	<label>Password:</label>
        <input
          name="password"
	  id="password"
          onChange={onChange}
          value={user && user.password}
        />
      </Card>

        <Button type="submit">Dummy Login</Button> 

    </form>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
