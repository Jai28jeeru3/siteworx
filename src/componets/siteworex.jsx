import Aboutsite from "./aboutsiteworex";
import Barnav from "./Counter";
import FAQSection from "./faq";
import Filebox from "./file";
import Footer from "./footer";
import SiteWorxFeaturesSection from "./m";
import Sliderui from "./mand";
import Mypr from "./mypr";
import Sitenav from "./navbar";
import NewNavbar from "./navtop";
import Navtop from "./navtop";
import MyCarousel from "./vot";
import Popularty from "./popularity";


const Siteworex=()=>{
    return(
        <div className="h-auto w-full bg-[#e2efff] bg-cover bg-no-repeat">
         {/* <NewNavbar/> */}
         <Sitenav/>
         <MyCarousel/>
         <Aboutsite/>
         <Mypr/>
         <SiteWorxFeaturesSection/>
         <Filebox/>
         <Sliderui/>
         <Popularty/>
         <FAQSection/>
         <Footer/>
        </div>
    )
}
export default Siteworex;