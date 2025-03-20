import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./table.component";

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};

interface TableProps {
  caption: string;
  rows: any[];
  columns: any[];
  className: string;
}

const Template: any = ({ caption, rows, columns, className }: TableProps) => (
  <Table className={className}>
    {caption && <TableCaption>{caption}</TableCaption>}
    <TableHeader>
      <TableRow>
        {columns.map((col, idx) => (
          <TableHead key={idx}>{col}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((row, rowIndex) => (
        <TableRow key={rowIndex}>
          {row.map((cell: any, cellIndex: any) => (
            <TableCell key={cellIndex}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  caption: "My Table",
  columns: ["Header 1", "Header 2", "Header 3"],
  rows: [
    ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
    ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
  ],
  className: "",
};

export const TableWithCaption = Template.bind({});
TableWithCaption.args = {
  caption: "My table with caption",
  columns: ["Header 1", "Header 2", "Header 3"],
  rows: [
    ["Row 1, Cell 1", "Row 1, Cell 2", "Row 1, Cell 3"],
    ["Row 2, Cell 1", "Row 2, Cell 2", "Row 2, Cell 3"],
  ],
  className: "",
};

export const TableWithDifferentStyles = Template.bind({});
TableWithDifferentStyles.args = {
  caption: "Styled Table",
  columns: ["Styled Header 1", "Styled Header 2", "Styled Header 3"],
  rows: [
    ["Styled Row 1, Cell 1", "Styled Row 1, Cell 2", "Styled Row 1, Cell 3"],
    ["Styled Row 2, Cell 1", "Styled Row 2, Cell 2", "Styled Row 2, Cell 3"],
  ],
  className: "shadow-lg rounded-lg",
};
