import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Home"
      />

      <section className="text-center">
        {/* <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2"
          src={catAndHumanIllustration}
        /> */}

        <h1 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
        We Code on Tuesday
        </h1>

        <p className="leading-loose">
        <h2>React & Rails & PostgreSQL</h2>
        <h4>We do other things from Wednesday to Monday...</h4>

          {/* This is a barebones starter for Gatsby styled using{` `}
          <a
            className="font-bold no-underline text-gray-900"
            href="https://tailwindcss.com/"
          >
            Tailwind
          </a>
          , a utility-first CSS framework. */}
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
