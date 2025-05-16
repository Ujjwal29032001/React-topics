import 'bootstrap/dist/css/bootstrap.min.css'
import {useRef,useState} from 'react';
function App(){
    const [emp, setEmp] = useState([]);
    const [cid,setCheckCid] = useState(false);
    var id = useRef();
    var name = useRef();
    var email = useRef();
    var contact = useRef();
    var bonus = useRef();
    var salary = useRef();
    var jdate = useRef();
    var dept = useRef();
    var exp = useRef();

    var addEmployee = ()=>{
        //Data fetch from ref variable
        var e_id = id.current.value*1;
        var e_name = name.current.value;
        var e_email = email.current.value;
        var e_contact = contact.current.value;
        var e_bonus = bonus.current.value;
        var e_salary = salary.current.value*1;
        var e_jdate = jdate.current.value;
        var e_dept = dept.current.value;
        var e_exp = exp.current.value;

        //Create Object
        var obj = {eid:e_id,ename:e_name,eemail:e_email,emobile:e_contact,esalary:e_salary,ebonus:e_bonus,edept:e_dept,ejdate:e_jdate,eexp:e_exp}
         setEmp([...emp,obj]);       
         clearFields();
    }
    var clearFields=()=>{
        id.current.value ="";
        name.current.value="";
        email.current.value="";
        contact.current.value="";
        bonus.current.value="";
        salary.current.value="";
        jdate.current.value="";
        dept.current.value="";
        exp.current.value="";
    }
    var checkId = (event)=>{
        console.log(event.target.value)
        var check_id = event.target.value
        for(let em of emp) 
            console.log(em)
            if(em.eid == check_id) {
                console.log(em.eid+" : "+check_id);
                setCheckCid(true);
            }
        }
    }
    return<div className="container">
        <h1 className="text-center text_success">Enter Employee Record's</h1>
        <div className="row mt-3">
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee Id" ref={id} onBlur={checkId}
                onFocus={()=>setCheckCid(false)} className='form-control'/>

            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee Name" ref={name} className='form-control'/>
            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee Email" ref={email} className='form-control'/>
            </div>
        </div>
        <div className="row">
            <div className='çol-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee contact" ref={contact} className='form-control'/>
            </div>
            <div className='col-md-4 mb-3'>
                <input type ="text" placeholder="Enter Employee salary" ref={salary} className = 'form-control'/>
            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter employee bonus" ref={bonus} className='form-control'/>
            </div>
        </div>
        <div className="row">
            <div className='col-md-4 mb-3'>
                <select className='form-control' ref={dept}>
                    <option value=''>Select Department</option>
                    <option value='admin'>Admin</option>
                    <option value="hr">HR</option>
                    <option value="enq">Enquiry</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                </select>
            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee Joining Date" ref={jdate} className='form-control'/>
            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Enter Employee Exp" ref={exp} className='form-control'/>
            </div>
        </div>
        <div className="row">
            <div className='col-md-6 mb-3'>
                {(cid===false) ?
                <input type="button" className='btn btn-success form-control' value="Add Employee" on Click={addEmployee}/>
                :
                <h1 style={{color:'red'}}>* Id is Already Exists</h1>
                }
            </div>
        </div>
        <div className="row">
            <div className='col-md-6 mb-3'>
                <input type="button" className='btn btn-success form-control' value="Add Employee" onClick={addEmployee}/>
            </div>
        </div>
        <hr/>
        <h1 className="text-center text-danger">Show Employee Record's</h1>
        <div className='table-responsive'>
            <table className='table table-bordered table-hover table-striped'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>contact</th>
                        <th>Exp</th>
                        <th>Join date</th>
                        <th>Dept</th>
                        <th>Salary</th>
                        <th>bonus %</th>
                        <th>Total Salary</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                 {emp.map((e,index)=>{
                      return<tr>
                        <td>{index+1}</td>
                        <td>{e.eid}</td>
                        <td>{e.ename}</td>
                        <td>{e.eemail}</td>
                        <td>{e.emobile}</td>
                        <td>{e.eexp}</td>
                        <td>{e.ejdate}</td>
                        <td>{e.edept}</td>
                        
                        <td>{e.esalary}</td>
                        <td>{e.ebonus} %</td>
                        <td></td>
                        <td>
                            <button className='btn btn-success'>Edit</button>&nbsp;&nbsp;
                               ||
                               &nbsp;&nbsp;
                               <button className='btn btn-danger'>Delete</button>
                        </td>
                      </tr>
                 })}   
                </tbody>
            </table>
        </div>
    </div>
}
export default App;