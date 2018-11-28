import * as React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'react-emotion'
import colors from '../global/colors'
import {
  Article,
  Footer,
  Head,
  XPosition,
  YPosition,
  Header,
  Headline,
} from '@dailybruin/lux'
import HoverCoverPhoto from '../components/HoverCoverPhoto'
import SubHeader from '../components/SubHeader'
import DropdownCarousel from '../components/DropdownCarousel'
import Doughnut from '../components/Doughnut'
import HorizontalBar from '../components/HorizontalBar'
import { darken } from 'polished'

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
        description
        url
        image
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

const NavbarLink = styled('a')`
  text-decoration: none;
  color: ${colors.blue};
  :hover {
    color: ${darken(0.2, colors.blue)} !important;
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

  return (
    <div className={css`li { display: none; }`}>
      <Head {...data.site.siteMetadata} />
      <Header
        title="On Demand On Campus"
        links={[
          <NavbarLink href="#Rise-of-Streaming">Rise of Streaming</NavbarLink>,
          <NavbarLink href="#Bruin-Binging">Bruin Binging</NavbarLink>,
          <NavbarLink href="#Social-Streaming">Social Streaming</NavbarLink>,
          <NavbarLink href="#Cutting-the-Cords">Cutting the Cords</NavbarLink>,
        ]}
        style={css`
          border: 3px solid ${colors.blue};
          border-radius: 32px;
          text-transform: uppercase;
          color: ${colors.blue};
          margin: 2rem 2rem 4rem;
          width: auto;
          padding: 1rem;
          h2 {
            margin: 0;
          }
        `}
      />
      <DropdownCarousel
        intro={'STATISTICS'}
        introCaption={
          'How popular is Netflix over Hulu and Amazon Prime Video? How often do students stream their favorite shows? Scroll through to review the results of the 120-student survey.'
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
      <HoverCoverPhoto
        headline={ data.article.headline }
        baseImageURL={ data.article.coverphoto }
        hoverImageURL="https://assets.dailybruin.com/images/interactive.prime.2018.bruin-binging2/prime.illo.JLS-21f91159663efc996d1a2d951c1032ef.png"
        authors={ data.article.author }
      />
      {/* <div className={css`
        div:hover div {
          opacity: 0;
          transition: opacity 0.75s;
        }
      `}>
        <CoverPhoto
          headline={data.article.headline}
          authors={data.article.author}
          imageURL={data.article.coverphoto}
          xPosition={XPosition.Right}
          yPosition={YPosition.Center}
          textColor={colors.blue}
          style={css`
            > div {
              background-color: rgba(255, 255, 255, 0.9);
              margin-right: 0;
              padding: 1rem;
              padding-right: 3rem;
              border-radius: 32px 0 0 32px;
              border: 4px solid ${colors.blue};
              border-right: 0;
              opacity: 100;
              transition: 0.75s;
            }
          `}
        />
      </div> */}
      <Article
        dropcap={true}
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
