import SearchBar from '../Searchbar/SearchBar'
import { FaLocationDot } from "react-icons/fa6";

const BuyerForm = ()=>{
    return (
        <>
          <div className="buyerForm  w-full h-full bg-cover ">
                      <img src="../../../public/Bgimage.png" alt="" className='w-[100%] h-[100%] object-cover '/>
                      <div className="heading absolute top-80 left-[22%] flex flex-col items-center justify-center h-9">
                        <h1 className='text-[55px] font-extrabold  text-white font-Poppins'>
                            Are You a Supplier?
                        </h1>
                        <h1 className='text-[55px] font-[420] text-white font-Poppins'>
                             Explore Matching Opportunities.
                        </h1>
                        <div className="Search-bar flex justify-between gap-4">
                            <SearchBar placeholder='Search your required service here'/>
                            <SearchBar placeholder=' Search your desired location here'/>
                            <button className='h-14 bg-green-800 w-28 rounded text-white font-bold'>
                                       Search
                            </button>
                        </div>
                    </div>

          </div>
        </>
    )
}

export default BuyerForm