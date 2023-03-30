import Pagination from "@mui/material/Pagination";

function PaginationWrapper() {
  return <Pagination count={10} page={page} onChange={handleChange} />;
}

export default Pagination;
