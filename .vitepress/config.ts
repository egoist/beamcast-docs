import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Beamcast Docs",
  description:
    "Getting started with Beamcast, the fastest way to use ChatGPT on any website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/" },
      { text: "Beamcast", link: "https://beamcast.app" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/" },
          {
            text: "Extensions",
            link: "/extensions",
          },
          { text: "Commands", link: "/commands" },
        ],
      },
    ],

    // socialLinks: [],
  },
})
