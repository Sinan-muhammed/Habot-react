import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";


const NavBar = ()=>{
    const [open,setOpen] = useState(false)
    return (
        <>
        <nav className="relative">

           <div className=" h-[86px] flex justify-between  items-center bg-white  ">
            <div className="sm:inline ml-[100px]">
                <img src="../../../public/Logo.png" alt="logo" className=""/>
            </div>
               
          
            <div className="">

              <div className="hidden md:flex md:justify-between md:flex-initial  md:items-center md:h-20  md:mr-14 md:gap-4">

                    <div className="item">
                        <a href=""><p className=" font-Poppins text-[#6D6E71]  md:text-[15.25px] font-[400]">Find Suppliers</p></a>
                    </div>
                    <div className="item md:flex md:align-middle justify-center cursor-pointer gap-1">
                          <label htmlFor="findServiceTags" className="text-[#6D6E71] cursor-pointer font-Poppins text-[15.25px] font-[400]">Find Service Tags </label> 
                          <i className="mt-1 ml-2 w-2 font-light text-slate-600"><FaChevronDown/></i>
                    </div>
                    <div className="button ">
                        <button className=" border-solid border-2 border-green-600 h-12 w-36 rounded-lg font-semibold text-sm text-green-600 hover:text-white hover:bg-green-600">
                            Login / Signup
                        </button>
                    </div>
              </div>

                    <div className=" md:hidden lg:hidden flex mr-6">
                      <img src="../../../public/menu.png" alt="" className="w-[36px] h-[36px] cursor-pointer z-50"
                       onClick={()=> setOpen((prev)=>!prev)}
                      />

                    </div>
            </div>
          </div>
                    <div className={`absolute  bg-[#0707078a] text-white flex flex-col h-[full] w-full  font-Poppins justify-center items-center text-[24px] gap-6 transition-all duration-1000 ease-linear ${open ? "top-0" : "top-[-190%]"}`}>
                    <a href="/">Find Suppliers</a>
                    <a href="/">Find Service Tags</a>
                    <a href="/">Sign Up / Sign In</a>
                </div>
        </nav>
        </>
    )
}

export default NavBar 