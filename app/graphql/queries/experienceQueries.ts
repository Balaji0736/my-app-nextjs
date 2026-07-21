import { gql } from "@apollo/client";

export const EXPERIENCE = gql`
query experience {
  posts(where: {categoryName: "Experience", orderby: {field: DATE, order: ASC}}) {
    nodes {
      id
      slug
      content
      title
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