import { useRef, useState } from "react";
import Switch from "react-switch"
/* Option 2: Import via CSS */

const Mypr=()=>{
<<<<<<< HEAD
  
=======
   
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
    const [cheked,setCheked]=  useState(false)
    const [ulone,setulone]= useState("1 Cpanel account")
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
        setulone("1 Plesk account")
        setultwo("5 Plesk accounts")
        setulthree("10 Plesk accounts")
        setulfour("Unlimited Plesk")
      }
      
    }
    return(
        <div className="bg-[#e2efff] ">
<<<<<<< HEAD
          <div className="mt-4 sm:h-[250px] h-[300px]">
               <p className="text-center text-5xl mt-4 text-[#0a2259] font-serif ">India's Best Hosting Provider</p>
               <p className="text-center text-[#0a2259] text-2xl text-md font-serif mt-3">Select Your</p>
               <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Hosting Plan</p>

               <div className="flex justify-center mb-10 md:mb-0 mt-10 sm:mb-0 md:mt-10  items-center  md:gap-6">
                  <button className="bg-[#47eafc] text-white md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4 ">Shared Hosting</button>
                  <button className="bg-[#47eafc] text-white md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Rrseller Hosting</button>
                  <button className="bg-[#47eafc] text-white md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Cloud Hosting</button>
                  <button className="bg-[#47eafc] text-white md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">VPS Hosting</button>
=======
          <div className="sm:h-[250px] h-[300px]">
               <p className="text-center text-5xl text-[#115256] text-3xl mt-3 font-serif ">India's Best Hosting Provider</p>
               <p className="text-center text-[#096D72] text-md text-2xl font-serif mt-3">Select Your</p>
               <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Hosting Plan</p>

               <div className="flex justify-center mb-10 md:mb-0 mt-10 sm:mb-0 md:mt-10  items-center  md:gap-6">
                  <button className="bg-[#78EDFA] text-blue-500 text-xl md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4 ">Shared Hosting</button>
                  <button className="bg-[#78EDFA] text-blue-500 text-xl md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Reseller Hosting</button>
                  <button className="bg-[#78EDFA] text-blue-500 text-xl md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">Cloud Hosting</button>
                  <button className="bg-[#78EDFA] text-blue-500 text-xl md:text-xl rounded-md sm:h-10 h-[50px] sm:w-36 w-20 mr-4">VPS Hosting</button>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f

               </div>
          </div>
           <div className="text-center justify-center items-center flex h-[60px]">
              <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5" >Linux</h1>
              <div className="h-[20px]">
<<<<<<< HEAD
          <Switch className="bg-gray-500"    checked={cheked} onChange={()=>handle()}  checkedIcon={false} uncheckedIcon={false}  onColor="#0a2259" />  
=======
          <Switch  className="bg-gray-500" value={cheked}   checked={cheked} onChange={()=>handle()} onColor="#3333ff"
       checkedIcon={false} uncheckedIcon={false}  />  
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
        </div>
        
        <h1 className="text-2xl text-[#707070] font-mono font-semibold p-5">Windows</h1>
           </div>
<<<<<<< HEAD
           <hr />
=======
         
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f

     <div className="flex justify-center flex-wrap  items-center gap-7 mt-10 ">
<div className="px-2 py-2 shadow-2xl  rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 h-[170px]   bg-[#0a2259] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm font-serif">Start from</p>
=======
    <div className="font-bold text-xl mb-2 h-[170px]   bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
  <p className="font-normal text-[#87ADAF] text-sm text-xl font-serif">Start from</p>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
  <h1 className="text-2xl text-white">INR 161 <span className="text-sm ">p/mo</span></h1></div>
   <div className="bg-white bottom text-left">
     <ul>
        
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>1 Website</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>{ulone}</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>2 GB Storage</li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5   GB  Bandwidth  </li>
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>5  Email Accounts</li>
<<<<<<< HEAD
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>  Sub <br />  <span className="ml-8">Domains</span></li>
=======
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>3 Sub Domains</li>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
        <li><i className="fa-solid fa-check bg-blue-400 mr-4 rounded-xl"></i>1 Myaql <br />  <span className="ml-8">Database</span></li>
        
    </ul>
   </div>
<<<<<<< HEAD
    <div class="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#47EAFC] h-[100px]">
=======
    <div class="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>
  
<div className="px-2 py-2 shadow-2xl  rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0a2259] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
=======
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Beginner Plan</span>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
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
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#47EAFC] h-[100px]">
=======
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2  shadow-2xl rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0a2259] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Traffic Plan</span>
=======
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Traffic Plan</span>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
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
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#47EAFC] h-[100px]">
=======
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  <div className="px-2 py-2 shadow-2xl  rounded overflow-hidden w-[270px] h-[36%]  text-center border">
   
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0a2259] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Standard Plan</span>
=======
    <div className="font-bold text-xl mb-2 h-[170px]  bg-[#0c2570] "><span className="inline-block bg-[] rounded-full px-3 py-1 text-xl  font-semibold text-white mr-2 mb-2 mt-4">Standard Plan</span>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
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
<<<<<<< HEAD
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#47EAFC] h-[100px]">
=======
    <div className="font-bold text-xl mb-2 flex justify-center items-center rounded-md bg-[#78EDFA] h-[100px]">
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
         <button className="rounded-full h-[50px] w-[150px] bg-[] ">Order now</button>
    </div>
  </div>

  
 

 
     </div>


    </div>

        
    )
}
export default Mypr;