import PropTypes from "prop-types";


const Buttons = ({text})=>{
    return (
        <>
           <div className="Main ">
                 <button className="  border-solid border-2 border-orange-400 h-[65px] w-[270px] rounded-lg font-semibold">
                       <h1 className="text-slate-600">{text}</h1>
                 </button>
           </div>
        </>
    )
}

// Define prop types
Buttons.propTypes = {
    text: PropTypes.string.isRequired,
  };

export default Buttons