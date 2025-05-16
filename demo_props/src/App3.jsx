import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
  const[content,setContent] = useState([]);
  var getData = ()=>{
    var api = "https://jsonplaceholder.typicode.com/todos"
    var result = fetch(api); //Fetch Function to return Promise Object
    console.log("Result is : "+result); 
    console.log("Result is : "+JSON.stringify(result));

    result.then(res=>res.json()).then((data)=>{
      console.log("Data is : "+JSON.stringify(data))
      setContent(data);
    }).catch(err=>{
      console.log("Error is : "+err);
    })
  }
  return<div className="container">
    <button onClick={getData}>Get Data</button>
    
    <table className="<table table-bordered table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          <th>Completed</th>


          
        </tr>
      </thead>
      <tbody>
        {content.map((con,index)=>
        {
            return<tr>
            <td>{index+1}</td>
         <td>
           {con.id}
         </td>
         <td>{con.userId}</td>
         <td>{con.title}</td>
         <td>{con.completed}</td>
       </tr>
    }  )}
       
      </tbody>
    </table>
  </div>
}
export default App;