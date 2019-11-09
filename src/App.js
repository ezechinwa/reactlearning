import React,{useState}from 'react'
   
import './App.css';

import Person from './Components/Person/Person'

   const App = (props) =>{
     const [stateManager, functionManager] =   useState({
       persons: [{name:"Chinwa Williams", age:27, job:"Software developer"},{name:"Adam Tony", age:29, job:"Backend developer"},{name:"John Joe", age:20, job:"UI designer"}]
     })

     const changeStateHandler = () =>{
        functionManager({
          persons: [{name:"Chinwa Williams", age:27, job:"Senior Software developer"},{name:"Adam James", age:29, job:"Senior Backend developer"},{name:"John Joe", age:20, job:"UI designer"}]
    
        })
     }
     return <div className="App">
          <button onClick={changeStateHandler}> Change state </button>
         {stateManager.persons.map((value, index)=>{
            return <Person name={value.name} age={value.age} job={value.job} />
         })}
     </div>

   }


export default App;
