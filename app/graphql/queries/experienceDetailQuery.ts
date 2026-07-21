import { gql } from "@apollo/client";

export const EXPERIENCE_DETAIL = gql`
query experiencedetail($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
      slug
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
`;