import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { SectionDark, SectionLight } from '../components/layout'
import { Projects, Header } from '../components/sections'

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
       <div className="homeMainContent">
          <SectionLight>
            <Header />
            <br />
            <Projects type={'OpenSourceProjects'} />
            <br />
          </SectionLight>
          <SectionDark>
          <Projects type={'OtherOfferings'} />
          </SectionDark>
        </div>
      </main>
    </Layout>
  );
}
