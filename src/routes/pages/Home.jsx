import BuyerForm from "../../Components/Buyerform/Buyerform"
import NavBar from "../../Components/navBar/NavBar"

const Home = ()=>{
    return (
        <>
           <div className="header">
            <NavBar/>
           </div>  
           <div className="Buyer">
              <BuyerForm/>
            </div>        
        </>
    )
}

export default Home