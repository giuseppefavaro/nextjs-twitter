import styles from "./index.module.scss";

const LayoutDynamicMessages = ({ children }) => {
    return (

      <div className={styles.wrapper}>
        <div className={styles.wrapper__content}>
          {children}
        </div>
      </div>
 
    );
  };
  
  export default LayoutDynamicMessages;