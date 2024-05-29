import './Buyerform.scss'


const BuyerForm = ()=>{
    return (
        <>
          <div className="buyerForm  w-full h-full bg-cover ">
                      <img src="../../../public/Bgimage.png" alt="" className='w-[100%] h-[100%] object-cover '/>
                      <div className="heading absolute top-80 left-[20%] flex flex-col items-center justify-center h-9">
                        <h1 className='text-[55px] font-[650] text-white font-Poppins'>
                            Are You a Supplier?
                        </h1>
                        <h1 className='text-[65px] font-[300] text-white font-Poppins'>
                             Explore Matching Opportunities.
                        </h1>
                    </div>
          </div>
        </>
    )
}

export default BuyerForm