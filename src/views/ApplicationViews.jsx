import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/Nav/NavBar";
import { useEffect, useState } from "react";
import {Home } from"../components/Home/Home"
import { CreateOrder } from "../components/Orders/CreateOrder";
import { ViewOrder } from "../components/viewOrder/ViewOrder.jsx";
import { SalesReport } from "../components/Sales Reports/SalesResports.jsx";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
  
          </>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/CreateOrder"
          element={< CreateOrder />}
        />
        <Route
          path="/employees"
          element={<>Render Employees Component here</>}
        />
        <Route
          path="/sales"
          element={<SalesReport/>}
        />
        <Route
          path="/orders"
          element={<ViewOrder/>}
        />
      </Route>
    </Routes>
  );
};
