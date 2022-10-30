import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CadastroBovinoProvider } from "../context/cadastro-bovino";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CadastroBovinoProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </CadastroBovinoProvider>
  );
}

export default MyApp;
