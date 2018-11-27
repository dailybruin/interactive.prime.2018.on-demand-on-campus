import * as React from 'react'
import { css } from 'react-emotion'
import colors from '../utils/colors'
import slugify from 'slugify'

interface SubHeaderProps {
  name: string
}

const SubHeader = (props: SubHeaderProps) => (
  <h2
    className={css`
      color: ${colors.blue};
      margin: 2.5rem auto 1.4rem;
      max-width: 600px;
    `}
    id={slugify(props.name)}
  >
    {props.name.toUpperCase()}
  </h2>
)

export default SubHeader
