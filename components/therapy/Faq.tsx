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
          <AccordionContent className="text-lg text-gray-700 space-y-5">
            <p>
              Narrative therapy is a collaborative and empowering approach to
              counseling that helps individuals reshape their relationship with
              their experiences by viewing their lives as stories. Developed by
              Michael White and David Epston, it is based on the idea that
              people are not defined by their problems—rather, problems are
              separate from the person, and through storytelling, reframing, and
              externalizing issues, individuals can find new meaning and
              possibilities in their lives
            </p>
            <p>
              This therapeutic approach encourages clients to explore
              alternative narratives, highlight their strengths, and reclaim
              agency over their own stories. It is particularly effective in
              helping people who feel stuck in limiting or negative
              self-perceptions, allowing them to see themselves as the authors
              of their own lives rather than passive characters shaped by
              circumstances.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Psychodynamic Therapy?</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700 space-y-5">
            <p>
              Psychodynamic therapy is a form of talk therapy that explores how
              unconscious thoughts, past experiences, and unresolved conflicts
              influence present behaviors, emotions, and relationships. Rooted
              in the theories of Freud and later developed by others, it focuses
              on bringing unconscious patterns to awareness, helping individuals
              gain insight into their struggles and make meaningful changes.
            </p>
            <p>
              This approach often involves examining childhood experiences,
              defense mechanisms, and recurring relational patterns. Unlike
              cognitive or behavioral therapies that focus on immediate
              problem-solving, psychodynamic therapy aims for deep, long-term
              transformation by addressing the root causes of emotional
              distress. It is particularly useful for individuals dealing with
              anxiety, depression, relationship issues, and patterns of
              self-sabotage.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What is a Session Like?</AccordionTrigger>
          <AccordionContent className="text-lg text-gray-700 space-y-5">
            <p>
              A typical session is conversational and collaborative, focusing on
              helping the client explore and reshape their personal stories. The
              session begins with a check-in, allowing the client to share what
              feels most important. The therapist then helps externalize the
              problem, encouraging the client to see challenges as separate from
              their identity. Through open-ended questions, they explore
              alternative narratives, highlighting moments of resilience,
              strengths, and overlooked perspectives.
            </p>
            <p>
              As the session progresses, the therapist supports the client in
              re-authoring their story, helping them integrate new insights into
              their daily life. The session concludes with a reflection on key
              takeaways and potential next steps, ensuring the client leaves
              with a sense of empowerment and direction. Throughout, the
              therapist maintains a warm and curious approach, positioning the
              client as the expert in their own life.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
