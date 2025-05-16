import React, { useState ,useEffect} from 'react';
// function MyComponent() {
//     const [name, setName] = useState("JAI BADRINATH");
//     const [age, setAge] = useState(0);
//     const [isEmployed, setIsEmployed] = useState(0);

//     const updateName = () => {
//         setName("JAI SHREE MAHAKAAl");
//     }

    // const incrementAge = () => {
    //     setAge(age + 2);
    // }
    // const toggleEmployedStatus = ()=>{
    //     setIsEmployed(!isEmployed);
    // }
    // return <div>
    //     <p>Name :{name}</p>
    //     <button onClick={updateName}>Set Name</button>

    //     <p>Age : {age}</p>
    //     <button onClick={incrementAge}>Increment Age</button>

//         <p>IsEmployed : {isEmployed ? "YES" : "No"}</p>
//         <button onClick={toggleEmployedStatus}>Toggle Status </button>
//         </div >;
// }
//         export default MyComponent;
// useEffect (function,[dependencies])
// 1.useEffect(() =>{}) runs after every re-render 
// 2.useEffect(()=>{}) runs only on mount 
// 3. useEffect(()=>{}) runs on mount + when value changes
function MyComponent() {
    // const [count,setCount] = useState(0);
    // const [color,setColor] = useState("green");

    // useEffect(() =>{
    //     document.title = `Count: ${count} ${color}`;
    // }, [count,color]);
    // function addCount(){
    //     setCount(c => c+1);
    // }

    // // function subtractCount(){
    //     setCount(c => c-1);
    // }
    // function changeColor() {
    //     setColor(c => c === "green" ? "red" : "green")
    // }
    // return( <>
    // <p style={{color : color}}>Count : {count}</p>
    // <p>Count : {count}</p>
    // <button onClick={addCount}>Add</button>
    // <button onClick={subtractCount}>Subtract</button>
    // <button onClick={changeColor}>Change Color</button>
    // </>

    // )
    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);
    useEffect(()=>{
    window.addEventListener("resize",handleResize);
    console.log("Event Listener ADDDED");
    return()=>{
        window.removeEventListener("resize",handleResize);
        console.log("EVENT LISTENER REMOVED")

    }
},[]);

useEffect(()=>{
    document.title=`Size: ${width} x ${height}`;
},[width,height]);
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
    <p>Window width: {width}px</p> 
    <p>Window Height: {height}</p>
    </>);
}
export default MyComponent;