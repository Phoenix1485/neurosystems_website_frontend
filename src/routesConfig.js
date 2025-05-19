// routesConfig.js
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage';
import CalendlyComponent from './Pages/CalenderPage';
import Services from './Pages/Services';
import Projects from './Pages/ProjectPage';
import About from './Pages/AboutPage';
import ReviewForm from './Pages/Reviews';
import Error404 from './Pages/Error404';
import ProtectedRoute from './Contexts/ProtectedRoute';
import ReviewsPage from './Pages/admin/manage/ReviewsPage';
import WaitingReviewsPage from './Pages/admin/manage/WaitingReviewsPage';

const routes = [
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/profile", name: "Profile", component: () => <ProtectedRoute element={<ProfilePage />} /> },
  { path: "/", name: "Home", component: Home },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/consultation", name: "Consultation", component: CalendlyComponent },
  { path: "/services", name: "Services", component: Services },
  { path: "/about", name: "About", component: About },
  { path: "/reviews", name: "Reviews", component: ReviewForm },
  { path: "/manage/reviews/index", name: "Manage Reviews", component: ReviewsPage },
  { path: "/manage/reviews/waiting", name: "Waiting Reviews", component: WaitingReviewsPage },
  { path: "*", name: "Error404", component: Error404 }
];

export default routes;
