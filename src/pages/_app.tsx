import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CadastroBovinoProvider } from "../context/cadastro-bovino";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CadastroBovinoProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </CadastroBovinoProvider>
    </AuthProvider>
  );
}

export default MyApp;
