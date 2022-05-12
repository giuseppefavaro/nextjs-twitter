import styles from "./index.module.scss";


const LayoutDynamicMessages = ({ children }) => {
    return (
      <div>

        <header>HEader LayoutDynamicMessages</header>
  
        {children}
  
        <footer>Footer LayoutDynamicMessages</footer>
        
      </div>
    );
  };
  
  export default LayoutDynamicMessages;