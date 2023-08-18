import { createContext, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => {
    return JSON.parse(localStorage.getItem("token")) || null;
  });
  const navigate = useNavigate();

  const signUpUser = async (incoming) => {
    try {
      const res = await axios.post(
        "https://nairalandapi5.onrender.com/api/auth/users/",
        incoming
      );
      console.log(incoming);

      if (res.status === 201) {
        console.log("registered successfully");
        toast.success("registered successfully");
        navigate("/login");
        loginUser({
          username: incoming.username,
          password: incoming.password,
        });
        console.log(res);
      }
    } catch (error) {
      console.log(error.response.data.password[0]);

      if (error.response.data.username) {
        toast.error(`${error.response.data.username[0]}`);
      }
      if (error.response.data.email) {
        toast.error(`${error.response.data.email[0]}`);
      }
    }
  };

  const loginUser = async (incoming) => {
    try {
      const res = await axios.post(
        "https://nairalandapi5.onrender.com/api/auth/token/login/",
        incoming
      );
      console.log(incoming);
      console.log(res);
      if (res.status === 200) {
        toast.success("login successfully");
        setToken(res.data.auth_token);
        console.log(res.data.auth_token);
        localStorage.setItem("token", JSON.stringify(res.data.auth_token));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }

    const AuthData = {
      user,
      signUpUser,
      loginUser,
      token,
    };

    return (
      <AuthContext.Provider value={AuthData}>{children}</AuthContext.Provider>
    );
  };
};
