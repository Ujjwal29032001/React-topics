import React , {useState} from 'react';
function Counter(){
  const[count, setCount] = useState(0)
  const increment = ()=>{
    setCount(count + 1);
  }
  const decrement = ()=>{
    setCount(count - 1);
  }
  const reset = ()=>{
    setCount(0);
  }
  return<div className="counter-container">
         <div className="count-display">{count}</div>
         <button clasName="counter-button" onClick={decrement}>Decrement</button>
         <button clasName="counter-button" onClick={reset}>reset</button>
         <button clasName="counter-button" onClick={increment}>Increment</button>
  </div>
}
export default Counter