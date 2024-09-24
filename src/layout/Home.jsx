import BuyerForm from "../Components/Buyerform/Buyerform";
import GetVerified from "../Components/Getverified/GetVerified";
import HowItWork from "../Components/HowitWork/HowitWork";
import Details from "../Components/ServiceDetails/Details";
import VideoCom from "../Components/VideoComponent/videoCompnt";
import Footer from "../Components/footer/footer";
import NavBar from "../Components/navBar/NavBar";

const Home = () => {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="Buyer">
        <BuyerForm />
      </div>
      <div className="Details">
        <Details />
      </div>
      <div className="video-Com">
        <VideoCom />
      </div>
      <div className="get-verified">
        <GetVerified />
      </div>
      <div className="How-Work">
        <HowItWork />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
