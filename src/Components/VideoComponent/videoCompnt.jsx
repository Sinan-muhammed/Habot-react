import { useState } from "react"

const VideoCom = ()=>{

    const [process,setProcess] = useState(true)
    let data = {
            Buyer: ["Post your requirements.", "Sit back for multiple suppliers to contact you.",`Choose among the suppliers based on the ratings and reviews.`],

            Supplier: ["Complete your profile and get verified.",`Choose service tags and get notified about each opportunity.`,`Contact buyers, and expand your business.`,]
        }
    
    return (
        <> 
         <div className="main h-[750px] w-full  flex justify-center items-center">
                  <div className="mini h-[90%] w-[90%]  rounded bg-[#072F57] flex">
                    <div className="left h-full w-[55%] flex items-center justify-center relative">
                        <div className="thubnail h-[50%] w-[80%]">
                           <img src="../../../public/thubnail.png" alt="" className=""/>
                        </div>
                           <a href="" ><img src="../../../public/youtube.png" alt="" className="absolute w-[200px] top-[37%] left-[35%]"/></a>
                    </div>
                    <div className="right h-full w-[45%] flex flex-col justify-center items-center ">
                               <div className="title flex w-full justify-around items-center  h-[80px] mr-[62px] mt-[140px]">
                                <div onClick={()=>setProcess(true)} className={`buyer w-[40%] h-full flex items-center justify-center ${process === true ? 'text-[#f2804b] border-b-4 border-[#f2804b]' : 'text-white border-none'}`}><h1 className="text-[30px] font-Poppins font-extrabold "> Buyer</h1></div>
                                <div onClick={()=>setProcess(false)} className={`supplier w-[40%] h-full flex items-center justify-center ${process === false ? 'text-[#f2804b] border-b-4 border-[#f2804b]' :'text-white border-none' }`}><h1 className="text-[30px] font-Poppins font-extrabold ">Supplier</h1></div>
                               </div>
                               <div className="data h-[60%]  w-full flex pt-[60px] ">
                                    <div className="flex flex-col gap-3">
                                       
                                        <div className="flex items-center  w-[80%]">                                          
                                        <div className="w-[10%] bg-white">
                                        <img src="../../../public/checked.png" alt="" className="w-[20px] h-[20px] "/>
                                        </div>
                                        <div className="w-[90%] bg-slate-400">
                                        <h1 className="text-[20px] font-Poppins text-white font-semibold">{process === true ? data.Buyer[0] : data.Supplier[0]}</h1>
                                        </div>
                                        </div>
                                        <div className="flex items-center  w-[80%]">                                          
                                        <div className="w-[10%] bg-white">
                                        <img src="../../../public/checked.png" alt="" className="w-[20px] h-[20px] "/>
                                        </div>
                                        <div className="w-[90%] bg-slate-400">
                                        <h1 className="text-[20px] font-Poppins text-white font-semibold">{process === true ? data.Buyer[1] : data.Supplier[1]}</h1>
                                        </div>
                                        </div>
                                        <div className="flex items-center  w-[80%]">                                          
                                        <div className="w-[10%] bg-white">
                                        <img src="../../../public/checked.png" alt="" className="w-[20px] h-[20px] "/>
                                        </div>
                                        <div className="w-[90%] bg-slate-500">
                                        <h1 className="text-[20px] font-Poppins text-white font-semibold">{process === true ? data.Buyer[2] : data.Supplier[2]}</h1>
                                        </div>
                                        </div>
                                       
                                    </div>
                               </div>
                    </div>
                  </div>
         </div>
        </>
    )
}

export default VideoCom
