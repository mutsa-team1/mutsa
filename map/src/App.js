import React,{useEffect} from "react";
import MainMap from "./pages/MainMap";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { auth } from "./firebase";
import { ProtectedRoute } from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute childeren={<MainMap/>} />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
])


function App() {
  const init = async() => {
    await auth.authStateReady();
  }
  useEffect(
    () => {
      init();
    },[])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
