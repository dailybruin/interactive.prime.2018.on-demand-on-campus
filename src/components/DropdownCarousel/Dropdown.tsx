import * as React from 'react'
import { css } from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { darken } from 'polished'
import colors from '../../global/colors'

interface DropdownProps {
  onClose: () => void
  children: React.ReactNode
  heading: string
}

class Dropdown extends React.Component<DropdownProps> {
  render() {
    return (
      <div
        className={css`
          width: 100%;
          background-color: white;
          transition: all linear 0.3s;
        `}
      >
        <div
          className={css`
            position: relative;
            margin: 1rem;
            border: 5px solid #e9eeff;
            border-radius: 1rem;
            padding: 40px 70px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 36px;
              right: 36px;
              color: ${colors.blue};
              cursor: pointer;
              :hover {
                color: ${darken(0.2, colors.blue)};
              }
            `}
            onClick={this.props.onClose}
          >
            <FontAwesomeIcon size="lg" icon={faTimesCircle} />
          </div>
          <h2>{this.props.heading}</h2>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dropdown
