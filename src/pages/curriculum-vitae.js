import React from 'react'
import { PortfolioItem } from '../components/Portfolio'

import '../styles/base.css'

import Logo from '../../src/components/Icons/logo_dark.svg'

const CV = () => (
  <div className="bg-near-white black-80 flex justify-center flex-body-expand pv5">
    <section className="w-75 w-50-ns">
      <div className="flex justify-center center items-center">
        <img src={Logo} style={{ maxHeight: 200 }} />
      </div>
      <p className="lato f4 fw4 mt5">
        You can check out a sampling of my publications below, or scope out my
        C.V. to learn more about what I've been up to.
      </p>
      <p className="lato f4 fw4">
        Please feel free to hit me up via the communication tool of your
        choosing (Email, Twitter, Github) if you'd like to chat.
      </p>
      <ul className="list ma0">
        <PortfolioItem
          title="Curriculum Vitae"
          link="cv/jessestuart_resume_2018.pdf"
        />
        <PortfolioItem
          title="Biber Redux: Reconsidering Dimensions of Variation in American English"
          link="publications/genre-variation.pdf"
        />
        <PortfolioItem
          title="Systems and methods for determining packages of licensable assets"
          link="http://jstu.art/ooQi"
        />
      </ul>
    </section>
  </div>
)

export default CV
