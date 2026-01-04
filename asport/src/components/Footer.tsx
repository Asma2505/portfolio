import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-50 text-yellow-500 py-1 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Asma R | AIDS | Chennai, India</p>
        <p>asmariyaz870@gmail.com | +91 90927 54728</p>
      </div>
    </footer>
  );
};

export default Footer;
