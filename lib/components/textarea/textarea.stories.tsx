import { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea.component";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  render: (args) => <Textarea {...args} placeholder="Placeholder" />,
};
