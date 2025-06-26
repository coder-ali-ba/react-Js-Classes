

import { auth } from '../firebase'
import './App.css'
import { Box, Stack } from '@mui/material'

function App() {

   console.log(auth);
  return (
 
    
    <>
  <h1>Hello</h1>
  <Stack justifyContent={"center"} flexDirection={"row"} gap={"20px"}>
    <Box component={"h2"}>Habib</Box>
    <Box component={"h2"}>ALi</Box>
  </Stack>
    </>
  )
}

export default App
