import React from "react";

const Paginations = ({
  handlePaginationClick,
  currentPage,
  itemsPerPage,
  filteredNews,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredNews.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div
      className="pagination"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {pageNumbers.map((pageNumber, index) => (
        <div
          key={index}
          className="pagination__btn"
          style={{ marginInline: "3px" }}
        >
          <button
            key={pageNumber}
            onClick={() => handlePaginationClick(pageNumber)}
            className={currentPage === pageNumber ? "selected" : ""}
            style={{ padding: "5px", width: "30px" }}
          >
            {pageNumber}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Paginations;
