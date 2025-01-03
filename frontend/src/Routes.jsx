import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import all your components
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import VerifyEmail from "./Components/VerifyEmail";
import NotFound from "./Components/NotFound";
import HomePage from "./Components/HomePage.jsx";
import ResetPassword from "./Components/ResetPassword";
import ForgotPassword from "./Components/ForgotPassword.jsx";
import BlogSection from "./Components/BlogSection.jsx";
import CreateBlogPage from "./Components/CreateBlogPage.jsx";
import BlogDetailsPage from "./Components/BlogDetailsPage.jsx";
import UpdateBlogPage from "./Components/UpdateBlogPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import AddRecipePage from "./Components/AddRecipePage.jsx";
import RecipeListPage from "./Components/RecipeListPage.jsx";
import ViewRecipePage from "./Components/ViewRecipePage.jsx";
import MyProfile from "./Components/MyProfile.jsx";
import ChangePassword from "./Components/ChangePassword.jsx";
import MyBlogs from "./Components/MyBlogs.jsx";

// Protected Route for authenticated pages
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // Check if token exists
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/my-blogs" element={<MyBlogs />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/blogs/edit/:id" element={<UpdateBlogPage />} />
        <Route path="/addrecipes" element={<AddRecipePage />} />
        <Route path="/recipes" element={<RecipeListPage />} />
        <Route path="/recipes/:id" element={<ViewRecipePage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* Protected Routes */}
        {/* <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        /> */}

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
