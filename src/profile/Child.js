import React from 'react'

const Child = (props) => {
  
  return (
    <div style={props.style}>
    <h1>My Name is :  {props.fullName}</h1> <br></br> 
    <h4>Profession : {props.profession} </h4> <br></br>
    <h5>Something About me :{props.bio}</h5> <br></br>
     
    {props.alert()}
    </div>
  )
}

export default Child  