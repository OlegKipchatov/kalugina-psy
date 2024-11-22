"use client";

import { Link } from "@nextui-org/react";

import { TelegramIcon, VKIcon, WhatsAppIcon } from "./icons";

import { siteConfig } from "@/config/site";

export const ContactList = () => (
  <div className="flex flex-wrap justify-center gap-4 md:gap-8">
    <Link
      isExternal
      aria-label="Telegram"
      color="foreground"
      href={siteConfig.links.telegram}
    >
      <TelegramIcon size={50} />
    </Link>
    <Link
      isExternal
      aria-label="WhatsApp"
      color="foreground"
      href={siteConfig.links.whatsapp}
    >
      <WhatsAppIcon size={50} />
    </Link>
    <Link
      isExternal
      aria-label="VK"
      color="foreground"
      href={siteConfig.links.vk}
    >
      <VKIcon size={50} />
    </Link>
  </div>
);
