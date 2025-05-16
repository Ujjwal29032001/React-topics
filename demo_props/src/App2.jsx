import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function App(){
  const[content,setContent] = useState({});
  var getData = ()=>{
    var api = "https://jsonplaceholder.typicode.com/todos/1"
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
        <tr>
          <td>
            {content.id}
          </td>
          <td>{content.userId}</td>
          <td>{content.title}</td>
          <td>{content.Completed}</td>
        </tr>
      </tbody>
    </table>
  </div>
}
export default App;