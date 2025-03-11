import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent } from "./dropdown-menu.component";

const meta: Meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-sm">Open Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem>
          Item 2
        </DropdownMenuItem>
        <DropdownMenuItem>
          Item 3
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-green-500 rounded-sm">Open Checkbox Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuCheckboxItem checked={true}>
          Option 1
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false}>
          Option 2
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithRadio: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-red-500 rounded-sm">Open Radio Menu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioItem value="option1">
          Option 1
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="option2">
          Option 2
        </DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-purple-500 rounded-sm">Open Menu with Submenu</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Item 1
        </DropdownMenuItem>
        <DropdownMenuItem>
          Item 2
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            Submenu
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              Subitem 1
            </DropdownMenuItem>
            <DropdownMenuItem>
              Subitem 2
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithLabelAndSeparator: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-orange-500 rounded-sm">Open Menu with Label</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Group 1</DropdownMenuLabel>
        <DropdownMenuItem>Item 1</DropdownMenuItem>
        <DropdownMenuItem>Item 2</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Group 2</DropdownMenuLabel>
        <DropdownMenuItem>Item 3</DropdownMenuItem>
        <DropdownMenuItem>Item 4</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithShortcut: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-white bg-teal-500 rounded-sm">Open Menu with Shortcut</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Item 1
          <DropdownMenuShortcut>Ctrl + A</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Item 2
          <DropdownMenuShortcut>Ctrl + B</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
