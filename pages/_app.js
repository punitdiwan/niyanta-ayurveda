import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import Layout from '../Components/Layout'
import { ToastProvider } from "react-toast-notifications/dist/ToastProvider";

import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </SimpleReactLightbox>
  );
}

export default MyApp;
