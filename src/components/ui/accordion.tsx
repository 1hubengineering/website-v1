import * as React from "react";
import * as Primitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export const Accordion = Primitive.Root;
export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Primitive.Item>) {
  return <Primitive.Item className={cn("accordion-item", className)} {...props} />;
}
export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Header>
      <Primitive.Trigger className={cn("accordion-trigger", className)} {...props}>
        {children}
        <Plus className="size-4 shrink-0 transition-transform" aria-hidden="true" />
      </Primitive.Trigger>
    </Primitive.Header>
  );
}
export function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Content className="accordion-content" {...props}>
      <div className={cn("pb-6 pr-8 text-sm leading-relaxed text-muted-foreground", className)}>
        {children}
      </div>
    </Primitive.Content>
  );
}
