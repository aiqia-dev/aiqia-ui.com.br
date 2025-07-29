import type { Meta, StoryObj } from "@storybook/react";
import { AsyncSelect, AsyncSelectProps } from "./async-select.component";
import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

type User = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

const meta: Meta<AsyncSelectProps<User>> = {
  title: "Components/AsyncSelect",
  component: AsyncSelect,
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "A lista de opções a ser exibida no seletor.",
      table: { type: { summary: "T[]" } },
      control: false,
    },
    isLoading: {
      description: "Indica se os dados estão sendo carregados (fetch).",
      table: { type: { summary: "boolean" } },
      control: "boolean",
    },
    renderOption: {
      description: "Função para renderizar cada item da lista de opções.",
      table: { type: { summary: "(option: T) => React.ReactNode" } },
      control: false,
    },
    getOptionValue: {
      description: "Função para definir o valor único de uma opção.",
      table: { type: { summary: "(option: T) => string" } },
      control: false,
    },
    getDisplayValue: {
      description:
        "Função para definir o valor de exibição da opção selecionada.",
      table: { type: { summary: "(option: T) => React.ReactNode" } },
      control: false,
    },
    value: {
      description:
        "O valor atualmente selecionado. Se não existir, nada será selecionado.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    onChange: {
      description: "Callback acionado quando uma opção é selecionada.",
      table: { type: { summary: "(value: string) => void" } },
      action: "onChange",
    },
    onSearchChange: {
      description: "Callback acionado quando o termo de busca muda.",
      table: { type: { summary: "(value: string) => void" } },
      control: false,
    },
    label: {
      description: "O rótulo para o campo de seleção.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    placeholder: {
      description: "Texto de placeholder quando nada está selecionado.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    disabled: {
      description: "Desabilita o componente.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    noResultsMessage: {
      description: "Mensagem exibida quando não há resultados na busca.",
      table: { type: { summary: "string" } },
      control: "text",
    },
    clearable: {
      description: "Permite limpar a seleção.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const allUsers: User[] = [
  {
    id: "1",
    name: "Alice Smith",
    role: "Software Engineer",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: "2",
    name: "Bob Johnson",
    role: "Product Manager",
    avatar: "https://github.com/vercel.png",
  },
  {
    id: "3",
    name: "Charlie Brown",
    role: "UX Designer",
    avatar: "https://github.com/shuding.png",
  },
  {
    id: "4",
    name: "Diana Prince",
    role: "DevOps Engineer",
    avatar: "https://github.com/pacocoursey.png",
  },
  {
    id: "5",
    name: "Eve Adams",
    role: "Data Scientist",
    avatar: "https://github.com/rauchg.png",
  },
  {
    id: "6",
    name: "Frank White",
    role: "QA Engineer",
    avatar: "https://github.com/thorwebdev.png",
  },
];

export const AsyncSelectTemplate: Story["render"] = (args) => {
  const [selectedUser, setSelectedUser] = useState<string | undefined>(
    args.value
  );
  const [searchValue, setSearchValue] = useState("");
  const term = useDebounce(searchValue, 300);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<User[]>([]);

  const simulateRequest = (query?: string): Promise<User[]> => {
    setIsLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!query) {
          resolve(allUsers);
        } else {
          const filteredUsers = allUsers.filter(
            (user) =>
              user.name.toLowerCase().includes(query.toLowerCase()) ||
              user.role.toLowerCase().includes(query.toLowerCase())
          );
          resolve(filteredUsers);
        }
        setIsLoading(false);
      }, 500); // Simulate network delay
    });
  };

  useEffect(() => {
    simulateRequest(term).then((data) => setOptions(data));
  }, [term]);

  return (
    <>
      <AsyncSelect<User>
        {...args}
        options={options}
        isLoading={isLoading}
        onSearchChange={setSearchValue}
        renderOption={(user) => user.name}
        getOptionValue={(user) => user.id}
        getDisplayValue={(user) => user.name}
        noResultsMessage="Nenhum usuário encontrado"
        label="Usuários"
        placeholder="Buscar usuário..."
        value={selectedUser || ""}
        onChange={setSelectedUser}
      />
    </>
  );
};
