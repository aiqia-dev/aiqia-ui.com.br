import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Popover, PopoverTrigger, PopoverContent } from './popover.component';

const meta: Meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-sm">
          Open Popover
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="text-sm">This is a popover content</div>
      </PopoverContent>
    </Popover>
  ),
};

export const CustomPosition: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-4 py-2 text-white bg-green-500 rounded-sm">
          Open Popover (Top)
        </button>
      </PopoverTrigger>
      <PopoverContent side="top" align="center">
        <div className="text-sm">Popover positioned at the top</div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithCustomContent: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className="px-4 py-2 text-white bg-red-500 rounded-sm">
            Toggle Popover
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="text-sm">
            <strong>Custom Content:</strong> This popover can show more detailed content, such as forms, images, or custom components.
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};
