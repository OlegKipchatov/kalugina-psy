'use client'

import Slider from "react-slick";
import { Image, Accordion, AccordionItem } from "@nextui-org/react";
import ImageCarousel from '@/components/image-carousel';

export default function Home() {
  return (
    <>
      <section id="about" className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 w-full px-4">
          <h1 className="text-4xl flex flex-col gap-8 items-center lg:items-start">
            <span>Психолог</span>
            <span>Калугуниа Таисия</span>
          </h1>
          <div className="mt-0 col-span-5 flex">
            <Image src="./img/main.jpg" className="w-96" />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full py-8">
        <h2 className="text-center mb-6 text-4xl">С чем работаю</h2>

        <div className="flex justify-between gap-12 w-full px-4">
          <div className="w-full lg:w-2/3">
            <Accordion itemClasses={{
              title: 'text-2xl',
              content: 'text-lg'
            }}>
              <AccordionItem title="Неврозы">
                Немедикаментозное лечение невротических расстройств
              </AccordionItem>

              <AccordionItem title="Хроническая тревога">
                Тревожные расстройства, паническое расстройство
              </AccordionItem>

              <AccordionItem title="Отношения">
                Сложно в отношениях с партнером, родителями, детьми, на работе (конфликты, ссоры, непонимание, развод измены)
              </AccordionItem>

              <AccordionItem title="Искажения">
                Не получается сближаться, сложно с доверием, не могу найти подходящего партнера, сложно отстаиваю свою позицию, завишу от мнения других людей
              </AccordionItem>

              <AccordionItem title="Самооценка">
                Проблемы с отношением к себе: недовольство собой, самообвинения, нет собственной ценности
              </AccordionItem>

              <AccordionItem title="Эмоции">
                Беспокоят чувства: тревоги, стыд, вина, обида, боль, страх, злость, горе, разочарование. Трудности в эмоциональной регуляции
              </AccordionItem>
            </Accordion>
          </div>

          <div className="hidden lg:flex justify-center items-center w-1/3">
            <Image src="./img/work.jpg" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="flex justify-center w-full py-8">
        <div className="w-full max-w-xl p-2">
          <ImageCarousel>
            <Image src="./img/diplom-1.jpg" className="" />
            <Image src="./img/diplom-2.jpg" className="" />
            <Image src="./img/diplom-3.jpg" className="" />
          </ImageCarousel>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-center mb-6 text-4xl font-bold text-gray-800">Обо мне</h2>

        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          Применяю современные методы психотерапии и соблюдаю абсолютную конфиденциальность.
        </p>

        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          С каждым человеком я выстраиваю индивидуальный путь достижения цели. Любой случай требует полного
          погружения и выяснения скрытых обстоятельств, которые даже вы сами можете не знать и не замечать.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Часто задаваемые вопросы:</h3>
          <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
            <li className="mb-2">
              <strong>В каких методах вы работаете?</strong><br />
              В тех, которые имеют доказанную эффективность — когнитивно-поведенческая терапия, терапия принятия и ответственности, терапия осознанности.
            </li>
            <li className="mb-2">
              <strong>А много сессий надо?</strong><br />
              Обычно для решения одной проблемы достаточно 3-6 сессий. Но, в среднем, терапия быстрая. Четкость и понимание дают нам результат.
            </li>
          </ul>
        </div>

        <p className="mb-4 text-lg text-gray-700 leading-relaxed">
          <strong>Как понять, нужен ли психолог?</strong><br />
          Если нет сил и удовольствия, вокруг всё мрачное, много мыслей в голове и они не имеют решения, или эмоции переполняют — это повод обратиться за помощью.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Стоимость консультации:</h3>
          <ul className="list-none text-gray-700 leading-relaxed">
            <li><strong>55 минут:</strong> 2000 рублей</li>
            <li><strong>Первая консультация:</strong> диагностика, определение целей и задач</li>
            <li><strong>Вторая консультация и далее:</strong> обучение рационализации, развитие гибкости мышления</li>
          </ul>
        </div>
      </section>
    </>
  );
}
