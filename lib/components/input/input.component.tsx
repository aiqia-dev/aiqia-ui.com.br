import { cn } from "../../utils/utils";
import React from "react";

export type InputProps = (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"] | "textarea";
};

export const Input = React.forwardRef<
  HTMLTextAreaElement | HTMLInputElement,
  InputProps
>(({ className, type, ...props }, ref) => {
  if (type === "textarea") {
    return (
      <textarea
        rows={1}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={cn(
          "flex h-15 w-full rounded-md border bg-input px-3 py-2 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      ref={ref as React.Ref<HTMLInputElement>}
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border bg-input px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-input file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});
