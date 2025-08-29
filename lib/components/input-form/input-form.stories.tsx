import { StoryObj } from "@storybook/react-vite";
import { InputForm, InputFormProps } from "./input-form.component";
import { useForm } from "react-hook-form";
import { Form } from "../form/form.component";

export default {
  title: "Blocks/InputForm",
  component: InputForm,
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
    mask: {
      control: "text",
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

type Story = StoryObj<InputFormProps>;

export const Default: Story = {
  render: (args: InputFormProps) => {
    const MyForm = (args: InputFormProps) => {
      const form = useForm();

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <InputForm
              {...args}
              name="name"
              placeholder="This field is integrated with react-hook-form"
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
