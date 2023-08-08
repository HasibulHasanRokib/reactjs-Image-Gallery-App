import { useContext, useState } from 'react';
import Logo from '/src/assets/pexels-seeklogo.com.svg'
import { ImageContext } from './ImageContext';



const Navbar = () => {

 const{setQuery,query}=useContext(ImageContext)
 const [items,setItems]=useState('')

  const handleSubmit=(e)=>{
   e.preventDefault();
   setQuery(items)
   console.log(query)
  
  }


  return (
    <>

    <nav className="flex justify-around items-center py-5">
    <div className='md:flex justify-center gap-1 items-center'>
        <img className='w-[3rem] rounded-lg' src={Logo} alt="" />
        <h3 className="font-bold text-xl tracking-wide hidden md:inline-block">Pexels</h3>
        </div>
        <form className="flex" onSubmit={handleSubmit}>
            <button className="flex justify-center items-center bg-gray-100 text-gray-600 w-[3rem]  gap-3  px-6 md:w-[7rem]  py-[8.6px]  border rounded-l-lg"><i className="fa-regular fa-image"></i><span className='hidden md:inline-block'>Photo</span></button>
            <input required onChange={(e)=>{setItems(e.target.value)}} value={items} type="text" className="outline-none py-2 px-2 md:w-[30rem]  border bg-gray-100" placeholder="free wallpaper"/>
            <button type='submit' className="bg-[#05a081] px-3 py-[8.6px] md:w-[5rem] border text-white rounded-r-lg">Search</button>
        </form>
        <ul className="md:flex gap-6 justify-center items-center hidden">
          <li>
            <a className="font-bold" href="#">Explore</a>
          </li>
          <li>
            <a className="font-bold" href="#">License</a>
          </li>
          <li>
            <a href="#"><i className="fa-regular fa-bell"></i></a>
          </li>
          <li>
            <a href="#"><i className="fa-regular fa-user"></i></a>
          </li>
          <button className="font-bold bg-[#05a081] py-2 px-5 rounded-sm text-white">Upload</button>
        </ul>
    </nav>
    </>
  );
};

export default Navbar;
