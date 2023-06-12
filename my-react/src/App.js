import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import CartPage from "./pages/CartPage";
import MinePage from "./pages/MinePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/mine" element={<MinePage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
