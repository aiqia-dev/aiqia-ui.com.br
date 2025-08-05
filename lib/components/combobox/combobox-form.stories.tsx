import type { Meta, StoryObj } from "@storybook/react";
import { Combobox, ComboboxOption, ComboBoxProps } from "./combobox.component";
import { useState } from "react";

const meta: Meta<ComboBoxProps> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "O rótulo para o campo de seleção.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    options: {
      description: "A lista de opções a ser exibida no seletor.",
      table: { type: { summary: "ComboboxOption[]" } },
      control: false,
    },
    selected: {
      description: "O valor atualmente selecionado.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    onSelect: {
      description:
        "Função de callback acionada quando uma opção é selecionada.",
      table: { type: { summary: "(value: string) => void" } },
      action: "onSelect",
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
    error: {
      description: "Mensagem de erro.",
      table: { type: { summary: "string" } },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const options: ComboboxOption[] = [
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

export const ComboboxTemplate: Story["render"] = (args) => {
  const [selected, setSelected] = useState<string | undefined>(args.selected);

  return (
    <>
      <Combobox
        {...args}
        options={options}
        label="Usuários"
        placeholder="Buscar usuário..."
        selected={selected}
        onSelect={setSelected}
      />
    </>
  );
};
