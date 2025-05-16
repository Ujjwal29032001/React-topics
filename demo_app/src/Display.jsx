function Display(props) {
    return<>
    <button onClick={props.fun}>Click here !</button>&nbsp;&nbsp;
    <button onClick={()=>props.fun1("Mahi")}>Click Here !</button>
    </>
}