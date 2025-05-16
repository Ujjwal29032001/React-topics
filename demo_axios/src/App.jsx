import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
function App() {
  const[content,setContent] = useState({});
  var getData = async()=>{
    var api = "'https://jsonplaceholder.typicode.com/todos/1"
    var resp = await axios.get(api);
    console.log("Resp is :"+resp);
    console.log("Resp is : "+JSON.stringify(resp));
    setContent(resp.data);
  }
  return<div className="container">
    <button onClick={getData}>Get Data</button>
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>User Id</th>
          <th>Title</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{content.id}</td>
          <td>{content.userId}</td>
          <td>{content.title}</td>
         
         
        </tr>
      </tbody>
    </table>
  </div>
} 
export default App;