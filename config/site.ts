export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Калугина Таисия",
  description: "Калугина Таисия — профессиональный психолог. Индивидуальные консультации, помощь в решении личных и профессиональных вопросов, работа с тревожностью, стрессом и самооценкой. Доверительная атмосфера и эффективные методы для гармонии и внутреннего баланса.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
