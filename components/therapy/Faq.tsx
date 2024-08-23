import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <section
      className="space-y-5 rounded-md py-5 col-span-2 bento"
      id="what-is"
    >
      <h2 className="text-2xl font-lit font-medium">What Is...</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Narrative Therapy?</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, aspernatur, quasi eum impedit amet fugit accusantium,
            dolore nobis soluta molestiae sequi vel harum non voluptatum.
            Ducimus eius doloremque veniam iure voluptatum. Molestias hic, neque
            ex tempore eligendi beatae cupiditate facere sint cum soluta saepe
            blanditiis iure dolorem omnis esse repellat!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Psychodynamic Therapy?</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates nisi nulla id qui, iusto, eum voluptatum earum architecto
            facere ex error, magnam quo eaque laboriosam nesciunt voluptatibus
            voluptate vitae repudiandae placeat obcaecati! Aliquid animi illo
            illum perspiciatis vero, totam saepe porro corporis id, sequi
            repellendus expedita consequuntur autem necessitatibus sint
            blanditiis, quis laborum architecto labore ratione nulla doloremque
            ducimus. Illo, quae aliquam. Consequuntur, incidunt sequi possimus
            quasi eum perferendis iste praesentium. Placeat, explicabo libero!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What is a Session Like?</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            voluptates nisi nulla id qui, iusto, eum voluptatum earum architecto
            facere ex error, magnam quo eaque laboriosam nesciunt voluptatibus
            voluptate vitae repudiandae placeat obcaecati! Aliquid animi illo
            illum perspiciatis vero, totam saepe porro corporis id, sequi
            repellendus expedita consequuntur autem necessitatibus sint
            blanditiis, quis laborum architecto labore ratione nulla doloremque
            ducimus. Illo, quae aliquam. Consequuntur, incidunt sequi possimus
            quasi eum perferendis iste praesentium. Placeat, explicabo libero!
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
