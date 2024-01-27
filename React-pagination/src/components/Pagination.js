import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pageNumbers", pageNumbers);
  return (
    <nav className="pagination">
      {pageNumbers.map((number, idx) => (
        <li key={`${idx}-${number}`} className="page-item">
          <a
            className={`page-link ${
              currentPage === number ? "active-page" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
