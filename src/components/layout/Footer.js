import React from "react";

const Footer = () => {
  return (
    <footer className='p-5 bg-info text-center'>
        <p className="m-0">All Copy Rights Reserved &copy; {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}</p>
    </footer>
  );
}

export default Footer;