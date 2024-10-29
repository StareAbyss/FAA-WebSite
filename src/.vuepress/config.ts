import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/FAA-WebSite/",

  lang: "zh-CN",
  title: "FAA 美食自动助理",
  description: "FAA 美食自动助理的软件主页与文档演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
