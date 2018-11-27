import * as React from 'react'
import { css } from 'react-emotion'

interface IFancyIntroCardProps {
  title: string
  caption: string
  gradientTopColor: string
  gradientBottomColor: string
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const FancyIntroCard: React.SFC<IFancyIntroCardProps> = ({
  title,
  caption,
  gradientTopColor,
  gradientBottomColor,
  onClick = () => {},
}) => (
  <div
    className={css`
      border-radius: 1rem;
      background: linear-gradient(${gradientTopColor}, ${gradientBottomColor});
      padding: 0.3rem;
    `}
    onClick={onClick}
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
        {title}
      </div>
      <div
        className={css`
          font-family: Arial;
        `}
      >
        {caption}
      </div>
    </div>
  </div>
)

export default FancyIntroCard
