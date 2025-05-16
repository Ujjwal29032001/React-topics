 //import { useState } from "react";
import Customhooks from "./Customhooks";
function App() {
    const obj = Customhooks()
    console.log(obj);
    console.log(typeof obj);
    return <div>
        <h1 style={{color:"red",textAlign:"center"}}>Incr/Decr</h1>
        <h1>Value of Count : {obj.count}</h1>
        <h1>Value of Count-1 : {obj.count1}</h1>
       

        <button onClick={obj.handleIncrement}>Increment</button>&nbsp;&nbsp;
        <button onClick={obj.handleDecrement}>Decrement</button>&nbsp;&nbsp;
         </div>
}
export default App;