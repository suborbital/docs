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
        <img className="projectLogoMain" src={useBaseUrl('/img/Banner-Light.svg')} alt="Suborbital" />

        {/* <Heading>Suborbital Extension Engine</Heading> */}
        <Paragraph className="spacing">
          Suborbital Extension Engine (SE2) is a platform that allows your users to write and deploy serverless extensions for your app.
          Our WebAssembly-based runtime lets you run user code within your infrastructure while being sure that you're protected from malicious code.
        </Paragraph>
        <Row>
          <Link to={useBaseUrl('introduction')}>
            <DocButton>Extension Engine Docs</DocButton>
          </Link>
        </Row>
      </div>
    </ResponsiveRow>
  )
}

export { Header }
