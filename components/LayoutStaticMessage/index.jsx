import styles from "./index.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LayoutStaticMessage = ({ children }) => {
    return (
      <div>

        <Header />
  
        {children}
  
        <Footer />
        
      </div>
    );
  };
  
  export default LayoutStaticMessage;