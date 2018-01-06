import React, { Component } from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Headroom from 'react-headroom'

// import config from '../../../gatsby-config'

import '../../styles/js-tachyons.css'
import '../../styles/hamburgers/hamburgers.scss'

const initialState = { isHamburgerMenuEnabled: false }

class SiteHeader extends Component {
  state = { ...initialState }

  toggleHamburgerMenu = () => {
    this.setState({
      isHamburgerMenuEnabled: !this.state.isHamburgerMenuEnabled,
    })
  }

  render() {
    // const { isHamburgerMenuEnabled } = this.state
    return (
      <Headroom>
        <div
          className="bb b--hot-pink w-100 center"
          style={{ background: '#282C34' }}
        >
          <div className="w-33 flex flex-row center">
            <HeaderLink href={'/'} isActive={true}>
              about
            </HeaderLink>
            <HeaderLink href={'/'} isActive={false}>
              words
            </HeaderLink>
            <HeaderLink href={'/'} isActive={false}>
              pictures
            </HeaderLink>
            {/* <HeaderLink href={'/'} isActive={true}>
            <Hamburger />
          </HeaderLink> */}
          </div>
        </div>
      </Headroom>
    )
  }
}

const HeaderLink = ({ children, href, isActive }) => {
  return (
    <h3 className="lato fw7 f4 pa3 flex-auto">
      <Link
        className={classNames(
          'white-90 shadow-none flex justify-center items-center',
          {
            'light-silver': !isActive,
          }
        )}
        to={href}
      >
        {children}
      </Link>
    </h3>
  )
}

// const Hamburger = ({ isEnabled, onClick }) => (
//   <button
//     className={classNames('hamburger hamburger--collapse outline-0', {
//       'is-active': isEnabled,
//     })}
//     onClick={onClick}
//     type="button"
//   >
//     <span className="hamburger-box">
//       <span className="hamburger-inner" />
//     </span>
//   </button>
// )

export default SiteHeader
