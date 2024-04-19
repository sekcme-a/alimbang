import Aos from "aos";
import "aos/dist/aos.css";
import "public/styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "../dapp/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { DataProvider } from "context/data";

import "components/header/header.css"
// import "components/home/hero/hero.css"
import "public/styles/custom.css"
import FullScreenLoader from "components/FullScreenLoader";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  // aos animation activation

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  return (
    <Provider store={store}>
      <DataProvider>
      <div className="page-wrapper" style={{backgroundColor:"rgb(249, 249, 249)"}}>
        <Component {...pageProps} />

        {/* Toastify */}
        <ToastContainer
          position="bottom-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <!-- Scroll To Top --> */}
        <ScrollToTop />
        <FullScreenLoader />
      </div>
      </DataProvider>
    </Provider>
  );
}

export default MyApp;
