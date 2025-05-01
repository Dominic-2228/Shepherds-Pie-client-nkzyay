import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ViewOrder } from "./components/viewOrder/ViewOrder.jsx";

function App() {

  return (
  <Routes>
    <Route path={"/"}>
      <Route index element={<div>Welcome</div>} />
      <Route path="orders" element={<ViewOrder />} />
    </Route>
  </Routes>
  )
}

export default App;
