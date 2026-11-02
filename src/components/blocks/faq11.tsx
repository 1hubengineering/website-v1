// Adapted from Shadcnblocks faq11, retrieved through the authenticated registry.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const categories = [
  {
    title: "Working together",
    questions: [
      {
        question: "What kind of projects do you take on?",
        answer:
          "We build company websites, web platforms, business software, desktop applications, and integrations. We also provide systems engineering and consultancy to help you assess options and plan your next step. Whether you have a clear specification or an early idea, we start by understanding the problem you need to solve.",
      },
      {
        question: "How do we get started?",
        answer:
          "Tell us a little about your business, the challenge, and your ideal timeline. We will discuss the scope and agree on a practical next step before development begins.",
      },
      {
        question: "Can you work with an existing product?",
        answer:
          "Yes. We can review an existing application, plan improvements, connect services, or help shape its next stage. The starting point is understanding the current system and your priorities.",
      },
    ],
  },
  {
    title: "Our approach",
    questions: [
      {
        question: "How long does a project take?",
        answer:
          "Timing depends on scope, complexity, and the feedback process. We define milestones and an estimated schedule after discovery, so you know what to expect before committing.",
      },
      {
        question: "Are all your portfolio projects available today?",
        answer:
          "Several products are still in development, as labeled in the portfolio. Public repositories and releases are linked where available. Private products are presented as development work, rather than launched services.",
      },
    ],
  },
];
export function Faq11() {
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="eyebrow">A FEW THINGS TO KNOW</span>
          <h2 id="faq-title">
            Good questions.
            <br />
            <span className="muted-heading">Clear answers.</span>
          </h2>
          <p>Every great collaboration starts with a conversation. Here’s a head start.</p>
          <a className="text-link" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="faq-categories">
          {categories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="faq-category">{category.title}</h3>
              <Accordion type="single" collapsible>
                {category.questions.map((item, i) => (
                  <AccordionItem key={item.question} value={`${categoryIndex}-${i}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
