/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Tip Calculator App`,
    description: `A solution to Frontend Mentor's Tip Calculator App challenge.`,
    author: `@akpekig`,
    siteUrl: `https://akpekig.github.io/tip-calculator-app/`,
  },
  pathPrefix: "/tip-calculator-app",
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tip-calculator-app`,
        short_name: `calculator`,
        start_url: `/`,
        background_color: `hsl(185, 41%, 84%)`,
        theme_color: `hsl(185, 41%, 84%)`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
