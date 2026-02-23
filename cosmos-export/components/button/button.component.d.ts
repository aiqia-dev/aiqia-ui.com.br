import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "secondary" | "ghost" | "outline" | "ghostDestructive" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "iconSm" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    href?: string;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
export { Button, buttonVariants };
