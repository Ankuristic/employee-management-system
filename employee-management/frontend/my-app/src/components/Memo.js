import React, { useState } from 'react';

function Memo() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [summation, setSummation] = useState(0);

  function calculate() {
    setSummation(parseInt(numberA) + parseInt(numberB)); // Ensure numberA and numberB are treated as numbers
  }

  const handleChangeA = (e) => {
    setNumberA(e.target.value);
  };

  const handleChangeB = (e) => {
    setNumberB(e.target.value);
  };

  return (
    <>
      <div className='bg-yellow'>
        <h4 className='text-5xl text-center text-red-400 bold'>Factorial Number</h4>
        <h2 className='text-2xl text-center bold'> Enter Number: A </h2>
        <h2 className='text-2xl text-center bold'> Enter Number: B</h2>
        <form>
          <label>
            <input
              type="number"
              value={numberA}
              onChange={handleChangeA}
              className='border rounded-md px-2 py-1 flex items-center justify-center'
            />
            <input
              type="number"
              value={numberB}
              onChange={handleChangeB}
              className='border rounded-md px-2 py-1 flex items-center justify-center'
            />
          </label>
          <button onClick={calculate} type="button" className='border rounded-md bg-orange-400'>
            Submit
          </button>
          <p>Summation: {summation}</p>
        </form>
      </div>
    </>
  );
}

export default Memo;