import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Button, Stack } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function App() {
  const ref = useRef()

  const [image , setImage] = useState("")
  const[URL , setURL] = useState("")

  const getInput = () => {
        ref.current.click()
  }
 
  const uploadImage = async() =>{
   const data = new FormData()

   data.append("file" , image);
   data.append("upload_preset" , "firstpreset")

   try {
    const response = await axios.post("https://api.cloudinary.com/v1_1/dpqs4s6ed/image/upload" , data)
    
    console.log(response.data.secure_url);
    setURL(response.data.secure_url)
    
   } catch (error) {
    console.log(error.message);
    
   }
   
  } 

  return (
    <>

    <Stack>
      <input type="file" onChange={(event)=>{
        setImage(event.target.files[0])
      }} hidden  ref={ref}/>

    <CloudUploadIcon sx={{fontSize:'100px', margin:"auto"}} onClick={getInput}></CloudUploadIcon>

      <Button variant='contained' onClick={uploadImage}>Upload Image</Button>
    </Stack>

    <Stack>
      <img src={URL} alt="#" />
    </Stack>
      
    </>
  )
}

export default App
