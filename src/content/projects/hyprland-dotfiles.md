---
title: "Hyprland Dotfiles"
description: "Custom Hyprland setup with a Cyan color style for Arch Linux."
date: "2026-04-25"
demoURL: "https://github.com/aadnanmt/hyprland-dotfiles"
repoURL: "https://github.com/aadnanmt/hyprland-dotfiles"
---

This page shows my personal config files (dotfiles) for Arch Linux. It has a custom Hyprland setup with a clear **Cyan Color** style.

## Screenshots

<details>
<summary>Interface & Layout</summary>
<br>
<img src="/content/projects/hyprland-dots/interface-0.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/interface-1.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/interface-3.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/waybar-style_cyqn.png" width="800" loading="lazy" decoding="async">
</details>

<details>
<summary>Apps Launcher & Menus (Wofi)</summary>
<br>
<img src="/content/projects/hyprland-dots/wofi-apps.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/wofi-emoji-style.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/wofi-power.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/wofi-wallpaper-selector.png" width="800" loading="lazy" decoding="async">
</details>

<details>
<summary>TUI & CLI Tools</summary>
<br>
<img src="/content/projects/hyprland-dots/fastfetch.png" width="400" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/tui-apps.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/lsd-style.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/yazi.png" width="800" loading="lazy" decoding="async">
<br>
<img src="/content/projects/hyprland-dots/ncdu.png" width="800" loading="lazy" decoding="async">
</details>

## Project Overview

- **Window Manager:** [Hyprland](https://hyprland.org/) (It controls windows on Wayland)
- **Shell:** [Fish Shell](https://fishshell.com/) with [Starship](https://starship.rs/)
- **Editor:** [Neovim](https://neovim.io/) (with [LazyVim](https://www.lazyvim.org/) config)
- **Status Bar:** [Waybar](https://github.com/Alexays/Waybar)
- **Terminal:** [Kitty](https://sw.kovidgoyal.net/kitty/)
- **Theme:** Custom Cyan theme (`#00ffff`) for UI parts like borders and terminal colors.
- **License:** [GPL-3.0](https://github.com/aadnanmt/hyprland-dotfiles/blob/main/LICENSE)

## Directory Structure

```text
.config/
├── alacritty/
├── btop/
├── cava/
├── dunst/
├── fastfetch/
├── fish/
├── htop/
├── hypr/
│   ├── conf/
│   ├── hyprland.conf
│   ├── hyprlock.conf
│   └── hyprpaper.conf
├── kitty/
├── lazygit/
├── lsd/
├── nvim/
├── theme/
├── wallpapers/
├── waybar/
├── wofi/
└── yazi/
```

## Key Programs

As defined in `hypr/conf/programs.conf`:

- **Terminal:** Kitty
- **File Manager:** Dolphin / Thunar
- **Menu/Launcher:** Wofi (Cyan-cyber theme)
- **Browser:** Firefox
- **Editor:** Neovim / VS Code
- **Lock Screen:** Hyprlock
- **Logout/Power Menu:** Wofi Power Menu

## Keybindings

Here are the shortcuts in `hypr/conf/keybindings.conf`:

### Apps & Menus

- `Super + Return` / `Q`: Open Terminal
- `Super + B`: Open Browser
- `Super + E`: Open File Manager
- `Super + D`: Open Wofi Launcher
- `Super + .`: Emoji Selector (Wofi)
- `Super + M`: Power Menu (Wofi)
- `Super + G`: Volume Control (Pavucontrol)
- `Super + Shift + W`: Wallpaper Select (Wofi)
- `Super + Shift + S`: Screenshot (Grim/Slurp)
- `Super + Shift + V`: Open Neovim

### Window Management

- `Super + Shift + Q`: Close active window
- `Super + V`: Toggle floating
- `Super + P`: Pseudo Tiling
- `Super + J`: Toggle Split
- `Super + Arrow Keys`: Move focus

### Workspaces

- `Super + 1-10`: Switch workspaces
- `Super + Shift + 1-10`: Move window to workspace
- `Super + Scroll`: Switch workspaces

### System (Media Keys)

- `Vol Up/Down/Mute`: Audio Control
- `Brightness Up/Down`: Screen Brightness
- `Media Play/Pause/Next/Prev`: Player Control

## Usage

Put these files in `~/.config/`.

- To use changes in Hyprland, reload it (use `hyprctl reload` or save the file).
- To reload Waybar, use `waybar/reload.sh` script.

## Credits

This setup uses work from the open-source community. Special thanks to:

- **[elifouts (Dotfiles)](https://github.com/elifouts/Dotfiles):** For the nice Wofi configs, Powermenu, and Hyprlock setup.
- **[dln (wofi-emoji)](https://github.com/dln/wofi-emoji):** For the emoji selector script logic in `emoji.sh`.
- **[Aditya Shakya (adi1090x)](https://github.com/adi1090x/rofi):** For ideas for Rofi/Wofi themes.
- **[Muhammad Diaz (MDiaznf23)](https://github.com/MDiaznf23):** For some config in `simple-autoricing-i3wm-dotfiles`.
- **[LazyVim](https://www.lazyvim.org/):** For the modern and strong Neovim config framework.
- **[Shivam Salkar (minimal-waybar-config)](https://github.com/shivam-salkar/minimal-waybar-config):** For the clean and small Waybar config that is the base for the status bar.
- **[Mahaveer Gurjar (Hyprlock-Dots)](https://github.com/mahaveergurjar/Hyprlock-Dots):** For the many Hyprlock layouts and scripts.
- **[Hyprland Community](https://hyprland.org/):** For the great Wayland compositor.
- **Arch Linux:** For being the start of this ricing journey.
