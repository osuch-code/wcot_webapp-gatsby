import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function BlogPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Technology"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
           <ul>
             <li className="border-b border-gray-600 p-2"><Link to="/blog/react/"><strong>React</strong> - Working with a JavaScript Framework...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/rails/"><strong>Rails</strong> - Using the API switch to access JSON data...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/postgresql/"><strong>PostgreSQL</strong> - Valleys of the Future Trophy...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/gatsby/index.js"><strong>Gatsby</strong> - React but with a Front End...</Link></li>

           </ul>

        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
           <ul>
             <li className="border-b border-gray-600 p-2"><Link to="/blog/react/"><strong>React</strong> - Working with a JavaScript Framework...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/rails/"><strong>Rails</strong> - Using the API switch to access JSON data...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/postgresql/"><strong>PostgreSQL</strong> - Valleys of the Future Trophy...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="/blog/gatsby/"><strong>Gatsby</strong> - React but with a Front End...</Link></li>

           </ul>

        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
