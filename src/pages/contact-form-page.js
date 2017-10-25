import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newContact, saveContact, fetchContact, updateContact } from '../actions/contact-actions';
import ContactForm from '../components/contact-form';
import { NavLink } from 'react-router-dom';


class ContactFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { _id } = this.props.match.params;
    if(_id){
      this.props.fetchContact(_id)
    } else {
      this.props.newContact();
    }
  }

  submit = (contact) => {
    if(!contact._id) {
      return this.props.saveContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/contacts/list">Contacts List</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/contacts/new">Add Contact</NavLink>
        </div>
        {
          this.state.redirect ?
          <Redirect to="/contacts/list" /> :
          <ContactForm contact={this.props.contact} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newContact, saveContact, fetchContact, updateContact})(ContactFormPage);
