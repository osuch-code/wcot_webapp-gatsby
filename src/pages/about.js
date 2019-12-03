import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="About"
      />

      <section className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="border-l-4 border-gray-900 leading-loose pl-4 text-justify">
            We code on tuesday - 
            using React, Rails, PostgerSQL and Gatsby we construct and build and carry the bricks.
          </blockquote>
{/* 
          <cite className="font-bold mt-4 text-right text-xs uppercase block">
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

export default AboutPage;
