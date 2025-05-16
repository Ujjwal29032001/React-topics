import 'bootstrap/dist/css/bootstrap.min.css'
function App7() 
{
    var emp =
    [{id:101,name:"Mahi",salary:15000,contact:'1234567890'},
     {id:102,name:"Megha",salary:12000,contact:'2345601230'},
     {id:103,name:"Shuntu",salary:1500,contact:'9755944199'},
     {id:104,name:"Nanku",salary:18000,contact:'9340365363'},
     {id:105,name:"Shivam",salary:14000,contact:'9893542513'},
     {id:106,name:"Ujjwal",salary:1200,contact:'8815898833'},
     {id:107,name:"shinu",salary:9500,contact:'9109676366'},
     {id:108,name:"Shmabu",salary:7890,contact:'8225808634'},
     {id:109,name:"Kushagra",salary:7000,contact:"8319187683"},
     {id:110,name:"rohan",salary:7900,contact:"8319198140"} , 
    ]
    var em = emp.filter(obj=>obj.salary<=7000)
    return <div className ="Container">
    <h1 style={{color:'red',textAlign:'center'}}>
        Employee record
        </h1>
        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Salary</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {em.map((e,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.contact}</td>
                            <td>{e.salary}</td>
                            <td>
                                <button className="btn btn-success">Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            </div>
    </div>
}
export default App7;