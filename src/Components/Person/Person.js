import React from 'react'; 

const Person =  (props)=>{
  return (
      <div>
          <p> My name is {props.name} , I am {props.age} old and I currently work as a {props.job} </p>
      </div>
  )
}; 

export default Person