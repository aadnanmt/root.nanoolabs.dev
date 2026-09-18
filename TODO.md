# TODO

Pending work and ideas for root.nanoolabs.dev

## Pending

- [ ] Add "Explore the garden" section on homepage (bridges to `/commands`, `/now`, `/focus`)
- [ ] Add `--open` to dev script
- [ ] Uncomment `pnpm new` in README (scripts/ now tracked), phase development
- [ ] Set up Astro LSP (live `astro check` in editor)
- [ ] Replace profil photo

## Deferred

- [ ] Mobile hamburger menu: revisit UI/UX (dropdown pattern). Logic is settle and stay: `group` + `menu-open` class toggle on `#main-header`, `astro:page-load` listener, `hidden group-[.menu-open]:flex` nav
- [ ] Astro v5 → v7 (Content Layer API migration). Do when content is quiet
- [ ] i18n EN/ID. I don't need it yet
- [ ] Tests, CI/CD, Storybook - YAGNI
- [ ] Split `src/components/` to `ui/`, `widgets/`, `layout/` when>15 files
