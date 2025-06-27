import { Controller, useForm } from 'react-hook-form'
import './App.css'
import { Button, Input, TextField } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

function App() {
  const schemaModal = yup.object({
    FullName :yup.string().required("name is required"),
    email :yup.string().min(6).required("missing email / Atleast 6 chars"),
    password : yup.string().min(8).required("missing pasword / Atleast 8 chars")
  })
   
  
  const {control , handleSubmit , formState:{errors}}=useForm({
  resolver : yupResolver(schemaModal),
  defaultValues:{
    email : "",
    FullName: "",
    password : "",

  }
  })

  const submitHandler = (obj) => {
    
     console.log(obj);
     
     
  }

  return (
    <>

    <form onSubmit={handleSubmit(submitHandler)}>

      <Controller 
       name='FullName'
       control={control}
       render={({field , formState : {errors}})=> 
         <TextField label='Fullname' {...field} 
           error={errors.FullName}
           helperText={errors?.FullName?.message}
           
         />
       }
       >       
      </Controller><br />

      <Controller 
       name='email'
       control={control}
       render={({field})=> 
        <TextField label="email" {...field} 
       error={errors.email}
       helperText={errors?.email?.message}
        />
       }
       >       
      </Controller> <br />

      <Controller 
       name='password'
       control={control}
       render={({field})=>
        <TextField label="Password" {...field}
        error={errors.password}
        helperText={errors?.password?.message}
       />
       }
       >       
      </Controller> <br />
       
       <Button type='submit' variant='contained' >Submit</Button>

    </form>
  

    </>
  )
}

export default App
