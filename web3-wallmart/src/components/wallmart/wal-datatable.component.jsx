import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

const WalDataTables = ({ datam }) => {
  // const [datam, setData] = useState([]);

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
      {
        name: "SupplierPrice",
        selector: (row) => row.supplierPrice,
        sortable: true,
      },
      {
        name: "PriceForCustomer",
        selector: (row) => row.priceForCustomer,
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
            approve
          </Button>
          {/* <Button
            color="primary"
            variant="contained"
            style={{ marginRight: 10 }}
            component={Link}
            to={`/purwal/${row.id}`}
          >
            Buy
          </Button> */}
         
        </>
        ),
      },
     
     
    // {
    //   name: "List",
    //   selector: (row) => String(row.listing),
    //   sortable: true,
    // },
   
  ];
  return (
    <>
    <Box style={{ maxWidth: 950, padding: "20px 5px", marginLeft: "20%" }}>
      <DataTable
      style={{ paddingleft: "100%"}}
    //   style="padding-left: 40%" 
        title="List"
        columns={columns}
        data={datam}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
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

export default WalDataTables;
