import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CadastroBovinoProvider } from "../context/cadastro-bovino";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/auth";
import { OxListProvider } from "../context/oxList";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.BASE_URL);
  

  return (
    <AuthProvider>
      <CadastroBovinoProvider>
        <OxListProvider>
        <ToastContainer />
        <Component {...pageProps} />
        </OxListProvider>
      </CadastroBovinoProvider>
    </AuthProvider>
  );
}

export default MyApp;
