import PropTypes from "prop-types";


const Buttons = ({text})=>{
    return (
        <>
          <div className="Main">
      <button className="border-solid border-2 border-[#E7760D] h-10 md:h-12 lg:h-14 w-24 md:w-32 lg:w-40 rounded-lg font-semibold ">
        <h1 className="text-slate-600 sm:text-[10px]">{text}</h1>
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