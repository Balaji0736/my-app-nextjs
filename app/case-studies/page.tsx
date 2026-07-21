import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import Link from "next/link";

type Post = {
    id : string;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
}

type GetCaseStudies = {
    posts:{
        nodes : Post[];
    }
}

const GET_CASESTUDIES = gql`
query CaseStudies {
  posts {
    nodes {
      id
      slug
      title
      content
      excerpt
    }
  }
}

`

const CaseStudies = async() => {

    const { data } = await client.query<GetCaseStudies>({query:GET_CASESTUDIES});
    const caseStudies =  data?.posts?.nodes ?? [];

    console.log(caseStudies);
    return(
        <>
        <h1>Case Studies</h1>
        { caseStudies.length == 0 ? "No CaseStudies Found": 
        <ul>
        { caseStudies.map((caseStudy)=>(
            <li>
            <h2>{ caseStudy.title } </h2>
            <p><div dangerouslySetInnerHTML = {{ __html:caseStudy.content }} /></p>
            <Link href={ `/case-studies/${ caseStudy.slug}` }>Read More</Link>
            </li>
        ))}
        </ul>
}
        </>
    )
}

export default CaseStudies;