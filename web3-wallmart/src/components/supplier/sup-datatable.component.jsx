import React from "react";

import DataTable from "react-data-table-component";
const SupDataTables = ({ datam }) => {
  // const [datam, setData] = useState([]);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
        name: "Supplier",
        selector: (row) => row.supplier,
        sortable: true,
      },
      {
        name: "ProductExpiryDate",
        selector: (row) => row.productExpiryDate,
        sortable: true,
      },
      {
        name: "PriceForCustomer",
        selector: (row) => row.priceForCustomer,
        sortable: true,
      },
      {
        name: "supplierPrice",
        selector: (row) => row.supplierPrice,
        sortable: true,
      },
    // {
    //   name: "List",
    //   selector: (row) => String(row.listing),
    //   sortable: true,
    // },
   
  ];
  return (
    <>
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
    </>
  );
};

export default SupDataTables;
