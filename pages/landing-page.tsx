import React from "react";
import Main from "@/components/Home/Main";
import Footer from "@/components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
