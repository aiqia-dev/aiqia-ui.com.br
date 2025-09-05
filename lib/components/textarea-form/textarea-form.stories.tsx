import { StoryObj } from "@storybook/react";
import { TextareaForm, TextareaFormProps } from "./textarea-form.component";
import { useForm } from "react-hook-form";
import { Form } from "../form/form.component";

export default {
  title: "Components/TextareaForm",
  component: TextareaForm,
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

type Story = StoryObj<TextareaFormProps>;

export const Default: Story = {
  render: (args: TextareaFormProps) => {
    const MyForm = (args: TextareaFormProps) => {
      const form = useForm();

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => { })}>
            <TextareaForm
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
