import {useState} from "react";
function App() {
    const[count,setCount] = useState(100)
    const[count1,setCount1] = useState(1000)
    
    const  handleIncrement = ()=>{
        setCount(count+5)
    }
    const handleDecrement = ()=>{
        setCount1(count1-3);
    }
    return<div>
    <h1 style={{color:'red',textAlign:'center'}}>Incr/Decr App</h1>
    <h1>Value of Count : {count}</h1>
    <h1>Value of Count-1 : {count1}</h1>

    <button onClick={handleIncrement}>Increment</button>&nbsp;&nbsp;
    <button onClick={handleDecrement}>Decrement</button>&nbsp;&nbsp;
</div>
}
export default App;