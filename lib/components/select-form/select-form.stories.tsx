import { StoryObj } from "@storybook/react";
import { SelectForm, SelectFormProps } from "./select-form.component";
import { useForm } from "react-hook-form";
import { Form } from "../form/form.component";

export default {
  title: "Components/SelectForm",
  component: SelectForm,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    label: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    options: {
      control: "object",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "See [this page](/docs/examples-managing-forms--docs) for more information.",
      },
    },
  },
};

type Story = StoryObj<SelectFormProps>;

export const Default: Story = {
  render: (args: SelectFormProps) => {
    const MyForm = (args: SelectFormProps) => {
      const form = useForm();

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <SelectForm
              {...args}
              name="name"
              label="Nome"
              options={[
                { value: "1", label: "Alice Smith" },
                { value: "2", label: "Bob Johnson" },
              ]}
              placeholder="Selecione"
            />
          </form>
        </Form>
      );
    };

    return (
      <>
        <MyForm {...args} />
      </>
    );
  },
};
