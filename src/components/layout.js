import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-teal-700">
   
     <nav className ="text-right p-2 text-3xl">
      <a className="font-bold no-underline text-white p-2" href="https://twitter.com/osuchted" target="_blank">
        <i className="icon ion-logo-twitter"></i>
      </a>
   
   
      <a className="font-bold no-underline text-white p-2" href="https://linkedin.com/tedosuch" target="_blank">
        <i className="icon ion-logo-linkedin"></i>
      </a>

   
      <a className="font-bold no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
        <i className="icon ion-logo-github"></i>
      </a>
      </nav>
    
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
