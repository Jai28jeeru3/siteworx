import Navbar from "./navbar";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Popularity from "./popularity";
import L1 from "./l1.jsx";

function Reseller() {
  return (
    <div className="h-auto w-full bg-[#e2efff] bg-cover bg-no-repeat">
      <Navbar />
        <L1 />
      <Popularity />
      <Footer />
    </div>
  );
}
export default Reseller;