import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
        repo="mrhihi/mrhihi.github.io"
        repoId="R_kgDOG4tgbw"
        category="Announcements"
        categoryId="DIC_kwDOG4tgb84ChbgG"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        nputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-TW"
        loading="lazy"
        crossorigin="anonymous"
        async
    />
  );
}