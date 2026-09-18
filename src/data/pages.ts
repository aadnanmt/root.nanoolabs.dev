import type { ExplorePage } from "@types"

export const EXPLORE_PAGES: ExplorePage[] = [
  {
    name: "Commands",
    href: "/commands",
    desc: "My personal command wiki and hacks.",
    group: "content",
  },
  {
    name: "Notes",
    href: "/notes",
    desc: "Raw thoughts and daily context, unpolished.",
    group: "content",
  },
  {
    name: "Now",
    href: "/now",
    desc: "What I'm focusing on at this exact moment.",
    group: "live",
  },
  {
    name: "Focus",
    href: "/focus",
    desc: "What I'm currently working on and its progress.",
    group: "live",
  },
  {
    name: "Statistics",
    href: "/stats",
    desc: "My GitHub activity and language distribution.",
    group: "live",
  },
  {
    name: "Work",
    href: "/work",
    desc: "My professional experience and work history.",
    group: "content",
  },
  {
    name: "Uses",
    href: "/uses",
    desc: "The tools, software, and stack I use every day.",
    group: "identity",
  },
  {
    name: "Keys",
    href: "/keys",
    desc: "My public keys for encryption and signing.",
    group: "identity",
  },
]

export const MAIN_PAGES: ExplorePage[] = [
  {
    name: "Home",
    href: "/",
    desc: "The beginning of everything.",
    group: "content",
  },
  {
    name: "Blog",
    href: "/blog",
    desc: "My thoughts, tutorials, and technical articles.",
    group: "content",
  },
  {
    name: "Projects",
    href: "/projects",
    desc: "A showcase of things I've built.",
    group: "content",
  },
  {
    name: "Connect",
    href: "/connect",
    desc: "Get in touch with me for collaboration or chats.",
    group: "identity",
  },
]
