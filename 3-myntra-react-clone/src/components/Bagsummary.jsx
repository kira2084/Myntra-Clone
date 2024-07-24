import { useSelector } from "react-redux";

const Bagsummary=()=>{
  const bagItemsid = useSelector((store) => store.bag);
  const items = useSelector((store) => store.item);
  const addtocart = items.filter((item) => {
    const itemindex = bagItemsid.indexOf(item.id);
    return itemindex >= 0;
  });
    
    let convenience=99;
    let totalItem=bagItemsid.length;
    let totalDiscount=0;
    let totalMRP=0;
    addtocart.forEach((item)=>{
       
        totalMRP+=item.original_price;
        totalDiscount+=item.original_price-item.current_price;
       
    })
    console.log(totalDiscount,":",totalMRP)
    let finalPayment=totalMRP-totalDiscount+convenience;
    return (
      <>
        <div className="bag-details-container">
          <div className="price-header">
            PRICE DETAILS ({totalItem} Items){" "}
          </div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">{convenience}</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </>
    );
}
export default Bagsummary;