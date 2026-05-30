import type { Site, Metadata, Socials } from "@types"

export const SITE: Site = {
  NAME: "NaN",
  EMAIL: "adnan@nanoolabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
}

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Adnan - Programmer && Sains Tech Enthusiast",
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my articles",
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
}

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
}

export const CONTRIBUTOR: Metadata = {
  TITLE: "Contributor",
  DESCRIPTION: "people who contribute to nanoo labs.",
}

export const NOTFOUND: Metadata = {
  TITLE: "404",
  DESCRIPTION: "Page not found, u can back to home page",
}

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/aadnanmt",
  },
  {
    NAME: "github",
    HREF: "https://github.com/aadnanmt",
  },
  {
    NAME: "telegram",
    HREF: "https://t.me/aadnanmtech",
  },
  {
    NAME: "instagram",
    HREF: "https://www.instagram.com/aadnanmt",
  },
]
