import React, { useState } from 'react';
import Button from './Button';
import calculate from '../logic/calculate';

function MyCalculator() {
  const [obj, setObj] = useState({ total: 0, next: null, operation: null });

  const clickHandler = (event) => {
    const buttonName = event.target.innerHTML;
    const outPut = calculate(obj, buttonName);
    setObj(outPut);
    return outPut;
  };

  const { total, next, operation } = obj;

  return (
    <div className="calc-wrapper">
      <div className="calc-display">
        {total}
        {operation}
        {next}
      </div>
      <div className="calc-row">
        <Button title="AC" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="+/-" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="%" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="÷" cname="cal-btn-special" onClick={clickHandler} />
      </div>
      <div className="calc-row">
        <Button title="7" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="8" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="9" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="x" cname="cal-btn-special" onClick={clickHandler} />
      </div>
      <div className="calc-row">
        <Button title="4" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="5" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="6" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="-" cname="cal-btn-special" onClick={clickHandler} />
      </div>
      <div className="calc-row">
        <Button title="1" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="2" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="3" cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="+" cname="cal-btn-special" onClick={clickHandler} />
      </div>
      <div className="calc-row">
        <Button title="0" cname="cal-btn-double" onClick={clickHandler} />
        <Button title="." cname="cal-btn-normal" onClick={clickHandler} />
        <Button title="=" cname="cal-btn-special" onClick={clickHandler} />
      </div>
    </div>
  );
}

export default MyCalculator;
