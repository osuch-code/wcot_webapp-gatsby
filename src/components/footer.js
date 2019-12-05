import React from "react";

function FooterPage()
{
    return(
        <footer className="bg-teal-700">
   
        <nav className ="text-right p-2 text-3xl">
         <a className="font-bold no-underline text-white p-2" href="https://twitter.com/osuchted" target="_blank">
           <i className="icon ion-logo-twitter"></i>
         </a>
      
      
         <a className="font-bold no-underline text-white p-2" href="https://www.linkedin.com/in/ted-osuch/" target="_blank">
           <i className="icon ion-logo-linkedin"></i>
         </a>

      
         <a className="font-bold no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
           <i className="icon ion-logo-github"></i>
         </a>
         </nav>
       
         </footer>

    );
}

export default FooterPage