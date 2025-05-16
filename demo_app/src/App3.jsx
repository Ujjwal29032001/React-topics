function App3()
{
    var arr = [11,22,33,44,55,66,77,88,99,110]
  return<div>
    <h1 style={{color:'green',background:'yellow',textAlign:"center"}}>
       App3 Component Called...
    </h1>
    <h2>Array Element is : {arr}</h2>
   
   {arr.map((ele)=>{
     return<b>{ele} &nbsp;&nbsp;</b>
   })}

   <hr/>

   {arr.map((ele,index)=>{
     return<b>{index} : {ele} <br/></b>
   })}

  </div>
}
export default App3;