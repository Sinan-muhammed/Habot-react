import SearchBar from '../Searchbar/SearchBar'
import { FaLocationDot,FaSuitcase } from "react-icons/fa6";

const BuyerForm = ()=>{
    return (
        <>
          <div className="buyerForm  w-full h-full bg-cover ">
                      <img src="../../../public/Bgimage.png" alt="" className='w-[100%] h-[100%] object-cover '/>
                      <div className="heading absolute top-80 left-[19%] flex flex-col items-center justify-center h-9 gap-7 mt-20">
                        <div className='flex flex-col items-center justify-around  '>
                        <h1 className='text-[55px] font-extrabold  text-white font-Poppins'>
                            Are You a Supplier?
                        </h1>
                        <h1 className='text-[55px] font-[400] text-white relative font-Poppins '>
                             Explore Matching Opportunities.
                        </h1>
                        </div>
                        <div className="Search-bar flex justify-between gap-2">
                            <div className='flex justify-between' >
                            <i className=' text-[23px] relative text-orange-500 top-4 left-11 font-normal'><FaSuitcase/></i>    
                            <SearchBar placeholder='Search your required service here'/>
                            </div>
                            <div className='flex justify-between ml-[-22px]'>
                                <i className=' text-[23px] relative text-orange-500 top-4 left-11 font-normal'><FaLocationDot/></i>
                            <SearchBar placeholder=' Search your desired location here'/>
                            </div>
                            <div className="button">
                            <button className='h-14 bg-green-800 w-28 rounded text-white font-bold'>
                                       Search
                            </button>
                            </div>
                        </div>
                        <div className="link flex items-center gap-2">
                            <p className='text-white relative font-Poppins text-[20px] font-[650]'>Are you a buyer? </p>
                            <a href="" className='text-white relative font-Poppins text-[20px] font-[300] underline'>Click here if you are looking to post a requirements</a>
                        </div>

                    </div>

          </div>
        </>
    )
}

export default BuyerForm