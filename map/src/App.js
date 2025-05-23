import React,{useEffect} from "react";
import MainMap from "./pages/MainMap";
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import { auth } from "./firebase";
import { ProtectedRoute } from "./components/protected-route";

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
