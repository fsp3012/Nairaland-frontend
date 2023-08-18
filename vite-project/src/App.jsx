import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);
function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
