import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import dogIllustration from "../images/dog-illustration.svg";

function BlogPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Technology"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <h2>Recent Blogs</h2>
           <ul>
             <li className="border-b border-gray-600 p-2"><Link to="/about/">React - Working with a JavaScript Framework...</Link></li>
               <li className="border-b border-gray-600 p-2">Rails - Using the API switch to access JSON data...</li>
               <li className="border-b border-gray-600 p-2">PostgreSQL - Valleys of the Future Trophy...</li>
               <li className="border-b border-gray-600 p-2">Gatsby - React but with a Front End...</li>

           </ul>

          {/* <cite className="font-bold mt-4 text-right text-xs uppercase block">
            – Thomas Nagel
          </cite> */}
        </div>

        {/* <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure> */}
      </section>
    </Layout>
  );
}

export default BlogPage;
