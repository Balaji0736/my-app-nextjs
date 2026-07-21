import { EXPERIENCE_DETAIL } from "@/app/graphql/queries/experienceDetailQuery";
import client from "@/lib/apolloClient";
import Image from "next/image";

type SLUG = string;

type Experience_Detail = {
    post: {
        id: string;
        slug: string;
        content: string;
        title: string;
        featuredImage:{
            node:{
                altText : string;
          sourceUrl: string;
            }
        }
    }
}

export default async function experiencedetail({params}:{params:Promise<{slug:SLUG}>}){

    const paramsvalue = await params;


    const experiencedetailgraphQL = await client.query<Experience_Detail>({
        query: EXPERIENCE_DETAIL,
        variables:{
            slug:paramsvalue.slug
        }
    })
            console.log(experiencedetailgraphQL)

    const title = experiencedetailgraphQL?.data?.post?.title;

const content = experiencedetailgraphQL?.data?.post?.content;

const featuredImagealtText = experiencedetailgraphQL?.data?.post?.featuredImage?.node?.altText;
const featuredImage = experiencedetailgraphQL?.data?.post?.featuredImage?.node?.sourceUrl;


return (
  <main className="max-w-3xl mx-auto px-4 py-10">
    {/* Featured Image */}
    {featuredImage && (
      <div className="relative w-full h-[300px] md:h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src={featuredImage}
          alt={featuredImagealtText || "Featured image"}
          fill
          className="object-cover"
        />
      </div>
    )}

    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      {title}
    </h1>

    {/* Content */}
    <div
      className="prose prose-lg max-w-none text-gray-700"
      dangerouslySetInnerHTML={{ __html: content || "" }}
    />
  </main>
);

}