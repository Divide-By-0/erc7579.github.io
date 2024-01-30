import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LiaTelegram } from "react-icons/lia";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>ERC-7579</span>,
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – ERC-7579",
      };
    } else {
      return {
        titleTemplate: "ERC-7579",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ERC-7579" />
      <meta
        property="og:description"
        content="Minimal Modular Smart Accounts"
      />
    </>
  ),
  project: {
    link: "https://github.com/erc7579",
  },
  chat: {
    link: "https://t.me/+KfB9WuhKDgk5YzIx",
    icon: <LiaTelegram size={24} style={{ marginLeft: "-10px" }} />,
  },
  docsRepositoryBase: "https://github.com/erc7579/erc7579.github.io/tree/main",
  footer: {
    text: "ERC-7579 Docs",
  },
  banner: {
    key: "initial-release",
    text: (
      <a href="https://eips.ethereum.org/EIPS/eip-7579" target="_blank">
        Check out the first draft of ERC-7579 →
      </a>
    ),
  },
  faviconGlyph: "📝",
};

export default config;
