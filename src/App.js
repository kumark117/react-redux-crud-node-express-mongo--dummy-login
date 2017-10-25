import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Container>
	<BrowserRouter>
	<div>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/contacts/list" component={ContactListPage}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
        <Route path="/contacts/edit/:_id" component={ContactFormPage}/>
	</div>
	</BrowserRouter>
      </Container>
    );
  }
}

export default App;
