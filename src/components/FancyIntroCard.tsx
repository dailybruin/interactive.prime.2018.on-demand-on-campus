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
    `}
    onClick={props.onClick}
  >
    <div
      className={css`
        background-color: white;
        border-radius: 0.8rem;
        padding: 1.5rem;
      `}
    >
      <div
        className={css`
          text-align: center;
          color: lightgray;
          font-size: 1.5rem;
          font-family: Arial;
        `}
      >
        {props.title}
      </div>
      <div
        className={css`
          font-family: Arial;
        `}
      >
        {props.caption}
      </div>
    </div>
  </div>
)

export default FancyIntroCard
