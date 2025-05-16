function App8() {
    var show = ()=>{
        alert("Show Function Invoked...")
    }
    return<>
    <button onClick={show}>Click Here !</button>
    <button onDoubleClick={show}>Click here !</button>
    </>
}
export default App8;