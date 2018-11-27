import * as React from 'react'
import { css } from 'react-emotion'
import WaveImage from '../images/wave.png'

interface IFancyCardProps {
  title: string
  gradientTopColor: string
  gradientBottomColor: string
  isSelected?: boolean
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

const FancyCard: React.SFC<IFancyCardProps> = ({
  title,
  gradientTopColor,
  gradientBottomColor,
  isSelected = false,
  onClick = () => {},
}) => (
  <div
    className={css`
      box-sizing: border-box; // |border-box|initial|inherit;
      border-radius: 1.5rem;
      ${isSelected ? 'border: 5px #E9EEFF solid;' : ''};
    `}
  >
    <div
      className={css`
        background: linear-gradient(
          ${gradientTopColor},
          ${gradientBottomColor}
        );
        border-radius: 1rem;
        padding: 1.5rem;
      `}
      onClick={onClick}
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
        {title}
      </div>
      <img
        className={css`
          margin-bottom: 0;
          opacity: 0.5;
        `}
        src={WaveImage}
        alt="wave image"
      />
    </div>
  </div>
)

export default FancyCard
