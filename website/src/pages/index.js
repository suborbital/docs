import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { SectionDark, SectionLight } from '../components/layout'
import { Projects, Header } from '../components/sections'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Cloud Native development made secure, flexible, and fun">
      <main>
       <div className="homeMainContent">
          <SectionLight>
            <Header />
            <Projects type={'flagship'} />
            <Projects type={'other'} />
          </SectionLight>
        </div>
      </main>
    </Layout>
  );
}
