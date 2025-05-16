import {useEffect,useState} from "react"
import React from "react"
import axios from "axios"
const AxiosComponent = ()=>{
    const [store, setStore] = useState([])
    const getData = ()=>{
        
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res);
            setStore(res.data)

        }).catch((err)=>{
            console.log(err)
        },[])
    } 

    useEffect(()=>{
        getData()
    },[])
    return<div>
       <h2>Posts</h2>
       <ul>
        {store.map((post)=>(
           <li key={post.id}>{post.title}</li>
        ))}
       </ul>
    </div>
}
export default AxiosComponent