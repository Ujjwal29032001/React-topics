
import {useState } from "react";
import UserHome from "./UserHome";
import Home from "./Home";
function App() {
    const[status,setStatus] = useState(false)

    const handleLogin = ()=>{
        setStatus (true);
    }
    const handleLogout=()=>{
        setStatus  (false);
    }
    return (<div>
        {(status == true) ?
        <UserHome logout={handleLogout}/> : <Home login={handleLogin}/> }

        </div>
    )
}
export default App;