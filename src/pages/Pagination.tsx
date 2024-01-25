import React, { useState } from 'react'

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage }) => {
    
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const renderPaginationInfo = () => {
        const startIndex = (currentPage - 1) * itemsPerPage + 1;
        const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems)

        return `Showing ${startIndex} - ${endIndex} of ${totalItems}`
    }
  return (
    <div style={{marginTop: "20px"}}>
        <span>{renderPaginationInfo()}</span>
        <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
        </button>
        <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
        </button>
    </div>
  )
}

export default Pagination