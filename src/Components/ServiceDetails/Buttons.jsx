import PropTypes from "prop-types";


const Buttons = ({text})=>{
    return (
        <>
          <div className="Main">
      <button className="border-solid border-2 border-[#E7760D] h-[65px] w-[260px] rounded-lg font-semibold hover:bg-[#e7760d91] hover:border-none">
        <h1 className="text-slate-600 text-[18.75px] font-[500] ">{text}</h1>
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