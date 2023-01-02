import { Box, Button } from "@mui/material";
import React from "react";
import DataTable  from "react-data-table-component";
import { Link } from "react-router-dom";

const DataTables = ({ datam}) => {

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
        name: "Supplier Address",
        selector: (row) => row.supplier,
        sortable: true,
      },
      {
        name: "ProductExpiryDate",
        selector: (row) => row.productExpiryDate,
        sortable: true,
      },
      // {
      //   name: "PriceForCustomer",
      //   selector: (row) => row.priceForCustomer,
      //   sortable: true,
      // },
      {
        name: "SupplierPrice",
        selector: (row) => row.supplierPrice,
        sortable: true,
      },
      {
        name: "id",
        selector: (row) => row.id,
        sortable: true,
      },
      {
        name: "balance",
        selector: (row) => row.balance,
        sortable: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <>
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 10 }}
              component={Link}
              // to={`/sellapp`}
              to={`/sellapp/${row.id}`}
            >
              approve
            </Button>
           
          </>
        ),
      },
    
  ];
  // order: [[1, 'asc']],

  //  const columnss =[ {
  //   name: "minted",
  //   selector: (row) => row.minted,
  //   sortable: true,
  // }];
// const combine = [...columns,...columnss]
  return (
    <>
    <Box style={{ maxWidth: 950, padding: "20px 5px", marginLeft: "20%" }}>
      <DataTable
        title="List"
        columns={columns}
        data={datam}
        // data={countd}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
      />
      </Box>
    </>
  );
};

export default DataTables;


// <Box style={{ maxWidth: 950, padding: "20px 5px", marginLeft: "20%" }}>