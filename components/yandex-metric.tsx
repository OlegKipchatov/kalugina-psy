/* eslint-disable @next/next/no-img-element */
"use client";

// import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
// import { useEffect } from "react";

export const YandexMetric = () => {
  // const pathName = usePathname();
  // const searchParams = useSearchParams();

  // useEffect(() => {
  //   (window as any).ym("99130191", "hit", window.location.href);
  // }, [pathName, searchParams]);

  return (
    <>
      <Script id="yandex-metric">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)
          [0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
          ym(99130191, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
          })
      `}
      </Script>
      <noscript>
        <div>
          <img
            alt=""
            src="https://mc.yandex.ru/watch/99130191"
            style={{
              position: "absolute",
              left: "-9999px",
            }}
          />
        </div>
      </noscript>
    </>
  );
};
