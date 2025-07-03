import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';
// import { decre, incre } from './Slices/Slices';
// import {setCardItems} from "./Slices/cardSlice"
import { setCardItems } from '../../Slices/cardSlice';
import { decre , incre } from '../../Slices/Slices';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
function MainPage() {

const dispatch = useDispatch()  
  
const counter = useSelector((store)=>store.counter.counter)
 
const myCard = useSelector((store)=>store.card)


useEffect(()=>{
  const fetchData = async() =>{
    const response = await axios.get("https://fakestoreapi.com/products") 
    dispatch(setCardItems(response.data))
  }
  fetchData()
} ,[])


return (

     <>
    <Stack>
     <h1>Counter : {counter}</h1>
     <button onClick={()=>dispatch(incre())}>Incre</button>
     <button onClick={()=>{
      dispatch(decre())
     }}>Decre</button>

     </Stack>


    <Stack flexDirection={"row"} gap={"10px"} justifyContent={"center"} flexWrap={"wrap"}>

    {
      myCard.map((singleCard , index)=>(
      <Card key={index} sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 140 }}
        image={singleCard.image}
        title="green iguana"
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {singleCard.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {singleCard.description}
        </Typography>
       </CardContent>
       <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
       </CardActions>
    </Card>
      ))

       
    }  

    </Stack>

    </>
    
  )
}

export default MainPage
