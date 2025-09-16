import {
  AsyncSelect,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '..';
import type { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

export const AsyncSelectForm = ({
  name,
  label,
  disabled,
  isLoading,
  options,
  placeholder = 'Selecione',
  onSearchChange,
  getDisplayValue,
  getOptionValue,
  renderOption,
}: {
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
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>{label}</FormLabel>}
          <AsyncSelect
            options={options}
            value={field.value}
            placeholder={placeholder}
            onSearchChange={onSearchChange}
            getDisplayValue={getDisplayValue}
            getOptionValue={getOptionValue}
            renderOption={renderOption}
            onChange={(value) => field.onChange(value)}
            isLoading={isLoading}
            disabled={disabled}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
