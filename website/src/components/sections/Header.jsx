import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'
import '../../css/home.css'
import { DocButton } from '../button'
import { ResponsiveRow, Row } from '../layout'
import { Heading, Paragraph } from '../texts'

const Header = () => {
  return (
    <ResponsiveRow>
      <div>
        <img className="projectLogoMain" src={useBaseUrl('/img/suborbital-logo-wide-trim.svg')} alt="Suborbital" />

        {/* <Heading>Suborbital Compute Network</Heading> */}
        <Paragraph className="spacing">
          Suborbital Compute is a platform that allows your users to write and deploy serverless extensions for your app.
          Our WebAssembly-based compute core lets you run user code within your infrastructure while being sure that you're protected from malicious code.
        </Paragraph>
        <Row>
          <Link to={useBaseUrl('compute')}>
            <DocButton>Get Started with Suborbital Compute</DocButton>
          </Link>
        </Row>
      </div>

      <div>
        <img className="projectLogo" src={useBaseUrl('/img/webassembly-logo-wide.svg')} alt="WebAssembly" />

        {/* <Heading>Powered by WebAssembly</Heading> */}
        <Paragraph className="spacing">
          Many Suborbital projects are built on <Link to="https://webassembly.org">WebAssembly</Link>, a technology which enables the creation of fast, secure, platform-independent applications.
        </Paragraph>
        <Row>
          <Link to={useBaseUrl('intro-to-webassembly/why-webassembly')}>
            <DocButton>Learn more about WebAssembly</DocButton>
          </Link>
        </Row>
      </div>

    </ResponsiveRow>
  )
}

export { Header }
