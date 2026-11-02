// Adapted from Shadcnblocks cta26, retrieved through the authenticated registry.
import { ArrowUpRight, Code2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "@/components/brand";
export function Cta26({ onInquiry }: { onInquiry: () => void }) {
  return (
    <section className="contact-section section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-content">
            <span className="eyebrow">
              <span className="status-dot" /> GREAT THINGS START WITH AN IDEA
            </span>
            <h2 id="contact-title">
              Your next big thing.
              <br />
              <span>Let’s engineer it.</span>
            </h2>
            <p>
              A website. A business system. Something entirely new.
              <br />
              Bring the ambition. We’ll bring the engineering.
            </p>
            <Button size="lg" onClick={onInquiry}>
              Tell us about your project <ArrowUpRight />
            </Button>
          </div>
          <BrandMark className="contact-symbol" />
          <div className="contact-coordinate" aria-hidden="true">
            IDEA → ENGINEERING → IMPACT
          </div>
        </div>
        <div className="contact-options">
          <button onClick={onInquiry} className="contact-option">
            <MessageSquare size={21} />
            <span>
              <strong>Start a conversation</strong>
              <span>Tell us what you have in mind.</span>
            </span>
            <ArrowUpRight size={19} />
          </button>
          <a
            href="https://github.com/1hubengineering"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <Code2 size={21} />
            <span>
              <strong>Explore the source</strong>
              <span>A closer look at how we build.</span>
            </span>
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
