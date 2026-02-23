import { VariantProps } from 'class-variance-authority';
import { default as React } from 'react';
declare const headingVariants: (props?: ({
    variant?: "h2" | "h3" | "h1" | "h4" | "h5" | "h6" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
}
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
export {};
