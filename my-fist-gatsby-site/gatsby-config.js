module.exports = {
  pathPrefix: "/gatsby-tutorial",
  siteMetadata: {
    siteUrl: "https://pablobrianese.github.io/gatsby-tutorial",
    title: "My Fist Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name:`blog`,
        path: `${__dirname}/blog`
      }
    }
  ],
};
