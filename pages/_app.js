import "../styles/globals.css";

//INTERNAL IMPORT
import { Navbar } from "@/components/componentIndex";
const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;