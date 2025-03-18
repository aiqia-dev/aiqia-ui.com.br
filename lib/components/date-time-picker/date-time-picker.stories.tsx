// DatePicker.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import {
  DateTimePicker,
  DateTimePickerProps,
} from "./date-time-picker.component";

export default {
  title: "Components/DateTimePicker",
  tags: ["autodocs"],
  component: DateTimePicker,
} as Meta;

export const Default: StoryFn<DateTimePickerProps> = (args) => (
  <DateTimePicker {...args} />
);
