import { ReactNode } from 'react';
export declare const AsyncSelectForm: ({ name, label, disabled, isLoading, options, placeholder, onSearchChange, getDisplayValue, getOptionValue, renderOption, }: {
    name: string;
    label?: string;
    disabled?: boolean;
    isLoading: boolean;
    options: any[];
    placeholder?: string;
    onSearchChange: (value: string) => void;
    getDisplayValue: (item: any) => string;
    getOptionValue: (item: any) => string;
    renderOption: (item: any) => ReactNode | string;
}) => import("react/jsx-runtime").JSX.Element;
