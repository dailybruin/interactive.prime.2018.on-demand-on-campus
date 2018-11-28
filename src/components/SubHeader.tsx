import * as React from 'react'
import { css } from 'react-emotion'
import colors from '../global/colors'
import slugify from 'slugify'

interface SubHeaderProps {
  name: string
}

const SubHeader = (props: SubHeaderProps) => (
  <div>
    <div
      id={slugify(props.name)}
      className={css`
        position: absolute;
        transform: translate(0, -100px);
      `}
    />
    <h2
      className={css`
        color: ${colors.blue};
        margin: 2.5rem auto 1.4rem;
        max-width: 600px;
      `}
    >
      {props.name.toUpperCase()}
    </h2>
  </div>
)

export default SubHeader
