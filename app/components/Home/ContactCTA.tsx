type Button = {
  url:string;
  title:string;
}




export default function ContactCTA({button,title,description}:{button?:Button,title?:string,description?:string}) {
  return (
    <section id="contact" className="bg-indigo-600 py-16">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-2xl md:text-3xl mb-2">
            {title}
          </h2>
          <div className="text-indigo-200 text-sm" dangerouslySetInnerHTML={{__html: description ?? ""}} />
            
          
        </div>

        {/* CTA Button */}
        <a
          href={button?.url}
          className="shrink-0 bg-white text-indigo-700 hover:bg-indigo-50 font-bold px-8 py-4 rounded-lg transition-colors text-sm whitespace-nowrap w-full md:w-auto text-center"
        >
          {button?.title}
        </a>

      </div>
    </section>
  );
}