import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import homeShot from "../images/homeshot.png"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Home"
      />

      <section>

        <div class="flex flex-row bg-yellow-500;">
          <div class="text-gray-700 text-center bg-yellow-500; px-4 py-2 m-2">
            <img
              alt="VSCode in action with some code"
              className="h-64"
              src={homeShot} />
          </div>

          <div class="text-center bg-yellow-500; px-4 py-2 m-2">
            <h1 className="bg-yellow-400 text-4xl font-bold inline-block my-8 p-10">
              We Code on Tuesday ::
        </h1>

            <p className="leading-loose">
              <h2 className="font-bold text-2xl">React & Rails & PostgreSQL</h2>
              <h4 className="font-normal text-xl">We do other things from Wednesday to Monday...
        </h4>
            </p></div>
        </div>

      </section>

      <hr/>
    
      <section>

      <div class="flex flex-row bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>

</div>
  </div>

  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>


  </div>
  </div>

  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
</div>
  </div>

</section>
    </Layout>
  );
}

export default IndexPage;
