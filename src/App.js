import './App.css';
import Child from './profile/Child';
function App() {
  const fullName= "  Saidi Akrem";
  const bio=" My experience covers multiple technologies and solutions.";
  const profession="Polyvalent IT Engineer";
  const style ={
  color:"bleu" ,
  backgroundColor: "aquamarine",
textAlign:'center',
margin:'30mm',
marginLeft:'100mm',
marginRight:'100mm',
borderRaduis:'20mm',
border:'5px solidblack',
display:"grid",
flexDirection:"column"


  
  

} ;
 
  const handleName=()=>{
    alert("Sure are you AKrem?? ")
  }

  return (
    <div>
      <Child fullName={fullName}
       bio={bio}
        profession={profession}   
        alert={handleName} style={style}/>
    </div>
  );
}

export default App;
