import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import homeShot from "../images/homeshot.png";
import { Link } from 'gatsby'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Home"
      />

      <section>

        <div className="flex flex-col bg-yellow-500;">
          {/* <div class="text-gray-700 text-center bg-yellow-500; px-4 py-2 m-2"> */}
            {/* <img
              alt="VSCode in action with some code"
              className="w-auto"
              src={homeShot} /> */}
          {/* </div> */}

          <div className="text-center bg-yellow-500; px-4 ">
            <h1 className="rounded-lg bg-gray-900 text-white text-4xl font-bold inline-block my-4 p-10">
              We Code on Tuesday ::
        </h1>

            <div className="leading-loose">
              <h2 className="font-bold text-2xl">React &amp; Rails &amp; Gatsby &amp; PostgreSQL</h2>
              <h4 className="font-normal text-xl">We do other things from Wednesday to Monday...
        </h4>
            </div></div>
        </div>

      {/* <hr/> */}
   

  <div className="rounded overflow-hidden shadow-lg bg-teal-700 mt-6 mb-3">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Gatsby Website       
    <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a></div>
    <p className="text-white text-normal"> 
      <Link to="/">How this Gatsby based site works and what the future versions will implement.</Link>

      </p>
  </div>

</div>


  <div className="rounded overflow-hidden shadow-lg bg-teal-700 mb-3">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Rails API and JSON       
    <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a></div>
    <p className="text-white text-normal">
    <Link to="/">Rails API and publishing JSON. Rails has a helpful RESTful feature. Let's get started. </Link>  

</p>
  </div>
  </div>



  <div className="rounded overflow-hidden shadow-lg bg-teal-700 mb-3">
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">React &amp; Rails       
    <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a></div>
    <p className="text-white text-normal">
    <Link to="/">Rails JSON into React. Lets build a 'modern' app for blazing fast data display.</Link>

    </p>
  </div>
</div>


</section>
    </Layout>
  );
}

export default IndexPage;
// v1 041219 - 15:13
