import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('App', () => {
  beforeEach(() => {
    const wrapper = shallow(<App />);
  })
  console.log(wrapper);
})