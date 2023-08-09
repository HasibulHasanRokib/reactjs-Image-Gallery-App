import { useContext, useState } from "react"
import { saveAs } from 'file-saver';
import { ImageContext } from "./ImageContext"



const Home = () => {

const {filteredImage,query,page,setPage}=useContext(ImageContext)

const [items,setItems]=useState([])
const addTo=(item)=>{
  setItems([item])
}
const [show,setShow]=useState(false)
const [menuShow,setMenuShow]=useState(false)
const [downloadUrl,setDownloadUrl]=useState("")

const handleDownload=()=>{
 saveAs(downloadUrl,'Image')
}


const handleMore=()=>{
setPage(page+1)
}

    
  return (
    <>
     <section className="home-container">
      <div className="header-section">
      <h1 className="text-4xl font-bold capitalize">Free {query} Wallpaper Download</h1>
       <button className="bg-gray-800 text-white w-[8rem] p-3 rounded-full my-5 font-bold">Photos <span className="font-semibold text-gray-400">{query.length}k</span></button>
      </div>
      <section className="image-section">
      {filteredImage.map((photo)=>{
        const {id}=photo;
        const{regular}=photo.urls;
        const raw=photo.urls.raw;
        const small=photo.urls.small;
        const userImg=photo.user.profile_image.small;
        const userName=photo.user.name;
        const like=photo.likes;

     
      return <a href="#" onClick={()=>
      {addTo({id,regular,userImg,userName,like,raw,small}),setShow(!show)}} key={photo.id} className="card">
      <img className="images" src={photo.urls.regular} alt="" />
        <div className="card-body">
          <div className='flex gap-3 items-center  justify-end mx-3 my-2'>
            <button className='bg-white w-[2.5rem] py-3  rounded'><i className="fa-regular fa-bookmark fa-lg"></i></button>
            <button className='bg-white w-[2.5rem] py-3  rounded hover:text-red-500'><i className="fa-regular fa-heart fa-lg"></i></button>
          </div>
           <div className='flex justify-between items-center m-2'>
           <span className='flex gap-2 items-center'>
           <img className='client-img' src={photo.user.profile_image?.small} alt="" />
          <span>
          <h5 className='text-white font-bold'>{userName}</h5>
            <p className="text-gray-50">{photo.alt_description}</p>
          </span>
           </span>
           <button className='bg-white w-[2.5rem] py-3  rounded'><i className="fa-solid fa-download"></i></button>
           </div>
        </div>
      </a>
      })}
      </section>
      <button onClick={handleMore} className="font-bold bg-[#05a081] text-white py-2 w-[15rem] rounded block m-auto mt-5">More</button>
     </section>

     {show &&(
      <section className="popUp-section">
     <div className="popUp-display rounded">
     <i onClick={()=>{setShow(!show),setMenuShow(false),setDownloadUrl('')}} className="cursor-pointer fa-solid fa-xmark text-gray-100 fa-2x"></i>
     {items.map((item)=>{
      return<div key={item.id}>
      <nav className="flex justify-between items-center mobile-popup--navbar">
        <div className="user flex gap-2 justify-center items-center">
          <img className="w-[3rem] rounded-full" src={item.userImg} alt="" />
          <h5 className="text-gary-800 font-bold">{item.userName}<span className="text-gray-400 mx-2">.Follow</span></h5>
        </div>
        <ul className="flex gap-[2rem]">
          <li className="border py-3 md:w-[7rem] rounded text-center"><a href="#"><i className="fa-regular fa-bookmark fa-lg px-2"></i><span className="hidden md:inline-block">Collect</span></a></li>
          <li className="border py-3 md:w-[8rem] w-[6rem] px-2 rounded text-center"><a href="#"><i className="fa-regular fa-heart fa-lg px-2"></i><span className="hidden md:inline-block">Like</span><span className="text-gray-400">{item.like}</span></a></li>

          <li className="border py-3 w-[12rem] rounded text-center bg-[#05a081] text-white ">
          <a href="#" onClick={()=>{setMenuShow(!menuShow)}}>Free Download<i className="mx-3 fa-solid fa-angle-down"></i></a>
             {menuShow && (
              <div className="download-section text-gray-800">
              <h4 className="font-bold py-3">Choose a size:</h4>
              <ul className="flex flex-col gap-1 mt-4 items-start">
                <li className="nav-items" onClick={()=>{setDownloadUrl(item.raw)}}><a href="#">Large <samp className="text-gray-400 mx-5 font-thin">1920x2880</samp></a></li>
                <li className="nav-items"  onClick={()=>{setDownloadUrl(item.regular)}}><a href="#">Medium <samp className="text-gray-400 mx-5 font-thin">1280x1920</samp></a></li>
                <li className="nav-items"  onClick={()=>{setDownloadUrl(item.small)}} ><a href="#">Small <samp className="text-gray-400 mx-5 font-thin">640x960</samp></a></li>
              </ul>
              <button className="border py-3 w-full bottom-0 absolute left-0 rounded text-center bg-[#05a081] text-white " onClick={handleDownload}
              disabled={downloadUrl===''?true:false}>Download</button>
             </div> 
             )}    
          </li>
        </ul>
      </nav>
      <div>
        <img className="cursor-zoom-in md:h-[32rem] max-h-full mx-w-full m-auto md:mt-[4rem]" src={item.regular} alt="" />
      </div>
     </div>
     })}

     </div>
     </section>
     )}

    </>
  )
}

export default Home
