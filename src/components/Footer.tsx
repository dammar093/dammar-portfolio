import React from "react";

const Footer = () => {
  return (
    <footer className="p-2 md:px-10 lg:px-32 bg-blue-950 text-center mt-8 text-white text-sm">
      Copyright &copy; {new Date().getFullYear()} reserved by Dammar Singh Rana
    </footer>
  );
};

export default Footer;
