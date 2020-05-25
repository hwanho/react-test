import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '테스트',
  'birthday': '910503',
  'gender': '남자',
  'job': '백수'
} 

function App() {
  return (
    <Customer 
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
