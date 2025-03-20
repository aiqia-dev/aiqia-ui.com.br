import { StoryObj } from "@storybook/react";
import { Switch } from "./switch.component";
import { Label } from "../label/label.component";

export default {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};
