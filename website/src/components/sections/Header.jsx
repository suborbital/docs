import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import '../../css/home.css'
import { ButtonFilled, ButtonOutlined } from '../button'
import { ResponsiveRow, Row } from '../layout'
import { Heading, Paragraph } from '../texts'

const Header = () => {
  return (
    <ResponsiveRow>
      <div className="headingLeft">
        <Heading fontWeight="bold">
          <span className="">Suborbital</span>
        </Heading>
        <Paragraph className="spacing">
          Harness the power of WebAssembly to build delightful software faster
          without compromising security, performance, or developer experience.
        </Paragraph>
        <Row>
          <Link to="/docs/docs/intro-to-webassembly/history">
            <ButtonFilled>What is WebAssembly?</ButtonFilled>
          </Link>
          <span style={{ width: '1rem' }} />
          <Link to="/docs/docs/suborbital-ecosystem/the-suborbital-ecosystem">
            <ButtonOutlined>Get Started</ButtonOutlined>
          </Link>
        </Row>
      </div>
      <img className="headerImage" src={useBaseUrl('/img/header.png')} alt="Header Image" />
    </ResponsiveRow>
  )
}

export { Header }
