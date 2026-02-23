import { default as React } from 'react';
export type InputProps = (React.InputHTMLAttributes<HTMLInputElement> | React.TextareaHTMLAttributes<HTMLTextAreaElement>) & {
    type?: React.InputHTMLAttributes<HTMLInputElement>["type"] | "textarea";
};
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
