import {Link} from "react-router-dom";
function Login() {
    return<>
    <h1 style={{textAlign:'center',color:'green'}}>Login Components Involved</h1>
    <span>If you have not register ? <Link to="/register">
    Click here !</Link></span>

    </>
}
export default Login;