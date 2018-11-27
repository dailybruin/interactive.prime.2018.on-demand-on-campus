import * as React from 'react'
import styled, { css } from 'react-emotion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick-styles.css'

import Dropdown from './Dropdown'
import FancyCard from '../FancyCard'
import FancyIntroCard from '../FancyIntroCard'

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

export default class DropdownCarousel extends React.Component<
  DropdownCarouselProps,
  DropdownCarouselState
> {
  state = {
    current: -1,
  }

  renderCards = () => {
    return this.props.sections.map((card, i) => (
      <FancyCard
        key={i}
        title={card.title}
        gradientTopColor={card.topColor}
        gradientBottomColor={card.bottomColor}
        isSelected={this.state.current === i}
        onClick={() => {
          this.setState({
            current: i,
          })
        }}
      />
    ))
  }

  renderDropdowns = () => {
    return this.props.sections.map((section, i) => (
      <Dropdown
        key={i}
        heading={section.title}
        onClose={() => console.log('hi')}
      >
        {section.content}
      </Dropdown>
    ))
  }

  render() {
    return (
      <div
        className={css`
          /* background-color: black; */
          width: 90%;
          margin: 0 auto;
          color: black;
        `}
      >
        <Slider
          dots={true}
          slidesToShow={3}
          slidesToScroll={1}
          infinite={false}
          responsive={[
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          <FancyIntroCard
            key={-1}
            title={this.props.intro}
            caption={this.props.introCaption}
            gradientTopColor={'#E7BEFA'}
            gradientBottomColor={'#8AACF7'}
          />
          {this.renderCards()}
        </Slider>
        <div>{this.renderDropdowns()}</div>
      </div>
    )
  }
}
