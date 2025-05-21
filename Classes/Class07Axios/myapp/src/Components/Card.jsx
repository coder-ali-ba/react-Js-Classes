import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState , useEffect } from 'react'
import axios from 'axios'
import './card.css'

function Card(props) {
     const [Products, setProducts] = useState([]);
      const [allProducts, setAllProducts] = useState([]);
     
     const getData = async() => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products")
        setProducts(res.data)  
        setAllProducts(res.data)
         
         
         
      } catch (error) {
        console.log(error.message);   
      }
     }
   
 

useEffect(()=>{
  getData()
}, [])



    //Search Items

  const [search , setSearch] = useState("")

 const getSearch = () => {
    if (search.trim() === "") {
      setProducts(allProducts);
      alert("Please enter a category");
      return;
    }

    const filtered = allProducts.filter((pro) =>
      pro.category.toLowerCase().includes(search.toLowerCase())
    );

    if (filtered.length === 0) {
      alert("Not Found");
    }

    setProducts(filtered);
  };

// useEffect(()=>{
//   getSearch()
// }, [search])


return (

<>
   <h2 style={{
    width:"100%",
    textAlign:"center"
   }}>Search By Category</h2>
   <Form className="d-flex" style={{
        width:"50%",
        margin:"auto"
       }}>
         
           <Form.Control
             type="search"
             placeholder="Search"
             className="me-2"
             aria-label="Search"
             onChange={(e)=>{
                setSearch(e.target.value)
             }}
            />
       <Button onClick={getSearch} variant="outline-success">Search</Button>
       </Form>


    <div style={{ display: 'flex', flexWrap:"wrap", marginTop:"30px", flexWrap: 'wrap', gap: "20px" , justifyContent:"center"  }}>
   
      {
       
      
      Products.map((product , index) => (
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
      ))
      
      
      }
    
    </div>
    <div style={{width:"100%", display:"flex", justifyContent:"center", height:"80vh"}}>
      <div style={{width:"300px"}}>
    {
      Products.length === 0 && (
        <div style={{display:"flex",marginTop:"30px", flexDirection:"column", alignItems:"center"}}>
          <h1>No Products Found</h1>
          <p>Please search with suitable category name</p>
          <button onClick={()=> setProducts(allProducts)}>
            Refresh
          </button>
        </div>
      )
    }
    </div>
    </div>

    </>
    
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