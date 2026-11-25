import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <section className="section" aria-labelledby="not-found-title">
      <div className="container">
        <span className="eyebrow">ERROR 404</span>
        <h1 id="not-found-title">This page does not exist.</h1>
        <p>The link may be old, or the address may have a typing error.</p>
        <Button size="lg" asChild>
          <Link to="/">
            Go to the home page
            <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
