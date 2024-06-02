import Navbar from "../components/Navbar";
import DetailSection from "../components/DetailSection";
import Carousel from "../components/Carousel";
import { data } from "../utils/carouselData";
import DescriptionSeaction from "../components/DescriptionSeaction";
import {
  projectContent,
  features,
  techStack,
} from "../utils/DescriptionSectionData";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="h-screen">
      <div className=" w-full flex justify-center">
        <div className="max-w-md w-full">
          <Navbar />
        </div>
      </div>
      <div className="mt-36">
        <Carousel data={data} />
      </div>

      <div className="md:hidden text-center">
        <span className="block font-Loto text-3xl font-semibold italic text-blue-500">
          Fastpay !!{" "}
        </span>
        <span className="block text-gray-400 text-xs italic">
          Where speed meets security
        </span>
      </div>

      <div className="mt-20 flex flex-col lg:flex-row justify-center items-center">
        <DescriptionSeaction title={"About FastPay"} content={projectContent} />
        <DescriptionSeaction title={"Tech Stack "} content={techStack} />
        <DescriptionSeaction title={"Features"} content={features} />
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
