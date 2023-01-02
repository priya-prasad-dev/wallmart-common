import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { abi, address } from "../../contract/config";
import WalDataTables from "./wal-datatable.component";

const FetchWalProduct = () => {

  const [symbolOn, setSymbolOn] = useState();

  const handleSubmit = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    const Accounts = await web3.eth.getAccounts();
    const meThod = await contract.methods
      .fetchWallmartProducts()
      .call({ from: Accounts[0] });
    setSymbolOn(meThod);
    console.log(meThod);
  };
  useEffect(() => {
    handleSubmit()
  },[]);

  return (
    <>
      <div>
        {/* <button style={{ float: "right " }} type="submit" onClick={DisplayVal}>
          GET
        </button> */}
        <WalDataTables datam={symbolOn} />
      </div>
    </>
  );
};

export default FetchWalProduct;
