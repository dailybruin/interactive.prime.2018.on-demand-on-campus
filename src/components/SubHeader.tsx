import * as React from 'react'
import { css } from 'react-emotion'
import colors from '../utils/colors'

interface SubHeaderProps {
  text: string
}

const SubHeader = (props: SubHeaderProps) => (
  <h2
    className={css`
      color: ${colors.blue};
      margin: 70px auto 42px;
      max-width: 600px;
    `}
  >
    {props.text.toUpperCase()}
  </h2>
)

export default SubHeader
