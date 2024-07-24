import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { itemAction } from "../store/itemslice";
import { fetchStatusAction } from "../store/fetchStatus";


const Fetchitem=()=>{
   
    const fetchstatus=useSelector(store=>store.fetchStatus);
    const dispatch=useDispatch();
    
    useEffect(()=>{
        if(fetchstatus.fetchdone)return;
        const controller=new AbortController();
        const signal=controller.signal;
       dispatch(fetchStatusAction.markfetcingStarted());
        fetch("http://localhost:8080/items",{signal})
        .then((res)=>res.json())
        .then(({items})=>{
            dispatch(fetchStatusAction.markFetchDone());
           dispatch(fetchStatusAction.markfetchingFinished());
           dispatch(itemAction.addinitialItem(items[0]));
           
          
            
        });
        return ()=>{
            controller.abort();
        }
    },[fetchstatus])
   
    return(
        <>
       
        </>
    )
}
export default Fetchitem;