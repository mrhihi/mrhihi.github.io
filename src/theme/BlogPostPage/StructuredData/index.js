import React from 'react';
import Head from '@docusaurus/Head';
import {useBlogPostStructuredData} from '@docusaurus/theme-common';
export default function BlogPostStructuredData() {
  const structuredData = useBlogPostStructuredData();
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
