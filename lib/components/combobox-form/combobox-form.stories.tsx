import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ComboboxForm,
  ComboboxFormOption,
  ComboboxFormProps,
} from "./combobox-form.component";
import { useForm } from "react-hook-form";
import { Form } from "../form/form.component";

const meta: Meta<ComboboxFormProps> = {
  title: "Components/ComboboxForm",
  component: ComboboxForm,
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "O nome do campo no formulário.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    label: {
      description: "O rótulo para o campo de seleção.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    options: {
      description: "A lista de opções a ser exibida no seletor.",
      table: { type: { summary: "ComboboxFormOption[]" } },
      control: false,
    },
    placeholder: {
      description: "Texto de placeholder quando nada está selecionado.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    searchPlaceholder: {
      description: "Texto de placeholder para o campo de busca.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    emptyMessage: {
      description: "Mensagem exibida quando não há resultados na busca.",
      table: { type: { summary: "string" } },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options: ComboboxFormOption[] = [
  {
    value: "1",
    label: "Alice Smith",
  },
  {
    value: "2",
    label: "Bob Johnson",
  },
  {
    value: "3",
    label: "Charlie Brown",
  },
  {
    value: "4",
    label: "Diana Prince",
  },
  {
    value: "5",
    label: "Eve Adams",
  },
  {
    value: "6",
    label: "Frank White",
  },
];

export const ComboboxFormTemplate: Story["render"] = (args) => {
  const form = useForm();

  return (
    <Form {...form}>
      <ComboboxForm
        {...args}
        name="name"
        options={options}
        label="Usuários"
        placeholder="Buscar usuário..."
      />
    </Form>
  );
};
