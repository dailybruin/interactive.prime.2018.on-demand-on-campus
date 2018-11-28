import * as React from 'react'
import { css } from 'react-emotion'
import { Byline, Headline } from '@dailybruin/lux'

import './HoverCoverPhoto.css'

interface HoverCoverPhotoProps {
  headline: string
  baseImageURL: string
  hoverImageURL: string
  authors: string[]
}

export default class HoverCoverPhoto extends React.Component<
  HoverCoverPhotoProps
> {
  public render() {
    return (
      <div
        id="slide"
        className={css`
            width: 100%;
            height: 80vh;
            background: url("${this.props.baseImageURL}");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right;
            display: grid;
            align-items: center;
            justify-content: end;
            transition: 0.75s;
            &:hover {
                background: url("${this.props.hoverImageURL}");
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }
        `}
      >
        {/* <img id='img1' src={this.props.baseImageURL}>
          </img>
          <img id='img2' src={this.props.hoverImageURL}>
          </img> */}
        <div
          id="slideInfant"
          className={css`
            text-align: right;
            color: #a0b2d8;
            margin: 15px;
            h1 {
              margin: 0px;
              font-size: 50px;
            }
            align-self: end;
            @media screen and (max-width: 640px) {
              h1 {
                font-size: 40px;
              }
            }
          `}
        >
          <h1>ON DEMAND ON CAMPUS</h1>
        </div>
        <div id="slideChild">
          <div id="slideBaby">
            <div
              className={css`
                text-align: right;
                margin: 20px;
                color: #a0b2d8;
              `}
            >
              <Byline authors={this.props.authors} />
            </div>
            <p>UCLA’s streaming culture spans far beyond just BruinCast.</p>
            <p>
              Students, whether they’re catching up on the latest episode of
              “Game of Thrones” at BFit or rewatching “The Office” for the ninth
              time during their chemistry lecture, interact with content in ways
              unpredicted by the industry’s past. Though streaming has shifted
              the entertainment from the silver screen toward the internet, the
              ever-evolving medium allowed UCLA students to explore diverse
              collections of entertainment while helping them find community.
            </p>
          </div>
        </div>
        <div
          className={css`
            text-align: right;
            color: white;
            margin: 20px;
            margin-bottom: 10px;
          `}
        >
          <Byline authors={['Juliette Le Saint', 'Nicole Anisgard Parra']} />
        </div>
      </div>
    )
  }
}
