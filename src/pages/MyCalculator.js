import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/MyCalculator.css';

function MyCalculator() {
  return (
    <div className="container-calc">
      <h4 className="message">Let&apos;s do some math!</h4>
      <Calculator />
    </div>
  );
}

export default MyCalculator;
