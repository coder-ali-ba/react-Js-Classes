import { Controller, useForm } from 'react-hook-form'
import './App.css'
import { Button, Input, TextField } from '@mui/material'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"

function App() {
  const schemaModal = yup.object({
    FullName :yup.string().required(),
    email :yup.string().min(6).required(),
    password : yup.string().min(8).required()
  })
   
  
  const {control , handleSubmit , formState:{errors}}=useForm({
  resolver : yupResolver(schemaModal)
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
           helperText={errors?.email?.message}
         />
       }
       >       
      </Controller><br />

      <Controller 
       name='email'
       control={control}
       render={({field})=> 
        <TextField label="email" {...field} />
       }
       >       
      </Controller> <br />

      <Controller 
       name='password'
       control={control}
       render={({field})=>
        <TextField label="Password" {...field} />
       }
       >       
      </Controller> <br />
       
       <Button type='submit' variant='contained'>Submit</Button>

    </form>
  

    </>
  )
}

export default App
