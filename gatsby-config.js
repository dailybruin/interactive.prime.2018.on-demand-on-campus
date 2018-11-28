const slugify = require('slugify')

const siteName = 'On Demand On Campus'
const description = 'SITE_DESCRIPTION'
const image =
  'https://assets.dailybruin.com/images/interactive.prime.2018.bruin-binging2/prime.illo_1.JLS-ae3b8b3037a04298e2b2f623e1a050f6.png'
const year = '2018'

const url = `https://features.dailybruin.com/${year}/${slugify(
  siteName.toLowerCase()
)}`

module.exports = {
  siteMetadata: {
    siteName: 'Daily Bruin PRIME | ' + siteName,
    description,
    url,
    image,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.prime.2018.bruin-binging2',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
  ],
}
