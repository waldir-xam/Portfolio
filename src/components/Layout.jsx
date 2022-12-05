import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="bg-blue-200 w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
