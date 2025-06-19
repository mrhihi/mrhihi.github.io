import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LatestPosts from "@site/src/components/LatestPosts";

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <div>
            {siteConfig.title}
          </div>
        </Heading>
        <div class="row row--no-gutters">
          <div class="col col--1">
          </div>
          <div class="col">
            <Heading as="h2" className="hero__subtitle">
              {siteConfig.tagline}
            </Heading>
          </div>
          <div class="col col--1"></div>
        </div>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

// function FeatureDescription()
// {
//   return (
//     <div className="text--center padding-horiz--md">
//       <br />
//       <p>Recent Posts</p>
//     </div>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // const recentPosts = require("../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

  // const FeatureList = recentPosts.items.slice(0, 5).map((item, index) => (
  //   {
  //     description: (
  //       <>
  //         <a href={`${item.permalink}`}>{item.title}</a>{" "}
  //       </>
  //     ),
  //   }
  // ));

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <LatestPosts />
      </main>
    </Layout>
  );
}
