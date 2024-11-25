import { React, useEffect, useState } from "react";
import "./index.css";
import Footer from "./components/footer/Footer";
import CourseCards from "./pages/coursecards/CourseCards";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "./redux/store";
import Login from "./pages/AuthPages/Login";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import OTP from "./pages/AuthPages/OTP";
import ConfirmPassword from "./pages/AuthPages/ConfirmPassword";
import SignUp from "./pages/AuthPages/SignUp";
import BuyCourse from "./pages/buyCourse/BuyCourse";
import Navbar from "./components/nav/TemporaryNavbar";
import { StoreAuth } from "./components/storeAuth/StoreAuth";
import ContactForm from "./pages/contact/ContactForm";
import RefundPolicy from "./pages/refundPolicy/RefundPolicy";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import Layout from "./pages/Admin/Layout/Layout";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import UserList from "./pages/Admin/UserList/UserList";
import UploadVideo from "./pages/Admin/UploadVideo.js/UploadVideo";
import FaqList from "./pages/Admin/Faq/FaqList";
import AddNewFaq from "./pages/Admin/Faq/AddNewFaq";
import AdminTermsOfService from "./pages/Admin/AdminTermsOfService/AdminTermsOfService";
import CourseList from "./pages/Admin/CourseList/CourseList";
import AddNewCourse from "./pages/Admin/CourseList/AddNewCourse";
import AdminPrivacyPolicy from "./pages/Admin/AdminPrivacyPolicy/AdminPrivacyPolicy";
import AdminRefundPolicy from "./pages/Admin/AdminRefundPolicy/AdminRefundPolicy";
import ContactRequest from "./pages/Admin/ContactReq/ContactRequest";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const [checkAuth, setCheckAuth] = useState(null);
  const [loadLan, setLoadLang] = useState(true);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <StoreAuth checkAuth={checkAuth} setLoadLang={setLoadLang} />

        <Routes>
          {/* Route for Home (No Navbar or Footer) */}
          <Route exact path="/" element={<Home />} />

          <Route
            path="*"
            element={
              <>
              {true ?
                <MainLayout>
                  <Routes>
                    <Route path="/courseCards" element={<CourseCards />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/logIn" element={<Login />} />
                    <Route
                      path="/forgotPassword"
                      element={<ForgotPassword />}
                    />
                    <Route path="/otp" element={<OTP />} />
                    <Route
                      path="/confirmPassword"
                      element={<ConfirmPassword />}
                    />
                    <Route path="/uploadVideo" element={<UploadVideo />} />
                    <Route path="/buyCourse" element={<BuyCourse />} />
                    <Route path="/contactForm" element={<ContactForm />} />
                    <Route path="/refundPolicy" element={<RefundPolicy />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route
                      path="/termsOfService"
                      element={<TermsOfService />}
                    />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </MainLayout>
                :
                <Layout>
                  <Routes>
                    <Route path="/dashBoard" element={<DashBoard />} />
                    <Route path="/userList" element={<UserList />} />
                    <Route path="/faqList" element={<FaqList />} />
                    <Route path="/addNewFaq" element={<AddNewFaq />} />
                    <Route path="/courseList" element={<CourseList />} />
                    <Route path="/addNewCourse" element={<AddNewCourse />} />
                    <Route path="/contactRequest" element={<ContactRequest />} />
                    <Route
                      path="/adminTermsOfService"
                      element={<AdminTermsOfService />}
                    />
                    <Route
                      path="/adminPrivacyPolicy"
                      element={<AdminPrivacyPolicy />}
                    />
                    <Route
                      path="/adminRefundPolicy"
                      element={<AdminRefundPolicy />}
                    />
                     <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </Layout>
            }
              </>
            }
          />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
