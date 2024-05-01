import React, { useState } from 'react';

function Memo() {
    const [number, setNumber] = useState('');

    const handleChange =(e) =>{
        setNumber(e.target.value);

    }
//     const haandleSubmit =(e) =>{
//         e.prevent.Default;
//     }
  return (
    <>
      <div className='bg-yellow'>
        <h4 className='text-5xl text-center text-red-400 bold'>Factorial Number</h4>
      
        <h2 className='text-2xl text-center bold'> Enter Number: A </h2>
        <h2 className='text-2xl text-center bold'> Enter Number: B</h2>
        <form > {/* Attach the handleSubmit function to form submission */}
          <label>
            <input
              type="number" value={number} onChange={handleChange} className='border rounded-md px-2 py-1 flex items-center justify-center' />
            <input
              type="number" value={number} onChange={handleChange} className='border rounded-md px-2 py-1 flex items-center justify-center' />
               <input
              type="number" value={number} onChange={handleChange} className='border rounded-md px-2 py-1 flex items-center justify-center' />
          </label>
          

          <button type="submit"  className='border rounded-md '>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Memo;