import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Beamcast Docs",
  description:
    "Getting started with Beamcast, the fastest way to use ChatGPT on any website",
  lastUpdated: true,

  appearance: "dark",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Docs", link: "/" },
      { text: "Beamcast", link: "https://beamcast.app" },
    ],

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/egoist/beamcast-docs/blob/main/:path",
    },
    darkModeSwitchLabel: "",

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
          { text: "Shortcuts", link: "/shortcuts" },
        ],
      },
    ],

    // socialLinks: [],
  },
})
