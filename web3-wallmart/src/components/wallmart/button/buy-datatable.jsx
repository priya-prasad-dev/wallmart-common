import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const BuyDataTables = ({ datam}) => {

  const columns = [
    {
      name: "TokenId",
      selector: (row) => row.id,
      sortable: true,
    },
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
      {
        name: "Quantity",
        selector: (row) => row.quantity,
        sortable: true,
      },
      {
        name: "SupplierPrice",
        selector: (row) => row.supplierPrice,
        sortable: true,
      },
      {
        name: "Action",
        cell: (row) => (
          <>
            {/* <Link to={`/view/${row._id}`}> */}
              {/* <Button> View</Button> */}
            {/* </Link> */}
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 10 }}
              component={Link}
              to={`/walreq/${row.id}`}
            >
              Req
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{ marginRight: 10 }}
              component={Link}
              to={`/purwal/${row.id}`}
            >
              Buy
            </Button>
           
          </>
        ),
      },
    
  ];
   return (
    <>
    {/* <Box style={{ maxWidth: 750, padding: "20px 5px", margin: "0 auto" }}> */}
    <Box style={{ maxWidth: 950, padding: "20px 5px", marginLeft: "20%" }}>

      <DataTable
        title="List"
        columns={columns}
        data={datam}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        // dense
        selectableRowsHighlight
        highlightOnHover
        subHeader
        // subHeaderComponent={
        //   <TextField
        //     type="search"
        //     placeholder="Search"
        //     value={[filterVal]}
        //     onInput={(e) => handleFilter(e)}
        //   />
        // }
      />
    </Box>
    </>
  );
};

export default BuyDataTables;
