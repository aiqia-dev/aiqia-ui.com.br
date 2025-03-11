import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./pagination.component";

export default {
  title: "Components/Pagination",
  component: Pagination,
};

const Template: any = (args: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationPrevious onClick={handlePrevious} />
        <PaginationItem>
          <PaginationLink isActive={currentPage === 1} onClick={() => setCurrentPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 2} onClick={() => setCurrentPage(2)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 3} onClick={() => setCurrentPage(3)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationEllipsis />
        <PaginationItem>
          <PaginationLink isActive={currentPage === 5} onClick={() => setCurrentPage(5)}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationNext onClick={handleNext} />
      </PaginationContent>
    </Pagination>
  );
};

export const Default = Template.bind({});
Default.args = {};
