import { defaultTheme } from "vuepress-vite"

const { docsearchPlugin } = require("@vuepress/plugin-docsearch")
const { shikiPlugin } = require("@vuepress/plugin-shiki")
const { pwaPlugin } = require("@vuepress/plugin-pwa")
const { pwaPopupPlugin } = require("@vuepress/plugin-pwa-popup")

module.exports = {
  lang: "en-US",
  title: "AuxBot Documentation",
  description:
    "AuxBot is the number one bot to setup a bot requesting system in your server!",
  plugins: [
    docsearchPlugin({
      apiKey: process.env.ALGOLIA_KEY,
      indexName: "auxbot",
    }),
    shikiPlugin({
      theme: "dark-plus",
    }),
    pwaPlugin({
      skipWaiting: true,
    }),
    pwaPopupPlugin()
  ],
  theme: defaultTheme({
    repo: "AuxBot-Discord-Bot/Docs",
    logo: "/auxbot-logo.png",
    sidebarDepth: 3,
    lastUpdated: true,
    navbar: [
      {
        text: "Cogs",
        link: "/cogs/",
      },
      {
        text: "Frequently Asked Questions",
        link: "/faq/",
      },
    ],
  }),
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/manifest.webmanifest",
      },
    ],
    [
      "meta",
      {
        name: "application-name",
        content: "AuxBot Documentation",
      },
    ],
    [
      "meta",
      {
        charset: "utf-8",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/auxbot-logo.png",
      },
    ],
    [
      "meta",
      {
        property: "og:site_name",
        content: "docs.auxbot.xyz",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "AuxBot Documentation",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "AuxBot is the number one bot to setup a bot requesting system in your server!",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://docs.auxbot.xyz/",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "/auxbot-banner.png",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#f82b3a",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#f82b3a",
      },
    ],
    [
      "meta",
      {
        property: "og:locale",
        content: "en_US",
      },
    ],
  ],
}
