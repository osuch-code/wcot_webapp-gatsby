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
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-lg">
          <p className="text-white">
            Based on an idea by{` `}
            <a
              className="font-bold no-underline text-white text-sm"
              href="https://bryant.io"
            >
              Taylor Bryant
            </a>
          </p>
{/* 
          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            >
              GitHub
            </a>
          </p> */}
          
    <p>
      <a className="font-bold no-underline text-white" href="https://twitter.com/osuchted" target="_blank">
        <i className="icon ion-logo-twitter"></i>
      </a>
    </p>
    <p>
      <a className="font-bold no-underline text-white" href="https://linkedin.com/tedosuch" target="_blank">
        <i className="icon ion-logo-linkedin"></i>
      </a>
    </p>
    <p>
      <a className="font-bold no-underline text-white" href="https://github.com/osuchted" target="_blank">
        <i className="icon ion-logo-github"></i>
      </a>
    </p>
  
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
