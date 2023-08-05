import React from 'react';

const CounterView = () => {
   return (
      <div className='flex items-center justify-center '>
         <h1> Counter App </h1>

         <div className='p-5 border text-center'>

            <span> 0 </span>

            <div className='flex gap-3'>
               <button className='px-5 py-3 transition duration-300 hover:bg-slate-400 bg-slate-2'> Decrement </button>
               <button className='px-5 py-3 transition duration-300 hover:bg-slate-400 bg-slate-2'> Reset </button>
               <button className='px-5 py-3 transition duration-300 hover:bg-slate-400 bg-slate-2'> Increment </button>
            </div>
         </div>
      </div>
   );
};

export default CounterView;