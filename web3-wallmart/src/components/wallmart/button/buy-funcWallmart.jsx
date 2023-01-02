import React, { useEffect, useState } from "react";
import { getAbiAddress } from "../../../helpers/helper";
import { getCurrentAccount } from "../../../helpers/helper";
import BuyDataTables from "./buy-datatable";

const FunctionWal = () => {
  const [alldata, setAlldata] = useState([]);

  const handleSubmit = async () => {
    const currentAccount = await getCurrentAccount();
    const contract = await getAbiAddress();

    let getAllData = await contract.methods.getAllProducts().call();
    getAllData = await Promise.all (getAllData.map(async(product)=> {
     const balance =   await contract.methods
     .checkBalance(currentAccount,product.id)
     .call();
      return {...product,balance:balance};
    }))

    setAlldata(getAllData);
    console.log(getAllData);
  };
  useEffect(()=>{
    handleSubmit()
  },[]);
  return (
    <>
    <div>
     
      <BuyDataTables datam={alldata}  />
    </div>
    </>
  );
};

export default FunctionWal;