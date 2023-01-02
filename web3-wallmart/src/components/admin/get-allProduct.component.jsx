import React, { useState,useEffect } from "react";
import Web3 from "web3";
import { abi, address } from "../../contract/config";
import { getCurrentAccount } from "../../helpers/helper";
import DataTables from "./data-table.component";
const Display = () => {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, address);
  const [alldata, setAlldata] = useState([]);

  const DisplayVal = async () => {
   
    const currentAccount = await getCurrentAccount();

    let getAllData = await contract.methods.getAllProducts().call();
    getAllData = await Promise.all (getAllData.map(async(product)=> {
     const balance =   await contract.methods
     .checkBalance(currentAccount,product.id)
     .call();
      return {...product,balance:balance};
      // product.balance = 10;
      // return product;
    }))

    setAlldata(getAllData);
    console.log(getAllData);
 
    
  };
  useEffect(() => {
  DisplayVal()
  },[]);
  return (
    // sx={{ marginLeft: "10%"}}
    <>
    <div>
      {/* <button style={{ float: "right " }}  onClick={DisplayVal}>
        GET
      </button> */}
      <DataTables datam={alldata} />
    </div>
    </>
  );
};

export default Display;
