import React,{useEffect, useState} from "react";
const BasicForm = (props) => {
  const [firstName,setfirstName] =useState('')
  const [firstNameTouch,setfirstNameTouch]=useState(false)
  const [LastName,setLastName] =useState('')
  const [LastNameTouch,setLasttNameTouch]=useState(false)
 
  const [enteredEmail,setentereddEmail] =useState('')
  const [enteredEmailTouch,setenteredEmailTouch]=useState(false)
  
 

  const EnteredNameIsvalid= firstName.trim()!= '' 
  const InputFistnameIsvalid=!EnteredNameIsvalid && firstNameTouch
  const EnteredLastNameIsvalid= LastName.trim() != '' 
  const InputLastnameIsvalid=!EnteredLastNameIsvalid && LastNameTouch
  const EnteredEmailIsvalid= enteredEmail.includes('@') 
  const InputEmailIsvalid=!EnteredEmailIsvalid &&  enteredEmailTouch

  const formIsValid = EnteredNameIsvalid  && EnteredLastNameIsvalid && EnteredEmailIsvalid



  const FirstNameHandler =(event)=>{
    setfirstName(event.target.value)
  }
  const lastNameHandler =(event)=>{
    setLastName(event.target.value)
  }

  const EmailNameHandler =(event)=>{
    setentereddEmail(event.target.value)
  }
const SubmitHandler =(event)=>{
event.preventDefault();

if(!formIsValid){
  return
}
console.log(firstName);
console.log(LastName);
console.log(enteredEmail);
setfirstName('')
setLastName('')
setentereddEmail('')

}



  return (
    
    <form onSubmit={SubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input value={firstName}   type='text' id='name' onChange={FirstNameHandler } />
          {InputFistnameIsvalid && (<p>enter a valid first name</p>)}
        </div>
       
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input value={LastName}  type='text' id='name'  onChange={lastNameHandler}/>
          {InputLastnameIsvalid && ( <p>enter a valid last name</p>)}
        </div>
       
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail}  onChange={ EmailNameHandler}/>
        {InputEmailIsvalid  && (<p>enter a valid email name</p>)}
      </div>
      
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
