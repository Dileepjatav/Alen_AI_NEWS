
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navbar } from './Component/Header/Navbar/Navbar';
import {Main} from './Component/Main/Main'
import Loder from './Component/Loader/Loader';
import { Routes, Route } from 'react-router-dom';
import { About } from './Component/Header/Navbar/About';



const keyalen='146c6ed4ee7cb79d523f38df990981cc2e956eca572e1d8b807a3e2338fdd0dc/stage'

const API_KEY='0cad94fe52e64aebb93ff044f09b478f'

function App() {
  const [news,setnews]=useState([])
  const [api,setapi]=useState("");
  const [loader,setloader]=useState(false);


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

          console.log(NEWS_API_URL);
           
        }
        if(commandData.command==='search'){
          let listen=`&category=${commandData.props.toString().toLowerCase().split(" ").join('-')}`
          let NEWS_API_URL=`https://newsapi.org/v2/top-headlines?country=in`;
          NEWS_API_URL=`${NEWS_API_URL}${listen}&apiKey=${API_KEY}`          
          setapi(NEWS_API_URL)

          console.log(NEWS_API_URL);
           
        }
        if(commandData.command==='clear news'){
          setnews([]);
          console.log(news)
        }


      } 
    })

  },)

  useEffect(()=>{
    setloader(true);
    axios.get(api)
    .then((data)=>{
      let article=data.data.articles
      setloader(false);
      setnews(article)
    })
    .catch((e)=>{
      setloader(false);
      console.log(e.message)
    })
    console.log("working api")
    
    
  },[api])

  const search=()=>{
    setapi('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0cad94fe52e64aebb93ff044f09b478f')
    console.log("api fetch")
    console.table(news)

  }
  const rem=()=>{
    setnews([]);
    console.log("news remove")

  }

  

  
  return (
    <div className="App">
      
      
      <Navbar ></Navbar>
      {loader ?<Loder></Loder>:false}
      <button onClick={()=>{search()}} >Click</button>
        <button onClick={()=>{rem()}} >remove</button>
      
      <Routes>
        <Route path='/' element={<Main news={news } ></Main>}></Route>
        
        <Route path='/about' element={<About></About>}></Route>

      </Routes>
      
     
     
    </div>
  );
}

export default App;
