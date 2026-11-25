import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { ModalContent, ProjectInquiry } from "@/components/project-inquiry";
import { InquiryContext } from "@/components/inquiry-context";
import { findPageMeta } from "@/content/pages";

const base = import.meta.env.BASE_URL;

// Home-page anchors for now; replaced by page routes in the next steps.
const nav = [
  { label: "Expertise", id: "services" },
  { label: "Our work", id: "work" },
  { label: "About us", id: "about" },
  { label: "Our process", id: "process" },
];

export function Layout() {
  // The server renders the default theme; the real one is read after hydration.
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  // Keep the head in sync after client-side navigation.
  useEffect(() => {
    const meta = findPageMeta(pathname);
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    if (!hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  useEffect(() => {
    // Initial fragments can be resolved before React mounts the target section.
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;
    let cancelled = false;
    void document.fonts.ready.then(() => {
      if (!cancelled) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "instant", block: "start" });
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    nav.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.style.colorScheme = next;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#0b1f3b" : "#ffffff");
    try {
      localStorage.setItem("andhub-theme", next);
    } catch {
      /* Storage is optional. */
    }
  }

  return (
    <InquiryContext.Provider value={() => setInquiryOpen(true)}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header" id="top">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav.map((item) => (
              <a
                key={item.id}
                className={active === item.id ? "active" : ""}
                href={`${base}#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <span className="header-divider" />
            <Button className="header-cta" size="sm" onClick={() => setInquiryOpen(true)}>
              Let’s talk
              <ArrowUpRight />
            </Button>
            <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
              <Dialog.Trigger
                ref={menuButtonRef}
                className="menu-toggle"
                aria-label="Open navigation"
              >
                <span />
                <span />
              </Dialog.Trigger>
              <ModalContent className="mobile-menu">
                <Dialog.Title>Explore AndHub</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Navigate to a section of the website.
                </Dialog.Description>
                <nav aria-label="Mobile navigation">
                  {nav.map((item) => (
                    <a
                      key={item.id}
                      href={`${base}#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                      <ArrowUpRight size={21} />
                    </a>
                  ))}
                  <Button
                    onClick={() => {
                      setMenuOpen(false);
                      setInquiryOpen(true);
                    }}
                  >
                    Start a project
                    <ArrowUpRight />
                  </Button>
                </nav>
              </ModalContent>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <Brand footer />
              <p>
                Ideas. Engineered.
                <br />
                Lebu, Addis Ababa, Ethiopia.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <span>EXPLORE</span>
                {nav.map((item) => (
                  <a href={`${base}#${item.id}`} key={item.id}>
                    {item.label}
                  </a>
                ))}
              </div>
              <div>
                <span>LET’S CONNECT</span>
                <button onClick={() => setInquiryOpen(true)}>
                  Start a project
                  <ArrowUpRight size={13} />
                </button>
                <a
                  href="https://github.com/1hubengineering"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                </a>
                <a href={`${base}#faq`}>Questions & answers</a>
                <a href="mailto:info@1hubengineering.com">info@1hubengineering.com</a>
                <a href="tel:+251913231123">+251 913 231 123</a>
                <a href="tel:+251922964576">+251 922 964 576</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} AndHub Engineering PLC.</span>
            <span className="footer-signoff">
              <span className="status-dot" /> IDEAS. ENGINEERED.
            </span>
            <a href="#top">
              Back to top
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </footer>
      <ProjectInquiry
        open={inquiryOpen}
        onOpenChange={setInquiryOpen}
        returnFocusFallback={menuButtonRef}
      />
    </InquiryContext.Provider>
  );
}
