import { ImageContext } from "./ImageContext";
import { useEffect } from "react"
import { useState } from "react"

const ImageProvider=({children})=>{

    const[photos,setPhotos]=useState([])
    const [page,setPage]=useState(2)
    const [query,setQuery]=useState('all')

  
    const url=`https://api.unsplash.com/search/photos?query=${query}&client_id=ghCeuYTCO1sv6jsQIKXYA-kvYtaKxgJ8hcY1P6beAPc&page=${page}&per_page=30`
    
    const getPhotos=async()=>{
    try {
      let res=await fetch(url);
      let data= await res.json()
      setPhotos(data.results)

    } catch (error) {
      console.log(error)
    }
    }
    useEffect(()=>{
      getPhotos();
    },[url])
   
    


    let filteredImage=photos;

    return <ImageContext.Provider value={{filteredImage,setQuery,query,page,setPage,setPhotos,photos}}>
        {children}
    </ImageContext.Provider>
}

export default ImageProvider;