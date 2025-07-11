
import CompleteSiteWorxPage from "./componets/app1";
import FAQSection from "./componets/faq";
import Filebox from "./componets/file";
import Infoslide from "./componets/footer";
import Middel from "./componets/footer";
import ContactForm from "./componets/form";
import SiteWorxFeaturesSection from "./componets/m";
import CarouselComponent from "./componets/main";
import CardSlider from "./componets/main";
import Pages from "./componets/main";
import Sliderui from "./componets/mand";
import Slider from "./componets/mand";
import Mypr from "./componets/mypr";
import Myslider from "./componets/Myslider";
import Navbarin from "./componets/navbar";
import Siteworex from "./componets/siteworex";
import MyCarousel from "./componets/vot";
import Counter from "./componets/navbar";
import Barnav from "./componets/Counter";
import Sitenav from "./componets/navbar";
import Navtop from "./componets/navtop";
import Footer from "./componets/footer";
import Aboutsite from "./componets/aboutsiteworex";
import Login from "./componets/login";
<<<<<<< HEAD
=======
import NewNavbar from "./componets/navtop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sign from "./componets/login";
import TwoStepSignup from "./componets/twostep";
import SignIn from "./componets/signin";
import Loginto from "./componets/loginform";
import Shared from "./componets/shared";
import Reseller from "./componets/reseller";
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f




function App() {
  return (
   <>
   {/* <Navtop/>
   <Sitenav/> */}
  {/* <Myslider/>  */}
   {/* <MyCarousel/> */}
    {/* <Mypr/> */}
   {/* <Sliderui/> */}
   {/* not working <CompleteSiteWorxPage/> */}
   {/* <FAQSection/> */}
   {/* <Filebox/>  */}
   {/* <ContactForm/> */}
   {/* <SiteWorxFeaturesSection/> */}
   {/* <Barnav/> */}
<<<<<<< HEAD
   <Siteworex/>
   {/* <Login/> */}
=======
   {/* <Siteworex/> */}
   {/* <Login/> */}
   {/* <NewNavbar/> */}
   
    <Routes>
      <Route path="/login" element={<Loginto/>}/>
    <Route path="/sign" element={<Sign/>}/>
    <Route path="/veryfy" element={<TwoStepSignup/>}/>
    <Route path="/" element={<Siteworex/>}/>
    <Route path="/shared-hosting" element={<Shared />} />
        <Route path="/reseller-hosting" element={<Reseller />} />
   </Routes>
 
     

>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
   </>
  );
}

export default App;
