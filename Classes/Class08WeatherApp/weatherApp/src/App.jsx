import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';


function App () {
  const [getInput , setGetInput] = useState('')
     
  const cityName = (value) => {
    setGetInput(value)
    console.log(getInput);
    
   }
  
  const [weather , setWeather] = useState(null)
 
     
     const getWeather = async() => {
      if(!getInput){
        return
      }
       try {
       const APIkey ="b318a99fc41be10d323d2c44e28d6671"
       const response =await axios.get((`https://api.openweathermap.org/data/2.5/weather?q=${getInput}&appid=${APIkey}&units=metric`))
       const data = response.data.main
       setWeather(data)
       console.log(weather);
       
        } catch (error) {
      console.log(error.message);
      
       }
    }      
 


  useEffect(()=>{
    getWeather()
  }, [])




  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter City name"
        value={getInput}
        onChange={(e) => cityName(e.target.value)}
      />
      <button onClick={getWeather}>Check Weather</button>
      <div>
        <h2>City: {getInput}</h2>
        {weather && (
          <>
            <h2>Temperature: {weather.temp} °C</h2>
            <h2>Feels Like: {weather.feels_like} °C</h2>
            <h2>Humidity: {weather.humidity}%</h2>
          </>
        )}
      </div>
    </div>
  );
}

export default App









            // &units=metric converts feh into celcius
      //  temp :  305.05
      //  temp_max: 305.05
      //  temp_min: 305.05

      //  let {temp , temp_max , temp_min } = response.data.main
      // console.log(temp , temp_max , temp_min);

      // const a =(temp-32)*(5/9)
      // const b =(temp_max-32)*(5/9)
      // const c =(temp_min-32)*(5/9)
     
      // console.log(a , b , c);