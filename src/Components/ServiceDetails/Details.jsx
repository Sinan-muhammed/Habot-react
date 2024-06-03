import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Buttons from "./Buttons";

const Details = () => {
  return (
    <>
      <div className="Main h-auto md:h-[500px] bg-white w-full flex flex-col md:flex-row items-center justify-around p-4 md:p-8">
        <div className="left flex flex-col justify-center md:ml-[50px] gap-8 mt-8 md:mt-0 text-center md:text-left">
          <div className="header flex flex-col md:flex-row gap-2">
            <h1 className="text-black text-3xl md:text-[40px] font-extrabold font-Poppins">
              Ready to dive into
            </h1>
            <h1 className="text-3xl md:text-[40px] font-extrabold font-Poppins text-blue-950">
              HABOT?
            </h1>
          </div>
          <div className="paragraph">
            <p className="text-lg md:text-[18px] font-Poppins font-[400] text-start">
              Signing up with HABOT opens the door to a world of new opportunities <br/>
              and potential for business growth. Gain access to a vibrant community <br/>
              of like-minded individuals, unlock valuable resources, and take the first <br/>
              step towards realizing your entrepreneurial dreams.
            </p>
          </div>
          <div className="button flex justify-center md:justify-start">
            <button className="h-[55px] md:h-[65px] lg:h-[75px] rounded bg-[#00732F] w-[270px] md:w-[320px] lg:w-[380px] text-white flex justify-center items-center hover:bg-[#49bb78]">
              <h1 className="text-[18px] md:text-[20px] lg:text-[24px] font-Poppins font-bold ml-[20px]">
                Sign up Today !
              </h1>
              <i className="text-[42px] md:text-[48px] lg:text-[56px] relative font-thin pl-[45px]"><LiaLongArrowAltRightSolid /></i>
            </button>
          </div>
        </div>
        <div className="right flex flex-col md:flex-row gap-6 mt-8 md:mt-0">
          <div className="row1 flex flex-col gap-6">
            <Buttons text='Abu Dhabi' />
            <Buttons text='Sharjah & Ajman' />
            <Buttons text='Ras Al Khaimah' />
          </div>
          <div className="row2 flex flex-col gap-6">
            <Buttons text='Dubai' />
            <Buttons text='Fujairah' />
            <Buttons text='Umm Al Quwain' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
