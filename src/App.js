import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
// side bar
import Home from "./home";
import Duel from "./pages/Duel";
import Loot from "./pages/Loot";
import Wheel from "./pages/Wheel";
import Poker from "./pages/Poker";
import Error from "./pages/Error";

import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Router,
} from "react-router-dom";
// import Home from './pages/home';

function App() {
  return (
    <>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/duel" element={<Duel/>}/>
      <Route path="/loot" element={<Loot/>}/>
      <Route path="/Wheel" element={<Wheel/>}/>
      <Route path="/Poker" element={<Poker/>}/>
      <Route path="/Error" element={<Error/>}/>
    </Routes>

    <div className="main flex h-[100vh] w-[100vw] bg-[#1D1B3F]">
      <div className="HSC">
        <div className=" flex-row h-[100vh] w-[80vw]">
          <div className="header border-2 border-white h-[10vh] w-[80vw] ">
            Header
          </div>
          <div className="flex">
            <div className="flex navbar border-2 border-white h-[90vh] w-[10vw] ">
              Sidebar
              <Sidebar />
            </div>
            <div className="content border-2 border-white h-[90vh] w-[70vw]">
              content
            </div>
          </div>
        </div>
      </div>
      <div className="chat h-full w-full bg-green-500 text-black">
        <Chat />
      </div>
    </div>
    </>
  );
}

export default App;
