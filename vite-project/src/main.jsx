import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "Poppins",
  body: "Tahoma",
};
// const breakpoints = {
//   base: "375px",
//   sm: "425px",
//   md: "768px",
//   lg: "1024px",
//   xl: "1440px",
// };

const theme = extendTheme({ fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode theme={theme}>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);
