import { useEffect } from "react";

import "../styles/globals.css";
import { setUp } from "../scripts/cloudinary";

import Axios from "axios";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setUp();
    Axios.get("./api/cloudinary/getTagged").then(({ data }) => {
      window["imgUrls"] = data;
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
