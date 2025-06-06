import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routebar from "../../components/RouteBar/Routebar";

const DefaultLayout = () => {
  const { pathname } = useLocation(); // Get the current route
  console.log(pathname);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]); // Runs when route changes

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Header />
        <div className="flex-grow font-helvetica-light tracking-wide text-[#1E1E1E]">
          <Outlet />
        </div>
        <Routebar />
        <Footer />
      </ErrorBoundary>
    </div>
  );
};

export default DefaultLayout;
