import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
function Counter() {
  
    // state Creation

    const [counter,setCounter]=useState(0)//Apply 0 as initial state
   
    function incrementCounter(){
        //increment by 1
        setCounter(counter+1)


    }
    function decrementCounter(){
        //decrement by 1
        if(counter==0){
            setCounter(counter)

        }
        else{
            setCounter(counter-1)
        }
       
    }
    function reset(){
      
      setCounter(0);
    
        
    }


  return (
    <div>

<div className='m-5 p-5 d-flex justify-content-center align-items-center'>
      <div className='container m-5 p-5 border border-2 border-success shadow rounded w-50'>
      <h1>Counter App</h1>
      <div className='my-2 text-center'>
      <h1>{counter}</h1>

      </div>


<div style={{display:'flex',justifyContent:"space-between"}}>
<div>
        <MDBBtn color='success' onClick={incrementCounter}>Increment</MDBBtn>
      </div>
      <div>
        <MDBBtn color='success' onClick={decrementCounter}>Decrement</MDBBtn>
      </div>
      <div>

        <MDBBtn color='success' onClick={reset}>Reset</MDBBtn>
      </div>
</div>
    
    </div>
    </div>

    </div>
  )
}

export default Counter

