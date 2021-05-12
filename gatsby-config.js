module.exports = {
  siteMetadata: {
    title: 'Mohr Design',
    description: 'We create meaningful experiences that forever shape a users connection with a brand.',
    siteURL: 'https://mohr.design',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113776006-1",
        // Setting this parameter is optional
        // anonymize: true,
      },
    }
  ],
}
