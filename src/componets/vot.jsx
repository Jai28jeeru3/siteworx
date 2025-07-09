import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyCarousel = () => {

  const settings = {
    dots: true,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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
   
    <div className='bg-img bg-cover bg-center h-[530px] border items-center w-full mt-3' style={{ marginLeft: '0rem' }}>
     <Slider    {...settings}>
      <div>
        <div className="w-[100%] mr-[10px] ">
          <div className="md:w-[400px] md:h-[400px] m-9 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{background: 'linear-gradient(135deg, #47eafc 0%, #ffffff 100%)'}}>
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-black">
                Hosting
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3  text-black dark:text-gray-400">
                <ul className="ul-list text-xl ">
                  <li className='mt-2'>2 GB Storage</li>
                  <li className='mt-2'>1 Website</li>
                  <li className='mt-2'>5 GB Bandwidth</li>
                  <li className='mt-2'>5 Email Accounts</li>
                  <li className='mt-2'>3 Sub Domains</li>
                  <li className='mt-2'>1 Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] mr-[10px]">
          <div className="md:w-[400px]  md:h-[400px] m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{background: 'linear-gradient(135deg, #47eafc 0%, #ffffff 100%)'}}>
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-black">
                Reseller
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-2xl text-black dark:text-gray-400">
                <ul className="ul-list text-xl ">
                  <li className='mt-2'>25 GB Storage</li>
                  <li className='mt-2'>Unlimited Websit</li>
                  <li className='mt-2'>Unlimited Bandwidth</li>
                  <li className='mt-2'>Unlimited Email Accounts</li>
                  <li className='mt-2'>Unlimited Sub Domans</li>
                  <li className='mt-2'>Unlimited Mysql Database</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[100%] mr-[10px]">
          <div className="md:w-[400px] md:h-[400px] m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{background: 'linear-gradient(135deg, #47eafc 0%, #ffffff 100%)'}}>
            <div className="p-5 mr-12 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-black">
                VPS
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list text-xl ">
                  <li className='mt-2'>2 CPU Cores</li>
                  <li className='mt-2'>2 GB RAM</li>
                  <li className='mt-2'>30 GB SSD</li>
                  <li className='mt-2'>1 TB Bandwidth</li>
                  <li className='mt-2'>1 IP Addresses</li>
                  <li className='mt-2'>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">
                View Plan
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
         <div className="w-[100%]  mr-[10px]">
        <div className="md:w-[400px] md:h-[400px] m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{background: 'linear-gradient(135deg, #47eafc 0%, #ffffff 100%)'}}>
          <div className="p-5 ">
            <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-black">
              Cloud
            </p>
            <hr className="mt-3 text-gray-400" />

            <h1 className="mb-3 font-normal text-black dark:text-gray-400">
              <ul className="ul-list text-xl ">
                <li className='mt-2'>2 CPU Cores</li>
                <li className='mt-2'>4 GB RAM</li>
                <li className='mt-2'>50 GB SSD</li>
                <li className='mt-2'>1 TB Addresses</li>
                <li className='mt-2'>1 IP Addresses</li>
                <li className='mt-2'>Free CWP Panel</li>
              </ul>
            </h1>
            <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">
              View Plan
            </p>
          </div>
        </div>
      </div>
      </div>


      <div>
         <div className="w-[100%] mr-[10px]">
          <div className="md:w-[400px] md:h-[400px] m-9 opacity-1 border border-gray-200 rounded-lg shadow dark:bg-gray-800  dark:border-gray-700" style={{background: 'linear-gradient(135deg, #47eafc 0%, #ffffff 100%)'}}>
            <div className="p-5 ">
              <p className="mt-0 text-2xl font- tracking-tight text-gray-900 dark:text-black">
                Dedicated
              </p>
              <hr className="mt-3 text-gray-400" />

              <h1 className="mb-3 font-normal text-black dark:text-gray-400">
                <ul className="ul-list text-xl ">
                  <li className='mt-2'>Dual 2Core Atom</li>
                  <li className='mt-2'>2 GB RAM </li>
                  <li className='mt-2'>500 GB HDD</li>
                  <li className='mt-2'>1 TB Bandwidth</li>
                  <li className='mt-2'>1 IP Addresses</li>
                  <li className='mt-2'>Free CWP Panel</li>
                </ul>
              </h1>
              <p className=" w-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">
                View Plan
              </p>
            </div>
          </div>
        </div>

       
      </div>


      
    </Slider>

   

   </div>
   
  );
};

export default MyCarousel;
