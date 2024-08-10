import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagination from "./component/pagination/Pagination";
import About from "./About";
import ProtectedRoute from "./component/protectedRoute/ProtectedRoute";
import Profile from "./component/protectedRoute/testRoute/Profile";
import Login from "./component/protectedRoute/testRoute/Login";

function App() {
  return (
    <>
      <header className="text-2xl py-5 bg-black text-white text-center ">
        Hello
      </header>
      <BrowserRouter>
      <Routes>
     
      <Route path="/login" element={<Login />}></Route>
      <Route element={<ProtectedRoute/>}>
      <Route path="/about" element={<About />}></Route>
      <Route path="/pagination" element={<Pagination />}></Route>
      </Route>
     
      </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login"> element={<Login />}</Route>
          
          
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
