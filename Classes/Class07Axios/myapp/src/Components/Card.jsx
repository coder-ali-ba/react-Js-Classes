
import { useState , useEffect } from 'react'
import axios from 'axios'
import './card.css'

function Card() {
     const [Products, setProducts] = useState([])
     const getData = async() => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)

        console.log(Products);
        
        
      } catch (error) {
        console.log(error.message);   
      }
     }

 

useEffect(()=>{
  getData()
}, [])



  return (
    <div style={{ display: 'flex', flexWrap:"wrap", marginTop:"30px", flexWrap: 'wrap', gap: "20px" , justifyContent:"center"  }}>
      {Products.map((product , index) => (
        <div key={index} style={cardStyle}>
          <img src={product.image} alt={product.title} style={imageStyle} />
          <div style={contentStyle}>
            <p style={categoryStyle}>{product.category}</p>
            <h3 style={titleStyle}>{product.title}</h3>
            <p style={descStyle}>{product.description.substring(0, 100)}...</p>
            <div style={bottomRowStyle}>
              <span style={priceStyle}>${product.price}</span>
              <span style={ratingStyle}>⭐ {product.rating.rate}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

// Inline Styles (replace with CSS if preferred)
const cardStyle = {
  width: '280px',
  border: '1px solid #ddd',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const imageStyle = {
  width: '100%',
  height: '240px',
  objectFit: 'contain',
  backgroundColor: '#f8f8f8',
  padding: '10px',
};

const contentStyle = {
  padding: '14px',
  fontFamily: 'Arial, sans-serif',
};

const categoryStyle = {
  fontSize: '12px',
  color: '#888',
  textTransform: 'uppercase',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  margin: '10px 0 6px',
};

const descStyle = {
  fontSize: '13px',
  color: '#555',
};

const bottomRowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '12px',
};

const priceStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#007bff',
};

const ratingStyle = {
  fontSize: '14px',
  color: '#ff9900',
};