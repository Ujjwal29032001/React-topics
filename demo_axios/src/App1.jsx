import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
function App1(){
    const[content,setContent] = useState([]);
    var getData = async()=>{
        var api="https://jsonplaceholder.typicode.com/posts"
        var resp = await axios.get(api);
        console.log("Res is : "+resp);
        console.log("Resp is :"+JSON.stringify(resp));
        setContent(resp.data);
    } 
    return<div className="container">
        <button onClick={getData}>Get Data</button>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
                <th>S.no</th>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {content.map((con,index)=>{
                return<tr>
                    <td>{index+1}</td>
                    <td>{con.id}</td>
                    <td>{con.userId}</td>
                    <td>{con.title}</td>
                    <td>{con.body}</td>
                </tr>
            })}
          </tbody>
        </table>
    </div>
}
export default App1;