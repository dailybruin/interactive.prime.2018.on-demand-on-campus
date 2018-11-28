import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from 'react-emotion'
import colors from '../global/colors'
import {
  Article,
  CoverPhoto,
  Footer,
  Head,
  XPosition,
  YPosition,
  Navbar
} from '@dailybruin/lux'
import SubHeader from '../components/SubHeader'
import DropdownCarousel from '../components/DropdownCarousel'
import Doughnut from '../components/Doughnut'
import HorizontalBar from '../components/HorizontalBar'

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    article: kerckhoffArticle(title: { eq: "article.aml" }) {
      headline
      author
      coverphoto
      content {
        type
        value
      }
    }
    data: kerckhoffArticle(title: { eq: "data.aml" }) {
      preferredStreamingPlatform {
        label
        students
        color
      }
      reasonForPreferredPlatform {
        label
        students
        color
      }
      favoriteGenre {
        label
        students
        color
      }
      hoursPerWeek {
        label
        students
        color
      }
      streamedWhileAtUCLA {
        label
        students
        color
      }
      favoriteSeriesToStream {
        label
        students
        color
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const chartData = {}
  Object.keys(data.data).forEach(key => {
    chartData[key] = {
      labels: data.data[key].map(p => p.label),
      datasets: [
        {
          data: data.data[key].map(p => p.students),
          backgroundColor: data.data[key].map(p => p.color),
        },
      ],
    }
  })
  console.log(chartData)

  const navStyle = css`
          h2{
            margin-bottom: 0px;
          }
          z-index: 1;
          border: solid 3px #A0B2D8;
          border-radius: 25px;
          `
  const rise  = <Link to={"#Rise-of-Streaming"}>Rise of Streaming</Link>
  const bruin = <Link to="#Bruin-Binging">Bruin Binging</Link>
  const social = <Link to="#Social-Streaming">Social Streaming</Link>
  const cutting = <Link to="#Cutting-the-Cords">Cutting the Cords</Link>
  const links = [rise, bruin, social, cutting]
  const linkStyle = css`
                      color: #A0B2D8;
                      font-family: Heebo;
                      text-transform: uppercase;
                      `
  
  return (
    <div>
      <Head {...data.site.siteMetadata} />
      <Navbar style={navStyle}title={"ON DEMAND ON CAMPUS"} showLogo={false} sticky={true} links={links} linkStyle={linkStyle}></Navbar>
      <DropdownCarousel
        intro={'STATISTICS'}
        introCaption={
          'A tiny blurb explaining the survey and what this panel is probably something explaining about how you can scroll/view the rest of this panel wheeeee'
        }
        sections={[
          {
            title: 'Preferred Streaming Platform',
            content: (
              <Doughnut data={chartData['preferredStreamingPlatform']} />
            ),
            topColor: '#E7BEFA',
            bottomColor: '#8AACF7',
          },
          {
            title: 'Reason for Preferred Platform',
            content: (
              <HorizontalBar data={chartData['reasonForPreferredPlatform']} />
            ),
            topColor: '#B3F2F6',
            bottomColor: '#5C9DE9',
          },
          {
            title: 'Favorite Genre to Stream',
            content: <HorizontalBar data={chartData['favoriteGenre']} />,
            topColor: '#FBC6B6',
            bottomColor: '#F57DC5',
          },
          {
            title: 'Hours Per Week Using Service',
            content: <Doughnut data={chartData['hoursPerWeek']} />,
            topColor: '#DEFBD6',
            bottomColor: '#4FDACA',
          },
          {
            title: 'Streamed While at UCLA',
            content: <HorizontalBar data={chartData['streamedWhileAtUCLA']} />,
            topColor: '#D4DAF9',
            bottomColor: '#AA7BF8',
          },
          {
            title: 'Favorite Series to Stream',
            content: (
              <HorizontalBar data={chartData['favoriteSeriesToStream']} />
            ),
            topColor: '#F9D6BC',
            bottomColor: '#F98078',
          },
        ]}
      />

      <CoverPhoto
        headline={data.article.headline}
        authors={data.article.author}
        imageURL={data.article.coverphoto}
        xPosition={XPosition.Right}
        yPosition={YPosition.Center}
        style={css`
          color: ${colors.blue};
        `}
      />
      <Article
        content={data.article.content}
        customTypeComponentMapping={{ subheading: SubHeader }}
      />
      <Footer
        developers={['Nathan Smith', 'Kevin Qian']}
        copyrightYear={2018}
      />
    </div>
  )
}

export default IndexPage
