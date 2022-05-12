import styles from "./index.module.scss";


const LayoutStaticMessage = ({ children }) => {
    return (
      <div>

        <header>HEader LayoutStaticMessage</header>
  
        {children}
  
        <footer>Footer LayoutStaticMessage</footer>
        
      </div>
    );
  };
  
  export default LayoutStaticMessage;