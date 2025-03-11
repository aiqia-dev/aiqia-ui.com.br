// DatePicker.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { DatePicker, DatePickerProps } from "./date-picker.component";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: new Date(),
};

export const CustomDate = Template.bind({});
CustomDate.args = {
  value: new Date(2024, 11, 25), 
};

export const WithoutDate = Template.bind({});
WithoutDate.args = {
  value: undefined, 
};

export const OnChangeExample = Template.bind({});
OnChangeExample.args = {
  value: new Date(),
  onChange: (date) => alert(`Data selecionada: ${format(date, "PPP", { locale: ptBR })}`),
};

export const WithOnChangeAlert = Template.bind({});
WithOnChangeAlert.args = {
  value: new Date(), // Data inicial
  onChange: (date) => alert(`Data selecionada: ${format(date, "PPP", { locale: ptBR })}`), // Exemplo com alerta
};