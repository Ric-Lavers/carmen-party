import "../styles/globals.css";
import { setUp } from "../scripts/cloudinary";

function MyApp({ Component, pageProps }) {
  setUp();
  return <Component {...pageProps} />;
}

export default MyApp;
