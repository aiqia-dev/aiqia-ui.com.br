import { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea, ScrollBar } from "./scroll-area.component";
import { Skeleton } from "../skeleton/skeleton.component";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  tags: ["autodocs"],
  component: ScrollArea,
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: (args) => (
    <ScrollArea style={{ height: 200 }} {...args}>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton
            className="w-full bg-slate-500"
            style={{ height: 40 }}
            key={i}
          />
        ))}
      </div>
    </ScrollArea>
  ),
};

export const HorizontalScroll: Story = {
  render: (args) => (
    <ScrollArea style={{ height: 100 }} {...args}>
      <div className="flex gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton
            className="bg-slate-500"
            style={{ height: 100, width: 100 }}
            key={i}
          />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
