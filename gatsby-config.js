require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Logan",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "282369452",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat`,
          `montserrat\:300`,
          `montserrat\:400`,
          `montserrat\:500`,
          `montserrat\:600`,
          `montserrat\:700`,
          `montserrat\:800`,
          `montserrat\:900`,
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_DB,
            tableName: `Results`,
          },
          {
            baseId: process.env.AIRTABLE_DB,
            tableName: `Team`,
          },
        ],
      },
    },
  ],
};
