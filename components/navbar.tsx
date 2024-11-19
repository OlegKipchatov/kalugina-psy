import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TelegramIcon,
  WhatsAppIcon,
  VKIcon
} from "@/components/icons";

export const Navbar = () => {
  return (
    <div className="relative flex justify-center top-12">
      <NextUINavbar maxWidth="lg" position="sticky" className="max-w-lg top-12 border-2 border-zinc-800 rounded-full">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
          <ul className="flex gap-4 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent
          className="flex basis-1/5 basis-full"
          justify="end"
        >
          <NavbarItem className="flex gap-2">
            <Link isExternal aria-label="Telegram" href={siteConfig.links.telegram}>
              <TelegramIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="WhatsApp" href={siteConfig.links.telegram}>
              <WhatsAppIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="VK" href={siteConfig.links.telegram}>
              <VKIcon className="text-default-500" />
            </Link>

            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};
