import React, { useState } from "react";
import { Button } from "@mui/material";

import Web3 from "web3";

const Connect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        let account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
        window.location.reload()
      }
    } catch (err) {
      console.log("Error : ", err);
    }
  };
// const switchc = async () => {}
  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <>
      {!isConnected && (
        <div>
          <Button onClick={onConnect}> Connect</Button>
        </div>
      )}
{/* padding: " 0px 0px 0px 15%"  */}
      <div style={{padding:"5px 0px" }}>
        {isConnected && (
          <div>
            <h1>You are Connected to Metamask</h1>
            <span style={{ padding: "0px 0px 0px 20%" }}>{ethBalance}</span>
            <Button onClick={onDisconnect}> Disconnect</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Connect;