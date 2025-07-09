import img from "../imge/uptime.png";
import img1 from "../imge/gofind.jpeg"
import img2 from "../imge/kd.png"
import img3 from  "../imge/tws-removebg-preview.png"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img4 from "../imge/img4.jpg";

const Sliderui = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    
    
    autoplay:true ,
    autuplaySpeed:2,
    
    pauseOnHover: true,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 

  return (
   
    
      <div className='bg-img1 bg-blur-3xl   bg-cover m-auto bg-center w-[100%]   h-[580px] border    items-center mt-12 rounded-md'>
        <div className=" text-center mt-10 font-serif">
         <p className="text-2xl text-white font-bold">Web Development &</p>
         <h1 className="text-4xl text-white">Hosting Provider</h1>
        </div>
     <Slider   {...settings}>
     

      
         <div className="w-[90%] m-auto ">
        <div className="md:w-[80%] h-[400px] overflow-hidden m-9 opacity-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12  rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mt-0 text font- tracking-tight text-gray-900 dark:text-black">
              Great supports, like i have never seen befor Thanks to the support team , they are very helpfull this company provide customers great solution, that makes them best.
            </p>
            

            <p className="mb-3 flex rounded-lg justify-center font-normal text-black dark:text-gray-400">
                 <img src={img1}  className=" h-[100px] w-[100px]" alt="" />
            </p>
            <p className="mt-3 mb-3 text-center">Go Find A Pro </p>

            <p className="mt-1">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>
      

       
         <div className="w-[90%]  m-auto">
        <div className="md:w-[80%] h-[400px] overflow-hidden m-9 opacity-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12 rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mt-0 text font- tracking-tight text-gray-900 dark:text-black">
              Site Work is an excellent web hosting service that's simple to use and offer an array of usefull plans for consumers and small businesses.
            </p>
            

            <p className="mt-8 flex rounded-full justify-center font-normal text-black dark:text-gray-400">
                 <img src={img2} className="h-[80px] w-[80px]" alt="" />
            </p>
            <p className="mt-7 text-center">KD Software</p>

            <p className="mt-3">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>
      
      
        
         <div className="w-[90%]  m-auto">
        <div className="md:w-[80%] h-[400px] overflow-hidden m-9 opacity-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700">
          <p className="h-6 w-12  rounded-r-sm  bg-red-500"></p>
          <div className="p-5 ">
            <p className="mt-0 text font- tracking-tight text-gray-900 dark:text-black">
              They offer a lot of value based on their skills, talent , and rate.
            </p>
            

            <p className="mt-12 font-normal flex justify-center text-black dark:text-gray-400">
                 <img src={img3} className="h-[100px] w-[100px]" alt="" />
            </p>
            <p className="mt-8 text-center">Tech Well Solution </p>

            <p className="mt-7">
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
              <span class="fa fa-star text-red-500 p-1"></span>
            </p>
          </div>
        </div>
      </div>
     


           
      
    </Slider>

   

   </div>
   
   
  );
};

export default Sliderui;
