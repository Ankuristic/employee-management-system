import React, { useState } from 'react';

function Memo() {
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  function calculateFactorial() {
    let num = parseInt(number);
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    setFactorial(result);
  }

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className='bg-yellow'>
        <h4 className='text-5xl text-center text-red-400 bold'>Factorial Number</h4>
        <h2 className='text-2xl text-center bold'> Enter Number: A </h2>
        <form>
          <label>
            <input
              type="number"
              value={number}
              onChange={handleChange}
              className='border rounded-md px-2 py-1 flex items-center justify-center'
            />
          </label>
          <button onClick={calculateFactorial} type="button" className='border rounded-md bg-orange-400'>
            Calculate Factorial
          </button>
          <p>Factorial: {factorial !== null ? factorial : 'Enter a number and calculate factorial'}</p>
        </form>
      </div>
    </>
  );
}

export default Memo;