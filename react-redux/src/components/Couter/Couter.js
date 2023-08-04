import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../action/CouterAction';

const Couter = () => {
   const {count} = useSelector(state => state)
   const dispatch = useDispatch()



   return (
     <div className="border p-3 shadow-md text-center text-lg">
       <span className="text-3xl"> {count} </span>
       <div>
         <button
           onClick={() => dispatch(decrementCounter())}
           className="px-3 py-2 bg-slate-200 hover:bg-slate-400 transition duration-300"
         >
           {" "}
           Decrement{" "}
         </button>
         <button
           onClick={() => dispatch(resetCounter())}
           className="px-3 py-2 bg-slate-200 hover:bg-slate-400 transition duration-300"
         >
           Reset
         </button>
         <button
           onClick={() => dispatch(incrementCounter())}
           className="px-3 py-2 bg-slate-200 hover:bg-slate-400 transition duration-300"
         >
           {" "}
           Increment{" "}
         </button>
       </div>
     </div>
   );
};

export default Couter;