import * as React from 'react'
import { css } from 'react-emotion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import FancyCard from './FancyCard'
import FancyIntroCard from './FancyIntroCard'

interface DropdownCarouselSection {
  title: string
  content: React.ReactNode
  topColor?: string
  bottomColor?: string
}

interface DropdownCarouselProps {
  intro: string
  introCaption: string
  sections: DropdownCarouselSection[]
}

interface DropdownCarouselState {
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

export default class DropdownCarousel extends React.Component<
  DropdownCarouselProps,
  DropdownCarouselState
> {
  state = {
    current: -1,
  }

  renderCards = () => {
    return this.props.sections.map(
      ({ title, topColor = '#000', bottomColor = '#000' }, i) => (
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
        className={css`
          transition: all linear 0.3s;
          opacity: ${this.state.current === i ? 1 : 0};
        `}
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
      // className={css`
      //   top: 0;
      //   & *:focus {
      //     outline: none;
      //   }
      // `}
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
