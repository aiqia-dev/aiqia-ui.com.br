import { StoryObj } from "@storybook/react";
import { Calendar, CalendarProps } from "./calendar.component";

type Story = StoryObj<CalendarProps>;

export default {
  title: "Components/Calendar",
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: "text",
      description: "Classes CSS adicionais para personalizar o componente.",
      table: {
        type: { summary: "string" },
      },
    },
    showOutsideDays: {
      control: "boolean",
      description: "Exibe dias fora do mês atual no calendário.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    mode: {
      control: {
        type: "select",
      },
      options: ["single", "multiple", "range"],
      description: "Define o modo de seleção de datas.",
      table: {
        type: { summary: "single | multiple | range" },
        defaultValue: { summary: "single" },
      },
    },
    selected: {
      control: "object",
      description: "Define as datas selecionadas no calendário.",
      table: {
        type: { summary: "Date | Date[] | { from: Date; to: Date }" },
      },
    },
    onSelect: {
      action: "selected",
      description: "Callback executado quando uma data é selecionada.",
      table: {
        type: { summary: "(date: Date | Date[] | { from: Date; to: Date }) => void" },
      },
    },
  },
};

export const Default: Story = {
  render: (args: CalendarProps) => (
    <Calendar {...args} />
  )
};

// export const Default = Template.bind({});
// Default.args = {
//   showOutsideDays: true,
// };

// export const SingleDateSelection = Template.bind({});
// SingleDateSelection.args = {
//   mode: "single",
//   selected: new Date(),
//   showOutsideDays: true,
// };

// export const MultipleDateSelection = Template.bind({});
// MultipleDateSelection.args = {
//   mode: "multiple",
//   selected: [new Date(), new Date(Date.now() + 86400000)],
//   showOutsideDays: true,
// };

// export const DateRangeSelection = Template.bind({});
// DateRangeSelection.args = {
//   mode: "range",
//   selected: {
//     from: new Date(),
//     to: new Date(Date.now() + 7 * 86400000),
//   },
//   showOutsideDays: true,
// };
