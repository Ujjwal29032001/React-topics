function App2(){
    var std = {id:'101',name:'Shinu',fees:'1234.45',mobile:'1234567890'}
    return<div>
        <h1 style={{color:'green',background:'yellow',textAlign:'center'}}>
          App2 Component Called...
        </h1>
        <h2>Student Id is :{std.id}</h2>
        <h2>Student name is : {std.name}</h2>
        <h2>Student fees is : {std.fees}</h2>
        <h2>Student contact is : {std.mobile}</h2>
    </div>
}
export default App2;