import Image from "next/image";

export type TechStackSkill = {
  id: string;
  title: string;
  content: string;
  featuredImage: {
    node: {
      altText: string;
      sourceUrl: string;
    };
  };
  rpPostCustomFields: {
    order: number;
  };
};

export default function TechStackSection({
  skills,
}: {
  skills: TechStackSkill[];
}) {
  const orderedSkills = [...skills].sort(
    (a, b) => a.rpPostCustomFields.order - b.rpPostCustomFields.order
  );

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Tech Stack
          </p>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Skills &amp; Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orderedSkills.map((skill) => (
            <div
              key={skill.id}
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition-colors duration-200 hover:border-indigo-200 hover:bg-indigo-50/40"
            >
              <Image
                src={skill.featuredImage.node.sourceUrl}
                alt={skill.featuredImage.node.altText || ""}
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-800">
                  {skill.title}
                </h3>
                <div
                  className="text-xs text-slate-400"
                  dangerouslySetInnerHTML={{ __html: skill.content || "" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
