function App9() {
    var x =10;
    var y =20;
    var add = ()=>{
        var z = x+y;
        alert("value of z is : "+z);
    }
    return<>
    <button onClick={add}>Click here !</button>&nbsp;&nbsp;
    <button onDoubleClick={add}>Click Here !</button>
      </>
}
export default App9;