import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import LoginPage from './LoginPage';
import LoginForm from '../components/LoginForm';

import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() });


it('renders welcome message', () => {
  const wrapper = shallow(<LoginPage/>);
  const welcome = <h2>Login Screen</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders email input field', () => {
  const wrapper = render(<LoginForm />);
  expect(wrapper.find('#email')[0].attribs.id).toEqual("email");
});


it('renders password', () => {
  const wrapper = render(<LoginForm />);
  expect(wrapper.find('#password')[0].attribs.id).toEqual("password");
});
