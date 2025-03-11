import { Meta, StoryFn } from "@storybook/react";
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

export default {
  title: "Components/Form",
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
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <input
                  {...field}
                  placeholder="Enter your name"
                  className={`w-full p-2 border rounded-md ${
                    fieldState.error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
              </FormControl>
              <FormDescription>
                Please enter your full name.
              </FormDescription>
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
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <input
                  {...field}
                  placeholder="Enter your email"
                  className={`w-full p-2 border rounded-md ${
                    fieldState.error
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
              </FormControl>
              <FormDescription>
                Please enter a valid email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export const Default = Template.bind({});
