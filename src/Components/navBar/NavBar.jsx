import { FaChevronDown } from "react-icons/fa";


const NavBar = ()=>{
    return (
        <>
          <div className="Navbar flex-none flex justify-between  items-center bg-white z-999">
            <div className="right  ml-14 ">
                <img src="../../../public/Logo.png" alt="logo" className="h-11 w-48"/>
            </div>
            <div className="left flex justify-between flex-initial w-[30%] items-center h-20  mr-14">
                    <div className="item">
                        <a href=""><p className="font-light text-slate-600">Find Suppliers</p></a>
                    </div>
                    <div className="item flex align-middle justify-center cursor-pointer">
                          <label htmlFor="findServiceTags" className="text-slate-600 cursor-pointer">Find Service Tags </label>
                          <i className="mt-1 ml-2 w-2 font-light text-slate-600"><FaChevronDown/></i>
                    </div>
                    <div className="button ">
                        <button className=" border-solid border-2 border-green-600 h-12 w-36 rounded-lg font-semibold text-sm text-green-600 hover:text-white hover:bg-green-600">
                            Login / Signup
                        </button>
                    </div>
            </div>
          </div>
        </>
    )
}

export default NavBar 