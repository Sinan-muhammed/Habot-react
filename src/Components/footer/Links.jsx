import { any } from "prop-types";

const Links = ({image})=>{
    return (
        <>
          <div className="w-[40px] h-[40px] rounded-full border-2 border-[#ffffff4c] flex items-center justify-center">
                             <img src={image} alt="" className="w-[18px] h[18px]"/>
                           </div>
        </>
    )
}



// Define prop types
Links.propTypes = {
    image:any
  };

export default Links