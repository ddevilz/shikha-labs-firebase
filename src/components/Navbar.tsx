import React from "react";
import AuthButton from "@/components/AuthButton";

const Navbar: React.FC = () => {
  return (
    <nav className=" p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-extrabold">LOGO</span>
      </div>
      <AuthButton />
    </nav>
  );
};

export default Navbar;
