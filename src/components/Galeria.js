import "../assets/css/galeria.css";
import Heart from "./Heart";

import { useState, useEffect, useContext} from "react";
import ContextApi from "../ContextApi";

export default function Home() {
  const {photos, setPhotos}= useContext(ContextApi)
  const [change, setChange]= useState(false); 
  console.log('fotos en Galeria')
  console.log(photos)

  const favorite=(id)=>{
    let index = photos.findIndex((index)=> index.id=== id);
    let photosChange= photos;
    photosChange[index].favorite= !photos[index].favorite;
    setPhotos(photosChange)
    setChange(!change)
  }

  useEffect(()=>{

  },[change])

  return (
    <div className="galeria grid-columns-5">
      {photos===null? console.log('datos galeria null'):
        photos.map(photo=>
          <div id={photo.id} key={photo.id}className="foto" onClick={()=>favorite(photo.id)}>
            <Heart filled={photo.favorite}/>
            <img  src={photo.url}/> 
            <div className="description">
              <p>{photo.alt}</p>
              <p>{photo.author}</p>
            </div>
          </div>
      )}
    </div>
  );
}
