import 'bootstrap/dist/css/bootstrap.min.css'
function App5() {
    var emp = [{ id: 101, name: "Mahi", salary: 15000, contact: '1234567890' },
    { id: 102, name: "Chiku", salary: 11000, contact: '3334567890' },
    { id: 103, name: "Piku", salary: 7500, contact: '7891564230' },
    { id: 104, name: "Tiku", salary: 8000, contact: '1452307895' },
    { id: 105, name: "Riku", salary: 4800, contact: '4237191896' },
    { id: 106, name: "Golu", salary: 1000, contact: '7418417569' },

    { id: 107, name: "Tolu", salary: 19000, contact: '9755944199' },
    { id: 108, name: "Monu", salary: 9300, contact: '8815898833' },
    { id: 109, name: "Holu", salary: 2300, contact: '9340365363' },
    { id: 110, name: "Shinu", salary: 17000, contact: '9102564108' }
    ]
    return <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>
            Employee Record
        </h1>
        <div className="table-responsive">
            <table className="table table-bordered table-hover table-striped">
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
                    {emp.map((e, index) => {
                        return <tr> 
                            <td>{index + 1}</td>
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
export default App5;