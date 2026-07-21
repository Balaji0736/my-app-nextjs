import client from "@/lib/apolloClient";
import AboutSection from "./components/Home/Aboutsection";
import ContactCTA from "./components/Home/ContactCTA";
import HeroSection from "./components/Home/Herosection";
import ServicesSection from "./components/Home/Servicessection";
import { GET_HOME_PAGE } from "./graphql/queries/homeQueries";

type Tag ={
  name:string;
  id:string;
}

type Service ={
  id:string;
  title:string;
  content:string;
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

type RepeaterField = {
  id:string;
  title:string;
  content:string;
  featuredImage:{
    node:{
      alttext:string;
      sourceUrl:string;
    }
  }
}

type RepeaterFields = {
  nodes: RepeaterField[];
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
  repeaterFields: RepeaterFields;
}

export default async function Home() {

  const homepagedetails = await client.query<HomePage>({query:GET_HOME_PAGE});

  const section4button = homepagedetails?.data?.page?.homePage?.button;

  const section4title = homepagedetails?.data?.page?.homePage?.heading;

  const section4description = homepagedetails?.data?.page?.homePage?.description;

  const CPTServices = homepagedetails?.data?.services;

  const CPTSection3 = homepagedetails?.data?.page?.homePage?.section3;

  const CPTRepeaterFields = homepagedetails?.data?.repeaterFields;
   
    const CPTSection2 = homepagedetails?.data?.page?.homePage?.section2;

    const section1 =homepagedetails?.data?.page?.homePage?.section1;

  return (
    <>
    <HeroSection section = { section1 }/>
    <AboutSection section={CPTSection2} repeaterfields={CPTRepeaterFields} />
    <ServicesSection section={ CPTSection3 } services = { CPTServices }/>
    <ContactCTA button = { section4button } title = {section4title} description = {section4description}/>
    </>
  );
}
