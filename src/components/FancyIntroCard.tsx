import * as React from 'react'
import { css } from 'react-emotion'

interface FancyIntroCardProps {
  title: string
  caption: string
  gradientTopColor: string
  gradientBottomColor: string
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const FancyIntroCard = (props: FancyIntroCardProps) => (
  <div
    className={css`
      border-radius: 1rem;
      background: linear-gradient(
        ${props.gradientTopColor},
        ${props.gradientBottomColor}
      );
      padding: 0.3rem;
      margin: 0 1rem;
      text-align: center;
    `}
    onClick={props.onClick}
  >
    <div
      className={css`
        background-color: white;
        border-radius: 0.8rem;
        padding: 1rem;
      `}
    >
      <h1
        className={css`
          text-align: center;
          color: lightgray;
          font-weight: bold;
          margin-bottom: 0px;
          font-family: 'heebo';
        `}
      >
        {props.title}
      </h1>
      <div>{props.caption}</div>
    </div>
  </div>
)

export default FancyIntroCard
