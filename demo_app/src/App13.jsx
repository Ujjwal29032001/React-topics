//import { useState } from "react";
//import Show from "./Show";

//function App(props) {
  //  const[arr,setArr] = useState([11,22,33,44,55]);
   // //const[std,setStd] = useState({id:101,name:'Chiku',mobile:'1234567890'})
   // return<div>
  //  <h1>App Component:{props.name}:{props.email}</h1>
   // <Show ar={arr} st={std}/>
//</div>
//}
//export default App;

import Display from "./Display";
function App1() {
    const display = ()=>{
        alert("Display Invoked : ")
    }
    const test = (data)=>{
        alert("Data is : "+data);
    }
    return<div>
        <h1>App component :</h1>
        <Display fun={display} fun1={test}/>
    </div>
}
export default App1;