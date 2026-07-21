import { gql } from "@apollo/client";

export const GET_OPTIONS_PAGE = gql`
query optionspage {
  page(id: "options-page", idType: URI) {
    id
    optionsPage {
      button {
        url
        title
        target
      }
      siteLogo{
        node{
            altText
            sourceUrl
        }
      }  
    }
  }
}
`;


export const GET_HEADER_MENU = gql`
query GetHeaderMenu {
  menuItems(where: {location: HEADER_MENU}) {
    nodes {
      id
      label
      uri
    }
  }
}
`;
