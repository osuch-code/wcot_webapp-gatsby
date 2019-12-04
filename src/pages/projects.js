import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby"

function ProjectsPage() {
  return (
    <Layout>
      <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Projects"
      />

      <section>

      <div class="px-2">
  <div class="flex -mx-2">

    <div class="w-1/3 px-2">
      <div class="text-white bg-teal-900 h-auto p-5"><h2>Gatsby</h2>
      <p class="text-normal">Here is text that is a summary of the project or should we just have a big box link</p></div>
    </div>

    <div class="w-1/3 px-2">
    <div class="text-white bg-teal-900 h-auto p-5"><h2>Rails</h2>
      <p>Here is text that is a summary of the project or should we just have a big box link</p></div>
    </div>

    <div class="w-1/3 px-2">
    <div class="text-white bg-teal-900 h-auto p-5"><h2>React</h2>
      <p>Here is text that is a summary of the project or should we just have a big box link</p></div>
    </div>

  </div>
</div>
  
      </section>


      <section className="mt-4">

<div class="px-2">
<div class="flex -mx-2">

<div class="w-1/3 px-2">
<div class="text-white bg-teal-900 h-auto p-5"><h2>Virtual Box</h2>
<p class="text-normal">Here is text that is a summary of the project or should we just have a big box link</p></div>
</div>

<div class="w-1/3 px-2">
<div class="text-white bg-teal-900 h-auto p-5"><h2>Ubuntu</h2>
<p>Here is text that is a summary of the project or should we just have a big box link</p></div>
</div>

<div class="w-1/3 px-2">
<div class="text-white bg-teal-900 h-auto p-5"><h2>Dylan</h2>
<p>Here is text that is a summary of the project or should we just have a big box link</p></div>
</div>

</div>
</div>

</section>
    </Layout>
  );
}

export default ProjectsPage;
