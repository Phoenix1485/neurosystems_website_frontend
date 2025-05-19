import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import MouseFollower from "./Components/MouseFollower";
import Error404 from "./Pages/Error404";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProfilePage from "./Pages/ProfilePage";
import CalendlyComponent from "./Pages/CalenderPage";
import Services from "./Pages/Services";
import Footer from "./Components/Footer";
import PageWrapper from "./Contexts/PageWrapper";
import Projects from "./Pages/ProjectPage";
import About from "./Pages/AboutPage";
import ReviewForm from "./Pages/Reviews";
import ProtectedRoute from "./Contexts/ProtectedRoute";
import ReviewsPage from "./Pages/admin/manage/ReviewsPage";
import WaitingReviewsPage from "./Pages/admin/manage/WaitingReviewsPage";
import LinksPage from "./Pages/LinksPage";
import { AuthProvider } from "./Contexts/AuthContexts";
import LogoutPage from "./Pages/LogoutPage";
import Unsubscribe from "./Pages/UnsubscribeMail";
import TestPage from "./Pages/TestPage";

// Animated background component
const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500 opacity-5 blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-5 blur-3xl" />
            <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-cyan-500 opacity-5 blur-3xl" />
        </div>
    );
};
const App = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <AnimatedBackground />
      <AuthProvider>
        <Router>
          <MouseFollower />
          <PageWrapper>
            <Navbar />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/logout" element={<LogoutPage />} />
              </Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
              <Route path="/unsubsribe" element={<Unsubscribe />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route
                exact
                path="/consultation"
                element={<CalendlyComponent />}
              />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/reviews" element={<ReviewForm />} />
              <Route exact path="/links" element={<LinksPage />} />
              <Route exact path="/manage/reviews" element={<ReviewsPage />} />
              <Route
                exact
                path="/manage/reviews/waiting"
                element={<WaitingReviewsPage />}
              />

              <Route
                exact
                path="/test"
                element={<TestPage />}
              />

              <Route exact path="*" element={<Error404 />} />
            </Routes>
          </PageWrapper>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
