import * as React from 'react'
import { css } from 'react-emotion'
import WaveImage from '../images/wave.png'

interface FancyCardProps {
  title: string
  gradientTopColor: string
  gradientBottomColor: string
  isSelected?: boolean
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const FancyCard = (props: FancyCardProps) => (
  <div
    className={css`
      box-sizing: border-box;
      border-radius: 1.5rem;
      ${props.isSelected ? 'border: 5px #E9EEFF solid;' : ''};
    `}
  >
    <div
      className={css`
        background: linear-gradient(
          ${props.gradientTopColor},
          ${props.gradientBottomColor}
        );
        border-radius: 1rem;
        padding: 1.5rem;
      `}
      onClick={props.onClick}
    >
      <div
        className={css`
          margin: 0 0 auto auto;
          color: white;
          font-family: Arial;
          text-align: right;
          font-size: 1.2rem;
          font-weight: bold;
          max-width: 200px;
        `}
      >
        {props.title}
      </div>
      <img
        className={css`
          margin-bottom: 0;
          opacity: 0.5;
        `}
        src={WaveImage}
      />
    </div>
  </div>
)

export default FancyCard
