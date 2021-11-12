import '../styles/globals.css' 
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Layout from '../Components/Layout'

import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox> 
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp
