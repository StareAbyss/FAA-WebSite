import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "新手入门",
        icon: "lightbulb",
        prefix: "start_quickly/",
        children: ["", { text: "综述", icon: "ellipsis", link: "" }],
      },
      {
        text: "深入进阶",
        icon: "lightbulb",
        prefix: "advanced/",
        children: ["", { text: "综述", icon: "ellipsis", link: "" }],
      },
      {
        text: "开发文档",
        icon: "lightbulb",
        prefix: "development/",
        children: ["", { text: "综述", icon: "ellipsis", link: "" }],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
