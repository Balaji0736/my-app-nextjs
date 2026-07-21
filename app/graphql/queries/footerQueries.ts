import { gql } from "@apollo/client";

// Fetches site title and tagline from WordPress General Settings
// Used for: copyright text in footer
// WordPress Admin → Settings → General
//   Site Title  → e.g. "Balaji Anbalagan"
//   Tagline     → e.g. "Built with Next.js + WordPress."
export const GET_FOOTER_SETTINGS = gql`
  query GetFooterSettings {
    generalSettings {
      title
      description
    }
  }
`;

// Fetches nav links from a WordPress menu named "Footer Menu"
// To set this up: WordPress Admin → Appearance → Menus
// → Create a menu called "Footer Menu" and assign it to the Footer location
export const GET_FOOTER_MENU = gql`
  query GetFooterMenu {
    menuItems(where: { location: FOOTER_MENU }) {
      nodes {
        id
        label
        uri
      }
    }
  }
`;