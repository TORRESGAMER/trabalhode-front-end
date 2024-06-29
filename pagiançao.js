import React from 'react';

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
      <span>{currentPage} de {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>Próximo</button>
    </div>
  );
};

export default Pagination;
