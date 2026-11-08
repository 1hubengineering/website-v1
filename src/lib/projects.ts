export type ProjectPreview = {
  src: string;
  label: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  name: string;
  category: "Products" | "Open source";
  type: string;
  description: string;
  detail: string;
  tags: string[];
  art: string;
  status: string;
  url: string;
  linkLabel?: string;
  links?: { label: string; url: string }[];
  previews?: ProjectPreview[];
  previewNote?: string;
};

const asset = (path: string) => `${import.meta.env.BASE_URL}projects/${path}`;

export const projects: Project[] = [
  {
    name: "Rental OS",
    category: "Products",
    type: "BUSINESS PLATFORM",
    description: "One platform. A more connected rental business.",
    detail:
      "A rental marketplace and management platform in development, bringing vendors, inventory, bookings, and customer experiences into one connected workflow.",
    tags: ["Web platform", "Business operations"],
    art: "rental",
    status: "In development",
    url: "",
  },
  {
    name: "Studio Proof",
    category: "Products",
    type: "PHOTOGRAPHY WORKFLOW",
    description: "The simpler way to find the perfect shot.",
    detail:
      "A local-first photo proofing application in development that helps studios and clients review, select, and deliver photographs on their own network.",
    tags: ["Desktop + web", "Local first"],
    art: "studio",
    status: "In development",
    url: "https://github.com/zdevzone/studio-proof-releases",
    linkLabel: "View public releases",
  },
  {
    name: "KeyForge",
    category: "Open source",
    type: "DEVELOPER INFRASTRUCTURE",
    description: "Your software. Your licenses. Your rules.",
    detail:
      "A self-hosted, MIT-licensed software licensing system with activations, trials, and offline license tokens.",
    tags: ["Open source", "Self hosted"],
    art: "keyforge",
    status: "Open source",
    url: "https://github.com/zdevzone/keyforge",
  },
  {
    name: "Say Bingo",
    category: "Products",
    type: "INTERACTIVE PRODUCT",
    description: "A little connection. A lot of possibility.",
    detail:
      "A Telegram-based multiplayer bingo experience in development, with game rooms, player wallets, and operator workflows.",
    tags: ["Telegram", "Multiplayer"],
    art: "bingo",
    status: "In development",
    url: "",
  },
  {
    name: "Afaan Oromo Bible",
    category: "Products",
    type: "OFFLINE BIBLE READER",
    description: "Read, compare, and keep your study close.",
    detail:
      "An offline desktop Bible reader with Scripture search, side-by-side Afaan Oromo and English editions, highlights, bookmarks, and personal study notes stored on your computer. Windows is available in public beta, with experimental macOS and Ubuntu downloads.",
    tags: ["Desktop", "Offline first"],
    art: "bible",
    status: "Public beta",
    url: "https://bible.1hubengineering.com/",
    linkLabel: "Explore the reader",
    links: [
      { label: "Beta downloads", url: "https://bible.1hubengineering.com/#downloads" },
      {
        label: "Release notes",
        url: "https://github.com/1hubengineering/afaan-oromo-bible-releases/releases",
      },
    ],
    previewNote: "Windows beta.8 screenshots from the project’s published demo profile.",
    previews: [
      {
        src: asset("afaan-oromo-bible/reader-classic.webp"),
        label: "Classic reader",
        alt: "Afaan Oromo Bible in Classic light appearance, with book navigation, Matthew chapter 2, and verse highlighting tools.",
        width: 1920,
        height: 1094,
      },
      {
        src: asset("afaan-oromo-bible/compare-sepia.webp"),
        label: "Compare editions",
        alt: "Afaan Oromo and King James English editions side by side in the Sepia light reading palette.",
        width: 1920,
        height: 1094,
      },
      {
        src: asset("afaan-oromo-bible/notes-forest.webp"),
        label: "Study notes",
        alt: "An illustrative study note beside Scripture in the Forest light palette, with formatting tools and a linked passage.",
        width: 1920,
        height: 1094,
      },
      {
        src: asset("afaan-oromo-bible/compare-midnight.webp"),
        label: "Midnight theme",
        alt: "Afaan Oromo and English comparison in Midnight dark appearance with a highlighted verse.",
        width: 1920,
        height: 1094,
      },
      {
        src: asset("afaan-oromo-bible/bookmarks-plum.webp"),
        label: "Bookmarks",
        alt: "Saved demo passage bookmarks beside the reader in the Plum dark palette.",
        width: 1920,
        height: 1094,
      },
    ],
  },
  {
    name: "Linux Setup",
    category: "Open source",
    type: "DEVELOPER EXPERIENCE",
    description: "Your terminal. Ready for the way you build.",
    detail:
      "A Linux terminal setup for Ubuntu and Debian, including WSL. Combines Zsh, Oh My Posh themes, tmux, developer tools, GitHub account profiles, and an optional AI skill manager. An Alt+X command picker keeps shortcuts searchable, while setup checks, configuration backups, and selective uninstall help you manage your environment.",
    tags: ["Ubuntu / Debian / WSL", "Zsh + tmux"],
    art: "linux",
    status: "Open source",
    url: "https://github.com/1hubengineering/linux-setup",
    links: [
      {
        label: "Terminal previews",
        url: "https://github.com/1hubengineering/linux-setup/blob/main/docs/previews.md",
      },
      {
        label: "User guides",
        url: "https://github.com/1hubengineering/linux-setup/blob/main/docs/README.md",
      },
    ],
    previewNote:
      "Published terminal examples and menu captures. Prompt themes are based on Oh My Posh.",
    previews: [
      {
        src: asset("linux-setup/quick-term.png"),
        label: "Quick-term",
        alt: "Quick-term’s orange-accented Zsh prompt with directory and Git context and a pnpm command reference.",
        width: 2255,
        height: 728,
      },
      {
        src: asset("linux-setup/custom-themes.png"),
        label: "Custom themes",
        alt: "Comparison of Wholespace, Unicorn, Tiwahu, Spaceship, Night Owl, and Kali prompt layouts.",
        width: 2255,
        height: 1556,
      },
      {
        src: asset("linux-setup/iterm2.png"),
        label: "iTerm2",
        alt: "The alternative iTerm2 prompt with blue and lime segments and a command reference.",
        width: 2255,
        height: 728,
      },
      {
        src: asset("linux-setup/command-picker.png"),
        label: "Command picker",
        alt: "The Alt+X fzf command picker listing Docker shortcuts and previewing a full command definition.",
        width: 2255,
        height: 1418,
      },
      {
        src: asset("linux-setup/skill-manager.png"),
        label: "AI skill manager",
        alt: "The optional AI skill manager showing UI and UX skill choices with their source repositories.",
        width: 2255,
        height: 590,
      },
    ],
  },
];
