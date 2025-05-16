import 'bootstrap/dist/css/bootstrap.min.css'
import {useRef,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import WebService from '../Service/WebService';
import WebAPI from '../Service/WebAPI';
function Login(){
    const[msg,setMsg] = useState('')
    const navigate = useNavigate();
    var email = useRef();
    var password = useRef();

    var loginUser=(event)=>{
        event.preventDefault()
        var em = email.current.value;
        var pass = password.current.value;
        console.log(`${em} : ${pass}`);
        var obj = {email:em,password:pass}
        var resp = fetch("http://tutorials.codebetter.in:7084/auth/login",
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json',//Ensures the server knows it's JSON
            },
            body:JSON.stringify(obj)
        });
        resp.then(res=>res.json()).then((result)=>{
            console.log("Result is : "+result);
            console.log("TResult is : "+JSON.stringify(result));
            if(result.status == true) {
                navigate("/userHome")
                //This function to create a URl or accept Switching URl
            }
            else{
                setMsg("Login Failed...")
            }
        })
    }
   return<div className="container">
    <h1 style={{textAlign:'center',color:'red'}}>Register Here !</h1>
    <form onSubmit={loginUser}>
        <div classsName="form-label">
            <input type="text" placeholder='Enter Email' ref={email}
            className='form-control'/>
        </div>
        <div className="form-label">
            <input type='text' placeholder="Enter Password" ref={password}
            className='form-control'/>
        </div>
        <div className='form-label'>
            <input type='submit' value="Login" className='btn btn-success form-control'/>
        </div>

    </form>
    <span> <Link to="/register">Click Here !</Link></span>
     <h1 style={{color:'red',textAlign:'center'}}>{msg}</h1>
   </div>
}
export default Login