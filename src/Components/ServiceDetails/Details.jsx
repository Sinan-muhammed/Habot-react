import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Buttons from "../Buttons/Buttons";

const Details = ()=>{
    return (
        <>
           <div className="Main h-[500px] bg-white w-full flex items-center justify-around">
              <div className="left flex flex-col justify-center ml-[50px] gap-8 mt-[20px]">
                 <div className="header flex gap-2 ">
                    <h1 className=" text-black text-[40px] font-extrabold font-Poppins">
                    Ready to dive into 
                    </h1>
                    <h1 className="text-[40px] font-extrabold  font-Poppins text-blue-950">
                      HABOT?
                    </h1>
                 </div>
                 <div className="pargraph">
                    <p className="text-[18px] font-Poppins font-[400]">
                    Signing up with HABOT opens the door to a world of new opportunities <br/>
                      and potential for business growth. Gain access to a vibrant community <br/>
                      of like-minded individuals, unlock valuable resources, and take the first <br/>
                      step towards realizing your entrepreneurial dreams.
                    </p>
                 </div>
                 <div className="button ">
                    <button className="h-[55px] rounded bg-[#00732F] w-[320px] text-white  flex justify-center items-center hover:bg-[#49bb78]">
                        <h1 className="text-[18px] font-Poppins font-bold ml-[20px]">
                       Sign up Today !
                        </h1>
                       <i className="text-[42px] relative font-thin pl-[45px]"><LiaLongArrowAltRightSolid/></i>
                    </button>
                 </div>
              </div>
              <div className="right flex gap-6 mt-4">
                <div className="row1 flex flex-col gap-6">
                  <Buttons text=' Abu Dhabi'/>
                  <Buttons text='Sharjah & Ajman'/>
                  <Buttons text=' Ras Al Khaimah'/>
                </div>
                <div className="row2 flex flex-col gap-6">
                <Buttons text=' Dubai'/>
                <Buttons text=' Fujairah'/>
                <Buttons text='Umm Al Quwain'/>
                </div>
              </div>
           </div>
        </>
    )
}

export default Details