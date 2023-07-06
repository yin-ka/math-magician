import React from 'react';
import Button from './Button';

function MyCalculator() {
  return (
    <div className="calc-wrapper">
      <div className="calc-display">0</div>
      <div className="calc-row">
        <Button title="AC" cname="cal-btn-normal" />
        <Button title="+/-" cname="cal-btn-normal" />
        <Button title="%" cname="cal-btn-normal" />
        <Button title="÷" cname="cal-btn-special" />
      </div>
      <div className="calc-row">
        <Button title="7" cname="cal-btn-normal" />
        <Button title="8" cname="cal-btn-normal" />
        <Button title="9" cname="cal-btn-normal" />
        <Button title="×" cname="cal-btn-special" />
      </div>
      <div className="calc-row">
        <Button title="4" cname="cal-btn-normal" />
        <Button title="5" cname="cal-btn-normal" />
        <Button title="6" cname="cal-btn-normal" />
        <Button title="-" cname="cal-btn-special" />
      </div>
      <div className="calc-row">
        <Button title="1" cname="cal-btn-normal" />
        <Button title="2" cname="cal-btn-normal" />
        <Button title="3" cname="cal-btn-normal" />
        <Button title="+" cname="cal-btn-special" />
      </div>
      <div className="calc-row">
        <Button title="0" cname="cal-btn-double" />
        <Button title="." cname="cal-btn-normal" />
        <Button title="=" cname="cal-btn-special" />
      </div>
    </div>
  );
}

export default MyCalculator;
