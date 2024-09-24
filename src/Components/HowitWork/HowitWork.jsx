import Section from "./Section";

const HowItWork = () => {
  return (
    <>
      <div className="main h-auto min-h-[809px] w-full bg-white flex flex-col justify-center items-center gap-14 mt-14 p-4">
        <div className="text flex flex-col justify-center items-center gap-6">
          <div className="header text-center">
            <h1 className="font-Poppins font-bold text-[28px] md:text-[37.34px] leading-[36px] md:leading-[48px]">
              How it works?
            </h1>
          </div>
          <div className="paragraph max-h-max text-center w-full px-4">
            <p className="font-Poppins font-[400] text-[16px] md:text-[17.16px] leading-[24px] md:leading-[26px] ">
              Buyers post their needs and review top suppliers, while suppliers
              complete profiles, connect with <br />
              potential buyers, and build successful business relationships,
              sharing valuable feedback.
            </p>
          </div>
        </div>
        <div className="sections w-full px-4 grid justify-center">
          <Section />
        </div>
      </div>
    </>
  );
};

export default HowItWork;
