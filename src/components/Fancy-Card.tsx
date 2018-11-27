import * as React from 'react'
import { css } from 'emotion'
import WaveImage from '../images/wave.png'
import Slider from 'react-slick'
import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'

interface IFancyCardProps {
  title: string
  gradientTopColor: string
  gradientBottomColor: string
  isSelected?: boolean
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

export const FancyCard: React.SFC<IFancyCardProps> = ({
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

interface IFancyIntroCardProps {
  title: string
  caption: string
  gradientTopColor: string
  gradientBottomColor: string
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void
}

export const FancyIntroCard: React.SFC<IFancyIntroCardProps> = ({
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

interface IDropdownCarouselSection {
  title: string
  content: React.ReactNode
  topColor?: string
  bottomColor?: string
}

interface IDropdownCarouselProps {
  intro: string
  introCaption: string
  sections: IDropdownCarouselSection[]
}

interface IDropdownCarouselState {
  current: number
}

function SliderNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={[
        className,
        css`
          &:before {
            color: lightgray;
          }
        `,
      ].join(' ')}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

function SliderPrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={[
        className,
        css`
          &:before {
            color: lightgray;
          }
        `,
      ].join(' ')}
      style={{ ...style }}
      onClick={onClick}
    />
  )
}

const cardPadderClass = css`
  padding: 0 1rem;
`

const hiddenDropdownClass = css`
  opacity: 0;
  transition: all linear 0.3s;
`

const shownDropdownClass = css`
  opacity: 1;
  transition: all linear 0.3s;
`

export class DropdownCarousel extends React.Component<
  IDropdownCarouselProps,
  IDropdownCarouselState
> {
  constructor(props) {
    super(props)
    this.state = {
      current: -1,
    }
  }

  renderCards = () => {
    return this.props.sections.map(
      ({ title, topColor = '#E7BEFA', bottomColor = '#8AACF7' }, i) => (
        <div key={i} className={cardPadderClass}>
          <FancyCard
            title={title}
            gradientTopColor={topColor}
            gradientBottomColor={bottomColor}
            isSelected={this.state.current === i}
            onClick={() => {
              this.setState({
                current: i,
              })
            }}
          />
        </div>
      )
    )
  }

  renderDropdowns = () => {
    return this.props.sections.map(({ content }, i) => (
      <div
        key={i}
        className={
          this.state.current === i ? shownDropdownClass : hiddenDropdownClass
        }
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            background-color: white;
          `}
        >
          <div
            className={css`
              margin: 1rem;
              border: 5px solid #e9eeff;
              border-radius: 1rem;
            `}
          >
            <div
              className={css`
                background-color: #e9eeff;
                border-radius: 50%;
                height: 25px;
                width: 25px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 1rem 1rem 1rem auto;
              `}
              onClick={() => {
                this.setState({
                  current: -1,
                })
              }}
            >
              <div
                className={css`
                  text-align: center;
                  color: white;
                `}
              >
                ✕
              </div>
            </div>
            <div
              className={css`
                padding: 1rem;
              `}
            >
              {content}
            </div>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <div
        className={css`
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          & *:focus {
            outline: none;
          }
        `}
      >
        <Slider
          {...{
            arrows: true,
            dots: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            nextArrow: <SliderNextArrow />,
            prevArrow: <SliderPrevArrow />,
          }}
          className={css`
            margin: 0 auto;
            width: 90%;
          `}
        >
          <div key={-1} className={cardPadderClass}>
            <FancyIntroCard
              title={this.props.intro}
              caption={this.props.introCaption}
              gradientTopColor={'#E7BEFA'}
              gradientBottomColor={'#8AACF7'}
            />
          </div>
          {this.renderCards()}
        </Slider>
        <div
          className={css`
            display: relative;
          `}
        >
          {this.renderDropdowns()}
        </div>
      </div>
    )
  }
}
