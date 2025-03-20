import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./separator.component";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  tags: ["autodocs"],
  component: Separator,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (args) => (
    <>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        perspiciatis explicabo distinctio praesentium fugit aliquam in minima
        aut vero reiciendis, deserunt, nisi, repellendus sapiente facilis
        recusandae sit nemo ipsam pariatur?
      </p>
      <Separator style={{ margin: "20px 0" }} {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, veniam
        voluptas, quasi ab eaque laborum optio deserunt recusandae, tempora
        maxime officia sit dolor iusto nam quas explicabo id libero eligendi!
      </p>
    </>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <ul className="flex gap-2 h-5">
      <li>Item 1</li>
      <Separator orientation="vertical" {...args} />
      <li>Item 2</li>
      <Separator orientation="vertical" {...args} />
      <li>Item 3</li>
    </ul>
  ),
};
