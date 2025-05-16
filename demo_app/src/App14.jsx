import  {useState} from "react";
function App() {
    const[x,setX] = useState(10)
    var changeData = ()=>{
        setX(100)
    }
    return<>
    <h1>Value of x is :{x}</h1>
    <button onClick={changeData}>ChangeData</button>
    </>
}
export default App;