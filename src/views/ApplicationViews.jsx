import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/Nav/NavBar";
import { useEffect, useState } from "react";

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
        <Route index element={<>Render Home Page here</>} />
        <Route
          path="/employees"
          element={<>Render Employees Component here</>}
        />
        <Route
          path="/sales"
          element={<>Render Sales Report Component here</>}
        />
        <Route
          path="/orders"
          element={<>Render Order List/Today's Orders Component here</>}
        />
      </Route>
    </Routes>
  );
};
