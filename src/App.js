import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Home from "./home";
import Duel from "./pages/Duel";
import Error from "./pages/Error";


import {
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
// import Home from './pages/home';


function App() {
  return (

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

 

  );
}

export default App;
