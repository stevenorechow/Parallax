require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Custom Parallax by Steven Orechow`,
    // Default title of the page
    siteTitleAlt: `Steven`,
    siteHeadline: `This is a custom parallax project using GatsbyJS. - @steven`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://projects.stevenorechow.me`,
    siteDescription: `Custom Parallax Project by Steven Orechow`,
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@SCUBAstvo`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Steven - @lekoarts/gatsby-theme-cara`,
        short_name: `Steven`,
        description: `Hello, I'm Steven, and this is custom parallax.`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
