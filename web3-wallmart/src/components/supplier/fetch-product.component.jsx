import React, { useState } from "react";
import Web3 from "web3";
import { abi, address } from "../../contract/config";
import SupDataTables from "./sup-datatable.component";
const FetchSupProduct = () => {
  const [symbolOn, setSymbolOn] = useState();

  const DisplayVal = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    const Accounts = await web3.eth.getAccounts();
    const meThod = await contract.methods
      .fetchSupplierProducts()
      .call({ from: Accounts[0] });
    setSymbolOn(meThod);
    console.log(meThod);
  };
  
  return (
    <>
      <div>
        <button style={{ float: "right " }} type="submit" onClick={DisplayVal}>
          GET
        </button>
        <SupDataTables datam={symbolOn} />
      </div>
    </>
  );
};

export default FetchSupProduct;
