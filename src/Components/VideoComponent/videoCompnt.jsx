import { useState } from "react"
import Points from "./Points"

const VideoCom = ()=>{

    const [process,setProcess] = useState(true)
    let data = {
            Buyer: ["Post your requirements.", "Sit back for multiple suppliers to contact you.",`Choose among the suppliers based on the ratings and reviews.`],

            Supplier: ["Complete your profile and get verified.",`Choose service tags and get notified about each opportunity.`,`Contact buyers, and expand your business.`,]
        }
    
    return (
        <> 
        <div className="main h-[750px] w-full flex justify-center items-center">
  <div className="mini h-[90%] w-[90%] grid grid-cols-1 sm:justify-center sm:items-center rounded bg-[#072F57] md:flex">
    <div className="left h-full md:w-[55%] w-full flex items-center justify-center relative p-4 md:p-0">
      <div className="thumbnail h-[50%] w-[80%] mx-auto md:mx-0">
        <img src="../../../public/thubnail.png" alt="" className="object-cover w-full h-full" />
      </div>
      <a href="">
        <img src="../../../public/youtube.png" alt="" className="absolute w-[100px] md:w-[200px] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2" />
      </a>
    </div>
    <div className="right h-full md:w-[45%] w-full flex flex-col justify-center items-center p-4 md:p-0">
      <div className="title flex w-full justify-around items-center h-[80px] mt-[20px] md:mt-[140px]">
        <div
          onClick={() => setProcess(true)}
          className={`buyer w-[40%] h-full flex items-center justify-center cursor-pointer ${process === true ? 'text-[#f2804b] border-b-4 border-[#f2804b]' : 'text-white border-none'}`}
        >
          <h1 className="text-[20px] md:text-[30px] font-Poppins font-extrabold">Buyer</h1>
        </div>
        <div
          onClick={() => setProcess(false)}
          className={`supplier w-[40%] h-full flex items-center justify-center cursor-pointer ${process === false ? 'text-[#f2804b] border-b-4 border-[#f2804b]' : 'text-white border-none'}`}
        >
          <h1 className="text-[20px] md:text-[30px] font-Poppins font-extrabold">Supplier</h1>
        </div>
      </div>
      <div className="data h-[60%] w-full flex pt-[20px] md:pt-[60px]">
        <div className="flex flex-col gap-3">
          <Points text={process === true ? data.Buyer[0] : data.Supplier[0]} />
          <Points text={process === true ? data.Buyer[1] : data.Supplier[1]} />
          <Points text={process === true ? data.Buyer[2] : data.Supplier[2]} />
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default VideoCom
