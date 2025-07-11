import { useRef, useState } from "react";
import Switch from "react-switch"
/* Option 2: Import via CSS */

const Mypr=()=>{
   
    const [cheked,setCheked]=  useState(false)
    const [ulone,setulone]= useState("Unlimited WHM cPanel Accounts")
    const [ultwo,setultwo]= useState("5 Cpanel accounts")
    const [ulthree,setulthree]= useState("10 Cpanel accounts")
    const [ulfour,setulfour]= useState("Unlimited Cpanel")
    function handle(){
      setCheked(!cheked)
      if(cheked){
        setulone("1 Cpanel account")
        setultwo("5 Cpanel accounts")
        setulthree("10 Cpanel accounts")
        setulfour("Unlimited Cpanel")
      }else{
        setulone("Unlimited Plesk Accounts")
        setultwo("5 Plesk accounts")
        setulthree("10 Plesk accounts")
        setulfour("Unlimited Plesk")
      }
      
    }
    return(
        <div className="bg-[#e2efff] ">
          <div className="sm:h-[250px] h-[300px]">
               <p className="text-center text-5xl text-[#115256] text-3xl mt-3 font-serif ">Best Reseller Hosting Plans At Affordable Price </p>
               <p className="text-center text-[#096D72] text-md text-2xl font-serif mt-3">Select Your</p>
               <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Reseller Hosting Plans </p>
          </div>
           <div className="text-center justify-center items-center flex h-[60px]">
              <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5" >Linux</h1>
              <div className="h-[20px]">
          <Switch  className="bg-gray-500" value={cheked}   checked={cheked} onChange={()=>handle()} onColor="#3333ff"
       checkedIcon={false} uncheckedIcon={false}  />  
        </div>
        
        <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5">Windows</h1>
           </div>
         

     <div className="flex justify-center flex-wrap  items-center gap-7 mt-10 ">
<div className="px-2 py-2 shadow-2xl  rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
    <div className="font-bold text-xl mb-2 h-[170px]   bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm text-xl font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 799 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>25 GB Storage </li>
        <li><i className="fa-solid fa-check bg-blur-400 mr-4 rounded-xl"></i>unlimited Websites </li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulone}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>2 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5   GB  Bandwidth  </li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5  Email Accounts</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>3 Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>1 Myaql <br />  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div class="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>
  
<div className="px-2 py-2 shadow-2xl rounded overflow-hidden w-[270px] h-[36%] text-center border-4 border-blue-500 hover:border-green-500 focus:border-red-500 active:border-yellow-400 transition-all duration-300 relative bg-[#e2efff] group">
    {/* HOT Tag */}
    <div
      className="absolute left-1/2 -translate-x-1/2 top-3 z-10"
      style={{ pointerEvents: 'none' }}
    >
      <span
        className="inline-block px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full shadow-lg animate-none hover:animate-bounce cursor-pointer transition-transform duration-300"
        style={{ pointerEvents: 'auto' }}
        onMouseEnter={e => e.currentTarget.classList.add('animate-float')}
        onMouseLeave={e => e.currentTarget.classList.remove('animate-float')}
      >
        HOT
      </span>
    </div>
   <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 221 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5 Website</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ultwo}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2  shadow-2xl rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Traffic Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 311 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>10 Websites</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulthree}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>10 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2 shadow-2xl  rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Standard Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
  <h1 className="text-2xl text-white">INR 521 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Websites</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulfour}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>20 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i> Unlimited Bandwidth</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Email  <span className="ml-8">Accounts</span></li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Sub Domains</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>Unlimited Mysql <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  
 

 
     </div>


    </div>

        
    )
}
export default Mypr;

/* Add this to your global CSS or tailwind.config.js */
/*
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}
.animate-float {
  animation: float 1s infinite;
}
*/
/*
  To achieve the full color sequence (blue → green → red → yellow → black → white → pink),
  you will need to use custom CSS and JS for advanced interactions, as Tailwind only supports hover/focus/active states.
  The above covers blue (default), green (hover), red (focus), yellow (active).
  For black, white, and pink, you would need to add custom logic or animation if you want them to appear in sequence.
*/