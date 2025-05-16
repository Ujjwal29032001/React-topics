function Show(props) {
    return<>
    <h1>Show Component : {props.ar}</h1>
    {props.ar.map((ele,index)=>{
        return<b>
            {index+1} : {ele} <br/>
        </b>
    })}
    <hr/>
    <h2>
        {props.st.id} : {props.st.name} : {props.st.mobile}
    </h2>
    </>
}
export default Show;