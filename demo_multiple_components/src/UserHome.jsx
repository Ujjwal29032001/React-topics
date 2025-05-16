function UserHome(props) {
    return<div>
        <h1 style={{color:'yellowgreen',textAlign:'center'}}>User Home component called...</h1>
        <button onClick={props.logout}>Logout</button>
    </div>
}
export default UserHome;