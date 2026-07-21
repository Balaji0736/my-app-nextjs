import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import Image from "next/image";

type Params = Promise<{
    slug:string;
}>

const GET_CASESTUDY = gql`
query getCaseStudy($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    content
    title
    slug
    featuredImage {
        node {
            sourceUrl
            altText
        }
}

  }
}
`;

type FeaturedImage = {
    node : {
        sourceUrl:string;
    }
    
}

type Post = {
    id : string;
    slug: string;
    title: string;
    content: string;
    excerpt: string;
    
}

type CASESTUDYDATA = {
    post: {
        title: string;
        slug: string;
        content: string;
        featuredImage : FeaturedImage;
    }
}

const CaseStudyDetail = async({ params }:{params:Params}) => {
    const {slug} = await params;
    const { data } = await client.query<CASESTUDYDATA>({
        query:GET_CASESTUDY,
        variables: {slug},
        
    })

const title = data?.post.title;
const content = data?.post.content;
const image = data?.post.featuredImage.node.sourceUrl;

console.log(image);

    return(
        <>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content ?? "" }} />
        <Image src = {image??""} alt="" width={500} height={400} />
        </>
    )
}

export default CaseStudyDetail;