import {useState, useEffect} from 'react';
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import ContextApi from "./ContextApi";




export default function App() {

  const[photos,setPhotos]=useState(null);
  const  dataGlobal ={photos,setPhotos}
  
  const endpoint= async ()=>{
    const response= await fetch("/fotos.json");
    const dataApi= await response.json();

    let photosApi= dataApi.photos.map((dataPhoto) => ({
      id: dataPhoto.id,
      url: dataPhoto.src.tiny,
      author: dataPhoto.photographer,
      favorite: false,
      alt: dataPhoto.alt
    }))
    setPhotos(photosApi);
  }
  
  useEffect(()=>{
    endpoint()
    
  },[])

  return (
    <div className="App">
      <ContextApi.Provider value={dataGlobal}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </ContextApi.Provider>
      
    </div>
  );
}
