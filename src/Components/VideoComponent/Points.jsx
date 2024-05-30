import PropTypes from "prop-types";


const Points = ({text})=>{
    return (
        <>
           <div className="flex items-center  w-[80%]">                                          
                                        <div className="w-[10%] ">
                                        <img src="../../../public/checked.png" alt="" className="w-[20px] h-[20px] "/>
                                        </div>
                                        <div className="w-[90%] ">
                                        <h1 className="text-[20px] font-Poppins text-white font-semibold">{text}</h1>
                                        </div>
                                        </div>
        </>
    )
}


// Define prop types
Points.propTypes = {
    text: PropTypes.string.isRequired,
  };


export default Points