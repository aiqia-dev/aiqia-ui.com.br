import { Meta, StoryFn } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./select.component";
import { FormControl } from "../form/form.component";
import { brazillianStates } from "../../utils/brazillian-states";

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: { SelectGroup, SelectValue, SelectTrigger },
} as Meta;

const Template: StoryFn = (args) => {
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

export const Default = Template.bind({});
Default.args = {};
