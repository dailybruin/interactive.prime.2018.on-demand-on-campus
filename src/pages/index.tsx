import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import HoverCoverPhoto from '../components/HoverCoverPhoto'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition="start"
      yPosition="center"
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
    <HoverCoverPhoto
      headline="this is a headline"
      baseImageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      hoverImageURL="https://placeholder.pics/svg/1205x805"
      authors={['Richard Yang']}
    />
  </>
)

export default IndexPage
