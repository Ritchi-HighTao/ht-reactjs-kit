import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

import './HTPagination.scss';

const HTPagination = (props) => {
  const {
    data,
  } = props;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return (
    <TablePagination
      count={data}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default HTPagination;
