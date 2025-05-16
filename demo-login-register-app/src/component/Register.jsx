import 'bootstrap/dist/css/bootstrap.min.css'
import {useRef ,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import WebService from '../';
import WebAPI from '../Service/WebAPI';
function Register() {
    const[msg,setMsg] = useState('');
    const navigate = useNavigate()

       var name = useRef();
       var email = useRef(); 
       var password = useRef();
       var contact = useRef();
       var gender = useRef();
       var registerUser = (event)=>{
        event.prevent.Default();
        var nm = name.current.value;
        var em= email.current.value;
        var pass = password.current.value;
        var con = contact.current.value;
        var gen = gender.current.value;

        console.log(`${nm} : ${em} : ${pass} : ${con} : ${gen}`);
          //Create Object
        var obj = {name:nm,phone:con,email:em,password:pass,gender:gen};
        
        var resp = fetch("http://tutorials.codebetter.in:7084/auth/save",
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    //Ensures the server it's JSON
                },
                body:JSON.stringify(obj)
            });
        resp.then(res=>res.json()).then((result)=>{
            console.log("Result is : "+result);
            console.log("TResult is : "+JSON.stringify(result));
            if(result.status == true){
                navigate("/")
                //this function to create a URL or accept Switching URL
            }
            else{
                setMsg("Registration Failed ...")
            }
        })
       }
    return<div className="container">
        <h1 style={{textAlign:'center',color:'red'}}>Register Here !</h1>
        <form onSubmit={registerUser}>
            <div className='form-label'>
                <input type='text' placeholder="Enter Name" ref={name}
                className='form-control'/>
            </div>
            <div className='form-label'>
                <input type='text' placeholder="Enter Email" ref={email}
                className='form-control'/>
            </div>
            <div className='form-label'>
                <input type='text' placeholder="Enter Password" ref={password}
                className='form-control'/>
            </div>
            <div className='form-label'>
                <input type='text' placeholder="Enter Contact" ref={contact}
                className='form-control'/>
            </div>
            <div clasName='form-label'>
                <select ref={gender} className='form-control'>
                 <option value="">
                    Select Gender
                 </option>
                 <option value='Male'>Male</option>
                 <option value='Female'>Female</option>
                </select>
            </div>
            <div className='form-label'>
                <input type='submit' value='Register' 
                className='btn btn-success form-control'/>
            </div>
        </form>
        <h1 style={{textAlign:'center',color:"red"}}>{msg}</h1>
    </div>
    }
export default Register;





