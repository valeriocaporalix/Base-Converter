import React, { useState } from 'react';
import BaseConverter from '../utility/BaseConverter';

const FormCard = () => {
  const [num, setNum] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [toBase, setToBase] = useState(16);
  const [result, setResult] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setResult(BaseConverter(fromBase, num, toBase));
  };

  const resetHandler = () => {
    setResult('');
    setNum('');
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label>Number:</label>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value.toUpperCase())}
          required
        />
        <label>From Base:</label>
        <select onChange={(e) => setFromBase(e.target.value)} defaultValue={10}>
          <option value={2}>{'2 (Binary)'}</option>
          <option value={3}>{'3'}</option>
          <option value={4}>{'4'}</option>
          <option value={5}>{'5'}</option>
          <option value={6}>{'6'}</option>
          <option value={7}>{'7'}</option>
          <option value={8}>{'8 (Octal)'}</option>
          <option value={9}>{'9'}</option>
          <option value={10}>{'10 (Decimal)'}</option>
          <option value={11}>{'11'}</option>
          <option value={12}>{'12'}</option>
          <option value={13}>{'13'}</option>
          <option value={14}>{'14'}</option>
          <option value={15}>{'15'}</option>
          <option value={16}>{'16 (Hex)'}</option>
        </select>
        <label>To Base:</label>
        <select onChange={(e) => setToBase(e.target.value)} defaultValue={16}>
          <option value={2}>{'2 (Binary)'}</option>
          <option value={3}>{'3'}</option>
          <option value={4}>{'4'}</option>
          <option value={5}>{'5'}</option>
          <option value={6}>{'6'}</option>
          <option value={7}>{'7'}</option>
          <option value={8}>{'8 (Octal)'}</option>
          <option value={9}>{'9'}</option>
          <option value={10}>{'10 (Decimal)'}</option>
          <option value={11}>{'11'}</option>
          <option value={12}>{'12'}</option>
          <option value={13}>{'13'}</option>
          <option value={14}>{'14'}</option>
          <option value={15}>{'15'}</option>
          <option value={16}>{'16 (Hex)'}</option>
        </select>
        <div className="btn-wrap">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => resetHandler()}>
            Reset
          </button>
        </div>
      </form>
      <hr />
      <div className="result-container">
        <h4>{result === '' ? 'Result Here' : result}</h4>
      </div>
    </section>
  );
};

export default FormCard;
