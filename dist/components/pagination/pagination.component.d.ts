import { ButtonProps } from '../button/button.component';
import * as React from "react";
declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationContent: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & React.RefAttributes<HTMLUListElement>>;
declare const PaginationItem: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React.RefAttributes<HTMLLIElement>>;
type PaginationButtonProps = {
    isActive?: boolean;
    onClick?: () => void;
} & Pick<ButtonProps, "size"> & React.ComponentProps<"button">;
declare const PaginationButton: {
    ({ className, isActive, size, onClick, ...props }: PaginationButtonProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationPrevious: {
    ({ className, onClick, ...props }: React.ComponentProps<typeof PaginationButton>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationNext: {
    ({ className, onClick, ...props }: React.ComponentProps<typeof PaginationButton>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const PaginationComponent: () => import("react/jsx-runtime").JSX.Element;
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationButton as PaginationLink, PaginationNext, PaginationPrevious, PaginationComponent, };
