
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Component/Header/Navbar/Navbar';
import {Main} from './Component/Main/Main'
import Loder from './Component/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import { About } from './Component/Header/Navbar/About';
import { Contactus } from './Component/Contact/Contactus';
import { Introduction } from './Component/Introduction/Introduction';



const keyalen='146c6ed4ee7cb79d523f38df990981cc2e956eca572e1d8b807a3e2338fdd0dc/stage'

// const API_KEY='0cad94fe52e64aebb93ff044f09b478f'
const API_KEY='72df3eae2c0d48c7aec0ebe33454d24f'


function App() {
  const [news,setnews]=useState([])
  const [api,setapi]=useState("");
  const [loader,setloader]=useState(false);
  const [result,setresult]=useState("");


  useEffect(()=>{
    alanBtn({
      key:keyalen,
      onCommand:(commandData)=>{

        if(commandData.command==="take name"){
          console.log(commandData)
        }

        if(commandData.command==='show news'){
          let listen=`sources=${commandData.props.toString().toLowerCase().split(" ").join('-')}`
          let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?`;
          NEWS_API_URL=`${NEWS_API_URL}${listen}&apiKey=${API_KEY}`          
          setapi(NEWS_API_URL)
          let res=`${commandData.props}`;
          setresult(res);

          console.log(NEWS_API_URL);
           
        }
        if(commandData.command==='search'){
          let listen=`&category=${commandData.props.toString().toLowerCase().split(" ").join('-')}`
          let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?country=in`;
          NEWS_API_URL=`${NEWS_API_URL}${listen}&apiKey=${API_KEY}`          
          setapi(NEWS_API_URL)
          let res=`${commandData.props}`;
          setresult(res);

          console.log(NEWS_API_URL);
           
        }
        if(commandData.command==='news of'){
          let listen=`q=${commandData.props.toString().toLowerCase().split(" ").join('-')}`
          let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?`;
          NEWS_API_URL=`${NEWS_API_URL}${listen}&apiKey=${API_KEY}`          
          setapi(NEWS_API_URL)
          let res=`${commandData.props}`;
          setresult(res);

          console.log(NEWS_API_URL);
           
        }

        if(commandData.command==='top headline'){
          
          let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}`;    
          setapi(NEWS_API_URL)
          setresult("Top Headline");

          console.log(NEWS_API_URL);
           
        }

        if(commandData.command==='clear news'){
          setnews([]);
          setresult("");
          
        }


      } 
    })

  },)

  useEffect(()=>{
    setnews([])
    setloader(true);
    axios.get(api)
    .then((data)=>{
      let article=data.data.articles
      setloader(false);
      setnews(article)
      console.log(api)
    })
    .catch((e)=>{
      setloader(false);
      setresult(e.message);
      console.log(e.message)
      console.log(api)
    })
    
    
    
  },[api])

  
  const rem=()=>{
    setnews([]);
    setresult("")
  

  }

  
  return (
    <div className="App">
      
      <Navbar setapi={setapi} setresult={setresult} api_key={API_KEY} ></Navbar>
      {loader ?<Loder></Loder>:false}
      
      <Routes>
        <Route path='/' element={<Main news={news } result={result} remove={rem} ></Main>}></Route>
        <Route path='/introduction' element={<Introduction></Introduction>} ></Route>
        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contactus' element={<Contactus></Contactus>}></Route>


      </Routes>


     
    </div>
  );
}

export default App;
