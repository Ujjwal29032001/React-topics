function Show(props) {
    return<div>
        <h1>Show Component : {props.ar}</h1>
        {props.ar.map((ele,index)=>{
            return<b>
                {index+1} : {ele} <br/>
                </b>
        })}
    </div>
}
export default Show;