const GetVerified = () => {
  return (
    <>
    <div className="main h-[300px] md:h-[254px] w-full bg-[#E8FBFF] flex flex-col justify-between md:flex-row mt-[100px]">
    <div className="text h-1/2 md:h-full w-full md:w-[50%] flex justify-center items-center md:items-center">
      <h1 className="text-[28px] md:text-[37.34px] font-Poppins font-bold ml-[38px] md:ml-0">
        Let Suppliers Find You
        <hr className="w-[159px] h-[4px] hidden md:flex md:bg-[#E7760D] mt-2 md:mt-4 md:ml-[258px] " />
      </h1>
    </div>
    <div className="button h-1/2 md:h-full w-full md:w-[50%] flex items-center justify-center">
      <button className="h-[54px] w-[216px] rounded bg-[#EB7150] text-[18px] font-Poppins font-[700] text-white leading-6 focus:bg-[#d66d50d7] focus:font-extrabold">
        Get Verified
      </button>
    </div>
  </div>
    </>
  );
};

export default GetVerified;
