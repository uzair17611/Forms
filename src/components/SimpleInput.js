import react,{useState} from 'react'
import { useEffect } from 'react';

const SimpleInput = (props) => {
  const [enteredName,setEnteredName] =useState('');
  const [enteredEmail,setentereddEmail] =useState('')
  const [formisValid,setFormIsvalid] =useState(false)
  const [enteredNametouched,setenteredNametouched] =useState(false)
  const [enteredEmailtouched,setentereEmailtouched] =useState(false)

  
  const enteredNamesIsvalid= enteredName.trim() != ''
  const InputNameIsValid= !enteredNamesIsvalid && enteredNametouched

  const enteredEmailisValid =enteredEmail.includes('@');
  const InputEnmailIsvalid =!enteredEmailisValid && enteredEmailtouched


  useEffect( ()=>{
    if(enteredNamesIsvalid){
      setFormIsvalid(true)
    }
    else{
      setFormIsvalid(false)
    }
  },[enteredName])

   const  NamedInputBlur =(event)=>{
    setenteredNametouched(true);
   }
  
  const entereduserNamedHnadler =(event) =>{
    setEnteredName(event.target.value)
   
  }
  const SubmitHandler =(event) =>{
    event.preventDefault();
    setenteredNametouched(true)
    if(!enteredNamesIsvalid){
      return;
    }
    console.log(enteredName)
   setEnteredName('')
   setenteredNametouched(false)
  
   
  }
  const namedInputclass= InputNameIsValid  ? 'form-control ' : 'form-control invalid'
  return (
    <form onSubmit={SubmitHandler }>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
       
        <input type='text' id='name' onChange={entereduserNamedHnadler}   value={enteredName} onBlur={ NamedInputBlur}/>
        {!InputNameIsValid && <p className='error-text'>enter value is not valid</p> }
        
      </div>
      
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
     
    </form>
  );
};

export default SimpleInput;
