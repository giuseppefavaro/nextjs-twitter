import Header from "../../components/Header";
import Footer from "../../components/Footer";


const LayoutDefault = ({ children }) => {
    return (
      <div>

        <Header />
  
        {children}
  
        <Footer />
        
      </div>
    );
  };
  
  export default LayoutDefault;