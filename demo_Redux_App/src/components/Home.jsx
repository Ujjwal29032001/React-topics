import {useSelector} from "react-redux";
function Home()
{
    const data = useSelector(state=>state.userData.value);
    console.log(data);
    console.log(typeof data);

    return<div style={{textAlign:'center'}}>
        <h1>Home Component Invoked :</h1>
        {data.map((name)=><b>{name}</b>)}
    </div>
}
export default Home;