import { Meta, StoryFn } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from "./breadcrumb.component";
import { ChevronRight } from "lucide-react";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  subcomponents: { BreadcrumbList, BreadcrumbItem },
} as Meta;

const Template: StoryFn = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbList>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <a href="/section">Section</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <a href="/section/subsection">Subsection</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <span>Current Page</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

export const Default = Template.bind({});
Default.args = {};
