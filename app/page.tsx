"use client";

import { Image, Accordion, AccordionItem, Link } from "@nextui-org/react";

import ImageCarousel from "@/components/image-carousel";
import { siteConfig } from "@/config/site";
import { TelegramIcon, VKIcon, WhatsAppIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:py-16 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-lg">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Калугина Таисия
            <br />
            <span className="text-2xl lg:text-3xl">Клинический Психолог</span>
          </h1>

          <ul className="list-disc text-xl pl-4">
            <li>Психотерапия онлайн</li>
            <li>Доказательные методы</li>
          </ul>

          <div className="flex gap-8">
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
              href={siteConfig.links.telegram}
            >
              <WhatsAppIcon size={50} />
            </Link>
            <Link
              isExternal
              aria-label="VK"
              color="foreground"
              href={siteConfig.links.telegram}
            >
              <VKIcon size={50} />
            </Link>
          </div>
        </div>

        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image alt="Логотип" src="/img/main.jpg" />
        </div>
      </section>

      <section className="flex flex-col justify-center w-full py-8">
        <h2 className="text-center md:text-start ml-6 mb-6 text-3xl font-bold">
          С чем работаю
        </h2>

        <div className="flex justify-between gap-12 w-full px-4">
          <div className="w-full lg:w-2/3">
            <Accordion
              itemClasses={{
                title: "text-2xl",
                content: "text-md",
              }}
            >
              <AccordionItem title="Неврозы">
                Немедикаментозное лечение невротических расстройств
              </AccordionItem>

              <AccordionItem title="Хроническая тревога">
                Тревожные расстройства, паническое расстройство
              </AccordionItem>

              <AccordionItem title="Отношения">
                Сложно в отношениях с партнером, родителями, детьми, на работе
                (конфликты, ссоры, непонимание, развод измены)
              </AccordionItem>

              <AccordionItem title="Искажения">
                Не получается сближаться, сложно с доверием, не могу найти
                подходящего партнера, сложно отстаиваю свою позицию, завишу от
                мнения других людей
              </AccordionItem>

              <AccordionItem title="Самооценка">
                Проблемы с отношением к себе: недовольство собой, самообвинения,
                нет собственной ценности
              </AccordionItem>

              <AccordionItem title="Эмоции">
                Беспокоят чувства: тревоги, стыд, вина, обида, боль, страх,
                злость, горе, разочарование. Трудности в эмоциональной регуляции
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden lg:flex justify-center items-center w-1/3">
            <Image
              className="w-full h-auto object-cover"
              src="./img/work.jpg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6 rounded-lg">
        <h2 className="text-center mb-8 text-3xl font-bold">Обо мне</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Я использую современные методы психотерапии, уделяя особое внимание
            каждому клиенту. Все встречи проходят с соблюдением строгой
            конфиденциальности.
          </p>

          <p>
            Индивидуальный подход — это основа моей работы. Каждый случай
            уникален, и я помогаю раскрыть скрытые обстоятельства, которые вы
            сами можете не замечать. Вместе мы найдём пути к достижению ваших
            целей.
          </p>
        </div>
      </section>

      <section className="flex justify-center w-full py-8">
        <div className="w-full max-w-xl p-2">
          <ImageCarousel>
            <Image className="" src="./img/diplom-1.jpg" />
            <Image className="" src="./img/diplom-2.jpg" />
            <Image className="" src="./img/diplom-3.jpg" />
          </ImageCarousel>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-start justify-between gap-8 px-8 py-12">
        <div className="flex flex-col gap-4 max-w-md">
          <h2 className="text-3xl font-bold">Часто задаваемые вопросы</h2>
        </div>

        <div className="flex flex-col gap-6 max-w-2xl">
          <div>
            <h3 className="text-xl font-semibold">
              В каких методах вы работаете?
            </h3>
            <p className="text-default-800">
              В тех, которые имеют доказанную эффективность —
              когнитивно-поведенческая терапия, терапия принятия и
              ответственности, терапия осознанности.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">А много сессий надо?</h3>
            <p className="text-default-800">
              Обычно для решения одной проблемы достаточно 3-6 сессий. Но, в
              среднем, терапия быстрая. Четкость и понимание дают нам результат.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Как можно записаться?</h3>
            <p className="text-default-800">
              Вы можете записаться через форму на сайте или связавшись с нами по
              телефону.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-6 rounded-lg">
        <h2 className="text-center mb-8 text-3xl font-bold">
          Как понять, нужен ли психолог?
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Если нет сил и удовольствия, вокруг всё мрачное, много мыслей в
            голове и они не имеют решения, или эмоции переполняют — это повод
            обратиться за помощью.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-8 px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Стоимость консультации</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full max-w-4xl p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 bg-default-50">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-default-800 mb-4">
              Индивидуальная консультация
            </h3>
            <p className="text-default-600 mb-4">
              Консультации направлены на диагностику, постановку целей и
              развитие навыков рационального мышления.
            </p>
            <ul className="text-default-700 leading-relaxed space-y-2">
              <li>
                <strong>Первая консультация:</strong> диагностика, определение
                целей и задач
              </li>
              <li>
                <strong>Вторая консультация и далее:</strong> обучение
                рационализации, развитие гибкости мышления
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col items-center w-full lg:max-w-sm border border-default-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-default-800 mb-2">
              Оплата за одну сессию
            </h4>
            <p className="text-4xl font-bold mb-4">2000 ₽</p>

            <div className="flex gap-8">
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
                href={siteConfig.links.telegram}
              >
                <WhatsAppIcon size={50} />
              </Link>
              <Link
                isExternal
                aria-label="VK"
                color="foreground"
                href={siteConfig.links.telegram}
              >
                <VKIcon size={50} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
