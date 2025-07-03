import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCardItems } from '../../Slices/cardSlice';
import axios from 'axios';

function SecondPage() {

    const allCards = useSelector((store)=>store.card)
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchedData =  async() => {
             const response = await axios.get("https://fakestoreapi.com/products") 
              dispatch(setCardItems(response.data))
        }
        fetchedData()
    }, [])
    

  return (
    <Stack>
        {allCards.map((myCard , index)=>(
              <Card key={index} sx={{ maxWidth: 345 }}>
       <CardMedia
        sx={{ height: 140 }}
        image={myCard.image}
        title="green iguana"
       />
       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {myCard.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {myCard.description}
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
  )
}

export default SecondPage
