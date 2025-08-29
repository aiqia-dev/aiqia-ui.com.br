import { Meta, StoryFn } from "@storybook/react-vite";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./navigation-menu.component";
import { ListItem } from "..";

export default {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  args: {
    items: [
      {
        label: "Home",
        subItems: ["Overview", "Updates"],
      },
      {
        label: "Products",
        subItems: ["New Arrivals", "Top Sellers", "On Sale"],
      },
      {
        label: "About Us",
        subItems: ["Company Info", "Careers", "Contact"],
      },
    ],
  },
} as Meta;

const Template: StoryFn = ({ items }) => (
  <div className="h-[250px]">
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item: any, index: any) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-hidden focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export const DefaultNavigationMenu = Template.bind({});
DefaultNavigationMenu.args = {};
