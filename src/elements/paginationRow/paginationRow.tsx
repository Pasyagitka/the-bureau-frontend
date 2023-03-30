import React from "react";

interface PaginationRowProps {
  activePage: number;
  handleActivePageChange: (page: number) => void;
  total: number;
  pageSize: number;
}
function PaginationRow({ activePage, handleActivePageChange, total, pageSize }: PaginationRowProps) {
  const numberOfPages = Math.ceil(total / pageSize);
  const buttons = Array.from({ length: numberOfPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-row gap-4 my-1 py-2">
      {buttons.map((x, index: number) => (
        <button
          type="button"
          key={index + x}
          className={`${
            index + 1 === activePage && " animate-pulse bg-slate-900 text-slate-50"
          } rounded-full px-2 bg-slate-300`}
          onClick={() => handleActivePageChange(x)}
        >
          {x}
        </button>
      ))}
    </div>
  );
}

export default PaginationRow;
