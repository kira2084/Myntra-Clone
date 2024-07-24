import { useSelector } from "react-redux";
import Bagitems from "../components/Bagitem";
import Bagsummary from "../components/Bagsummary";


const Bag = () => {
  const cartItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.item);
  const addtocart = items.filter((item) => {
    const itemindex = cartItems.indexOf(item.id);
    return itemindex >= 0;
  });
  
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {addtocart.map((prod) => (
              <Bagitems item={prod} />
            ))}
          </div>
          <div className="bag-summary">
           <Bagsummary bagsummary={addtocart}/>
            
          </div>
        </div>
      </main>
    </>
  );
};
export default Bag;