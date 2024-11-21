import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <div className="absolute top-12 right-12">
      {/* <NextUINavbar
        className="max-w-lg top-12 border-2 border-zinc-800 rounded-full"
        maxWidth="lg"
        position="sticky"
      >
        <NavbarContent className="flex basis-1/5 basis-full" justify="end">
          <NavbarItem className="flex gap-2">
            <Link
              isExternal
              aria-label="Telegram"
              href={siteConfig.links.telegram}
            >
              <TelegramIcon className="text-default-500" />
            </Link>
            <Link
              isExternal
              aria-label="WhatsApp"
              href={siteConfig.links.telegram}
            >
              <WhatsAppIcon className="text-default-500" />
            </Link>
            <Link isExternal aria-label="VK" href={siteConfig.links.telegram}>
              <VKIcon className="text-default-500" />
            </Link>

            
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar> */}

      <div className="h-10 w-10 flex justify-center rounded-full bg-content2">
        <ThemeSwitch />
      </div>
    </div>
  );
};
