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
          What is <span className="">Suborbital</span> ?
        </Heading>
        <Paragraph className="spacing">
          Use the power of WebAssembly to build delightful software faster,
          without compromising security, performance, or developer experience.
        </Paragraph>
        <Row>
          <Link to="/tutorials">
            <ButtonFilled>Start Learning</ButtonFilled>
          </Link>
          <span style={{ width: '1rem' }} />
          <Link to="/docs/subo/get-started">
            <ButtonOutlined>Get Started</ButtonOutlined>
          </Link>
        </Row>
      </div>
      <img className="headerImage" src={useBaseUrl('/img/header.png')} alt="Header Image" />
    </ResponsiveRow>
  )
}

export { Header }
