import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function TechnologyPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Technology"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
           <ul>
             <li>React<li>
               </li>Rails</li>
               <li>PostgreSQL</li>
               <li>Gatsby</li>

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

export default TechnologyPage;
