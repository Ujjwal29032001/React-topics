function Home(props)
{
    return<div>
        <h1 style={{color:'red',textAlign:'center'}}>Home Component Called...</h1>
        <button on Click={props.login}>Login</button>
    </div>
}
export default Home;