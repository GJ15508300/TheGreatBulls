import { React } from "react";
import "./index.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CourseCards from "./pages/coursecards/CourseCards";
import { Route, Routes } from "react-router-dom";
// import { styled } from "@mui/system";
// import { Container, CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "./redux/store";
import UploadVideo from "./pages/uploadVideo/UploadVideo";
import Login from "./pages/AuthPages/Login";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import OTP from "./pages/AuthPages/OTP";
import ConfirmPassword from "./pages/AuthPages/ConfirmPassword";
import SignUp from "./pages/AuthPages/SignUp";
import BuyCourse from "./pages/buyCourse/BuyCourse";
import Navbar from "./components/nav/TemporaryNavbar";


function App() {





  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        {/* <RootContainer> */}
        {/* <CssBaseline /> */}
        {/* <Nav /> */}
        <Navbar />
        {/* <ContentContainer
            component="main"
            style={{ backgroundColor: "red" }}
          > */}
          <div className="pt-16">
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/logIn" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route exact path="/" element={<CourseCards />} />    
          <Route path="/uploadVideo" element={<UploadVideo />} />
          <Route path="/buyCourse" element={<BuyCourse />} />
        </Routes>
        </div>
        {/* </ContentContainer> */}
        <Footer />
        {/* </RootContainer> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
