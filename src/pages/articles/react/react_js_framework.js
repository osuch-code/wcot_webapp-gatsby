import React from 'react';
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import { Link } from "gatsby"

function ReactPage()
{
    return(
        <Layout>
             <SEO
        keywords={[`react`, `rails`, `postgresql`, `tailwind`]}
        title="Home"/>
        
            <h2 className ="text-4xl">React Blog Title</h2>
            <h4><em>A summary about the article</em></h4>
        <p>Lorem ipsum dolor sit amet, sea ei erat insolens, tota laoreet deserunt at mei. Clita vocibus no nam, te sea aeque causae deseruisse. Enim veri his no. Impetus ceteros eu sit. Vix in oratio vocibus, cu malis error conceptam pri. Quo facilisis suavitate salutatus ei, et sed quot dolore malorum.</p>

        <p>Vidit recusabo gloriatur nec ei, te vix iuvaret indoctum. Pro illud disputando eu, ne cum officiis singulis democritum. Ea eos paulo soluta commodo. Cum ut discere necessitatibus. Sit ea vidit officiis.</p>
        
        <p>Ex discere veritus vix, in est quem exerci, nec novum efficiantur ut. Solum summo antiopam eam ex. Graeco numquam laboramus pro at. Eu qui tollit nusquam. His at doming alterum, id deleniti scaevola invenire eam. Ubique latine invidunt no eum.</p>
        
        <p>At eam eius veniam, ius cu offendit recteque, dolore impetus apeirian usu cu. Timeam constituto ei nam, sea persecuti persequeris mediocritatem te. Eros magna legimus nec at, deserunt lobortis philosophia ad sea. Odio nulla eum ei, pri omnium vivendo ullamcorper cu. Suscipit complectitur ea eos. Graeci omittam per ad, choro docendi at mea.</p>
        
        </Layout>
    );
}

export default ReactPage