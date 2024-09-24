import SearchBar from "./SearchBar";
import { FaLocationDot, FaSuitcase } from "react-icons/fa6";

const BuyerForm = () => {
  return (
    <>
      <div className="buyerForm  w-full md:h-full  lg:h-full h-[450px]  bg-cover">
        <img
          src="../../../public/Bgimage.png"
          alt=""
          className="w-[100%] h-[100%]  "
        />
        <div className="heading absolute  top-[70px] md:top-[220px]  md:left-[22%] flex flex-col items-center justify-center h-[350px] gap-7 mt-20  ">
          <div className="flex flex-col items-center justify-around  ">
            <h1 className="md:text-[55px] text-[35px] md:font-extrabold font-semibold text-white font-Poppins">
              Are You a Supplier?
            </h1>
            <h1 className="md:text-[55px] md:font-[400] text-[25px] text-white relative font-Poppins ml-[15px] md:ml-0">
              Explore Matching Opportunities.
            </h1>
          </div>
          <div className="Search-bar flex md:flex-row flex-col items-center justify-between gap-2 ">
            <div className="flex justify-between gap-2 md:gap-0">
              <i className=" text-[23px] relative text-[#E7760D] md:top-4 md:left-11 left-0 font-normal">
                <FaSuitcase />
              </i>
              <SearchBar placeholder="Search your required service here" />
            </div>
            <div className="flex justify-between md:ml-[-22px] gap-2 md:gap-0">
              <i className=" text-[23px] relative text-[#E7760D] md:top-4 md:left-11 left-0 font-normal">
                <FaLocationDot />
              </i>
              <SearchBar placeholder=" Search your desired location here" />
            </div>
            <div className="button">
              <button className="md:h-14 h-10 bg-green-800 w-28 rounded text-white font-bold">
                Search
              </button>
            </div>
          </div>
          <div className="link flex flex-col md:flex-row items-center gap-2">
            <p className="text-white relative font-Poppins text-[16px] md:text-[20px] font-[650]">
              Are you a buyer?{" "}
            </p>
            <a
              href=""
              className="text-white relative font-Poppins ml-[35px] md:ml-0 text:[12px] md:text-[20px] font-[300] underline"
            >
              Click here if you are looking to post a requirements
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerForm;
