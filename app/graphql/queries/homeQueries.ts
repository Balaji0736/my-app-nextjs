import { gql } from "@apollo/client"

export const GET_HOME_PAGE = gql`
query homepage {
  page(id: "home-page", idType: URI) {
    id
    homePage {
      button {
        url
        title
      }
      description
      heading
      section3 {
        description
        heading
      }
      section2 {
        description
        heading
        button {
          url
          title
        }
      }
      section1 {
        note
        heading
        description
        button1{
          url
          title
        }
        button2{
          url
          title
        }
        additionalLine
      }
    }
  }


  services {
    nodes {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
          title
        }
      }
      tags {
        nodes {
          name
          id
        }
      }
    }
  }

  repeaterFields(where: {categoryName: "home-page-tech-stack"}) {
    nodes {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }

}
`;