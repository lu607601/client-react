import React from "react";
import Loadable from "react-loadable";

let config = [
  {
    name: "/",
    path: "/",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/home/index.js"),
      loading: () => <div />
    })
  },
  {
    name: "life",
    path: "/life",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/life/index.js"),
      loading: () => <div />
    })
  },
  {
    name: "timeLine",
    path: "/timeline",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/timeLine/index.js"),
      loading: () => <div />
    })
  },
  {
    name: "message",
    path: "/message",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/message/index.js"),
      loading: () => <div />
    })
  },
  {
    name: "aboutme",
    path: "/aboutme",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/aboutme/index.js"),
      loading: () => <div />
    })
  },
  {
    name: "articledetail",
    path: "/articledetail/:id",
    exact: true,
    component: Loadable({
      loader: () => import("../pages/articleDetail/index.js"),
      loading: () => <div />
    })
  }
];

export default config;
