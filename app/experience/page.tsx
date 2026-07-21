import client from "@/lib/apolloClient";
import { EXPERIENCE } from "../graphql/queries/experienceQueries";
import Link from "next/link";

type EXPERIENCE = {
    id: string;
    slug: string;
    title:string;
    content:string;
    featuredImage:{
        node:{
            altText:string;
            sourceUrl:string;
        }
    }
}

type EXPERIENCELIST = {
    posts: {
        nodes:EXPERIENCE[];
    }
}

export default async function experience(){
    const experiencedata = await client.query<EXPERIENCELIST>({query:EXPERIENCE});

    const experiences = experiencedata?.data?.posts?.nodes || [];

    return (
  <main className="max-w-5xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
      My Experience
    </h2>

    {experiences.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2">
        {experiences?.map((experience) => (
          
          <div className="bg-white shadow rounded-lg p-10 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {experience?.title}
            </h3>
<Link
            key={experience?.id}
            href={`/experience/${experience.slug}`}
            className="group block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-200"
          >
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              Read More
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </Link>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-gray-500 text-center py-16">No Experience yet.</p>
    )}
  </main>
);

}