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

        <div class="flex flex-col bg-yellow-500;">
          {/* <div class="text-gray-700 text-center bg-yellow-500; px-4 py-2 m-2">
            <img
              alt="VSCode in action with some code"
              className="h-64"
              src={homeShot} />
          </div> */}

          <div class="text-center bg-yellow-500; px-4 py-2 m-2">
            <h1 className="rounded-lg bg-gray-900 text-white text-4xl font-bold inline-block my-8 p-10">
              We Code on Tuesday ::
        </h1>

            <p className="leading-loose">
              <h2 className="font-bold text-2xl">React &amp; Rails &amp; Gatsby &amp; PostgreSQL</h2>
              <h4 className="font-normal text-xl">We do other things from Wednesday to Monday...
        </h4>
            </p></div>
        </div>

      <hr/>
   

  <div class="rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Gatsby Website</div>
    <p class="text-white text-normal"> 
      <Link to="/">How this Gatsby based site works</Link>
      <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a>
      </p>
  </div>

</div>


  <div class="rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Rails API and JSON</div>
    <p class="text-white text-normal">
    <Link to="/">Rails API and publishing JSON </Link>  
    <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a> 
</p>
  </div>
  </div>



  <div class="rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">React &amp; Rails</div>
    <p class="text-white text-normal">
    <Link to="/">Rails JSON into React</Link>
    <a className="font-bold text-3xl no-underline text-white p-2" href="https://github.com/osuchted" target="_blank">
      <i className="icon ion-logo-github"></i>
      </a>
    </p>
  </div>
</div>


</section>
    </Layout>
  );
}

export default IndexPage;
