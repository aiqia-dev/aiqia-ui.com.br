import { StoryFn } from "@storybook/react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from "./breadcrumb.component";
import { ChevronRight } from "lucide-react";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ['autodocs'],
}

export const Default: StoryFn = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbList>
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <a href="#">Section</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <a href="#">Subsection</a>
      </BreadcrumbItem>
      <ChevronRight className="text-muted-foreground" />
      <BreadcrumbItem>
        <span>Current Page</span>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
);

