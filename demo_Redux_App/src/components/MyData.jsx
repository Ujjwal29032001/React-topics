import { useRef } from "react";
import {useDispatch} from "react-redux";
import {addUserName,removeUserName} from "../redux/slice";

function MyData()
{
    var name = useRef();
    const dispatch = useDispatch();

    const addName = ()=>{
        var nm = name.current.value;
        dispatch(addUserName(nm));
    }
    const removeName=()=>{
        var nm = name.current.value;
        dispatch(removeUserName(nm));
    }
    return<div style={{textAlign:'center'}}>
         <h1>Add and Remove Name</h1>
         <input type="text" placeholder="Enter Name" ref={name}/>
         &nbsp;&nbsp;
         <button onClick={addName}>Add Name</button>
         &nbsp;&nbsp;
         <button onClick={removeName}>remove Name</button>
         &nbsp;&nbsp;

    </div>
}
export default MyData