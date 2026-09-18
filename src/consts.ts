import type { Site, Metadata, Social } from "@types"

export const SITE: Site = {
  NAME: "NaN",
  EMAIL: "adnan@nanoolabs.dev",
  URL: "https://root.nanoolabs.dev",
  REPO: "https://github.com/aadnanmt/root.nanoolabs.dev",
  CDN: "https://cdn.nanoolabs.dev",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_PROJECTS_ON_HOMEPAGE: 1,
}

export const LICENSE = {
  NAME: "CC BY 4.0",
  URL: "https://creativecommons.org/licenses/by/4.0/",
}

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Adnan - Programmer && Sains Tech Enthusiast",
}

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my articles",
  INTRO: [
    "A collection of my articles, deep dives, lessons learned, and everything in between on this journey.",
  ],
}

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
  INTRO: [
    "Where I have worked and what I have done, the roles and the lessons.",
  ],
}

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
  INTRO: ["A collection of my projects with repositories and demos."],
}

export const NOTFOUND: Metadata = {
  TITLE: "404",
  DESCRIPTION: "Page not found, u can back to home page",
}

export const EXPLORE: Metadata = {
  TITLE: "Explore",
  DESCRIPTION: "Explore all pages on this site.",
  INTRO: [
    "Use the links below to navigate through the different sections of this site.",
  ],
}

export const CONTACT: Metadata = {
  TITLE: "Connect",
  DESCRIPTION: "Get in touch with me",
}

export const STATS: Metadata = {
  TITLE: "Statistics",
  DESCRIPTION:
    "Content count in this digital garden, GitHub activity, and language breakdown from my open-source contributions.",
  INTRO: [
    "Content count in this digital garden, GitHub activity across all repos, and language breakdown from my open-source contributions.",
  ],
}

export const CREDITS: Metadata = {
  TITLE: "Credits",
  DESCRIPTION: "The tools and technologies that power this website.",
  INTRO: [
    "This project is made possible by the incredible open-source community and the following technologies:",
  ],
}

export const KEYS: Metadata = {
  TITLE: "Public Keys",
  DESCRIPTION: "Public keys for encryption and signing.",
  INTRO: [
    "Public keys for encryption and signing. Fetch each raw key with curl, or view it below.",
  ],
}

export const COMMANDS: Metadata = {
  TITLE: "Commands",
  DESCRIPTION: "A collection of commands and hacks that I use.",
  INTRO: [
    "This is my personal command wiki. No fluff, just pure functionality and specific use cases that i've tested myself.",
  ],
}

export const FOCUS: Metadata = {
  TITLE: "Focus",
  DESCRIPTION: "Current focus and project progress, Ascii style.",
  INTRO: [
    "This page shows what I'm currently working or learning on and the progress of each task, sync anytime.",
  ],
}

export const NOTES: Metadata = {
  TITLE: "Notes",
  DESCRIPTION: "Raw thoughts and daily context, unpolished.",
  INTRO: [
    "Short, unpolish thoughts and context from my days. Not lessons, just random note. Mostly in english, sometimes not.",
  ],
}

export const SOCIALS: Social[] = [
  // Active
  {
    NAME: "github",
    HREF: "/gh",
    DESCRIPTION: "Where I store my code and experiments.",
    ACTIVE: true,
  },
  {
    NAME: "codeberg",
    HREF: "/cb",
    DESCRIPTION: "Primary forge and backup for my code and projects.",
    ACTIVE: true,
  },
  {
    NAME: "telegram",
    HREF: "/tg",
    DESCRIPTION: "Best for a direct and quick technical chat.",
    ACTIVE: true,
  },
  // Balanced (used but not primary)
  {
    NAME: "discord",
    HREF: "/dc",
    DESCRIPTION: "Direct chat, mostly for tech talk and gaming.",
    BALANCED: true,
  },
  {
    NAME: "spotify",
    HREF: "/sp",
    DESCRIPTION: "My playlists and what I am listening to.",
    BALANCED: true,
  },
  {
    NAME: "ko-fi",
    HREF: "/kf",
    DESCRIPTION: "Support my work or buy me a cup of coffee.",
    BALANCED: true,
  },
  // Inactive
  {
    NAME: "x-twitter",
    HREF: "/x",
    DESCRIPTION: "Thoughts, updates, and tech rants.",
  },
  {
    NAME: "instagram",
    HREF: "/ig",
    DESCRIPTION: "Personal bits and visual logs.",
  },
  {
    NAME: "gitlab",
    HREF: "/gl",
    DESCRIPTION: "Another forge, less active.",
  },
  {
    NAME: "threads",
    HREF: "/th",
    DESCRIPTION: "Short-form thoughts and updates.",
  },
]
