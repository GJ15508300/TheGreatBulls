import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/TemporaryNavbar";

const MainLayout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="mt-28">{children}</div>
        <Footer />
      </>
    );
  };
  
  export default MainLayout;
  