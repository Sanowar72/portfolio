import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-100 w-[100%] py-4">
      <div className="align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <p className="text-lg tracking-wide">
          &copy; {new Date().getFullYear()} Web
          <span className="text-emerald-600">Dev</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
