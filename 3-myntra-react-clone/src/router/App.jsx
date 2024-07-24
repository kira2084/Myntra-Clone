import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Fetchitem from "../components/Fetchitem";
import { useSelector } from "react-redux";
import Loading from "../components/LoadingSpinner";


function App() {
 const fetchstatus=useSelector(store=>store.fetchStatus)
 
  return (
    <>
      <Header/>
      <Fetchitem/>
      {fetchstatus.currentlyfetching?<Loading/>:<Outlet/>}
      <Footer/>
      
    </>
  );
}

export default App;
