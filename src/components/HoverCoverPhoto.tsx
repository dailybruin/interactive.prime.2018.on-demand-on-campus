import * as React from 'react'
import { css } from 'react-emotion'
import { Byline } from '@dailybruin/lux'

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
        className={css`
        width: 100%;
        height: 100vh;
        background: url("${this.props.baseImageURL}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
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
        <div
          className={css`
            margin: 2rem;
            color: #fff;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <h1
            className={css`
              margin: 0 0 0.8rem;
              font-size: 3rem;
              max-width: 460px;
            `}
          >
            {this.props.headline}
          </h1>
          <Byline authors={this.props.authors} />
        </div>
      </div>
    )
  }
}
