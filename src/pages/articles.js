import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

function BlogPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Blog"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
           <ul>
             <li className="border-b border-gray-600 p-2"><Link to="../articles/react/react_js_framework"><strong>React</strong> - Working with a JavaScript Framework...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="../articles/react/react_js_framework"><strong>Rails</strong> - Using the API switch to access JSON data...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="postgresql/"><strong>PostgreSQL</strong> - Valleys of the Future Trophy...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="gatsby/"><strong>Gatsby</strong> - React but with a Front End...</Link></li>

           </ul>

        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
           <ul>
             <li className="border-b border-gray-600 p-2"><Link to="react/"><strong>React</strong> - Working with a JavaScript Framework...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="rails/"><strong>Rails</strong> - Using the API switch to access JSON data...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="postgresql/"><strong>PostgreSQL</strong> - Valleys of the Future Trophy...</Link></li>
               <li className="border-b border-gray-600 p-2"><Link to="gatsby/"><strong>Gatsby</strong> - React but with a Front End...</Link></li>

           </ul>

        </div>
      </section>
    </Layout>
  );
}

export default BlogPage;
