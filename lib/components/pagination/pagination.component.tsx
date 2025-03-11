import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "../../utils/utils";
import { ButtonProps, buttonVariants } from "../button/button.component";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationButtonProps = {
  isActive?: boolean;
  onClick?: () => void;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"button">;

const PaginationButton = ({
  className,
  isActive,
  size = "icon",
  onClick,
  ...props
}: PaginationButtonProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({ variant: isActive ? "outline" : "ghost", size }),
      className
    )}
    onClick={onClick}
    {...props}
  />
);
PaginationButton.displayName = "PaginationButton";

const PaginationPrevious = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to previous page"
    className={cn("gap-1", className)}
    onClick={onClick}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </PaginationButton>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to next page"
    className={cn("gap-1", className)}
    onClick={onClick}
    {...props}
  >
    <ChevronRight className="h-4 w-4" />
  </PaginationButton>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious onClick={handlePrevious} />
        <PaginationItem>
          <PaginationButton
            isActive={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            1
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            isActive={currentPage === 2}
            onClick={() => setCurrentPage(2)}
          >
            2
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            isActive={currentPage === 3}
            onClick={() => setCurrentPage(3)}
          >
            3
          </PaginationButton>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationButton
            isActive={currentPage === 5}
            onClick={() => setCurrentPage(5)}
          >
            5
          </PaginationButton>
        </PaginationItem>
        <PaginationNext onClick={handleNext} />
      </PaginationContent>
    </Pagination>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton as PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationComponent,
};
