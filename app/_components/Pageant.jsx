"use client";

import React, { useState } from 'react';
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const Pageant = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <BasePagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              
              onClick={() => handlePageChange(index + 1)}
              isActive={index + 1 === currentPage}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)} />
        </PaginationItem>
      </PaginationContent>
    </BasePagination>
  );
};

export default Pageant;
