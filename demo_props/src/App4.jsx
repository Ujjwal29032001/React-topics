import {useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
function App2() {
    const[content,setContent] = useState([]);

    useEffect(()=>{
        getData();
    },[])
    var getData=()=>{
        var api = "https://jsonplaceholder.typicode.com/comments"
        var result = fetch(api); //fetch function to return promise object
        console.log("Result is : "+result);
        console.log("Result is : "+JSON.stringify(result));

        result.then(res=>res.json()).then((data)=>{
            console.log("Data is :"+JSON.stringify(data))
            setContent(data);
        }).catch(err=>{
            console.log("Error is :"+err)
        })
    }
    return<div className="container">
        <table className= "table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                <tbody>
                    <tr>
                        <th>{content.id}</th>
                        <th>{content.userId}</th>
                        <th>{content.Title}</th>
                        <th>{content.completed}</th>
                    </tr>
                </tbody>
            </thead>
        </table>
    </div>

}

export default App2;