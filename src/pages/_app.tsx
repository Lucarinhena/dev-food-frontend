import "../styles/globals.scss";
import { AppProps } from "next/app";
import * as React from 'react';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



import { AuthProvider } from "@/contexts/AuthContext";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} theme="dark"/>
    </AuthProvider>
  );
}

export default MyApp;
