import { Meta, StoryFn } from "@storybook/react-vite";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./form.component";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../input/input.component";
import { Button } from "../button/button.component";

export default {
  title: "Components/Form",
  tags: ["autodocs"],
  component: Form,
} as Meta;

type FormValues = {
  name: string;
  email: string;
};

const Template: StoryFn = () => {
  const form = useForm<FormValues>({
    defaultValues: { name: "", email: "" },
    mode: "onBlur", // Mostra erros ao perder o foco
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(`Form submitted successfully! \n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, () =>
          alert("Por favor, corrija os erros antes de enviar o formulário.")
        )}
        className="space-y-4"
      >
        <FormField
          name="name"
          control={form.control}
          rules={{ required: "O campo nome é obrigatório." }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" />
              </FormControl>
              <FormDescription>Please enter your full name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          rules={{
            required: "O campo email é obrigatório.",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Digite um endereço de email válido.",
            },
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your email" />
              </FormControl>
              <FormDescription>
                Please enter a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button>Submit</Button>
      </form>
    </Form>
  );
};

export const Default = Template.bind({});
