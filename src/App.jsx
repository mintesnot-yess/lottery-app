import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Games_1 } from "./pages/Games_1";
import { Account } from "./pages/Account";
import { PageNotFond } from "./pages/404";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navs } from "./components/Navs";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="container">
        <Navs />
        <main>
          <Header />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/games" element={<Games_1 />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFond />} />
          </Routes>
          <ToastContainer />
        </main>
      </div>
    </>
  );
}

export default App;
