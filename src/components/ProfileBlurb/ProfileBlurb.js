import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const colingUrl =
  'https://f001.backblazeb2.com/file/js-public/Dimensions%20of%20Variation%20in%20American%20English%20(COLING%2C%202014).pdf'
const uspoUrl = 'https://f001.backblazeb2.com/file/js-public/US20150026079.pdf'
const beigbederUrl =
  'https://www.scribd.com/doc/184481594/Love-Lasts-Three-Years'

const ProfileBlurb = () => (
  <Fragment>
    <ProfileBlurbHeading />
    <SubBlurb emoji1="💻" emoji2="🤔">
      NYC-based software engineer.
    </SubBlurb>
    <SubBlurb emoji1="📖" emoji2="📜">
      <a href={colingUrl}>Published </a>&nbsp;NLP researcher;<br />
      USPO <a href={uspoUrl}>Patent holder</a>.
    </SubBlurb>
    <SubBlurb emoji1="🔬" emoji2="🐀">
      Neuroscientist by degree.
    </SubBlurb>
    <SubBlurb emoji1="🇫🇷" emoji2="🌙">
      French <a href={beigbederUrl}>translator</a> by night.
    </SubBlurb>
  </Fragment>
)

const ProfileBlurbHeading = () => (
  <Fragment>
    <h2 className="f3-ns f4 fw5 lh-title">Hi. I'm Jesse.</h2>
    <h2 className="f3-ns f4 fw5 lh-title mv3">
      <span className="dib nowrap">I contradict myself.</span>
      <span className="dib nowrap ml2">
        I contain&nbsp;
        <a
          className="link moon-gray"
          href="http://www.english.illinois.edu/maps/poets/s_z/whitman/song.htm"
        >
          multitudes.
        </a>
      </span>
    </h2>
  </Fragment>
)

const SubBlurb = ({ emoji1, emoji2, children }) => (
  <p className="flex justify-center justify-end-ns items-center">
    <span className="f5 f4-ns fw3 lh-title dib tr">{children}</span>
    <span className="f4 ml2">
      {emoji1}&nbsp;&nbsp;{emoji2}
    </span>
  </p>
)

SubBlurb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  emoji1: PropTypes.string.isRequired,
  emoji2: PropTypes.string.isRequired,
}

export default ProfileBlurb
