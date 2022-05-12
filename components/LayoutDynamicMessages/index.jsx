import styles from "./index.module.scss";

import Header from "../../components/Header";

const LayoutDynamicMessages = ({ children }) => {
    return (
      <div>

        <Header />
  
        {children}
  
        <footer>Footer LayoutDynamicMessages</footer>
        
      </div>
    );
  };
  
  export default LayoutDynamicMessages;