
import './App.css';
import logonormal from'../src/componets/assets/logonormal_png.png';
import { FaSearch } from 'react-icons/fa';
function App() {

    
  //const[input,setinput]=useState(" ");
            



                const value= async()=>{
                  const input=document.getElementById('input');
                  let api_key="738e968e179bfb9a73421b988a271174";
                  let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${api_key}`;
                  
                  if(input.value===''){
                    const error=document.getElementById('error');
                    error.innerHTML="search can't be empty";
                  }
                  else{
                    let response =await fetch(url);
                    let data= await response.json();
                  const location=document.getElementById('location');
                  location.innerHTML= data.name;
                  const temp=document.getElementById('temp');
                  temp.innerHTML= Math.floor(data.main.temp)+"&#176c";
                  const humidity=document.getElementById('humidity');
                  humidity.innerHTML= Math.floor(data.main.humidity)+"%";
                  const speed=document.getElementById('widflow');
                  speed.innerHTML= Math.floor(data.wind.speed)+"km/h";
                  }
                }

            return (
    <div className="App">
      <div className='container'>
        <div className='input-box'>
          <input type='string' name="input" placeholder='search' id='input'></input>
          
           <div className="search">
           <div   onClick={value}>
           <div className='searchlogo'>
            <p>< FaSearch /></p>
           </div>
           </div>
            </div></div>
            <p className='error' id='error'></p>
        
        <div className='weather-icon'>
        <img src={logonormal} alt='his' ></img>
        </div>
        <div className='temp' id='temp'>24<span>&#176;</span>c</div>
        <div className='location' id='location'>londan</div>
        <div className='data'>
        <div className='element-data'>
          <div className='Humality' id='humidity'>56%</div>
          <div className='dataname'>Humidity</div>
        </div>
          <div className='element-data'> 
          <div className='widflow' id='widflow'>30 km/h</div>
          <div className='dataname'>windflow</div>
        </div>
        </div>
          </div>
          </div> 
  );
}


export default App
