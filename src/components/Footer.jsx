import React from "react";

const Footer = () => {
  return (
    <footer className="border border-x-0 border-b-0 text-center py-4">
      &copy; {new Date().getFullYear()} Weather Mood | All Rights Reserved.
    </footer>
  );
};

export default Footer;
