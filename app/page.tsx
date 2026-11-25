import client from "@/lib/apolloClient";
import AboutSection from "./components/Home/Aboutsection";
import ContactCTA from "./components/Home/ContactCTA";
import HeroSection from "./components/Home/Herosection";
import ServicesSection from "./components/Home/Servicessection";
import TechStackSection, { type TechStackSkill } from "./components/Home/TechStackSection";
import { GET_HOME_PAGE } from "./graphql/queries/homeQueries";

// Cache the home page data and revalidate it every 60 seconds.
export const revalidate = 60;

// Data types for homepage tags, services, and CMS fields.
type Tag ={
  name:string;
  id:string;
}

type Service ={
  id:string;
  title:string;
  content:string;
  menuOrder:number;
  featuredImage:{
    node:{
      altText:string;
      sourceUrl:string;
      title:string;
    }
  }
  tags:{
    nodes:Tag[];
  }
}

type Services = {
  nodes:Service[];
}

type HomePage = {
  page:{
    homePage:{
      button:{
        url:string;
        title:string;
      }
      heading:string;
      description:string;
      section3:{
        heading:string;
      description:string;
      }
      section2:{
        heading:string;
        description:string;
        image:{
          node:{
            altText:string;
            sourceUrl:string;
          };
        };
        button:{
          url:string;
          title:string;
        }
      }
      section1:{
        note:string;
        heading:string;
        description:string;
        button1:{
          url:string;
          title:string;
        }
        button2:{
          url:string;
          title:string;
        }
        additionalLine:string;
      }
    }
  }
  services: Services;
  repeaterFields: {
    nodes: TechStackSkill[];
  };
}

export default async function Home() {

  // Fetch homepage content and custom fields from the GraphQL API.
  const homepagedetails = await client.query<HomePage>({query:GET_HOME_PAGE});

  // Section 4 content: CTA button, heading, and description.
  const section4button = homepagedetails?.data?.page?.homePage?.button;
  const section4title = homepagedetails?.data?.page?.homePage?.heading;
  const section4description = homepagedetails?.data?.page?.homePage?.description;

  // Services and technology skills displayed on the homepage.
  const CPTServices = homepagedetails?.data?.services;
  const techStackSkills = homepagedetails?.data?.repeaterFields?.nodes ?? [];

  // CMS sections used by the services and about components.
  const CPTSection3 = homepagedetails?.data?.page?.homePage?.section3;
  const CPTSection2 = homepagedetails?.data?.page?.homePage?.section2;
  const section1 = homepagedetails?.data?.page?.homePage?.section1;

  // Render the homepage sections in page order.
  return (
    <>
    <HeroSection section = { section1 }/>
    <AboutSection section={CPTSection2} />
    <TechStackSection skills={techStackSkills} />
    <ServicesSection section={ CPTSection3 } services = { CPTServices }/>
    <ContactCTA button = { section4button } title = {section4title} description = {section4description}/>
    </>
  );
}
