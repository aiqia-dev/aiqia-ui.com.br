import { Meta, StoryFn } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
} from "./select.component";
import { FormControl } from "../form/form.component";
import { brazillianStates } from "../../utils/brazillian-states";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
};

export default meta;

type Story = StoryFn<typeof Select>;

export const Default: Story = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Select {...args}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {brazillianStates.map((uf: string) => (
            <SelectItem key={uf} value={uf}>
              {uf}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormProvider>
  );
};

export const WithGroup: Story = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Select {...args}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Selecione..." />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </FormProvider>
  );
};
