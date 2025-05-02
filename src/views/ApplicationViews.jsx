import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/Nav/NavBar";
import { useEffect, useState } from "react";
import { Employees } from "../components/Employees";
import { EmployeeEdit } from "../components/Forms/EmployeeEdit.jsx";
import { Home } from "../components/Home/Home";
import { CreateOrder } from "../components/Orders/CreateOrder";
import { ViewOrder } from "../components/viewOrder/ViewOrder.jsx";
import { CreatePizza } from "../components/Forms/CreatePizza.jsx";

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
        <Route path="/CreateOrder" element={<CreateOrder />} />
        <Route
          path="/employees"
          element={<Employees currentUser={currentUser} />}
        />
        <Route path="/employees/:employeeId" element={<EmployeeEdit />} />
        <Route
          path="/sales"
          element={<>Render Sales Report Component here</>}
        />
        <Route path="/orders" element={<ViewOrder />} />
        <Route path="/CreatePizza" element={<CreatePizza />} />
      </Route>
    </Routes>
  );
};
