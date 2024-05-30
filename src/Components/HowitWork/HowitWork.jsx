import Section from "./Section"

const HowItWork = ()=>{
    return (
        <>
          <div className="main h-[809px] w-full bg-white flex flex-col justify-center items-center gap-14 mt-14">
                  <div className="text flex flex-col justify-center items-center gap-6">
                    <div className="heder text-center">
                        <h1 className="font-Poppins font-bold text-[37.34px] leading-[48px]">How it works?</h1>
                    </div>
                    <div className="paragraph text-center h-[70px] w-[1200px]">
                        <p className="font-Poppins font-[400] text-[17.16px] leading-[26px]">
                        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with <br/>
                        potential buyers, and build successful business relationships, sharing valuable feedback.
                        </p>
                    </div>
                  </div>
                  <div className="sections ">
                           <Section/>
                  </div>
          </div>
        </>
    )
}

export default HowItWork