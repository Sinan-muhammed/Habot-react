import Linkidin from '../../../public/linkidin.png'
import Twitter from '../../../public/twitter.png'
import Facebook from '../../../public/facebook.png'
import insta from '../../../public/insta.png'
import Links from './Links'


const Footer = ()=>{
    return (
        <>
         <footer className=" h-[232px] w-full bg-[#123557] flex items-center justify-center ">
               <div className=" h-[70%] w-[80%] flex border-t-[1px] border-b-[1px] border-t-[#ffffff4c] border-b-[#ffffff4c]">
                    <div className="left h-full w-[60%]  flex">
                               <div className="h-full w-[30%]  flex justify-center  flex-col gap-2">
                                    <img src="../../../public/LogoWhite.png" alt="" className="w-[206px] h-[40.15px]"/>
                                    <p className="text-[16px] font-Poppins font-[300] leading-[32px] ml-4 text-white">© R Singhania</p>
                               </div>
                               <div className="grid grid-cols-3 w-[70%] justify-center ml-14 mt-4"  >
                                    <div className="flex flex-col text-white gap-5">
                                        <h1>Company</h1>
                                        <div className="flex flex-col">
                                            <a href="">About</a>
                                            <a href="">FAQ</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-white gap-5">
                                        <h1>Terms</h1>
                                        <div className="flex flex-col">
                                            <a href="">Data privacy</a>
                                            <a href="">Terms</a>
                                            <a href="">Accessibility</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-white gap-5"> 
                                        <h1>Related</h1>
                                        <div className="flex flex-col">
                                            <a href="">Find Buyer</a>
                                            <a href="">Feedback</a>
                                        </div>
                                    </div>
                               </div>
                    </div>
                    <div className="right h-full w-[40%]  flex justify-end items-center gap-4">
                          <Links image={Linkidin}/>
                          <Links image={Twitter}/>
                          <Links image={Facebook}/>
                          <Links image={insta}/>
                    </div>
               </div>
         </footer>
        </>
    )
}

export default Footer 