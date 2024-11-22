"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";

export const WorksAccordion = () => (
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
      Сложно в отношениях с партнером, родителями, детьми, на работе (конфликты,
      ссоры, непонимание, развод измены)
    </AccordionItem>

    <AccordionItem title="Искажения">
      Не получается сближаться, сложно с доверием, не могу найти подходящего
      партнера, сложно отстаиваю свою позицию, завишу от мнения других людей
    </AccordionItem>

    <AccordionItem title="Самооценка">
      Проблемы с отношением к себе: недовольство собой, самообвинения, нет
      собственной ценности
    </AccordionItem>

    <AccordionItem title="Эмоции">
      Беспокоят чувства: тревоги, стыд, вина, обида, боль, страх, злость, горе,
      разочарование. Трудности в эмоциональной регуляции
    </AccordionItem>
  </Accordion>
);
