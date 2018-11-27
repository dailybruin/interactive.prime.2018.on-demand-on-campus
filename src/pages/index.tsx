import * as React from 'react'
import { graphql } from 'gatsby'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
} from '@dailybruin/lux'
import SubHeader from '../components/SubHeader'
import FancyCard from '../components/FancyCard'
import FancyIntroCard from '../components/FancyIntroCard'
import DropdownCarousel from '../components/DropdownCarousel'
import { Doughnut } from 'react-chartjs-2'

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

const chartData = {
  labels: ['Red', 'Green', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
}

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <DropdownCarousel
      intro={'STATISTICS'}
      introCaption={
        'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
      }
      sections={[
        {
          title: 'TEST TEST TEST 111',
          content: <div>TEST TEST TEST 111</div>,
        },
        {
          title: 'TEST TEST TEST 222',
          content: (
            <div>
              TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST
              TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST
              TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST
              222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST
              TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST TEST TEST 222TEST
              TEST TEST 222TEST TEST TEST 222
            </div>
          ),
        },
        {
          title: 'TEST TEST TEST 333',
          content: <div>TEST TEST TEST 333</div>,
          topColor: '#F9D6BC',
          bottomColor: '#F98078',
        },
      ]}
    />

    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition={XPosition.Left}
      yPosition={YPosition.Center}
    />
    <Doughnut data={chartData} />
    <Article
      content={data.kerckhoffArticle.content}
      customTypeComponentMapping={{ subheading: SubHeader }}
    />
    <FancyCard
      title={'TEST TEST TEST TEST'}
      gradientTopColor={'#E7BEFA'}
      gradientBottomColor={'#8AACF7'}
      isSelected={true}
    />
    <FancyIntroCard
      title={'STATISTICS'}
      caption={
        'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
      }
      gradientTopColor={'#E7BEFA'}
      gradientBottomColor={'#8AACF7'}
    />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
