import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  type RefObject,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ModalContent({
  children,
  className,
  returnFocusFallback,
}: {
  children: ReactNode;
  className?: string;
  returnFocusFallback?: RefObject<HTMLElement | null>;
}) {
  const returnFocus = useRef<HTMLElement | null>(null);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />
      <Dialog.Content
        className={cn("dialog-content", className)}
        onOpenAutoFocus={() => {
          const active = document.activeElement;
          returnFocus.current =
            active instanceof HTMLElement &&
            active !== document.body &&
            !active.closest('[role="dialog"]')
              ? active
              : (returnFocusFallback?.current ?? null);
        }}
        onCloseAutoFocus={(event) => {
          const target = returnFocus.current?.isConnected
            ? returnFocus.current
            : returnFocusFallback?.current;
          if (target?.isConnected && target.getClientRects().length) {
            event.preventDefault();
            target.focus({ preventScroll: true });
          }
        }}
      >
        {children}
        <Dialog.Close className="dialog-close" aria-label="Close dialog">
          <X size={19} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
export function ProjectInquiry({
  open,
  onOpenChange,
  returnFocusFallback,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusFallback?: RefObject<HTMLElement | null>;
}) {
  const [draft, setDraft] = useState("");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", service: "", message: "" });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const previousDraft = useRef("");
  useEffect(() => {
    if (!open) {
      previousDraft.current = "";
      return;
    }
    if (draft) titleRef.current?.focus();
    else if (previousDraft.current) nameRef.current?.focus();
    previousDraft.current = draft;
  }, [draft, open]);
  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const field = event.currentTarget;
    field.setCustomValidity("");
    setValues((previous) => ({ ...previous, [field.name]: field.value }));
  }
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    for (const fieldName of ["name", "message"]) {
      const field = event.currentTarget.elements.namedItem(fieldName) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      if (!field.value.trim()) {
        field.setCustomValidity(
          fieldName === "name"
            ? "Please enter your name."
            : "Please tell us a little about your project.",
        );
        field.reportValidity();
        return;
      }
    }
    setCopied(false);
    setCopyError(false);
    setDraft(
      `Hello AndHub,\n\nMy name is ${values.name.trim()}.\nEmail: ${values.email.trim()}\nInterested in: ${values.service}\n\n${values.message.trim()}\n\nBest,\n${values.name.trim()}`,
    );
  }
  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        onOpenChange(value);
        if (!value) {
          setDraft("");
          setCopied(false);
          setCopyError(false);
        }
      }}
    >
      <ModalContent className="inquiry-dialog" returnFocusFallback={returnFocusFallback}>
        <span className="eyebrow">LET’S BUILD SOMETHING USEFUL</span>
        <Dialog.Title ref={titleRef} tabIndex={-1}>
          {draft ? "Your inquiry is ready." : "Tell us about your idea."}
        </Dialog.Title>
        <Dialog.Description>
          {draft
            ? "Open the draft in your email app, review it, and send when you’re ready."
            : "A little context goes a long way. Prepare a project inquiry to share with our team."}
        </Dialog.Description>
        {draft ? (
          <div className="draft-result">
            <pre tabIndex={0} aria-label="Project inquiry draft">
              {draft}
            </pre>
            <Button asChild size="lg">
              <a
                href={`mailto:info@1hubengineering.com?subject=${encodeURIComponent("Project inquiry — AndHub Engineering")}&body=${encodeURIComponent(draft)}`}
              >
                <Mail />
                Open email draft
                <ArrowUpRight />
              </a>
            </Button>
            <Button
              variant="outline"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(draft);
                  setCopied(true);
                  setCopyError(false);
                } catch {
                  setCopied(false);
                  setCopyError(true);
                }
              }}
            >
              {copied ? (
                <>
                  <Check />
                  Copied
                </>
              ) : (
                "Copy inquiry text"
              )}
            </Button>
            <p className="copy-status" role="status">
              {copyError
                ? "Copy is unavailable. You can select and copy the draft text above."
                : copied
                  ? "Your inquiry text was copied."
                  : ""}
            </p>
            <button className="text-link" onClick={() => setDraft("")}>
              Back to edit
            </button>
            <p className="form-note">This website does not send or store your inquiry.</p>
          </div>
        ) : (
          <form className="inquiry-form" onSubmit={prepare}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  ref={nameRef}
                  value={values.name}
                  onChange={updateField}
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  required
                  maxLength={100}
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  value={values.email}
                  onChange={updateField}
                  type="email"
                  autoComplete="email"
                  placeholder="alex@company.com"
                  required
                  maxLength={254}
                />
              </label>
            </div>
            <label>
              What are you looking to build?
              <select name="service" value={values.service} onChange={updateField} required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Website or web platform</option>
                <option>Business software</option>
                <option>Product or desktop application</option>
                <option>Systems or integrations</option>
                <option>Consultancy</option>
                <option>Let’s figure it out together</option>
              </select>
            </label>
            <label>
              A little about your project
              <textarea
                name="message"
                value={values.message}
                onChange={updateField}
                placeholder="What’s the challenge, and what would a great outcome look like?"
                required
                rows={4}
                maxLength={5000}
              />
            </label>
            <Button size="lg" type="submit">
              Prepare my inquiry
              <ArrowUpRight />
            </Button>
            <p className="form-note">You’ll review and send this through your own email app.</p>
          </form>
        )}
      </ModalContent>
    </Dialog.Root>
  );
}
