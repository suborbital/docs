import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { SectionLight } from '../components/layout'
import { Header } from '../components/sections'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Cloud Native development made secure, flexible, and fun">
      <main>
       <div className="center">
          <SectionLight>
            <Header />
          </SectionLight>
        </div>
      </main>
    </Layout>
  );
}
