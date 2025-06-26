

import './App.css'
import { useForm  } from 'react-hook-form'

function App() {
  
  const {register ,handleSubmit , reset , formState:{errors}} = useForm()

  const submitHandler = (obj) => {
    console.log(obj);
    reset()
  }
  
  
  return (
    
    <>
    <form onSubmit={handleSubmit(submitHandler)}>
      <h1>Hello</h1>
      <input type="text"
       placeholder='Email'
       {...register("email" , {
        required : true,
        minLength : 6,        
       })}      
       />

       {errors.email && <p>email must be atleast 6 chars</p>}
     
      <input type="text" placeholder='Password' {...register("password", {
        required : true,
        minLength : 6,
       })} />
       {errors.password && <p>password error must be atleast 6 chars</p>}
      <button type='submit' >Submit</button>
    </form>
    </>
  )
}

export default App
