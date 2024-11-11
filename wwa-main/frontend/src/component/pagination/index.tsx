import React from 'react'

interface Props {
  currentPage: number
  totalPages: number
  onChangePage: (page: number) => void
}
export const Pagination = ({
  currentPage,
  totalPages,
  onChangePage
}: Props) => {
  const handlePreviousClick = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1)
    }
  }

  const renderPageNumbers = () => {
    const pages = []
    const ellipsis = (
      <li className="px-3 py-2 leading-tight text-gray-500">...</li>
    )

    // Always show the first page
    pages.push(
      <li key={1}>
        <button
          className={`px-3 py-2 leading-tight ${currentPage === 1 ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          onClick={() => onChangePage(1)}
        >
          1
        </button>
      </li>
    )

    if (currentPage > 3) {
      pages.push(ellipsis)
    }

    // Show the previous, current, and next page
    for (
      let i = Math.max(currentPage - 1, 2);
      i <= Math.min(currentPage + 1, totalPages - 1);
      i++
    ) {
      pages.push(
        <li key={i}>
          <button
            className={`px-3 py-2 leading-tight ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
            onClick={() => onChangePage(i)}
          >
            {i}
          </button>
        </li>
      )
    }

    if (currentPage < totalPages - 2) {
      pages.push(ellipsis)
    }

    // Always show the last page
    if (totalPages > 1) {
      pages.push(
        <li key={totalPages}>
          <button
            className={`px-3 py-2 leading-tight ${currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
            onClick={() => onChangePage(totalPages)}
          >
            {totalPages}
          </button>
        </li>
      )
    }

    return pages
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={handlePreviousClick}
            disabled={currentPage === 1}
            className={`px-3 py-2 ml-0 leading-tight ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 leading-tight ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
