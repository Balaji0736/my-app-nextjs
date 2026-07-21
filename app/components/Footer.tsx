import client from "@/lib/apolloClient";
import { GET_FOOTER_SETTINGS,GET_FOOTER_MENU } from "../graphql/queries/footerQueries";

type FooterSettings = {
  generalSettings:{
    title:string;
    description:string;
  }
}

type MenuItem = {
  id: string;
    label:string;
    uri:string;
  };

type FooterMenu = {
  menuItems: {
    nodes:MenuItem[];
  }
}



export default async function Footer() {
  const  footersettingresult  = await client.query<FooterSettings>({query:GET_FOOTER_SETTINGS})

  const title = footersettingresult.data?.generalSettings?.title;
  const description = footersettingresult.data?.generalSettings?.description;

  const footermenuresult = await client.query<FooterMenu>({query:GET_FOOTER_MENU})


  const footermenus = footermenuresult.data?.menuItems?.nodes;


  return (
    <footer className="bg-slate-900 py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">

        <p>© {new Date().getFullYear()} {title}. {description}</p>

        <nav className="flex items-center gap-6">
          { footermenus?.map((footermenu) => (
  
            <a href={footermenu.uri} key={footermenu.id}  className="hover:text-white transition-colors">{footermenu.label}</a>

))}
        </nav>

      </div>
    </footer>
  );
}