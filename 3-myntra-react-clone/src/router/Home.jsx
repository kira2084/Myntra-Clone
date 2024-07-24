import Homeitems from "../components/Homeitem";
import {useSelector} from "react-redux"
const Home=()=>{
   const items= useSelector(store=>store.item)

  return(      
     <main>
        <div className="items-container">
            {items.map((item)=><Homeitems key={item.id} item={item}/>)}
         
        </div>
    </main>
    );
    
}
export default Home;