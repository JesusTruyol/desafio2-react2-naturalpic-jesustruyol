import { useContext } from "react";
import ContextApi from "../ContextApi";


export default function Favoritos() {

  const {photos}= useContext(ContextApi)
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {photos===null? console.log('datos galeria null'):
        photos.map(photo=>
          photo.favorite?
          <div id={photo.id} key={photo.id}className="foto-favorito">
          <img  src={photo.url}/> 
          </div>
          : ''
      )}
      </div>
    </div>
  );
}
