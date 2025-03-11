import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "secondary" | "ghost" | "outline" | "ghostDestructive" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface ButtonAttributes extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
interface AnchorAttributes extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
}
export type ButtonProps = (Omit<ButtonAttributes, "variant"> | AnchorAttributes) & {
    asChild?: boolean;
    disabled?: boolean;
    href?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "ghostDestructive" | "link";
    size?: "default" | "sm" | "lg" | "icon";
};
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export { Button, buttonVariants };
