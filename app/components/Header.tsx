import client from "@/lib/apolloClient";
import HeaderClient from "./HeaderClient";
import { GET_HEADER_MENU, GET_OPTIONS_PAGE } from "../graphql/queries/headerQueries";

type MenuItem = {
  id:string;
  label:string;
  uri:string;
}

type HeaderMenu = {
  menuItems:{
    nodes:MenuItem[]
  }
}

type HeaderDetails = {
  page : {
    id: string;
    optionsPage:{
      button:{
        url: string;
        title: string;
      }
      siteLogo: {
        node: {
          altText: string;
          sourceUrl: string;
        }
      }
    }
  }
}

export default async function Header() {

const headermenus = await client.query<HeaderMenu>({query:GET_HEADER_MENU});

const headermenusresult = headermenus?.data?.menuItems?.nodes;

const headerdetails = await client.query<HeaderDetails>({query:GET_OPTIONS_PAGE});

const headerdetailsresult = headerdetails?.data?.page?.optionsPage;

return (
  <>
  <HeaderClient menus={headermenusresult} details={headerdetailsresult}/>
  </>
)
}