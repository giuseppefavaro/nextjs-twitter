import styles from "./index.module.scss";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const LayoutDynamicMessages = ({ children }) => {
    return (

      <div class={styles.wrapper}>
        <div class={styles.wrapper__content}>
          {children}
        </div>
      </div>
 
    );
  };
  
  export default LayoutDynamicMessages;