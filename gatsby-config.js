/**
 * @type {import('gatsby').GatsbyConfig}
 */



require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


module.exports = {
  siteMetadata: {
    title: `Jehori ICT Services`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-mdx", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // `gatsby-plugin-fontawesome-css`
    // {
    //   "resolve": "gatsby-source-contentful",
    //   "options": {
    //     "spaceId": `${process.env.SPACE_ID}`,
    //     "accessToken": `${process.env.ACCESS_TOKEN}`,
    //   }
    // }, 
    // "gatsby-transformer-remark",
]
};
