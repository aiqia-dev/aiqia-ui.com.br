// Skeleton.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { Skeleton } from "./skeleton.component";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as Meta;

const Template: StoryFn = ({ className, ...args }) => (
  <Skeleton {...args} className={className} />
);

export const Default = Template.bind({});
Default.args = {
  className: "w-full h-10 bg-gray-200",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  className: "w-32 h-32 bg-gray-300",
};

export const Circle = Template.bind({});
Circle.args = {
  className: "w-16 h-16 rounded-full bg-gray-300",
};

export const LargeSkeleton = Template.bind({});
LargeSkeleton.args = {
  className: "w-4/5 h-12 bg-gray-200",
};

export const Line = Template.bind({});
Line.args = {
  className: "w-full h-4 bg-gray-200",
};

export const ShortLine = Template.bind({});
ShortLine.args = {
  className: "w-1/2 h-4 bg-gray-200",
};
