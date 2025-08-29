import { StoryObj } from "@storybook/react-vite";
import { Heading, HeadingProps } from "./heading.component";

export default {
  title: "Blocks/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    back: {
      control: "boolean",
    },
  },
};

type Story = StoryObj<HeadingProps>;

export const Default: Story = {
  render: (args: HeadingProps) => <Heading {...args}>Default</Heading>,
};

export const Variants: Story = {
  render: (args: HeadingProps) => (
    <div className="flex flex-col gap-5">
      <Heading {...args} variant="h1">
        Heading H1
      </Heading>
      <Heading {...args} variant="h2">
        Heading H2
      </Heading>
      <Heading {...args} variant="h3">
        Heading H3
      </Heading>
      <Heading {...args} variant="h4">
        Heading H4
      </Heading>
      <Heading {...args} variant="h5">
        Heading H5
      </Heading>
      <Heading {...args} variant="h6">
        Heading H6
      </Heading>
    </div>
  ),
};
